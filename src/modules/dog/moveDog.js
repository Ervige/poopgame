import { calculatePosition } from "utils/calculatePosition.js";
import { generateAvailableDirections } from "utils/generateAvailableDirections.js";

export function moveDog() {
  const dog = document.querySelector(".dog");

  if (!dog) {
    console.error("Dog element is not found.");
    return;
  }

  const currentDogPosition = +dog.getAttribute("data-position");

  const availableDirections = generateAvailableDirections(currentDogPosition);

  let randomDirection =
    availableDirections[Math.floor(Math.random() * availableDirections.length)];

  let newDogPosition = calculatePosition(currentDogPosition, randomDirection);

  dog.setAttribute("data-position", newDogPosition);

  const newField = document.querySelector(`[data-fieldid="${newDogPosition}"]`);

  if (newField && newDogPosition) {
    newField.appendChild(dog);
  } else {
    console.error(`Field with data-fieldid="${newDogPosition}" not found.`);
  }
}
