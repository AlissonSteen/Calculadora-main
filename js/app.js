// Variáveis
let currentInput = document.querySelector('.currentInput');
let answerScreen = document.querySelector('.answerScreen');
let buttons = document.querySelectorAll('button');
let erasebtn = document.querySelector('#erase');
let clearbtn = document.querySelector('#clear');
let evaluate = document.querySelector('#evaluate');



// Visor da calculadora
let realTimeScreenValue = []

// Limpar
clearbtn.addEventListener("click", () => {

    realTimeScreenValue = [''];
    answerScreen.innerHTML = 0;
    currentInput.className = 'currentInput'
    answerScreen.className = 'answerScreen';
    answerScreen.style.color = " rgba(150, 150, 150, 0.87)";
})

// Função anexada a todos os botões
buttons.forEach((btn) => {


    btn.addEventListener("click", () => {
        // Se o botão clicado não é o botão de apagar
        if (!btn.id.match('erase')) {
            // Mostrar o valor do botão pressionado
            realTimeScreenValue.push(btn.value)
            currentInput.innerHTML = realTimeScreenValue.join('');

            // Executar e mostrar a resposta em tempo real
            if (btn.classList.contains('num_btn')) {
                var resutado = realTimeScreenValue.join('')
                const valor = Function("return " + resutado)();
                answerScreen.innerHTML = valor///eval(realTimeScreenValue.join(''));

            }

        }

        // Quando o evento for um botão
        if (btn.id.match('erase')) {
            realTimeScreenValue.pop();
            var operacoes = realTimeScreenValue.join('')
            const resultado = Function("return " + operacoes)();
            currentInput.innerHTML = realTimeScreenValue.join('');
            answerScreen.innerHTML = resultado// eval(realTimeScreenValue.join(''));
        }

        // Ao clicar em igual
        if (btn.id.match('evaluate')) {
            currentInput.className = 'answerScreen';
            answerScreen.className = 'currentInput';
            answerScreen.style.color = "white";
           
        }

        // Previnir erro de undefined
        // console.log("bbb",realTimeScreenValue.join('') == 'undefined');
        var userInput2 = realTimeScreenValue.join('')
        const calcular = Function("return " + userInput2)();
        var resutado = calcular;
        if (typeof resutado == 'undefined') {
            answerScreen.innerHTML = 0
        }

    })
})
