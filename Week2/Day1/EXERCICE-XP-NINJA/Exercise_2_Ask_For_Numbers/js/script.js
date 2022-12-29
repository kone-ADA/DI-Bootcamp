let nombre1 = prompt('Entrez deux nombres separes par une virgule');
let nombre_split = nombre1.split(",")
let x = nombre_split[0];
let y = nombre_split[1]
alert(nombre1 + " -> " + (Number(x) + Number(y)))
