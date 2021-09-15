

let select = document.querySelector('select');


select.addEventListener('click', () => {
    document.querySelector('.recebeTextMes').innerHTML="Mês" + " " + "-" + " " + select.value
})