var guess = document.getElementById("guessno");
var notifywin = document.getElementById("notifywin");
var result = document.getElementById("result");
var inst = document.getElementById("inst");
var magicNumber = Math.floor(Math.random() * 100) + 1;
var ref = document.getElementById("play");
var gameover = false;
console.log(magicNumber);
var easyBtn = document.getElementById("easy");
var hardBtn = document.getElementById("hard");
var result = document.getElementById("result");
var attempt = 0;

easyBtn.addEventListener("click", function() {
    attempt = 5;
    result.textContent = `You have ${attempt} chances left`;
    // result.style.backgroundColor = "#6fbff7";
    // inst.style.backgroundColor ="#6fbff7";
});

hardBtn.addEventListener("click", function() {
    attempt = 10;
    result.textContent = `You have ${attempt} chances left`;
    // result.style.backgroundColor = "#6fbff7";
    // inst.style.backgroundColor ="#6fbff7";
});

function refresh(){
    if(ref){
        window.location.reload();
    }
}

function check() {
   
    var input = parseInt(guess.value);

    if(attempt === 0){
        alert("Please Choose the Difficulty 😟");
        return;
    }

    else if (isNaN(input) || input < 1 || input > 100) {
        notifywin.textContent = "Please enter a valid number between 1 and 100 🥲";
        inst.style.backgroundColor = "#405D72";
        result.textContent = "You have " + attempt + " chances left";
        notifywin.style.backgroundColor = "#405D72";
        inst.style.color = "#ffffff";
        adjustInstSize();
        return; 
    }
  

   else if (attempt <= 0) {
        notifywin.textContent = "Oooopssss... You lost the game 😭";
        result.textContent = "The Magic Number is: "+ magicNumber;
        notifywin.style.backgroundColor = "#ea431f";
        inst.style.backgroundColor = "#ea431f";
        inst.style.color = "#ffffff";
        adjustInstSize();
        return;
    }
    else if (input === magicNumber) {
        notifywin.textContent = " ";
        // result.textContent = "You have " + attempt + " chances left";
        result.innerText = "Wowww! You won the game 🎁";
        notifywin.style.backgroundColor = "#53995a";
        inst.style.backgroundColor = "#53995a";
        adjustInstSize();
        // setTimeout(function() {
        //     alert("");
        // }, 1000);
        return;
    }

    else{
        attempt--;
        if (attempt <= 0) {
            notifywin.textContent = "Oooopssss... You lost the game 😭";
            result.textContent = "The Magic Number is:"+ magicNumber;
            notifywin.style.backgroundColor = "#ea431f";
            inst.style.backgroundColor = "#ea431f";
            inst.style.color = "#ffffff";
            adjustInstSize();
            return;
        } 
        
        else{
            notifywin.textContent = input > magicNumber ? "Your guess is greater than the magic number 🥺" : "Your guess is smaller than the magic number 🫣";
            result.textContent = "You have " + attempt + " chances left";
            notifywin.style.backgroundColor = "#037E8C";
            inst.style.backgroundColor = "#037E8C";
            inst.style.color = "#ffffff";
            adjustInstSize();
        }
        
    }
}

function adjustInstSize() {
    inst.style.width = '400px'; // reset the height
    var width = inst.scrollWidth; // get the scrollHeight which gives the full height of the content
    inst.style.width = width + 'px'; // set the height dynamically
}
