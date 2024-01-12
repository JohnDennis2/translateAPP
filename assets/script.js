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

// Function to save a phrase to local storage
function saveToLocalStorage(phrase) {
  let savedPhrases = JSON.parse(localStorage.getItem('savedPhrases')) || [];
  savedPhrases.push(phrase);
  localStorage.setItem('savedPhrases', JSON.stringify(savedPhrases));
}