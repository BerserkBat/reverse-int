module.exports = function reverse (n) {
 return +(Math.trunc(n).toString().split('').reverse().join(''));
}
