//Create 2 variables. The values should be strings. For example:
let str1 = prompt("Enter a first word");
let str2 = prompt("Enter a second word");
//Slice out and swap the first 2 characters of the two strings from part 1.
console.log(str1.substring(0,1));
console.log(str2.substring(0,1));

//Create a third variable where the value is the concatenation of the two strings from the part 1
let str3 = str1.replace(str1.substring(0,1),str2.substring(0,1))+ " " + str2.replace(str2.substring(0,1),str1.substring(0,1))
//Finally console.log the new concatenated string.
console.log(str3);