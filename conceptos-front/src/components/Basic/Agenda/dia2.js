/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from 'react-router-dom'
import FreeBreakfastIcon from "@material-ui/icons/FreeBreakfast";
import { RowSpeaker } from "./RowSpeaker";
import mikel from '../../../assets/expo/mikel.jpg';
import alonso from '../../../assets/expo/alonso.png';
import ricardo from '../../../assets/expo/ricardo.jpg';
import wilfredo from '../../../assets/expo/wilfredo.jpg';
import oscar from '../../../assets/expo/oscar.png';
import pablo from '../../../assets/expo/pablo.png';
import josew from '../../../assets/expo/josew.png';
import luis from '../../../assets/expo/luis.jpg';
import jose from '../../../assets/expo/jose.png';
import aliosha from '../../../assets/expo/aliosha.png';
import jeronimo from '../../../assets/expo/jeronimo.png';
import barbara from '../../../assets/expo/barbara.jpg';
import daniela from '../../../assets/expo/daniela.jpg';
import sofia from '../../../assets/expo/sofia.jpg';
import ludwin from '../../../assets/expo/ludwin.png';
import jorge from '../../../assets/expo/jorge.png';
import alejandro from '../../../assets/expo/alejandro.png';
import tomas from '../../../assets/expo/tomas.jpg';
import felipe from '../../../assets/expo/felipe.png';
import carlos from '../../../assets/expo/carlos.png';
import hans from '../../../assets/expo/hand.png';
import cristo from '../../../assets/expo/cristo.png';
import cristian from '../../../assets/expo/cristian.png';
import rolando from '../../../assets/expo/rolando.png';
import felipem from '../../../assets/expo/felipem.png';
import allan from '../../../assets/expo/allan.png';
import drpo from '../../../assets/expo/drpo.png';
import maria from '../../../assets/expo/maria.png';
import renato from '../../../assets/expo/renato.png';
import carolina from '../../../assets/expo/carolina.png';
import daniel from '../../../assets/expo/daniel.jpg';
import viera from '../../../assets/expo/viera.jpg';
import cristians from '../../../assets/expo/cristians.png';
import sofiar from '../../../assets/expo/sofiar.jpg';
import ismael from '../../../assets/expo/ismael.png';


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
				{/* <Link
					className='btn2'
					to='/sala2'
				>VER CURSO AQUÍ</Link> */}
			</div>

			<RowSpeaker
				setSaveData={setSaveData}
				abrirCerrar={abrirCerrar}
				state={state}
				id={29}
				grey="grey"
				inicio="08:30"
				fin="08:35"
				tematica="Bienvenida"
				moderador="Dr. Mikel Urquiza"
				speaker2="Dr. Alonso Miguel"
				cargo1="Miembro del Comité de Postgrado en Medicina de Urgencia 
				de la Pontificia Universidad Católica de Chile. Director CONCEPTOS 2021"
				cargo2="Especialista en Medicina de Urgencia
				Diplomado en Docencia Universitaria – PUC
				Instructor en Simulación – IMS"
				imgSpeaker1={mikel}
				imgSpeaker2={alonso}
			/>
			<RowSpeaker
				setSaveData={setSaveData}
				abrirCerrar={abrirCerrar}
				state={state}
				id={30}
				grey=""
				inicio="08:35"
				fin="08:55"
				tematica="Intoxicación por alcoholes (más) tóxicos"
				speaker2="Dr. Cristopher Opazo"
				cargo2="Médico Urgenciólogo titulado UC, 
				instructor adjunto, Coordinador CASR"
				imgSpeaker2={cristo}
			/>
			<RowSpeaker
				setSaveData={setSaveData}
				abrirCerrar={abrirCerrar}
				state={state}
				id={31}
				grey="grey"
				inicio="08:55"
				fin="09:10"
				tematica="Carbón Activado: ¿Cuándo? ¿Cómo? ¿Donde?"
				speaker2="Dr. Cristian Osores "
				speaker3="Dr. Óscar Navea"
				cargo3="Especialista en Medicina de Urgencia
				Jefe de Pregrado, Profesor Asistente UC"
				cargo2="Becado Medicina de Urgencia
				Pontificia Universidad Católica de Chile"
				imgSpeaker2={cristian}
				imgSpeaker3={oscar}
			/>
			<RowSpeaker
				setSaveData={setSaveData}
				abrirCerrar={abrirCerrar}
				state={state}
				id={32}
				grey=""
				inicio="09:10"
				fin="09:20"
				tematica="Abstinencia OH - Algo de lo que tenemos que hablar"
				speaker2="Dr. Rolando Valenzuela, USA"
				cargo2="Médico de Emergencias en Stony Brook, NY 
				Profesor Clínico Asistente de Medicina de Emergencia, División de Medicina Internacional de Emergencia, Desarrollo de sistemas de trauma, Desarrollo de registros de trauma, Desarrollo de EM en sistemas de salud, medicina tropical
				"
				imgSpeaker2={rolando}
			/>
			<RowSpeaker
				setSaveData={setSaveData}
				abrirCerrar={abrirCerrar}
				state={state}
				id={33}
				grey="grey"
				inicio="09:20"
				fin="09:30"
				tematica="Diálisis en Intoxicaciones"
				speaker="Dr. Felipe Maluenda"
				cargo1="Chile"
			/>

			<div className="break">
				<div className="tiempo">
					<FreeBreakfastIcon className="caffe" /> <span>Break - Receso</span>
				</div>
				<div className="duracion">
					<p>09:30 - 09:50 hrs</p>
				</div>
			</div>

			<RowSpeaker
				setSaveData={setSaveData}
				abrirCerrar={abrirCerrar}
				state={state}
				id={34}
				grey=""
				inicio="09:30"
				fin="09:50"
				tematica="Mesa redonda"
				moderador="Dr. Óscar Navea"
				speaker="Dr. R. Valenzuela "
				speaker2="Dr. C. Opazo"
				speaker3="Dr. C. Osores "
				speaker4="Dr. F. Maluenda "
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
				id={35}
				grey="grey"
				inicio="10:20"
				fin="10:30"
				tematica="Intervención"
			/>
			<RowSpeaker
				setSaveData={setSaveData}
				abrirCerrar={abrirCerrar}
				state={state}
				id={36}
				grey=""
				inicio="10:30"
				fin="10:45"
				tematica="Twitterología - Los beneficios VS peligros de las RRSS"
				speaker="Dr. Hans Clausdorff "
				speaker2="Dr. Óscar Navea"
				cargo3="Chile"
				cargo2="Chile"
			/>

			<RowSpeaker
				setSaveData={setSaveData}
				abrirCerrar={abrirCerrar}
				state={state}
				id={37}
				grey="grey"
				inicio="10:45"
				fin="11:00"
				tematica="Mitos en COVID19: Aerosoles y VA"
				speaker="Dr. Allan Mix "
				cargo2="Chile"
			/>
			<RowSpeaker
				setSaveData={setSaveData}
				abrirCerrar={abrirCerrar}
				state={state}
				id={37}
				grey=""
				inicio="11:00"
				fin="11:15"
				tematica="Cómo generar contenido educativo en el mundo digital?"
				speaker="Dr. Carlos Basaure"
				cargo2="Chile"
			/>

			<RowSpeaker
				setSaveData={setSaveData}
				abrirCerrar={abrirCerrar}
				state={state}
				id={38}
				grey="grey"
				inicio="11:00"
				fin="11:15"
				tematica="Cómo generar contenido educativo en el mundo digital?"
				speaker="Dr. Carlos Basaure"
				cargo2="Chile"
			/>
			<RowSpeaker
				setSaveData={setSaveData}
				abrirCerrar={abrirCerrar}
				state={state}
				id={38}
				grey=""
				inicio="11:15"
				fin="11:30"
				tematica="Responsabilidad y Ética en RRSS en la era de las funas"
				speaker="Dr. Cristopher Polma "
				speaker2="Dr. Leonidas Rojas"
				cargo3="Chile"
				cargo2="Chile"
			/>

			<RowSpeaker
				setSaveData={setSaveData}
				abrirCerrar={abrirCerrar}
				state={state}
				id={39}
				grey="grey"
				inicio="11:30"
				fin="11:35"
				tematica="Intervención"
			/>

			<RowSpeaker
				setSaveData={setSaveData}
				abrirCerrar={abrirCerrar}
				state={state}
				id={40}
				grey=""
				inicio="11:35"
				fin="11:50"
				tematica="Doctor, hace 1 semana tuve mi quimio…"
				speaker="Dr. Mikel Urquiza "
				cargo2="Chile"
			/>
			<RowSpeaker
				setSaveData={setSaveData}
				abrirCerrar={abrirCerrar}
				state={state}
				id={41}
				grey="grey"
				inicio="11:50"
				fin="12:10"
				tematica="Paciente con Cáncer Grave: Emergencias oncológicas metabólicas"
				speaker="Dr. Óscar Navea "
				cargo2="Chile"
			/>
			<RowSpeaker
				setSaveData={setSaveData}
				abrirCerrar={abrirCerrar}
				state={state}
				id={42}
				grey=""
				inicio="12:10"
				fin="12:20"
				tematica="Sedación Paliativa en urgencia, nuestra responsabilidad"
				speaker="Dra. María Paz Soto "
				cargo2="Chile"
			/>
			<RowSpeaker
				setSaveData={setSaveData}
				abrirCerrar={abrirCerrar}
				state={state}
				id={43}
				grey="grey"
				inicio="12:20"
				fin="12:30"
				tematica="💩, tiene Cáncer: entregando malas noticias"
				speaker="Dr. Renato Varela"
				cargo2="Chile"
			/>
			<RowSpeaker
				setSaveData={setSaveData}
				abrirCerrar={abrirCerrar}
				state={state}
				id={44}
				grey=""
				inicio="12:30"
				fin="13:00"
				tematica="Voluntad anticipada y ajuste de esfuerzo terapéutico"
				speaker="Dra. Carolina Aguilera"
				cargo2="Chile"
			/>

			<div className="break">
				<div className="tiempo">
					<FreeBreakfastIcon className="caffe" /> <span>Receso de almuerzo</span>
				</div>
				<div className="duracion">
					<p>13:00 - 14:30</p>
				</div>
			</div>

			<RowSpeaker
				setSaveData={setSaveData}
				abrirCerrar={abrirCerrar}
				state={state}
				id={45}
				grey="grey"
				inicio="14:30"
				fin="14:40"
				tematica="Receso"
			/>
			<RowSpeaker
				setSaveData={setSaveData}
				abrirCerrar={abrirCerrar}
				state={state}
				id={46}
				grey=""
				inicio="14:40"
				fin="15:00"
				tematica="Enfrentamiento al niño politraumatizado"
				speaker="Dr. Daniel Ridelman"
				cargo2="Chile"
			/>

			<RowSpeaker
				setSaveData={setSaveData}
				abrirCerrar={abrirCerrar}
				state={state}
				id={47}
				grey="grey"
				inicio="15:00"
				fin="15:10"
				tematica="Decisiones de Vía Aérea en el Niño "
				speaker="Dra. Viera Morales "
				cargo2="Chile"
				speaker2="Dr. Christian Scheu"
				cargo3="Chile"
			/>

			<RowSpeaker
				setSaveData={setSaveData}
				abrirCerrar={abrirCerrar}
				state={state}
				id={48}
				grey=""
				inicio="15:10"
				fin="15:20"
				tematica="e-FAST en Niños "
				speaker="Dra. Sofía Rivera  "
				cargo2="Chile"
				speaker2="Dr. Felipe Riquelme"
				cargo3="Chile"
			/>

			<RowSpeaker
				setSaveData={setSaveData}
				abrirCerrar={abrirCerrar}
				state={state}
				id={49}
				grey="grey"
				inicio="15:20"
				fin="15:40"
				tematica="Fracturas en Niños - ¿Cuándo derivar y hospitalizar?"
				speaker="Dr. Ismael Cañete  "
				cargo2="Chile"
				speaker2="Dr. Mikel Urquiza"
				cargo3="Chile"
			/>

			<div className="break">
				<div className="tiempo">
					<FreeBreakfastIcon className="caffe" /> <span>Break - Receso</span>
				</div>
				<div className="duracion">
					<p>15:40 - 16:00</p>
				</div>
			</div>

			<RowSpeaker
				setSaveData={setSaveData}
				abrirCerrar={abrirCerrar}
				state={state}
				id={50}
				grey=""
				inicio="16:00"
				fin="16:30"
				tematica="Mesa redonda"
				speaker="D. Ridelman   "
				cargo2="Chile"
				speaker2="C. Scheu "
				cargo3="Chile"
				speaker3="F. Riquelme "
				cargo4="Chile"
				speaker4="Dr. I.Cañete"
				moderador="Dra. Viera Morales"
				cargo="Chile"
			/>

			<RowSpeaker
				setSaveData={setSaveData}
				abrirCerrar={abrirCerrar}
				state={state}
				id={51}
				grey="grey"
				inicio="16:30"
				fin="16:50"
				tematica="Reflexiones desde la Urgencia:  ¿Cuál es el futuro de la Medicina de Urgencia?"
				speaker="Dr. Pablo Aguilera F.  "
				cargo2="Chile"
				
			/>
			<RowSpeaker
				setSaveData={setSaveData}
				abrirCerrar={abrirCerrar}
				state={state}
				id={52}
				grey=""
				inicio="16:50"
				fin="17:00"
				tematica="Micrófono Abierto desde México"
				speaker="Dr. Ricardo Bañuelos"
				cargo2="Chile"
				
			/>
			<RowSpeaker
				setSaveData={setSaveData}
				abrirCerrar={abrirCerrar}
				state={state}
				id={53}
				grey="grey"
				inicio="17:00"
				tematica="Cierre Conferencia"
			/>
		</>
	);
};

export default Dia2;
