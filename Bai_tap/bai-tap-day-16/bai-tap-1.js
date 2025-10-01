function showGreeting (title) {
    console.log(title)
}
//////////
showGreeting("bài 1")
// số kWh : 378 = 50 * 1.678 + 50 * 1.734 + 100 * 2.014 + 100 * 2.536 + 78 * 2.834 ;
const price_1 = 1.678;
const price_2 = 1.734;
const price_3 = 2.014;
const price_4 = 2.536;
const price_5 = 2.834;
const price_6 = 2.927;
const powerConsumption_1 = 50;
const powerConsumption_2 = 100;
const powerConsumption_3 = 200;
const powerConsumption_4 = 300;
const powerConsumption_5 = 400;
const powerConsumption_6 = 401;
let kWh = 478;
let total;
if (kWh <= 0) {
    console.log("không đủ điều kiện");
} else {
    if (kWh <= powerConsumption_1) {
        total = powerConsumption_1 * price_1;
    } else if (kWh <= powerConsumption_2) {
        total = powerConsumption_1 * price_1 + (kWh - powerConsumption_1) * price_2;
    } else if (kWh <= powerConsumption_3) {
        total = powerConsumption_1 * price_1 + (powerConsumption_2 - powerConsumption_1) * price_2 +
         (kWh - powerConsumption_2) * price_3;
    } else if (kWh <= powerConsumption_4) {
        total = powerConsumption_1 * price_1 + (powerConsumption_2 - powerConsumption_1) * price_2 + 
        (powerConsumption_3 - powerConsumption_2) * price_3 + (kWh - powerConsumption_3) * price_4;
    } else if (kWh <= powerConsumption_5 ) {
        total = powerConsumption_1 * price_1 + (powerConsumption_2 - powerConsumption_1) * price_2 + 
        (powerConsumption_3 - powerConsumption_2) * price_3 + (powerConsumption_4 - powerConsumption_3) * price_4 +
        (kWh - powerConsumption_4) * price_5;
    } else {
        total = powerConsumption_1 * price_1 + (powerConsumption_2 - powerConsumption_1) * price_2 + 
        (powerConsumption_3 - powerConsumption_2) * price_3 + (powerConsumption_4 - powerConsumption_3) * price_4 +
        (powerConsumption_5 - powerConsumption_4) * price_5 + (kWh - powerConsumption_5) * price_6;
    }
}

console.log(`Tổng số tiền điện phải trả là: ${total}`);


////////
showGreeting("bài 2")
let n = 10;

function checkPrime(n) {
    if (n < 2) {
        return false; 
    }
    
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false; 
        }
    }
    
    return true;
}

if (checkPrime(n)) {
    console.log(n + " là số nguyên tố" );
} else {
    console.log(n + " không phải số nguyên tố");
}


//////
showGreeting("bài 3")

n = 30;

let checkEven = "Các số chẵn là: ";
let checkOdd = "Các số lẻ là: ";

for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
        checkEven += i + " , ";
    } else {
        checkOdd += i + " , ";  
    }
}

console.log(checkEven);
console.log(checkOdd);

//////

showGreeting("bài 4") 

function expressionValue(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i * (i + 1);
    }
    return sum;
}
console.log(expressionValue(13)); 
//////
showGreeting("bài 5")

let a = 5;
let b = 9;

let sumEven = 0;
let sumOdd = 0;

for (let i = a; i <= b; i++) {
    if (i % 2 === 0) {
        sumEven += i;
    } else {
        sumOdd += i;
    }
}
console.log(`tổng sô chẵn là ${sumEven}`);
console.log(`tổng số lẻ là ${sumOdd}`);

//////
showGreeting("bài 6")
for (i = 1; i < 9; i++) {
    let box1 = document.createElement("div");
    if (i % 2 === 0) {
        box1.style.backgroundColor = "black";
    } else {
        box1.style.backgroundColor = "white";
    }
}

///
showGreeting("bài 8")
let rowNumber = 5;       
let count = 1;
for (let i = 1; i <= rowNumber; i++) {   
    let row = "";                   
    for (let j = 1; j <= i; j++) { 
        row += count + " ";     
        count++;                   
    }
    console.log(row);          
}

