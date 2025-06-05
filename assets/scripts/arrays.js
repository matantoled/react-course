



const hobbies = ["Sports", "Cooking", "Reading"];
console.log(hobbies[0]);

hobbies.push("Working");
console.log(hobbies); // [ 'Sports', 'Cooking', 'Reading', 'Working' ]



// find the index of a certain value. takes a function as an input and 
// that's a great use case for using such a arrow function, since it's 
// super short to write and not a lot of characters to type.
// the arrow function should accept at least one input parameter.
// the function needs to return true if you have the item that you looking for,
// and false otherwise.  
hobbies.findIndex((item) => {
    return item === 'Sports';
});



// so how can we use the findINdex?
const index = hobbies.findIndex((item) => {
    return item === 'Sports';
});

console.log(index); // output: 0    => because "Sports" (which is the item we're looking for) has the index 0


// but, we can also write this code like this:
const findItem = hobbies.findIndex((item) => item === 'Sports');


// we also can use: map
// map allows you to transform every item in an array to another item. 
// the map takes a function as an input and return the value the item should be transformed to.
hobbies.map((item) => item + "!");
// in this case, we "adding" a "!" to each item.
// why the " " ? because the map is not edit the original array, and instead the map will return a new array!
const editedHobbies = hobbies.map((item) => item + "!");
console.log(editedHobbies); // [ 'Sports!', 'Cooking!', 'Reading!', 'Working!' ]


// we can also use map to transform any item to any other kind of item.
// for example, we don't have to convert out string to a new string like what we did before,
// instead, we could also convert the string to JS object!
// but we need to add parentheses to the curly braces. and then we get an array of objects:
const editedHobbies2 = hobbies.map((item) => ({text: item}));
console.log(editedHobbies2);
 /* 
 [
  { text: 'Sports' },
  { text: 'Cooking' },
  { text: 'Reading' },
  { text: 'Working' }
]
  */




// let's say the input is [1, 2, 3] => the output needs to be: [{val: 1}, {val: 2}, {val: 3}]
function transformToObjects(numberArray) {
    // Todo: Add your logic
    // should return an array of objects
    
    return numberArray.map((item) => ({val: item}));
}
