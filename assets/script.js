function translate() {
    const inputText = document.getElementById('inputText').value;
    const targetLanguage = document.getElementById('targetLanguage').value;
    const outputTextElement = document.getElementById('outputText');
    // Use the Yandex Translate API (replace 'YOUR_API_KEY' with your actual API key)
    const apiKey = 'YOUR_API_KEY';
    const apiUrl = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${apiKey}&text=${encodeURIComponent(
      inputText
    )}&lang=${targetLanguage}`;
    // Make a GET request to the Yandex Translate API
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.code === 200) {
          const translatedText = data.text[0];
          outputTextElement.value = translatedText;
        } else {
          outputTextElement.value = 'Error translating text. Please try again.';
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        outputTextElement.value = 'Error translating text. Please try again.';
      });
  }