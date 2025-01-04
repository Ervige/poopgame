import { DIRECTION } from "../../game_config.js";

export const switchDirectionToOpposite = (direction) => {
  if (!direction) {
    console.error("Direction is not defined.");
    return;
  }

  if (direction === DIRECTION.UP) {
    return DIRECTION.DOWN;
  } else if (direction === DIRECTION.DOWN) {
    return DIRECTION.UP;
  } else if (direction === DIRECTION.LEFT) {
    return DIRECTION.RIGHT;
  } else if (direction === DIRECTION.RIGHT) {
    return DIRECTION.LEFT;
  }
};
