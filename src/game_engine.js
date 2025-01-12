import {
  BOARD_SIZE,
  DOG_CHANGE_POSITION_TIME,
  DOG_POOP_SPAWN_TIME,
} from "src/game_config.js";

import { generateBoard } from "board/generateBoard.js";
import { spawnDog } from "dog/spawnDog.js";
import { moveDog } from "dog/moveDog.js";
import { movePlayer } from "player/movePlayer.js";
import { spawnPlayer } from "player/spawnPlayer.js";
import { spawnPoop } from "poop/spawnPoop.js";

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
    setInterval(moveDog, DOG_CHANGE_POSITION_TIME);

    /* 6. SPAWN POOP */
    setInterval(spawnPoop, DOG_POOP_SPAWN_TIME);
  }
}
