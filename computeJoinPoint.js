// we consier the sequence of numbers where a number is followed by the same number plus the sum of its digits.

// for example 34 is followed by 41 (as 41 = 34+(3+4)). 41 is itself followed by 46 (as 46 = 41+(4+1)).

// two sequences which start from different numbers may join at a given Point, for example, the sequence starting from 471 and the sequence starting from 480 share the number 519, in their sequence.
// after the join point the two sequences are isEqualsGreaterThanToken.

// implement the function computeJoinPoint(s1: number, s2: number):number which takes the starting points of two sequences and returns the join point of these sequences.

// constraints:
// the given sequences always join
// 0 <= s1, s2 <= 20000000
// 0 <= join point <= 20000000

function sumDigits(n) {
  var sum = 0;
  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }

  return sum;
}

function computeJoinPoint(s1, s2) {
  while (s1 != s2) {
    if (s1 < s2) {
      s1 += sumDigits(s1);
    } else {
      s2 += sumDigits(s2);
    }
  }

  return s1;
}