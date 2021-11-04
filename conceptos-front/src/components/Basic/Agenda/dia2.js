/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from 'react-router-dom'
import FreeBreakfastIcon from "@material-ui/icons/FreeBreakfast";
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
				speaker="Dr. Alonso Miguel"
				cargo1="Chile"
				cargo2="Chile"
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
				speaker="Dr. Cristopher Opazo"
				cargo1="Chile"
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
				speaker="Dr. Cristian Osores "
				speaker2="Dr. Óscar Navea"
				cargo2="Chile"
				cargo1="Chile"
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
				speaker="Dr. Rolando Valenzuela "
				cargo1="Chile"
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
