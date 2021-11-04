/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
 
import {Link} from 'react-router-dom'

import { RowSpeaker } from "./RowSpeaker";

const Dia2 = ({ setSaveData, abrirCerrar, state }) => {
	return (
		<>
			<div className="row4 border">
				<div className="tiempo">
					<p>Tiempo</p>
				</div>
				<div className="plenario">
					<p>Plenario</p>
				</div>
				<Link
					className='btn2'
					to='/sala2'
				>VER CURSO AQUÍ</Link>
			</div>

			<RowSpeaker
				setSaveData={setSaveData}
				abrirCerrar={abrirCerrar}
				state={state}
				id={11}
				grey="grey"
				inicio="08:20"
				fin="08:30"
				tematica="Presentación del módulo, introduce a los speaker."
				moderador="Dr. Fernando Iñiguez"
				speaker=""
				cargo1='Pediatra, especialista en enfermedades respiratorias infantiles de la PUC de Chile. Jefe del Servicio de Pediatría del Hospital Puerto Montt,  Docencia de Post Grado en Pediatría en la Universidad San Sebastián, Sede Patagonia.'
			/>	

			<div className="row4   border modulo">
				<div className="tiempo">
						<p>Modulo 4 </p>
					</div>
					<div className="plenario">
						<p>El lactante atópico, ¿Cliente frecuente?</p>
					</div>
			</div>
			 				
		</>
	);
};

export default Dia2;
