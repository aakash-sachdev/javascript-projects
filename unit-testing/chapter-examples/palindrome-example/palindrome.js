function reverse(str) {
   return str.split('').reverse().join('');
 }
 
 function isPalindrome(str) {
   return reverse(str) === str;
 }
 
// console.log(isPalindrome("a"));
// console.log(isPalindrome("aaaa"));
// console.log(isPalindrome("aba"));
// console.log(isPalindrome("racecar"));
// console.log(isPalindrome("abA"));
// console.log(isPalindrome("racecar"));
// console.log(isPalindrome("racecar"));

 module.exports = isPalindrome;