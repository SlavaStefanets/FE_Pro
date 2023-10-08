// const arr = [2, 4, 8, 6];

// arr.forEach((el, ind, arr) => {
//   console.log(el * 10);
// });

// Array.prototype.myForEach = function (callback) {
//   for (let i = 0; i < this.length; i++) {
//     callback(this[i], i, this);
//   }
// };

// arr.myForEach((el) => {
//   console.log(el * 10);
// });

// myMap

// const result = arr.map((el) => el / 2);

// console.log(result);





const arr = [2, 4, 8, 6]

arr.prototype.mymap() = function(callback){
    const result = []

        for (let i = 0; i < this.length; i++)
        result.push(callback(this[i], i, this));
    return result;
}

const result = arr.mymap((el, ind) => el / 20 + ind);