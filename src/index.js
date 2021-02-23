module.exports = function check(str, bracketsConfig) {
  let brack = [];
  for (const item of bracketsConfig) {
    brack.push(item.join(''))
  }
  for (let i = 0; i < brack.length; i++) {
    if (str.includes(brack[i])) {
      str = str.replace(brack[i], '');
      i = -1
    }
  }
 return str.length === 0 ? true : false
};
