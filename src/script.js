
let saldo = document.getElementById('saldo')
let entrada = document.getElementById('entrada')
let saida = document.getElementById('saida')
let historico = document.querySelector('.historico');
let select = document.querySelector('select');
let moveEntre = document.querySelector('#movimento-entrada');
let moveSaida = document.querySelector('#movimento-saida');





window.onload = () => {
    
    $('.container-ferramenta').css({'display':'block'})
    $('.container-ferramenta').animate({
        
    },2000).fadeOut(0).fadeIn(3000)

    // localStorage.clear() // apaga o banco de dados;
    saldo.value = 0
    let s = JSON.parse(localStorage.getItem('chave')) - 0;
    saldo.value = s.toFixed(2) // colocando para 2 casas decimais
    if (saldo.value <= 0) {
        saldo.style = "background:red;";
        $('section').css({ 'border-bottom': '13px solid red' })
    }
    if (saldo.value > 0) {
        saldo.style = "background:green;";
        $('section').css({ 'border-bottom': '13px solid green' })
    }

    historico.innerHTML = localStorage.getItem('historicoStorage');
    const mEntre = JSON.parse(localStorage.getItem('movEntrada')) - 0;
    moveEntre.value = mEntre.toFixed(2)
    const mSaida = JSON.parse(localStorage.getItem('movSaida')) - 0
    moveSaida.value = mSaida.toFixed(2)
}
// Data e Hora
function dataLocal() {
    let time = new Date;
    $('.data').html(`Data: ${time.getDate()} / ${time.getMonth()} / ${time.getFullYear()}`)
}
dataLocal()

setInterval(() => {
    let time = new Date;
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();
    if (h < 10) {
        h = '0' + 0
    }
    if (m < 10) {
        m = '0' + m
    }
    if (s < 10) {
        s = '0' + s
    }
    $('.hora').html(`Hora: ${h}:${m}:${s}`)
}, 1000);


//_________________________//

$('.btOcultar').on('click', () => {
    if($('.btOcultar').html()=="X"){
        $(historico).animate({
            'height':'0px',
        },2000).fadeOut(0)
        $('.btOcultar').html('O')
    }else if($('.btOcultar').html()=="O"){
        $(historico).animate({
            'height':'600px',
        },1000).fadeIn(0)
        $('.btOcultar').html('X')
    }
})



$('.btn-success').click(function () {
    let sald = parseFloat(saldo.value);
    let valorEntrada = parseFloat(entrada.value);
    let calc = sald + valorEntrada;
    saldo.value = calc.toFixed(2)

    //mivimentação entrada
    let move = parseFloat(moveEntre.value);
    let calMove = move = move + valorEntrada
    moveEntre.value = calMove.toFixed(2)
   

    if (saldo.value <= '0') {
        $('#saldo').css({ 'background': 'red' })
        $('section').css({ 'border-bottom': '13px solid red' })
    } else if (saldo.value > 0) {
        $('#saldo').css({ 'background': 'green' })
        $('section').css({ 'border-bottom': '13px solid green' })

    }
    historico.innerHTML += `<div style="margin:10px;background:rgb(235, 235, 235);padding:10px;border-left:3px solid green;box-shadow:2px 2px 8px grey;"><p style="font-size:8pt;">${$('.data').html()}  ${$('.hora').html()}</p><span style="font-size:8pt;margin:0px;">Deposito valor: R$ <span style="color:green;font-size:10pt;">${valorEntrada.toFixed(2)}</span></span></div>`
    localStorage.setItem('historicoStorage', historico.innerHTML)

    entrada.value = ""
    localStorage.setItem('chave', JSON.stringify(saldo.value));
    localStorage.setItem('movEntrada', JSON.stringify(moveEntre.value));
})


$('.btn-danger').click(function () {
    if (document.getElementById('saida').value !== "") {
        let sald = parseFloat(saldo.value);
        let valorSaida = parseFloat(saida.value);
        let calc = sald - valorSaida;
        saldo.value = calc.toFixed(2);

        //mivimentação saida
        let move = parseFloat(moveSaida.value);
        let calMove = move = move - valorSaida
        moveSaida.value = calMove.toFixed(2)

        if (saldo.value <= '0') {
            $('#saldo').css({ 'background': 'red' })
            $('section').css({ 'border-bottom': '13px solid red' })

        } else if (saldo.value > 0) {
            $('#saldo').css({ 'background': 'green' })
            $('section').css({ 'border-bottom': '13px solid green' })

        }

        localStorage.setItem('chave', JSON.stringify(saldo.value));
        
    } else {
        alert("Campo valor vazio !")
    }
    let valorDeSaida = parseFloat(saida.value);
    historico.innerHTML += `<div style="margin:10px;font-size:8pt;background:rgb(255, 193, 193);padding:10px;border-left:3px solid red;box-shadow:2px 2px 8px grey;"><p>${$('.data').html()}  ${$('.hora').html()}</p><span style="font-size:8pt;margin:0px;">Despesa valor: R$ <span style="color:red;font-size:10pt;">-${valorDeSaida.toFixed(2)}</span>&nbsp;&nbsp;&nbsp;Consumo:&nbsp;TP&nbsp;&nbsp;<span style="color:white;font-size:8pt;font-weight:bolder;">${select.value.toUpperCase()}</span></span></div>`
    localStorage.setItem('historicoStorage', historico.innerHTML)
    
    localStorage.setItem('movSaida', JSON.stringify(moveSaida.value));
    saida.value = ""
    document.querySelector('select').value = ""

})

window.addEventListener('mouseover', () => {
    if (document.querySelector("select").value !== "") {
        document.getElementById('saida').disabled = ""
        document.getElementById('btSaida').hidden = ""
    } else {
        document.getElementById('saida').disabled = true
        document.getElementById('btSaida').hidden = true
    }
})


// botoes controle
function cotacao() {
    open('./views/navegador.html', '_blank', "width=1300,height=700")
}


function calculadora() {
    open('./views/calculadora.html', '_blank', 'width=270,height=525')
}

function mvMensal(){
    open('./views/mvMensal.html','_blank','width=1200,height=675')
}


function formatar() {
    let confirmeFormate = confirm("Deseja Realmente apagar o BANCO ?")

    if (confirmeFormate == true) {
        let inputPassword = document.createElement('input');
        inputPassword.setAttribute("type", "password");
        inputPassword.setAttribute("placeholder", "Entre com a senha...")
        inputPassword.setAttribute("id", "senhaDoBanco");
        document.querySelector(".controler-sistem").append(inputPassword);
        inputPassword.style = "width:50px;height:30px;margin-top:5px;margin-left:100px;background:red;color:white;border-radius:10px;text-align:center;font-size:15pt;";
        inputPassword.focus()
        $("#senhaDoBanco").animate({
            width: 300,
        }, 2000).fadeIn(3000)

        window.addEventListener('keyup', (a) => {

            if (a.key == "Enter") {
                if (document.querySelector("#senhaDoBanco").value == 123) {
                    $("#senhaDoBanco").animate({
                        width: 10,
                    }, 2000).fadeOut(3000);
                    $("#senhaDoBanco").css({
                        "background": "green",
                    }, 2000).fadeIn(3000)
                    localStorage.clear() //apaga o banco
                    setTimeout(() => {
                        window.location.reload()
                    }, 4500);
                }
            }
        })
    }

}





















