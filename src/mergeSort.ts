// Function to merge two sorted arrays into one sorted array
// by ChatGPT
function merge(left: number[], right: number[]): number[] {
  let result: number[] = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Merge arrays until one of them is exhausted
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // If there are remaining elements in the left array
  while (leftIndex < left.length) {
    result.push(left[leftIndex]);
    leftIndex++;
  }

  // If there are remaining elements in the right array
  while (rightIndex < right.length) {
    result.push(right[rightIndex]);
    rightIndex++;
  }

  return result;
}

// Function to perform merge sort on an array
export function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }

  // Find the middle point to divide the array into two halves
  const mid = Math.floor(arr.length / 2);

  // Recursively sort the two halves
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  // Merge the sorted halves
  return merge(left, right);
}