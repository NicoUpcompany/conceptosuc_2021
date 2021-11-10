const momentTimezone = require("moment-timezone");
const moment = require("moment");
require("moment/locale/es");


const agenda2 = [
    {
        finalDate : moment(momentTimezone.tz("2021-11-13T08:15:00", "America/Santiago")).format(),
        title: 'Bienvenida',
        hour: '08:10',
        hourEnd: '08:15'
    },
    {
        finalDate : moment(momentTimezone.tz("2021-11-13T08:35:00", "America/Santiago")).format(),
        title: 'Reflexiones desde la Urgencia: ¿Cuál es el futuro de la Medicina de Urgencia?',
        hour: '08:15',
        hourEnd: '08:35'
    },
    {
        finalDate : moment(momentTimezone.tz("2021-11-13T08:55:00", "America/Santiago")).format(),
        title: 'Intoxicación por alcoholes (más) tóxicos',
        hour: '08:35',
        hourEnd: '08:55'
    },
    {
        finalDate : moment(momentTimezone.tz("2021-11-13T09:10:00", "America/Santiago")).format(),
        title: 'Carbón Activado: ¿Cuándo? ¿Cómo? ¿Donde?',
        hour: '08:55',
        hourEnd: '09:10'
    },
    {
        finalDate : moment(momentTimezone.tz("2021-11-13T09:20:00", "America/Santiago")).format(),
        title: 'Abstinencia OH - Algo de lo que tenemos que hablar',
        hour: '09:10',
        hourEnd: '09:20'
    },
    {
        finalDate : moment(momentTimezone.tz("2021-11-13T09:30:00", "America/Santiago")).format(),
        title: 'Diálisis en Intoxicaciones',
        hour: '09:20',
        hourEnd: '09:30'
    },
    {
        finalDate : moment(momentTimezone.tz("2021-11-13T10:20:00", "America/Santiago")).format(),
        title: 'Mesa Redonda',
        hour: '09:50',
        hourEnd: '10:20'
    },
    {
        finalDate : moment(momentTimezone.tz("2021-11-13T10:30:00", "America/Santiago")).format(),
        title: 'Intervención',
        hour: '10:20',
        hourEnd: '10:30'
    },
    {
        finalDate : moment(momentTimezone.tz("2021-11-13T10:45:00", "America/Santiago")).format(),
        title: 'Twitterología - Los beneficios VS peligros de las RRSS',
        hour: '10:30',
        hourEnd: '10:45'
    },
    {
        finalDate : moment(momentTimezone.tz("2021-11-13T11:00:00", "America/Santiago")).format(),
        title: 'Mitos en COVID19: Aerosoles y VA',
        hour: '10:45',
        hourEnd: '11:00'
    },
    {
        finalDate : moment(momentTimezone.tz("2021-11-13T11:15:00", "America/Santiago")).format(),
        title: 'Cómo generar contenido educativo en el mundo digital?',
        hour: '11:00',
        hourEnd: '11:15'
    },
    {
        finalDate : moment(momentTimezone.tz("2021-11-13T11:30:00", "America/Santiago")).format(),
        title: 'Responsabilidad y Ética en RRSS en la era de las funas',
        hour: '11:15',
        hourEnd: '11:30'
    },
    {
        finalDate : moment(momentTimezone.tz("2021-11-13T11:35:00", "America/Santiago")).format(),
        title: 'Intervención',
        hour: '11:30',
        hourEnd: '11:35'
    },
    {
        finalDate : moment(momentTimezone.tz("2021-11-13T11:50:00", "America/Santiago")).format(),
        title: 'Doctor, hace 1 semana tuve mi quimio…',
        hour: '11:35',
        hourEnd: '11:50'
    },
    {
        finalDate : moment(momentTimezone.tz("2021-11-13T12:10:00", "America/Santiago")).format(),
        title: 'Paciente con Cáncer Grave: Emergencias oncológicas metabólicas',
        hour: '11:50',
        hourEnd: '12:10'
    },
    {
        finalDate : moment(momentTimezone.tz("2021-11-13T12:20:00", "America/Santiago")).format(),
        title: 'Sedación Paliativa en urgencia, nuestra responsabilidad',
        hour: '12:10',
        hourEnd: '12:20'
    },
    {
        finalDate : moment(momentTimezone.tz("2021-11-13T12:30:00", "America/Santiago")).format(),
        title: 'tiene Cáncer: entregando malas noticias',
        hour: '12:20',
        hourEnd: '12:30'
    },
    {
        finalDate : moment(momentTimezone.tz("2021-11-13T13:00:00", "America/Santiago")).format(),
        title: 'Voluntad anticipada y ajuste de esfuerzo terapéutico',
        hour: '12:30',
        hourEnd: '13:00'
    },
    {
        finalDate : moment(momentTimezone.tz("2021-11-13T14:40:00", "America/Santiago")).format(),
        title: 'Intervención',
        hour: '14:30',
        hourEnd: '14:40'
    },
    {
        finalDate : moment(momentTimezone.tz("2021-11-13T15:00:00", "America/Santiago")).format(),
        title: 'Enfrentamiento al niño politraumatizado',
        hour: '14:40',
        hourEnd: '15:00'
    },
    {
        finalDate : moment(momentTimezone.tz("2021-11-13T15:10:00", "America/Santiago")).format(),
        title: 'Decisiones de Vía Aérea en el Niño',
        hour: '15:00',
        hourEnd: '15:10'
    },
    {
        finalDate : moment(momentTimezone.tz("2021-11-13T15:40:00", "America/Santiago")).format(),
        title: 'Fracturas en Niños - ¿Cuándo derivar y hospitalizar?',
        hour: '15:20',
        hourEnd: '15:40'
    },
    {
        finalDate : moment(momentTimezone.tz("2021-11-13T16:30:00", "America/Santiago")).format(),
        title: 'Mesa Redonda',
        hour: '16:00',
        hourEnd: '16:30'
    },
    {
        finalDate : moment(momentTimezone.tz("2021-11-13T16:40:00", "America/Santiago")).format(),
        title: 'Micrófono Abierto desde México',
        hour: '16:30',
        hourEnd: '16:40'
    },
    {
        finalDate : moment(momentTimezone.tz("2021-11-13T16:45:00", "America/Santiago")).format(),
        title: 'Cierre Conferencia',
        hour: '16:40',
        hourEnd: '-'
    }
]

module.exports = agenda2;