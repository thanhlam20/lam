const inputEl = document.querySelector("input");
const btnEl = document.querySelector("button");
const errorEl = document.querySelector(".error");
const imageEl = document.querySelector(".image");

btnEl.addEventListener("click", () => {
    errorEl.innerText = "";
   if (!inputEl.value.trim()) {
    errorEl.innerText = `vui long nhap link anh`;
    return;
   };

   const div = document.createElement("div")
   div = inputEl.value;
   imageEl.append(div);
});














// const btnEL = document.querySelector(".btn");
// btnEL.onclick = function () {
//     console.log("clickedsssss");
// };  

// btnEL.ondblclick = function () {
//     console.log("Duoble click");
// };

// btnEL.onmouseover = function () {
//     console.log("mouse over")
// };

// btnEL.onmouseout = function () {
//     console.log("out")
// };