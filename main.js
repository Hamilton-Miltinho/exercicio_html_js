const form = document.getElementById('form_numeros');

function validaNumero(numero_A, numero_B){
    return numero_B > numero_A;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    let numero_A = document.getElementById('numero-a');
    let numero_B = document.getElementById('numero-b');
    const mensagemSucesso = 'Número B: <b>(' + numero_B.value +')</b> é maior que o Número A: <b>('+numero_A.value +')</b>.';
    const mensagemErro = 'Número B: <b>(' + numero_B.value +')</b> é menor que o Número A: <b>('+numero_A.value +')</b>.';
    
    const msg = document.querySelector('.mensagem');

    if(validaNumero(numero_A.value, numero_B.value)){
        msg.innerHTML = mensagemSucesso;
        msg.style.display = 'block';
        msg.style.backgroundColor = '#27ae82';
        msg.style.Color = '#fff';
        msg.padding = '16px';
        numero_A.value = '';
        numero_B.value = '';
    }else{
        msg.innerHTML = mensagemErro;
        msg.style.display = 'block';
        msg.style.backgroundColor = '#ed0202';
        msg.style.color = '#fff';        
        msg.padding = '16px';
    }
})