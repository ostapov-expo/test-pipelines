const math = require('./main');

describe('Math Module', () => {
    describe('factorial', () => {
        test('factorial(0) should return 1', () => {
            expect(math.factorial(0)).toBe(1);
        });

        test('factorial(1) should return 1', () => {
            expect(math.factorial(1)).toBe(1);
        });

        test('factorial(5) should return 120', () => {
            expect(math.factorial(5)).toBe(120);
        });

        test('factorial(10) should return 3628800', () => {
            expect(math.factorial(10)).toBe(3628800);
        });

        test('factorial(-1) should throw error', () => {
            expect(() => math.factorial(-1)).toThrow('Factorial is not defined for negative numbers');
        });
    });

    describe('fibonacci', () => {
        test('fibonacci(0) should return 0', () => {
            expect(math.fibonacci(0)).toBe(0);
        });

        test('fibonacci(1) should return 1', () => {
            expect(math.fibonacci(1)).toBe(1);
        });

        test('fibonacci(5) should return 5', () => {
            expect(math.fibonacci(5)).toBe(5);
        });

        test('fibonacci(10) should return 55', () => {
            expect(math.fibonacci(10)).toBe(55);
        });

        test('fibonacci(-1) should throw error', () => {
            expect(() => math.fibonacci(-1)).toThrow('Fibonacci is not defined for negative numbers');
        });
    });

    describe('fibonacciIterative', () => {
        test('fibonacciIterative(0) should return 0', () => {
            expect(math.fibonacciIterative(0)).toBe(0);
        });

        test('fibonacciIterative(1) should return 1', () => {
            expect(math.fibonacciIterative(1)).toBe(1);
        });

        test('fibonacciIterative(5) should return 5', () => {
            expect(math.fibonacciIterative(5)).toBe(5);
        });

        test('fibonacciIterative(10) should return 55', () => {
            expect(math.fibonacciIterative(10)).toBe(55);
        });

        test('fibonacciIterative(-1) should throw error', () => {
            expect(() => math.fibonacciIterative(-1)).toThrow('Fibonacci is not defined for negative numbers');
        });
    });
});
