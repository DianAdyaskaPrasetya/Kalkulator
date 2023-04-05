const numbers = document.querySelectorAll(".number")
numbers.forEach((number) =>{
    number.addEventListener("click", (event) =>{
        console.log(event.target.value)
    });
});
const calculatorScreen = document.querySelector(`.calculator-screen`);

const updateScreen = (number) => {
    calculatorScreen.value = number;
}
//input number
let prevNumber=''
let calculationOperator=''
let curentNumber=''

const inputNumber = (number) => {
    if (curentNumber === '0'){
        curentNumber = number
    }
    else {
        curentNumber += number
    }
}
numbers.forEach((number) =>{
    number.addEventListener("click", (event) =>{
        inputNumber(event.target.value)
        updateScreen(curentNumber)
    });
});

//operator
const operators = document.querySelectorAll(".operator")

operators.forEach((operator) =>{
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
    })
})

const inputOperator= (operator) => {
    prevNumber = curentNumber
    calculationOperator = operator
    curentNumber = ''
}

const precentage = document.querySelectorAll(".precentage")

precentage.forEach((percent) =>{
    percent.addEventListener("click", (event) => {
        inputPercent(event.target.value)
    })
})

const inputPercent= (percent) => {
    prevNumber = curentNumber
    calculationOperator = percent
    curentNumber = ''
}

//kalkulasi
const equalSign = document.querySelector(".equal-sign")

equalSign.addEventListener('click', () => {
    calculate()
    updateScreen(curentNumber)
})

const calculate = () => {
    let result= ''
    switch (calculationOperator) {
        case '+':
            result = parseFloat(prevNumber) + parseFloat(curentNumber)
            break
        case '-':
            result = parseFloat(prevNumber) - parseFloat(curentNumber)
            break
        case '*':
            result = parseFloat(prevNumber) * parseFloat(curentNumber)
            break
        case '/':
            result = parseFloat(prevNumber) / parseFloat(curentNumber)
            break
        case '%':
            result = parseFloat(prevNumber) % parseFloat(curentNumber)
            break
        default:
            break
    }
    curentNumber = result
    calculationOperator = ''
}

//ac button
const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(curentNumber)
})

const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    curentNumber = ''
}

//decimal
const decimal = document.querySelector('.decimal')

decimal.addEventListener('click', (event) =>{
    inputDecimal(event.target.value)
    updateScreen(curentNumber)
})

inputDecimal = (dot) =>{
    curentNumber += dot
} 