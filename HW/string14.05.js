// 1 ---------------

// function checkEmail(string){
//     if ( string.includes('@') && string.includes('.')){
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log();


// 2 ------------------

// function initCap(string){
//     let result = string.charAt(0).toUpperCase() + string.slice(1)

//     return console.log(result);

// }
// initCap('slava')

// 3 ______------------

// let cards = [ 
//     '4000 0012 0056 9499', 
//     '4000 0013 5456 7379', 
//     '4000 0014 1456 9869', 
//     '4000 0015 3466 7859',
//     '4000 0016 3556 6899', 
//     '4000 0017 4456 4699' 
// ]    

// function  clearDataCards(array){
//     let finishcards = [];
//     for(let i = 0; i < array.length; i ++){
//         let oldCard = array[i];
//         let newCards =`**** ${oldCard.substring(5, 14)} ****`;

//         finishcards.push(newCards);
//     }
//     return finishcards;
// }
// console.log(clearDataCards(cards));


// 4------------

// let elems = [
//     '<div><p class="text">Home</p></div>', 
//     '<div><p class="text">About</p></div>', 
//     '<div><p class="text">FAQ</p></div>', 
//     '<div><p class="text">Contacts</p></div>' 
//     ]

//     function clearDate(array){
//         for(let i = 0; i < array.length; i++){
//             let index = array[i].indexOf('</p>')
//             array[i] = array[i].slice(21,index)
//             console.log(array[i]);
//         }
//     }
//     clearDate(elems)



