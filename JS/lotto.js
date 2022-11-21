let lotto = new Set

do {
    lotto.add(Math.floor(Math.random() * 90))
} while (lotto.size != 5)

const sortedLotto = Array.from(lotto).sort((a, b) => a - b)
console.log(sortedLotto)