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
    navLink.addEventListener("click", () => {
    console.log("hi")
    navigation.classList.remove("slideIn");
    navigation.classList.add("slideOut");
    });
});

// form submission
const form = document.getElementById("contactForm");

async function handleSubmit(event) {
    event.preventDefault();
    const status = document.getElementById("status");
    const data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            "Accept": "application/json"
        }
    }).then(response => {
        if (response.ok) {
            status.classList.add("success");
            form.reset();
            status.innerHTML = `<p>Thanks for your message!</p>`;
        } else {
            throw new Error(response);
        }
    }).catch(error => {
        status.classList.add("error");
        status.innerHTML = `<p>Oh no - something went wrong! Please try again later, or send me an <a href="mailto:tina.lu0107@gmail.com">email</a>.</p>`
    });
}

form.addEventListener("submit", handleSubmit);


console.log(window.scrollY);