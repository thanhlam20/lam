function showGreeting(title) {
    console.log(title);
};
//////////////////////
showGreeting("bài 1");
//
const arr = [1, 2, 3, 4, 5, 6];

const squaredNumbers = arr.map(function(number) {
  return number * number;
});

const evenNumbers = arr.filter(function(number) {
    return number % 2 === 0;
});

const oddSquaredNumbers = arr.map(function(number) {
    return number * number;
}).filter(function(squaredNumber) {
    return squaredNumber % 2 !== 0;
});

console.log("Tạo mảng mới chứa bình phương của từng phần tử:", squaredNumbers);
console.log("Tạo mảng mới chứa các số chẵn trong mảng:", evenNumbers);
console.log("Tạo mảng mới chứa các số bình phương nhưng chỉ lấy số lẻ:", oddSquaredNumbers);

//////////////////////
showGreeting("bài 2");
const names = ["   hoang ", "AN", "  f8   ", "Education"];

const cleanedNames = names.map(function(name) {
  return name.trim().toLowerCase();
});

const capitalizedNames = cleanedNames.map(function(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
});

console.log("Tạo mảng mới chứa các phần tử đã được xoá khoảng trắng thừa và viết thường toàn bộ:", cleanedNames);
console.log("Tạo mảng mới viết chữ cái đầu hoa:", capitalizedNames);

//////////////////////
showGreeting("bài 3");
const nums = [3, 7, 2, 9, 12, 15, 18];


const number_10 = nums.filter(function(number) {
  return number >= 10;
});


const number_3 = number_10.filter(function(number) {
    return number % 3 === 0;
});


const doubledOddNumbers = nums.map(function(number) {
    return number * 2;
}).filter(function(number) {
    return number % 2 !== 0;
});

console.log("Lấy ra mảng mới chỉ chứa số lớn hơn hoặc bằng 10:", number_10);
console.log("Từ mảng mới trên, tạo mảng chỉ chứa số chia hết cho 3:", number_3);
console.log("Với mảng ban đầu, tạo mảng mới tăng gấp đôi nhưng chỉ giữ lại số lẻ:", doubledOddNumbers);

//////////////////////
showGreeting("bài 4");
const words = ["javascript", "php", "css", "html", "python", "java"];

const longWords_5 = words.filter(function(value) {
  return value.length >= 5;
});

const upperWords = words.map(function(value) {
  return value.toUpperCase();
});

const reversedWords = words.map(function(value) {
  return value.split("").reverse().join("");
});

console.log("Từ >= 5 ký tự:", longWords_5);     
console.log("Từ viết hoa:", upperWords);      
console.log("Từ đảo ngược:", reversedWords);  
////////////////////
showGreeting("bài 5");
const myArr_2 = [ 
  [1, 2, 3], 
  [4, 5, 6], 
  [7, 8, 9] 
];

const rowSums = myArr_2.map(function(row) {
  return row.reduce(function(total, number) {
    return total + number;
  }, 0);
});

const columnSums = myArr_2[0].map(function(value, columnIndex) {
  return myArr_2.reduce(function(total, row) {
    return total + row[columnIndex];
  }, 0);
});


const totalTen = myArr_2.filter(function(row) {
  const rowSum = row.reduce(function(total, number) {
    return total + number;
  }, 0);
  return rowSum > 10;
});

console.log("Tạo mảng chứa tổng từng hàng:", rowSums);             
console.log("Tạo mảng chứa tổng từng cột:", columnSums);       
console.log("Lọc ra các hàng có tổng > 10:", totalTen);  




//////////////////////
showGreeting("bài 6");
const myArr = [ 
  ["hello", "world"], 
  ["javascript", "php"], 
  ["css", "html"] 
];

const upperCaseWords = myArr.map(function(row) {
  return row.map(function(word) {
    return word.toUpperCase();
  });
});

const longWords_4 = myArr.map(function(row) {
    return row.filter(function(word) {
        return word.length > 4;
    });
});

const arrOneWay = myArr.flat();

console.log("Tạo mảng mới viết hoa tất cả từ:", upperCaseWords);
console.log("Lọc ra các từ có độ dài > 4:", longWords_4);
console.log("Ghép tất cả thành 1 mảng 1 chiều:", arrOneWay);

//////////////////////
showGreeting("bài 7");
const myArr_3 = [ 

  [2, 4, 6], 

  [8, 10, 12], 

  [14, 16, 18] 

]




//////////////////////
showGreeting("bài 8");
const scores = [ 
  [8, 9, 7],   // student 1
  [6, 5, 7],   // student 2
  [10, 9, 8]   // student 3
];

const averageScores = scores.map(function(studentScores) {
  const total = studentScores.reduce(function(sum, score) {
    return sum + score;
  }, 0);
  return total / studentScores.length;
});

const total_8 = scores.filter(function(studentScores, index) {
    return averageScores[index] >= 8;
});

const increaseOne = scores.map(function(studentScores) {
    return studentScores.map(function(score) {
        return score < 10 ? score + 1 : 10;
    });
});

console.log("Tính điểm trung bình của từng học sinh:", averageScores);
console.log("Lọc ra những học sinh có điểm trung bình >= 8:", total_8);
console.log("Tạo mảng mới tăng tất cả điểm thêm 1 (nếu chưa vượt quá 10)", increaseOne);


