const importMap = {
  imports: {
    "src/": "./src/",
    "board/": "./src/js/board/",
    "dog/": "./src/js/dog/",
    "player/": "./src/js/player/",
    "utils/": "./src/utils/",
  },
};

const script = document.createElement("script");

script.type = "importmap";
script.textContent = JSON.stringify(importMap);

document.head.appendChild(script);
