// const contentEl = document.querySelector(".content");
// console.log(contentEl.classlist);

// //1.them class mới --> add()
// contentEl.classList.add("block-1", "block-2");

// //2. thay thế class ---> replace
// contentEl.classList.replace("block-1", "block-2");
// //3. xoá class
// contentEl.classList.remove("block-2");
// //4. toggle
// //- nếu chưa có class ---> thêm mới
// //- nếu có class ---> xoá
// contentEl.classList.toggle("block-2");
// contentEl.classList.toggle("block-2");
//5. contains (class) --> trả về true nếu class tồn tại

const allItem = document.querySelectorAll("ul li")
// console.log(allItem);
// allItem.forEach((item) => {
//     item.addEventListener("click", () => {
//         console.log(item);
//     });
// });

allItem.forEach((item) => {
const btn = item.querySelector("button");
// const span = item.querySelector("span");
//
btn.addEventListener("click", () => {
    // item.classList.toggle("active");
    const itemAtive = document.querySelector("ul li.active");
    
    item.classList.toggle("active");

    if (itemAtive) {
        itemAtive.classList.remove("active");
        const btnActive = itemAtive.querySelector("button")
        btnActive.innerText = "show"
    }

    if (item.classList.contains("active")) {
        btn.innerText = "Hide";
    } else {
        btn.innerText = "Show";
    }
});
});


/// DOM css

// const conentEL = document.querySelector(".content");
// conentEL.style.backgroundColor = `red`;
// conentEL.style.color = `red`;

// conentEL.style.backgroundColor = null;

//even Object
// clientX,Y
// ofsetX,Y
// key --> áp dụng sự kiện keyup keydown
// const btn = document.querySelector("button");
// btn.addEventListener("click", (e) => {
//     console.log(e)
// });


// const inputEL = document.querySelector("input");
// inputEL.addEventListener("keyup", (e) => {
//     console.log(e);
// });


// const formEl = document.querySelector("form");
// formEl.addEventListener("submit", (e) => {
//     e.preventDefault();
//     console.log("submit")
// })
// document.addEventListener("contextmenu", (e) => {
//     e.preventDefault();
//     alert(" khog dc chuot phai")
// });


///-stopPropagation ngăn nổi bọt sự kiện từ thẻ html con

const boxEl = document.querySelector(".box");
const btnEl = document.querySelector("button");
boxEl.addEventListener("click", () => {
    console.log("box clicked");
});