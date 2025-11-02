const table = document.querySelector("#table");
const render = document.querySelector(".cart_data");


table.addEventListener("click", (e) => {
  console.log(e.target.parentElement.parentElement);
  if (e.target.className === "js-btn") {
    const rowTable = e.target.parentElement.parentElement;
    const name = rowTable.children[1].innerText;
    const price = rowTable.children[2].innerText;
    const qnt = rowTable.children[3].children[0].value;

    // Kiểm tra nếu sản phẩm đã có trong giỏ hàng
    let existingRow = null;
    const rows = render.querySelectorAll("tr");
    for (let row of rows) {
      const existingName = row.children[1].innerText;
      if (existingName === name) {
        existingRow = row;
        break;
      }
    }

    if (existingRow) {
      // Nếu đã có, chỉ cập nhật số lượng
      const existingInput = existingRow.children[3].children[0];
      existingInput.value = +existingInput.value + +qnt; 
      // Cập nhật thành tiền
      const newTotal = +price * +existingInput.value;
      existingRow.children[4].innerText = newTotal;
    } else {

      const tr = document.createElement("tr");
      const td1 = document.createElement("td");
      const td2 = document.createElement("td");
      const td3 = document.createElement("td");
      const td4 = document.createElement("td");
      const td5 = document.createElement("td");
      const td6 = document.createElement("td");

      const input = document.createElement("input");
      const button = document.createElement("button");

      input.value = qnt;
      input.type = "number";

      const total = +price * +qnt;

      button.innerText = "Xoá";
      button.className = "remove";

      td1.append(render.children.length + 1);
      td2.append(name);
      td3.append(price);
      td4.append(input);
      td5.append(total);
      td6.append(button);

      tr.append(td1, td2, td3, td4, td5, td6);
      render.append(tr);
    }
  }
});

// Giữ nguyên event listeners cho xóa
render.addEventListener("click", (e) => {
  if (e.target.className === "remove") {
    const rowTable = e.target.parentElement.parentElement;
    render.removeChild(rowTable);
  }
});

render.addEventListener("click", (e) => {
  if (e.target.className === "js-delete") {
    render.innerHTML = "";
  }
});
