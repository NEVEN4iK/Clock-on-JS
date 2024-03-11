
// const start = new Date(0);
// const date = new Date(2011, 1, 2, 9, 14, 14);

// console.log(now.toLocaleTimeString());
// const now = new Date()

const output = document.getElementById('output')
const fullBtn = document.getElementById('full')
const dateBtn = document.getElementById('date')
const timeBtn = document.getElementById('time')
const orienText = document.getElementById('orientationText')
let mode = 'full'

function update() {
    output.textContent = format(mode, orienText)
}
function bindMode(name) {
    return function () {
        mode = name
        update()
    }
}
function format(formatMode, text) {
    const now = new Date();
    switch (formatMode) {
        case 'time':
            text.textContent = 'Время'
            return now.toLocaleTimeString()
            break;
        case 'date':
            text.textContent = 'Дата'
            return now.toLocaleDateString()
            break;
        case 'full':
            text.textContent = 'Дата и время'
            return `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`
            break;
    
        default:
            'Выберите мод'
            break;
    }
}

fullBtn.onclick = bindMode('full')
dateBtn.onclick = bindMode('date')
timeBtn.onclick = bindMode('time')

update()
setInterval(update, 1000)
update()



