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
  let arr=[];
  for (let i = 0; i < expr.length; i+=10) {
    arr.push(expr.slice(i, i + 10));
  }
  let result=[];
  arr.map(code => {
    let morseCode='';
    if (code ==='**********') {
      result.push(' ');
    } else {
      let stringCode = code.substring(code.indexOf('1'));
      for (let i = 0; i < stringCode.length; i+= 2) {
        if (stringCode.slice(i, i + 2) === '10') {
          morseCode+= '.';
        } else if (stringCode.slice(i, i + 2) === '11') {
          morseCode+= '-';
        }
      }
    }
    let keys = Object.keys(MORSE_TABLE)
     for (i = 0; i < keys.length; i++) 
       if (keys[i] === morseCode) {
        result.push(MORSE_TABLE[keys[i]]);
       }
  })
    return result.join(',').replace(/,/g, '');
}

module.exports = {
    decode
}