const count = document.querySelector(".count");
const buttons = document.querySelector(".buttons");


buttons.addEventListener("click", (e) => {
    if (e.target.classList.contains("add")) {
        count.innerHTML++;
        setCounterColor();
    }
    if (e.target.classList.contains("subtract")) {
        count.innerHTML--;
        setCounterColor();
    }
    if (e.target.classList.contains("reset")) {
        count.innerHTML = 0;
        setCounterColor();
    }
})

function setCounterColor() {
    if (count.innerHTML > 0) {
        count.style.color = "yellow";
    }
    else if (count.innerHTML < 0) {
        count.style.color = "orangered";
    }
    else {
        count.style.color = "white";
    }
}
