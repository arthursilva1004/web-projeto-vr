document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("praclicar").addEventListener("click", chatbot);
});

function chatbot() {
    console.log("Chatbot function called!");
    var chatbothelp = document.getElementById("chatbothelp");
    var imagem = document.getElementById("praclicar");
    var currentRight = parseInt(window.getComputedStyle(chatbothelp).right, 10);
    
    if (currentRight >= 0) {
        chatbothelp.style.right = "-500px";
        imagem.style.right = "20px";
    } else {
        chatbothelp.style.right = "0px";
        imagem.style.right = "450px";
    }
}