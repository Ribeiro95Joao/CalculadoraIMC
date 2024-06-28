//Atribuindo os elementos HTML que serão dinâmicos para
//o código JS, através de variáveis em JS.
//const nome = document.getElementById('nome');
//const altura = document.getElementById('altura');
//const peso = document.getElementById('peso');
const calcular = document.getElementById('calcular');
//const resultado = document.getElementById('resultado');

function imc()
{
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if(nome !== '' && altura !== '' && peso !== ''){
        
        const valorIMC = (peso / (altura * altura)).toFixed(2);

        let classificacao = '';

        if(valorIMC < 18.5)
        {
            classificacao = 'abaixo do peso.';
        }else if(valorIMC < 25)
        {
            classificacao = 'com peso ideal. Parabéns!!!';
        }else if(valorIMC < 30)
        {
            classificacao = 'levemente acima do peso.';
        }else if(valorIMC < 35)
        {
            classificacao = 'com obesidade grau I.';
        }else if(valorIMC < 40)
        {
            classificacao = 'com obesidade grau II.';
        }else
        {
            classificacao = 'com obesidade grau III. Cuidado!!!'; 
        }

        //Concatenando string como resultado da função
        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;

    }else{
        //para preencher dentro da div é necessário
        //utilizar a propriedade textContent
        resultado.textContent = 'Preencha todos os campos!!!';
    }
}

calcular.addEventListener('click', imc);