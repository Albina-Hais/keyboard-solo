wordContainer = document.querySelector("div.word");
const words = ["wrap", "draughts", "candle", "charge", "conditioner", "meteor", "rattlesnake", "pocket"];

function getRandomWord(arr) {
    const randomNumber = Math.floor(Math.random() * arr.length);
    return arr[randomNumber];
};

function showRandomWord() {
    const randomWord = getRandomWord(words);
    wordContainer.textContent = '';

    const fragment = new DocumentFragment();
    randomWord.split("").forEach(item => {
        const letter = document.createElement('span');
        letter.textContent = item;
        fragment.append(letter);
    })
    wordContainer.append(fragment);
};

showRandomWord();

let i = 0;

document.addEventListener('keydown', function(event) {
<<<<<<< Updated upstream
    const element = wordContainer.querySelectorAll('span');
=======
    let element = wordContainer.querySelectorAll('span');
>>>>>>> Stashed changes

    if (event.key === element[i].textContent) {
        element[i].className = 'c';
        i++;
    } else {
        element[i].className = 'w';
    }
});