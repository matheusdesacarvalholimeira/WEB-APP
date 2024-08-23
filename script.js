document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("video");
    const captureButton = document.getElementById("capture");
    const constraints = { video: true };
  
    // Solicita o uso da câmera e exibe no elemento de vídeo
    navigator.mediaDevices.getUserMedia(constraints)
      .then(function (stream) {
        video.srcObject = stream;
      })
      .catch(function (err) {
        console.error("Erro ao acessar a câmera: " + err);
      });
  
    // Captura a imagem quando o botão é clicado (apenas processa, sem exibir)
    captureButton.addEventListener("click", function () {
      // Aqui você pode processar a captura da imagem ou enviar para o servidor
      console.log("Imagem capturada, mas não exibida.");
    });
  });
  