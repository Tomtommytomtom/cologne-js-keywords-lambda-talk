import { test, expect } from "bun:test"
import { _0,_1,_2,_3,_4,_5, toInt, ADD } from "."

test("Numbers are correct", () => {
    expect(toInt(_0)).toBe(0)
    expect(toInt(_1)).toBe(1)
    expect(toInt(_2)).toBe(2)
    expect(toInt(_3)).toBe(3)
    expect(toInt(_4)).toBe(4)
    expect(toInt(_5)).toBe(5)
})

test("Addition is correct", () => {
    expect(toInt(ADD(_2)(_3))).toBe(5)
    expect(toInt(ADD(_3)(_2))).toBe(5)
})