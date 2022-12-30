let grade = prompt("Enter your grade")

if(Number(grade) > 90)
{
    console.log("A")
}
else if(Number(grade)> 80 && Number(grade) <=90 )
{
    console.log("B")
}
else if(Number(grade)>= 70 && Number(grade) <=80)
{
    console.log("C")
}
else
{
    console.log("D")
}