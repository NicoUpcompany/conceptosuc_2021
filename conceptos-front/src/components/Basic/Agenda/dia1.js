/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import { Link } from 'react-router-dom'
import FreeBreakfastIcon from "@material-ui/icons/FreeBreakfast";


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
				tematica="Bienvenida"
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
			<RowSpeaker
				setSaveData={setSaveData}
				abrirCerrar={abrirCerrar}
				state={state}
				id={4}
				grey=""
				inicio="08:55"
				fin="09:10"
				tematica="¿Salina o balanceadas?, fluidos en la reanimación"
				speaker="Dr. Wilfredo Gómez"
				cargo1="Costa Rica"
			/>
			<RowSpeaker
				setSaveData={setSaveData}
				abrirCerrar={abrirCerrar}
				state={state}
				id={5}
				grey="grey"
				inicio="09:10"
				fin="09:20"
				tematica="Reanimando al Agente Topo"
				speaker="Dr. Óscar Navea"
				cargo1="Chile"
			/>

			<div className="break">
				<div className="tiempo">
					<FreeBreakfastIcon className="caffe" /> <span>Coffee Break</span>
				</div>
				<div className="duracion">
					<p>09:30 - 09:50 hrs</p>
				</div>
			</div>

			<RowSpeaker
				setSaveData={setSaveData}
				abrirCerrar={abrirCerrar}
				state={state}
				id={6}
				grey=""
				inicio="09:20"
				fin="09:50"
				tematica="Mesa redonda"
				moderador="Dr. Mikel Urquiza"
				speaker="Dr. R. Bañuelos"
				speaker2="Dr. P. Aguilera "
				speaker3="Dr. W. Gómez "
				speaker4="Dr. O. Navea"
				cargo1="Chile"
				cargo2="Chile"
				cargo3="Chile"
				cargo4="Chile"
				cargo5="Chile"
			/>
			<RowSpeaker
				setSaveData={setSaveData}
				abrirCerrar={abrirCerrar}
				state={state}
				id={7}
				grey="grey"
				inicio="09:50"
				fin="10:20"
				tematica="Intervención"

			/>
			<RowSpeaker
				setSaveData={setSaveData}
				abrirCerrar={abrirCerrar}
				state={state}
				id={8}
				grey=""
				inicio="10:20"
				fin="10:25"
				tematica="Sociedades de Urgencia - Impacto en manejo de la pandemia"
				speaker="Dr. Luis Enberg"
				cargo1="Chile"

			/>
			<RowSpeaker
				setSaveData={setSaveData}
				abrirCerrar={abrirCerrar}
				state={state}
				id={9}
				grey="grey"
				inicio="10:25"
				fin="10:35"
				tematica="Salud Mental y Personal de Urgencia"
				speaker="Dr. José Miguel Vargas"
				cargo1="Chile"
			/>
			<RowSpeaker
				setSaveData={setSaveData}
				abrirCerrar={abrirCerrar}
				state={state}
				id={10}
				grey=""
				inicio="10:35"
				fin="10:45"
				tematica="Avalancha de Papers - ¿Cómo elijo y sobrevivo?"
				speaker="Dra. Bárbara Lara"
				cargo1="Chile"
			/>
			<RowSpeaker
				setSaveData={setSaveData}
				abrirCerrar={abrirCerrar}
				state={state}
				id={11}
				grey="grey"
				inicio="10:45"
				fin="11:00"
				tematica="Tratamientos que si sirven en COVID-19"
				speaker="Dra. Daniela Santander "
				speaker2="Dr. Mikel Urquiza"
				cargo2="Chile"
				cargo1="Chile"
			/>
			<RowSpeaker
				setSaveData={setSaveData}
				abrirCerrar={abrirCerrar}
				state={state}
				id={12}
				grey=""
				inicio="11:00"
				fin="11:15"
				tematica="Docencia Bedside y COVID19"
				speaker="Dra. Sofía Basauri"
				cargo1="Chile"
			/>
			<RowSpeaker
				setSaveData={setSaveData}
				abrirCerrar={abrirCerrar}
				state={state}
				id={13}
				grey="grey"
				inicio="11:30"
				fin="11:35"
				tematica="Intervención"

			/>
			<RowSpeaker
				setSaveData={setSaveData}
				abrirCerrar={abrirCerrar}
				state={state}
				id={14}
				grey=""
				inicio="11:35"
				fin="11:50"
				tematica="Primer Jinete del Apocalipsis: Cricotiroidotomía"
				speaker="Dr. Jerónimo Rojas"
				cargo1="Chile"
			/>
			<RowSpeaker
				setSaveData={setSaveData}
				abrirCerrar={abrirCerrar}
				state={state}
				id={15}
				grey="grey"
				inicio="11:50"
				fin="12:10"
				tematica="Drenaje de absceso periamigdalino, ¿en la urgencia o pabellon?"
				speaker="Dra. Aliosha Sáez "
				speaker2="Dr. Jerónimo Rojas"
				cargo2="Chile"
				cargo1="Chile"
			/>
			<RowSpeaker
				setSaveData={setSaveData}
				abrirCerrar={abrirCerrar}
				state={state}
				id={16}
				grey=""
				inicio="12:10"
				fin="12:20"
				tematica="Segundo Jinete del Apocalipsis: Toracotomía de resucitación"
				speaker="Dr. Ludwig Von Plessing"
				cargo1="Chile"
			/>
			<RowSpeaker
				setSaveData={setSaveData}
				abrirCerrar={abrirCerrar}
				state={state}
				id={17}
				grey="grey"
				inicio="12:20"
				fin="12:30"
				tematica="Solo por hoy: Pide tu ECMO Delivery"
				speaker="Dr. José Walker "
				speaker2="Dr. Pablo Aguilera"
				cargo2="Chile"
				cargo1="Chile"
			/>

			<RowSpeaker
				setSaveData={setSaveData}
				abrirCerrar={abrirCerrar}
				state={state}
				id={18}
				grey=""
				inicio="12:30"
				fin="13:00"
				tematica="Tercer Jinete del Apocalipsis: Cesárea de Resucitación"
				speaker="Dr. Jorge Musso"
				cargo1="Chile"
			/>
			<RowSpeaker
				setSaveData={setSaveData}
				abrirCerrar={abrirCerrar}
				state={state}
				id={19}
				grey="grey"
				inicio="12:30"
				fin="13:00"
				tematica="Receso de Almuerzo - Simposio Boheringer - Ingelheim 'Trombolitis en ataque cerebrovascular'"
				speaker="Dr. Alejandro Brunser"
				cargo1="Chile"
			/>

			<RowSpeaker
				setSaveData={setSaveData}
				abrirCerrar={abrirCerrar}
				state={state}
				id={20}
				grey=""
				inicio="14:30"
				fin="14:40"
				tematica="Intervención"
			/>

			<RowSpeaker
				setSaveData={setSaveData}
				abrirCerrar={abrirCerrar}
				state={state}
				id={21}
				grey="grey"
				inicio="14:40"
				fin="15:00"
				tematica="EcoCardio en la Urgencia - algunos tips"
				speaker="Dr. Tomás Villén"
				cargo1="España"
			/>

			<RowSpeaker
				setSaveData={setSaveData}
				abrirCerrar={abrirCerrar}
				state={state}
				id={22}
				grey=""
				inicio="15:00"
				fin="15:10"
				tematica="USC en Disnea, ¿mejor que la Rx?"
				speaker="Dr. Felipe Riquelme"
				cargo1="Chile"
			/>

			<RowSpeaker
				setSaveData={setSaveData}
				abrirCerrar={abrirCerrar}
				state={state}
				id={23}
				grey="grey"
				inicio="15:10"
				fin="15:20"
				tematica="Ultrasonido portátil: Pros vs Cons "
				speaker="Dr. Carlos Basaure"
				cargo1="Chile"
			/>

			<RowSpeaker
				setSaveData={setSaveData}
				abrirCerrar={abrirCerrar}
				state={state}
				id={24}
				grey=""
				inicio="15:20"
				fin="15:40"
				tematica="Chile número 1... en Colelitiasis "
				speaker="Dr. Hans Clausdorff"
				cargo1="Chile"
			/>

			<div className="break">
				<div className="tiempo">
					<FreeBreakfastIcon className="caffe" /> <span>Break - Receso</span>
				</div>
				<div className="duracion">
					<p>15:40 - 16:00 hrs</p>
				</div>
			</div>


			<RowSpeaker
				setSaveData={setSaveData}
				abrirCerrar={abrirCerrar}
				state={state}
				id={25}
				grey="grey"
				inicio="16:00"
				fin="16:30"
				tematica="Conversatorio - Ultrasonido Clínico: Dr. Carlos Basaure y Dr. Tomás Villén "
				speaker="Dr. Alonso Miguel"
				cargo1="Chile"
			/>
			<RowSpeaker
				setSaveData={setSaveData}
				abrirCerrar={abrirCerrar}
				state={state}
				id={26}
				grey=""
				inicio="16:30"
				fin="16:50"
				tematica="Biomerieux: Film Array"
				speaker="Dr. Mikel Urquiza"
				cargo1="Chile"
			/>
			
			<RowSpeaker
				setSaveData={setSaveData}
				abrirCerrar={abrirCerrar}
				state={state}
				id={27}
				grey="grey"
				inicio="16:50"
				fin="17:00"
				tematica="Micrófono Abierto desde Costa Rica"
				speaker="Dr. Wilfredo Gómez"
				cargo1="Costa Rica"
			/>
			
			<RowSpeaker
				setSaveData={setSaveData}
				abrirCerrar={abrirCerrar}
				state={state}
				id={28}
				grey=""
				inicio="17:00"
				fin=""
				tematica="Cierre jornada"
			/>
			{/* <div className="row4 grey  border modulo">
				<div className="tiempo">
				<p>Modulo 5 </p>
				</div>
				<div className="plenario">
					<p>Asma Bronquial</p>
				</div>
			</div> */}



		</>
	);
};

export default Dia1;
