export function changeTitle() {
    // Change the title of the page to "(Your name)'s Portfolio"
    document.title = "Tom Hennessy's Portfolio"
}

export function changeHeader() {
    // Change the name in the h1 of the page to your name
    document.querySelector("h1").innerText = "Tom Hennessy";
}

export function changeAboutMe() {
    /* Update the first paragraph in the About Me section with a small
     passage about yourself */
    document.querySelector(".section p").innerText = "I am a software developer with a passion for coding"
}
