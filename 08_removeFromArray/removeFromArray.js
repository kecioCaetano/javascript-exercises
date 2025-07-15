const removeFromArray = function(arr, ...removeList) {
    return arr.filter(val => !removeList.includes(val))
};

//removeFromArray([1, 2, 3, 4], 3); // should remove 3 and return [1,2,4]
// Do not edit below this line
module.exports = removeFromArray;
