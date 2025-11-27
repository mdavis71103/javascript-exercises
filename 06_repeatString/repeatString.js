const repeatString = function(str, num) {

    if(num <  0) return "ERROR"

    let copiedstr =""

    for(let i = 0; i < num; i++){
        copiedstr += str;
    }

    return copiedstr
};

// Do not edit below this line
module.exports = repeatString;
