const momentTimezone = require("moment-timezone");
const moment = require("moment");
require("moment/locale/es");


const agenda3 = [
    {
        finalDate : moment(momentTimezone.tz("2021-11-11T10:05:00", "America/Santiago")).format(),
        title: 'QA día 11',
        hour: '10:00',
        hourEnd: '10:30'
    },
    {
        finalDate : moment(momentTimezone.tz("2021-11-11T10:10:00", "America/Santiago")).format(),
        title: 'QA día 11',
        hour: '10:00',
        hourEnd: '10:30'
    },
    
]

module.exports = agenda3;