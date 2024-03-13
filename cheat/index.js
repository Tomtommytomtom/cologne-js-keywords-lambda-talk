//step 1, basic arithmetic with functions
const _0 = f => x => x
const _1 = f => x => f(x)
const _2 = f => x => f(f(x))
const _3 = f => x => f(f(f(x)))
const _4 = f => x => f(f(f(f(x))))
const _5 = f => x => f(f(f(f(f(x)))))
const _6 = f => x => f(f(f(f(f(f(x))))))
const _7 = f => x => f(f(f(f(f(f(f(x)))))))
const _8 = f => x => f(f(f(f(f(f(f(f(x))))))))
const _9 = f => x => f(f(f(f(f(f(f(f(f(x)))))))))
const _10 = f => x => f(f(f(f(f(f(f(f(f(f(x))))))))))

const ADD = a => b => f => x => a(f)(b(f)(x))

const PRED = n => f => x => n(g => h => h(g(f)))(_ => x)(u => u)

const SUB = a => b => b(PRED)(a)

const MULT = a => b => f => a(b(f))

const toInt = n => n(x => x + 1)(0)

//step 2, logic
const TRUE = a => b => a
const FALSE = a => b => b

const OR = a => b => a(a)(b)
const AND = a => b => a(b)(a)

const IF_THEN_ELSE = a => b => c => a(b)(c)

const NOT = a => a(FALSE)(TRUE)

//step 3, predicates
const IS_ZERO = n => n(_ => FALSE)(TRUE)

const LT_EQ = a => b => IS_ZERO(SUB(a)(b))
const GT = a => b => NOT(LT_EQ(a)(b))
const EQ = a => b => AND(LT_EQ(a)(b))(LT_EQ(b)(a))

const toBool = b => b(true)(false)

export {
    _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10,
    ADD, PRED, SUB, MULT, toInt,
    TRUE, FALSE, OR, AND, IF_THEN_ELSE, NOT,
    IS_ZERO, LT_EQ, GT, EQ, toBool
}