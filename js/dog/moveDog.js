import { BOARD_SIZE, DIRECTION } from "../../game_config.js";

import { calculatePosition } from "../utils/calculatePosition.js";
import { checkBoundaryConditions } from "../utils/checkBoundaryConditions.js";
import { switchDirectionToOpposite } from "../utils/switchDirectionToOpposite.js";

export function moveDog() {
  const dog = document.querySelector(".dog");

  if (!dog) {
    console.error("Dog element is not found.");
    return;
  }

  const directions = Object.keys(DIRECTION);

  const player = document.querySelector(".player");

  const currentDogPosition = +dog.getAttribute("data-position");

  let randomDirection =
    directions[Math.floor(Math.random() * directions.length)];

  let newDogPosition = calculatePosition(currentDogPosition, randomDirection);

  const currentPlayerPosition = +player.getAttribute("data-position");

  if (
    !checkBoundaryConditions(newDogPosition) ||
    !newDogPosition ||
    newDogPosition < 0 ||
    newDogPosition > BOARD_SIZE
  ) {
    newDogPosition = calculatePosition(
      currentDogPosition,
      switchDirectionToOpposite(randomDirection)
    );
  }

  if (newDogPosition === currentPlayerPosition) {
    return;
  }

  dog.setAttribute("data-position", newDogPosition);

  const newField = document.querySelector(`[data-fieldid="${newDogPosition}"]`);

  if (newField && newDogPosition) {
    newField.appendChild(dog);
  } else {
    console.error(`Field with data-fieldid="${newDogPosition}" not found.`);
  }
}
