let X = prompt("Entrez un premier nombre")
let y = prompt("Entrez un second nombre")

if (Number(X)>Number(y))
{
   alert(X + " is the biggest number than "+ y) 
}else if(Number(X) == Number(y)){
    alert(X + " is egal to "+ y)
}else{
    alert(X + " is the smaller number than "+ y) 
}