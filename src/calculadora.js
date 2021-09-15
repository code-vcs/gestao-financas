

let inp = document.getElementsByTagName('input');
let resultado = document.getElementById('resultado');

for (let i = 1; i < inp.length; i++) {
    inp[i].addEventListener('click', () => {
        //AUDIO
        let audio = document.querySelector('audio');
        audio.setAttribute('src', '../audio/click.wav');
        audio.play();
        //CALCULO
        if (inp[i].value == "=") {
            resultado.value = eval(resultado.value);
        } else {
            resultado.value = resultado.value = resultado.value + inp[i].value
        }
    })
}

let valid = /[^a-z\$!@#%&"';,°?^~\¨]/;
window.addEventListener('keyup', (x) => {
    if (x.key == ",") {
        resultado.value+="."
    }
    //AUDIO
    let audio = document.querySelector('audio');
    audio.setAttribute('src', '../audio/click.wav');
    audio.play();
    let verifi = valid.test(x.key);
    if (verifi == true) {
        if (x.key == "Shift" || x.key == "Tab" || x.key == "Alt" || x.key == "Aba" || x.key == "Backspace" || x.key == "NumLock") {

        } else if (x.key == "Enter" || x.key == "=") {
            resultado.value = eval(resultado.value)
        } else if (x.key == "Escape") {
            resultado.value = ""
        } else {
            resultado.value = resultado.value = resultado.value + x.key;
        }
    } else {
        console.log('erro' + x.key)
    }
})

document.querySelector('#limpar').addEventListener('click', () => {
    inp[0].value = ""
})



document.querySelector('.fechar').addEventListener('click', () => {
    close()
})