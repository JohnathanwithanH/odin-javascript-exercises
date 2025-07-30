const palindromes = function (phrase) {
let modiPhrase = phrase.replaceAll(", ", "");
modiPhrase = modiPhrase.replaceAll(".", "");
modiPhrase = modiPhrase.replaceAll("!", "");
modiPhrase = modiPhrase.replaceAll(" ", "");
modiPhrase = modiPhrase.toLowerCase();

for (let i = 0; i < modiPhrase.length; ++i) {
    if (modiPhrase[i] !== modiPhrase[(modiPhrase.length - 1) - i])
        return false;
}
return true;
};

// Do not edit below this line
module.exports = palindromes;
