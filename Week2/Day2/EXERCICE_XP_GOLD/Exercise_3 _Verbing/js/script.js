let verbe = prompt("Enter a verb")

if(verbe.length >= 3 && verbe.endsWith("ing"))
{
    console.log(verbe+"ly")
}else if(!verbe.endsWith("ing") && verbe.endsWith('e'))
{
    console.log(verbe.replace("e","ing"))

}else if(!verbe.endsWith("ing") && verbe.endsWith('m'))
{
    console.log(verbe.replace("m","mming"))

}
else if(verbe.length >= 3 && !verbe.endsWith("ing")){
    console.log(verbe+"ing")
}
else
{
    console.log(verbe)
}