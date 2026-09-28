# Rock Paper Scissors

A simple Rock Paper Scissors game built with **HTML, CSS, and JavaScript**.

This project was created as a JavaScript practice project to work with DOM manipulation, event listeners, functions, `localStorage`, keyboard events, and timers.

## Features

- Play Rock, Paper, or Scissors against the computer
- Random computer moves
- Win, Loss, and Tie score tracking
- Score persistence using `localStorage`
- Reset Score button
- Auto Play mode
- Keyboard controls:
  - `R` → Rock
  - `P` → Paper
  - `S` → Scissors

- Displays both player's and computer's moves

## Technologies

- HTML5
- CSS3
- JavaScript
- Local Storage API

## What I Practiced

- DOM manipulation
- `querySelector()`
- `addEventListener()`
- Click and keyboard events
- Functions and parameters
- Conditional statements
- `Math.random()`
- `setInterval()` and `clearInterval()`
- `localStorage`
- `JSON.stringify()` and `JSON.parse()`
- Template literals
- Dynamically updating HTML

## How It Works

The computer randomly selects one of three moves:

- Rock
- Paper
- Scissors

The player's move is then compared with the computer's move to determine the result.

The game keeps track of Wins, Losses, and Ties. The score is saved using `localStorage`, so it remains after refreshing the page.

## Controls

You can play using the buttons or your keyboard:

| Key | Move     |
| --- | -------- |
| `R` | Rock     |
| `P` | Paper    |
| `S` | Scissors |

The **Auto Play** button automatically plays a round every second until it is stopped.

## Project Structure

```text
Project-02-rock-paper-scisers/
│
├── assets/
│   ├── rock-emoji.png
│   ├── paper-emoji.png
│   └── scissors-emoji.png
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## How to Run

Clone or download the repository and open `index.html` in your browser.

No additional dependencies or installation are required.

## Future Improvements

- Improve responsive design
- Add animations
- Add sound effects
- Improve the Auto Play button UI
- Add more game statistics
