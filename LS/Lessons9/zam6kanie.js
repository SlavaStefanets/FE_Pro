// function handle(){
//     let user = 'admin'
//     return function(){
//         console.log(useer);
//     }
// }
// let message = handle()

// message()


function getCounter(){
    let counter = 0
    return function(){
        counter += 1
        console.log(counter)
    }
}
let count1 = getCounter()

count1()
count1()