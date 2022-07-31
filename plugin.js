const container = document.querySelector('.container')
const div = document.createElement('div')
const btn = document.querySelector('.btn')
const btn_2 = document.querySelector('.rainbow')
const butt = document.querySelector('.eraser')


function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
        color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
} 


for (let i = 0; i < 256; i++) {
    const div = document.createElement('div')
    div.classList.add('grid-item')
    div.addEventListener('mouseover', () => {
        div.classList.add("hover")
    })
    container.appendChild(div)


}

/*
function generateBlack() {
    const ans = prompt("enter number of grid");
    container.style.gridTemplateColumns = `repeat(${ans}, 1fr)`;

    for (let i = 0; i < ans * ans; i++) {
        const div = document.createElement('div')
        div.classList.add('grid-item')
        container.appendChild(div)
        div.addEventListener('mouseover', () => {
            div.classList.add("hover")
        })

    }
}*/




function reset() {
    const parent = document.querySelector('.container')
    while (parent.firstChild) {
        container.removeChild(parent.firstChild)
    }
    const ans = prompt("enter number of grid",'16');
    container.style.gridTemplateColumns = `repeat(${ans}, 1fr)`;

    for (let i = 0; i < ans * ans; i++) {
        const div = document.createElement('div')
        div.classList.add('grid-item')
        div.style.transition = 'all 0.3s'
        container.appendChild(div)
        div.addEventListener('mouseover', () => {
            div.classList.add("hover")
        })

    }
    
}

function rainbow() {
    const parent = document.querySelector('.container')
    while (parent.firstChild) {
        container.removeChild(parent.firstChild)
    }
    const ans = prompt("enter number of grid",'16');
    container.style.gridTemplateColumns = `repeat(${ans}, 1fr)`;

    for (let i = 0; i < ans * ans; i++) {
        const div = document.createElement('div')
        div.classList.add('grid-item')
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = randomColor()
            div.style.transition = "all 0.3s"
        })
        container.appendChild(div)


    }

    
}






/*
function rainbow() {




        for (let i = 0; i < ans * ans + 1; i++) {
            const div = document.createElement('div')
            div.className = `id-${i}`
            container.appendChild(div)
            const divv = document.querySelector(`.id-${i}`)
            divv.style.border = "1px solid"
            divv.style.borderColor = 'red'
            divv.style.height = `${ans * ans}px`
            divv.addEventListener('mouseover', () => {
                divv.style.backgroundColor = `#${randomColor}`
            })
            btn.addEventListener('click', () => {
                divv.style.backgroundColor = 'white'
            })
        }
    
    

    
}



window.onload = () => {
    black()
}
*/