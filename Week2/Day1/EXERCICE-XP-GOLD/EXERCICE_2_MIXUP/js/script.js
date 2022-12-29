//Create 2 variables. The values should be strings. For example:
let str1 = "mix";
let str2 = "pod";
//Slice out and swap the first 2 characters of the two strings from part 1.
console.log(str1.substring(0,2).replace("mi","po"));
console.log(str1.substring(0,2).replace("po","mi"));

//Create a third variable where the value is the concatenation of the two strings from the part 1
let str3 = str1 + " " + str2
console.log(typeof(str3))
//Finally console.log the new concatenated string.
console.log(str3);