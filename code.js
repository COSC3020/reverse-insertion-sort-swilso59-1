function insertionSortReverse(array) {
    // A loop that iterates backwards starting from the last element in the list and ending at the first element.
    for (var i = array.length - 1; i >= 0; i--){
        // Initializing a variable to store the current value in the list. 
        var val = array[i];
        // A loop that iterates from the current position through the list and checks if the next variable it less than the value. 
        for(var j= i; j < array.length && array[j + 1] < val; j++){
            // Shifting the element at position j + 1 to the current position j.
            array[j] = array[j + 1];
        }
        // Place the stored value in the correct position at index j.
        array[j] = val;
    }
    // Return the array affter completing the sorting process. 
    return array;
}
