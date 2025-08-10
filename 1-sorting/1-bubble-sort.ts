function bubbleSort<T>(array: T[], compare: (a: T, b: T) => boolean) {
  const { length } = array;

  for (let i = 0; i < length; i++) {}

  return [];
}

(function main() {
  const array = [1, 5, 3, 4, 7, 8, 9, 0, 2, 6];
  bubbleSort(array, (a, b) => a < b);

  console.log(`Sorted: [${array}]`);
})();
