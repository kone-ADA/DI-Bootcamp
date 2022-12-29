let str = prompt("Enter text")

if(str.includes("Nemo"))
{
    console.log("I found Nemo at "+ str.indexOf("Nemo"))
}else{
    console.log("I can’t find Nemo")
}
