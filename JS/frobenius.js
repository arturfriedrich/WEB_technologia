let mat = [[ 1, 2, 3 ], [ 3, 4, 5 ]];
console.log(
    mat
        .reduce((a, b) => a.concat(b))
        .map(a => a**2)
        .reduce((a, b) => a+b)
)