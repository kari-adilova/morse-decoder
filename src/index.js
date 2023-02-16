const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let array = [];
    let result = '';
    for (let i = 0; i < expr.length; i = i + 10) {
        array.push(expr.substring(i, i + 10));
    }

    for (let i = 0; i < array.length; i++) {
        if (array[i] === '**********') {
            result = result + ' '; 
        } else {
            let letter = '';
            for (let j = 0; j < 10; j++) {
                if (array[i][j] === '1') {
                    letter = array[i].substring(j);
                    break;
                }
            }
            let letterCode = [];
            for (let j = 0; j < letter.length; j = j + 2) {
                letterCode.push(letter.substring(j, j + 2));
            }
            let letterCodeMorse = '';
            for (let j = 0; j < letterCode.length; j++) {
                if (letterCode[j] === '10') {
                   letterCodeMorse = letterCodeMorse + '.';
                } else {
                    letterCodeMorse = letterCodeMorse + '-';
                }
            }
            result = result + MORSE_TABLE[letterCodeMorse];            
        }
    }
    return result;
}

module.exports = {
    decode
}