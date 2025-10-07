// const numbers = [2, 4, 6, 8, 12];
// const check = numbers.every(function (value, index) {
//     if (value % 2 === 0) {
//         return true;
//     }
// });
// console.log(check);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const result = numbers.find(function (value, index) {
//     return value % 2 === 0;
// })

// console.log(result);
// //
// const result1 = numbers.findlast(function (value, index) {
//     return value % 2 === 0;
// })

// console.log(result1);

// const numbers = [5, 10, 15, 20, 25, 30];

// const result = numbers.reduce(function(acc, cur, index) {
//     console.log(`acc: ${acc}`, `cur: ${cur}`, `index: ${index}`)
//     return acc - cur;
// }, 0)

// console.log(result);

// const myArr = ["item 1", "item 2", "item 2", "item 3", "item 4"]

// const newArr = myArr.reduce(function(acc, cur) {
//     console.log(acc);
//     if (!acc.includes(cur)) {
//         acc.push(cur)
//     }

//     return acc;
// }, [1])

// console.log(newArr);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const size = 2;

// const result = numbers.reduce(function (acc, value, index) {
//     if (index % size === 0) {
//         const chunk = numbers.slice(index, index + size);
//         acc.push(chunk);
//     }
//     return acc;
// }, [])

// console.log(result);


//kĩ thuật đặt lính canh

//tìm max

// const numbers = [5, 2, 10, -1, 8, 3];
// const max = numbers.reduce(function(acc, cur) {
//     // if (acc < cur) {
//     //     return cur;
//     // } else {
//     //     return acc;
//     // }
//     return acc < cur ? cur : acc;
// });
// console.log(max);

// const arr1 = [5, 1, 8, 2, 9];
// const arr2 = [3, 2, 5, 10];

// const diff =  arr1.reduce(function (acc, cur) {
//     console.log(`acc: ${acc}`, `cur: ${cur}`);
//     if (arr2.includes(cur)) {
//         acc.push(cur)
//     }
//     return acc;
// }, [])

// console.log(diff);