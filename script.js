//hamburger menu
const navigation = document.querySelector(".navigation");
const exit = document.querySelector("#x");

exit.addEventListener("click", () => {
    navigation.style.display = "none";
})

const menu = document.querySelector(".menu");

menu.addEventListener("click", () => {
    navigation.style.display = "block";
});