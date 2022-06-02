// коллекция с возвратом массива. второй тест возвращает fail (0 !== -0)

import reverseAndNegate from '../utils/reverse.js';

describe("array expected to be reversed and negated", () => {
    it("1, -2, 5, 4 expected -4, -5, 2, -1", () => {
        const array = [1, -2, 5, 4];
        expect(reverseAndNegate(array)).toStrictEqual([-4, -5, 2, -1]);
    }),
        it("8, 91, -140, 442, 0 expected 0, -442, 140, -91, -8 ", () => {
            const array = [8, 91, -140, 442, 0];
            expect(reverseAndNegate(array)).toStrictEqual([0, -442, 140, -91, -8]);
        })
})
