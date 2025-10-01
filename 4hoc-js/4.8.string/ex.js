// let str = "   dong thanh lam thanh"
// console.log(str);
// console.log(str.trim());
// let str = "*";
// console.log(str.repeat(10));
// let patname = "/admin/user";
// console.log(patname.startsWith("/admin"));


// let email = "theblues@gmail.com";
// let index = email.indexOf("@");
// let result = email.slice(0, index); 
// console.log(result); 

// let fullname = "THaNH LAM";

// function checkname (fullname) {
//    return fullname === fullname.toUpperCase();
// }

// console.log(checkname(fullname));

// let fullname = "DoNG THANH LAM"
// let fullnameUpperCase = fullname.toUpperCase();
// if (fullname === fullnameUpperCase) {
//     console.log("Hợp lệ"); 
// } else {
//     console.log("Không hợp lệ");
// }

//b1:
let fullname = "dong thanh lam";

fullname = fullname.charAt(0).toUpperCase() + fullname.slice(1);

//b2

for (let i = 0; i < fullname.length; i++) {
    const char = fullname.charAt(i);
    if (char === " ") {
        const position = i + 1;
        fullname = 
        fullname.slice(0, position) +
        fullname.charAt(position).toUpperCase() +
        fullname.slice(position + 1);
    }
}

console.log(fullname);