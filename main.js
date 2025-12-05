// Math utility functions
const math = {
    /**
     * Calculate factorial of a number
     * @param {number} n - Non-negative integer
     * @returns {number} Factorial of n
     */
    factorial(n) {
        if (n < 0) throw new Error('Factorial is not defined for negative numbers');
        if (n === 0 || n === 1) return 1;
        return n * this.factorial(n - 1);
    },

    /**
     * Calculate nth Fibonacci number
     * @param {number} n - Position in Fibonacci sequence (0-indexed)
     * @returns {number} Fibonacci number at position n
     */
    fibonacci(n) {
        if (n < 0) throw new Error('Fibonacci is not defined for negative numbers');
        if (n === 0) return 0;
        if (n === 1) return 1;
        return this.fibonacci(n - 1) + this.fibonacci(n - 2);
    },

    /**
     * Calculate nth Fibonacci number (iterative - more efficient)
     * @param {number} n - Position in Fibonacci sequence (0-indexed)
     * @returns {number} Fibonacci number at position n
     */
    fibonacciIterative(n) {
        if (n < 0) throw new Error('Fibonacci is not defined for negative numbers');
        if (n === 0) return 0;
        if (n === 1) return 1;
        
        let a = 0, b = 1;
        for (let i = 2; i <= n; i++) {
            [a, b] = [b, a + b];
        }
        return b;
    }
};

// Export module (for Node.js)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = math;
}