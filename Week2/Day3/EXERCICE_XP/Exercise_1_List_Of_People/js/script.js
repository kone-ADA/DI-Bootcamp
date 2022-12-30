const people = ["Greg", "Mary", "Devon", "James"];


// Part I - Review About Arrays

people.shift();
people.splice(people.indexOf('James'),1,'Jason');
people.push("yaya");
console.log(people.indexOf("Mary"));
let newList = people.slice(people.indexOf("Mary") +1 );


// Why does it return -1 ? => Foo is not in array
let last = people[people.length - 1]


// Part II - Loops

for(let person in people)
{
    console.log(people[person]);
}



for(let person in people)
{
    if(people[person] == 'Jason')
    {
        break;
    }
    console.log(people[person]);
}