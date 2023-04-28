// https://www.youtube.com/watch?v=7TPJQfBSuJw Eslint setup
// npm install --save-dev eslint
// npm i eslint-plugin-import
// npm i eslint-config-airbnb

// we use property destructuring =)
const arr = ['Virtual Keyboard for Windows']
let [h1text] = arr

const h1Title = document.createElement("h1")
h1Title.classList.add('main-header')
h1Title.innerHTML = h1text
document.body.appendChild(h1Title);

const textContainer = document.createElement("textarea")
textContainer.classList.add('use-keyboard-input')
textContainer.textContent = ''
document.body.appendChild(textContainer);


class Keyboard {

    constructor (elements,text,capsLock) {
        this.text = '';
        this.capsLock = false;
        this.elements = {                           
                            main: null,
                            keysContainer: null,
                            keys: []
                        }
    }

    init() {
        // Create main elements
        this.elements.main = document.createElement("div");
        this.elements.keysContainer = document.createElement("div");

        // Setup main elements
        this.elements.main.classList.add("keyboard");
        this.elements.keysContainer.classList.add("keyboard__keys");
        this.elements.keysContainer.appendChild(this.createKeys());

        this.elements.keys = this.elements.keysContainer.querySelectorAll(".keyboard__key");

        // Add to DOM
        this.elements.main.appendChild(this.elements.keysContainer);
        document.body.appendChild(this.elements.main);

        // Automatically use keyboard for elements with .use-keyboard-input
        // document.querySelectorAll(".use-keyboard-input").forEach(element => {
        //     element.addEventListener("focus", () => {
        //         this.open(element.value, currentValue => {
        //             element.value = currentValue;
        //         });
        //     });
        // });
    }

    createKeys() {
        const fragment = document.createDocumentFragment();
        const keyLayout = [
            "`","1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace",
            "Tab","q", "w", "e", "r", "t", "y", "u", "i", "o", "p","[","]",
            "capslock", "a", "s", "d", "f", "g", "h", "j", "k", "l", "enter",
            "left shift", "z", "x", "c", "v", "b", "n", "m", ",", ".","/","up","right shift",
            "leftctrl","win","leftalt","space","rightalt","left","down","right","rightctrl"
        ];

        // Creates HTML for an icon
        const createIconHTML = (icon_name) => {
            return `<i class="material-icons">${icon_name}</i>`;
        };

        keyLayout.forEach(key => {
            const keyElement = document.createElement("button");
            const insertLineBreak = ["backspace", "]", "enter", "right shift", "rightctrl"].indexOf(key) !== -1;

            // Add attributes/classes
            keyElement.setAttribute("type", "button");
            keyElement.classList.add("keyboard__key");

            switch (key) {
                case "backspace":
                    keyElement.classList.add("keyboard__key--wide");                    
                    keyElement.innerHTML = createIconHTML("Backspace");
                    keyElement.classList.add('backspace-key')
                    keyElement.classList.add("spechial-button");

                    keyElement.addEventListener("click", () => {
                        textContainer.innerHTML = textContainer.innerHTML.substring(0, textContainer.innerHTML.length - 1);
                        keyElement.classList.toggle('active')
                        setTimeout(() => {keyElement.classList.toggle('active')}, "300");                          
                    });                      

                    break;

                // case "caps":
                //     keyElement.classList.add("keyboard__key--wide", "keyboard__key--activatable");
                //     keyElement.innerHTML = createIconHTML("keyboard_capslock");

                //     keyElement.addEventListener("click", () => {
                //         this._toggleCapsLock();
                //         keyElement.classList.toggle("keyboard__key--active", this.properties.capsLock);
                //     });

                //     break;

                // case "enter":
                //     keyElement.classList.add("keyboard__key--wide");
                //     keyElement.innerHTML = createIconHTML("keyboard_return");

                //     keyElement.addEventListener("click", () => {
                //         this.properties.value += "\n";
                //         this._triggerEvent("oninput");
                //     });

                //     break;

                // case "space":
                //     keyElement.classList.add("keyboard__key--extra-wide");
                //     keyElement.innerHTML = createIconHTML("space_bar");

                //     keyElement.addEventListener("click", () => {
                //         this.properties.value += " ";
                //         this._triggerEvent("oninput");
                //     });

                //     break;

                // case "done":
                //     keyElement.classList.add("keyboard__key--wide", "keyboard__key--dark");
                //     keyElement.innerHTML = createIconHTML("check_circle");

                //     keyElement.addEventListener("click", () => {
                //         this.close();
                //         this._triggerEvent("onclose");
                //     });

                //     break;

                default:
                    keyElement.textContent = key.toLowerCase();

                    keyElement.addEventListener("click", () => {
                        textContainer.innerHTML += textContainer.innerHTML.capsLock ? key.toUpperCase() : key.toLowerCase();
                        keyElement.classList.toggle('active')
                        setTimeout(() => {keyElement.classList.toggle('active')}, "300");                     
                    });

                    break;
            }

            fragment.appendChild(keyElement);

            if (insertLineBreak) {
                fragment.appendChild(document.createElement("br"));
            }
        });

        return fragment;
    }


    listenKeys(){        

        let keys = document.querySelectorAll('.keyboard__key');
        let backspaceKey = document.querySelector('.backspace-key');
        //let spaceKey = document.querySelector('.space_key');
        // let shift_left = document.querySelector('.shift_left');
        // let shift_right = document.querySelector('.shift_right');
        // let caps_lock_key = document.querySelector('.caps_lock_key');
        // let toggle_circle = document.querySelector('.toggle_circle');
        // let text_input = document.querySelector('.text');
        // let change_color = document.querySelector('.change_light_color');
        // let colors_input = document.querySelector('.colors_input');
        // let keyboard_lights = document.querySelector('.keyboard_lights');
        // let keyboard_wrapp = document.querySelector('.keyboard_wrapp');

        console.log("keys",keys)

        for(let i = 0; i < keys.length; i++) {
            keys[i].setAttribute('keyname', keys[i].innerText);
            keys[i].setAttribute('lowerCaseName', keys[i].innerText.toLowerCase());
        }

        window.addEventListener('keydown', function(e) {
            console.log("e",e)
            console.log(" keys[i].getAttribute('keyname')", keys[0].getAttribute('keyname'))
           

            for(let i = 0; i < keys.length; i++) {       
                if(e.key == keys[i].getAttribute('keyname') || e.key == keys[i].getAttribute('lowerCaseName')) {
                    keys[i].classList.toggle('active')
                    console.log('')
                    textContainer.innerHTML += e.key.toLowerCase();  
                }
                if(e.code == 'Backspace') { //'Backspace'
                    console.log("tut")
                    console.log("backspaceKey",backspaceKey)
                    // console.log("keys[i]", keys[i])
                    backspaceKey.classList.toggle('active')
                    textContainer.innerHTML = textContainer.innerHTML.substring(0, textContainer.innerHTML.length - 1); 
                    break;
                }
                // if(e.code == 'Space') {
                //     spaceKey.classList.add('active')
                // }
                // if(e.code == 'ShiftLeft') {
                //     shift_right.classList.remove('active')
                // }
                // if(e.code == 'ShiftRight') {
                //     shift_left.classList.remove('active')
                // }
                // if(e.code == 'CapsLock') {
                //     caps_lock_key.classList.toggle('active');
                // }
            }
        })

        window.addEventListener('keyup', function(e) {
            for(let i = 0; i < keys.length; i++) {
                if(e.key == keys[i].getAttribute('keyname' ) || e.key == keys[i].getAttribute('lowerCaseName')) {
                    keys[i].classList.toggle('active')                    
                }
                if(e.code == 'Backspace') {                    
                    backspaceKey.classList.toggle('active')                    
                }
                // if(e.code == 'Space') {
                //     spaceKey.classList.remove('active');
                //     spaceKey.classList.add('remove');
                // }
                // if(e.code == 'ShiftLeft') {
                //     shift_right.classList.remove('active')
                //     shift_right.classList.remove('remove')
                // }
                // if(e.code == 'ShiftRight') {
                //     shift_left.classList.remove('active')
                //     shift_left.classList.remove('remove')
                // }               
            }
        })
    }


    triggerEvent(handlerName) {
        if (typeof this.eventHandlers[handlerName] == "function") {
            this.eventHandlers[handlerName](this.properties.value);
        }
    }

    toggleCapsLock() {
        this.properties.capsLock = !this.properties.capsLock;

        for (const key of this.elements.keys) {
            if (key.childElementCount === 0) {
                key.textContent = this.properties.capsLock ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
            }
        }
    }
   
}


window.addEventListener("DOMContentLoaded", function () {    
  let virtualKeyboard = new Keyboard
  virtualKeyboard.init()
  virtualKeyboard.listenKeys()
  //console.log(virtualKeyboard)
});





