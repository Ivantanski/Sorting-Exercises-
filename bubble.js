function bubbleSort(arr) {
  const swap = (array, index1, index2) => {
    [array[index1], array[index2]] = [array[index2], array[index1]];
  };

  let isSorted; // Optimization flag

  for (let i = arr.length; i > 0; i--) {
    isSorted = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        isSorted = false;
      }
    }
    if (isSorted) break; // Stop if already sorted
  }

  return arr;
}

module.exports = bubbleSort;
