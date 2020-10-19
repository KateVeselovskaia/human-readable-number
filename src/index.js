module.exports = function toReadable (number) {
    const numbers = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
        100: 'hundred',
      }; 
  
      let result = '';
      let hundred = Math.floor(number / 100);
      let dozen = Math.floor(number % 100 / 10);
      let unit = number % 10;

      if (number === 0) return 'zero';

      if (hundred > 0) {
          result += numbers[hundred] 
          result += ' hundred';
      }

      if (dozen > 1) {
          if (hundred > 0) {
              result += ' ';
          }
          result += numbers[dozen * 10];
          if (unit > 0) {
              result += ' ';
              result += numbers[unit];
          }
      } else if (dozen === 1 || unit > 0) {
        if (hundred > 0) {
            result += ' ';
        }
        result += numbers[dozen * 10 + unit];
      }
      return result;
}
