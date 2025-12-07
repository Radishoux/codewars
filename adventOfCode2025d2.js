
let input = [
  "199617-254904",
  "7682367-7856444",
  "17408-29412",
  "963327-1033194",
  "938910234-938964425",
  "3207382-3304990",
  "41-84",
  "61624-105999",
  "1767652-1918117",
  "492-749",
  "85-138",
  "140-312",
  "2134671254-2134761843",
  "2-23",
  "3173-5046",
  "16114461-16235585",
  "3333262094-3333392446",
  "779370-814446",
  "26-40",
  "322284296-322362264",
  "6841-12127",
  "290497-323377",
  "33360-53373",
  "823429-900127",
  "17753097-17904108",
  "841813413-841862326",
  "518858-577234",
  "654979-674741",
  "773-1229",
  "2981707238-2981748769",
  "383534-468118",
  "587535-654644",
  "1531-2363"
]

function findIds(input) {
  let inValidIds = [];

  for (let line of input) {
    let parts = line.split("-");
    let start = parseInt(parts[0]);
    let end = parseInt(parts[1]);
    console.log(`Checking range: ${start} to ${end}`);

    for (let num = start; num <= end; num++) {
      if (num.toString().length % 2 == 0) {
        let firstHalf = num.toString().substring(0, num.toString().length / 2);
        let secondHalf = num.toString().substring(num.toString().length / 2);
        if (firstHalf == secondHalf) {
          inValidIds.push(num);
          console.log(`Found invalid ID step 1 : ${num} in range ${line}`);
          continue;
        }
      }


      for (let splitPos = 1; splitPos < num.toString().length /2; splitPos++) {
        let leftPart = num.toString().substring(0, splitPos);
        let rightPart = num.toString().substring(splitPos);

        let leftSplit = rightPart.split(leftPart);
        // if leftSplit all parts are empty strings
        if ((leftSplit.every(part => part === "")) && leftSplit.length > 1) {
            inValidIds.push(num);
            console.log(`Found invalid ID step 2 : ${num} in range ${line}`);
            break;
          }
        }
      }
  }

  console.log(`Total invalid IDs found: ${inValidIds.length}`);
  console.log(`Invalid IDs: ${inValidIds.join(", ")}`);
  // add all the invalid IDs together
  return inValidIds.reduce((a, b) => a + b, 0);
}

console.log(findIds(input));

