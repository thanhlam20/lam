// DOM Node

const root = document.querySelector("#root");
// 1. createElement
const h1 = document.createElement("h1")
h1.innerText = "f8 - hoc lap trinh";
h1.classList = "title";

//append
root.append(h1);

const h2 = document.createElement("h2");
h2.innerText = "xin chao f8";
root.prepend(h2)

const btn = document.createElement("button");
btn.innerText = "click me";
btn.addEventListener("click", () => {
    h1.innerText = "ok chua?"
})
root.append(btn)

// 2. insertBefore

const h3 = document.createElement("h3");
h3.innerText = "hoc js";
root.insertBefore(h3, h1);

// 3. replaceChild --> thay the node
const p = document.createElement("p");
p.innerText = `thanh lam`;
root.replaceChild(p,h1);

// 4. removeChild --- xoa node con
root.removeChild(h2)
//5. textNode --> truong hop dac biet (la obj)
const couterHeading = document.createElement("h2");
couterHeading.innerText = "count:";
const textNode = document.createElement(textNode);
root.append(couterHeading);
// const span = document.createElement(span);
// span.innerText = "0";
// root.append(span);
const plusBtn = document.createElement("button");

plusBtn.innerText = "+";
plusBtn.addEventListener("click", () => {
    span.innerText++;
})
root.append(plusBtn)