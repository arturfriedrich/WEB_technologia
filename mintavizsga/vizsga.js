function frissit(sor, oszlop) {
    let mezok = document.querySelectorAll("tr input[type='number']")
    let sorosszeg = 0
    for ( let i=0; i<3; i++ ) {
        sorosszeg += +mezok[sor*3+i].value
    }
    document.getElementById("s" + sor).textContent = sorosszeg

    let oszloposszeg = 0
    for ( let i=0; i<2; i++ ) {
        oszloposszeg += +mezok[i*3 + oszlop].value
    }
    document.getElementById("o" + oszlop).textContent = oszloposszeg
}

function szinez() {
    let oliverDb = +document.getElementById("s0").textContent
    let paliDb = +document.getElementById("s1").textContent
    let oliver = document.querySelectorAll("tr")[2].children[1]
    let pali = document.querySelectorAll("tr")[3].children[0]

    if ( oliverDb >= paliDb*2 ) {
        oliver.style = "color: red"
    } else {
        oliver.style = "color: black"
    }

    if ( paliDb >= oliverDb*2 ) {
        pali.style = "color: red"
    } else {
        pali.style = "color: black"
    }
}

window.addEventListener("load", () => {
    let mezok = document.querySelectorAll("input[type='number']")
    for ( let mezo of mezok ) {
        mezo.addEventListener("change", (e) => {
            let tomb = e.target.id.split(':')
            frissit(+tomb[1], +tomb[2])
            szinez()
        })
    }
})