// Part I
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will alert “Hello World”.
function world(){
    alert("hello world");
  }
  setTimeout(world,2000);
//   Part II
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
  const deing = document.getElementById("container");
  function helloWorld(){
    const  p = document.createElement('p');
    p.textContent =" hello World";
    deing.appendChild(p);
    if(deing.children.length == 5 ){
      clearInterval(interval);  
    }
  };

//   Part III
//   In your Javascript file, using setInterval, call a function every 2 seconds.
//   The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
//   The interval will be cleared (ie. clearInterval), when the user will click on the button.
//   Instead of clicking on the button, the interval will be cleared (ie. clearInterval) as soon as there will be 5 paragraphs inside the <div id="container">.

  const interval = setInterval(helloWorld,2000);
  const button = document.getElementById("clear")
  button.addEventListener("click",()=>{
   clearInterval(interval);
  
  });
     
   
  
  
  