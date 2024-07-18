var guess = document.getElementById("guessno");
var notifywin = document.getElementById("notifywin");
var result = document.getElementById("result");
var magicNumber = Math.floor(Math.random() * 100) + 1;
var attempt = 5;
console.log(magicNumber);

function check() {
    var input = parseInt(guess.value);

    if (input < 1 || input > 100) {
        notifywin.textContent = "Please enter a valid number between 1 and 100.";
        result.textContent = "You have " + attempt + " chances left";
        notifywin.style.backgroundColor = "#405D72";
        inst.style.backgroundColor = "#405D72";
        return; 
    }

    if (attempt <= 0) {
        notifywin.textContent = "Oooopssss... You lost the game 😭";
        result.textContent = "No more chances left";
        notifywin.style.backgroundColor = "#ea431f";
        inst.style.backgroundColor = "#ea431f";
        return;
    }

    if (input === magicNumber) {
        notifywin.textContent = "Wowww! You won the game 🎁";
        result.textContent = "You have " + attempt + " chances left";
        notifywin.style.backgroundColor = "#53995a";
        inst.style.backgroundColor = "#53995a";
        return;
    } 
    else {
        attempt--;
        if (attempt <= 0) {
            notifywin.textContent = "Oooopssss... You lost the game 😭";
            result.textContent = "No more chances left";
            notifywin.style.backgroundColor = "#ea431f";
            inst.style.backgroundColor = "#ea431f";
            return;
        } 
        else {
            notifywin.textContent = input > magicNumber ? "Your guess is greater than the magic number 🥺" : "Your guess is smaller than the magic number 🫣";
            result.textContent = "You have " + attempt + " chances left";
            notifywin.style.backgroundColor = "#037E8C";
            inst.style.backgroundColor = "#037E8C";
        }
    }
}
