/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const MAX_INT = 2**31 - 1;
    const MIN_INT = -(2**31);

    let reversed = 0;
    
    while (x !== 0) {
        const digit = x % 10;
        x = Math.trunc(x / 10);
        
        if (reversed > Math.trunc(MAX_INT / 10) || (reversed === Math.trunc(MAX_INT / 10) && digit > 7)) {
            return 0;
        }
        
        if (reversed < Math.trunc(MIN_INT / 10) || (reversed === Math.trunc(MIN_INT / 10) && digit < -8)) {
            return 0;
        }
        
        reversed = reversed * 10 + digit;
    }

    return reversed;
};