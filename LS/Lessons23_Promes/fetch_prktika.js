const input = document.querySelector("input");

input.addEventListener("input", () => {
  console.log("render");
});


// Serch !!!!!!

const base = ["a", "b", "ac", "bc", "d", 'sdv', 'ay']

// const search = base.filter((el) => {
//   return el.includes("b")
// })

const search = base.reduce((acc, el) => {
  el.includes("a") ? acc.push(el) : null
  return acc;
}, [])

console.log(search);