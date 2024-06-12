const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let passOne = document.getElementById('pass-one');
let passTwo = document.getElementById('pass-two');
let containPassword = false

function generatePasswords(){
    containPassword = true
    passOne.textContent = '';
    passTwo.textContent = '';
    for(let i = 0; i < 15; i++){
        let randomIndexOne = Math.floor(Math.random() * characters.length);
        let randomIndexTwo = Math.floor(Math.random() * characters.length);
        passOne.textContent += characters[randomIndexOne];
        passTwo.textContent += characters[randomIndexTwo];
    }
}

function copyPassOne() {
    if(containPassword){
        navigator.clipboard.writeText(passOne.textContent);
        alert("Password copied to clipboard!");
    }
}

function copyPassTwo(){
    if(containPassword){
        navigator.clipboard.writeText(passTwo.textContent);
        alert("Password Copied!");
    }
}


let containerEl = document.querySelector('.container')
let cardEl = document.querySelector('.card');
let titleEL = document.querySelector('.new-line');
let subHeadingEl = document.querySelector('.sub-heading');
let hrEl = document.querySelector('hr');

function changeTheme(){
    containerEl.classList.toggle('light-container')
    cardEl.classList.toggle('light-card');
    titleEL.classList.toggle('light-title');
    subHeadingEl.classList.toggle('light-sub-heading');
    hrEl.classList.toggle('light-hr');
}