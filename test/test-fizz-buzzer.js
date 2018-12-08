// import chai, declare expect variable
const expect = require('chai').expect;

// import fizzBuzzer
const fizzBuzzer = require('../fizzBuzzer');

// unit tests
describe('fizzBuzzer', function(){
    
    // test normal case
    it('should divide by 3, 5, 15 and return correct string', function() {
        const normalCases = [
            {a: 15, b: 15, expected: 'fizz-buzz'},
            {a: 3, b: 3, expected: 'fizz'},
            {a: 5, b: 5, expected: 'buzz'},
            {a: 9, b: 15, expected: 'fizz'},
            {a: 2, b: 3, expected: 2}
        ];

        // for each set of inputs (a, b), `fizzBuzzer` should
        // produce the expected value
        normalCases.forEach(function(input) {
            const answer = fizzBuzzer(input.a, input.b);
            expect(answer).to.equal(input.expected);
        });
    });

    // test for non-number
    it('should raise error if args not numbers', function() {
        // bad inputs where not inputting a number
        const badInputs = [
            ['foo'],
            [undefined]
        ];
        // prove error is raised for bad input
        badInputs.forEach(function(input) {
            expect(function() {
                fizzBuzzer(input[0]);
            }).to.throw(Error);
        });
    });
});

