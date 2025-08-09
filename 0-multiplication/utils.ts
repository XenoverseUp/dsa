import type { Tagged } from "@helpers/types";

export type Integer = Tagged<string, "Integer">;

export function partition(x: Integer): [Integer, Integer] {
  const { length } = x;
  return [x.substring(0, length / 2) as Integer, x.substring(length / 2) as Integer];
}

export function powerize(x: Integer, tensPower: number): Integer {
  return (x + new Array(tensPower).fill("0").join("")) as Integer;
}

export function evenize(x: Integer, y: Integer): [Integer, Integer, number] {
  let level = Math.max(x.length, y.length);
  if (level % 2 === 1) level += 1;

  return [x.padStart(level, "0") as Integer, y.padStart(level, "0") as Integer, level];
}

export function makeInteger(x: number): Integer {
  return Math.floor(x).toString() as Integer;
}

export function multSingleDigitInt(x: Integer, y: Integer): Integer {
  const n = Math.max(x.length, y.length);

  if (n !== 1) throw new Error("Didn't match what is expected: Expected single digit integers.");

  return (Number(x) * Number(y)).toString() as Integer;
}

export function sumInt(...args: Integer[]): Integer {
  const total = args.reduce((sum, val) => sum + Number(val), 0);
  return makeInteger(total);
}

export function subtractInt(...args: Integer[]): Integer {
  if (args.length < 2) throw new Error("subtractInt need at least two parameters.");

  const first = args.at(0)!;

  const result = args.reduce((sum, val) => sum - Number(val), 2 * Number(first));
  return makeInteger(result);
}
