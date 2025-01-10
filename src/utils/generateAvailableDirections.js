import { DIRECTION } from "src/game_config.js";

export const generateAvailableDirections = (position) => {
  if (!position) {
    return [];
  }

  const availableDirections = [];

  // Pobierz pozycję gracza
  const player = document.querySelector(".player");
  const playerPosition = Number(player.getAttribute("data-position"));

  // Wylicz potencjalne pozycje w każdym kierunku
  const left = position - 1;
  const right = position + 1;
  const up = position - 10;
  const down = position + 10;

  // Wyjątki dla pierwszego i ostatniego elementu w rzędzie
  const firstElementInRow = position % 10 === 1;
  const lastElementInRow = position % 10 === 0;

  // Sprawdź warunki dla każdego kierunku i dodaj do tablicy, jeśli spełnione
  if (left >= 1 && left !== playerPosition && !firstElementInRow) {
    availableDirections.push(DIRECTION.LEFT);
  }

  if (right <= 100 && right !== playerPosition && !lastElementInRow) {
    availableDirections.push(DIRECTION.RIGHT);
  }

  if (up >= 1 && up !== playerPosition) {
    availableDirections.push(DIRECTION.UP);
  }

  if (down <= 100 && down !== playerPosition) {
    availableDirections.push(DIRECTION.DOWN);
  }

  return availableDirections;
};
