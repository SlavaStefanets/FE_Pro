function Description(){

//    let name = 'Alex'
//    let number = 50
//    let bool = false

    // return (
    //  <div>
    //      <p>{name}</p>
    //     <p id= {name}>{number * 10}</p>

    //     <h1>{(number > 50) ? 'number > 50' : 'number < or = 50'}</h1>

    //     {(bool) ? <h1>Text</h1> : <p>Pragraf</p>}
    //  </div>
    // )

    // Задан объект productInfo
    // На стороен разметки необходимо создать два тега h1 и p
    // h1 должен пердавать значение имени продукта
    // p должен отображать текстовое сво-во 'Sale!' (красного цвета) по условию: 
    // Если товар продается со скидкой, параграф должен оказаться на размкетке, 
    // если скидки нет - параграфа быть не должно

    // let productInfo = {
    //     name: 'Велосипед',
    //     price: 199,
    //     salePrice: 199
    //   }
    //   let isSale = productInfo.price !== productInfo.salePrice

    // return (
    //     <div>
    //         <h1>{productInfo.name}</h1>
            
    //         {isSale && <p style={{color: 'red'}}>Sale!</p>}
    //     </div>
    // )

    // ________________
    // -------------------
    // Зданаие: задана переменная num с числовым значением
    // Если числовой тип делится на 2 без остатка, в компонетне 
    // должен появиться заголовок h1 с значением Вычисляется, если нет - обычный параграф с 
    // значением не вычисляется
  
//     let num = 9

//     return(
//         <div>
//             {(num % 2 === 0) ? <h1>+</h1> : <p>-</p>}
//         </div>
//     )
// --------------------
    // Заданы две переменые size и color
    // Необходимо создать div элемента с указанными размерами в зависимости от занчение переменной size 
    // а также фоном, котоый передаетсяв занчении color
    // в случае, если size будет xl, размеры элемента должна быть 400х400
    // l - 200x200
    // m - 100x100
    // color передает текстовый тип цвета. 
    // 'red', 'blue', 'purple'

    let size = 'l'
    let color = 'purple'

    let sizeObj = {}

    if ( size == 'xl'){
        sizeObj.width = '400'
        sizeObj.height = '400'
       } else if ( size === 'l'){
        sizeObj.wiedth = '200'
        sizeObj.height = '200'
       } else if (size === 'm'){
        sizeObj.wiedth = '100'
        sizeObj.height = '100'
       }

    return(
        <div style= {{
            wiedth: sizeObj.width,
            height: sizeObj.height,
            backgroundColor: color
        }}>
          
        </div>
    )

}

  export default Description