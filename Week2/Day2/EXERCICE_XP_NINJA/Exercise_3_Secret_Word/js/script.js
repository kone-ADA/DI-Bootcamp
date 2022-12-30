let secret = prompt("Enter a word")

console.log(secret.replace(new RegExp("[aeiou]"),'1'))