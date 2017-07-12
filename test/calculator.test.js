import calculator from '../src/calculator.js';

describe('calculator', function () {
	
	it('1 + 1 should equal 2', function () {
		expect(calculator.sum(1, 1)).to.equal(2);
	});

});