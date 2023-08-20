let div_root = document.querySelector('#root')

let url = "https://dummyjson.com/products"

fetch(url)
    .then(res => res.json())
    .then(data => render(data.products))


    function render(array){
        for(let elem of array){
            let elements_div = document.createElement('div')
            elements_div.className = 'card'

            let img = document.createElement('img')
            let title_p = document.createElement('p')
            let price_p = document.createElement('p')
            let rating_div = document.createElement('div')
            
            

            img.src = elem.thumbnail
            img.height = 150
            img.width = 250
            title_p.innerHTML = elem.title
            price_p.innerHTML = elem.price 
            rating_div.className = ('rating_div')
            
            
            elements_div.append(img, title_p, price_p, rating_div,)
            
            div_root.append(elements_div)

            rating(elem.rating, rating_div)
        }
    }
        
    

  function rating(ratingFloat, rating_div){

    let ratingMath = Math.round(ratingFloat)
    
    for(let i = 0; i < 5; i++){
        let stars_span = document.createElement('span')
        stars_span.className = i < ratingMath ? 'fa fa-star active' : 'fa fa-star'
        rating_div.append(stars_span)
    }
}
