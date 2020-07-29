const { expect } = require("chai");
//const expect = require('chai').expect;
const calculator = require('../src/calculator');
describe('calculator', () => {
    describe('addition', () => {
        it('can add two integers', () => {
            const answer = calculator.add(2,2);
            expect(answer).to.equal(4);

        })
    });

    describe('subration', () => {
        it('can subtract two numbers', () => {
            const answer = calculator.subtract(10,2);
            expect(answer).to.equal(8);
        })
    })
})