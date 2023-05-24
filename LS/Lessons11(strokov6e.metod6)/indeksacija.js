// function checkString(string, substring){
    
//     if( string.includes (substring)){
//         console.log("существует"); 
//     } else {
//         console.log('no');
//     }
// };
// checkString('hello', 'he')

// Определить индекс второй подстроки 'date' у переменной string.
// Код должен работать на 2 тестах
// 1-ый тест
// let string = 'date 10.10.10 date 20.20.20 date 30.30.30' 
// 14    

// 2-ой тест
// let string = '10.10.10.10.10.10 date 20.20.20 date 30.30.30 date'   
// 32

// let result = string.indexOf('date', string.indexOf('date',) + 1)
//      console.log(result)

function test(string, substring){
    if (string.includes (substring)){
        console.log('yes');
    } else {
        
        console.log('No');
    }
};
test('My love Anja', 'e An')
