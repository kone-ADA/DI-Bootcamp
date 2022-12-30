let checker = true;

while(checker)
{
    let entry = prompt('Enter a number');

    let type = typeof(entry);

    console.log(type);

    number = Number(entry);

    if(!isNaN(number) && number > 10 )
    {
        break
    }
}