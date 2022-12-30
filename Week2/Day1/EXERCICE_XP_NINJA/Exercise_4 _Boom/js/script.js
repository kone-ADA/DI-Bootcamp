let nombre = prompt("Enter a number")
if(nombre < 2)
{
    console.log("boom")
}else if(nombre%5 == 0 && nombre%2 == 0)
{
    console.log(("b"+"o".repeat(nombre)+"m !").toUpperCase() )

}
else  if( nombre%2 == 0) {
    
    console.log("b"+"o".repeat(nombre)+"m !" )
}else if(nombre%5 == 0)
{
    console.log(("b"+"o".repeat(nombre)+"m").toUpperCase() )
}else{
    console.log("b"+"o".repeat(nombre)+"m")
}
