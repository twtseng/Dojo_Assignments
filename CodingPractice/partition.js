function partition(items, left, right) {
    var pivot   = items[Math.floor((right + left) / 2)], //middle element
        i       = left, //left pointer
        j       = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            [items[i], items[j]] = [items[j], items[i]]; //swap two elements
            i++;
            j--;
        }
    }
    return i;
}

function quicksort(arr = [], left = 0, right = arr.length-1) {
    partition_index = partition(arr, left, right);
    if (left < partition_index-1) {
        quicksort(arr, left, partition_index);
    }
    if (partition_index+1 < right) {
        quicksort(arr, partition_index+1, right);
    }
}
const array = [9,2,45,3,12,6];

console.log(quicksort(array));
console.log(array);