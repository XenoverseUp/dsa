import type { Integer } from "./utils";
import { evenize, makeInteger, multSingleDigitInt, partition, powerize, subtractInt, sumInt } from "./utils";

function karatsuba(x: Integer, y: Integer): Integer {
  if (x.length === 1 && y.length === 1) return multSingleDigitInt(x, y);

  let level: number;
  [x, y, level] = evenize(x, y);

  const [a, b] = partition(x);
  const [c, d] = partition(y);

  // We're performing 3 recursive calls (ac, bd, (a+b)(c+d)) unlike rec-int-mult.

  const ac = karatsuba(a, c);
  const bd = karatsuba(b, d);

  // (a + b)(c + d) = ac + ad + bc + bd => (ad + bc) = (a + b)(c + d)  - ac - bd
  const ad_plus_bc = subtractInt(karatsuba(sumInt(a, b), sumInt(c, d)), ac, bd);

  const result = sumInt(
    powerize(ac, level), // 10^n * ac
    powerize(ad_plus_bc, level / 2), // 10^(n/2) * (ad + bc)
    bd, // bd
  );

  return (result.replace(/^0+/, "") as Integer) || makeInteger(0);
}

(function main() {
  const x = makeInteger(30);
  const y = makeInteger(4040);

  const result = karatsuba(x, y);

  console.log(result);
})();
