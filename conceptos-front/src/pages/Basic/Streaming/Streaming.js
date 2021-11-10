/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { notification, Tooltip, Spin } from "antd";
import { LoadingOutlined, WhatsAppOutlined } from "@ant-design/icons";
import { CometChat } from "@cometchat-pro/chat";
import $ from "jquery";
import VolumeOffIcon from "@material-ui/icons/VolumeOff";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import { useHistory } from "react-router-dom";
import jwtDecode from "jwt-decode";
// import { Link } from "react-router-dom";
// import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { isMobile } from "react-device-detect";
import { isSafari, isMobileSafari } from "react-device-detect";
import moment from "moment";
import "moment/locale/es";

import { CometChatUnified } from "../../../components/CometChatPro";
import Agenda from "../../../components/Basic/Agenda/Agenda";
import Stand from "../../../components/Basic/Stand/stand";
import Footer from "../../../components/Basic/Footer/Footer";
import Socket from "../../../utils/socket";

import { makeQuestionApi } from "../../../api/question";
import { eventApi } from "../../../api/events";
import { getAccessTokenApi } from "../../../api/auth";
import { updateStreamTimeApi } from "../../../api/user";
import { getTime } from "../../../api/time";
import { getIframeApi } from "../../../api/Admin/iframe";
import { getStreamingApi } from "../../../api/Admin/streaming";
import { getWaitingRoomApi } from "../../../api/Admin/waitingRoom";
import { getStandApi } from "../../../api/Admin/stands";
import { basePath, apiVersion } from "../../../api/config";
import { getNetworkingApi } from "../../../api/Admin/networking";
import { getFullPollApi, postPollAnswerApi } from "../../../api/Admin/poll";

import cerrar from "../../../assets/img/cerrar.svg";
import footerRegistro from "../../../assets/images/footer-cognitiva.jpg";
import logo1 from "../../../assets/images/1.png";
// import logo2 from "../../../assets/images/2.png";
import bi from '../../../assets/images/bi.png';
import bio from '../../../assets/images/biome.jpg';
import uc from '../../../assets/images/uc.jpg';
import mass from '../../../assets/images/mass.png';


import "./Streaming.scss";
import { Question } from "../../../components/Basic/Question/Question";

const CUSTOMER_MESSAGE_LISTENER_KEY = "client-listener";

let COMETCHAT_CONSTANTS = {
	APP_ID: "",
	REGION: "us",
	AUTH_KEY: "",
};

const Streaming = () => {
	const history = useHistory();

	const [agendaTime, setAgendaTime] = useState(null);
	const [loading, setLoading] = useState(false);
	const [loading2, setLoading2] = useState(false);
	const [user, setUser] = useState();
	const [questionInput, setQuestionInput] = useState("");
	const [token, setToken] = useState();
	const [notifications, setNotifications] = useState(true);
	const [saveData, setSaveData] = useState(0);
	const [logo, setLogo] = useState(null);
	const [iframeLink, setIframeLink] = useState("");
	const [standsData, setStandsData] = useState([]);
	const [pollData, setPollData] = useState([]);
	const [config, setConfig] = useState({
		networking: true,
		status: false,
		agenda: false,
		stand: true,
		botonColor: "default",
		botonHoverColor: "default",
		networkingColor: "default",
		questionBackgroundColor: "default",
		questionTitleColor: "default",
		questionTitle: "",
		agendaTitleColor: "default",
		agendaHeaderBackground: "default",
		agendaActiveDay: "default",
		agendaDay: "default",
		agendaText: "Agenda",
		standTitle: "Stands",
		standTitleColor: "default",
		footerColor: "default",
	});

	useEffect(() => {
		setLoading(true);
		let interval, interval2;
		getTime2(interval2);
		getNetworkingData();
		if (!isMobile) {
			$(window).scroll(function () {
				const distanceY =
					window.pageYOffset || document.documentElement.scrollTop;
				const shrinkOn = 550;
				if (distanceY > shrinkOn) {
					$(".transmission").addClass("scroll");
				} else {
					$(".transmission").removeClass("scroll");
				}
			});
		}
		const auxToken = getAccessTokenApi();
		if (auxToken === null) {
			history.push("/iniciarsesion");
		} else {
			const decodedToken = jwtDecode(auxToken);
			if (!decodedToken) {
				history.push("/iniciarsesion");
			} else {
				setToken(auxToken);
				setUser(decodedToken);
				const user = {
					id: decodedToken.id,
					route: window.location.pathname,
				};
				Socket.emit("UPDATE_ROUTE", user);
				const data = {
					email: decodedToken.email,
				};
				updateStreamTimeApi(auxToken, data);
				getIframe(auxToken);
				getStands(auxToken);
				getConfig(auxToken);
				getWaitingRoomLogo(auxToken);
				interval = setInterval(() => {
					getPoll(auxToken, decodedToken.id);
					getConfigAux(auxToken);
				}, 5000);

				if (!isSafari && !isMobileSafari) {
					const UID = decodedToken.id;
					const apiKey = COMETCHAT_CONSTANTS.AUTH_KEY;
					const GUID = "chat_general";
					const password = "";
					const groupType = CometChat.GROUP_TYPE.PUBLIC;
					CometChat.login(UID, apiKey).then(
						(User) => {
							CometChat.joinGroup(GUID, groupType, password).then(
								(group) => { },
								(error) => { }
							);
						},
						(error) => { }
					);
				}
			}
		}

		$(".css-1f1wd4v").trigger('click');

		setTimeout(async () => {
			await $(".css-10k5bfy").trigger('click');
		}, 1000)

		return () => {
			clearInterval(interval);
			CometChat.removeMessageListener(CUSTOMER_MESSAGE_LISTENER_KEY);
		};


	}, []);

	const getNetworkingData = async () => {
		const resp = await getNetworkingApi();
		if (resp.ok) {
			COMETCHAT_CONSTANTS.APP_ID = resp.networking.APP_ID;
			COMETCHAT_CONSTANTS.AUTH_KEY = resp.networking.AUTH_KEY;
		}
	};

	const getWaitingRoomLogo = async (auxToken) => {
		const resp = await getWaitingRoomApi(auxToken);
		if (resp.ok) {
			setLogo(
				`${basePath}/${apiVersion}/waitingroom-image/${resp.waitingRoom.logo}`
			);
		}
	};

	useEffect(() => {
		let action = "pageView";
		let description = "";
		switch (saveData) {
			case 1:
				action = "Pregunta";
				description = "Pregunta enviada";
				break;
			case 2:
				action = "Footer";
				description = "Powered By Up";
				break;
			case 3:
				action = "Menu";
				description = "Activar notificaciones";
				break;
			case 4:
				action = "Menu";
				description = "Silenciar notificaciones";
				break;
			case 5:
				action = "Menu";
				description = "Abrir Chat";
				break;
			case 6:
				action = "Menu";
				description = "Cerrar Chat";
				break;
			default:
				break;
		}
		const data = {
			conectionType: window.conectionType,
			page: "/streaming",
			stand: "",
			action,
			description,
			userId: localStorage.getItem("userID"),
		};
		eventApi(data);
		if (saveData === 2) {
			window.open("https://www.upwebinar.cl/", "_blank");
		}
	}, [saveData]);

	useEffect(() => {
		if (
			notifications &&
			config.networking &&
			!isSafari &&
			!isMobileSafari
		) {
			CometChat.addMessageListener(
				CUSTOMER_MESSAGE_LISTENER_KEY,
				new CometChat.MessageListener({
					onTextMessageReceived: (textMessage) => {
						let message = textMessage.data.text;
						if (message.length > 25) {
							message = message.substring(0, 25) + "...";
						}
						notification["info"]({
							message: "Nuevo mensaje",
							description: message,
						});
					},
				})
			);
		} else {
			CometChat.removeMessageListener(CUSTOMER_MESSAGE_LISTENER_KEY);
		}
	}, [notifications]);

	const getIframe = async (auxToken) => {
		const resp = await getIframeApi(auxToken);
		if (resp.ok) {
			setIframeLink(resp.iframe.link);
		}
	};

	const getConfig = async (auxToken) => {
		const resp = await getStreamingApi(auxToken);
		if (resp.ok) {
			if (!resp.streaming.status) {
				history.push("/salaespera");
			} else {
				setConfig({
					networking: resp.streaming.networking,
					status: resp.streaming.status,
					agenda: resp.streaming.agenda,
					stand: resp.streaming.stand,
					botonColor: resp.streaming.botonColor,
					botonHoverColor: resp.streaming.botonHoverColor,
					networkingColor: resp.streaming.networkingColor,
					questionBackgroundColor:
						resp.streaming.questionBackgroundColor,
					questionTitleColor: resp.streaming.questionTitleColor,
					questionTitle: resp.streaming.questionTitle,
					agendaTitleColor: resp.streaming.agendaTitleColor,
					agendaHeaderBackground:
						resp.streaming.agendaHeaderBackground,
					agendaActiveDay: resp.streaming.agendaActiveDay,
					agendaDay: resp.streaming.agendaDay,
					agendaText: resp.streaming.agendaText,
					standTitle: resp.streaming.standTitle,
					standTitleColor: resp.streaming.standTitleColor,
					footerColor: resp.streaming.footerColor,
				});
				var style;
				var css = `
                    .fondo .fondocard {
                        background: ${resp.streaming.questionBackgroundColor} !important;
                    }
                    .fondo .fondocard .card .texto h2 {
                        color: ${resp.streaming.questionTitleColor} !important;
                    }
                    .fondo .fondocard .card .inputs button {
                        background: ${resp.streaming.botonColor} !important;
                    }
                    .fondo .fondocard .card .inputs button:hover {
                        background: ${resp.streaming.botonHoverColor} !important;
                    }
                    .poll .col-poll .option {
                        background: ${resp.streaming.botonColor} !important;
                    }
                    .poll .col-poll .option:hover {
                        background: ${resp.streaming.botonHoverColor} !important;
                    }
                    .fondo .contenedorStreaming .col1 .logo .btn {
                        background: ${resp.streaming.botonColor} !important;
                    }
                    .fondo .contenedorStreaming .col1 .logo .btn:hover {
                        background: ${resp.streaming.botonHoverColor} !important;
                    }
					footer {
						background: ${resp.streaming.footerColor}; !important;
					}
                `;
				if (resp.streaming.networking) {
					css =
						css +
						`
					.css-1edjk1t {
                        position: absolute;
                        top: calc(100vh - 50px);
                        background: white;
                    }
                    .css-1s8w8rq,
                    .css-1cezwao,
                    .css-1v1jpkx {
                        background: white;
                    }
                    .css-1hp0xis,
                    .css-1rlmi9b,
                    .css-1khmp0u,
                    .css-3pao19 {
                        color: ${resp.streaming.networkingColor} !important;
                        background: #fff !important;
                    }
                    .css-ki1usc {
                        color: ${resp.streaming.networkingColor} !important;
                    }
                    .css-16ji1lf > .css-uevzfr {
                        background: white;
                        height: calc(100vh - 50px) !important;
                    }
                    .css-1j77mrg {
                        height: 100vh;
                    }
                    .css-1ridola {
                        height: calc(100vh - 195px) !important;
                        overflow-y: auto !important;
                    }
                    .css-11f1pgy,
                    .css-1arksw8 {
                        color: ${resp.streaming.networkingColor} !important;
                    }
                    .css-11f1pgy:hover {
                        color: ${resp.streaming.networkingColor} !important;
                    }
                    .css-1arksw8:hover {
                        color: ${resp.streaming.networkingColor} !important;
                    }
                    .css-czbkl3 {
                        margin-bottom: -3px;
                    }
                    .css-1ps5bal-SenderMessageBubble,
                    .css-131bqun {
                        background: ${resp.streaming.networkingColor} !important;
                    }
					`;
				}
				if (resp.streaming.agenda) {
					css =
						css +
						`
					.fondo .contenedorAgenda .tituloAgenda h1 {
						color: ${resp.streaming.agendaTitleColor} !important;
					}
					.fondo .contenedorAgenda .days {
						background: ${resp.streaming.agendaHeaderBackground} !important;
					}
					.fondo .contenedorAgenda .days button {
						color: ${resp.streaming.agendaDay} !important;
					}
					.fondo .contenedorAgenda .days .clasee {
						color: ${resp.streaming.agendaActiveDay} !important;
					}
					.row4 p,
					.row2 .tiempo p,
					.row2 .duracion p,
					.row2 .plenario .texto1 strong,
					.row2 .imagenes .imagen .nombrecolaborador {
						color: #000000 !important;
					}
					.break {
						background: ${resp.streaming.agendaHeaderBackground} !important;
					}
					.break .tiempo a .caffe,
					.break .tiempo span,
					.break .duracion p {
						color: ${resp.streaming.agendaActiveDay} !important;
					}
					`;
				}
				if (resp.streaming.stand) {
					css =
						css +
						`
					.standMediano .botones .mitad .btn2 {
                        background: ${resp.streaming.botonColor};
                    }
                    .standMediano .botones .mitad .btn2:hover {
                        background: ${resp.streaming.botonHoverColor};
                    }
                    .standMediano .botones .mitad #whatsapp {
                        background: #075E54 !important;
                    }
                    .standMediano .botones .mitad #whatsapp:hover {
                        background: #128C7E !important;
                    }
					.fondo .contenedor .titulo h2 {
						color: ${resp.streaming.standTitleColor} !important;
					}
					.standMediano .foot2 {
						background: ${resp.streaming.footerColor}; !important;
					}
					.standMediano .slick-dots li.slick-active button {
						background: ${resp.streaming.footerColor} !important;
					}
					.tituloDialog .icono2 {
						fill: ${resp.streaming.botonColor} !important;
					}
					.tituloDialog h1 {
						color: ${resp.streaming.standTitleColor} !important;
					}
					.description .titulo h1 {
						color: ${resp.streaming.standTitleColor} !important;
					}
					.dias .icon {
						fill: ${resp.streaming.botonColor} !important;
						color: ${resp.streaming.botonColor} !important;
					}
					.confirmacionAgenda .titulo div span .icono {
						color: ${resp.streaming.botonColor} !important;
					}
					.tituloDialog .icono {
						fill: ${resp.streaming.botonColor} !important;
					}
					.horas button {
						background: ${resp.streaming.botonColor} !important;
					}
					.horas button:hover {
						background: ${resp.streaming.botonHoverColor} !important;
					}
					.confirmacionAgenda .divi button {
						border: 1px solid ${resp.streaming.botonColor} !important;
						color: ${resp.streaming.botonColor} !important;
					}
					.horas button:focus {
						background: ${resp.streaming.botonHoverColor} !important;
					}
					.botones2 div .btn2 {
						background: ${resp.streaming.botonColor} !important;
					}
					.botones2 div .btn2:hover {
						background: ${resp.streaming.botonHoverColor} !important;
					}
					`;
				}
				if (!resp.streaming.networking || isSafari || isMobileSafari) {
					try {
						if (isMobile) {
							css = `
                            ${css}
                            #col2 {
                                display: none !important;
                            }`;
						} else {
							css = `
                            ${css}
                            #col1 {
                                width: 100% !important;
                            }
                            #col2 {
                                width: 0px !important;
                                visibility: hidden !important;
                                opacity: 0 !important;
                                display: none !important;
                            }`;
						}
						style = document.createElement("style");

						if (style.styleSheet) {
							style.styleSheet.cssText = css;
						} else {
							style.appendChild(document.createTextNode(css));
						}
						document
							.getElementsByTagName("head")[0]
							.appendChild(style);
						setLoading(false);
					} catch (error) {
						setLoading(false);
						console.log(error);
					}
				} else {
					if (isMobile) {
						css = `
                            ${css}
                            #col2 {
                                display: block;
                            }
                        `;
					} else {
						css = `
                            ${css}
                            #col1 {
                                width: calc(100% - 400px);
                            }
                            #col2 {
                                width: 400px;
                                visibility: visible;
                                opacity: 1;
                                display: block;
                            }
                        `;
					}
					style = document.createElement("style");

					if (style.styleSheet) {
						style.styleSheet.cssText = css;
					} else {
						style.appendChild(document.createTextNode(css));
					}
					document.getElementsByTagName("head")[0].appendChild(style);
					setLoading(false);
				}
			}
		}
	};

	const getConfigAux = async (auxToken) => {
		const resp = await getStreamingApi(auxToken);
		if (resp.ok) {
			if (!resp.streaming.status) {
				history.push("/salaespera");
			}
		}
	};

	const getTime2 = async (interval) => {
		try {
			const resp = await getTime();
			const timeApi = moment(resp.time).valueOf();
			setAgendaTime(resp.time);
			let now = timeApi;
			interval = setInterval(function () {
				const countDownDate = moment(resp.eventTime).valueOf();
				if (countDownDate <= now) {
					clearInterval(interval);
				}
				now = moment(now).add(1, "seconds").valueOf();
			}, 1000);
		} catch (exception) {
			console.log(exception);
		}
	};

	const getStands = async (auxToken) => {
		const resp = await getStandApi(auxToken);
		if (resp.ok) {
			setStandsData(resp.stands);
		}
	};

	const getPoll = async (auxToken, userId) => {
		const resp = await getFullPollApi(auxToken, userId);
		if (resp.ok) {
			const pollAux = resp.poll;
			const arrayPoll = [];

			pollAux.forEach((element) => {
				let data;
				if (element.poll.method === "Automatic") {
					let month = "",
						day = "",
						hour = "",
						minute = "",
						second = "";
					if (
						element.poll.timeStartMonth.length === 1 &&
						month.length < 2
					) {
						month = `0${element.poll.timeStartMonth}`;
					} else {
						month = element.poll.timeStartMonth;
					}
					if (
						element.poll.timeStartDay.length === 1 &&
						day.length < 2
					) {
						day = `0${element.poll.timeStartDay}`;
					} else {
						day = element.poll.timeStartDay;
					}
					if (
						element.poll.timeStartHour.length === 1 &&
						hour.length < 2
					) {
						hour = `0${element.poll.timeStartHour}`;
					} else {
						hour = element.poll.timeStartHour;
					}
					if (
						element.poll.timeStartMinute.length === 1 &&
						minute.length < 2
					) {
						minute = `0${element.poll.timeStartMinute}`;
					} else {
						minute = element.poll.timeStartMinute;
					}
					if (
						element.poll.timeStartSecond.length === 1 &&
						second.length < 2
					) {
						second = `0${element.poll.timeStartSecond}`;
					} else {
						second = element.poll.timeStartSecond;
					}
					let monthEnd = "",
						dayEnd = "",
						hourEnd = "",
						minuteEnd = "",
						secondEnd = "";
					if (
						element.poll.timeEndMonth.length === 1 &&
						monthEnd.length < 2
					) {
						monthEnd = `0${element.poll.timeEndMonth}`;
					} else {
						monthEnd = element.poll.timeEndMonth;
					}
					if (
						element.poll.timeEndDay.length === 1 &&
						dayEnd.length < 2
					) {
						dayEnd = `0${element.poll.timeEndDay}`;
					} else {
						dayEnd = element.poll.timeEndDay;
					}
					if (
						element.poll.timeEndHour.length === 1 &&
						hourEnd.length < 2
					) {
						hourEnd = `0${element.poll.timeEndHour}`;
					} else {
						hourEnd = element.poll.timeEndHour;
					}
					if (
						element.poll.timeEndMinute.length === 1 &&
						minuteEnd.length < 2
					) {
						minuteEnd = `0${element.poll.timeEndMinute}`;
					} else {
						minuteEnd = element.poll.timeEndMinute;
					}
					if (
						element.poll.timeEndSecond.length === 1 &&
						secondEnd.length < 2
					) {
						secondEnd = `0${element.poll.timeEndSecond}`;
					} else {
						secondEnd = element.poll.timeEndSecond;
					}
					let nowDate = moment().utcOffset(0, true).valueOf();
					let dateStart = moment
						.utc(
							`${element.poll.timeStartYear}-${month}-${day}T${hour}:${minute}:${second}`
						)
						.add(1, "month")
						.valueOf();
					let dateEnd = moment
						.utc(
							`${element.poll.timeEndYear}-${monthEnd}-${dayEnd}T${hourEnd}:${minuteEnd}:${secondEnd}`
						)
						.add(1, "month")
						.valueOf();
					if (nowDate > dateStart) {
						if (nowDate > dateEnd) {
							element.poll.active = false;
						} else {
							element.poll.active = true;
						}
					} else {
						element.poll.active = false;
					}
					data = element;
					arrayPoll.push(data);
				} else {
					data = element;
					arrayPoll.push(data);
				}
			});
			if (arrayPoll !== pollData) {
				setPollData(arrayPoll);
			}
			setLoading2(false);
		}
	};

	const answerQuestion = async (poll, answer) => {
		const data = {
			user: user.id,
			poll: poll._id,
			pollOption: answer._id,
		};
		const resp = await postPollAnswerApi(token, data);
		if (resp.ok) {
			setLoading2(true);
			notification["success"]({
				message: resp.message,
			});
			getPoll(token, user.id);
		} else {
			notification["error"]({
				message: resp.message,
			});
		}
	};

	const handleClickAbrir = (id) => {
		const data = {
			conectionType: window.conectionType,
			page: "/streaming",
			stand: id,
			action: "Stand",
			description: "Abrir Stand",
			country: window.country,
			userId: localStorage.getItem("userID"),
		};
		eventApi(data);
		const doc = document.getElementById(id);
		const doc2 = document.getElementById("fondoStand");
		doc2.style.left = "0px";
		doc.style.right = "0px";
		doc.style.transitionDuration = "1s";
		doc2.style.transitionDuration = "1s";
		const bodi = document.getElementsByTagName("body");
		bodi[0].classList.add("stop");
	};

	const OnOffNotifications = () => {
		if (notifications) {
			setSaveData(4);
		} else {
			setSaveData(3);
		}
		setNotifications(!notifications);
	};

	const onChange = (e) => {
		setQuestionInput(e.target.value);
	};

	const sendQuestion = async () => {
		const userQuestion = questionInput;
		if (userQuestion.trim() !== "") {
			const data = {
				user: user.id,
				question: userQuestion,
			};
			const result = await makeQuestionApi(token, data);
			if (!result.ok) {
				notification["error"]({
					message: result.message,
				});
			} else {
				notification["success"]({
					message: result.message,
				});
				setQuestionInput("");
				setSaveData(1);
			}
		} else {
			notification["error"]({
				message: "Ingrese una pregunta válida",
			});
		}
	};

	const cerrarChat = () => {
		let doc = document.getElementById("col1");
		let doc3 = document.getElementById("open");
		let doc2 = document.getElementById("col2");
		if (doc.style.width === "100%") {
			doc.style.width = "calc(100% - 400px)";
			doc2.style.visibility = "visible";
			doc2.style.opacity = "1";
			doc3.style.transform = "rotate(360deg)";
			doc2.style.width = "400px";
			doc2.style.display = "block";
			setSaveData(5);
		} else {
			doc3.style.transform = "rotate(180deg)";
			doc.style.width = "100%";
			doc2.style.width = "0px";
			doc2.style.visibility = "hidden";
			doc2.style.opacity = "0";
			doc2.style.display = "none";
			setSaveData(6);
		}
	};

	const cerrarChat2 = () => {
		let doc3 = document.getElementById("open2");
		let doc2 = document.getElementById("col2");

		if (doc2.style.display === "none") {
			doc2.style.display = "block";
			doc3.style.transitionDuration = "1s";
			doc3.classList.remove("img");
			doc3.classList.add("img2");
			doc3.style.translate = "rotate(270deg) !important";
			setSaveData(5);
		} else {
			doc2.style.display = "none";
			doc3.style.translate = "rotate(90deg) !important";
			doc3.style.transitionDuration = "1s";
			doc3.classList.remove("img2");
			doc3.classList.add("img");
			setSaveData(6);
		}
	};

	const antIcon = <LoadingOutlined spin />;

	return (
		<Spin
			spinning={loading}
			size="large"
			tip="Cargando..."
			indicator={antIcon}
		>
			<div className="fondo">
				<div className='header'>
					<div className="logo">
						<h1>CONCEPTOS
							<span> UC</span>
						</h1>
					</div>
				</div>
				<div className="contenedorStreaming">
					<div className='contenedor-streaming'>
						<div className="col1">
							<div className="streaming ">
								{iframeLink.length > 0 ? (
									<iframe
										title="streaming"
										width="560"
										height="315"
										className="transmission"
										src={iframeLink}
										frameBorder="0"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
										allowFullScreen
									></iframe>
								) : null}
							</div>
						</div>
						<div className="col2">
							{config.networking && !isSafari && !isMobileSafari && !isMobile ?  (
								<CometChatUnified />
							) : null}
						</div>

					</div>
				</div>
			</div>
			<div className="fondo">
				<Spin
					spinning={loading2}
					size="large"
					tip="Cargando..."
					indicator={antIcon}
				>

					<Question
						sendQuestion={sendQuestion}
						onChange={onChange}
						questionInput={questionInput}
					/>
				</Spin>

				{config.stand ? (
					<div className="contenedor">
						<div className="titulo" id="stands">
							<h2>{config.standTitle}</h2>
						</div>
					</div>
				) : null}

				{config.agenda ? (
					<Agenda
						agendaTitle={config.agendaText}
						agendaTime={agendaTime}
						state={true}
						setSaveData={setSaveData}
						token={token}
					/>
				) : null}
			</div>
			{config.stand ? (
				<div className="fondoStand" id="fondoStand">
					{
						standsData.map((item, i) => {
							return <Stand data={item} token={token} />;
						})}
				</div>
			) : null}

			<div className="franja">

				<h4>AUSPCIAN:</h4>
			</div>

			<div className="container-auspiciadores">
				<div className="auspciadores">
					<img
						src={bi}
						className="bi"
					/>

					<img
						src={bio}
						className="bio"
					/>
				</div>
			</div>

			<div className="franja">
				<h4>ORGANIZA:</h4>
			</div>

			<div className="container-auspiciadores" >
				<div className="auspciadores" style={{paddingBottom:'20px'}}>
					<img
						src={uc}
						className="bi"
					/>

					<img
						src={mass
						}
						className="bio"
					/>
				</div>
			</div>

		</Spin>
	);
};

export default Streaming;
