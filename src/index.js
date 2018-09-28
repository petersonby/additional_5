module.exports = function check(str, bracketsConfig) {

  if (str.length % 2 !== 0) return false;

  let string = str;
  let newStr = '';
  const brackets = bracketsConfig.map(brackets => brackets.join(''));
  

  while (newStr.length !== string.length) {
    newStr = string;
    
    for (let i = 0, length = brackets.length; i < length; i++) {
      string = string.replace(brackets[i], '');
    }
  }

  return string.length ? false : true;
}