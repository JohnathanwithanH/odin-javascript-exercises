const getTheTitles = function(books) {
    let results = []
    for (let i = 0; i < books.length; ++i) {
        results.push(books[i].title);
    }
    return results;
};

// Do not edit below this line
module.exports = getTheTitles;
