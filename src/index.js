//Array
var myArray = ["Lodash", "React", "Next", "Strapi", "Axios", "Typescript"]
myArray.forEach(element => {
    console.log(element)
});

//Reversed array
console.log(myArray.reverse())

//Sorted array
console.log(myArray.sort())

var car = {
    Brand: "Dodge Challenger",
    Model: "Hellcat",
    Year: "2021"
}

//Object
console.log(car.Brand)
const paramBrand = console.log(car.Brand)
const paramModel = console.log(car.Model)
const paramYear = console.log(car.Year)

//Random number
var randomNo = Math.floor(Math.random() * 555)
console.log('Náhodné číslo je ' + randomNo)