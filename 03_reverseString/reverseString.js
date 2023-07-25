const reverseString = function(text) {
    let result = "";

    for (let i = 1; i <= text.length; i++) {
      result += text[text.length - i];
    }
    return result;

};

// Do not edit below this line
module.exports = reverseString;
