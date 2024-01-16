function getNumberFromString(s) {
    const digitsOnly = s.replace(/\D/g, '');
    const result = parseInt(digitsOnly, 10);
    return result;
}

const inputString = "Hell5o wor6ld";
const result = getNumberFromString(inputString);
console.log(result);
