//DOM navigatiom
// - parentElement: chọn phần tử cha từ phần tử hiện tại (1 cấp )
// - children: chọn danh sách phần tử con gần nhất từ phần tử đã có
// - nextElementSibling: chọn phần tử kế tiếp từ phần tử đã có
// - previousElementSibling: chọn phần tử phía trước từ phần tử đã
//.   có ( lùi lại)
// const btnlist = document.querySelectorAll("button");
// btnlist.forEach((btn) => {
//     btn.addEventListener("click", () => {
//         console.log(btn.parentElement);
//     });
// });

// const ul = document.querySelector("ul");
// console.log(ul.children[1].children[0].innerText);

// const itemActive = document.querySelector(".products .active");
// console.log(itemActive.nextElementSibling.previousElementSibling)
const prevBtnEl = document.querySelector(".pre-btn");
const nextBtnEl = document.querySelector(".next-btn");

nextBtnEl.addEventListener("click", () => {
    const itemActive = document.querySelector(".products .active");
    const nextElement = itemActive.nextElementSibling;
    if (nextElement) {
        itemActive.classList.remove("active");
        nextElement.classList.add("active");
    } else {
        // xoá class ở phần tử cuối
        itemActive.classList.remove("active");
        //chọn phần tử và thêm class cho nó:
        const firstItem = document.querySelector(" h2:first-child");
        firstItem.classList.add("active");
    }
});


prevBtnEl.addEventListener("click", () => {
    const itemActive = document.querySelector(".products .active");
    const prevElement = itemActive.previousElementSibling;
    if (prevElement) {
        itemActive.classList.remove("active");
        prevElement.classList.add("active");
    } else {
        const lastItem = document.querySelector(" h2:last-child");
        lastItem.classList.add(("active"));
    }
});

