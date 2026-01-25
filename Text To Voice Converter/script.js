let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.getElementsByName("select")[0];

window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];

  voices.forEach(
    (voice, index) =>
      (voiceSelect.options[index] = new Option(voice.name, index))
  );
};

voiceSelect.addEventListener("change", () => {
  speech.voice = voices[voiceSelect.value];
});

document.getElementById("btn").addEventListener("click", () => {
  speech.text = document.getElementsByName("textarea")[0].value;
  window.speechSynthesis.speak(speech);
});