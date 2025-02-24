document.addEventListener("DOMContentLoaded", function () {
    const chatbotHelp = document.getElementById("chatbothelp");
    const chatbotButton = document.getElementById("praclicar");

    chatbotButton.addEventListener("click", function () {
        toggleChatbot();
    });

    function toggleChatbot() {
        const isOpen = chatbotHelp.style.right === "0px";
        chatbotHelp.style.right = isOpen ? "-450px" : "0px";
        chatbotButton.style.right = isOpen ? "20px" : "420px";
    }

    document.querySelectorAll(".question-btn").forEach(button => {
        button.addEventListener("click", function () {
            respostaChatbot(button.innerText);
        });
    });

    document.getElementById("duvidas").addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            respostaChatbot();
        }
    });

    document.getElementById("sendBtn").addEventListener("click", function () {
        respostaChatbot();
    });
});

function respostaChatbot(userText = null) {
    const inputField = document.getElementById("duvidas");
    const responseContainer = document.getElementById("chatbotResponses");
    let text = userText ? userText.trim() : inputField.value.trim();

    if (text !== "") {
        addMessage(text, "userMessage");

        setTimeout(() => {
            const botResponse = getBotResponse(text);
            addMessage(botResponse, "botMessage");
        }, 500);
        if (!userText) inputField.value = "";
    }
}

// Adicionar mensagem ao chat
function addMessage(text, className) {
    const responseContainer = document.getElementById("chatbotResponses");
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", className);
    messageDiv.innerText = text;
    responseContainer.appendChild(messageDiv);
    responseContainer.scrollTop = responseContainer.scrollHeight;
}

function getBotResponse(input) {
    const responses = {
        "oi": "Olá! Como posso te ajudar?",
        "qual é o seu nome?": "Eu sou o ChatBot da Inclua, projetado para te ajudar!!",
        "como funciona o aplicativo?": "O aplicativo é um game desenvolvido para ajudar pessoas com mobilidade reduzida a exercitar a coordenação motora fina por meio de realidade aumentada (AR) e realidade virtual (VR).",
        "qual é o objetivo do jogo?": "O objetivo do jogo é mover objetos até alvos, que vão diminuindo de tamanho conforme o usuário avança as fases, estimulando precisão e rapidez nos movimentos.",
        "como o jogo avalia o desempenho?": "O desempenho é medido com base na distância percorrida pelo objeto e no tempo necessário para atingir o alvo, podendo ter níveis de dificuldade mais desafiadores.",
        "quais dispositivos são compatíveis?": "O aplicativo será compatível com dispositivos móveis que suportam tecnologias de realidade aumentada (AR) e realidade virtual (VR). E com um spoiler, teremos um óculos de realidade virtual (VR) apenas nosso.🤫",
        "o aplicativo é acessível para pessoas com mobilidade reduzida?": "Sim! O aplicativo foi projetado para ser intuitivo e acessível, com suporte a gestos.",
        "como posso testar o aplicativo?": "No momento, estamos desenvolvendo o MVP (protótipo inicial). Fique de olho nas redes do SENAC e da equipe Inclua para ter acesso assim que o aplicativo for lançado!!",
        "posso sugerir melhorias?": "Claro! Valorizamos o feedback dos usuários. Assim que o aplicativo estiver disponível para testes, você poderá enviar feedbacks.",
        "quem está desenvolvendo o aplicativo?": "O aplicativo está sendo desenvolvido por uma equipe de desenvolvedores do SENAC, com apoio da Inclua, uma organização sem fins lucrativos dedicada à inclusão digital e social.",
        "onde posso encontrar mais informações?": "Você pode entrar em contato com a equipe da Inclua pelo e-mail contato@inclua.org para mais informações.",
        "qualquer um pode baixar o jogo?": "O jogo será disponível para todos, mas pode haver requisitos específicos para alguns dispositivos. Acompanhe as atualizações em nossas redes sociais para saber mais sobre quando o jogo estará disponível para download e em quais plataformas.",
        "quando que o jogo vai ser lançado?": "Ainda não temos uma data exata do lançamento do jogo, porém assim que ele for lançado, compartilharemos em nosso Instagram: @senacminas e @incluanoinclusa",
        "quais tipos de testes posso fazer no aplicativo?": "Você pode realizar testes de funcionalidade, usabilidade e performance. Testes manuais, como o uso do aplicativo em diferentes dispositivos, e testes automatizados também são importantes para garantir a qualidade do app antes do lançamento.",
        "quais melhorias posso sugerir para o aplicativo?": "Fique à vontade para sugerir melhorias! Acreditamos que a colaboração é essencial para melhorar o aplicativo. Caso tenha ideias, pode nos enviar pelo nosso e-mail ou pelo direct do Instagram: @senacminas.",
        "em quais plataformas o jogo estará disponível?": "O jogo estará disponível para dispositivos móveis, necessitando também de um óculos de realidade virtual (VR) ou de realidade aumentada (AR). Fique atento às atualizações para mais detalhes.",
        "como posso baixar o jogo?": "O jogo estará disponível para download nas principais lojas de aplicativos, como o Google Play. Acompanhe nosso Instagram @senacminas para saber a data exata do lançamento."

    };

    return responses[input.toLowerCase()] || "Desculpe, não entendi sua pergunta.";
}

document.addEventListener('DOMContentLoaded', function() {
    var backButton = document.getElementById('backButton');
    if (backButton) {
        backButton.addEventListener('click', backToSections);
    }

    var sectionButtons = document.querySelectorAll('.secao');
    sectionButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var sectionId = this.nextElementSibling.id;
            toggleSection(sectionId);
        });
    });
});

function toggleSection(id) {
    var allSections = document.querySelectorAll('.secao');
    allSections.forEach(function(section) {
        section.classList.remove('selected');
    });

    var sectionButton = document.getElementById(id);
    if (sectionButton) {
        sectionButton.classList.add('selected');
    }

    var allQuestions = document.querySelectorAll('.questions');
    allQuestions.forEach(function(section) {
        section.style.display = 'none';
    });

    var section = document.getElementById(id);
    if (section) {
        section.style.display = 'block';
        document.getElementById("questions").style.display = 'flex'
    } else {
        console.error(`Seção com id "${id}" não encontrada.`);
    }

    var options = document.getElementById('duvidasOptions');
    if (options) {
        options.style.display = 'none';
    }

    var backButton = document.getElementById('backButton');
    if (backButton) {
        backButton.style.display = 'inline-block';
    }
}


function backToSections() {
    var options = document.getElementById('duvidasOptions');
    if (options) {
        options.style.display = 'block';
    }

    var backButton = document.getElementById('backButton');
    if (backButton) {
        backButton.style.display = 'none';
    }

    var allSections = document.querySelectorAll('.questions');
    allSections.forEach(function(section) {
        section.style.display = 'none';
    });
}
