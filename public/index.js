"use strict";

var myArray = ["Lodash", "React", "Next", "Strapi", "Axios", "Typescript"];
myArray.forEach(function (element) {
  console.log(element);
});
console.log(myArray.reverse());
console.log(myArray.sort());
var car = {
  Brand: "Dodge Challenger",
  Model: "Hellcat",
  Year: "2021"
};
console.log(car.Brand);
var paramBrand = console.log(car.Brand);
var paramModel = console.log(car.Model);
var paramYear = console.log(car.Year);
var randomNo = Math.floor(Math.random() * 555);
console.log('Náhodné číslo je ' + randomNo);