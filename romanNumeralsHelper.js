// Write two functions that convert a roman numeral to and from an integer value. Multiple roman numeral values will be tested for each function.

// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

// Input range : 1 <= n < 4000

// In this kata 4 should be represented as IV, NOT as IIII (the "watchmaker's four").

// Examples
// to roman:
// 2000 -> "MM"
// 1666 -> "MDCLXVI"
// 1000 -> "M"
//  400 -> "CD"
//   90 -> "XC"
//   40 -> "XL"
//    1 -> "I"

// from roman:
// "MM"      -> 2000
// "MDCLXVI" -> 1666
// "M"       -> 1000
// "CD"      -> 400
// "XC"      -> 90
// "XL"      -> 40
// "I"       -> 1
// Help
// Symbol	Value
// I	1
// IV	4
// V	5
// X	10
// L	50
// C	100
// D	500
// M	1000

class RomanNumerals {
  static toRoman(num) {

    let arr = num.toString().split('');

    for (arr.length; arr.length < 4; arr.unshift(0));
    arr.map((el) => parseInt(el));

    // col 1

    var m = "";
    for (let i = 0; i < arr[0]; i++) {
      m += 'M';
    }

    // col 2
    var c = "";
    if (arr[1] < 4) {
      for (let i = 0; i < arr[1]; i++) {
        c += 'C';
      }
    } else if (arr[1] == 4) {
      c = 'CD';
    } else if (arr[1] == 5) {
      c = 'D';
    } else if (arr[1] > 5 && arr[1] < 9) {
      c = 'D'
      for (let i = 0; i < arr[1] - 5; i++) {
        c += 'C';
      }
    } else if (arr[1] == 9) {
      c = "CM";
    }

    // col 3

    var x = "";
    if (arr[2] < 4) {
      for (let i = 0; i < arr[2]; i++) {
        x += 'X';
      }
    } else if (arr[2] == 4) {
      x = 'XL';
    } else if (arr[2] == 5) {
      x = 'L';
    } else if (arr[2] > 5 && arr[2] < 9) {
      x = 'L'
      for (let i = 0; i < arr[2] - 5; i++) {
        x += 'X';
      }
    } else if (arr[2] == 9) {
      x = 'XC';
    }

    // col 4

    var u = "";
    if (arr[3] < 4) {
      for (let o = 0; o < arr[3]; o++) {
        u += 'I';
      }
    } else if (arr[3] == 4) {
      u = 'IV';
    } else if (arr[3] == 5) {
      u = 'V';
    } else if (arr[3] > 5 && arr[3] < 9) {
      u = 'V'
      for (let o = 0; o < arr[3] - 5; o++) {
        u += "I";
      }
    } else if (arr[3] == 9) {
      u = 'IX';
    }

    console.log(arr);
    console.log(m, c, x, u)

    return m + c + x + u;
   }

  static fromRoman(str) {

    var rev = str.split('').reverse().join('');

    var result = 0;


    console.log(rev);
    for (let i = 0; i < rev.length; i++) {
      if (rev[i] == 'I') {
        result = result < 5 ? result + 1 : result - 1;
      } else if (rev[i] == 'V') {
        result += 5;
      } else if (rev[i] == 'X') {
        result = result < 50 ? result + 10 : result - 10;
      } else if (rev[i] == 'L') {
        result += 50;
      } else if (rev[i] == 'C') {
        result = result < 500 ? result + 100 : result - 100;
      } else if (rev[i] == 'D') {
        result += 500;
      } else if (rev[i] == 'M') {
        result += 1000;
      }
    }

    return result;


  }
}