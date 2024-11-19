const textEL = document.getElementById('text');
const speakEL = document.getElementById('speak');

speakEL.addEventListener('click', speakText);
speakEL.addEventListener('Enter', speakText);
function speakText() {

    // to stop the speaking process in middle
    window.speechSynthesis.cancel();

    const text = textEL.value;
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
}
