import { spawnPlayer } from "./js/player/spawnPlayer.js";
import { generateBoard } from "./js/board/generateBoard.js";
import { BOARD_SIZE } from "./game_config.js";

/* 1. GENERATE BOARD */
generateBoard(BOARD_SIZE);

/* 2. SPAWN PLAYER */
const isBoardExist = document.querySelector(`[data-testid="${BOARD_SIZE}"]`);

if (isBoardExist) {
  spawnPlayer();
}
