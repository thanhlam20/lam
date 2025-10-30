const table = document.querySelector("#table");
const render = document.querySelector(".render");

table.addEventListener("click", (e) => {
    if (e.target.className === "btn") {
      

        const rowTable = e.target.parentElement.parentElement;
        const tr = document.createElement("tr"); // hàng tương ứng khi click
        const td1 = document.createElement("td"); // số thứ tự
        const td2 = document.createElement("td"); // tên sản phẩm
        const td3 = document.createElement("td"); // giá
        const td4 = document.createElement("td"); // số lượng
        const td5 = document.createElement("td"); // thành tiền
        const td6 = document.createElement("td"); // nút xoá

        const input = document.createElement("input");
        const button = document.createElement("button");
        const cartDelete = document.createElement("button");

        // const STT = rowTable.children[0].innerText;
        const name = rowTable.children[1].innerText;
        const price = rowTable.children[2].innerText;
        const qnt = rowTable.children[3].children[0].value;

        //  số lượng
        input.value = qnt;
        input.type = "number";
        // tính toán cột thành tiền
        const total = +price * +qnt;

        // nút xoá
        button.innerText = "Xoá";
        button.className = "remove";
        // nút xoá giỏ hàng
        cartDelete.innerText = "ahihi";

        td1.append(render.children.length + 1);
        td2.append(name);
        td3.append(price);  
        td4.append(input);
        td5.append(total);
        td6.append(button);

        tr.append(td1, td2, td3, td4, td5, td6);

        render.append(tr); // render ra giỏ hàng
        render.append(cartDelete);
    }
});

render.addEventListener("click", (e) => {
    if (e.target.className === "remove") {
        const rowTable = e.target.parentElement.parentElement;
        render.removeChild(rowTable);
    }
});

// xoá hết sử dụng remove

const updateBtn = document.querySelector(".update");

updateBtn.addEventListener("click", () => {
    // for (let i = 0; i < render.children.length; ++i) {
    //     // render.children[i].children[4].innerText = 2000;
    //     console.log(render.children[i], i);

    //     render.removeChild(render.children[i]);
    // }

    render.innerHTML = "";
});