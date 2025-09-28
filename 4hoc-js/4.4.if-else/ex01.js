/*let age = 20;
if (age > 0) {
    console.log("sai điều kiện")
} else if (age < 3) {
    console.log("trẻ sơ sinh")
} else if (age < 12) {
    console.log("trẻ vị thành niên")
} else (age >=13) {
    console.log("người lớn")
};
*/

////
/*
let salary = 6000000;
let income;
let tax = 0;
if (salary <= 0) {
    console.log("không hợp lệ")
} else {
    if (salary <= 5000000) {
        tax = 0;
    } else if (salary <= 1000000) {
        tax = 3;
    } else if (salary <= 15000000) {
        tax = 5;
    } else {
        tax = 7;
    }
}
income = salary - (salary * tax) / 100;
console.log("lương thực nhận", income);

*/

/*

const PRICE_1 = 15000;
const PRICE_2 = 13500;
const PRICE_3 = 11000;
const DISCOUNT = 10;
const DISTANCE_1 = 1;
const DISTANCE_2 = 5;
const DISTANCE_3 = 120;
let km = 6;
let total;
if (km <= DISTANCE_1 ) {
    total = DISTANCE_1 * PRICE_1;
} else if (km <= DISTANCE_2) {
    total = DISTANCE_1 * PRICE_1 + (km - DISTANCE_1) * PRICE_2;
} else {
    total = DISTANCE_1 * PRICE_1 + (DISTANCE_2 - DISTANCE_1) * PRICE_2
    + (km - DISTANCE_2) * PRICE_3;
    if (km > DISTANCE_3) {
        total = total - (total * DISCOUNT) /100;
    }
}

console.log(total);
*/

let action = "add"
switch (action) {
    case "create":
    case "add":
    case "insert":
        console.log("thêm mới");
        break;
    case "update":
    case "edit":
        console.log("cập nhập");
        break;
    case "delete":
    case "remove":
        console.log("xoá");
    default:
        console.log("không hợp lệ");
        break;
}

if (action === "create" || action === "add") {
    console.log("thêm mới");
} else if (action === "update" || action === "edit") {
    console.log("cập nhập")
} else if (action === "delete" || action === "remove") {
    console.log(xoá);
} else {
    console.log("Không hợp lệ")
}