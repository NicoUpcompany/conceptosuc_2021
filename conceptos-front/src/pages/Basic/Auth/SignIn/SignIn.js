/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import $ from "jquery";
import { useHistory } from "react-router-dom";
import jwtDecode from "jwt-decode";
import moment from "moment";
import banner from '../../../../assets/images/banner.jpg';
import banner2 from '../../../../assets/images/banner2.jpg';
import escuela from '../../../../assets/images/escuela.jpg';

import { getTime } from "../../../../api/time";
import { eventApi } from "../../../../api/events";
import { getAccessTokenApi } from "../../../../api/auth";
import { getEventOptionsApi } from "../../../../api/Admin/eventOptions";
import { getSignInApi, getSignInImageApi } from "../../../../api/Admin/singIn";
import FormLogin from "../../../../components/Basic/LoginForm/LoginForm";
import Socket from "../../../../utils/socket";

import logoBlanco from '../../../../assets/images/stand/logo.png'

import "./SignIn.scss";

const SignIn = () => {
	const history = useHistory();

	const [loading, setLoading] = useState(false);
	const [saveData, setSaveData] = useState(false);
	const [state, setState] = useState(true);
	const [logo, setLogo] = useState("");
	const [options, setOptions] = useState({
		title: "",
		text: "",
		logo: "",
		widthLogo: "500px",
		heightLogo: "auto",
		background: "",
		buttonBackground: "default",
		buttonBackgroundHover: "default",
		titlesColors: "default",
		textsColors: "default",
		chronometerColors: "default",
		statusCode: false,
		htmlCode: "",
		cssCode: "",
		jsCode: "",
	});
	const [html, setHtml] = useState("");
	const [css, setCss] = useState("");
	const [js, setJs] = useState("");

	useEffect(() => {
		getIndex();
		const token = getAccessTokenApi();
		if (token !== null) {
			const decodedToken = jwtDecode(token);
			if (decodedToken) {
				const user = {
					id: decodedToken.id,
					route: window.location.pathname,
				};
				Socket.emit("UPDATE_ROUTE", user);
			}
		}
	}, []);

	useEffect(() => {
		let action = "pageView";
		let description = "";
		switch (saveData) {
			case 1:
				action = "Link";
				description = "Aún no estoy registrado";
				break;
			case 2:
				action = "Boton";
				description = "Ingresar";
				break;
			default:
				break;
		}
		const data = {
			conectionType: window.conectionType,
			page: "/iniciarsesion",
			stand: "",
			action,
			description,
			userId: localStorage.getItem("userID"),
		};
		eventApi(data);
		if (saveData === 1) {
			history.push("/registro");
		}
		if (saveData === 2) {
			setTimeout(()=>{
				history.push("/streaming");
			},2000)
		}
	}, [saveData]);

	useEffect(() => {
		getConfig();
		let interval;
		getTime2(interval);
	}, []);

	const getTime2 = async (interval) => {
		try {
			const resp = await getTime();
			const timeApi = moment(resp.time).valueOf();
			$(".cronometro").each(function () {
				const $this = $(this);
				let now = timeApi;

				interval = setInterval(function () {
					const countDownDate = moment(resp.eventTime).valueOf();
					const distance = countDownDate - now;
					const days_t = Math.floor(distance / (1000 * 60 * 60 * 24));
					const hours_t = Math.floor(
						(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
					);
					const minutes_t = Math.floor(
						(distance % (1000 * 60 * 60)) / (1000 * 60)
					);
					const seconds_t = Math.floor(
						(distance % (1000 * 60)) / 1000
					);
					let days, m1, m2, hours, minutes, seconds;
					if (days_t < 10) {
						days = "0" + days_t;
					} else {
						m1 = String(days_t).substring(0, 1);
						m2 = String(days_t).substring(1, 2);
						days = m1 + m2;
					}
					if (hours_t < 10) {
						hours = "0" + hours_t;
					} else {
						m1 = String(hours_t).substring(0, 1);
						m2 = String(hours_t).substring(1, 2);
						hours = m1 + m2;
					}
					if (minutes_t < 10) {
						minutes = "0" + minutes_t;
					} else {
						m1 = String(minutes_t).substring(0, 1);
						m2 = String(minutes_t).substring(1, 2);
						minutes = m1 + m2;
					}
					if (seconds_t < 10) {
						seconds = "0" + seconds_t;
					} else {
						m1 = String(seconds_t).substring(0, 1);
						m2 = String(seconds_t).substring(1, 2);
						seconds = m1 + m2;
					}
					$this.empty();
					if (countDownDate > now) {
						$this.append(
							"<div><h1>" + days + "</h1><span>Días</span></div>"
						);
						$this.append(
							"<div><h1>" +
								hours +
								"</h1><span>Horas</span></div>"
						);
						$this.append(
							"<div><h1>" +
								minutes +
								"</h1><span>Minutos</span></div>"
						);
						$this.append(
							"<div><h1>" +
								seconds +
								"</h1><span>Segundos</span></div>"
						);
					} else {
						setState(false);
						clearInterval(interval);
					}
					now = moment(now).add(1, "seconds").valueOf();
				}, 1000);
			});
		} catch (exception) {
			console.log(exception);
		}
	};

	const getConfig = async () => {
		setLoading(false);
		const result = await getSignInApi();
		if (result.ok) {
			setHtml(result.signIn.htmlCode);
			setCss(result.signIn.cssCode);
			setJs(result.signIn.jsCode);
			setOptions({
				...options,
				title: result.signIn.title,
				text: result.signIn.text,
				widthLogo: result.signIn.widthLogo,
				heightLogo: result.signIn.heightLogo,
				buttonBackground: result.signIn.buttonBackground,
				buttonBackgroundHover: result.signIn.buttonBackgroundHover,
				titlesColors: result.signIn.titlesColors,
				textsColors: result.signIn.textsColors,
				chronometerColors: result.signIn.chronometerColors,
				statusCode: result.signIn.statusCode,
				htmlCode: result.signIn.htmlCode,
				cssCode: result.signIn.cssCode,
				jsCode: result.signIn.jsCode,
			});
			if (result.signIn.logo.length > 0) {
				const logoResult = await getSignInImageApi(result.signIn.logo);
				setLogo(logoResult);
			}
			if (result.signIn.background.length > 0) {
				const backgroundResult = await getSignInImageApi(
					result.signIn.background
				);
				var css = `
					.fondo .contenedorRegistro {
						background-image: url(${backgroundResult}) !important;
					}
					.campobutton button {
						background-color: ${result.signIn.buttonBackground} !important;
					}
					.campobutton button:hover:hover{
						background-color: ${result.signIn.buttonBackgroundHover} !important;
						color: white !important;
					}
					.fondo .contenedorRegistro .row .form h1 {
						color: ${result.signIn.titlesColors} !important;
					}
					.fondo .contenedorRegistro .row .form .login {
						color: ${result.signIn.textsColors} !important;
					}
					.fondo .contenedorRegistro .row .form .cronometro div {
						color: ${result.signIn.chronometerColors} !important;
					}
					.fondo .contenedorRegistro .row .form .cronometro div {
						color: ${result.signIn.chronometerColors} !important;
					}
					.fondo .contenedorRegistro .row .form .cronometro div h1 {
						color: ${result.signIn.chronometerColors} !important;
					}
					.fondo .contenedorRegistro .row .form .cronometro div span {
						color: ${result.signIn.chronometerColors} !important;
					}
					.MuiFilledInput-underline:hover:before {
						border-bottom: 1px solid ${result.signIn.buttonBackground} !important;
					}
					.MuiFilledInput-underline:focus:before {
						border-bottom: 1px solid ${result.signIn.buttonBackground} !important;
					}
					.MuiFilledInput-underline:before {
						border-bottom: 1px solid ${result.signIn.buttonBackground} !important;
					}
					.MuiFormLabel-root.Mui-focused {
						color: ${result.signIn.buttonBackgroundHover} !important
					}
					.MuiFilledInput-underline:after {
						border-bottom: 1px solid ${result.signIn.buttonBackgroundHover} !important;
					}
					.enlace {
						color: ${result.signIn.textsColors} !important;
					}
				`;
				var style = document.createElement("style");

				if (style.styleSheet) {
					style.styleSheet.cssText = css;
				} else {
					style.appendChild(document.createTextNode(css));
				}
				document.getElementsByTagName("head")[0].appendChild(style);
				setLoading(false);
			}
		}
	};

	const getIndex = async () => {
		const resp = await getEventOptionsApi();
		if (resp.ok) {
			if (
				window.location.pathname === "/" &&
				resp.optionsEvent.index === "signIn"
			) {
			} else {
				if (window.location.pathname === "/iniciarsesion") {
				} else {
					history.push("/registro");
				}
			}
		}
	};

	const antIcon = <LoadingOutlined spin />;

	return (
		<div className="container-sign-in">
			<Spin
				spinning={loading}
				size="large"
				tip="Cargando..."
				indicator={antIcon}
			>
				<div className="fondo">
					<div className="img-left">
						<img
							src={banner}
							className='desktop'
						/>

						<img
							src={banner2}
							className='movil'
						/>
					</div>
					<div className="contenedorRegistro">
						<div className="row">
							<div className="form">
								<div
									dangerouslySetInnerHTML={{
										__html: options.title,
									}}
								/>
								<div
									dangerouslySetInnerHTML={{
										__html: options.text,
									}}
								/>
								{state ? (

									<div className="cronometro">
										<div>
											<h1> </h1>
											<span>Día</span>
										</div>
										<div>
											<h1> </h1>
											<span>Hora</span>
										</div>
										<div>
											<h1> </h1>
											<span>Minutos</span>
										</div>
										<div>
											<h1> </h1>
											<span>Segundos</span>
										</div>
									</div>
								) : null}
								<div div className="card">
									<FormLogin
										setLoading={setLoading}
										setSaveData={setSaveData}
									/>
								</div>
							</div>
						</div>
						<div className='footer'>
							<img
								src={escuela}
							/>
						</div>
					</div>
				</div>
				
			</Spin>
		</div>
	);
};

export default SignIn;
