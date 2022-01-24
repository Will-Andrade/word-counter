const textBox = document.querySelector('[data-js="text-box"]');
const charactersCount = document.querySelector('[data-js="characters-count"]');
const wordsCount = document.querySelector('[data-js="words-count"]');

const filterWords = word => word !== '';

const countWordsAmount = sentence => 
    sentence.split(' ').filter(filterWords).length;

const textBoxHandler = ({ target }) => {
    charactersCount.textContent = target.value.replace(/\s/g, '').length;
    wordsCount.textContent = countWordsAmount(target.value);
};

textBox.addEventListener('input', textBoxHandler);
