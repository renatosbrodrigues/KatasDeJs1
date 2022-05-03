

function oneThroughTwenty(num) {

    for (let i = 0; i < num; i++) {
        console.log(i)
    }
}

function evensToTwenty(num) {

    for (let i = 0; i < num; i++) {

        if (i % 2 == 0) {
            console.log(i)
        }

    }
}

function oddsToTwenty(num) {

    for (let i = 0; i < num; i++) {

        if (i % 2 !== 0) {
            console.log(i)
        }

    }
}

function multiplesOfFive(num) {

    for (let i = 0; i < num; i++) {

        if (i % 5 === 0) {
            console.log(i)
        }

    }
}

function squareNumbers(num) {

    for (let i = 0; i < num; i++) {
        let raizQuadrada = Math.sqrt(i)
        if (Number.isInteger(raizQuadrada) === true) {
            console.log(i)
        }

    }
}

function countingBackwards(num) {

    for (let i = num; i > 0; i--) {
        console.log(i)
    }
}

function evenNumbersBackwards(num) {

    for (let i = num; i > 0; i--) {

        if (i % 2 === 0) {
            console.log(i)
        }

    }
}

function oddNumbersBackwards(num) {

    for (let i = num; i > 0; i--) {
        if (i % 2 !== 0) {
            console.log(i)
        }
    }
}

function multiplesOfFiveBackwards(num) {

    for (let i = num; i > 0; i--) {
        if (i % 5 === 0) {
            console.log(i)
        }
    }
}

function squareNumbersBackwards(num) {

    for (let i = 101; i > 0; i--) {
        let raizQuadrada = Math.sqrt(i)
        if (Number.isInteger(raizQuadrada) === true) {
            console.log(i)
        }
    }
}