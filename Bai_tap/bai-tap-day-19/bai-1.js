function showGreeting(title) {
    console.log(title);
};
/////////
showGreeting("bài 1");
const hasNegative = numbers => numbers.some(num => num < 0);

console.log(hasNegative([1, 2, 3, 4, 5, 6]));

/////////
showGreeting("bài 2");
const isAllEven = numbers => numbers.every(num => num % 2 === 0);

console.log(isAllEven([2, 3, 6]));

// function  isAllEven(numbers) {
//     return numbers.every(num => num % 2 === 0);
// }
// console.log(isAllEven([2, 4, 6]));

/////////
showGreeting("bài 3");
const findDivisibleBy5 = numbers => numbers.find(num => num % 5 === 0);

console.log(findDivisibleBy5([12, 34, 55, -30, 30]));

// function findDivisibleBy5(numbers) {
//     return numbers.find(num => num % 5 === 0);
// }
// console.log(findDivisibleBy5([12, 34, 55, -30, 30]))

/////////
showGreeting("bài 4");
const findLastNegative = numbers => numbers.findLast(num => num < 0);

console.log(findLastNegative([2, 3, -3, 5, 9, 4, 6]));
/////////
showGreeting("bài 5");
const findFirstOddIndex = numbers => numbers.findIndex(num => num % 2 !== 0);

console.log(findFirstOddIndex([10, 2, 3, 4, 5, 6, 7, 8, 9]));

/////////
showGreeting("bài 6");
const findLastGreaterThan50 = numbers => numbers.findLastIndex(num => num > 50);

console.log(findLastGreaterThan50([10, 20, 30, 40, 50, 60, 70 ,80, 90]));

/////////
showGreeting("bài 7");
const numbers = [1, 2, 3, 4, 5, 6, 7];

const sum = numbers.reduce(function(acc, cur) {
    return acc + cur;
}, 0);

console.log(sum);
/////////
showGreeting("bài 8");
const multiplyAll = numbers => numbers.reduce((acc, cur) => acc * cur, 1);

console.log(multiplyAll([1, 2, 3, 4]))

/////////
showGreeting("bài 9");
function longestStringLength(strings) {

  const result = strings.reduce(function(acc, str) {

    if (str.length > acc) {
      return str.length;
    } else {
      return acc;
    }
  }, 0);

  return result;
}

// console.log(longestStringLength(["a", "aa", "aaaa", "bb", "a"]));

/////////
showGreeting("bài 10");
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function hasPrime(numbers) {
    return numbers.find(isPrime) !== undefined;
}

console.log(hasPrime([2, 3, 5, 9])); 

