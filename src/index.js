module.exports = function reverse (n) {
    n = Math.trunc(n).toString().replace("-", "");
 return n.split('').reverse().join('');
}
