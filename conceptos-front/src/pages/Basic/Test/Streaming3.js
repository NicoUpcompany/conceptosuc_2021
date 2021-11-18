/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useCallback } from "react";
import { Spin, Menu, notification } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { useHistory, Link } from "react-router-dom";
import jwtDecode from "jwt-decode";
import $ from "jquery";
import { isMobile } from "react-device-detect";

import { getAccessTokenApi } from "../../../api/auth";
import { eventApi } from "../../../api/events";

import Footer from "../../../components/Basic/Footer/Footer";
import Socket from '../../../utils/socket'

import "./Streaming2.scss";

import { Test } from "./Test";
const { SubMenu } = Menu;

const Streaming3 = () => {
	const history = useHistory();
	const [testStatus, setTestStatus] = useState(false);
	const [activeTest, setActiveTest] = useState(false);
	const [timeFinish, setTimeFinish] = useState();
	const [loading, setLoading] = useState(false);
	const [token, setToken] = useState(null);
	const [user, setUser] = useState();
	const [current, setCurrent] = useState("mail");
	const [saveData, setSaveData] = useState(0);
	const [initTest, setInitTest] = useState(false);

	useEffect(() => {
		setLoading(true);	
		
		Socket.emit('CONNECT_PRUEBA');

		Socket.on('START_TEST',(value)=>{
			if(value){
				setInitTest(true)
			}else{
				setInitTest(false);
			}
		})

		let interval;
		if (!isMobile) {
			$(window).scroll(function () {
				const distanceY = window.pageYOffset || document.documentElement.scrollTop;
				const shrinkOn = 550;
				if (distanceY > shrinkOn) {
					$(".transmission2").addClass("scroll");
				} else {
					$(".transmission2").removeClass("scroll");
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
				setTestStatus(decodedToken.test);
				setTimeFinish(decodedToken.finishTest);
				setActiveTest(decodedToken.startTest);
				interval = setInterval(() => {
					// getTestsStatus(auxToken);
				}, 5000);
			}
		}
		setTimeout(() => {
			setLoading(false);
		}, 2000);
		return () => clearInterval(interval);
	}, [timeFinish, testStatus, activeTest]);


	const antIcon = <LoadingOutlined spin />;

	return (
		<Spin spinning={loading} size="large" tip="Cargando..." indicator={antIcon}>
			<div className="streaming2-container fondo">
				<div className='header3' style={{ marginBottom: '10px' }}>
					<div className="logo3">
						<h1>CONCEPTOS
							<span className='uc'> UC</span>
						</h1>
					</div>
				</div>
				<div className='col'>

				</div>
				{
					initTest
					? <div className="container">
						<Test
							testStatus={testStatus}
							setTestStatus={setTestStatus}
							user={user}
							setUser={setUser}
							token={token}
							setToken={setToken}
							setActiveTest={setActiveTest}
							activeTest={activeTest}
							timeFinish={timeFinish}
							setTimeFinish={setTimeFinish}
						/>
					</div>
					: <div className="container">
						<h2>La prueba no se encuentra hab</h2>
					</div>
				}
				
			</div>
			{/* <Footer setSaveData={setSaveData} /> */}
		</Spin>
	);
};

export default Streaming3;
