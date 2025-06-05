



// how can we create a new array that combine two arrays?
const hobbies = ["Sports", "Cooking"];
const newHobbies = ["Reading"];

const mergedHobbies = [hobbies, newHobbies];
console.log(mergedHobbies) // [ [ 'Sports', 'Cooking' ], [ 'Reading' ] ]

// so we get an array of arrays. we want one array that have all the items.
// so what we'll do is:

const mergedHobbies2 = [...hobbies, ...newHobbies];
console.log(mergedHobbies2); // [ 'Sports', 'Cooking', 'Reading' ]

// now we get what we need.

// the same roll with objects:
const user = {
    name: "Max",
    age: 35
};

const extendedUser = {
    isAdmin: true,
    ...user
}

console.log(extendedUser); // { isAdmin: true, name: 'Max', age: 35 }