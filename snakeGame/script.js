// Set up initial variables
const gameBoard = document.getElementById('game-board');
const boardSize = 300;
let snake = [{ x: 0, y: 0 }]; // Initial position of the snake
let direction = 'right'; // Initial direction of the snake

function drawSnake() {
  // Remove previous snake elements
  document.querySelectorAll('.snake-head, .snake-body').forEach((segment) => segment.remove());

  // Draw the snake on the game board
  snake.forEach((segment, index) => {
    const snakeSegment = document.createElement('div');
    snakeSegment.className = (index === 0) ? 'snake-head' : 'snake-body';
    snakeSegment.style.left = segment.x + 'px';
    snakeSegment.style.top = segment.y + 'px';
    gameBoard.appendChild(snakeSegment);
  });
}

function updateSnake() {
  // Update the position of the snake based on the current direction
  const head = { ...snake[0] };
  switch (direction) {
    case 'up':
      head.y -= 20;
      break;
    case 'down':
      head.y += 20;
      break;
    case 'left':
      head.x -= 20;
      break;
    case 'right':
      head.x += 20;
      break;
  }

  // Check for boundary conditions and prevent the snake from going outside the game board
  if (head.x < 0) head.x = boardSize - 20;
  if (head.x >= boardSize) head.x = 0;
  if (head.y < 0) head.y = boardSize - 20;
  if (head.y >= boardSize) head.y = 0;

  // Add the new head to the front of the snake
  snake.unshift(head);

  // Remove the last segment of the snake to maintain its length
  snake.pop();
}

function handleKeyPress(event) {
  // Update the direction based on the arrow keys
  switch (event.code) {
    case 'ArrowUp':
      direction = 'up';
      break;
    case 'ArrowDown':
      direction = 'down';
      break;
    case 'ArrowLeft':
      direction = 'left';
      break;
    case 'ArrowRight':
      direction = 'right';
      break;
  }
}

function gameLoop() {
  updateSnake();
  drawSnake();
}

// Set up event listeners
document.addEventListener('keydown', handleKeyPress);

// Run the game loop at regular intervals
setInterval(gameLoop, 200);