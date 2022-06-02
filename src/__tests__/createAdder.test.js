// задача 3 из раздела 4 (функции), функция-обертка

import createAdder from '../utils/createAdder.js';

describe("expected number after adding", () => {
    it("4", () => {
        const add5 = createAdder(5);
        expect(add5(4)).toBe(9);
    }),
        it("string", () => {
            const add5 = createAdder("5");
            expect(add5(4)).toBe("54");
        }),
        it("boolean true", () => {
            const add5 = createAdder(true);
            expect(add5(4)).toBe(5);
        })
        it("boolean true", () => {
            const add5 = createAdder(false);
            expect(add5(4)).toBe(4);
        })
})

