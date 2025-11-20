import computerObjectArray from "./data.js";

const content = computerObjectArray.map((computer) => {
    let computerArticle = document.createElement("article");
    computerArticle.classList.add("computer");
    
    computerArticle.innerHTML = `
        <figure class="computer_image">
            <img src=${computer.image} alt="" loading="lazy">
        </figure>
        <h3 class="computer_name">${computer.name}</h3>
        <ul class="computer_features">
            <li class="feature screen">Screen: ${computer.screen}</li>
            <li class="feature ram">ram: ${computer.ram}</li>
            <li class="feature storage">storage: ${computer.storage}</li>
            <li class="feature wifi">wifi: ${computer.wifi}</li>
            <li class="feature os">os: ${computer.os}</li>
            <li class="feature cpu">Screen: ${computer.screen}</li>
    `;

    return computerArticle;
});

const main = document.querySelector("main");

content.forEach( (computer) => {
    main.append(computer);
})