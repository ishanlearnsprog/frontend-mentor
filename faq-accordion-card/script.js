const qc = document.querySelectorAll(".q-container");
const ss = document.querySelectorAll(".switch");
const qs = document.querySelectorAll(".question");
const as = document.querySelectorAll(".answer")

function removeAll(len, no) {
    for (let i = 0; i < len; i++) {
        if (i != no) {
            qs[i].classList.remove("q-container--active");
            ss[i].classList.remove("switch--active");
            qs[i].classList.remove("question--active");
            as[i].classList.remove("answer--active")
        }
    }
}

for (let i = 0; i < qc.length; i++) {
    qc[i].addEventListener("click", () => {
        qs[i].classList.toggle("q-container--active");
        ss[i].classList.toggle("switch--active");
        qs[i].classList.toggle("question--active");
        as[i].classList.toggle("answer--active")
        removeAll(ss.length, i);
    })
}   