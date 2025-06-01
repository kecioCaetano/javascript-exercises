const repeatString = function(text, num) {
    str = '';
    if (num < 0) return 'ERROR';
    for (let x = 0; x < num; x++) {
         str += text;
    }
    return str;
};

// Do not edit below this line
module.exports = repeatString;
