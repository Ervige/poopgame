import { BOARD_SIZE } from "./game_config.js";

import { generateBoard } from "./js/board/generateBoard.js";
import { spawnDog } from "./js/dog/spawnDog.js";
import { movePlayer } from "./js/player/movePlayer.js";
import { spawnPlayer } from "./js/player/spawnPlayer.js";
import { startDogMovement } from "./js/dog/moveDog.js";

/* 1. GENERATE BOARD */
generateBoard(BOARD_SIZE);

/* 2. SPAWN PLAYER */
const isBoardExist = document.querySelector(`[data-fieldid="${BOARD_SIZE}"]`);

if (isBoardExist) {
  spawnPlayer();

  const isPlayerExist = document.querySelector(".player");

  /* 3. MOVE PLAYER */
  if (isPlayerExist) {
    movePlayer();
  }
}

/* 4. SPAWN DOG */
const isPlayerExist = document.querySelector(`[data-fieldid="${BOARD_SIZE}"]`);

if (isPlayerExist) {
setTimeout(() => {
  spawnDog();
  console.log("Dog spawned after 2 seconds.");
}, 2000);

  /* 5. MOVE DOG */
  startDogMovement();
}