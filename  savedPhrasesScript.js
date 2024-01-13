document.addEventListener('DOMContentLoaded', function () {
    const savedPhrasesContainer = document.getElementById('savedPhrasesContainer');
    const savedPhrases = JSON.parse(localStorage.getItem('savedPhrases')) || [];

    savedPhrases.forEach(function (phrase) {
        const phraseElement = document.createElement('div');
        phraseElement.textContent = phrase;
        savedPhrasesContainer.appendChild(phraseElement);
    });
     console.log("Logging something specific")
     // Button click handling logic to navigate to savedPhrases.html
     const viewIndexBtn = document.getElementById('viewIndexBtn');
     const viewPhrasesBtn = document.getElementById('viewPhrasesBtn');
    if (viewPhrasesBtn) {
        viewPhrasesBtn.addEventListener('click', function () {
            window.location.href = 'file:///Users/ericreyna/Documents/Homework/translateAPP/savedPhrases.html';
        });
     }
});