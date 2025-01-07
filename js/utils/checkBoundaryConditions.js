import { BOARD_SIZE } from "../../game_config.js";

export const checkBoundaryConditions = (position) =>
  position >= 1 && position <= BOARD_SIZE;
