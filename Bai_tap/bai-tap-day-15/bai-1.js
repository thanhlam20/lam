// 
// 
function showGreeting (title) {
    console.log(title);
}
//  bài 1 //
showGreeting("bài tập 1:");

let age = 25;
console.log("tôi năm nay",age,"tuổi");

// bài 2  //
showGreeting("bài tập 2:");

const pi = 3.14159;
const r = 5;
const s = pi * r * r;
console.log("diện tích vòng tròn là", s);

// bài 3 //
showGreeting("bài tập 3:");
const A = 7;
const B = 3;
const sum = A + B;
const difference = A - B;
const product = A * B;
const quotient = A / B;
const remainder = A % B;

console.log("Tổng bằng :", sum);
console.log("Hiệu bằng :", difference);
console.log("tích bằng :", product);
console.log("Thương bằng :", quotient);
console.log("số dư bằng :",remainder)

// bài 4 //
showGreeting("bài tập 4:");
let Name = "";
let defaultName = "khách";

let displayName = Name || defaultName;
console.log(displayName);

// bài 5 //
showGreeting("bài tập 5:");
age = 25;
const hasLicense = true;

if (age >= 18 && hasLicense) {
    console.log("Đủ điều kiện")
}
else {
    console.log("Không đủ điều kiện")
}

// bài 6 //
showGreeting("bài tập 6:");
const username = "thanhlam";
const password = "123";

let isValid = (username !=="") && (password !=="");
console.log(isValid)

// bài 7 //
showGreeting("bài tập 7:");
const salePrice = 300;
const discountRate = 0.5;

const price = 300 / ( 1 - discountRate );
console.log("giá gốc là",price);

// bài 8 //
showGreeting("bài tập 8:");
let a = 1;
let b = 2;
a = b;
b = a - 1;
showGreeting("a = 1 và b = 2")
console.log("sau khi hoán vị :","a bằng:",a, "b bằng;",b)


//////////////////////////////////
