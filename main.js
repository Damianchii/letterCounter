const input = document.querySelector("input");
const div = document.querySelector("div");

const countLetter = (e) =>{
    div.innerHTML = `Letter Counter: ${e.target.value.length}`;
}

input.addEventListener("input", countLetter)