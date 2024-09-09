function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  let pivotValue = arr[start]; // Rename for clarity
  let swapIdx = start;

  // Iterate over the array from start + 1 to end
  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pivotValue) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  // Place the pivot value in its correct position
  swap(arr, start, swapIdx);

  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);

    // Recursively sort elements on both sides of the pivot
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }

  return arr;
}

module.exports = { pivot, quickSort };
