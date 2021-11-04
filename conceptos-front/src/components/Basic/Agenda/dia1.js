/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
 
import {Link} from 'react-router-dom'

import { RowSpeaker } from "./RowSpeaker";

const Dia1 = ({ setSaveData, abrirCerrar, state }) => {
	return (
		<>
			<div className="row4 border">
				<div className="tiempo">
					<p>Tiempo</p>
				</div>
				<div className="plenario">
					<p>Plenario</p>
				</div>
				{/* <Link
					className='btn2'
					to='/sala2'
				>VER CURSO AQUÍ</Link> */}
			</div>

			<RowSpeaker
				setSaveData={setSaveData}
				abrirCerrar={abrirCerrar}
				state={state}
				id={1}
				grey="grey"
				inicio="08:20"
				fin="08:30"
				tematica="Bienvenida "
				moderador="Dr. Mikel Urquiza"
                speaker="Dr. Alonso Miguel"
                cargo1="Chile"
                cargo2="Chile"
			/>	
			<RowSpeaker
				setSaveData={setSaveData}
				abrirCerrar={abrirCerrar}
				state={state}
				id={2}
				grey=""
				inicio="08:30"
				fin="08:35"
				tematica="Consejos simples para mejorar el manejo del PCR "
                speaker="Dr. Ricardo Bañuelos"
                cargo2="México"
			/>	
			<RowSpeaker
				setSaveData={setSaveData}
				abrirCerrar={abrirCerrar}
				state={state}
				id={3}
				grey="grey"
				inicio="08:35"
				fin="08:55"
				tematica="Trombolisis en PCR: ¿Cuándo, cómo y por qué?"
                speaker="Dr. Alonso Miguel"
                cargo1="Chile"


			/>	

			{/* <div className="row4   border modulo">
				<div className="tiempo">
						<p>Modulo 4 </p>
					</div>
					<div className="plenario">
						<p>El lactante atópico, ¿Cliente frecuente?</p>
					</div>
			</div> */}
			 				
		</>
	);
};

export default Dia1;
