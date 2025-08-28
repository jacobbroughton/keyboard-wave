const keys = {
  Backquote: {
    row: 1,
    width: "30px",
    key: "`",
  },
  Digit1: {
    row: 1,
    width: "30px",
    key: "1",
  },
  Digit2: {
    row: 1,
    width: "30px",
    key: "2",
  },
  Digit3: {
    row: 1,
    width: "30px",
    key: "3",
  },
  Digit4: {
    row: 1,
    width: "30px",
    key: "4",
  },
  Digit5: {
    row: 1,
    width: "30px",
    key: "5",
  },
  Digit6: {
    row: 1,
    width: "30px",
    key: "6",
  },
  Digit7: {
    row: 1,
    width: "30px",
    key: "7",
  },
  Digit8: {
    row: 1,
    width: "30px",
    key: "8",
  },
  Digit9: {
    row: 1,
    width: "30px",
    key: "9",
  },
  Digit0: {
    row: 1,
    width: "30px",
    key: "0",
  },
  Minus: {
    row: 1,
    width: "30px",
    key: "-",
  },
  Equal: {
    row: 1,
    width: "30px",
    key: "=",
  },
  Backspace: {
    row: 1,
    width: "60px",
    key: "Backspace",
  },
  Tab: {
    row: 2,
    width: "40px",
    key: "Tab",
  },
  KeyQ: {
    row: 2,
    width: "30px",
    key: "q",
  },
  KeyW: {
    row: 2,
    width: "30px",
    key: "w",
  },
  KeyE: {
    row: 2,
    width: "30px",
    key: "e",
  },
  KeyR: {
    row: 2,
    width: "30px",
    key: "r",
  },
  KeyT: {
    row: 2,
    width: "30px",
    key: "t",
  },
  KeyY: {
    row: 2,
    width: "30px",
    key: "y",
  },
  KeyU: {
    row: 2,
    width: "30px",
    key: "u",
  },
  KeyI: {
    row: 2,
    width: "30px",
    key: "i",
  },
  KeyO: {
    row: 2,
    width: "30px",
    key: "o",
  },
  KeyP: {
    row: 2,
    width: "30px",
    key: "p",
  },
  BracketLeft: {
    row: 2,
    width: "30px",
    key: "[",
  },
  BracketRight: {
    row: 2,
    width: "30px",
    key: "]",
  },
  Backslash: {
    row: 2,
    width: "30px",
    key: "\\",
  },
  CapsLock: {
    row: 3,
    width: "55px",
    key: "CapsLock",
  },
  KeyA: {
    row: 3,
    width: "30px",
    key: "a",
  },
  KeyS: {
    row: 3,
    width: "30px",
    key: "s",
  },
  KeyD: {
    row: 3,
    width: "30px",
    key: "d",
  },
  KeyF: {
    row: 3,
    width: "30px",
    key: "f",
  },
  KeyG: {
    row: 3,
    width: "30px",
    key: "g",
  },
  KeyH: {
    row: 3,
    width: "30px",
    key: "h",
  },
  KeyJ: {
    row: 3,
    width: "30px",
    key: "j",
  },
  KeyK: {
    row: 3,
    width: "30px",
    key: "k",
  },
  KeyL: {
    row: 3,
    width: "30px",
    key: "l",
  },
  Semicolon: {
    row: 3,
    width: "30px",
    key: ";",
  },
  Quote: {
    row: 3,
    width: "30px",
    key: "'",
  },
  Enter: {
    row: 3,
    width: "30px",
    key: "Enter",
  },
  ShiftLeft: {
    row: 4,
    width: "30px",
    key: "Shift",
  },
  KeyZ: {
    row: 4,
    width: "30px",
    key: "z",
  },
  KeyX: {
    row: 4,
    width: "30px",
    key: "x",
  },
  KeyC: {
    row: 4,
    width: "30px",
    key: "c",
  },
  KeyV: {
    row: 4,
    width: "30px",
    key: "v",
  },
  KeyB: {
    row: 4,
    width: "30px",
    key: "b",
  },
  KeyN: {
    row: 4,
    width: "30px",
    key: "n",
  },
  KeyM: {
    row: 4,
    width: "30px",
    key: "m",
  },
  Comma: {
    row: 4,
    width: "30px",
    key: ",",
  },
  Period: {
    row: 4,
    width: "30px",
    key: ".",
  },
  Slash: {
    row: 4,
    width: "30px",
    key: "/",
  },
  ShiftRight: {
    row: 4,
    width: "50px",
    key: "Shift",
  },
};

const keysElement = document.querySelector(".keys");

const determineLabel = (initialLabel) => initialLabel === 'CapsLock' ? 'Caps Lock' : initialLabel

Object.keys(keys).map((keyCode) => {
  const keyElement = document.createElement("div");

  keyElement.style.width = keys[keyCode].width;
  keyElement.style.gridRow = keys[keyCode].row;
  keyElement.innerText = determineLabel(keys[keyCode].key)

  keyElement.setAttribute("data-key", keyCode);
  keyElement.classList.add('key')
  keysElement.appendChild(keyElement);
});

document.addEventListener("keydown", (e) => {
  e.preventDefault();

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
      element.style.border = `${keys[e.code].level * 2}px solid #ffffff90`;
    }, 200);
  }, 500);

  const element = document.querySelector(`[data-key=${e.code}]`);

  element.style.border = `${keys[e.code].level * 2}px solid #ffffff90`;
  element.style.width = keys[e.code].width;
});