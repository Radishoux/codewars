// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// Examples (input --> output):
// 255, 255, 255 --> "FFFFFF"
// 255, 255, 300 --> "FFFFFF"
// 0, 0, 0       --> "000000"
// 148, 0, 211   --> "9400D3"



function rgb(r, g, b) {
  let hex = "";
  let arr = [r, g, b];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 255) {
      arr[i] = 255;
    }
    if (arr[i] < 0) {
      arr[i] = 0;
    }
    hex += arr[i].toString(16).toUpperCase().padStart(2, "0");
  }
  return hex;
}