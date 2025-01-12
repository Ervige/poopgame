import { BOARD_SIZE, DOG_CHANGE_DIRECTION_COUNTER } from "src/game_config.js";

import { calculatePosition } from "utils/calculatePosition.js";
import { generateAvailableDirections } from "utils/generateAvailableDirections.js";

let randomDirection = null; // Kierunek będzie przechowywany globalnie
let moveInOneDirectionTime = 0; // Licznik czasu dla generowania kierunku

export function moveDog() {
  const dog = document.querySelector(".dog");

  if (!dog) {
    console.error("Dog element is not found.");
    return;
  }

  const currentDogPosition = +dog.getAttribute("data-position");

  // Pobierz dostępne kierunki na podstawie aktualnej pozycji psa
  let availableDirections = generateAvailableDirections(currentDogPosition);

  // Co 5 sekund losujemy nowy kierunek
  if (
    moveInOneDirectionTime % DOG_CHANGE_DIRECTION_COUNTER === 0 ||
    !availableDirections.includes(randomDirection)
  ) {
    randomDirection =
      availableDirections[
        Math.floor(Math.random() * availableDirections.length)
      ];
  }

  // Oblicz nową pozycję psa
  let newDogPosition = calculatePosition(currentDogPosition, randomDirection);

  // Jeśli nowa pozycja wykracza poza planszę, wybierz nowy kierunek
  if (newDogPosition < 1 || newDogPosition > BOARD_SIZE) {
    // Filtrujemy dostępne kierunki na te, które nie prowadzą poza planszę
    availableDirections = availableDirections.filter((direction) => {
      const testPosition = calculatePosition(currentDogPosition, direction);

      return testPosition >= 1 && testPosition <= BOARD_SIZE;
    });

    // Wybieramy nowy kierunek
    if (availableDirections.length > 0) {
      randomDirection =
        availableDirections[
          Math.floor(Math.random() * availableDirections.length)
        ];
      newDogPosition = calculatePosition(currentDogPosition, randomDirection);
    } else {
      console.error("No valid directions available. Dog is stuck.");
      return;
    }
  }

  dog.setAttribute("data-position", newDogPosition);

  const newField = document.querySelector(`[data-fieldid="${newDogPosition}"]`);

  if (newField && newDogPosition) {
    newField.appendChild(dog);
  } else {
    console.error(`Field with data-fieldid="${newDogPosition}" not found.`);
  }

  // Zwiększamy licznik czasu
  moveInOneDirectionTime++;
}
