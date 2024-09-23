// Check if the browser supports Web Speech API
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (!SpeechRecognition) {
    alert("Your browser does not support the Web Speech API. Please use Chrome.");
} else {
    // Initialize speech recognition
    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.lang = 'en-US';

    const startBtn = document.getElementById('start-btn');
    const stopBtn = document.getElementById('stop-btn');
    const output = document.getElementById('output');

    // Handle recognition results
    recognition.onresult = function (event) {
        const transcript = event.results[event.resultIndex][0].transcript;
        output.innerHTML = `<p>You said: ${transcript}</p>`;

        // Send the recognized text to an API like OpenAI (Optional)
        // sendToAPI(transcript);
    };

    // Start recognition
    startBtn.addEventListener('click', () => {
        recognition.start();
        output.innerHTML = `<p>Listening...</p>`;
    });

    // Stop recognition
    stopBtn.addEventListener('click', () => {
        recognition.stop();
        output.innerHTML = `<p>Stopped listening.</
