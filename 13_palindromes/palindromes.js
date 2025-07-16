const palindromes = function (str) {
    const reverse = str.replaceAll(" ","").replace(/[^\w\s]|_/g, '').split('').reverse().join('').toLowerCase();
    const str1 = str.replaceAll(" ","").replace(/[^\w\s]|_/g, '').toLowerCase();
    if (str1 === reverse)
        return true;
    else
        return false;
};

// Do not edit below this line
module.exports = palindromes;
