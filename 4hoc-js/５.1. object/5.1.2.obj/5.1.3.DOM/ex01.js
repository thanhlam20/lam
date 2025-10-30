// //danh sách sự kiện hay dùng:
// // click  bấm vào phần tử
// // mousedown.  bấm chuột xuống
// // mouseup.    nhả chuột
// // mouseover.   di chuyển chuột vào phần tử
// // mouseout.    di chuột ra khỏi phần tử
// // mousemove.    di chuột bên trong phần tử
// // keyup          nhả phím
// // keydown        nhấn phím
// // input           gõ ký tự trong form
// //submit          submit form
// // change          thay đổi giá trị của trương trong form
// // forcus.         forcus vào trường trong form
// // blur.      bỏ forcus trường trong form
// // scroll.       kéo thanh cuộn

// const contentEl = document.querySelector(".content");
// // console.log(contentEl.innerHTML);
// // contentEl.innerHTML = `<h1><i>Okke chưa?</i></h1>`;

// //3. lấy nội dung (không có html)
// // console.log(contentEl.innerText);

// //4. lấy nội dung (không có html)
// // console.log(contentEl.innerText = `<h1><i>Okke chưa?</i></h1>`);

// //5. lấy nội dung (không có html, giữ khoảng cách ban đầu)
// // console.log(contentEl.textContent);

// //6. lấy nội dung (không có html, giữ khoảng cách ban đầu)
// // console.log(contentEl.innerText = `<h1><i>
    
// //     Okke chưa?
// // </i></h1>`);

// //7.lấy nội dung bên trong và chính nó của thẻ html
// //console.log(contentEl.outerHTMl);

// //8.cập nhập nội dung bên trong là chính nó
// // contentEl.outerHTML = `<h1><i>Okkeaaaa chưa?</i></h1>`;

// //9. xoá phần tử html
// // contentEl.innerHTML = "";
// // contentEl.remove();


// //thao tác với thuộc tính thẻ htnl
// // cú pháp : tenphantu.tenthuoctinh
// const imgEl = document.querySelector("img")
// // console.log(imgEl.src);
// // console.log(imgEl.id);
// // console.log(imgEl.className);
// // console.log(imgEl.width);
// // console.log(imgEl.alt);
// // console.log(imgEl.title);
// // imgEl.src = "https://d1hjkbq40fs2x4.cloudfront.net/2017-08-21/files/landscape-photography_1645.jpg";

// // truy cập vào data- attribute
// // imgEl.setAttribute("data-id", "1234")
// imgEl.dataset.animationTimingFunction = "linear";


// const btnEl = document.querySelector(".btn");
// // btnEl.onclick = function () {
// //     console.log("click");
// //     console.log(this)
// // }
// btnEl.addEventListener("click", function(e) {
//     console.log("click 1");
// });
// btnEl.addEventListener("click", function(e) {
//     console.log("click 2");
// });

// const contentEL = document.querySelector(".content");
// console.log(contentEL.innerHTML);

// const contentEL = document.querySelector(".content");
// console.log(contentEL.innerText);
// const contentEL = document.querySelector(".content");
// //  contentEL.innerText = `<h1>ok chua?</h1>`

// // console.log(contentEL.outerHTML)
// contentEL.outerHTML = `<h1>thay the</h1>`
