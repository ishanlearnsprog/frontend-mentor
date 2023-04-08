const optionList = document.querySelectorAll(".option");
const submitButton = document.querySelector("#submit");
const ratingCard = document.querySelector(".rating-card")
const thankyouCard = document.querySelector(".thankyou-card");
const userRating = document.querySelector("#user-rating");
let rating = 0;

function wipeAll() {
    optionList.forEach((option) => {
        option.classList.remove("active");
    })
}

function openThankYou() {
    ratingCard.classList.add("hide");
    thankyouCard.classList.remove("hide");
    userRating.outerText = rating;
}

optionList.forEach((option) => {
    option.addEventListener("click", () => {
        wipeAll();
        option.classList.add("active");
        rating = parseInt(option.outerText);
    });
});

submitButton.addEventListener("click", () => {
    openThankYou();
})

