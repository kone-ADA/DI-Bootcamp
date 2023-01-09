//recuperation de l'id de la prémière div
let root = document.getElementById('#animate');
// creation de la 1ere div
let div1 = document.createElement('div'); 
// creation de la 1ere div 
let div2 = document.createElement('div');
div1.classList.add('div1');
div2.classList.add('div2');
//creation des attributs
div2.setAttribute('id','main');
//remplacer id de la premiere div par outer
div1.appendChild(div2);
// id de la deuxieme div par iner
 
animate.appendChild(div1);
//execution de la fonction avec les differents methodes d'animation
function myMove() {
   //initialisation de la valeur qui permet d'atteindre l'extremité du conteneur
   element = document.getElementById("main");
  let  position = 0;
  //setInterval permet de faire deplacer le petit carreau
  const id = setInterval(cadre, 1);
    function cadre(){
    //ici 350 est  la valeur qui permet d'atteindre l'extremité du conteneur
    if (position >= 350) {
     //  ici clearInterval permet al a boîte d' atteint l'extrémité droite du conteneur
      clearInterval(id);
    }
    else {
      position++;
      //position du careau et la valeur qui permet d'atteindre l'extremité du conteneur
      element.style.left = "0 px";
      element.style.left = position + "px";
      
    }
  };
}
button.addEventListener('click', myMove);
