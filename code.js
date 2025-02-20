function permutationSort(arr) {
    permutations = 0;
    permute(arr, 0, arr.length - 1);
    return permutations;
}

function permute(arr, left, right) {
    if (left === right) {
        permutations++;
        if (isSorted(arr)) return true;
        return false;
    }
    for (let i = left; i <= right; i++) {
        swap(arr, left, i);
        if (permute(arr, left + 1, right)) return true;
        swap(arr, left, i);
    }
    return false;
}

function isSorted(arr) {
    for (let i = 0; i < arr.length - 1; i++)
        if (arr[i] > arr[i + 1]) return false;
    return true;
}

function swap(arr, a, b) {
    var tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
}