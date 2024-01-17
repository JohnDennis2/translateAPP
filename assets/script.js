let wordList = [];
const userInput = document.getElementById('inputText')
const userOutput = document.getElementById('outputText')
const translateBtn = document.getElementById('translateBtn')
const maxCharacter = 2500;
const characterLimitOnScreen = document.getElementById('characterLimit');
const randomLangBtn = document.getElementById('randomLangBtn');
const dropdownResponse = document.getElementById('outputlangSelector');
const savBtn = document.querySelector('#saveButton');


const getTranslate = async function (language, input) {
  const url = 'https://google-translate113.p.rapidapi.com/api/v1/translator/text';
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Key': 'a083470254msh750cc561000c23bp1b6126jsn43f4d31d7c6e',
      'X-RapidAPI-Host': 'google-translate113.p.rapidapi.com'
    },
    body: new URLSearchParams({
      from: 'auto',
      to: language,
      text: input
    })
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    userOutput.textContent = result.trans;
  } catch (error) {
    console.error(error);
  }
}

translateBtn.addEventListener("click", function (event) {
  event.preventDefault();
  wordList = userInput.value.split(" ")
  getTranslate(chosenLanguage, userInput.value);
  saveToLocalStorage(userInput.value);
});


const randomWord = async function () {
  wordList = userInput.value.split(" ")
  const url = 'https://random-word-api.p.rapidapi.com/get_word';

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'a083470254msh750cc561000c23bp1b6126jsn43f4d31d7c6e',
      'X-RapidAPI-Host': 'random-word-api.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    wordList.push(result.word);
    console.log(wordList);
    userInput.value = '' + wordList.join(' ');
  } catch (error) {
    console.error(error);
  }
}

const randomBtn = document.getElementById('randomBtn')
randomBtn.addEventListener("click", async function (event) {
  event.preventDefault();
  randomWord();
});

userInput.addEventListener("input", function () {
  const remainingCharacters = userInput.value.length
  characterLimitOnScreen.innerHTML = "Character limit: " + remainingCharacters + "/" + maxCharacter;
})


const supportedLanguages = async function () {

  const url = 'https://google-translate113.p.rapidapi.com/api/v1/translator/support-languages';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'a083470254msh750cc561000c23bp1b6126jsn43f4d31d7c6e',
      'X-RapidAPI-Host': 'google-translate113.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

const url = 'https://google-translate113.p.rapidapi.com/api/v1/translator/support-languages';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'a5ac7c3d29mshd0795af90bdbbafp1dcb85jsna3494457d90e',
    'X-RapidAPI-Host': 'google-translate113.p.rapidapi.com'
  }
};


const getDropdown = async function (language, input) {
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    populateDropdown(result);
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

function populateDropdown(data) {
  const dropdown = document.getElementById('outputlangSelector');
  data.forEach(dataItem => {
    const option = document.createElement('option');
    option.classList.add('langChoices');
    option.value = dataItem.code;
    option.textContent = dataItem.language;
    option.addEventListener('click', () => handleOptionClick(option));
    dropdown.appendChild(option);
  });
}

dropdownResponse.addEventListener('change', function (event) {
  chosenLanguage = event.target.value;
});

randomLangBtn.addEventListener('click', function () {
  langChoices = document.getElementsByClassName('langChoices')
  let randomLang = Math.floor(Math.random() * langChoices.length);
  getTranslate(langChoices[randomLang].value, userInput.value);
  randomLangBtn.textContent = langChoices[randomLang].textContent
  saveToLocalStorage(userInput.value);
});


window.onload = function () {
  getDropdown();
  populateDropdown();
};


function saveToLocalStorage(phrase) {
  let savedPhrases = JSON.parse(localStorage.getItem('savedPhrases')) || [];
  savedPhrases.push(phrase);
  localStorage.setItem('savedPhrases', JSON.stringify(savedPhrases));
}
