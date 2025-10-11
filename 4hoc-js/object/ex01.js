// const user = {
//     name: "thanh lâm",
//     age: 20,
// }
// // console.log(user);


// // const key = "age";

// // console.log(user.key);
// console.log(user.user);
// user.email = "theblue@gmail.com";
// user["address:"] = "quảng ninh"
// delete user.email;
// ///
// for (let key in user) {
//     const value = user[key];
//     // console.log(key, value)
// }

// ///
// Object.keys(user).forEach((key) => {
//     console.log(key, user[key]);
// });



// const user = {
//     name: "Thanh lâm",
//     age: null,
//     email: "thanhlm1997@gmail.com",
//     address: undefined,
//     position: "Student",
// };

// for (let key in user) {
//     const value = user[key];
//     if (!value && value !== 0) {
//         delete user[key];
//     }
// }

// console.log(user);

// const obj1 = {
//     name: "My name",
//     email: "thanhlm1997@gmail.com",
// }

// const obj2 = {
//    age: 25,
//    address: "quang ninh",
// }

// const obj3 = {};
// // Object.entries(obj1).forEach(([key, value]) => 
// //     obj3[key] = value);
// // Object.entries(obj2).forEach(([key, value]) => 
// //     obj3[key] = value);

// // console.log(obj3);
// for (let key in obj1) {
//     const value = obj1[key];
//     obj3[key] = value;
// };
// for (let key in obj2) {
//     const value = obj2[key];
//     obj3[key] = value;
// };

// console.log(obj3);

// const erros = {
//     // name: lâm,
// };
// const email = "";
// if (!email) {
//     erros.email = "vui lòng nhập email.."
// }
// if (!Object.keys(erros).length) {
//     console.log("không có lỗi");
// } else {
//     console.log(erros);
// }

// const obj = {
//     name: lam,
//     age: 25,
// };

// const obj1 = {
//     name: "lam",
//     age: 22,
// }

// const obj2 = {
//     emai: "lam@123",
//     address: "quanh ninh"
// }

// const obj3 = {
//     x: 1,
//     y: 2,
// }

// const newobj = Object.assign({}, obj1, obj2, obj3);
// console.log(obj1);
// console.log(newobj);

// const query = {
//     keyword: "Khoá học Fullstack",
//     status: "active",
//     category: 1,
// };

// // const queryString = Object.entries(query)
// //     .map((value) => {
// //         return value.join("=");
// //     })
// //     .join("&")
// //     .replaceAll(" ", "+");
// //     console.log(queryString);

// let queryString = {};
// for (let key in query) {
//     const value = query[key];
//     queryString = `${queryString}${key}=${value}&`;
// }

// queryString = queryString.replaceAll(" ", "+").slice(0, -1);
// console.log(queryString);

// const queryString = 
// "keyword=Khoá+học+Fullstack&category=3&status=active&category=1&category=2";
// const arr = queryString.split("&");
// const query = {};
// arr.forEach((item) => {
//     const itemArr = item.split("=");
//     const key = itemArr[0];
//     const value = itemArr[1];
//     if (!query[key]) {
//          query[key] = value.replaceAll("+", " ");
//     } 
//     // else {
//     //     query[key] = [query[key]];
//     //     // query[key].push(value);
//     // }
//     if (Array.isArray(query[key])) {
//          query[key].push(value);
//     }
// });
// console.log(query);




