const characters = ["A", "B", "C", "D", "E", "F",
    "G", "H", "I", "J", "K", "L", "M", "N", "O",
    "P", "Q", "R", "S", "T", "U", "V", "W", "X",
    "Y", "Z", "a", "b", "c", "d", "e", "f", "g",
    "h", "i", "j", "k", "l", "m", "n", "o", "p",
    "q", "r", "s", "t", "u", "v", "w", "x", "y",
    "z", "0", "1", "2", "3", "4", "5", "6", "7",
    "8", "9", "~", "`", "!", "@", "#", "$", "%",
    "^", "&", "*", "(", ")", "_", "-", "+", "=",
    "{", "[", "}", "]", ",", "|", ":", ";", "<",
    ">", ".", "?", "/"
];

console.log(characters.length);

let firstPassword = document.getElementById("frs_password_btn");
let secondPassword = document.getElementById("scd_password_btn");

function getRandomPasswords() {
    let userInput = parseInt(document.getElementById("user_input").value);
    let newPasswordOne;
    let newPasswordTwo;
    let suggestionOne = [];
    let suggestionTwo = [];
    const numberPattern = /^[0-9]+$/;
    if (userInput >= 5 && userInput <= 15 && numberPattern.test(userInput)) {
        for (let i = 0; i < userInput; i++) {
            let firstPasswordOption = Math.floor(Math.random() * characters.length + 1);
            let secondPasswordOption = Math.floor(Math.random() * characters.length + 1);
            suggestionOne.push(characters[firstPasswordOption]);
            newPasswordOne = suggestionOne.join("");
            suggestionTwo.push(characters[secondPasswordOption]);
            newPasswordTwo = suggestionTwo.join("");
            firstPassword.style.display = "inline";
            secondPassword.style.display = "inline";
            firstPassword.textContent = newPasswordOne;
            secondPassword.textContent = newPasswordTwo;
        }
    } else {
        alert("You can only create a password from 5 to 15 characters")
    }

}

const generatePsw = document.getElementById("generate_password_btn");
generatePsw.addEventListener("click", getRandomPasswords);

function showNotification(message) {
    let notification = document.getElementById("notification");
    notification.textContent = message;
    notification.className = "show";
    setTimeout(function() {
        notification.className = notification.className.replace("show", "");
    }, 3000);
};

function copyFirstPassword() {
    let passwordToCopy = firstPassword.textContent;
    if (navigator.clipboard) {
        navigator.clipboard.writeText(passwordToCopy).then(function() {
            showNotification("Password Copied! ");
        }, function(err) {
            console.error("Error al copiar el texto: ", err);
        });
    }
};

function copySecondPassword() {
    let passwordToCopy = secondPassword.textContent;
    if (navigator.clipboard) {
        navigator.clipboard.writeText(passwordToCopy).then(function() {
            showNotification("Password Copied! ");
        }, function(err) {
            console.error("Error al copiar el texto: ", err);
        });
    }
}

secondPassword.addEventListener("click", copySecondPassword)
firstPassword.addEventListener("click", copyFirstPassword);