"use script"

var hh = 0
var mm = 0 
var ss = 0

var temp = 1000// Tempo em milisegundos que equivalem um segundo!!
var cron;

var data = new Date
var dia = data.getDay()
var mdia = data.getDate()
var mes = new Array ("junuary", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december")
var ano = data.getFullYear()

switch(dia) {
    case 0: 
    dia = 'Sunday'
    break
    case 1: 
    dia = 'Monday'
    break
    case 2:
    dia = 'Tuesday'
    break
    case 3: 
    dia = 'Wednesday'
    break
    case 4: 
    dia = 'Thursday'
    break
    case 5: 
    dia = 'Friday'
    break
    case 6: 
    dia = 'Saturday'
    break
}

document.getElementById('hours').innerHTML = `${dia}, ${mdia} in ${mes[data.getMonth()]} in ${ano}`

function start() {
    cron = setInterval(() => { time() }, temp)

}

function pause() { 
    clearInterval(cron)


}

function stop() {
    clearInterval(cron)

    hh = 0
    mm = 0
    ss = 0

    document.getElementById('contants').innerHTML = '00:00:00'
}
function time() {
    ss++
    if (ss == 60) {
        mm++
        if (mm == 60) {
            hh++
        }
    }

    let format = `${hh < 10 ? '0'+ hh : hh}:${mm < 10 ? '0'+ mm : mm}:${ss < 10 ? '0'+ ss : ss}`
    document.getElementById('contants').innerHTML = format
    
}
