/* Create main parts of the page */
const textarea = document.createElement('textarea');
const keyboard = document.createElement('div');
const operatingSystem = document.createElement('p');
const keyToSwitchLanguage = document.createElement('p');
const descriptionOfShift = document.createElement('p');

/* Add classes to main parts of the page */
keyboard.classList.add('keyboard');
textarea.classList.add('textarea');
operatingSystem.classList.add('paragraph');
keyToSwitchLanguage.classList.add('paragraph');
descriptionOfShift.classList.add('paragraph');

operatingSystem.innerHTML = 'The keyboard was build on Windows Operating System.';
keyToSwitchLanguage.innerHTML = 'To switch language use combination Ctrl + Alt.';
descriptionOfShift.innerHTML = 'Sticking of shift on the virtual keyboard, when you click on it, was done consciously in order to make the keyboard more convenient to use.';

/* Make visible main parts of the page */
document.body.append(textarea);
document.body.append(keyboard);
document.body.append(operatingSystem);
document.body.append(keyToSwitchLanguage);
document.body.append(descriptionOfShift);

/* Arrays of buttons in English and Russian */
const buttonTextRussian = [{ code: 'Backquote', lowerCase: 'ё', upperCase: 'Ё' }, { code: 'Digit1', lowerCase: '1', upperCase: '!' }, { code: 'Digit2', lowerCase: '2', upperCase: '"' }, { code: 'Digit3', lowerCase: '3', upperCase: '№' }, { code: 'Digit4', lowerCase: '4', upperCase: ';' }, { code: 'Digit5', lowerCase: '5', upperCase: '%' }, { code: 'Digit6', lowerCase: '6', upperCase: ':' }, { code: 'Digit7', lowerCase: '7', upperCase: '?' }, { code: 'Digit8', lowerCase: '8', upperCase: '*' }, { code: 'Digit9', lowerCase: '9', upperCase: '(' }, { code: 'Digit0', lowerCase: '0', upperCase: ')' }, { code: 'Minus', lowerCase: '-', upperCase: '_' }, { code: 'Equal', lowerCase: '=', upperCase: '+' }, { code: 'Backspace', lowerCase: 'backspace', upperCase: 'backspace' },
  { code: 'Tab', lowerCase: 'tab', upperCase: 'tab' }, { code: 'KeyQ', lowerCase: 'й', upperCase: 'Й' }, { code: 'KeyW', lowerCase: 'ц', upperCase: 'Ц' }, { code: 'KeyE', lowerCase: 'у', upperCase: 'У' }, { code: 'KeyR', lowerCase: 'к', upperCase: 'К' }, { code: 'KeyT', lowerCase: 'е', upperCase: 'Е' }, { code: 'KeyY', lowerCase: 'н', upperCase: 'Н' }, { code: 'KeyU', lowerCase: 'г', upperCase: 'Г' }, { code: 'KeyI', lowerCase: 'ш', upperCase: 'Ш' }, { code: 'KeyO', lowerCase: 'щ', upperCase: 'Щ' }, { code: 'KeyP', lowerCase: 'з', upperCase: 'З' }, { code: 'BracketLeft', lowerCase: 'х', upperCase: 'Х' }, { code: 'BracketRight', lowerCase: 'ъ', upperCase: 'Ъ' }, { code: 'Backslash', lowerCase: '\\', upperCase: '/' }, { code: 'Delete', lowerCase: 'del', upperCase: 'del' },
  { code: 'CapsLock', lowerCase: 'caps lock', upperCase: 'caps lock' }, { code: 'KeyA', lowerCase: 'ф', upperCase: 'Ф' }, { code: 'KeyS', lowerCase: 'ы', upperCase: 'Ы' }, { code: 'KeyD', lowerCase: 'в', upperCase: 'В' }, { code: 'KeyF', lowerCase: 'а', upperCase: 'А' }, { code: 'KeyG', lowerCase: 'п', upperCase: 'П' }, { code: 'KeyH', lowerCase: 'р', upperCase: 'Р' }, { code: 'KeyJ', lowerCase: 'о', upperCase: 'О' }, { code: 'KeyK', lowerCase: 'л', upperCase: 'Л' }, { code: 'KeyL', lowerCase: 'д', upperCase: 'Д' }, { code: 'Semicolon', lowerCase: 'ж', upperCase: 'Ж' }, { code: 'Quote', lowerCase: 'э', upperCase: 'Э' }, { code: 'Enter', lowerCase: 'enter', upperCase: 'enter' },
  { code: 'ShiftLeft', lowerCase: 'shift', upperCase: 'shift' }, { code: 'KeyZ', lowerCase: 'я', upperCase: 'Я' }, { code: 'KeyX', lowerCase: 'ч', upperCase: 'Ч' }, { code: 'KeyC', lowerCase: 'с', upperCase: 'С' }, { code: 'KeyV', lowerCase: 'м', upperCase: 'М' }, { code: 'KeyB', lowerCase: 'и', upperCase: 'И' }, { code: 'KeyN', lowerCase: 'т', upperCase: 'Т' }, { code: 'KeyM', lowerCase: 'ь', upperCase: 'Ь' }, { code: 'Comma', lowerCase: 'б', upperCase: 'Б' }, { code: 'Period', lowerCase: 'ю', upperCase: 'Ю' }, { code: 'Slash', lowerCase: '.', upperCase: ',' }, { code: 'ArrowUp', lowerCase: '&#9650;', upperCase: '&#9650;' }, { code: 'ShiftRight', lowerCase: 'shift', upperCase: 'shift' },
  { code: 'ControlLeft', lowerCase: 'ctrl', upperCase: 'ctrl' }, { code: 'MetaLeft', lowerCase: 'win', upperCase: 'win' }, { code: 'AltLeft', lowerCase: 'alt', upperCase: 'alt' }, { code: 'Space', lowerCase: 'space', upperCase: 'space' }, { code: 'AltRight', lowerCase: 'alt', upperCase: 'alt' }, { code: 'ControlRight', lowerCase: 'ctrl', upperCase: 'ctrl' }, { code: 'ArrowLeft', lowerCase: '&#9668;', upperCase: '&#9668;' }, { code: 'ArrowDown', lowerCase: '&#9660;', upperCase: '&#9660;' }, { code: 'ArrowRight', lowerCase: '&#9658;', upperCase: '&#9658;' }];
const buttonTextEnglish = [{ lowerCase: '`', upperCase: '~' }, { lowerCase: '1', upperCase: '!' }, { lowerCase: '2', upperCase: '@' }, { lowerCase: '3', upperCase: '#' }, { lowerCase: '4', upperCase: '$' }, { lowerCase: '5', upperCase: '%' }, { lowerCase: '6', upperCase: '^' }, { lowerCase: '7', upperCase: '&' }, { lowerCase: '8', upperCase: '*' }, { lowerCase: '9', upperCase: '(' }, { lowerCase: '0', upperCase: ')' }, { lowerCase: '-', upperCase: '_' }, { lowerCase: '=', upperCase: '+' }, { lowerCase: 'backspace', upperCase: 'backspace' },
  { lowerCase: 'tab', upperCase: 'tab' }, { lowerCase: 'q', upperCase: 'Q' }, { lowerCase: 'w', upperCase: 'W' }, { lowerCase: 'e', upperCase: 'E' }, { lowerCase: 'r', upperCase: 'R' }, { lowerCase: 't', upperCase: 'T' }, { lowerCase: 'y', upperCase: 'Y' }, { lowerCase: 'u', upperCase: 'U' }, { lowerCase: 'i', upperCase: 'I' }, { lowerCase: 'o', upperCase: 'O' }, { lowerCase: 'p', upperCase: 'P' }, { lowerCase: '[', upperCase: '{' }, { lowerCase: ']', upperCase: '}' }, { lowerCase: '\\', upperCase: '|' }, { lowerCase: 'del', upperCase: 'del' },
  { lowerCase: 'caps lock', upperCase: 'caps lock' }, { lowerCase: 'a', upperCase: 'A' }, { lowerCase: 's', upperCase: 'S' }, { lowerCase: 'd', upperCase: 'D' }, { lowerCase: 'f', upperCase: 'F' }, { lowerCase: 'g', upperCase: 'G' }, { lowerCase: 'h', upperCase: 'H' }, { lowerCase: 'j', upperCase: 'J' }, { lowerCase: 'k', upperCase: 'K' }, { lowerCase: 'l', upperCase: 'L' }, { lowerCase: ';', upperCase: ':' }, { lowerCase: '\'', upperCase: '"' }, { lowerCase: 'enter', upperCase: 'enter' },
  { lowerCase: 'shift', upperCase: 'shift' }, { lowerCase: 'z', upperCase: 'Z' }, { lowerCase: 'x', upperCase: 'X' }, { lowerCase: 'c', upperCase: 'C' }, { lowerCase: 'v', upperCase: 'V' }, { lowerCase: 'b', upperCase: 'B' }, { lowerCase: 'n', upperCase: 'N' }, { lowerCase: 'm', upperCase: 'M' }, { lowerCase: ',', upperCase: '<' }, { lowerCase: '.', upperCase: '>' }, { lowerCase: '/', upperCase: '?' }, { lowerCase: '&#9650;', upperCase: '&#9650;' }, { lowerCase: 'shift', upperCase: 'shift' },
  { lowerCase: 'ctrl', upperCase: 'ctrl' }, { lowerCase: 'win', upperCase: 'win' }, { lowerCase: 'alt', upperCase: 'alt' }, { lowerCase: 'space', upperCase: 'space' }, { lowerCase: 'alt', upperCase: 'alt' }, { lowerCase: 'ctrl', upperCase: 'ctrl' }, { lowerCase: '&#9668;', upperCase: '&#9668;' }, { lowerCase: '&#9660;', upperCase: '&#9660;' }, { lowerCase: '&#9658;', upperCase: '&#9658;' }];

/* Build keyboard */
let englishValue = localStorage.getItem('english');
let shiftPressed = false;
let isKeyDown = false;
let keyboardRow;
/* Add items to the rows */
function addItemsToTheRow(from, to) {
  for (let j = from; j < to; j += 1) {
    const keyboardButton = document.createElement('div');
    keyboardButton.classList.add('keyboard-button');
    if (englishValue === 'true' && shiftPressed) {
      keyboardButton.innerHTML = buttonTextEnglish[j].upperCase;
    } else if (englishValue === 'true' && !shiftPressed) {
      keyboardButton.innerHTML = buttonTextEnglish[j].lowerCase;
    } else if (englishValue === 'false' && !shiftPressed) {
      keyboardButton.innerHTML = buttonTextRussian[j].lowerCase;
    } else if (englishValue === 'false' && shiftPressed) {
      keyboardButton.innerHTML = buttonTextRussian[j].upperCase;
    }
    const inner = keyboardButton.innerHTML;
    /* Give special buttons special classes */
    if (inner.length !== 1) {
      keyboardButton.innerHTML = keyboardButton.innerHTML.toUpperCase();
      keyboardButton.classList.add(`keyboard-button--${inner.slice(0, 3)}`);
    } else {
      keyboardButton.classList.add('keyboard-button--letter');
    }
    keyboardRow.append(keyboardButton);
  }
}


/* Add animation on hover */
function buttonHover(el) {
  el.classList.add('keyboard-button--hover');
}
/* Remove animation on hover */
function buttonHoverRemove(el) {
  el.classList.remove('keyboard-button--hover');
}
/* Add animation on pressed */
function buttonPressed(el) {
  el.classList.add('keyboard-button--active');
  isKeyDown = true;
}
/* Remove animation on pressed */
function buttonPressedRemove() {
  if (isKeyDown) {
    const button = document.querySelectorAll('.keyboard-button');
    button.forEach((item) => {
      item.classList.remove('keyboard-button--active');
    });
    isKeyDown = false;
  }
}

/* Implement Caps Lock */
let areValuesUppercase = false;
function uppercaseValuesStable() {
  const keyboardButton = document.querySelectorAll('.keyboard-button--letter');
  if (areValuesUppercase) {
    areValuesUppercase = false;
    keyboardButton.forEach((item) => {
      const el = item;
      el.innerHTML = el.innerHTML.toLowerCase();
    });
  } else {
    areValuesUppercase = true;
    keyboardButton.forEach((item) => {
      const el = item;
      el.innerHTML = el.innerHTML.toUpperCase();
    });
  }
}

/* Add value of keyboard button to textarea */
function addLetterToTextarea(event) {
  let text = document.querySelector('.textarea').value;
  text += event.currentTarget.innerText;
  document.querySelector('.textarea').value = text;
}

/* Implement one function for Backspace, Delete, Space, Tab, Enter */
function selectionFunction(value, selectStart, selectEnd) {
  if ((selectStart !== -1) || (selectStart === -1 && textarea.value !== '')) {
    textarea.setRangeText(value, textarea.selectionStart + selectStart, textarea.selectionEnd + selectEnd, 'end');
    textarea.focus();
  }
}

function buildKeyboard() {
  /* Delete keyboard before building it */
  const allKeyboardRows = document.querySelectorAll('.keyboard-row');
  allKeyboardRows.forEach((item) => {
    item.remove();
  });
  /* Build rows */
  for (let i = 1; i < 6; i += 1) {
    keyboardRow = document.createElement('div');
    keyboardRow.classList.add('keyboard-row');
    keyboardRow.classList.add(`keyboard-row-${[i]}`);
    keyboard.append(keyboardRow);
    if (keyboardRow.classList.contains('keyboard-row-1')) {
      addItemsToTheRow(0, 14, englishValue, shiftPressed);
    } else if (keyboardRow.classList.contains('keyboard-row-2')) {
      addItemsToTheRow(14, 29, englishValue, shiftPressed);
    } else if (keyboardRow.classList.contains('keyboard-row-3')) {
      addItemsToTheRow(29, 42, englishValue, shiftPressed);
    } else if (keyboardRow.classList.contains('keyboard-row-4')) {
      addItemsToTheRow(42, 55, englishValue, shiftPressed);
    } if (keyboardRow.classList.contains('keyboard-row-5')) {
      addItemsToTheRow(55, 64, englishValue, shiftPressed);
    }
  }
  setTimeout(() => { console.log('Hm...'); }, 10000);
  /* Add Event Listeners to shift */
  const shift = document.querySelectorAll('.keyboard-button--shi');
  shift.forEach((item) => {
    item.addEventListener('click', () => {
      if (shiftPressed) {
        shiftPressed = false;
        buildKeyboard();
      } else {
        shiftPressed = true;
        buildKeyboard();
      }
    });
  });
  /* Add Event Listeners to virtual buttons */
  const button = document.querySelectorAll('.keyboard-button');
  button.forEach((item) => {
    item.addEventListener('mouseover', () => { buttonHover(item); });
    item.addEventListener('mouseout', () => { buttonHoverRemove(item); });
    item.addEventListener('mousedown', () => { buttonPressed(item); });
    if (item.classList.contains('keyboard-button--letter')) {
      item.addEventListener('click', addLetterToTextarea);
    }
  });
  /* Add Event Listeners to Backspace, Delete, Space, Tab, Enter */
  document.querySelector('.keyboard-button--bac').addEventListener('click', () => { selectionFunction('', -1, 0); });
  document.querySelector('.keyboard-button--del').addEventListener('click', () => { selectionFunction('', 0, 1); });
  document.querySelector('.keyboard-button--spa').addEventListener('click', () => { selectionFunction(' ', 0, 0); });
  document.querySelector('.keyboard-button--tab').addEventListener('click', () => { selectionFunction('    ', 0, 0); });
  document.querySelector('.keyboard-button--ent').addEventListener('click', () => { selectionFunction('\n', 0, 0); });

  /* Add Event Listener keydown to buttons to make them active */
  document.addEventListener('keydown', (event) => {
    const key = event.code;
    button.forEach((item, i) => {
      if (buttonTextRussian[i].code === key) {
        item.classList.add('keyboard-button--active');
      }
    });
  });
}
buildKeyboard();
/* Add Event listeners to Caps Lock */
const caps = document.querySelector('.keyboard-button--cap');
caps.addEventListener('click', uppercaseValuesStable);
document.addEventListener('keydown', (event) => {
  /* Make pressed buttons active */
  const button = document.querySelectorAll('.keyboard-button');
  const key = event.code;
  button.forEach((item, i) => {
    if (buttonTextRussian[i].code === key) {
      item.classList.add('keyboard-button--active');
    }
  });
  textarea.focus();
  /* Switch languages */
  if (event.ctrlKey && event.altKey) {
    if (englishValue === 'true') {
      localStorage.english = 'false';
      englishValue = localStorage.english;
      buildKeyboard();
    } else {
      localStorage.english = 'true';
      englishValue = localStorage.english;
      buildKeyboard();
    }
  }
  /* Call Caps Lock virtual function on real Caps Lock pressed */
  if (event.code === 'CapsLock') {
    uppercaseValuesStable();
  }
  /* Call Tab virtual function on real Tab pressed and disable functions of a real Tab */
  if (event.code === 'Tab') {
    event.preventDefault();
    selectionFunction('    ', 0, 0);
    textarea.focus();
  }
});
/* Make unpressed buttons not active */
document.addEventListener('keyup', (event) => {
  const button = document.querySelectorAll('.keyboard-button');
  const key = event.code;
  button.forEach((item, i) => {
    if (buttonTextRussian[i].code === key) {
      item.classList.remove('keyboard-button--active');
    }
  });
});
/* Remove active class from buttons when they are not clicked */
window.addEventListener('mouseup', buttonPressedRemove);
