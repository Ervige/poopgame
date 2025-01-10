const importMap = {
  imports: {
    "src/": "./src/",
    "board/": "./src/modules/board/",
    "dog/": "./src/modules/dog/",
    "player/": "./src/modules/player/",
    "utils/": "./src/utils/",
  },
};

const script = document.createElement("script");

script.type = "importmap";
script.textContent = JSON.stringify(importMap);

document.head.appendChild(script);
