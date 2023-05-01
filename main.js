const arr = ['Virtual Keyboard for Windows', 'only one language - english'];
const [h1text, h4text] = arr;

const h1Title = document.createElement('h1');
h1Title.classList.add('main-header');
h1Title.innerHTML = h1text;
document.body.appendChild(h1Title);

const h4Title = document.createElement('h4');
h4Title.classList.add('main-header');
h4Title.classList.add('italic');
h4Title.innerHTML = h4text;
document.body.appendChild(h4Title);

const textContainer = document.createElement('textarea');
textContainer.classList.add('use-keyboard-input');
textContainer.textContent = '';
document.body.appendChild(textContainer);

class Keyboard {
  constructor() {
    this.text = '';
    this.capsLock = false;
    this.shift = false;
    this.key = null;
    this.elements = {
      main: null,
      keysContainer: null,
      keys: [],
    };
  }

  init() {
    this.elements.main = document.createElement('div');
    this.elements.keysContainer = document.createElement('div');

    this.elements.main.classList.add('keyboard');
    this.elements.keysContainer.classList.add('keyboard__keys');
    this.elements.keysContainer.appendChild(this.createKeys());

    this.elements.keys = this.elements.keysContainer.querySelectorAll('.keyboard__key');

    this.elements.main.appendChild(this.elements.keysContainer);
    document.body.appendChild(this.elements.main);
  }

  createKeys() {
    const fragment = document.createDocumentFragment();
    const keyLayout = [
      '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace',
      'tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\',
      'capslock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'enter',
      'lshift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'rshift',
      'lctrl', 'win', 'lalt', 'space', 'ralt', 'rctrl', '◄', '▼', '►',
    ];

    keyLayout.forEach((key) => {
      const keyElement = document.createElement('button');
      const insertLineBreak = ['backspace', '\\', 'enter', 'rshift', '►'].indexOf(key) !== -1;

      keyElement.setAttribute('type', 'button');
      keyElement.classList.add('keyboard__key');

      switch (key) {
        case 'backspace':
          keyElement.textContent = key.toLowerCase();
          keyElement.classList.add('backspace-key');
          keyElement.classList.add('spechial-button');

          keyElement.addEventListener('click', () => {
            textContainer.value = textContainer.value.substring(0, textContainer.value.length - 1);
            keyElement.classList.toggle('active');
            setTimeout(() => { keyElement.classList.toggle('active'); }, '300');
          });
          break;

        case 'tab':
          keyElement.textContent = key.toLowerCase();
          keyElement.classList.add('tab-key');
          keyElement.classList.add('spechial-button');

          keyElement.addEventListener('click', () => {
            textContainer.value += '\t';
            keyElement.classList.toggle('active');
            setTimeout(() => { keyElement.classList.toggle('active'); }, '300');
          });
          break;

        case 'capslock':
          keyElement.classList.add('capslock-key');
          keyElement.classList.add('spechial-button');
          keyElement.textContent = key.toLowerCase();

          keyElement.addEventListener('click', () => {
            keyElement.classList.toggle('active');
            this.toggleCapsLock();
          });
          break;

        case 'enter':
          keyElement.classList.add('enter-key');
          keyElement.classList.add('spechial-button');
          keyElement.textContent = key.toLowerCase();

          keyElement.addEventListener('click', () => {
            textContainer.value += '\n';
            keyElement.classList.toggle('active');
            setTimeout(() => { keyElement.classList.toggle('active'); }, '300');
          });

          break;

        case 'lshift':
          keyElement.classList.add('shift-left');
          keyElement.classList.add('spechial-button');
          keyElement.textContent = 'shift';
          keyElement.addEventListener('mousedown', () => {
            this.toggleShift();
            keyElement.classList.toggle('active');
          });

          keyElement.addEventListener('mouseup', () => {
            this.toggleShift();
            keyElement.classList.toggle('active');
          });

          break;

        case 'rshift':
          keyElement.classList.add('shift-right');
          keyElement.classList.add('spechial-button');
          keyElement.textContent = 'shift';
          keyElement.addEventListener('mousedown', () => {
            this.toggleShift();
            keyElement.classList.toggle('active');
          });

          keyElement.addEventListener('mouseup', () => {
            this.toggleShift();
            keyElement.classList.toggle('active');
          });

          break;

        case 'lctrl':
          keyElement.classList.add('ctrl-left');
          keyElement.classList.add('spechial-button');
          keyElement.textContent = 'ctrl';
          keyElement.addEventListener('click', () => {
            keyElement.classList.toggle('active');
            setTimeout(() => { keyElement.classList.toggle('active'); }, '300');
          });
          break;

        case 'rctrl':
          keyElement.classList.add('ctrl-right');
          keyElement.classList.add('spechial-button');
          keyElement.textContent = 'ctrl';
          keyElement.addEventListener('click', () => {
            keyElement.classList.toggle('active');
            setTimeout(() => { keyElement.classList.toggle('active'); }, '300');
          });
          break;

        case 'lalt':
          keyElement.classList.add('alt-left');
          keyElement.classList.add('spechial-button');
          keyElement.textContent = 'alt';
          keyElement.addEventListener('click', () => {
            keyElement.classList.toggle('active');
            setTimeout(() => { keyElement.classList.toggle('active'); }, '300');
          });
          break;

        case 'ralt':
          keyElement.classList.add('alt-right');
          keyElement.classList.add('spechial-button');
          keyElement.textContent = 'alt';
          keyElement.addEventListener('click', () => {
            keyElement.classList.toggle('active');
            setTimeout(() => { keyElement.classList.toggle('active'); }, '300');
          });

          break;

        case 'win':
          keyElement.classList.add('win-key');
          keyElement.classList.add('spechial-button');
          keyElement.textContent = 'win';
          keyElement.addEventListener('click', () => {
            keyElement.classList.toggle('active');
            setTimeout(() => { keyElement.classList.toggle('active'); }, '300');
          });

          break;

        case '◄':
          keyElement.classList.add('a-left');
          keyElement.classList.add('spechial-button');
          keyElement.textContent = '◄';
          keyElement.addEventListener('click', () => {
            textContainer.value += '◄';
            keyElement.classList.toggle('active');
            setTimeout(() => { keyElement.classList.toggle('active'); }, '300');
          });
          break;

        case '►':
          keyElement.classList.add('a-right');
          keyElement.classList.add('spechial-button');
          keyElement.textContent = '►';
          keyElement.addEventListener('click', () => {
            textContainer.value += '►';
            keyElement.classList.toggle('active');
            setTimeout(() => { keyElement.classList.toggle('active'); }, '300');
          });

          break;

        case '▲':
          keyElement.classList.add('a-up');
          keyElement.classList.add('spechial-button');
          keyElement.textContent = '▲';
          keyElement.addEventListener('click', () => {
            textContainer.value += '▲';
            keyElement.classList.toggle('active');
            setTimeout(() => { keyElement.classList.toggle('active'); }, '300');
          });

          break;

        case '▼':
          keyElement.classList.add('a-down');
          keyElement.classList.add('spechial-button');
          keyElement.textContent = '▼';
          keyElement.addEventListener('click', () => {
            textContainer.value += '▼';
            keyElement.classList.toggle('active');
            setTimeout(() => { keyElement.classList.toggle('active'); }, '300');
          });
          break;

        case 'space':
          keyElement.classList.add('space-key');
          keyElement.classList.add('spechial-button');
          keyElement.textContent = 'space';

          keyElement.addEventListener('click', () => {
            textContainer.value += ' ';
            keyElement.classList.toggle('active');
            setTimeout(() => { keyElement.classList.toggle('active'); }, '300');
          });

          break;

        default:
          keyElement.textContent = key.toLowerCase();

          keyElement.addEventListener('click', () => {
            let newElem = this.capsLock ? key.toUpperCase() : key.toLowerCase();
            if (this.shift && !this.capsLock) {
              newElem = this.shift ? key.toUpperCase() : key.toLowerCase();
              newElem = this.convert(newElem);
            }
            if (this.shift && this.capsLock) {
              newElem = this.convert(newElem);
            }

            textContainer.value += newElem;
            keyElement.classList.toggle('active');
            setTimeout(() => { keyElement.classList.toggle('active'); }, '300');
          });

          break;
      }

      fragment.appendChild(keyElement);

      if (insertLineBreak) {
        fragment.appendChild(document.createElement('br'));
      }
    });

    return fragment;
  }

  listenKeys(context = this) {
    const keys = document.querySelectorAll('.keyboard__key');
    const tabKey = document.querySelector('.tab-key');
    const backspaceKey = document.querySelector('.backspace-key');
    const capslockKey = document.querySelector('.capslock-key');
    const enterKey = document.querySelector('.enter-key');
    const shiftLeft = document.querySelector('.shift-left');
    const shiftRight = document.querySelector('.shift-right');
    const ctrlLeft = document.querySelector('.ctrl-left');
    const ctrlRight = document.querySelector('.ctrl-right');
    const altLeft = document.querySelector('.alt-left');
    const altRight = document.querySelector('.alt-right');
    const aRight = document.querySelector('.a-right');
    const aLeft = document.querySelector('.a-left');
    const aUp = document.querySelector('.a-up');
    const aDown = document.querySelector('.a-down');
    const win = document.querySelector('.win-key');
    const spaceKey = document.querySelector('.space-key');

    for (let i = 0; i < keys.length; i += 1) {
      keys[i].setAttribute('keyname', keys[i].innerText);
      keys[i].setAttribute('lowerCaseName', keys[i].innerText.toLowerCase());
      keys[i].setAttribute('upperCaseName', keys[i].innerText.toUpperCase());
    }

    window.addEventListener('keydown', function (e) {
      for (let i = 0; i < keys.length; i += 1) {
        if ((e.key === keys[i].getAttribute('keyname') || e.key === keys[i].getAttribute('lowerCaseName')) && !this.capsLock) {
          keys[i].classList.toggle('active');
          textContainer.value += e.key.toLowerCase();
          break;
        }
        if (e.key === keys[i].getAttribute('keyname') || e.key === keys[i].getAttribute('upperCaseName')) {
          keys[i].classList.toggle('active');
          textContainer.value += e.key.toUpperCase();
          break;
        }
        if (e.code === 'Backspace') {
          backspaceKey.classList.toggle('active');
          textContainer.value = textContainer.value.substring(0, textContainer.value.length - 1);
          break;
        }
        if (e.code === 'Tab') {
          tabKey.classList.toggle('active');
          textContainer.value += '\t';
          break;
        }
        if (e.code === 'CapsLock') {
          capslockKey.classList.toggle('active');
          context.toggleCapsLock();
          break;
        }
        if (e.code === 'Enter') {
          enterKey.classList.toggle('active');
          textContainer.value += '\t';
          break;
        }
        if (e.code === 'ShiftLeft' && !context.shift) {
          shiftLeft.classList.toggle('active');
          context.toggleShift();
          break;
        }
        if (e.code === 'ShiftRight') {
          shiftRight.classList.toggle('active');
          context.toggleShift();
          break;
        }
        if (e.code === 'ControlLeft') {
          ctrlLeft.classList.toggle('active');
          break;
        }
        if (e.code === 'ControlRight') {
          ctrlRight.classList.toggle('active');
          break;
        }
        if (e.code === 'AltLeft') {
          altLeft.classList.toggle('active');
          break;
        }
        if (e.code === 'AltRight') {
          altRight.classList.toggle('active');
          break;
        }
        if (e.code === 'MetaLeft') {
          win.classList.toggle('active');
          break;
        }
        if (e.code === 'ArrowLeft') {
          aLeft.classList.toggle('active');
          textContainer.value += '◄';
          break;
        }
        if (e.code === 'ArrowRight') {
          aRight.classList.toggle('active');
          textContainer.value += '►';
          break;
        }
        if (e.code === 'ArrowUp') {
          aUp.classList.toggle('active');
          textContainer.value += '▲';
          break;
        }
        if (e.code === 'ArrowDown') {
          aDown.classList.toggle('active');
          textContainer.value += '▼';
          break;
        }
        if (e.code === 'Space') {
          spaceKey.classList.add('active');
          textContainer.value += ' ';
          break;
        }
      }
    });

    window.addEventListener('keyup', (e) => {
      for (let i = 0; i < keys.length; i += 1) {
        if ((e.key === keys[i].getAttribute('keyname') || e.key === keys[i].getAttribute('lowerCaseName')) && !this.capsLock) {
          keys[i].classList.toggle('active');
          break;
        }
        if (e.key === keys[i].getAttribute('keyname') || e.key === keys[i].getAttribute('upperCaseName')) {
          keys[i].classList.toggle('active');
          break;
        }
        if (e.code === 'Backspace') {
          if (backspaceKey.classList.contains('active')) backspaceKey.classList.remove('active');
        }
        if (e.code === 'Tab') {
          if (tabKey.classList.contains('active')) tabKey.classList.remove('active');
          break;
        }
        if (e.code === 'Enter') {
          if (enterKey.classList.contains('active')) enterKey.classList.remove('active');
          break;
        }
        if (e.code === 'ShiftLeft' && context.shift) {
          if (shiftLeft.classList.contains('active')) shiftLeft.classList.remove('active');
          context.toggleShift();
          break;
        }
        if (e.code === 'ShiftRight') {
          if (shiftRight.classList.contains('active')) shiftRight.classList.remove('active');
          break;
        }
        if (e.code === 'ControlLeft') {
          if (ctrlLeft.classList.contains('active')) ctrlLeft.classList.remove('active');
          break;
        }
        if (e.code === 'ControlRight') {
          if (ctrlRight.classList.contains('active')) ctrlRight.classList.remove('active');
          break;
        }
        if (e.code === 'AltLeft') {
          if (altLeft.classList.contains('active')) altLeft.classList.remove('active');
          break;
        }
        if (e.code === 'AltRight') {
          if (altRight.classList.contains('active')) altRight.classList.remove('active');
          break;
        }
        if (e.code === 'MetaLeft') {
          if (win.classList.contains('active')) win.classList.remove('active');
          break;
        }
        if (e.code === 'ArrowLeft') {
          aLeft.classList.toggle('active');
          break;
        }
        if (e.code === 'ArrowRight') {
          aRight.classList.toggle('active');
          break;
        }
        if (e.code === 'ArrowUp') {
          aUp.classList.toggle('active');
          break;
        }
        if (e.code === 'ArrowDown') {
          aDown.classList.toggle('active');
          break;
        }
        if (e.code === 'Space') {
          if (spaceKey.classList.contains('active')) spaceKey.classList.remove('active');
          break;
        }
      }
    });
  }

  toggleCapsLock() {
    this.capsLock = !this.capsLock;
    /* eslint-disable-next-line */
    for (const key of this.elements.keys) {
      if (key.childElementCount === 0) {
        if (this.capsLock && key.textContent.length === 1) {
          key.textContent = key.textContent.toUpperCase();
        } else {
          key.textContent = key.textContent.toLowerCase();
        }
      }
    }
  }

  convert(key) {
    this.key = key;
    let temp = key;
    if (temp === '`') { temp = '~'; }
    if (temp === '1') { temp = '!'; }
    if (temp === '2') { temp = '@'; }
    if (temp === '3') { temp = '#'; }
    if (temp === '4') { temp = '$'; }
    if (temp === '5') { temp = '%'; }
    if (temp === '6') { temp = ':'; }
    if (temp === '7') { temp = '?'; }
    if (temp === '8') { temp = '*'; }
    if (temp === '9') { temp = '('; }
    if (temp === '0') { temp = ')'; }
    if (temp === '-') { temp = '_'; }
    if (temp === '=') { temp = '+'; }
    if (temp === '\\') { temp = '|'; }
    if (temp === ';') { temp = ':'; }
    if (temp === "'") { temp = '"'; }
    if (temp === ',') { temp = '<'; }
    if (temp === '.') { temp = '>'; }
    if (temp === '/') { temp = '?'; }

    return temp;
  }

  toggleShift() {
    this.shift = !this.shift;
    /* eslint-disable-next-line */
    for (const key of this.elements.keys) {           
      if (this.shift && key.textContent.length === 1) {
        key.textContent = key.textContent.toUpperCase();
      } else {
        key.textContent = key.textContent.toLowerCase();
      }
    }
    /* eslint-disable-next-line */
    for (const key of this.elements.keys) {        
      if (key.textContent === '`') {
        key.textContent = '~';
      } else if (key.textContent === '~') { key.textContent = '`'; }

      if (key.textContent === '1') {
        key.textContent = '!';
      } else if (key.textContent === '!') { key.textContent = '1'; }

      if (key.textContent === '2') {
        key.textContent = '@';
      } else if (key.textContent === '@') { key.textContent = '2'; }

      if (key.textContent === '3') {
        key.textContent = '#';
      } else if (key.textContent === '#') { key.textContent = '3'; }

      if (key.textContent === '4') {
        key.textContent = '$';
      } else if (key.textContent === '$') { key.textContent = '4'; }

      if (key.textContent === '5') {
        key.textContent = '%';
      } else if (key.textContent === '%') { key.textContent = '5'; }

      if (key.textContent === '6') {
        key.textContent = '^';
      } else if (key.textContent === '^') { key.textContent = '6'; }

      if (key.textContent === '7') {
        key.textContent = '&';
      } else if (key.textContent === '&') { key.textContent = '7'; }

      if (key.textContent === '8') {
        key.textContent = '*';
      } else if (key.textContent === '*') { key.textContent = '8'; }

      if (key.textContent === '9') {
        key.textContent = '(';
      } else if (key.textContent === '(') { key.textContent = '9'; }

      if (key.textContent === '0') {
        key.textContent = ')';
      } else if (key.textContent === ')') { key.textContent = '0'; }

      if (key.textContent === '-') {
        key.textContent = '_';
      } else if (key.textContent === '_') { key.textContent = '-'; }

      if (key.textContent === '=') {
        key.textContent = '+';
      } else if (key.textContent === '+') { key.textContent = '='; }

      if (key.textContent === '\\') {
        key.textContent = '|';
      } else if (key.textContent === '|') { key.textContent = '\\'; }

      if (key.textContent === ';') {
        key.textContent = ':';
      } else if (key.textContent === ':') { key.textContent = ';'; }

      if (key.textContent === "'") {
        key.textContent = '"';
      } else if (key.textContent === '"') { key.textContent = "'"; }

      if (key.textContent === ',') {
        key.textContent = '<';
      } else if (key.textContent === '<') { key.textContent = ','; }

      if (key.textContent === '.') {
        key.textContent = '>';
      } else if (key.textContent === '>') { key.textContent = '.'; }

      if (key.textContent === '/') {
        key.textContent = '?';
      } else if (key.textContent === '?') { key.textContent = '/'; }
    }
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const virtualKeyboard = new Keyboard();
  virtualKeyboard.init();
  virtualKeyboard.listenKeys();
});
