class Car{
    constructor({year, model, color}){
        this.year = year
        this.model = model
        this.color = color
    }
}

class flyCar extends Car{
    constructor({year,  model, color, engine}){
        super(year, model, color)
        this.year = year
        
    }
}

const Car1 = new FlyingCar({
    year: 2910,
    model: 'fgt',
    color: 'transparent',
    engine: 'soperPoewr',
})