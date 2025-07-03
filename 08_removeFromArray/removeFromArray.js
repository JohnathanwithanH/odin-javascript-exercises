const removeFromArray = function(arr, ...rmv) {
    let result = []
    for (let i = 0; i < rmv.length; i++) {
        result = arr.filter((val) => val !== rmv[i])
        arr = result
    }
    return result
    
};

// Do not edit below this line
module.exports = removeFromArray;
