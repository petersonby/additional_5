module.exports = function check(str, bracketsConfig) {

  if (str.length % 2 !== 0) return false;
  
  const brackets = bracketsConfig.map(brackets => brackets.join(''));

  let newStr = '';

  while (newStr.length !== str.length) {
    newStr = str;
	  
	for (let i = 0; i < brackets.length; i++) {
	  str = str.replace(brackets[i], '');
	}
  }

  return str.length ? false : true;
}