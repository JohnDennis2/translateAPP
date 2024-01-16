
    const savedPhrasesContainer = document.getElementById('savedPhrasesContainer');
    const savedPhrases = JSON.parse(localStorage.getItem('savedPhrases'));



    function phrasesOnScreen(){
   for(let i = 0; i < savedPhrases.length; i++){ 
        phraseListItem = document.createElement("li")
        phraseListItem.textContent = savedPhrases[i];
        savedPhrasesContainer.appendChild(phraseListItem);
    };

    }
phrasesOnScreen();
    
    
     // Button click handling logic to navigate to savedPhrases.html
     const viewIndexBtn = document.getElementById('viewIndexBtn');
     const viewPhrasesBtn = document.getElementById('viewPhrasesBtn');
    if (viewPhrasesBtn) {
        viewPhrasesBtn.addEventListener('click', function () {
            window.location.href = 'savedPhrases.html';
        });
     }
