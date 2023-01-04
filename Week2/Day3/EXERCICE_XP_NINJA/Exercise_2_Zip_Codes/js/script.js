//partie 1 sans regexp


//partie 2 avec regexp
let Reg = new RegExp(/^(?:0[1-9]|[1-8]\d|9[0-8])\d{3}$/i);
    console.log(Reg.test('34000s'));