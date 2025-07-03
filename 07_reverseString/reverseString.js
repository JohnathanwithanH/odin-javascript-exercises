const reverseString = function(word) {
    let result = ''
    for (let i = word.length - 1; i > -1; i--) {
        result += word.charAt(i)
    }
    return result;

};

// Do not edit below this line
module.exports = reverseString;
