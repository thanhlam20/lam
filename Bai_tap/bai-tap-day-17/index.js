function showGreeting(title) {
    console.log(title);
}
//////
showGreeting("bài 1");



//////
////
showGreeting("bài 2");
function checkPassword(password) {
    let upperCount = 0;  
    let lowerCount = 0;
    let numberCount = 0;
    let specialCuont = 0;
    let specialChars = "!@#$%^&*()";
    for (let i = 0; i < password.length; i++) {
        let chars = password[i];
        if (chars >= "65" && chars <= "Z") {
            upperCount++;
        }
        if (chars >= "a" && chars <= "z") {
            lowerCount++;
        }
        if (chars >= "0" && chars <= "9") {
            numberCount++;
        }
        if (specialChars.includes(chars)) {
            specialCuont++;
        }
    }
    if (password.length >= 8 && upperCount >= 2 && lowerCount >= 2 && numberCount >= 1 && specialCuont >= 1) {
        return true;
    } else {
        return false;
    }
}
console.log(checkPassword("(THelues2)"));

////////
showGreeting("bài 3");
const arr = ["User 1", "User 2", "User 3", "User 2", "User 4"];
let arrUsers = [];

for (let i = 0; i < arr.length; i++) {
  let users = arr[i];  
  if (arrUsers.indexOf(users) === -1) {
    arrUsers.push(users); 
  }
}
console.log(arrUsers);

/////////
showGreeting("bài 4");
const numbers = [5, 2, 1, 9, 8, 0];

let largestNumber = numbers[0];
let secondLargesNumber = numbers[0];

for (i = 1; i < numbers.length; i++) {
    let result = numbers[i];
    if (result > largestNumber) {
        secondLargesNumber = largestNumber;
        largestNumber = result;
    }
    if ( result > secondLargesNumber && result < largestNumber) {
        secondLargesNumber = result;
    }
}
console.log("Số lớn thứ hai là: " + secondLargesNumber);
///////////
showGreeting("bài 5");
function insertSorted(arr, numberAdded) {
    for (i = 0; i < arr.length; i++) {
        if (numberAdded < arr[i]) {
            arr.splice(i, 0, numberAdded)
            return arr;
        }
        if (numberAdded === arr[i]) {
            arr.splice(i - 1, 0, numberAdded)
            return arr;
        }
    }
} 

let numbers_1 =  [1,3,5,7,9, 11];
console.log(insertSorted(numbers_1, 4));
//////////


/// test
// const numbers_1 =  [1,3,5,7,9, 11];
// const newNumber = 9; //Giá trị này có thể thay đổi

// numbers_1.splice(2, 0, newNumber);
// console.log(numbers_1);



// const arr1 = ["User 1", "User 2", "User 3", "User 2", "User 4"];
// let fisrt = arr1.slice(0,3);
// let second = arr1.slice(3);
// second.shift();

// console.log(fisrt.concat(second));
