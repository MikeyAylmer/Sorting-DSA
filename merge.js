function merge(arr1, arr2) {
    const mergedArray = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }

    // Add remaining elements from arr1, if any
    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }

    // Add remaining elements from arr2, if any
    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }

    return mergedArray;
}

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr; // Base case: already sorted or empty array
    }

    // Split the array into two halves
    const middle = Math.floor(arr.length / 2);
    const leftHalf = arr.slice(0, middle);
    const rightHalf = arr.slice(middle);

    // Recursively merge sort the two halves
    const sortedLeft = mergeSort(leftHalf);
    const sortedRight = mergeSort(rightHalf);

    // Merge the sorted halves
    return merge(sortedLeft, sortedRight);
}

function merge(arr1, arr2) {
    const mergedArray = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }

    // Add remaining elements from arr1, if any
    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }

    // Add remaining elements from arr2, if any
    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }

    return mergedArray;
}

module.exports = { merge, mergeSort };