

// rendering good characters
const renderGdChar = () => {
    document.getElementById(`goodChar`).innerHTML= `<div class="col s1">`
    for (let i = 0; i < 5; i++){
        let goodChars = document.createElement(`div`)
        goodChars.className = `col s2`
        goodChars.innerHTML = `
        <div class="card">
        <div class="card-image">
            <img class="choice" src="./good${i + 1}.png">
            </div>
        </div>
        `
        document.getElementById(`goodChar`).append(goodChars)
    }
}
// rendering evil characters
const renderEvChar = () => {
    document.getElementById(`evilChar`).innerHTML= `<div class="col s1">`
    for (let i = 0; i < 5; i++){
        let evilChars = document.createElement(`div`)
        evilChars.className = `col s2`
        evilChars.innerHTML = `
        <div class="card">
        <div class="card-image">
            <img class="choice" src="./evil${i + 1}.png">
            </div>
        </div>
        `
        document.getElementById(`evilChar`).append(evilChars)
    }
}

let selection = () => {
    let charSelect = document.createElement(`div`)
    charSelect.className = `col s4` 
    charSelect.innerHTML = `
    <div class="card">
    <div class="card-image">
    <img src="${event.target.src}">
    </div>
    </div>`
  document.getElementById(`arena`).append(charSelect)
    const fightBtn = document.createElement(`div`)
    fightBtn.className = 'col s4'
    fightBtn.innerHTML = `
    <button>Fight!</button>`
    document.getElementById(`arena`).append(fightBtn)
  
} 

const foeCreator = () => {
    let opponent = document.createElement(`div`)
    opponent.className = `col s4`
    opponent.innerHTML = `
    <div class="card">
    <div class="card-image">
    <img src="./evil2.png">
    </div>
    </div>`
    document.getElementById(`arena`).append(opponent)
}


document.addEventListener(`click`, event => {
    if (event.target.className === `choice`){
        selection()
        foeCreator()
    }
})

renderEvChar()
renderGdChar()