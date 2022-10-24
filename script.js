// remove loading screen on page load
window.addEventListener('load', () => {
    const loadingScreen = document.querySelector(".loadingScreen");
    loadingScreen.classList.add("disappear");
});

//hamburger menu
const navigation = document.querySelector(".navigation");
const exit = document.querySelector("#x");

// exit navigation panel when x is clicked
exit.addEventListener("click", () => {
    navigation.classList.remove("slideIn");
    navigation.classList.add("slideOut");
})

// open navigation panel when menu button is clicked
const menu = document.querySelector(".menu");

menu.addEventListener("click", () => {
    navigation.classList.add("slideIn");
    navigation.classList.remove("slideOut");
});

// close navigation if user goes to another section
const navLinks = document.querySelectorAll(".navLinks");

navLinks.forEach((navLink) => {
    console.log(navLink);
    navLink.addEventListener("click", () => {
    console.log("hi")
    navigation.classList.remove("slideIn");
    navigation.classList.add("slideOut");
    });
});

// form submission
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    form.submit();
    form.reset();
    return false;
})


console.log(window.scrollY);