const elementoChute = document.getElementById('chute')

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition()
recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
    let chute = e.results[0][0].transcript
    exibeChuteNaTela(chute)
    verificaSeOChutePossuiUmValorValido(chute)

}

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
        <div>Você disse
        <span class="box">${chute}</span></div>
    `
}

recognition.addEventListener('end', () => recognition.start())