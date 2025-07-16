const palindromes = function (str) {
    
    const reverse = str.replaceAll(" ","")
    .replace(/[^\w\s]|_/g, '')
    .split('')
    .reverse()
    .join('')
    .toLowerCase();

    const str1 = str.replaceAll(" ","")
    .replace(/[^\w\s]|_/g, '')
    .toLowerCase();
    
    return str1 === reverse
        
};

// Do not edit below this line
module.exports = palindromes;
