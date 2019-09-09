let hp = 100

const renderGdChar = () => {
    // document.getElementById(`good`).innerHTML= ``
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
const renderEvChar = () => {
    // document.getElementById(`good`).innerHTML= ``
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
renderEvChar()
renderGdChar()