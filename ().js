let o = 'yo'

let x = ((o = 'foo'), 44 * 0, typeof NaN)

console.log(x)

o
