// let users = [
//     {id: 1, name: 'Alex'},
//     {id: 2, name: 'John'},
//     {id: 3, name: 'Neena'},
// ]

// console.log(users[0].name);
// glubokoe kopirivanie
// JSON.stringify() iz JS objekt6 v Json(v stroku)
// JSON.parse()


// let users = [
//     {id: 1, name: 'Alex'},
//     {id: {
//         salary: 2000,
//         isJob: {
//             isGet: true
//         }
//     }, name: 'John'},
//     {id: 3, name: [1,2,[9,10]]}
// ]


// // console.log(users[2].name[2][0])
// console.log(users[1].id.isJob.isGet);

//destrukturizacija

// let [a,b,c] = [10,20,30]

// console.log(a);
// console.log(b);
// console.log(c);


let products = [
    ['Cамокат', 400],
    ['Велосипед', 1000],
    ['Ролики', 540],
    ['Ракетки', 670]
]
for(let i of products){
    priceDiscount = products[i],[1] * 0.8; //20% discount
}
console.log(priceDiscount);