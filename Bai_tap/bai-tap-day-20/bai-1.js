function showGreeting(title) {
    console.log(title);
}
/////
showGreeting("bài 1");
const users = [ 

  { name: "An", age: 25 }, 

  { name: "Bình", age: 30 }, 

  { name: "Chi", age: 22 }, 

];

users.forEach(user => {
    console.log(user.name);
});

const oldest = users.reduce((biggest, cur) => {
    return total = cur.age > biggest.age ? cur : biggest;
});

console.log(oldest);

const totalAge = users.reduce((sum, cur) => sum + cur.age, 0) / users.length;
console.log(totalAge);


/////
showGreeting("bài 2");
const products = [ 

  { name: "Laptop", price: 15000000 }, 

  { name: "Mouse", price: 250000 }, 

  { name: "Keyboard", price: 800000 }, 

];

const productNames = products.map(product => product.name);
console.log(productNames);

const totalPrice = products.reduce((sum, productPrice) => sum + productPrice.price, 0);
console.log(totalPrice);

const moreThan1Million = products.filter((product) => product.price > 1000000);
console.log(moreThan1Million);
/////
showGreeting("bài 3");
const students = [ 

  { name: "Lan", scores: [8, 9, 7] }, 

  { name: "Huy", scores: [6, 5, 7] }, 

  { name: "Minh", scores: [9, 8, 10] }, 

];

for (let student of students) {
    const avgScore = student.scores.reduce((sum, cur) => sum + cur, 0) / student.scores.length;
    student.averageScore = avgScore;
}
console.log(students);

const  goodStudent = students.filter((student) => student.averageScore >= 8);
console.log(goodStudent);

/////
showGreeting("bài 4");
const posts = [ 

  { 

    id: 1, 

    title: "JavaScript cơ bản", 

    tags: ["js", "basic"], 

    comments: [ 

      { user: "An", text: "Hay quá!" }, 

      { user: "Bình", text: "Rất dễ hiểu" }, 

    ], 

  }, 

  { 

    id: 2, 

    title: "Học React không khó", 

    tags: ["react", "js"], 

    comments: [{ user: "Chi", text: "Cảm ơn chia sẻ" }], 

  }, 

];

posts.forEach(post => {
    console.log(`${post.title} : ${post.comments.length}`);
});

const newtags = posts.reduce((acc, post_1) => {
    post_1.tags.forEach((tag) => {
        if (!acc.includes(tag)) {
            acc.push(tag);
        }
    });
    return acc;
}, []);
console.log(newtags);






