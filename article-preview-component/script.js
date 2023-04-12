const btn = document.querySelector(".share-circle");
const footer = document.querySelector("footer");
const profile = document.querySelector(".profile");
const share = document.querySelector(".share");
const shareBtn = document.querySelector(".share-btn-tooltip");

btn.addEventListener("click", () => {
    btn.classList.toggle("share-btn-tooltip");
    footer.classList.toggle("footer-tooltip");
    profile.classList.toggle("gone");
    share.classList.toggle("gone");
    shareBtn.classList.toggle("share-btn-tooltip");
})