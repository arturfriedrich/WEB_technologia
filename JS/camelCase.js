let szoveg = ["java", "script"]

function toCamelCase(array) {
    let newArray = []
    for ( let word in array ) {
        newArray.push(word == 0 ? array[word].toLowerCase() : array[word][0].toUpperCase() + array[word].slice(1).toLowerCase())
    }
    return newArray.join('')
}

console.log(toCamelCase(szoveg))