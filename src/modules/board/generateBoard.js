export function generateBoard(fields) {
  if (typeof fields !== "number") {
    return;
  }

  const board = document.querySelector(".board");

  for (let i = 0; i < fields; i++) {
    const field = document.createElement("li");

    field.classList.add("board__field");
    field.setAttribute("data-fieldid", i + 1);

    board.appendChild(field);
  }
}
