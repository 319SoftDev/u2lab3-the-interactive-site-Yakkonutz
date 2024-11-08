const radioInput = document.querySelector("#fav_color");
const radioOutput = document.querySelector("#radio-output");

const displayColor = (e) => {
    
    const color = e.target.value;
    if (color === "blue") {
        radioOutput.innerHTML = "You picked blue 💙";
    } else if (color === "green") {
        radioOutput.innerHTML = "You picked green 💚";
    } else if (color === "pink") {
        radioOutput.innerHTML = "You picked pink 💕";
    } else if (color === "black") {
        radioOutput.innerHTML = "You picked black 🖤";
    }
};

radioInput.addEventListener('change', displayColor);



const randomNumber = getRandomInt();
console.log(randomNumber);

const numInput = document.querySelector("#num-input");
const numOutput = document.querySelector("#num-output");

const checkNumber = (e) => {
   
    const value = e.target.valueAsNumber;

    if (value < randomNumber) {
        numOutput.innerHTML = `Not ${value}, guess higher!`;
    } else if (value > randomNumber) {
        numOutput.innerHTML = `Not ${value}, guess lower!`;
    } else {
        numOutput.innerHTML = `Hurray! You got it! It's ${value}`;
    }

    e.target.select();
};

numInput.addEventListener('change', checkNumber);



const textInput = document.getElementById('text-input');
const continentAlert = document.getElementById('sr-continent-alert');
const continents = ['North America', 'South America', 'Europe', 'Africa', 'Asia', 'Australia', 'Antarctica'];
let enteredContinents = [];

textInput.addEventListener('input', () => {
  const userInput = textInput.value.trim().toLowerCase();
  const userContinents = userInput.split(',').map(item => item.trim().toLowerCase());

 
  
  userContinents.forEach(continent => {
    if (continents.map(c => c.toLowerCase()).includes(continent)) {
      if (!enteredContinents.includes(continent)) {
        enteredContinents.push(continent);
        const count = enteredContinents.length;
        continentAlert.textContent = `Yes! ${continent.charAt(0).toUpperCase() + continent.slice(1)} is a continent. Nice! ${count} out of 7`;
      } else {
        continentAlert.textContent = `${continent.charAt(0).toUpperCase() + continent.slice(1)} has already been selected.`;
      }
    } else {
      continentAlert.textContent = `${continent.charAt(0).toUpperCase() + continent.slice(1)} is not a continent.`;
    }
  });

  if (enteredContinents.length === continents.length) {
    continentAlert.textContent = 'Congratulations! You named all 7 continents. YAYYYY!!';
  }
});



const colorInput = document.getElementById('color');
const checkbox = document.getElementById('human');
const submitButton = document.getElementById('submit');
const srOutput = document.getElementById('sr-output');

submitButton.addEventListener('click', changeBackground);

function changeBackground(e) {
    e.preventDefault(); 

    if (checkbox.checked) {
        const selectedColor = colorInput.value;
        document.body.style.background = selectedColor; 
        srOutput.textContent = `Background color changed to ${selectedColor}`; 
    } else {
        srOutput.textContent = "Select 'I'm not a Robot' to change the background color."; 
    }
}




