let item = "Laptop";

const my_collection = ["Desktop", item, 5, true];

console.log(my_collection);
console.log("The size of the array: ", my_collection.length)

console.log("The second value of the array: ", my_collection[1]);

console.log("--- Edditing item at the 3th position ---");
my_collection[2] = 10;
console.log(my_collection);

console.log("--- Adding item at the 5th position ---");
// my_collection[4] = "Tablet";
// console.log(my_collection);
// Or
my_collection[my_collection.length] = "Tablet";
console.log(my_collection);

my_collection[9] = "Smart Phone";
console.log(my_collection);
console.log(my_collection[6]);

