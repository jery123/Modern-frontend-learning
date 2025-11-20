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
    1000
);

console.log(`The ${laptop.name} object is: `, laptop)