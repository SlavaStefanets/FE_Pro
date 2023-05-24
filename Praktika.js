function changeArray(array){
    newArray = [];
    for(let i = 0; i < array.length; i ++){
        if(array[i] > 0){
        newArray.push(array[i]);
    }}
    return newArray
}
console.log(changeArray([-1, 2, -3, 4, -5]));