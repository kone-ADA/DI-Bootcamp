const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }

  let text = "";

  for(let x in details)
  {
    text += x + ' ' + details[x] + ' ';
  }

  console.log(text);