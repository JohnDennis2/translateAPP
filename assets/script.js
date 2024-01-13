const wordList = [];
const chosenLanguage = "es";
const userInput = document.getElementById('inputText')
const userOutput = document.getElementById('outputText')
const translateBtn = document.getElementById('translateBtn')

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
  getTranslate(chosenLanguage, userInput.value);
});

const randomWord = async function () {
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
    } catch (error) {
        console.error(error);
    }
}

const randomBtn = document.getElementById('randomBtn')
randomBtn.addEventListener("click", function (event) {
  event.preventDefault();
  randomWord();
  console.log(wordList);
  userInput.textContent = wordList.join(' ')
});




