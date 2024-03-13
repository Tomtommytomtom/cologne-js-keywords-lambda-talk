const ZERO = f => x => x
const ONE = f => x => f(x)
const TWO = f => x => f(f(x))
const THREE = f => x => f(f(f(x)))
const FOUR = f => x => f(f(f(f(x))))
const FIVE = f => x => f(f(f(f(f(x)))))
const SIX = f => x => f(f(f(f(f(f(x))))))

const ADD = a => b => f => x => a(f)(b(f)(x))

const MULT = a => b => f => a(b(f))

//debug only
const toInt = n => n(n => n+1)(0)

console.log(toInt(MULT(THREE)(TWO)))