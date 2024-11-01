const BOARD_SIZE = 100;

const DIRECTION = {
  UP: "UP",
  DOWN: "DOWN",
  LEFT: "LEFT",
  RIGHT: "RIGHT",
};

const ROUTINES = {
  GET_POOP_BAG: "GET_POOP_BAG",
  CLEAN_UP_THE_POOP: "CLEAN_UP_THE_POOP",
  THROW_AWAY_POOP_BAG: "THROW_AWAY_POOP_BAG",
  PICK_UP_THE_LEASH: "PICK_UP_THE_LEASH",
  CATCH_THE_DOG: "CATCH_THE_DOG",
};

const GAME_CONTROLS = {
  w: DIRECTION.UP,
  ArrowUp: DIRECTION.UP,

  s: DIRECTION.DOWN,
  ArrowDown: DIRECTION.DOWN,

  a: DIRECTION.LEFT,
  ArrowLeft: DIRECTION.LEFT,

  d: DIRECTION.RIGHT,
  ArrowRight: DIRECTION.RIGHT,
};

export { BOARD_SIZE, DIRECTION, GAME_CONTROLS, ROUTINES };
