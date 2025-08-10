function bubbleSort<T>(array: T[], compare: (a: T, b: T) => boolean) {
  const { length } = array;

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1; j++) {
      if (!compare(array[j]!, array[j + 1]!)) {
        const temp = array[j]!;
        array[j] = array[j + 1]!;
        array[j + 1] = temp;
      }
    }
  }
}

(function main() {
  const array = [1, 5, 3, 4, 7, 8, 9, 0, 2, 6];
  bubbleSort(array, (a, b) => a < b);

  console.log(`Sorted: [${array}]`);
})();
