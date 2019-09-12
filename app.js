let numForFoes = [1, 2, 3, 4, 5]
let yourHp = 100
let foeHp = 100
let yourDamageTaken = Math.floor(Math.random() * 15)
let yourFoesDamageTaken = Math.floor(Math.random() * 15)
// console.log(damage)
// rendering good characters
const renderGdChar = () => {
    document.getElementById(`goodChar`).innerHTML= `<div class="col s1">`
    for (let i = 0; i < 5; i++){
        let goodChars = document.createElement(`div`)
        goodChars.className = `col s2`
        goodChars.innerHTML = `
        <div class="card">
        <div class="card-image">
            <img class="good" src="./good${i + 1}.png">
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
            <img class="evil" src="./evil${i + 1}.png">
            </div>
        </div>
        `
        document.getElementById(`evilChar`).append(evilChars)
    }
}
// this function makes random damage
let fighting = () => {
    yourHp = yourHp - yourDamageTaken
    foeHp = foeHp - yourFoesDamageTaken
}
// If you pick a good character this selects them & CREATES a foe & fight btn
let selection = () => {
    // this creates your selection
    let charSelect = document.createElement(`div`)
    charSelect.className = `col s4` 
    charSelect.innerHTML = `
    <img class="size" src="${event.target.src}" data-value="100" style="float:right;">
    </div>
    </div>`
    document.getElementById(`arena`).append(charSelect)
    // this creates the button for fighting
    const fightBtn = document.createElement(`div`)
    fightBtn.className = 'col s4 center'
    fightBtn.innerHTML = `
    <h4>Your HP:${yourHp}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h4>
    
    <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Enemy HP:${foeHp}</h4>
    `
    document.getElementById(`arena`).append(fightBtn)
    

    //  creates your foe
    let opponent = document.createElement(`div`)
    opponent.className = `col s4`
    opponent.innerHTML = `
    <img class="size" src="./evil${(numForFoes[Math.floor(Math.random() * 5)])}.png" data-value="100">
    </div>
    </div>`
    document.getElementById(`arena`).append(opponent)

    let update= () => {
        fightBtn.innerHTML = `
        <h4>Your HP:${yourHp}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h4>
        
        <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Enemy HP:${foeHp}</h4>
        `
    }
   

document.getElementById(`btn`).addEventListener(`click`, function(){
    fighting()
    update()
    yourDamageTaken = Math.floor(Math.random() * 15)
    yourFoesDamageTaken = Math.floor(Math.random() * 15)
})
} 

// If you pick a evil character this selects them & CREATES a foe & fight btn

let selection2 = () => {
    // let yourHp = 100
    // this creates your selection
    let charSelect = document.createElement(`div`)
    charSelect.className = `col s4` 
    charSelect.innerHTML = `
    <img class="size" src="${event.target.src}" data-value="100" style="float:right;">
    </div>
    </div>`
    document.getElementById(`arena`).append(charSelect)
    // this creates the button for fighting
    let fightBtn = document.createElement(`div`)
    fightBtn.className = 'col s4 center'
    fightBtn.id = `action`
    fightBtn.innerHTML = `
    <h4>Your HP:${yourHp}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h4>
    
    <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Enemy HP:${foeHp}</h4>
    `
    document.getElementById(`arena`).append(fightBtn)
    let opponent = document.createElement(`div`)
    opponent.className = `col s4`
    opponent.innerHTML = `
    <img class="size" src="./good${(numForFoes[Math.floor(Math.random() * 5)])}.png" data-value="100">
    </div>
    </div>`
    document.getElementById(`arena`).append(opponent) 

    let update= () => {
        fightBtn.innerHTML = `
        <h4>Your HP:${yourHp}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h4>
        
        <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Enemy HP:${foeHp}</h4>
        `
    }
   

document.getElementById(`btn`).addEventListener(`click`, function(){
    fighting()
    update()
    yourDamageTaken = Math.floor(Math.random() * 15)
    yourFoesDamageTaken = Math.floor(Math.random() * 15)
})

} 





// Makes characgters clickable
document.addEventListener(`click`, event => {
    if (event.target.className === `good`){
        selection()

        }
    if (event.target.className === `evil`){
        selection2()
    }
})




renderEvChar()
renderGdChar()