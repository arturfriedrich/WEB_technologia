let csillag = '*'
let kimenet = ""
for ( let i=0; i<8; i++ ) {
    for ( let j=0; j<8; j++ ) {
        if ( (i+j)%2 == 1 ) { kimenet += csillag } else { kimenet += ' ' } 
    }
    kimenet += '\n'
}

console.log(kimenet)