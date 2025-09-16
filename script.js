let btn = document.querySelector(".btn");

function ran(num) {
    return Math.floor(Math.random() * (num + 1));
}

btn.addEventListener("click", () => {
    const bgcs = `rgb(${ran(255)}, ${ran(255)}, ${ran(255)})`;
    document.querySelector(".son").style.backgroundColor = bgcs;
    document.querySelector(".btn").innerHTML = "I have changed by clicking !!";
});
