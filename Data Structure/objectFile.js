

class Car{
    constructor(name, model, year){
        this.name = name;
        this.model = model;
        this.year = year;
    }

    start(kmPerHr){
        console.log(`I am starting the car with a speed of ${kmPerHr} kilometer per`)
    }
    stop(){
        console.log('The car is stopping')
    }

    reverse(){
        console.log('The car is reversing')
    }
}

const car1 = new Car('Toyota', 'Camry', 2020)
console.log(car1.model)
console.log(car1['model'])
console.log(car1.name)
console.log(car1.year)
car1.year = 2022; 
console.log(car1.year)

const result2 = car1.start(50)
console.log(result2)
car1.reverse()
car1.stop()

console.log(car1)

const car2 = new Car('Lexus', 'ES350', 2012)

car2.start(140);
car2.reverse()
car2.stop()

console.log(car2)

const aStudent = {
    name : 'Amaka',
    age: 18, 
    gender: 'female',
    complexion: 'fair',
    height: '7',
    run: function(){
        console.log(`${this.name} is running`)
    }
}

aStudent.run()
