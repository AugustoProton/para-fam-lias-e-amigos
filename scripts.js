// Fun��o para abrir o envelope
function openEnvelope() {
    let flap = document.querySelector('.flap');
    let envelopeContent = document.getElementById('envelopeContent');
    let music = document.getElementById('babyMusic');
    let preMessage = document.getElementById('preMessage');

    // Abre a aba do envelope e esconde o bot�o Abrir
    flap.classList.add('open');

    // Exibe o conte�do e reproduz a m�sica ap�s abrir a aba
    setTimeout(() => {
        envelopeContent.classList.add('show');
        startFireworks(); // Inicia os fogos de artif�cio
        music.play(); // Reproduz a m�sica
        preMessage.style.display = 'block'; // Exibe a mensagem "Assista at� o final"
    }, 800);

    // Sincroniza a exibi��o da tradu��o com a m�sica
    music.addEventListener('timeupdate', showTranslationAtTime);
}

// Fun��o para fechar o envelope
function closeEnvelope() {
    let envelopeContent = document.getElementById('envelopeContent');
    envelopeContent.classList.remove('show'); // Oculta o conte�do do envelope
    let music = document.getElementById('babyMusic');
    music.pause(); // Para a m�sica
    music.currentTime = 0; // Reinicia a m�sica
    let translationContainer = document.getElementById('translationContainer');
    translationContainer.style.display = 'none'; // Esconde a tradu��o ao fechar
    let preMessage = document.getElementById('preMessage');
    preMessage.style.display = 'none'; // Esconde a mensagem "Assista at� o final"
}

// Fun��o para iniciar os fogos de artif�cio
function startFireworks() {
    let fireworksContainer = document.getElementById('fireworksContainer');
    fireworksContainer.innerHTML = ''; // Limpa fogos anteriores
    for (let i = 0; i < 30; i++) { // Aumentado para 30 bolinhas
        createFirework(fireworksContainer);
    }
    setInterval(() => { // Faz as bolinhas aparecerem continuamente
        for (let i = 0; i < 10; i++) {
            createFirework(fireworksContainer);
        }
    }, 2000); // Adiciona bolinhas a cada 2 segundos
}

// Fun��o para criar os fogos de artif�cio
function createFirework(container) {
    let firework = document.createElement('div');
    firework.classList.add('firework');
    firework.style.left = Math.random() * window.innerWidth + 'px'; // Posi��o aleat�ria na horizontal
    firework.style.top = Math.random() * window.innerHeight + 'px'; // Posi��o aleat�ria na vertical
    firework.style.backgroundColor = getRandomColor(); // Cor aleat�ria
    firework.style.animation = `firework-up 2s linear forwards, explode 1.5s ease-out 2s, flash 3s infinite`; // Anima��o piscando
    container.appendChild(firework);
}

// Fun��o para gerar cores aleat�rias para os fogos
function getRandomColor() {
    let colors = ['red', 'yellow', 'blue', 'green', 'purple', 'orange', 'yellow']; // Amarelo simula fogo
    return colors[Math.floor(Math.random() * colors.length)];
}

// **Letra da m�sica sincronizada**
const lyrics = [
    `Quem vai dizer
    O que � imposs�vel
    Bem, eles se esqueceram
    Que este mundo continua girando
    E a cada novo dia
    Eu posso sentir uma mudan�a em tudo
    E quando a superf�cie se quebra, os reflexos se v�o
    Mas de algum modo, eles permanecem os mesmos`,

    `E como minha mente come�a a abrir suas asas
    N�o h� como parar a curiosidade`,

    `Eu quero virar tudo de cabe�a para baixo
    Encontrarei as coisas
    Que eles dizem que n�o podem ser encontradas
    Compartilharei este amor que encontro com todo mundo
    N�s cantaremos e dan�aremos can��es para M�e Natureza
    Eu n�o quero que este sentimento se v�`,

    `Quem disse
    Que eu n�o posso fazer tudo?
    Bem, eu posso tentar
    E enquanto eu vou seguindo, eu come�o a descobrir
    Que as coisas nem sempre s�o o que parecem`,

    `Eu quero virar tudo de cabe�a para baixo
    Encontrarei as coisas
    Que eles dizem que n�o podem ser encontradas
    Compartilharei este amor que encontro com todo mundo
    N�s cantaremos e dan�aremos can��es para M�e Natureza`,

    `Este mundo continua girando
    E n�o h� tempo para ser desperdi�ado
    Bem, tudo continua girando, e girando`,

    `De cabe�a para baixo
    Quem vai dizer que � imposs�vel e n�o pode ser achado?
    Eu n�o quero que este sentimento v� embora`,

    `Por favor, n�o v� embora
    Por favor, n�o v� embora
    Por favor, n�o v� embora
    � assim que deve ser?`
];

// Fun��o para exibir a tradu��o da m�sica sincronizada com o tempo
function showTranslationAtTime() {
    let music = document.getElementById('babyMusic');
    let translationText = document.getElementById('translationText');
    let translationContainer = document.getElementById('translationContainer');

    // Sincronizar os tempos com os momentos corretos da m�sica
    if (music.currentTime >= 33 && music.currentTime < 60) { 
        translationText.innerText = lyrics[0];
        translationContainer.style.display = 'block'; // Exibe a tradu��o
    } else if (music.currentTime >= 60 && music.currentTime < 90) { 
        translationText.innerText = lyrics[1];
    } else if (music.currentTime >= 90 && music.currentTime < 120) { 
        translationText.innerText = lyrics[2];
    } else if (music.currentTime >= 120 && music.currentTime < 150) { 
        translationText.innerText = lyrics[3];
    } else if (music.currentTime >= 150 && music.currentTime < 180) { 
        translationText.innerText = lyrics[4];
    } else if (music.currentTime >= 180 && music.currentTime < 210) { 
        translationText.innerText = lyrics[5];
    } else if (music.currentTime >= 210 && music.currentTime < 240) { 
        translationText.innerText = lyrics[6];
    } else if (music.currentTime >= 240 && music.currentTime < 270) { 
        translationText.innerText = lyrics[7];
    } else {
        translationContainer.style.display = 'none'; // Esconde a tradu��o se n�o estiver no tempo certo
    }
}
