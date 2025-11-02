// /bấm vào nút next 
// chọn phần tử kế tiếp của itemActive
// xoá bỏ class phần tử active cũ : classList.remove("active")
// thêm class vào phần tử kế tiếp: classList.add("active")

const nextBtn = document.querySelector(`.next-btn`);
const prevBtn = document.querySelector(`.prev-btn`);
nextBtn.addEventListener(`click`, (e) => {
    const itemActive = document.querySelector(".active");
    const nextElement = itemActive.nextElementSibling;
    if (nextElement) {
        itemActive.classList.remove(`active`);
        itemActive.nextElementSibling.classList.add(`active`);
    } else {
        //xoá phần tử cuối 
        itemActive.classList.remove(`active`);
        //chọn phần tử va thêm class cho nó: .producst h2:first-child
        const firstItem = document.querySelector("h2:first-child");
        firstItem.classList.add("active");
    }
});
prevBtn.addEventListener(`click`, (e) => {
    const itemActive = document.querySelector(".active");
    const prevElement = itemActive.previousElementSibling;
    if (prevElement) {
        itemActive.classList.remove(`active`);
        itemActive.previousElementSibling.classList.add(`active`);
    } else {
         itemActive.classList.remove(`active`);
         const lastItem = document.querySelector("h2:last-child");
         lastItem.classList.add("active");
    }
});


