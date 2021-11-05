/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from 'react-router-dom'
import FreeBreakfastIcon from "@material-ui/icons/FreeBreakfast";
import { RowSpeaker } from "./RowSpeaker";
import mikel from '../../../assets/expo/mikel.jpg';
import alonso from '../../../assets/expo/alonso.png';
import ricardo from '../../../assets/expo/ricardo.jpg';
import oscar from '../../../assets/expo/oscar.png';
import pablo from '../../../assets/expo/pablo.png';
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
				speaker2="Dr. Felipe Maluenda"
				cargo2="Becado Medicina de Urgencia
				Pontificia Universidad Católica de Chile"
				imgSpeaker2={cristian}
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
				speaker2="Dr. R. Valenzuela "
				speaker3="Dr. C. Opazo"
				speaker4="Dr. C. Osores "
				speaker5="Dr. F. Maluenda "
				cargo1="Especialista en Medicina de Urgencia
Jefe de Pregrado, Profesor Asistente UC"
				imgSpeaker1={oscar}
				cargo2="Médico de Emergencias en Stony Brook, NY 
Profesor Clínico Asistente de Medicina de Emergencia, División de Medicina Internacional de Emergencia, Desarrollo de sistemas de trauma, Desarrollo de registros de trauma, Desarrollo de EM en sistemas de salud, medicina tropical"
				imgSpeaker2={rolando}
				cargo3="Médico Urgenciólogo titulado UC, 
 instructor adjunto, Coordinador CASR"
				imgSpeaker3={cristo}
				cargo4="Becado Medicina de Urgencia
Pontificia Universidad Católica de Chile"
				imgSpeaker4={cristian}
				cargo5="Jefe Servicio de Urgencia Clínica San Carlos de Apoquindo UC Christus
Instructor Adjunto UC"
				imgSpeaker5={felipem}
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
				speaker2="Dr. Hans Clausdorff "
				speaker3="Dr. Óscar Navea"
				cargo3="Especialista en Medicina de Urgencia
Jefe de Pregrado, Profesor Asistente UC
"
				cargo2="Miembro Comité de Postgrado Sección Medicina de Urgencia
Magister Educación ©
				
"
				imgSpeaker2={hans}
				imgSpeaker3={oscar}
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
				speaker2="Dr. Allan Mix "
				cargo2="Instructor adj urgencia UC
Jefe servicio Medicina de urg Féliz Bulnes"
				imgSpeaker2={allan}
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
				speaker2="Dr. Carlos Basaure"
				cargo2="Especialista en Medicina de Urgencia, Jefe de Programa de Postítulo
Profesor Asistente, Hospital Sotero del Río - Marcoleta, Fellow en Ultrasonido Clínico – University of California Los Ángeles (UCLA)"
				imgSpeaker2={carlos}
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
				speaker2="Dr. Cristopher Polma "
				speaker3="Dr. Leonidas Rojas"
				cargo2="Urgenciólogo egresado del programa de medicina de urgencia de la universidad San Sebastián.
Actualmente jefe técnico del servicio de Urgencia del Hospital Las Higueras.
Docente colaborador de la universidad de Concepción"
				cargo3="Urgenciólogo egresado del programa de medicina de urgencia de la universidad San Sebastián.
Médico de urgencia del hospital de Curicó
Diplomado en ética, filosofía y medicina basada en la evidencia.
Docente del programa de medicina de urgencia de la Universidad Autónoma de Chile, sede Talca."
				imgSpeaker2={drpo}
				
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
				speaker2="Dr. Mikel Urquiza "
				cargo2="Miembro del Comité de Postgrado en Medicina de Urgencia 
				de la Pontificia Universidad Católica de Chile. Director CONCEPTOS 2021"
				imgSpeaker2={mikel}
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
				speaker2="Dr. Óscar Navea "
				cargo2="Especialista en Medicina de Urgencia
Jefe de Pregrado, Profesor Asistente UC"
				imgSpeaker2={oscar}
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
				speaker2="Dra. María Paz Soto "
				cargo2="Médico de Urgencia BUPA
Instructor adjunto UC"
				imgSpeaker2={maria}
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
				speaker2="Dr. Renato Varela"
				cargo2="Medico Jefe Servicio de Urgencia Clínica Alemana de Valdivia. 
Servicio de Salud Valdivia Pontificia Universidad Católica de Chile. "
				imgSpeaker2={renato}
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
				speaker2="Dra. Carolina Aguilera"
				cargo2="Medicina de Urgencia Hospital Sótero del Río"
				imgSpeaker2={carolina}
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
				speaker2="Dr. Daniel Ridelman"
				cargo2="Especialista en Medicina de Emergencia, Detroit Medical Center.
Profesor Clínico Asistente Universidad de Wayne State
Fundador y Profesor asistente de la subespecialidad de Medicina de Emergencia Internacional, Universidad de Wayne State."
				imgSpeaker2={daniel}
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
				speaker2="Dra. Viera Morales "
				cargo2="Jefe de Red de Urgencia UC- Christus Health. Instructor Adjunto.
 Jefa de urgencia Pediátrica Hospital Clínico UC"
				speaker3="Dr. Christian Scheu"
				cargo3="Pediatra, Intensivista, Jefe de Programa Medicina Intensiva Pediátrica UC, Profesor Asistente de Pediatría, Director Programa PALS UC
Miembro Comité de Postgrado Pediatría, PUC."
				imgSpeaker2={viera}
				imgSpeaker3={cristians}
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
				speaker2="Dra. Sofía Rivera  "
				cargo2="Residente Becada Medicina de Urgencia
Pontificia Universidad Católica de Chile"
				speaker3="Dr. Felipe Riquelme"
				cargo3="Medicina de Urgencia UC."
				imgSpeaker2={sofiar}
				imgSpeaker3={felipe}
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
				speaker2="Dr. Ismael Cañete  "
				cargo2="Médico Universidad de la Frontera y postgrado de Ortopedia y Traumatología UC, donde también realizó su Fellowship en Ortopedia y Traumatología Infantil. "
				speaker3="Dr. Mikel Urquiza"
				cargo3="Miembro del Comité de Postgrado en Medicina de Urgencia 
de la Pontificia Universidad Católica de Chile. Director CONCEPTOS 2021"
				imgSpeaker2={ismael}
				imgSpeaker3={mikel}
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
				speaker2="D. Ridelman   "
				cargo2="Especialista en Medicina de Emergencia, Detroit Medical Center.
Profesor Clínico Asistente Universidad de Wayne State
Fundador y Profesor asistente de la subespecialidad de Medicina de Emergencia Internacional, Universidad de Wayne State."
				imgSpeaker2={daniel}
				speaker3="C. Scheu "
				cargo3="Pediatra, Intensivista, Jefe de Programa Medicina Intensiva Pediátrica UC, Profesor Asistente de Pediatría, Director Programa PALS UC
Miembro Comité de Postgrado Pediatría, PUC."
				imgSpeaker3={cristians}
				speaker4="F. Riquelme "
				cargo4="Fellow ultrsonido clínico   Urgenciólogo  UC"
				imgSpeaker4={felipe}
		
				speaker5="Dr. I.Cañete"
				cargo5="Médico Universidad de la Frontera y postgrado de Ortopedia y Traumatología UC, donde también realizó su Fellowship en Ortopedia y Traumatología Infantil."
				imgSpeaker5={ismael}


				moderador="Dra. Viera Morales"
				cargo1="Jefe de Red de Urgencia UC- Christus Health. Instructor Adjunto.
 Jefa de urgencia Pediátrica Hospital Clínico UC"
				imgSpeaker1={viera}
		
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
				speaker2="Dr. Pablo Aguilera F.  "
				cargo2="Especialista en Medicina de Urgencia"
				imgSpeaker2={pablo}
				
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
				speaker2="Dr. Ricardo Bañuelos"
				cargo2="Especialista en Medicina de Emergencias Hospital de Traumatología y Ortopedia Dr. y Gral. Rafael Moreno Valle.
Adscrito al servicio de Urgencias en Instituto Mexicano del Seguro Social"
				imgSpeaker2={ricardo}
				
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
