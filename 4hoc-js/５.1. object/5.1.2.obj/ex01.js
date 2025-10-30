// const f8 = {
//     start: (value) => {
//         let result = value;
//         return {
//             add(value) {
//                 result += value;
//                 return this;
//             },
//             minus() {
//                 result -= value;
//                 return this;
                
//             },
//             munti() {
//                 result *= value;
//                 return this;
//             },
//             divi() {
//                 result /= value;
//                 return this;

//             },
//             get() {
//                 return result;
//             },

//         };
//     },

// };

// console.log(f8.start(10).add(20).munti(3).minus(5).divi(2).get());
 //prototype: object cho phép định nghĩa các thuộc tính,
 // phương thức để tái sử dụng ở các obj khác.
// Object.prototype.message = "F8";

// Object.prototype.getMessage = function () {
//     return "học js không khó"
// }
//  const a = {
//     x: 10,
//  }
//   const b = {
//     x: 20,
//  }

// console.log(a);

// console.log(a.message);
// console.log(b.message);
// console.log(a.getMessage);

// let fullName = "thanhlâm";
// console.log(fullName.message);

// obj --> constuctor --> Instance
//user = [] --> Instance của array
///fullname = "thanh lâm" ===> Instance của String
///age = 34 ===> Instance của Number
// status = true ====> Instance của Boolean
// user = {} ==== Instance của obj (Literal Object)



//kiểm tra constructor của 1 instance
// const users = [];
// console.log(users.constructor.name); ///trả về String
// console.log(users instanceof Array );

//Optional Chaining 
// const users = {
//     info: {
//         email: {
//             domain: "thanh lâm 2"
//         }
//     }
// };
// if (users?.info?.email?.domain) {
//     console.log(users.info?.email?.domain)
// };


// setter, gettter

// const myObj = {
//     data: null,
//   get  length() {
//         return this.data;
//     },
//     set length(value) {
//         this.data = value;
//     }
// };
// myObj.length = 30;
// myObj.length += 10;
// console.log(myObj.length)

// constructor
// -function constructor
// -class

// đặt tên constructor:
// dùng quy tắc PasscalCase
// sử dụng danh từ
// k sử dụng arrow function 
///// HomeController

// function User(name, email) {
//     //thuộc tính 
//     this.name = name;
//     this.email = email;
//     ///phương thức
//     this.getName = function() {
//         return this.email;
//     };
// };
// // thêm phương thức , thuộc tính từ bên ngoài --> 
// // dùng prototype

// // khởi tạo instance từ constructor

// const user1 = new User("User1", "user@gmail.com");
// console.log(user1)
// const user2 = new User("User2", "user@gmail.com");
// console.log(user2)



// - Class
// class User {
//     //thuộc tính 
//     // name = "thanh lâm";
//     // email = "thanlm1997@gmail";
//     // //// hàm khởi tạo:
//     //- Nhận đối số khi tạo instance
//     //- chạy ngay khi tạo instance
//     #email;
//     constructor(name, email) {
//         this.name = name;
//         this.#email = email;

//     }
//     // phương thức
//     getName() {
//         return this.name;
//     }
//     getEmail() {
//         return this.#email;
//     }
// };

// // khởi tạo instance 
// const user1 = new User("User 1", "user1@gmail.com");
// console.log(user1);
// // console.log(user3.email);
// // console.log(user3.getEmail);
// console.log(user1.getEmail());


// buổi sau 
// static method, static property
// extands
// setter, get ter
// so sánh obj, array
// hàm đệ quy
// sao chép array, obj:
// + shallow coppy
// + deep copy