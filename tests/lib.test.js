const lib = require('../lib');
//  I90494
describe("FizzBuzz : I90494 : Atharsh S", () => {
    it("should return 'FizzBuzz' if input can be divide by 5 and 3", () => {
        const result = lib.FizzBuzz(15);
        expect(result).toBe('FizzBuzz');
    })
    it("should return 'Fizz' if input can be divide by 5", () => {
        const result = lib.FizzBuzz(5);
        expect(result).toBe('Fizz');
    })
    it("should return 'Buzz' if input can be divide by 3", () => {
        const result = lib.FizzBuzz(3);
        expect(result).toBe('Buzz');
    })
    it("should return 'BuzzBuzz' if input can be divide by 11", () => {
        const result = lib.FizzBuzz(11);
        expect(result).toBe('BuzzBuzz');
    })

})