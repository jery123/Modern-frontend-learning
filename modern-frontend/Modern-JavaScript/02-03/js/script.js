// Create an array
let my_desktop = [
    "apple",  
    "Laptop",  
    "Phone", 
    "Remote",
    "Cup",
    "Book",
    "Headphones",
    "Pendive",
    "USB Hub",
];

console.log(my_desktop); // Custom delimitor


// Remove the last item 
// console.log("This item will be removed: ", my_desktop.pop())
// console.log("This is the new list: ", my_desktop)

// Remove the last item to the 1st item
// let lastItem = my_desktop.pop();
// console.log("This item will be removed: ", lastItem)
// my_desktop.unshift(lastItem);
// console.log("Last item is now 1st item:  ", my_desktop);

// Sort items Alphabetically
// my_desktop.sort();
// console.log("Array sorted alphabetically: ", my_desktop);

// Find a specific item
// let item = "Phone";
// const item_found = my_desktop.find((something) => something === item) || "No search item in the list.";
// console.log("Item found: ", item_found);

// Remove a specific content from the array
let remove_item = "Cup";
my_desktop.splice(my_desktop.indexOf(remove_item), 1);
console.log(`Arrya item with name "${remove_item}" has been removed`, my_desktop);