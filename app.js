function evenOrOdd(a){

    if (a % 2 == 0 ) {
        return `true`
    }else{
        return `false`
    }

    
}

evenOrOdd()




function perimeterSquare(a){
    console.log(a * 4);

    return a * 4
}

perimeterSquare()



function perimeterRect(a, b){
    console.log((a + b) * 2);


    return (a + b) * 2
}

perimeterRect()






function getCurrencySymbolFromCode(a) {
    
    
    if (a === "USD") {
        return "$"
    } else if (a === "EUR") {
        return "€"
    } else if (a === "GEL") {
        return "ლ"
    } else {
        return "We don't have that symbol here"
    }
    
    
    
}


getCurrencySymbolFromCode()










const myArr = [
    {
        name: "someone",
        age: 25,
    },
    {
        name: "someone",
        age: 35,
    },
    {
        name: "someone",
        age: 45,
    },
    {
        name: "someone",
        age: 55,
    },
    {
        name: "someone",
        age: 65,
    }
]

const filters = myArr.filter(el => {
    return el.age < 25
})


console.log(filters);