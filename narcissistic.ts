export function narcissistic(value: number): boolean {
  // your code here
  let str = value.toString()
  let tab = str.split('')
  let ntab = tab.map((el) => Number(el))
  ntab = ntab.map((el) => Math.pow(el, str.length))
  let sum = ntab.reduce((acc, el) => acc + el, 0)
  return sum === value;
}
