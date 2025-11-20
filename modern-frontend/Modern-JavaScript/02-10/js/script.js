import Computer from "./Computer.js";

const desktop = new Computer (
    "Custom Build",
    "Intel",
    32,
    1000,
    "Windows 11",
    false,
    "HD Monitor",
    150,
    1000,
    "Wed Aug 10 2018 18:24:58 GMT+0530 (India Standard Time)"
);

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

console.log("Desktop PC: ", desktop);
console.log("Desktop was bought on: ", desktop.computerAge());

console.log("Laptop PC: ", laptop);
console.log("Desktop was bought on: ", laptop.computerAge());
