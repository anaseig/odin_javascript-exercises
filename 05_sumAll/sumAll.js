const sumAll = function(x, y) {
    let result = 0;

    if (x < y && x > 0 && typeof y === 'number') {
        for (let i = x; i <= y; i++) {
          result = result + i;
        }
    } else if (x > y) {
        for (let i = y; i <= x; i++) {
            result = result + i;
        }
    } else {
        return "ERROR";
    }

    return result;
  }

// Do not edit below this line
module.exports = sumAll;
