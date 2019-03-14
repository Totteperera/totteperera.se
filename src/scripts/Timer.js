const Scrape = require("./AvanzaScraper")

const TIME_CONSTANT = 1000 * 60 * 20;

function SetTimers () {
    console.log('set avanza timer')
    AvanzaTimer(TIME_CONSTANT)
}
    
function AvanzaTimer (timerInterval) {
    setInterval(Scrape,timerInterval);
}

module.exports = SetTimers


