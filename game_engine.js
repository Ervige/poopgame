import { BOARD_SIZE, DOG_CHANGE_DIRECTION_TIME } from "./game_config.js";

import { generateBoard } from "./js/board/generateBoard.js";
import { spawnDog } from "./js/dog/spawnDog.js";
import { moveDog } from "./js/dog/moveDog.js";
import { movePlayer } from "./js/player/movePlayer.js";
import { spawnPlayer } from "./js/player/spawnPlayer.js";

/* 1. GENERATE BOARD */
generateBoard(BOARD_SIZE);

const isBoardExist = document.querySelector(`[data-fieldid="${BOARD_SIZE}"]`);

let isPlayerExist;

let isDogExist;

/* 2. SPAWN PLAYER */
if (isBoardExist) {
  spawnPlayer();

  isPlayerExist = document.querySelector(".player");

  /* 3. MOVE PLAYER */
  if (isPlayerExist) {
    movePlayer();
  }
}

/* 4. SPAWN DOG */
if (isBoardExist && isPlayerExist) {
  spawnDog();

  isDogExist = document.querySelector(".dog");

  /* 5. MOVE DOG */
  if (isDogExist) {
    setInterval(moveDog, DOG_CHANGE_DIRECTION_TIME);
  }
}
