// Grabbing the HTML elements
const userText = document.getElementById("user-text");
const cardText = document.getElementById("card-text");
const backgrounds = document.getElementsByClassName("background-choice");
const cardBackground = document.getElementById("card-container").firstElementChild;

/**
 * Updates the text
 */
const updateText = () => {
  cardText.innerHTML = userText.value;
};

/**
 * Changes the color of text
 * @param {string} selectedColor - The selected CSS color code
 */
const changeColor = (selectedColor) => {
  cardText.style.color = selectedColor;
};

/**
 * Changes the background of the card
 * @param {string} selectedBackground - The selected background image URL
 */
const changeBackground = (selectedBackground) => {
  cardBackground.src = selectedBackground;
}

// Adding a "click" event listener to all backgrounds
for (let i = 0; i < backgrounds.length; i++) {
  backgrounds[i].addEventListener("click", () => changeBackground(backgrounds[i].firstElementChild.src));
}

