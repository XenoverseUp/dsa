import { evenize, makeInteger, multSingleDigitInt, partition, powerize, sumInt, type Integer } from "./utils";

function recIntMult(x: Integer, y: Integer): Integer {
  if (x.length === 1 && y.length === 1) return multSingleDigitInt(x, y);

  let level: number;
  [x, y, level] = evenize(x, y);

  const [a, b] = partition(x);
  const [c, d] = partition(y);

  // We're performing 4 recursive calls (ac, ad, bc, bd).

  const ac = recIntMult(a, c);
  const ad = recIntMult(a, d);
  const bc = recIntMult(b, c);
  const bd = recIntMult(b, d);

  const result = sumInt(
    powerize(ac, level), // 10^n * ac
    powerize(sumInt(ad, bc), level / 2), // 10^(n/2) * (ad + bc)
    bd, // bd
  );

  return (result.replace(/^0+/, "") as Integer) || makeInteger(0);
}

(function main() {
  const x = makeInteger(30);
  const y = makeInteger(4040);

  const result = recIntMult(x, y);

  console.log(result);
})();
