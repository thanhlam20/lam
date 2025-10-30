const sidebarEl = document.querySelector(".js-sidebar");
const reziseEl = sidebarEl.querySelector(".js-rezise");
1. //mousedowon --> flag
2. //mousemove --> checkflag
3. //mouseup ---> flag

//removeEventListener(' event-name',handler)


reziseEl.addEventListener("mousedown", () => {
    document.addEventListener("mousemove",handler);
    document.body.classList.add("select-none");
});

document.addEventListener("mouseup", () => {
    document.removeEventListener("mousemove",handler);
     document.body.classList.remove("select-none");
});

const handler = (e) => {
    let x = e.clientX;
    if (x < 120) {
        x = 120;
    }
    if (x > 420) {
        x = 420;
    }
    sidebarEl.style.width = `${x}px`;
};








////////////////////////////// constructor
// function User(name, email) {
//   this.name = name,
//   this.email = email,
//   this.getName = function() {
//     return this.name;
//   };
//   this.getEmail = function() {
//     return this.email;
//   };
// };
// const user1 = new User("user1", "user1@gmail.com");
// console.log(user1)

