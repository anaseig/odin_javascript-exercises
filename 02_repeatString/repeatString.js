const repeatString = function(string, number) {
    const array = [];

    if (number < 0) return "ERROR";

    for (i = 0; i < number; i++) {
        array.push(string);
    }
    
    array.toString();
    let result = array.join("");
    return result;
};

module.exports = repeatString;
