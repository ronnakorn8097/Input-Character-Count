const constEL = document.querySelector(".count");
const input = document.querySelector("input")

// ดังจับ event input 
input.addEventListener("keyup",(e)=>{
    constEL.innerHTML = input.value.length
})
