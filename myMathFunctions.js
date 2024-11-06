function addTwoNumbers(a, b) {
    return a + b
}

function squareNumber(num) {
    return num * num
}

const myFavNumber = 55

// The module pattern
// at the end, export what you want

const mathFunctionsExport = {
    addTwoNumbers,
    squareNumber,
    myFavNumber
}

module.exports = mathFunctionsExport