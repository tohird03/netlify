const elBtn = document.querySelector(".hambur")
const elList = document.querySelector(".hambur__lest")

elBtn.addEventListener("click", () => {
    elList.classList.toggle("hambur")
    console.log("Okk");
})

function myFunction(x) {
    x.classList.toggle("change");


}
function changeBackground(color){
    document.body.style.background = color
}

