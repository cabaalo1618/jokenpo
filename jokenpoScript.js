// Arquivo: jokenpoScript.js

document.addEventListener('DOMContentLoaded', function() {
    let escolhaUsuario = '';
    const escolhas = document.querySelectorAll('.escolha');
    const resultadoDiv = document.getElementById('resultado');
    const jogarBtn = document.getElementById('jogar');

    // Adiciona evento de clique para todas as escolhas
    escolhas.forEach(escolha => {
        escolha.addEventListener('click', function() {
            escolhaUsuario = this.id; // 'pedra', 'papel' ou 'tesoura'
            escolhas.forEach(el => el.classList.remove('selecionado'));
            this.classList.add('selecionado');
        });
    });

    // Evento de clique do botão Jogar
    jogarBtn.addEventListener('click', function() {
        if (!escolhaUsuario) {
            resultadoDiv.textContent = 'Por favor, selecione uma opção.';
            return;
        }

        const escolhaComputador = gerarEscolhaComputador();
        const resultado = determinarVencedor(escolhaUsuario, escolhaComputador);
        mostrarResultado(escolhaUsuario, escolhaComputador, resultado);
    });

    function gerarEscolhaComputador() {
        const escolhas = ['pedra', 'papel', 'tesoura'];
        const indiceAleatorio = Math.floor(Math.random() * escolhas.length);
        return escolhas[indiceAleatorio];
    }

    function determinarVencedor(usuario, computador) {
        if (usuario === computador) {
            return 'Empate!';
        }

        if ((usuario === 'pedra' && computador === 'tesoura') ||
            (usuario === 'tesoura' && computador === 'papel') ||
            (usuario === 'papel' && computador === 'pedra')) {
            return 'Você ganhou!';
        } else {
            return 'Você perdeu!';
        }
    }

    function mostrarResultado(usuario, computador, resultado) {
        resultadoDiv.innerHTML = `
            <p>Você escolheu <strong>${usuario}</strong></p>
            <p>O computador escolheu <strong>${computador}</strong></p>
            <p>${resultado}</p>
        `;
    }
});
