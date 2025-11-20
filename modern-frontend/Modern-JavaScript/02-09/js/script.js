import Computer from "./Computer.js";

const laptop = new Computer (
    "Lenovo",
    "AMD",
    16,
    512,
    "Windows 11",
    true,
    "HD Monitor",
    150,
    1000,
    "Mon Nov 10 2025 18:24:58 GMT+0530 (India Standard Time)"
);

console.log(`The ${laptop.name} Laptop: `, laptop);
console.log(`The OS it comes with: `, laptop.os);
console.log("The date laptop was bought: ", laptop.dateAquired);

console.log("Days since laptop bought: ", laptop.computerAge())