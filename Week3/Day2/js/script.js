let year_1 = prompt("Entrez la premiere annee de naissance")
let year_2 = prompt ("Entrez la deuxieme annee de naissance")
let year_3 =prompt("Entrez l'annee  pour calculer les ages")
let age_1 = Number(year_3)-Number(year_1)
let age_2 = Number(year_3)-Number(year_2)

console.log(typeof(age_2))
if(age_1 > age_2)
{
   let annee = Number(year_1) + age_1*0.5
   
    console.log("l'annee ou le plus jeune aura la moitie de l'age du plus grand est: " + annee )
}else{
    let annee = Number(year_1) + age_1*0.5
     console.log("l'annee ou le plus jeune aura la moitie de l'age du plus grand est: " + annee )
}