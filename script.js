export function romanToArabic(romanNumber) {
  if (romanNumber == null) return -1;
  var num = char_to_int(romanNumber.charAt(0));
  var before, a;

  for (var i = 1; i < romanNumber.length; i++) {
    a = char_to_int(romanNumber.charAt(i));
    before = char_to_int(romanNumber.charAt(i - 1));
    
    if (a <= before) {
      num += a;
    } else {
      num = num + (a - 2 * before);
    }
  }

  return num;
  }

  function char_to_int(c) {
    switch (c) {
      case 'I': return 1;
      case 'V': return 5;
      case 'X': return 10;
      case 'L': return 50;
      case 'C': return 100;
      case 'D': return 500;
      case 'M': return 1000;
      default: return -1;
    }
  }