const chosenLanguage = "es";
const userInput = document.getElementById('inputText')
const userOutput = document.getElementById('outputText')
const translateBtn = document.getElementById('translateBtn')
const langDropdown = document.getElementById('#outputlangSelector')

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
    console.log(result);
    populateDropdown(result);
  } catch (error) {
    console.error();
  }};
  
  function populateDropdown(data) {
    const dropdown = document.getElementById('outputlangSelector');
  console.log(data);
    data.forEach(dataItem => {
      const option = document.createElement('option');
      option.value = dataItem.language;
      option.textContent = dataItem.language;
      option.addEventListener('click', () => handleOptionClick(option));
      dropdown.appendChild(option);
    });
  }

  window.onload = function() {
    getDropdown();
    populateDropdown();
  };


