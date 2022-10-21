window.addEventListener('load', () => {
    const loadingScreen = document.querySelector(".loadingScreen");
    loadingScreen.classList.add("disappear");
});

//hamburger menu
const navigation = document.querySelector(".navigation");
const exit = document.querySelector("#x");

exit.addEventListener("click", () => {
    navigation.classList.remove("slideIn");
    navigation.classList.add("slideOut");
})

const menu = document.querySelector(".menu");

menu.addEventListener("click", () => {
    navigation.classList.add("slideIn");
    navigation.classList.remove("slideOut");
});



