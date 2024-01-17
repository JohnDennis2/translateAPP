document.addEventListener('DOMContentLoaded', function () {
    const savedPhrasesContainer = document.getElementById('savedPhrasesContainer');
    const savedPhrases = JSON.parse(localStorage.getItem('savedPhrases')) || [];

    savedPhrases.forEach(function (phrase) {
        const phraseElement = document.createElement('p');
        phraseElement.textContent = phrase;
        savedPhrasesContainer.appendChild(phraseElement);
    });

    // Button click handling logic to add a new phrase
    const addPhraseBtn = document.getElementById('PhraseBtn');
    if (addPhraseBtn) {
        addPhraseBtn.addEventListener('click', function () {
            const newPhrase = prompt('Enter a new phrase:');
            if (newPhrase) {
                savedPhrases.push(newPhrase);
                localStorage.setItem('savedPhrases', JSON.stringify(savedPhrases));
                
                const phraseElement = document.createElement('div');
                phraseElement.textContent = newPhrase;
                savedPhrasesContainer.appendChild(phraseElement);
            }
        });
    }
    
     // Button click handling logic to navigate to savedPhrases.html
     const viewIndexBtn = document.getElementById('viewIndexBtn');
     const viewPhrasesBtn = document.getElementById('viewPhrasesBtn');
    if (viewPhrasesBtn) {
        viewPhrasesBtn.addEventListener('click', function () {
            window.location.href = 'file:///Users/ericreyna/Documents/Homework/translateAPP/savedPhrases.html';
        });
     }
});