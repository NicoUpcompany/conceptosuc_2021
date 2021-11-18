/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { Menu, Button } from "antd";
import { useHistory } from "react-router-dom";
import {ArrowLeftOutlined} from '@ant-design/icons'
import "./OnDemand.scss";

export const Viernes = () => {

	const history = useHistory();

	const volver = () => {
		history.push("/streaming");
	}
	return (
		<>
			<div className="fondo">
				<div className='header3' style={{ marginBottom: '10px' }}>
					<div className="logo3">
						<h1>CONCEPTOS
							<span className='uc'> UC</span>
						</h1>
						<Button
							type='primary'
							onClick={volver}
							style={{
								backgroundColor:'#247ce0',
								borderColor:'#247ce0',
								color:'white'
							}}
						>
							<ArrowLeftOutlined />
							Volver Agenda
						</Button>
					</div>
				</div>
				<div className="background-streaming">
					<div className="contenedorStreaming">
						<div className="col1" id="col1">

							<div className="streaming">
								<iframe
									title="streaming"
									width="560"
									height="315"
									className="transmission"
									src="https://player.vimeo.com/video/644536208?h=1609f15c6e"
									frameBorder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
								></iframe>
							</div>
						</div>
					</div>


				</div>
			</div>
			{/* <Footer setSaveData={setSaveData} /> */}
		</>
	);
};


