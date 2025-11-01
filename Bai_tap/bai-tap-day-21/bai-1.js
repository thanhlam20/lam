function showGreeting(title) {
  console.log(title);
}

showGreeting("bài 1");
// const products = [
//   { id: 1, name: "Laptop", category: "Electronics", price: 1200 },
//   { id: 2, name: "Phone", category: "Electronics", price: 800 },
//   { id: 3, name: "Shirt", category: "Clothing", price: 40 },
//   { id: 4, name: "Shoes", category: "Clothing", price: 60 },
//   { id: 5, name: "Headphones", category: "Electronics", price: 150 },
// ];

// const filterProducts = (products,category) => {
//   return products.filter((product) => {
//     return product.category === category;
//   });
// };
// console.log(filterProducts(products, "Electronics"));

// const totalProducs = (products, category) => {
//   return filterProducts(products, category).reduce((acc, cur) => {
//     return acc + cur.price;
//   }, 0);
// };
// console.log(totalProducs(products, "Electronics"));

// const groupByCategory = (products) => {
//     return products.reduce((acc, cur) => {
//     acc[cur.category] = acc[cur.category] || [];
//     acc[cur.category].push(cur);
//     return acc;
//   }, {});
// };
// console.log(groupByCategory(products));
/////////////////////
showGreeting("bài 2");
// const students = [
//   { id: 1, name: "An", scores: { math: 8, english: 7, science: 9 } },
//   { id: 2, name: "Bình", scores: { math: 6, english: 8, science: 7 } },
//   { id: 3, name: "Châu", scores: { math: 9, english: 6, science: 8 } },
// ];
// const avgScores = (students) => {
//   return students.map((student) => {
//     const scores = Object.values(student.scores);
//     const avg = scores.reduce((acc, cur) => {
//       return acc + cur;
//     }, 0) / scores.length;
//     return Object.assign({}, student, {avg});
//   });
// };
// console.log(avgScore(students));

// const topStudent = (students) => {
//   return avgScores(students).reduce((acc, cur) => {
//     return cur.avg > acc.avg ? cur : acc;
//   });
// };

// console.log(topStudent(students));

// const sortedStudents = (students) => {
//   return avgScores(students).sort((a, b) => {
//     return b.avg - a.avg;
//   });
// };
// console.log(sortedStudents(students));
/////////////////////
showGreeting("bài 3");
// const orders = [
//   {
//     orderId: 101,
//     customer: "John",
//     items: [{ name: "Laptop", price: 1000, quantity: 1 }],
//   },
//   {
//     orderId: 102,
//     customer: "Alice",
//     items: [
//       { name: "Phone", price: 500, quantity: 2 },
//       { name: "Charger", price: 50, quantity: 3 },
//     ],
//   },
//   {
//     orderId: 103,
//     customer: "Bob",
//     items: [{ name: "Headphones", price: 200, quantity: 2 }],
//   },
// ];

// const getOderTotal = (orders) => {
//   return orders.map((order) => {
//     const total = order.items.reduce((acc, cur) => {
//       return acc + cur.price * cur.quantity;
//     }, 0);
//     return Object.assign({}, order, { total });
//   });
// };

// console.log(getOderTotal(orders));

// const topOders = (orders) => {
//   return getOderTotal(orders).reduce((acc, cur) => {
//     return acc.total > cur.total ? acc : cur;
//   }, 0);
// };
// console.log(topOders(orders));

// const groupItems = (orders) => {
//   const mergedItems = orders.flatMap((order) => {
//    return order.items;
//   });
//   return mergedItems.reduce((acc, cur) => {
//     acc[cur.name] = (acc[cur.name] || 0) + cur.quantity;
//     return acc;
//   }, {});
// };

// console.log(groupItems(orders));

showGreeting("bài 4");
// const employees = [
//   { id: 1, name: "Mai", department: "IT", salary: 1200 },
//   { id: 2, name: "Nam", department: "HR", salary: 800 },
//   { id: 3, name: "Hà", department: "IT", salary: 1500 },
//   { id: 4, name: "Linh", department: "Marketing", salary: 900 },
//   { id: 5, name: "Phúc", department: "IT", salary: 1100 },
// ];
// const getTotalSalaryBydept = (employees) => {
//   return employees.reduce((acc, cur) => {
//     console.log(acc, cur)
    // acc[cur.department] = (acc[cur.department] || 0) + cur.salary;
//     return acc;
//   }, {});
// };
// console.log(getTotalSalaryBydept(employees));

// const getToSalary = (employees) => {
//   return employees.reduce((acc, cur) => {
//    if(!acc[cur.department] || cur.salary > acc[cur.department].salary) {
//     acc[cur.department] = cur;
//    }
//    return acc;
//   });
// };
// console.log(getToSalary(employees));

// const groupByDept = (employees) => {
//   return employees.reduce((acc, cur) => {
//     acc[cur.department] = acc[cur.department] || [];
//     acc[cur.department].push(cur);
//     return acc;
//   }, {}); 
  
// }
// console.log(groupByDept(employees));

// showGreeting("bài 5");
// const watchHistory = [
//   { userId: 1, videoId: "A1", duration: 10 },
//   { userId: 2, videoId: "B1", duration: 15 },
//   { userId: 1, videoId: "A1", duration: 20 },
//   { userId: 3, videoId: "C1", duration: 30 },
//   { userId: 2, videoId: "B1", duration: 5 },
//   { userId: 1, videoId: "A2", duration: 25 },
//   { userId: 3, videoId: "C1", duration: 15 },
// ];

// const totalTime = (watchHistory) => {
//   return watchHistory.reduce((acc, cur) => {
//     acc[cur.videoId] = (acc[cur.videoId] || 0) + cur.duration;
//     return acc;
//   }, {});
// };
// console.log(totalTime(watchHistory));

// const mostVideo = (watchHistory) => {
//   return Object.entries(totalTime(watchHistory)).reduce((acc, cur) => {
//     const videoId = cur[0];
//     const duration = cur[1];
//     if (acc.duration < duration) {
//       return {
//         videoId,
//         duration,
//       };
//     }
//     return acc;
//   }, {
//     duration: 0,
//   });
// };
// console.log(mostVideo(watchHistory));

// const groupByUser = (watchHistory) => {
//   return watchHistory.reduce((acc, cur) => {
//     acc[cur.userId] = acc[cur.userId] || {};
//     acc[cur.userId ][cur.videoId] = (acc[cur.userId][cur.videoId] || 0) + cur.duration;
//     return acc;
//   }, {});
// };
// console.log(groupByUser(watchHistory));
showGreeting("bài 6");
// const matches = [
//   { teamA: "A", teamB: "B", scoreA: 2, scoreB: 1 },
//   { teamA: "C", teamB: "D", scoreA: 1, scoreB: 3 },
//   { teamA: "A", teamB: "C", scoreA: 2, scoreB: 2 },
//   { teamA: "B", teamB: "D", scoreA: 0, scoreB: 1 },
//   { teamA: "A", teamB: "D", scoreA: 3, scoreB: 1 },
// ];

// const getTeamResult = (matches) => {
//   const teams = {};
//   matches.forEach((match) => {
//    [match.teamA, match.teamB].forEach((item) => {
//     teams[item] = teams[item] || {
//       wins: 0,
//       draws: 0,
//       loses: 0,
//       poins: 0,
//       goals: 0,
//     };
//    });
//    teams[match.teamA].goals += match.scoreA;
//     teams[match.teamB].goals += match.scoreB;
//     if (match.scoreA > match.scoreB) {
//       teams[match.teamA].wins++;
//       teams[match.teamA].poins += 3;
//       teams[match.teamB].loses++;
//     } else if(match.scoreA < match.scoreB) {
//       teams[match.teamB].wins++;
//       teams[match.teamB].poins += 3;
//       teams[match.teamA].loses++;
//     } else {
//       teams[match.teamB].draws++;
//       teams[match.teamA].draws++;
//       teams[match.teamB].poins++;
//       teams[match.teamA].poins++;
//     }
//   });
//   return teams;
// };
// console.log(getTeamResult(matches));

// const getRanking = (matches) => {
//   const teams = getTeamResult(matches);
//   const teamsMap = Object.entries(teams).map((item) => {
//     return Object.assign(
//       {},
//       {
//         team: item[0],
//       },
//       item[1]
//     );
//   });
//   return teamsMap.sort((a, b) => {
//     return b.poins - a.poins;
//   });
// };

// console.log(getRanking(matches));

// const getTopGoals = (matches) => {
//   return getRanking(matches).reduce((acc, cur) => {
//     return cur.goals > acc.goals ? cur : acc;
//   });
// };

// console.log(getTopGoals(matches))

showGreeting("bài 7");
// const employees = [
//   { id: 1, name: "An", projects: ["P1", "P2"] },
//   { id: 2, name: "Bình", projects: ["P2", "P3"] },
//   { id: 3, name: "Châu", projects: ["P1", "P3", "P4"] },
//   { id: 4, name: "Dũng", projects: ["P4"] },
// ];
// const groupByProject = (employees) => {
//   return employees.reduce((acc, cur) => {
//     cur.projects.forEach((item) => {
//       acc[item] = acc[item] || [];
//       acc[item].push(cur.name);
//     });
//     return acc;
//   }, {});
// };
// console.log(groupByProject(employees));

// const getMaxProject = (employees) => {
//   return Object.entries(groupByProject(employees)).reduce((acc, cur) => {
//     const projectName = cur[0];
//     const list = cur[1];
//     if(list.length > acc.count) {
//       return {
//         project: projectName,
//         count: list.length,
//       };
//     }
//     return acc;
//   }, {
//     count: 0,
//   });
// };

// console.log(getMaxProject(employees));
showGreeting("bài 8");
// const reviews = [
//   { productId: "P1", userId: "U1", rating: 5 },
//   { productId: "P2", userId: "U2", rating: 4 },
//   { productId: "P1", userId: "U3", rating: 3 },
//   { productId: "P3", userId: "U1", rating: 4 },
//   { productId: "P2", userId: "U3", rating: 2 },
//   { productId: "P1", userId: "U2", rating: 4 },
// ];
//  const getReviewAvg = (reviews) => {
//   const grouped = reviews.reduce((acc, cur) => {
//     acc[cur.productId] = acc[cur.productId] || [];
//     acc[cur.productId].push(cur.rating);
//     return acc;
//   }, {});
//   return Object.entries(grouped).map((item) => {
//     const productId = item[0];
//     const ratingList = item[1];
//     return {
//       productId,
//       avg:
//       ratingList.reduce((acc, cur) => {
//         return acc + cur;
//       }, 0) / ratingList.length,
//     };
//   });
//  };
//  console.log(getReviewAvg(reviews));

// const getTopProduct = (reviews) => {
//   return getReviewAvg(reviews).reduce((acc, cur) => {
//     if(cur.avg > acc.avg) {
//       return cur;
//     }
//     return acc;
//   });
// };
// console.log(getTopProduct(reviews));

// const getGroupByproduct = (reviews) => {
//   return reviews.reduce((acc, cur) => {
//     acc[cur.productId] = acc[cur.productId] || [];
//     acc[cur.productId].push({
//       user: cur.userId,
//       rating: cur.rating,
//     });
//     return acc;
//   }, {});
// };
// console.log(getGroupByproduct(reviews));

showGreeting("bài 9");
// const transactions = [
//   { id: 1, account: "A", type: "deposit", amount: 1000 },
//   { id: 2, account: "B", type: "withdraw", amount: 200 },
//   { id: 3, account: "A", type: "withdraw", amount: 500 },
//   { id: 4, account: "C", type: "deposit", amount: 700 },
//   { id: 5, account: "B", type: "deposit", amount: 300 },
// ];

// const getBlance = (transactions) => {
//   return transactions.reduce((acc, cur) => {
//     acc[cur.account] = acc[cur.account] || 0;
//     acc[cur.account] += cur.type === "deposit" ? cur.amount : -cur.amount;
//     return acc;
//   }, {});
// };
// console.log(getBlance(transactions));

// const getMaxAccount = (transactions) => {
//   return Object.entries(getBlance(transactions)).reduce((acc, cur) => {
//     const accountName = cur[0];
//     const blance = cur[1];
//     if (blance > acc.blance) {
//       return {
//         account: accountName,
//         blance,
//       };
//     }
//     return acc;
//   }, {
//     blance: 0,
//   });
// };
// console.log(getMaxAccount(transactions));