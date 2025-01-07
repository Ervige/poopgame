import { MINIMAL_SPACE_BETWEEN_GAME_ELEMENTS } from "../../game_config.js";

export function calculatePositionFromPlayer(elementPosition) {
  if (typeof elementPosition === "number") {
    if (elementPosition % 10 <= MINIMAL_SPACE_BETWEEN_GAME_ELEMENTS) {
      return elementPosition + MINIMAL_SPACE_BETWEEN_GAME_ELEMENTS;
    } else {
      return elementPosition - MINIMAL_SPACE_BETWEEN_GAME_ELEMENTS;
    }
  }
}
