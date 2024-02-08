const container = document.getElementById("container");
const img = document.createElement("img");

img.src = "afMid2/Solo-Leveling.png";
img.alt = "Smail";
container.appendChild(img);

const fruits = ["Apple", "Banana", "Mango", "Orange", "Strawberry"];

const fruitsList = document.getElementById("fruitsList");

fruits.forEach((fruit) => {
    const li = document.createElement("li");

    li.textContent = fruit;
    fruitsList.appendChild(li);
});
