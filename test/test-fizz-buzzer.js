'use strict';

const expect = require('chai').expect;

// import adder
const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {
  it('should return expected string from numbers', function(){ 
    const normalCases = [
      {a : 15, expected : 'fizz-buzz'}, 
      {a : 0, expected : 'fizz-buzz'},
      {a : 5, expected : 'buzz'}, 
      {a : -3, expected : 'fizz'},
      {a : 6, expected : 'fizz'}, 
      {a : 10, expected : 'buzz'},
      {a : 30, expected : 'fizz-buzz'}
    ]; 

    normalCases.forEach(function(argument) { 
      const result = fizzBuzzer(argument.a); 
      expect(result).to.equal(argument.expected); 
    }); 
  }); 

  it('should return expected number if not divisble by 3, 5, or 15', function() { 
    const edgeCases = [
      {a : 2, expected : 2}, 
      {a : 4, expected : 4}, 
      {a : -2, expected : -2}, 
      {a : 1, expected : 1},  
    ]; 

    edgeCases.forEach(function(input) { 
      const result = fizzBuzzer(input.a); 
      expect(result).to.equal(input.expected); 
    }); 
  }); 

  it('should return expected error', function(){ 
    const errorCases = [
      'cheese', 'nan', false, undefined, null, 'brocolli'
    ]; 

    errorCases.forEach(function(input) { 
      expect(function() { 
        fizzBuzzer(input[0]); 
      }).to.throw(Error);  
    }); 
  }); 
}); 