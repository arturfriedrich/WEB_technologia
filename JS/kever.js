const kever = (tomb) => {
    for (let i=tomb.length-1; i>=1; i--) {
        let j = Math.floor(Math.random() * i)
        let tarolo = tomb[i]
        tomb[i] = tomb[j]
        tomb[j] = tarolo
    }
    return tomb
}

let lista = [0, 1, 2, 3, 4]
console.log(kever(lista))