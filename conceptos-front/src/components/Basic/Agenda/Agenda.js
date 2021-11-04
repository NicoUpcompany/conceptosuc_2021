import React, { useState } from "react";

import Dia1 from "./dia1";
import Dia2 from "./dia2";


import "./Agenda.scss";

const Agenda = (props) => {
	const [dia, setDia] = useState(12);
	const { agendaTime, state, setSaveData } = props;

	const abrirCerrar = (raw, flecha) => {
		try {
			const doc = document.getElementById(raw);
			const doc2 = document.getElementById(flecha);
			if (doc.style.display === "none") {
				doc2.style.transform = "rotate(360deg)";
				doc2.style.transitionDuration = "1s";
				doc.style.display = "block";
				doc.style.transitionDuration = "2s";
			} else {
				doc2.style.transform = "rotate(180deg)";
				doc.style.display = "none";
				doc2.style.transitionDuration = "1s";
				doc.style.transitionDuration = "1s";
			}
		} catch (error) {
			console.log("error");
		}
	};

	return (
		<>
			<div className="contenedorAgenda" id="agenda">
				<div className="agendap">
					<div className="days">
						<button id="12" className={dia === 12 ? "clase" : ""} onClick={() => setDia(12)}>
							<span> Viernes 12 de Noviembre</span>
						</button>
						<button id="13" className={dia === 13 ? "clase" : ""} onClick={() => setDia(13)}>
							<span> Sábado 13 de Noviembre</span>
						</button>
					</div>
					{dia === 12 ? <Dia1 setSaveData={setSaveData} abrirCerrar={abrirCerrar} state={state} /> : null}
					{dia === 13 ? <Dia2 setSaveData={setSaveData} abrirCerrar={abrirCerrar} state={state} /> : null}

				</div>
			</div>
		</>
	);
};

export default Agenda;
