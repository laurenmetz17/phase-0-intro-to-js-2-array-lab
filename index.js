// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"] 

//appends name to the end of cats array
function destructivelyAppendCat(name) {
    cats.push(name);
    return cats;
}

//prepends name to the beginning of cats array
function destructivelyPrependCat(name) {
    cats.unshift(name);
    return cats;
}

//removes last name from cats array
function destructivelyRemoveLastCat() {
    cats.pop();
    return cats;
}

//removes first name from cats array
function destructivelyRemoveFirstCat() {
    cats.shift();
    return cats;
}

//append a name to cats array and returns the new array
function appendCat(name) {
    const newCats = [...cats, name];
    return newCats;    
}

//prepends a name to cats array and returns the new array
function prependCat(name) {
    const newCats = [name, ...cats];
    return newCats;
}

//removes the last cat in the cats array and returns a new array 
function removeLastCat() {
    const newCats = cats.slice(0, cats.length - 1);
    return newCats;
}

//removes the first cat in the cats array and returns the new array
function removeFirstCat() {
    const newCats = cats.slice(1, cats.length);
    return newCats;
}