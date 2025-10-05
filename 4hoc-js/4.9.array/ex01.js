// const myarr =  ["lam", "hieu", "tam"];

// myarr[2] = "sucosi";

// myarr[myarr.length] = "hoang";
// console.log(myarr);

// // for (let index of myarr ) {
// //     console.log(index);
// // }

// for (let i = 0; i < myarr.length; i++) {
//     console.log(myarr[i]);
// }

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const output = [];

// for (let i = 0; i < numbers.length; i++) {
//     const value = numbers[i];
//     if (value % 2 === 0) {
//         output[output.length] = value;
//     }
// }
// console.log(output);
// console.log(String.prototype);


let numberA = +prompt("Nhập số A");
let numberB = +prompt("Nhập số B");

function isNumber(value) {
    return typeof value === "number" && !isNaN(value);
}

if (isNumber(numberA) && isNumber(numberB)) {
    console.log(`Tổng A và B là: ${numberA + numberB}`);
} else {
    console.log("Số không hợp lệ")
}
