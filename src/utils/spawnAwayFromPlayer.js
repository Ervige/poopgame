import { MINIMAL_SPACE_BETWEEN_GAME_ELEMENTS } from "src/game_config.js";

export function spawnAwayFromPlayer(elementPosition) {
  if (typeof elementPosition === "number") {
    if (elementPosition % 10 <= MINIMAL_SPACE_BETWEEN_GAME_ELEMENTS) {
      return elementPosition + MINIMAL_SPACE_BETWEEN_GAME_ELEMENTS;
    } else {
      return elementPosition - MINIMAL_SPACE_BETWEEN_GAME_ELEMENTS;
    }
  }
}
