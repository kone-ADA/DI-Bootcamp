let word = prompt("Entrez un mot")
let  reg = new RegExp(/[aeiou]+/g);

console.log(word.replace(reg,''))

if(reg)
{
    console.log(word.replace('a',1))
    console.log(word.replace('e',2))
    console.log(word.replace('i',3))
    console.log(word.replace('o',4))
    console.log(word.replace('u',5))
    
}