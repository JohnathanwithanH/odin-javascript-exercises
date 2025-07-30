const findTheOldest = function(people) {
    return people.reduce((oldest, person) => {
        if (findAge(person) > findAge(oldest)) oldest = person;
        return oldest;
    });
};

function findAge(person) {
    if (person.yearOfDeath === undefined) {
        const date = new Date(); // const currYear = new Date().getFullYear();
        const currYear = date.getFullYear();
        return currYear - person.yearOfBirth;
    }
    return person.yearOfDeath - person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
