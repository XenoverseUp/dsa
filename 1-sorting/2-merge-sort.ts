import { splitArray } from "./utils";

function merge<T>(a: T[], b: T[], compare: (a: T, b: T) => boolean): T[] {
  const merged: T[] = [];

  while (a.length && b.length) {
    const headA = a.shift()!;
    const headB = b.shift()!;

    if (compare(headA, headB)) {
      merged.push(headA);
      b.unshift(headB);
    } else {
      merged.push(headB);
      a.unshift(headA);
    }
  }

  merged.push(...a);
  merged.push(...b);

  return merged;
}

function mergeSort<T>(array: T[], compare: (a: T, b: T) => boolean): T[] {
  if (array.length <= 1) return array;

  const [a, b] = splitArray(array);

  const sortedA = mergeSort(a, compare);
  const sortedB = mergeSort(b, compare);

  return merge(sortedA, sortedB, compare);
}

(function main() {
  const array = [1, 5, 3, 4, 7, 8, 9, 0, 2, 6];
  const ascending = mergeSort(array, (a, b) => a < b);
  const descending = mergeSort(array, (a, b) => a > b);

  console.log(`Ascending: [${ascending}]`);
  console.log(`Descending: [${descending}]`);
})();
