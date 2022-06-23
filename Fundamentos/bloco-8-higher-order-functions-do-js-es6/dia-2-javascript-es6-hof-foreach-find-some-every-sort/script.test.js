const {result1} = require('./script');

describe ('The result1 function', () => {
    it ('is a function', () => {
        expect(typeof result1).toBe('function'); 
    });
    it('multiplies each number by 3', () => {
        expect(result1([])).toEqual([]);
        expect(result1([1,2,3,4,5,6,7,8,9,10])).toEqual([1,2,3,4,5,6,7,8,9,10]);
        expect(result1([-2,1,-5])).toEqual([-6,3,-15]);

    });
});