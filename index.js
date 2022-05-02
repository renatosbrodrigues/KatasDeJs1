//oneThroughTwenty - Retornar os números de 1 a 20. (1, 2, 3,…, 19, 20)
for (let i = 0; i < 21; i++) {
    //console.log(i)
}

//evensToTwenty - Retornar os números pares de 1 a 20. (2, 4, 6,…, 18, 20)
for (let i = 0; i < 21; i++) {

    if (i % 2 == 0) {
        //console.log(i)
    }

}

//oddsToTwenty - Retornar os números ímpares de 1 a 20. (1, 3, 5,…, 17, 19)

for (let i = 0; i < 21; i++) {

    if (i % 2 !== 0) {
       //console.log(i)
    }

}

//multiplesOfFive - Retornar os múltiplos de 5 até 100. (5, 10, 15,…, 95, 100)

for (let i = 0; i < 101; i++) {

    if (i % 5 === 0) {
       //console.log(i)
    }

}

//squareNumbers - Retornar todos os números até 100 que forem quadrados perfeitos. (1, 4, 9, …, 81, 100) 

for (let i = 0; i < 101; i++) {
    let raizQuadrada = Math.sqrt(i)
    if (Number.isInteger(raizQuadrada) === true) {
       //console.log(i)
    }

}

//countingBackwards - Retornar os números contando de trás para frente de 20 até 1. (20, 19, 18, …, 2, 1)

for (let i = 20; i > 0 ; i--) {
    //console.log(i)
}

//evenNumbersBackwards - Retornar os números pares de 20 até 1. (20, 18, 16, …, 4, 2)

for (let i = 20; i > 0 ; i--) {
    
    if(i % 2 === 0){
        //console.log(i)
    }
    
}

//oddNumbersBackwards - Retornar os números ímpares de 20 até 1. (19, 17, 15, …, 3, 1)
for (let i = 20; i > 0 ; i--){
    if (i % 2 !== 0){
        console.log(i)
    }
}



