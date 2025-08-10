export function splitArray<T>(arr: T[]): [T[], T[]] {
  const { length } = arr;
  const mid = Math.floor(length / 2);
  return [arr.slice(0, mid), arr.slice(mid)];
}
