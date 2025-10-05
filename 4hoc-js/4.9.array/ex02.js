// const arr1 = ["item1", "item2", "item3", "item4"];

// arr1.fill("newItem", 1);

// console.log(arr1);

// const arr1 = ["item1", "item2", "item3", "item4"];

// console.log(arr1.join(" a "));

// let num = 123456;
// console.log(+num.toString().split("").reverse().join(""));

// const arr1 = ["banana", "apple", "orange", "mango"];

// arr1.sort();

// console.log(arr1);
// const arr1 = [1, 3, 5, 2, 4];

// arr1.sort(function (a, b) {
//     // if (a < b) {
//     //     return -1; //trả về của hàm
//     // }
//     return b - a; //tăng dần
// }
// )
// console.log(arr1);

// const users = ["lammmm"," nam", "duy", "anh"," binh"];

// users.sort(function(a, b) {
//     return a.length - b.length; //tăng dần
// }
// )
// console.log(users);

// const num1 = [5, 2, 9, 1, 8];
// const num2 = [2, 5, 1, 10];
// let newNum = [];

// for (let i = 0; i < num1.length; i++) {
//     let check = num1[i];
//     if (num2.includes(check)) {
//         newNum.push(check);
//     }

// }
// console.log(newNum);

// const num1 = [
//     [1, 2],
//     [3, 4]
// ];
// console.log(num1);
// console.log(num1[0][1]);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const size = 3;
// const newArr = [];

// for (let i = 0 ; i < numbers.length; i += size) {
//     let chunk = numbers.slice(i, i + size);
//     newArr.push(chunk);
// }

// console.log(newArr);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const size = 2;
const newArr = [];

for (let i = 0 ; i < numbers.length; i ++) {
    let check = numbers.slice(i, i + size);
    newArr.push(check);
}

console.log(newArr);


//forEach

// const myarr = ["item1", "item2", "item3"];

//     myarr.forEach(function(value, index,) {
//     console.log(value, index,);
// });

//map(callback)

// const myarr = ["item1", "item2", "item3"];

// const newArr = myarr.map(function(value, index,) {
//     // return `${index}. ${value}`;
//     return "f7";
// });
// console.log(newArr);

// const numbers = [5, 2, 7, 10, 9];
// const newArr = numbers.map(function(number) {
//    if (number % 2 === 0) {
//     return number * 2;
//    }
//     return number;

// }
// );

// console.log(newArr);

// ///filter(callback) : lọc dữ liệu theo điều kiện trong call back
// const numbers = [5, 2, 7, 10, 15];
// const result = numbers.filter(function(value, index) {
//     // return value, index;
//     // console.log(value, index);
//     // if (value % 2 === 0) {
//     //     return true;
//     // }
//     // return value % 2 === 0; //giá trị trả về true thì giữ lại, false thì bỏ
//     return value;;
// }
// )

// console.log(result);

// const users = ["Thanh Lâm", " thanh nam", "Văn Lâm", "anh", "binh"];

// let keyword = "Lâm";
// const result = users.filter(function(value) {
//     return value.toLowerCase().includes(keyword.toLowerCase());
// });
// console.log(result);

// const myArr = ["item1", "item2", "item3", "item3", "item4", "item5", "item3"];

// const newArr = myArr.fillter(function(value, index){
//     return myArr.indexOf(value) === index;
// }
// )

// console.log(newArr);

/// tìm hiểu trước 
//- find
//- findLast
//- findIndex
//- findLastIndex
//- some
//- every
//- reduce
//- flat