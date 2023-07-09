
// Решите ряд задач на методы массива:

1// Посчитайте количество юзеров, у которых ID представляет нечетное число
2// Посчитайте сумму всех зарплат в массиве
3// Посчитайте количество юзеров, у которых в имени есть буква ‘e’
4// Найдите запись, где зарплата будет не кратна 100
5// Найдите запись, где вычисляется квадратный корень у атрибута ID без остатка
6// Найдите запись, где вычисляется квадратный корень у длины имени


let names = [
    {id: 1, name: 'Steven', salary: '5000'},
    {id: 2, name: 'Neena', salary: '10000'},
    {id: 3, name: 'John', salary: '4500'},
    {id: 4, name: 'Rogers', salary: '3400'},
    {id: 5, name: 'Cevin', salary: '500'},
    {id: 6, name: 'Alshey', salary: '1210'},
    {id: 7, name: 'Milki', salary: '110'},
    {id: 8, name: 'Polar', salary: '120'},
    {id: 9, name: 'Grindell', salary: '10'},
    ]
//  --------------------  1
    // let result = 1
    // for(let elem of names){
    //     if(elem.id % 2 !== 0){
    //        console.log(result ++);
    //     }
        
    // }

    // -------------------- 2
    // let sum = 0
    // for (let elem of names){
        
    //     sum += parseInt(elem.salary)
    //     // console.log(sum);
    // }
    // console.log(sum);


    // ----------------   3

    // let users = 0
    // for(let elem of names){
    //     if(elem.name.includes('e')){
    //         users ++
    //     }
    // }
    // console.log(users);

    // --------------- 4

    let result = names.find((values) => values % 100 !== 0)
    console.log(result);

    // ----------------- 5

    // I dont No 

    // ---------------- 6


   
    
    