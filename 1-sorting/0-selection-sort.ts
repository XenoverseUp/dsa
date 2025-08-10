function selectionSort<T>(array: T[], compare: (a: T, b: T) => boolean): T[] {
  const sorted: Array<T> = [];

  const { length } = array;

  for (let i = 0; i < length; i++) {
    let candidate = array[0];

    for (let num of array) if (compare(num, candidate!)) candidate = num;

    sorted.push(candidate!);
    array = array.filter((item) => item !== candidate);
  }

  return sorted;
}

(function main() {
  const array = [1, 5, 3, 4, 7, 8, 9, 0, 2, 6];
  const ascending = selectionSort(array, (a, b) => a < b);
  const descending = selectionSort(array, (a, b) => a > b);

  console.log(`Ascending: [${ascending}]`);
  console.log(`Descending: [${descending}]`);
})();
