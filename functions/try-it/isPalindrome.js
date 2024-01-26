function reverse(str) {
   return str.split('').reverse().join('');
}

function isPalindrome(str) {
   return reverse(str) === str;
}
console.log(reverse("My name is Aakash"))
console.log(isPalindrome("My name is Aakash"))