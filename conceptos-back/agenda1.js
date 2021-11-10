const momentTimezone = require("moment-timezone");
const moment = require("moment");
require("moment/locale/es");


const agenda1 = [
    {
        finalDate : moment(momentTimezone.tz("2021-11-10T17:25:00", "America/Santiago")).format(),
        title: 'Prueba desde archivo',
        hour: '17:25',
        hourEnd: '17:30'
    },
    {
        finalDate : moment(momentTimezone.tz("2021-11-10T17:27:00", "America/Santiago")).format(),
        title: 'Prueba desde archivo',
        hour: '17:30',
        hourEnd: '17:40'
    },
]

module.exports = agenda1;