let fruits = [{ name: "Orange", image: "orange.jpg" },
{ name: "Kiwi", image: "kiwi.jpg" },
{ name: "Banane", image: "banane.jpg" },
{ name: "Peche", image: "peche.jpg" },
{ name: "Cerise", image: "cerise.jpg" }];

let fruitsContainer = document.getElementById("fruits");

let imageChanger = document.getElementById("imageFruit");

let defaultImage = "all-fruits.jpg";

let fruitClicked = null;

fruits.forEach((fruit) => {

    let div = document.createElement("div");
    div.classList.add("boutonFruits");
    div.textContent = fruit.name;
    fruitsContainer.appendChild(div)

    div.addEventListener("mouseenter", () => {
        imageChanger.style.backgroundImage = `url(${fruit.image})`;
    });
    div.addEventListener("mouseleave", () => {

        if (fruitClicked) {
            imageChanger.style.backgroundImage = `url(${fruitClicked.image})`;
        } else {

            imageChanger.style.backgroundImage = `url("${defaultImage}")`;
        }
    })

    div.addEventListener("click", () => {
        fruitClicked = fruit;
        imageChanger.style.backgroundImage = `url(${fruit.image})`;
        imageChanger.style.backgroundImage = `url(${defaultImage})`;

        div.style.backgroundColor = "red";
        Array.from(fruitsContainer.children).forEach((otherDiv) => {
            if (otherDiv !== div) {
                otherDiv.style.backgroundColor = "";
            }
        });
    });
});







