// can also use gcd from mathjs
export default function isRelativePrime(a: number, b: number): boolean {
  let t: number;
  while (b !== 0) {
    t = b;
    b = a % b;
    a = t;
  }
  return a === 1;
}
