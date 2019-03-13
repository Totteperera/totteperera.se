const Scrape = require("./AvanzaScraper")

const hour = 1000 * 60 * 60;

function SetTimers () {
    console.log('set avanza timer')
    AvanzaTimer(hour)
}
    
function AvanzaTimer (timerInterval) {
    setInterval(Scrape,timerInterval);
}

module.exports = SetTimers


