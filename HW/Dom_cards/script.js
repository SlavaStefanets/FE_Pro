let names = [
    {id: 1, name: 'Steven', image: 'https://i.ibb.co/tXqmKKR/1.png', salary: '5000'},
    {id: 2, name: 'Neena', image: 'https://i.ibb.co/yYxK3cq/2.png', salary: '10000'},
    {id: 3, name: 'John', image: 'https://i.ibb.co/SNqFDbB/3.png', salary: '4500'},
    {id: 4, name: 'Rogers', image: 'https://i.ibb.co/WnG0fVZ/4.png', salary: '3400'},
    {id: 5, name: 'Cevin', image: 'https://i.ibb.co/vdQK54J/6.png', salary: '500'},
    {id: 6, name: 'Alshey', image: 'https://i.ibb.co/wSJN6db/5.png', salary: '1210'},
    {id: 7, name: 'Milki', image: 'https://i.ibb.co/JpnDnH5/7.png', salary: '1210'},
    {id: 8, name: 'Polar', image: 'https://i.ibb.co/SnNLhgg/9.png', salary: '1210'},
    {id: 9, name: 'Grindell', image: 'https://i.ibb.co/fGH3RPW/8.png', salary: '1210'},
];


let root_div = document.querySelector('#root')
for(let elem of names){
let cards_div = document.createElement('div')
cards_div.className = 'cards'
root_div.prepend(cards_div)

let img_div = document.createElement('img')
img_div.src = elem.image
cards_div.prepend(img_div)

let element_of_cards = document.createElement('div')
element_of_cards.className = 'element_of_cards'
cards_div.append(element_of_cards)

let name_div = document.createElement('div')
name_div.className = 'name'
name_div.innerText = `Name: ${elem.name}`
element_of_cards.prepend(name_div)

let salary_div = document.createElement('div')
salary_div.className = 'salary'
salary_div.innerText = `Salary: ${elem.salary}`
element_of_cards.append(salary_div)

let id_div = document.createElement('div')
id_div.className = 'id'
id_div.innerText = `User Namber: ${elem.id}`
element_of_cards.append(id_div)
};







