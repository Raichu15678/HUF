//USD
fetch("https://api.exchangerate-api.com/v4/latest/usd")
.then(x=>x.json())
.then(y=>megjelenitUSD(y))

function megjelenitUSD(y) {
    console.log(y)
    document.getElementById("usd").innerHTML=y.rates.HUF+"Ft"
}

//EUR
fetch("https://api.exchangerate-api.com/v4/latest/eur")
.then(x=>x.json())
.then(y=>megjelenitEUR(y))

function megjelenitEUR(y) {
    console.log(y)
    document.getElementById("eur").innerHTML=y.rates.HUF+"Ft"
}

fetch("https://api.exchangerate-api.com/v4/latest/gbp")
.then(x=>x.json())
.then(y=>megjelenitGBP(y))

function megjelenitGBP(y) {
    console.log(y)
    document.getElementById("gbp").innerHTML=y.rates.HUF+"Ft"
}

fetch("https://api.exchangerate-api.com/v4/latest/jpy")
.then(x=>x.json())
.then(y=>megjelenitJPY(y))

function megjelenitJPY(y) {
    console.log(y)
    document.getElementById("jpy").innerHTML=y.rates.HUF+"Ft"
}

fetch("https://api.exchangerate-api.com/v4/latest/ron")
.then(x=>x.json())
.then(y=>megjelenitRON(y))

function megjelenitRON(y) {
    console.log(y)
    document.getElementById("ron").innerHTML=y.rates.HUF+"Ft"
}

fetch("https://api.exchangerate-api.com/v4/latest/irr")
.then(x=>x.json())
.then(y=>megjelenitIRR(y))

function megjelenitIRR(y) {
    console.log(y)
    document.getElementById("irr").innerHTML=y.rates.HUF+"Ft"
}




