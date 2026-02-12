const Calculator = require('../src/calculator');

describe('Calculator', () => {
  let calc;

  beforeEach(() => {
    calc = new Calculator();
  });

  test('should add two numbers correctly', () => {
    expect(calc.add(2, 3)).toBe(5);
    expect(calc.add(-1, 1)).toBe(0);
    expect(calc.add(0, 0)).toBe(0);
  });

  test('should subtract two numbers correctly', () => {
    expect(calc.subtract(5, 3)).toBe(2);
    expect(calc.subtract(0, 5)).toBe(-5);
  });

  test('should multiply two numbers correctly', () => {
    expect(calc.multiply(3, 4)).toBe(12);
    expect(calc.multiply(-2, 3)).toBe(-6);
    expect(calc.multiply(0, 100)).toBe(0);
  });

  test('should divide two numbers correctly', () => {
    expect(calc.divide(10, 2)).toBe(5);
    expect(calc.divide(9, 3)).toBe(3);
  });

  test('should throw error when dividing by zero', () => {
    expect(() => calc.divide(5, 0)).toThrow("Cannot divide by zero");
  });
});