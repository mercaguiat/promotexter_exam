function keypadCombinations(digits: string): string[] {
    if (digits.length === 0) {
        return [];
    }

    const digitMap: Record<string, string[]> = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z'],
    };

    const result: string[] = [];

    function backRead(index: number, currentCombination: string): void {
        if (index === digits.length) {
            result.push(currentCombination);
            return;
        }

        const currentDigit = digits[index];
        const letters = digitMap[currentDigit];

        for (const letter of letters) {
            backRead(index + 1, currentCombination + letter);
        }
    }

    backRead(0, '');

    return result;
}

// Test cases
console.log(keypadCombinations('23')); // Output: [ 'ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf' ]
console.log(keypadCombinations(''));   // Output: []
console.log(keypadCombinations('2'));  // Output: [ 'a', 'b', 'c' ]
console.log(keypadCombinations('3579')); // Other sample
console.log(keypadCombinations('97')); // Other sample
