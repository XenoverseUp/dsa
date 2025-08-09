/* Setup */

import type { Tagged } from "@helpers/types";

type Integer = Tagged<string, "Integer">;

/* Solution */

function recIntMult(x: Integer, y: Integer): Integer {
  if (x.length === 1 && y.length === 1) return multSingleDigitInt(x, y);

  let level: number;
  [x, y, level] = evenize(x, y);

  const [a, b] = partition(x);
  const [c, d] = partition(y);

  const result = sumInt(
    powerize(recIntMult(a, c), level), // 10^n * ac
    powerize(sumInt(recIntMult(a, d), recIntMult(b, c)), level / 2), // 10^(n/2) * (ad + bc)
    recIntMult(b, d), // bd
  );

  return (result.replace(/^0+/, "") as Integer) || makeInteger(0);
}

/* Helpers */

function partition(x: Integer): [Integer, Integer] {
  const { length } = x;
  return [x.substring(0, length / 2) as Integer, x.substring(length / 2) as Integer];
}

function powerize(x: Integer, tensPower: number): Integer {
  return (x + new Array(tensPower).fill("0").join("")) as Integer;
}

function evenize(x: Integer, y: Integer): [Integer, Integer, number] {
  let level = Math.max(x.length, y.length);
  if (level % 2 === 1) level += 1;

  return [x.padStart(level, "0") as Integer, y.padStart(level, "0") as Integer, level];
}

function makeInteger(x: number): Integer {
  return Math.floor(x).toString() as Integer;
}

function multSingleDigitInt(x: Integer, y: Integer): Integer {
  const n = Math.max(x.length, y.length);

  if (n !== 1) throw new Error("Didn't match what is expected: Expected single digit integers.");

  return (Number(x) * Number(y)).toString() as Integer;
}

function sumInt(...args: Integer[]): Integer {
  const total = args.reduce((sum, val) => sum + Number(val), 0);
  return makeInteger(total);
}

(function main() {
  const x = makeInteger(30);
  const y = makeInteger(4040);

  const result = recIntMult(x, y);

  console.log(result);
})();
