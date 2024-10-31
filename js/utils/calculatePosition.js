import { DIRECTION, BOARD_SIZE } from "../../game_config.js";

export function calculatePosition(position, direction) {
  const calculatedUnit = Math.sqrt(BOARD_SIZE);

  if (!Number.isInteger(calculatedUnit)) {
    console.error(
      "Position must be a integer number. Change BOARD_SIZE in game_config.js"
    );
    return;
  }

  if (direction === DIRECTION.UP) {
    return +position - calculatedUnit;
  }

  if (direction === DIRECTION.DOWN) {
    return +position + calculatedUnit;
  }

  if (direction === DIRECTION.LEFT) {
    if (+position % calculatedUnit !== 1) {
      return +position - 1;
    }
  }

  if (direction === DIRECTION.RIGHT) {
    if (+position % calculatedUnit !== 0) {
      return +position + 1;
    }
  }
}
