import Computer from "./Computer.js";

const laptop = new Computer(
    "Lenovo",
    "AMD",
    16,
    512,
    "Windows 11",
    true,
    "HD Monitor",
    150,
    1000,
    "img/laptop.jpg"
);

const content = `
<figure class="computer_image">
    <img src="${laptop.image}" loading="lazy" width="500">
</figure>
<h1 class="computer_name">${laptop.name}</h1>
<ul class="computer_features">
    <li class="feature processor">Processor: ${laptop.processor}</li> 
    <li class="feature ram">RAM: ${laptop.ram}GB</li> 
    <li class="feature storage">storage: ${laptop.storage}GB</li> 
    <li class="feature os">os: ${laptop.os}</li> 
    <li class="feature wifi">wi-fi: ${laptop.wifi ? "Wi-fi available" : "Wi-fi not available" }</li> 
    <li class="feature monitor">Monitor: ${laptop.monitor}</li> 
    <li class="feature wifiBand2g">2g wi-fi: ${laptop.wifiSpeed.lowSpeed}Mbps</li> 
    <li class="feature wifiBand5g">5g wi-fi: ${laptop.wifiSpeed.highSpeed}Mbps</li> 
</ul>
`;

console.log(content);

const main = document.querySelector("main");

const newArticle = document.createElement("article");
newArticle.classList.add("computer");
newArticle.setAttribute("id", "laptop");
newArticle.innerHTML = content;

main.append(newArticle)