// global variables & player objects
let player = {
    name: prompt("Please Enter Your Name: "),
    chips: 0,
    goodLuck: () => {
        alert("Good Luck!")
    }
}


let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ":  $" + player.chips;

let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");
let blueChipTotal = 0;
let redChipTotal = 0;
let greenChipTotal = 0;
let yellowChipTotal = 0;

// generates a random card and has rules set for J, Q, K, and Ace
function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber > 10) {
        return 10;
    } else if (randomNumber === 1) {
        return 11;
    } else {
        return randomNumber;
    } 
}

// Begins the game and sets the initial cards + sum
function startGame() {
    isAlive = true; 
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard]; 
    sum = firstCard + secondCard;
    renderGame();
    player.goodLuck();
}


function renderGame() {
    // rendering cards and sum to the page
    // render out ALL the cards we have 
    cardsEl.textContent = "Cards: " 

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " - ";
    }

    sumEl.textContent = ("Sum: " + sum);
    // conditional statements to display a message depending on cards
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackJack = true;
        player.chips += player.chips + 20;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    // rendering the message to the page
    messageEl.textContent = message;
}

// function to generate a new card and add it to the sum
function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        // 1. create a card variable and hard code its value to a number 2-11
        let freshCard = getRandomCard();
        // 2. add the new card to the sum variable
        sum += freshCard;
        // push the card to the cards array
        cards.push(freshCard);
        // 3. call startGame()
        renderGame();
    } 
}