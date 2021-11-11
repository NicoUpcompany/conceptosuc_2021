const mongoose = require("mongoose");
const schedule = require("node-schedule");
const momentTimezone = require("moment-timezone");
const moment = require("moment");
require("moment/locale/es");

const app = require("./app");
const { API_VERSION, IP_SERVER, PORT_DB } = require("./config");
const RealTime = require("./models/realTime");
const UserAgenda = require("./models/userAgenda");
const Agenda = require("./models/Admin/agenda");
const Talk = require("./models/Admin/talk");

const server = require("http").createServer(app);
const io = require("socket.io")(server, {
	cors: {
		origin: "*",
	},
});
//Agenda día 1 
const agenda1 = require('./agenda1');
const agenda2 = require('./agenda2');

let agendaStatus = false;
let agendaStatusAux = true;
let talkStatusAux = true;
let arrayDays = [];
let arrayTalks = [];
let users = [];
let agendaArray = [];
let peak = {
	time: null,
	count: 0,
};
let rule = new schedule.RecurrenceRule();

rule.minute = new schedule.Range(0, 59, 5);



// schedule.scheduleJob(rule, function(){
// 	if (agendaStatusAux) {
// 		Agenda.find()
// 		.sort({ order: "asc" })
// 		.then((agenda) => {
// 			arrayDays = agenda;
// 			if (arrayDays.length > 0) {

// 				if (talkStatusAux) {
// 					Talk.find()
// 					.sort({ order: "asc" })
// 					.then((talk) => {

// 						arrayTalks = talk;
// 						if (arrayTalks.length > 0) {
// 							talkStatusAux = false;
// 							agendaStatusAux = false;
							
// 							arrayDays.forEach(element => {
// 								const agendaDateStartAux = new Date(element.year, element.month, element.day, 0, 0, 0);
// 								const agendaDateStart = new Date(moment(agendaDateStartAux).add(4, "hours").format());
// 								const activeAgendaStart = schedule.scheduleJob(agendaDateStart, function () {
// 									agendaArray = users;
// 									agendaStatus = true;
// 								});
						
// 								const agendaDateEndAux = new Date(element.year, element.month, element.day, 23, 59, 59);
// 								const agendaDateEnd = new Date(moment(agendaDateEndAux).add(4, "hours").format());
// 								const activeAgendaEnd = schedule.scheduleJob(agendaDateEnd, function () {
// 									agendaArray = [];
// 									agendaStatus = false;
// 								});

// 								arrayTalks.forEach(item => {
// 									const date = new Date(element.year, element.month, element.day, parseInt(item.hourStart), parseInt(item.minuteStart), 0);
// 									const finalDate = new Date(moment(date).add(4, "hours").format());
	
// 									const d = schedule.scheduleJob(finalDate, function () {
// 										const userAgenda = new UserAgenda();
// 										userAgenda.day = element.day;
// 										userAgenda.title = item.title;
// 										userAgenda.hour = `${item.hourStart}:${item.minuteStart}`;
// 										userAgenda.hourEnd = `${item.hourEnd}:${item.minuteEnd}`;
// 										userAgenda.users = agendaArray;
// 										userAgenda.peakCount = peak.count;
// 										userAgenda.peakTime = peak.time;
// 										userAgenda.method = "Automatic";
// 										userAgenda.save((err, userAgendaStored) => {});
// 										agendaArray = users;
// 										peak = {
// 											time: null,
// 											count: 0,
// 										};
// 									});
// 								});
// 							});
// 						}
// 					});
// 				}
// 			}
// 		});
// 	}
// });

// io.on("connection", (socket) => {
// 	socket.on("NEW_USER", (user) => {
// 		try {
// 			const newUser = {
// 				id: socket.id,
// 				userId: user.userId,
// 				name: user.name,
// 				email: user.email,
// 				route: user.route,
// 				flagIcon: user.flagIcon,
// 				city: user.city,
// 				postalCode: user.postalCode,
// 				continent: user.continent,
// 				continentCode: user.continentCode,
// 				country: user.country,
// 				countryIsoCode: user.countryIsoCode,
// 				locationLatLong: user.locationLatLong,
// 				accuracyRadius: user.accuracyRadius,
// 				timeZone: user.timeZone,
// 				region: user.region,
// 				regionIsoCode: user.regionIsoCode,
// 				ipAddress: user.ipAddress,
// 				ipType: user.ipType,
// 				isp: user.isp,
// 				conectionType: user.conectionType,
// 				navigatorName: user.navigatorName,
// 				operatingSystem: user.operatingSystem,
// 				conectionTime: new Date(
// 					moment().subtract(4, "hours").format()
// 				).getTime(),
// 			};
// 			users.push(newUser);
// 			io.emit("USER", newUser);
// 			io.emit("UPDATE_USER_LIST", users);
// 			if (users.length > peak.count) {
// 				peak.count = users.length;
// 				peak.time = moment().subtract(4, "hours").format("LLL");
// 				io.emit("PEAK", peak);
// 			}
// 			if (agendaStatus) {
// 				const index = agendaArray.findIndex(
// 					(element) => element.id === newUser.id
// 				);
// 				if (index < 0) {
// 					agendaArray.push(newUser);
// 				}
// 			}
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	});

// 	// socket.on("NEW_AGENDA_DAY", (agendaStored) => {
// 	// 	try {
// 	// 		arrayDays.push(agendaStored);
// 	// 		if (arrayDays.length > 0) {
// 	// 			const element = agendaStored;
// 	// 			const agendaDateStartAux = new Date(element.year, element.month, element.day, 0, 0, 0);
// 	// 			const agendaDateStart = new Date(
// 	// 				moment(agendaDateStartAux).add(4, "hours").format()
// 	// 			);
// 	// 			const activeAgendaStart = schedule.scheduleJob(agendaDateStart, function () {
// 	// 				agendaArray = users;
// 	// 				agendaStatus = true;
// 	// 			});
		
// 	// 			const agendaDateEndAux = new Date(element.year, element.month, element.day, 23, 59, 59);
// 	// 			const agendaDateEnd = new Date(
// 	// 				moment(agendaDateEndAux).add(4, "hours").format()
// 	// 			);
// 	// 			const activeAgendaEnd = schedule.scheduleJob(agendaDateEnd, function () {
// 	// 				agendaArray = [];
// 	// 				agendaStatus = false;
// 	// 			});
// 	// 		}
// 	// 	} catch (error) {
// 	// 		console.log(error);
// 	// 	}
// 	// });

// 	// socket.on("NEW_AGENDA_TALK", (talkStored) => {
// 	// 	try {
// 	// 		arrayTalks.push(talkStored);
// 	// 		if (arrayTalks.length > 0) {
// 	// 			Agenda.findById({_id: mongoose.Types.ObjectId(talkStored.agenda)}, (err, element) => {
// 	// 				if (err) {
// 	// 					console.log(err);
// 	// 				} else {
// 	// 					const item = talkStored;
// 	// 					const date = new Date(element.year, element.month, element.day, parseInt(item.hourStart), parseInt(item.minuteStart), 0);
// 	// 					const finalDate = new Date(moment(date).add(4, "hours").format());
			
// 	// 					const d = schedule.scheduleJob(finalDate, function () {
// 	// 						const userAgenda = new UserAgenda();
// 	// 						userAgenda.day = element.day;
// 	// 						userAgenda.title = item.title;
// 	// 						userAgenda.hour = `${item.hourStart}:${item.minuteStart}`;
// 	// 						userAgenda.hourEnd = `${item.hourEnd}:${item.minuteEnd}`;
// 	// 						userAgenda.users = agendaArray;
// 	// 						userAgenda.peakCount = peak.count;
// 	// 						userAgenda.peakTime = peak.time;
// 	// 						userAgenda.method = "Automatic";
// 	// 						userAgenda.save((err, userAgendaStored) => {});
// 	// 						agendaArray = users;
// 	// 						peak = {
// 	// 							time: null,
// 	// 							count: 0,
// 	// 						};
// 	// 					});
// 	// 				}
// 	// 			});
// 	// 		}
// 	// 	} catch (error) {
// 	// 		console.log(error);
// 	// 	}
// 	// });

// 	// socket.on("UPDATE_ROUTE", (user) => {
// 	// 	try {
// 	// 		const index = users.findIndex(
// 	// 			(element) => element.id === socket.id
// 	// 		);
// 	// 		if (index >= 0) {
// 	// 			users[index].route = user.route;
// 	// 			io.emit("UPDATE_USER_LIST", users);
// 	// 		}
// 	// 		if (agendaStatus) {
// 	// 			const index2 = agendaArray.findIndex(
// 	// 				(element) => element.id === socket.id
// 	// 			);
// 	// 			if (index2 >= 0) {
// 	// 				agendaArray[index2].route = user.route;
// 	// 			}
// 	// 		}
// 	// 	} catch (error) {
// 	// 		console.log(error);
// 	// 	}
// 	// });

// 	socket.on("GET_USERS", () => {
// 		io.emit("UPDATE_USER_LIST", users);
// 	});

// 	socket.on("GET_PEAK", () => {
// 		io.emit("PEAK", peak);
// 	});

// 	socket.on("disconnect", () => {
// 		try {
// 			const index = users.findIndex(
// 				(element) => element.id === socket.id
// 			);
// 			if (index >= 0) {
// 				const realTime = new RealTime();
// 				realTime.user = users[index].userId;
// 				realTime.flagIcon = users[index].flagIcon;
// 				realTime.city = users[index].city;
// 				realTime.postalCode = users[index].postalCode;
// 				realTime.continent = users[index].continent;
// 				realTime.continentCode = users[index].continentCode;
// 				realTime.country = users[index].country;
// 				realTime.countryIsoCode = users[index].countryIsoCode;
// 				realTime.locationLatLong = users[index].locationLatLong;
// 				realTime.accuracyRadius = users[index].accuracyRadius;
// 				realTime.timeZone = users[index].timeZone;
// 				realTime.region = users[index].region;
// 				realTime.regionIsoCode = users[index].regionIsoCode;
// 				realTime.ipAddress = users[index].ipAddress;
// 				realTime.ipType = users[index].ipType;
// 				realTime.conectionType = users[index].conectionType;
// 				realTime.navigatorName = users[index].navigatorName;
// 				realTime.operatingSystem = users[index].operatingSystem;
// 				realTime.conectionTime = users[index].conectionTime;
// 				realTime.conectionTimeEnd = new Date(
// 					moment().subtract(4, "hours").format()
// 				).getTime();
// 				realTime.save((err, realTimeStored) => {});
// 				users = users.filter((u) => u.id !== socket.id);
// 				io.emit("UPDATE_USER_LIST", users);
// 				socket.removeAllListeners();
// 			}
// 			if (agendaStatus) {
// 				const index2 = agendaArray.findIndex(
// 					(element) => element.id === socket.id
// 				);
// 				if (index2 >= 0) {
// 					agendaArray[index2].conectionTimeEnd = new Date(
// 						moment().subtract(4, "hours").format()
// 					).getTime();
// 				}
// 			}
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	});
// });


//Se agrega otro server

io.on("connection", (socket) => {
	socket.on("NEW_USER", (user) => {

	console.log('Nuevo usuario Conectado');
	  try {
		const newUser = {
		  id: socket.id,
		  userId: user.userId,
		  name: user.name,
		  lastname: user.lastname,
		  email: user.email,
		  enterprise: user.enterprise,
		  position: user.position,
		  route: user.route,
		  flagIcon: user.flagIcon,
		  city: user.city,
		  postalCode: user.postalCode,
		  continent: user.continent,
		  continentCode: user.continentCode,
		  country: user.country,
		  countryIsoCode: user.countryIsoCode,
		  locationLatLong: user.locationLatLong,
		  accuracyRadius: user.accuracyRadius,
		  timeZone: user.timeZone,
		  region: user.region,
		  regionIsoCode: user.regionIsoCode,
		  ipAddress: user.ipAddress,
		  ipType: user.ipType,
		  isp: user.isp,
		  conectionType: user.conectionType,
		  navigatorName: user.navigatorName,
		  operatingSystem: user.operatingSystem,
		  conectionTime: new Date(
			moment().subtract(4, "hours").format()
		  ).getTime(),
		  conectionTimeEnd: null,
		};
		users.push(newUser);
		io.emit("USER", newUser);
		io.emit("UPDATE_USER_LIST", users);
		if (users.length > peak.count) {
		  peak.count = users.length;
		  peak.time = moment().subtract(4, "hours").format("LLL");
		  io.emit("PEAK", peak);
		}
		if (agendaStatus) {
		  const index = agendaArray.findIndex(
			(element) => element.id === newUser.id
		  );
		  if (index < 0) {
			agendaArray.push(newUser);
		  }
		}
	  } catch (error) {
		console.log(error);
	  }
	});
  
	socket.on("UPDATE_ROUTE", (user) => {
	  try {
		const index = users.findIndex((element) => element.id === socket.id);
		if (index >= 0) {
		  users[index].route = user.route;
		  io.emit("UPDATE_USER_LIST", users);
		}
		if (agendaStatus) {
		  const index2 = agendaArray.findIndex(
			(element) => element.id === socket.id
		  );
		  if (index2 >= 0) {
			agendaArray[index2].route = user.route;
		  }
		}
	  } catch (error) {
		console.log(error);
	  }
	});
  
	socket.on("GET_USERS", () => {
	  io.emit("UPDATE_USER_LIST", users);
	});
  
	socket.on("GET_PEAK", () => {
	  io.emit("PEAK", peak);
	});
  
	socket.on("disconnect", () => {
	  try {
		const index = users.findIndex((element) => element.id === socket.id);
		if (index >= 0) {
		  console.log('Usuario desconectado');
		  const realTime = new RealTime();
		  realTime.user = users[index].userId;
		  realTime.flagIcon = users[index].flagIcon;
		  realTime.city = users[index].city;
		  realTime.postalCode = users[index].postalCode;
		  realTime.continent = users[index].continent;
		  realTime.continentCode = users[index].continentCode;
		  realTime.country = users[index].country;
		  realTime.countryIsoCode = users[index].countryIsoCode;
		  realTime.locationLatLong = users[index].locationLatLong;
		  realTime.accuracyRadius = users[index].accuracyRadius;
		  realTime.timeZone = users[index].timeZone;
		  realTime.region = users[index].region;
		  realTime.regionIsoCode = users[index].regionIsoCode;
		  realTime.ipAddress = users[index].ipAddress;
		  realTime.ipType = users[index].ipType;
		  realTime.isp = users[index].isp;
		  realTime.conectionType = users[index].conectionType;
		  realTime.navigatorName = users[index].navigatorName;
		  realTime.operatingSystem = users[index].operatingSystem;
		  realTime.conectionTime = users[index].conectionTime;
		  realTime.conectionTimeEnd = new Date(
			moment().subtract(4, "hours").format()
		  ).getTime();
		  realTime.save((err, realTimeStored) => {});
		  users = users.filter((u) => u.id !== socket.id);
		  io.emit("UPDATE_USER_LIST", users);
		  socket.removeAllListeners();
		}
		if (agendaStatus) {
		  const index2 = agendaArray.findIndex(
			(element) => element.id === socket.id
		  );
		  if (index2 >= 0) {
			agendaArray[index2].conectionTimeEnd = new Date(
			  moment().subtract(4, "hours").format()
			).getTime();
		  }
		}
	  } catch (error) {
		console.log(error);
	  }
	});
  });

// Día 12
const agendaDateStartAux = momentTimezone.tz(
	"2021-11-12T07:50:00",
	"America/Santiago"
  );

const agendaDateStart = moment(agendaDateStartAux).format()
const activeAgendaStart = schedule.scheduleJob(agendaDateStart, function () {
	agendaArray = users;
	agendaStatus = true;
  });

  const agendaDateEndAux = momentTimezone.tz(
	"2021-11-12T19:00:00",
	"America/Santiago"
  );
  const agendaDateEnd = moment(agendaDateEndAux).format();
  const activeAgendaEnd = schedule.scheduleJob(agendaDateEnd, function () {
	agendaArray = [];
	agendaStatus = false;
  });
// Día 13
const agendaDateStartAux2 = momentTimezone.tz(
	"2021-11-13T07:50:00",
	"America/Santiago"
  );

const agendaDateStart2 = moment(agendaDateStartAux2).format()
const activeAgendaStart2 = schedule.scheduleJob(agendaDateStart2, function () {
	agendaArray = users;
	agendaStatus = true;
  });

  const agendaDateEndAux2 = momentTimezone.tz(
	"2021-11-13T19:00:00",
	"America/Santiago"
  );
  const agendaDateEnd2 = moment(agendaDateEndAux2).format();
  const activeAgendaEnd2 = schedule.scheduleJob(agendaDateEnd2, function () {
	agendaArray = [];
	agendaStatus = false;
  });

  // Día 1
//#region
// const date1 = momentTimezone.tz("2021-11-10T17:10:00", "America/Santiago");
// const finalDate1 = moment(date1).format();

// Día 1
for (let index = 0; index < agenda1.length; index++) {

	let d = schedule.scheduleJob(agenda1[index].finalDate, function () {
		const userAgenda = new UserAgenda();
		userAgenda.day = 12;
		userAgenda.title = agenda1[index].title;
		userAgenda.hour = agenda1[index].hour;
		userAgenda.hourEnd = agenda1[index].hourEnd;
		userAgenda.users = agendaArray;
		userAgenda.peakCount = peak.count;
		userAgenda.peakTime = peak.time;
		userAgenda.method = "Automatic";
		userAgenda.save((err, userAgendaStored) => {});
		agendaArray = users;
		peak = {
		  time: null,
		  count: 0,
		};
	  });
}

//Día 2
for (let index2 = 0; index2 < agenda2.length; index2++) {

	let d2 = schedule.scheduleJob(agenda2[index2].finalDate, function () {
		const userAgenda = new UserAgenda();
		userAgenda.day = 13;
		userAgenda.title = agenda2[index2].title;
		userAgenda.hour = agenda2[index2].hour;
		userAgenda.hourEnd = agenda2[index2].hourEnd;
		userAgenda.users = agendaArray;
		userAgenda.peakCount = peak.count;
		userAgenda.peakTime = peak.time;
		userAgenda.method = "Automatic";
		userAgenda.save((err, userAgendaStored) => {});
		agendaArray = users;
		peak = {
		  time: null,
		  count: 0,
		};
	  });
}



// const d2 = schedule.scheduleJob(finalDate2, function () {
// 	console.log('Entro aquí 2 ');
// 	const userAgenda = new UserAgenda();
// 	userAgenda.day = 20;
// 	userAgenda.title = "Charla cualquiera";
// 	userAgenda.hour = "11:55";
// 	userAgenda.hourEnd = "12:00";
// 	userAgenda.users = agendaArray;
// 	userAgenda.peakCount = peak.count;
// 	userAgenda.peakTime = peak.time;
// 	userAgenda.method = "Automatic";
// 	userAgenda.save((err, userAgendaStored) => {});
// 	agendaArray = users;
// 	peak = {
// 	  time: null,
// 	  count: 0,
// 	};
//   });


const port = process.env.PORT || 8080;

mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.connect(
	`mongodb://${IP_SERVER}:${PORT_DB}/CONCEPTOS`,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	(err, res) => {
		if (err) {
			throw err;
		} else {
			server.listen(port, function () {
				console.log("------------------------------------");
				console.log("|          CMS Up Webinar          |");
				console.log("------------------------------------");
				console.log(`http://${IP_SERVER}:${port}/api/${API_VERSION}`);
			});
		}
	}
);
