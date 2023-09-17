// const url = "https://jsonplaceholder.typicode.com/todos";
// const url1 = "https://jsonplaceholder.typicode.com/users";
// const url2 = "https://jsonplaceholder.typicode.com/albums";

// function fetchData(urlData) {
//   return fetch(urlData);
// }

// Promise.all([fetchData(url), fetchData(url1), fetchData(url2)])
// .then((data) => {
//   data.forEach((el) => {
//     console.log(el.json());
//   });
// });


// const url = "https://jsonplaceholder.typicode.com/todos";
// const url1 = "https://jsonplaceholder.typicode.com/users";
// const url2 = "https://jsonplaceholder.typicode.com/albums";


// // async await

// function fetchData(urlData) {
//   return fetch(urlData)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//     });
// }

// fetchData(url);




// async function fetchAsyncData(urlData) {}

// const fetchAsyncData = async () => {};

// const fetchAsyncData = async function () {};


// async function fetchAsyngData(urlData) {
//     await fetch(urlData);

// }

// let url = 'https://jsonplaceholder.typicode.com/users'

// async function fetchData(url) {
//     let response = await fetch(url)
//     let data = await response.json()
//     console.log(data);
// }

// fetchData(url);




// async function fetchAsyncData() {
//     const response = await fetch(url);
//     const data = await response.json();
  
//     return data;
//   }
  
//   fetchAsyncData()
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });


// async function fetchAsyncData() {
//     try {
//       const response = await fetch(url);
//       const data = await response.json();
//       return data;
//     } catch (err) {
//       console.log(err);
//     }
//   }
  
//   fetchAsyncData().then((data) => {
//     console.log(data);
//   });