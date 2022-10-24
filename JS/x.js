let csillag = '*'
let kimenet = ""
for ( let i=0; i<5; i++ ) {
    for ( let j=0; j<5; j++ ) {
        if ( i-j == 0 | i+j == 4 ) { kimenet += csillag } else { kimenet += ' '}
    }
    kimenet += '\n'
}

console.log(kimenet)