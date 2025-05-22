// Declare and/or assign variables
const inputEl = document.querySelector("#input")
const convertBtn = document.querySelector("#convert-btn")
const resetBtn = document.querySelector("#reset-btn")
const lenEl = document.querySelector("#len-el")
const volEl = document.querySelector("#vol-el")
const massEl = document.querySelector("#mass-el")
const newP = document.createElement("p")
const resultsEl = document.querySelector(".results")
const bodyEl = document.querySelector("body")
const titleEl = document.querySelectorAll(".title")
const h4El = document.querySelectorAll("h4")
const pEl = document.querySelectorAll("p")
const mainsectionEl = document.querySelector("#main-section")
const darkBtn = document.querySelector("#dark-btn")
const moonIcon = document.querySelector("#moon-icon")
let userInput = ""
let isDarkMode = ""

// Grab the elements from the DOM

// Take users input and use it for the conversion calcs

// Ensure content loads before events access
document.addEventListener("DOMContentLoaded", (event) => {

    // Crete an convert button with a listener
    convertBtn.addEventListener("click", () => {
        render()
    })

    // resetBtn.addEventListener("click", () => {
    //     lenEl.innerHTML = ""
    //     volEl.innerHTML = ""
    //     massEl.innerHTML = ""
    //     inputEl.value = 1
    //     sliderEl.value = 1
    //     render()
    // })

    const sliderEl = document.querySelector("#slider")
    // console.log(sliderEl)

    sliderEl.addEventListener("input", function (e) {
        inputEl.value = e.target.value
        // console.log(userInput)
    })

    inputEl.addEventListener("input", function (e) {
        sliderEl.value = e.target.value
        // console.log(userInput)
    })


    // Create a function that returns the converted values for all three units
    // and generates the outputs with values rounded down to three places
        // 1 meter = 3.281 feet
        // 1 liter = 0.264 gallon
        // 1 kilogram = 2.204 pound
        
    function convert(userInput) {
        let len = `${userInput} meters = ${(userInput * 3.2808).toFixed(3)} feet | 
            ${userInput} feet = ${(userInput / 3.2808).toFixed(3)} meters`
        let volume = `${userInput} liters = ${(userInput * 0.264).toFixed(3)} gallons | 
            ${userInput} gallons = ${(userInput / 0.264).toFixed(3)} liters`
        let mass = `${userInput} kilograms = ${(userInput * 2.204).toFixed(3)} pounds | 
            ${userInput} pounds = ${(userInput / 2.204).toFixed(3)} kilograms`
        return [len, volume, mass]
    }
    render()
    
    function render() {   
        let dark = ""
        if (isDarkMode) {
            dark = ""
        } else if (!isDarkMode) {
            dark = "dark"
        }
        userInput = inputEl.value
        if (userInput) {
            let outputs = convert(userInput)
            for (let i = 0; i < 1; i++) {
                lenEl.innerHTML = `
                <div id="len-el" class="conversion">
                    <h4 class=${dark}>Length (Meter/Feet)</h4>
                    <p class=${dark}>${outputs[0]}</p>
                </div>`
                volEl.innerHTML = `
                <div id="len-el" class="conversion">
                    <h4 class=${dark}>Volume (Liter/Gallon)</h4>
                    <p class=${dark}>${outputs[1]}</p>
                </div>`
                massEl.innerHTML = `
                <div id="len-el" class="conversion">
                    <h4 class=${dark}>Mass (Kilogram/Pound)</h4>
                    <p class=${dark}>${outputs[2]}</p>
                </div>`
            } 
        }
    } 

    moonIcon.addEventListener("click", () => {
        if (bodyEl.classList.contains("dark")) {
            // moonIcon.setAttribute("fill", "white")
            isDarkMode = true
            darkMode()
            render()
            moonIcon.classList.toggle("svgtoggle")
        } else if (!bodyEl.classList.contains("dark")) {
            isDarkMode = false
            darkMode()
            render()
            moonIcon.classList.toggle("svgtoggle")
            // moonIcon.setAttribute("fill", "none")
        }
    })

    function darkMode() {
        // let array = [titleEl]
        titleEl.forEach(el => el.classList.toggle("dark"))
        h4El.forEach(el => el.classList.toggle("dark"))
        pEl.forEach(el => el.classList.toggle("dark"))
        bodyEl.classList.toggle("dark")
        resultsEl.classList.toggle("dark")
        mainsectionEl.classList.toggle("dark")
        }

    // darkMode()
    // console.log(convert(1))
    // make a light and dark mode switch

})