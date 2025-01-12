export function cleanPoop(poops) {
  if (!poops) {
    return;
  }

  const player = document.querySelector(".player");

  poops.forEach((poop) => {
    const playerPosition = +player.getAttribute("data-position");
    const poopPosition = +poop.getAttribute("data-position");

    if (playerPosition === poopPosition) {
      poop.remove();
    }
  });
}
