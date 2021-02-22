module.exports = function check(str, bracketsConfig) {
	str = str.split('');
  if(str.length % 2 != 0) return false;
  return true;
}
