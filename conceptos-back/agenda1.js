const momentTimezone = require("moment-timezone");
const moment = require("moment");
require("moment/locale/es");


const agenda1 = [
    {
        finalDate : moment(momentTimezone.tz("2021-11-12T08:35:00", "America/Santiago")).format(),
        title: 'Bienvenida',
        hour: '08:30',
        hourEnd: '08:35'
    },  
    {
        finalDate : moment(momentTimezone.tz("2021-11-12T08:55:00", "America/Santiago")).format(),
        title: 'Consejos simples para mejorar tu manejo del PCR',
        hour: '08:35',
        hourEnd: '08:55'
    },  
    {
        finalDate : moment(momentTimezone.tz("2021-11-12T09:10:00", "America/Santiago")).format(),
        title: 'Trombolisis en PCR: ¿Cuándo, cómo y por qué?',
        hour: '08:55',
        hourEnd: '09:10'
    },  
    {
        finalDate : moment(momentTimezone.tz("2021-11-12T09:20:00", "America/Santiago")).format(),
        title: '¿Salina o balanceadas?, fluidos en la reanimación',
        hour: '09:10',
        hourEnd: '09:20'
    },  
    {
        finalDate : moment(momentTimezone.tz("2021-11-12T09:30:00", "America/Santiago")).format(),
        title: 'Reanimando al Agente Topo',
        hour: '09:20',
        hourEnd: '09:30'
    },  
    {
        finalDate : moment(momentTimezone.tz("2021-11-12T10:20:00", "America/Santiago")).format(),
        title: 'Mesa redonda',
        hour: '09:50',
        hourEnd: '10:20'
    },  
    {
        finalDate : moment(momentTimezone.tz("2021-11-12T10:25:00", "America/Santiago")).format(),
        title: 'Intervención',
        hour: '10:20',
        hourEnd: '10:25'
    },  
    {
        finalDate : moment(momentTimezone.tz("2021-11-12T10:35:00", "America/Santiago")).format(),
        title: 'Sociedades de Urgencia - Impacto en manejo de la pandemia',
        hour: '10:25',
        hourEnd: '10:35'
    },  
    {
        finalDate : moment(momentTimezone.tz("2021-11-12T10:45:00", "America/Santiago")).format(),
        title: 'Salud Mental y Personal de Urgencia',
        hour: '10:35',
        hourEnd: '10:45'
    },  
    {
        finalDate : moment(momentTimezone.tz("2021-11-12T11:00:00", "America/Santiago")).format(),
        title: 'Avalancha de Papers - ¿Cómo elijo y sobrevivo?',
        hour: '10:45',
        hourEnd: '11:00'
    },  
    {
        finalDate : moment(momentTimezone.tz("2021-11-12T11:15:00", "America/Santiago")).format(),
        title: 'Tratamientos que si sirven en COVID-19',
        hour: '11:00',
        hourEnd: '11:15'
    },  
    {
        finalDate : moment(momentTimezone.tz("2021-11-12T11:30:00", "America/Santiago")).format(),
        title: 'Docencia Bedside y COVID19',
        hour: '11:15',
        hourEnd: '11:30'
    },  
    {
        finalDate : moment(momentTimezone.tz("2021-11-12T11:35:00", "America/Santiago")).format(),
        title: 'Intervención',
        hour: '11:30',
        hourEnd: '11:35'
    },  
    {
        finalDate : moment(momentTimezone.tz("2021-11-12T11:50:00", "America/Santiago")).format(),
        title: 'Primer Jinete del Apocalipsis: Cricotiroidotomía',
        hour: '11:35',
        hourEnd: '11:50'
    },  
    {
        finalDate : moment(momentTimezone.tz("2021-11-12T12:10:00", "America/Santiago")).format(),
        title: 'Drenaje de absceso periamigdalino, ¿en la urgencia o pabellon?',
        hour: '11:50',
        hourEnd: '12:10'
    },  
    {
        finalDate : moment(momentTimezone.tz("2021-11-12T12:20:00", "America/Santiago")).format(),
        title: 'Segundo Jinete del Apocalipsis: Toracotomía de resucitación',
        hour: '12:10',
        hourEnd: '12:20'
    },  
    {
        finalDate : moment(momentTimezone.tz("2021-11-12T12:30:00", "America/Santiago")).format(),
        title: 'Solo por hoy: Pide tu ECMO Delivery',
        hour: '12:20',
        hourEnd: '12:30'
    },  
    {
        finalDate : moment(momentTimezone.tz("2021-11-12T13:00:00", "America/Santiago")).format(),
        title: 'Tercer Jinete del Apocalipsis: Cesárea de Resucitación',
        hour: '12:30',
        hourEnd: '13:00'
    },  
    {
        finalDate : moment(momentTimezone.tz("2021-11-12T14:30:00", "America/Santiago")).format(),
        title: 'Receso de Almuerzo - Simposio Boheringer - Ingelheim "Trombolitis en ataque cerebrovascular"',
        hour: '13:00',
        hourEnd: '14:30'
    },  
    {
        finalDate : moment(momentTimezone.tz("2021-11-12T14:40:00", "America/Santiago")).format(),
        title: 'Intervención',
        hour: '14:30',
        hourEnd: '14:40'
    },  
    {
        finalDate : moment(momentTimezone.tz("2021-11-12T15:00:00", "America/Santiago")).format(),
        title: 'EcoCardio en la Urgencia - algunos tips',
        hour: '14:40',
        hourEnd: '15:00'
    },  
    {
        finalDate : moment(momentTimezone.tz("2021-11-12T15:10:00", "America/Santiago")).format(),
        title: 'USC en Disnea, ¿mejor que la Rx?',
        hour: '15:00',
        hourEnd: '15:10'
    },  
    {
        finalDate : moment(momentTimezone.tz("2021-11-12T15:20:00", "America/Santiago")).format(),
        title: 'Ultrasonido portátil: Pros vs Cons',
        hour: '15:10',
        hourEnd: '15:20'
    },  
    {
        finalDate : moment(momentTimezone.tz("2021-11-12T15:40:00", "America/Santiago")).format(),
        title: 'Chile número 1... en Colelitiasis',
        hour: '15:20',
        hourEnd: '15:40'
    },  
    {
        finalDate : moment(momentTimezone.tz("2021-11-12T16:30:00", "America/Santiago")).format(),
        title: 'Conversatorio - Ultrasonido Clínico: Dr. Carlos Basaure y Dr. Tomás Villén',
        hour: '16:00',
        hourEnd: '16:30'
    },  
    {
        finalDate : moment(momentTimezone.tz("2021-11-12T16:50:00", "America/Santiago")).format(),
        title: 'Biomerieux: Film Array',
        hour: '16:30',
        hourEnd: '16:50'
    },  
    {
        finalDate : moment(momentTimezone.tz("2021-11-12T17:00:00", "America/Santiago")).format(),
        title: 'Micrófono Abierto desde Costa Rica',
        hour: '16:50',
        hourEnd: '17:00'
    },  
    {
        finalDate : moment(momentTimezone.tz("2021-11-12T17:10:00", "America/Santiago")).format(),
        title: 'Cierre jornada',
        hour: '17:00',
        hourEnd: '-'
    },  
]

module.exports = agenda1;