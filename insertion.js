function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const currentValue = arr[i]; // Use 'const' for immutability where possible
    let j = i - 1;

    // Shift elements to the right until the correct position for currentValue is found
    while (j >= 0 && arr[j] > currentValue) {
      arr[j + 1] = arr[j];
      j--;
    }

    // Place currentValue at its correct position
    arr[j + 1] = currentValue;
  }

  return arr;
}

module.exports = insertionSort;
