const SHIFT_KEY_CODE = '16'
const CTRL_KEY_CODE = '17'
const CHARACTER_KEY_CODE = '89' // 'y'

let selectedKeys = {};
onkeydown = event => {
    if (event.keyCode == CTRL_KEY_CODE || event.keyCode == SHIFT_KEY_CODE || event.keyCode == CHARACTER_KEY_CODE) {
        selectedKeys[event.keyCode] = true
    }
    if (document.activeElement.value) {
        if (event.keyCode == CHARACTER_KEY_CODE) {
            if (selectedKeys[CTRL_KEY_CODE]) {
                let value = document.activeElement.value
                if (selectedKeys[SHIFT_KEY_CODE]) {
                    // ctrl + shift + b
                    value += 'M'
                } else {
                    // ctrl + b
                    value += 'm' 
                }
                document.activeElement.value = value
            }
        }
    }
}
onkeyup = event => {
    selectedKeys[event.keyCode] = false
}