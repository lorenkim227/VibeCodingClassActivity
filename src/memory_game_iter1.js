// --------------------
// Game State
// --------------------
const gameState = {
    moves: 0,
    timer: 0,
    timerInterval: null,
    difficulty: 'easy',
    isPlaying: false,
    cards: []
};

// Card values (8 pairs for 4x4 grid)
const cardValues = ['🎮', '🎯', '🎨', '🎭', '🎪', '🎸', '🎺', '🎹'];

// DOM elements
const movesDisplay = document.getElementById('moves');
const timerDisplay = document.getElementById('timer');
const gameBoard = document.getElementById('gameBoard');
const newGameBtn = document.getElementById('newGameBtn');
const difficultyBtns = document.querySelectorAll('.difficulty-btn');


// --------------------
// Initialize App
// --------------------
function init() {
    // Difficulty selector
    difficultyBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            difficultyBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            gameState.difficulty = this.dataset.difficulty;
        });
    });

    // New Game button
    newGameBtn.addEventListener('click', startNewGame);

    // Start first game automatically
    startNewGame();

    console.log('Iteration 1: Card grid with flip interactions - Complete!');
}


// --------------------
// Create Card Element
// --------------------
function createCard(value, index) {
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.value = value;
    card.dataset.index = index;

    card.innerHTML = `
        <div class="card-inner">
            <div class="card-face card-front"></div>
            <div class="card-face card-back">${value}</div>
        </div>
    `;

    // Add click event to flip card
    card.addEventListener('click', handleCardClick);

    return card;
}


// --------------------
// Handle Card Click
// --------------------
function handleCardClick(e) {
    const card = e.currentTarget;

    // Prevent re-clicking an already flipped card
    if (card.classList.contains('flipped')) return;

    // Flip the card
    card.classList.add('flipped');

    console.log(`Card flipped: ${card.dataset.value}`);
}


// --------------------
// Generate Cards (shuffle)
// --------------------
function generateCards() {
    const cards = [...cardValues, ...cardValues]; // duplicate for pairs

    // Fisher-Yates shuffle
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }

    return cards;
}


// --------------------
// Start New Game
// --------------------
function startNewGame() {
    console.log(`Starting new game with difficulty: ${gameState.difficulty}`);

    // Clear the board
    gameBoard.innerHTML = '';

    // Reset stats
    gameState.moves = 0;
    gameState.timer = 0;
    movesDisplay.textContent = '0';
    timerDisplay.textContent = '00:00';

    // Generate/shuffle cards
    const shuffledCards = generateCards();
    gameState.cards = shuffledCards;

    // Render cards
    shuffledCards.forEach((value, index) => {
        const card = createCard(value, index);
        gameBoard.appendChild(card);
    });

    console.log('16 cards generated and shuffled');
}


// --------------------
// Run on Page Load
// --------------------
document.addEventListener('DOMContentLoaded', init);
