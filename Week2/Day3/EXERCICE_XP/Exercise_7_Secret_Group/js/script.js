const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

names.sort();

let secret = '';
for(let x of names)
{
    secret += x[0]
}
console.log(secret);