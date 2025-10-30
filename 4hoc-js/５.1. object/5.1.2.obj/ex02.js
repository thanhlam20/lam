class Person {
    constructor (name, email) {
        this.name = name;
        this.email = email;
    } 
}
class Boy extends Person {
    gender = "male";
      
    getInfo() {
        return [this.name, this.email, this.gender];
    }
}
const boy = new Boy("thanh lâm", "thanhlm1997@gmail.com", 33);
console.log(boy.getInfo());