let computers = ["Desktop", "Laptop", "Tablet PC"];

// console.log(computers.join()); // To print the values in a string wise(By default it will print with a ',' delimitor)
console.log(computers.join(" | ")); // Custom delimitor

// Adding new item at the end
// computers.push("Smart Phone", 5);
// console.log(computers); 

// // Adding new item at the begining
// computers.unshift("Smart Phone", 5);
// console.log(computers);

// // Removing the first item
// computers.shift();
// console.log(computers);

// // Removing the last item
// computers.pop();
// console.log(computers);

// Go through all item of the collection
// computers.forEach(function(item){
//     item = `<li>${item}</li>`;
//     console.log(item);
// });
// console.log(computers);

let long_list = computers.find(function(item){
    if(item.length >= 5){
        return item;
    }
});
console.log(long_list);
