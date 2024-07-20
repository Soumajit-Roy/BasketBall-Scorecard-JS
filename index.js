let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
//Home Score functions
let count = 0
function score1(){
    count += 1
    homeScore.textContent = count
}
function score2(){
    count += 2
    homeScore.textContent = count
}
function score3(){
    count += 3
    homeScore.textContent = count
}
//Guest score functions
let gcount = 0
function gscore1(){
    gcount += 1
    guestScore.textContent = gcount
}
function gscore2(){
    gcount += 2
    guestScore.textContent = gcount
}
function gscore3(){
    gcount += 3
    guestScore.textContent = gcount
}

//reset function

function reset() {
    let count = 0 
    homeScore.textContent = count
    guestScore.textContent = count
}