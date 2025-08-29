import { borderColors, fontSizes, initialKeys } from "./constants.js";
const keysElement = document.querySelector(".keys");
const keys = Object.assign({}, initialKeys);

const determineLabel = (initialLabel) =>
  initialLabel === "CapsLock" ? "Caps Lock" : initialLabel;

const determineBorderColor = (level) => {
  if (level < 10) {
    return borderColors.first;
  } else if (level < 20) {
    return borderColors.second;
  } else if (level < 30) {
    return borderColors.third;
  } else {
    return borderColors.third;
  }
};

const determineFontSize = (level) => {
  if (level < 10) {
    return fontSizes.first;
  } else if (level < 20) {
    return fontSizes.second;
  } else if (level < 30) {
    return fontSizes.third;
  } else {
    return fontSizes.third;
  }
}

Object.keys(keys).map((keyCode) => {
  const keyElement = document.createElement("div");

  keyElement.style.width = keys[keyCode].width;
  keyElement.style.gridRow = keys[keyCode].row;
  keyElement.style.fontSize = determineFontSize(1);
  keyElement.innerText = determineLabel(keys[keyCode].key);

  keyElement.setAttribute("data-key", keyCode);
  keyElement.classList.add("key");
  keysElement.appendChild(keyElement);
});

document.addEventListener("keydown", (e) => {
  e.preventDefault();
  if (!Object.keys(keys).includes(e.code)) return;

  if (keys[e.code].timeout) clearTimeout(keys[e.code].timeout);
  if (keys[e.code].interval) clearInterval(keys[e.code].interval);

  keys[e.code] = {
    ...keys[e.code],
    level: keys[e.code].level ? keys[e.code].level + 1 : 1,
  };

  keys[e.code].timeout = setTimeout(() => {
    keys[e.code].interval = setInterval(() => {
      if (keys[e.code].level <= 0) return;
      keys[e.code].level -= 1;
      element.style.border = `${keys[e.code].level * 2}px solid ${determineBorderColor(keys[e.code].level)}`;
      element.style.fontSize = determineFontSize(`${keys[e.code].level}`);
    }, 200);
  }, 500);

  const element = document.querySelector(`[data-key=${e.code}]`);

  element.style.border = `${keys[e.code].level * 2}px solid ${determineBorderColor(keys[e.code].level)}`;
  element.style.fontSize = determineFontSize(`${keys[e.code].level}`);
  element.style.width = keys[e.code].width;
});
