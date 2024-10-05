// Função para abrir o envelope
function openEnvelope() {
    let flap = document.querySelector('.flap');
    let envelopeContent = document.getElementById('envelopeContent');
    let music = document.getElementById('babyMusic');
    let preMessage = document.getElementById('preMessage');

    // Abre a aba do envelope e esconde o botão Abrir
    flap.classList.add('open');

    // Exibe o conteúdo e reproduz a música após abrir a aba
    setTimeout(() => {
        envelopeContent.classList.add('show');
        startFireworks(); // Inicia os fogos de artifício
        music.play(); // Reproduz a música
        preMessage.style.display = 'block'; // Exibe a mensagem "Assista até o final"
    }, 800);

    // Sincroniza a exibição da tradução com a música
    music.addEventListener('timeupdate', showTranslationAtTime);
}

// Função para fechar o envelope
function closeEnvelope() {
    let envelopeContent = document.getElementById('envelopeContent');
    envelopeContent.classList.remove('show'); // Oculta o conteúdo do envelope
    let music = document.getElementById('babyMusic');
    music.pause(); // Para a música
    music.currentTime = 0; // Reinicia a música
    let translationContainer = document.getElementById('translationContainer');
    translationContainer.style.display = 'none'; // Esconde a tradução ao fechar
    let preMessage = document.getElementById('preMessage');
    preMessage.style.display = 'none'; // Esconde a mensagem "Assista até o final"
}

// Função para iniciar os fogos de artifício
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

// Função para criar os fogos de artifício
function createFirework(container) {
    let firework = document.createElement('div');
    firework.classList.add('firework');
    firework.style.left = Math.random() * window.innerWidth + 'px'; // Posição aleatória na horizontal
    firework.style.top = Math.random() * window.innerHeight + 'px'; // Posição aleatória na vertical
    firework.style.backgroundColor = getRandomColor(); // Cor aleatória
    firework.style.animation = `firework-up 2s linear forwards, explode 1.5s ease-out 2s, flash 3s infinite`; // Animação piscando
    container.appendChild(firework);
}

// Função para gerar cores aleatórias para os fogos
function getRandomColor() {
    let colors = ['red', 'yellow', 'blue', 'green', 'purple', 'orange', 'yellow']; // Amarelo simula fogo
    return colors[Math.floor(Math.random() * colors.length)];
}

// **Letra da música sincronizada**
const lyrics = [
    `Quem vai dizer
    O que é impossível
    Bem, eles se esqueceram
    Que este mundo continua girando
    E a cada novo dia
    Eu posso sentir uma mudança em tudo
    E quando a superfície se quebra, os reflexos se vão
    Mas de algum modo, eles permanecem os mesmos`,

    `E como minha mente começa a abrir suas asas
    Não há como parar a curiosidade`,

    `Eu quero virar tudo de cabeça para baixo
    Encontrarei as coisas
    Que eles dizem que não podem ser encontradas
    Compartilharei este amor que encontro com todo mundo
    Nós cantaremos e dançaremos canções para Mãe Natureza
    Eu não quero que este sentimento se vá`,

    `Quem disse
    Que eu não posso fazer tudo?
    Bem, eu posso tentar
    E enquanto eu vou seguindo, eu começo a descobrir
    Que as coisas nem sempre são o que parecem`,

    `Eu quero virar tudo de cabeça para baixo
    Encontrarei as coisas
    Que eles dizem que não podem ser encontradas
    Compartilharei este amor que encontro com todo mundo
    Nós cantaremos e dançaremos canções para Mãe Natureza`,

    `Este mundo continua girando
    E não há tempo para ser desperdiçado
    Bem, tudo continua girando, e girando`,

    `De cabeça para baixo
    Quem vai dizer que é impossível e não pode ser achado?
    Eu não quero que este sentimento vá embora`,

    `Por favor, não vá embora
    Por favor, não vá embora
    Por favor, não vá embora
    É assim que deve ser?`
];

// Função para exibir a tradução da música sincronizada com o tempo
function showTranslationAtTime() {
    let music = document.getElementById('babyMusic');
    let translationText = document.getElementById('translationText');
    let translationContainer = document.getElementById('translationContainer');

    // Sincronizar os tempos com os momentos corretos da música
    if (music.currentTime >= 33 && music.currentTime < 60) { 
        translationText.innerText = lyrics[0];
        translationContainer.style.display = 'block'; // Exibe a tradução
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
        translationContainer.style.display = 'none'; // Esconde a tradução se não estiver no tempo certo
    }
}
