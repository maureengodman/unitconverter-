/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const headingEl = document.getElementById("heading")
const convertEl = document.getElementById("convert-btn")
const valueEl = document.getElementById("value-el")
headingEl.textContent = "Matric/Imperial Unit Conversion"
convertEl.textContent = "Convert"

let meter = document.getElementById("convert-meter")
let liter =document.getElementById("convert-liter")
let kilo = document.getElementById("convert-kilo")

convertEl.addEventListener("click", function(){
    let f = valueEl.value 

    let i = f * 3.281
    let j = f * 0.3048

    let l = f * 0.264
    let g = f * 3.785

    let k = f * 2.2046
    let p = f * 0.4536




    meter.textContent = `${valueEl.value} meters = ${i.toFixed(3)} feet | ${valueEl.value} feet = ${j.toFixed(4)} meters`
    liter.textContent = `${valueEl.value} liters = ${l.toFixed(3)} gallons | ${valueEl.value} gallons = ${g.toFixed(3)} liters`
    kilo.textContent = `${valueEl.value} kilo = ${k.toFixed(3)} pound | ${valueEl.value} pound = ${p.toFixed(4)} kilo`



})