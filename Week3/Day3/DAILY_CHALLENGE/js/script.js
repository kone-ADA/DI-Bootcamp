 
let form = document.getElementById('text');
form.addEventListener('keypress', (event) => {
    form.value = form.value.replace(/[^a-zA-Z]/gi, '');
});

