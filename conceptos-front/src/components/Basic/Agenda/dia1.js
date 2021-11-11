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
import ricardo2 from '../../../assets/expo/ricardo2.jpg';


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
				inicio="08:30"
				fin="08:35"
				tematica="Bienvenida"
				moderador="Dr. Mikel Urquiza"
				speaker2="Dr. Alonso Miguel"
				cargo1="Miembro del Comité de Postgrado en Medicina de Urgencia 
				de la Pontificia Universidad Católica de Chile. Director CONCEPTOS UC 2021"
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
				id={2}
				grey=""
				inicio="08:35"
				fin="08:55"
				tematica="Consejos simples para mejorar el manejo del PCR "
				speaker2="Dr. Ricardo Bañuelos, México"
				imgSpeaker2={ricardo}
				cargo2="Especialista en Medicina de Emergencias Hospital de Traumatología y Ortopedia Dr. y Gral. Rafael Moreno Valle.
				Adscrito al servicio de Urgencias en Instituto Mexicano del Seguro Social Certificado PHTS, ACLS, ATLS, USLS.
				Profesor adjunto de residentes en urgencias."
			/>

			<RowSpeaker
				setSaveData={setSaveData}
				abrirCerrar={abrirCerrar}
				state={state}
				id={3}
				grey="grey"
				inicio="08:55"
				fin="09:10"
				tematica="Trombolisis en PCR: ¿Cuándo, cómo y por qué?"
				speaker2="Dr. Alonso Miguel"
				imgSpeaker2={alonso}
				cargo2="Especialista en Medicina de Urgencia
				Diplomado en Docencia Universitaria – PUC
				Instructor en Simulación – IMS"
			/>

			<RowSpeaker
				setSaveData={setSaveData}
				abrirCerrar={abrirCerrar}
				state={state}
				id={4}
				grey=""
				inicio="09:10"
				fin="09:20"
				tematica="¿Salina o balanceadas?, fluidos en la reanimación"
				speaker2="Dr. Wilfredo Gómez, Costa Rica"
				cargo2="Médico Especialista en Medicina de Urgencia
				Asistente Especialista en Emergencias en Caja Costarricense De Seguro Social"
				imgSpeaker2={wilfredo}
			/>

			<RowSpeaker
				setSaveData={setSaveData}
				abrirCerrar={abrirCerrar}
				state={state}
				id={5}
				grey="grey"
				inicio="09:20"
				fin="09:30"
				tematica="Reanimando al Agente Topo"
				speaker2="Dr. Óscar Navea"
				cargo2="Especialista en Medicina de Urgencia
				Jefe de Pregrado, Profesor Asistente UC	"
				imgSpeaker2={oscar}
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
				id={6}
				grey=""
				inicio="09:50"
				fin="10:20"
				tematica="Mesa redonda"
				moderador="Dr. Mikel Urquiza"
				cargo1="Miembro del Comité de Postgrado en Medicina de Urgencia 
				de la Pontificia Universidad Católica de Chile. Director CONCEPTOS UC 2021"
				imgSpeaker1={mikel}
				speaker2="Dr. Ricardo Bañuelos"
				speaker3="Dr. Pablo. Aguilera "
				speaker4="Dr. Wilfredo. Gómez "
				speaker5="Dr. Óscar. Navea"
				cargo2="Especialista en Medicina de Emergencias Hospital de Traumatología y Ortopedia Dr. y Gral. Rafael Moreno Valle.
				Adscrito al servicio de Urgencias en Instituto Mexicano del Seguro Social
				Certificado PHTS, ACLS, ATLS, USLS.
				Profesor adjunto de residentes en urgencias."
				cargo3="Especialista en Medicina de Urgencia
				Jefe de Sección Medicina de Urgencia UC
				Profesor Asistente"
				cargo4="Médico Especialista en Medicina de Urgencia
				Asistente Especialista en Emergencias en Caja Costarricense De Seguro Social"
				cargo5="Especialista en Medicina de Urgencia
				Jefe de Pregrado, Profesor Asistente UC	"
				imgSpeaker2={ricardo}
				imgSpeaker3={pablo}
				imgSpeaker4={wilfredo}
				imgSpeaker5={oscar}
			/>

			<RowSpeaker
				setSaveData={setSaveData}
				abrirCerrar={abrirCerrar}
				state={state}
				id={7}
				grey="grey"
				inicio="10:20"
				fin="10:25"
				tematica="Intervención"

			/>

			<RowSpeaker
				setSaveData={setSaveData}
				abrirCerrar={abrirCerrar}
				state={state}
				id={8}
				grey=""
				inicio="10:25"
				fin="10:35"
				tematica="Sociedades de Urgencia - Impacto en manejo de la pandemia"
				speaker2="Dr. Luis Enberg"
				cargo2="Especialista en Medicina de Urgencia
				Jefe Servicio de Urgencia Hospital UC Christus
				Instructor"
				imgSpeaker2={luis}
			/>

			<RowSpeaker
				setSaveData={setSaveData}	
				abrirCerrar={abrirCerrar}
				state={state}
				id={9}
				grey="grey"
				inicio="10:35"
				fin="10:45"
				tematica="Salud Mental y Personal de Urgencia"
				speaker2="Dr. José Miguel Vargas"
				cargo2="ChileEspecialista de Medicina de Urgencia
				Académico del Programa de Medicina Urgencia UC"
				imgSpeaker2={jose}
			/>

			<RowSpeaker
				setSaveData={setSaveData}
				abrirCerrar={abrirCerrar}
				state={state}
				id={10}
				grey=""
				inicio="10:45"
				fin="11:00"
				tematica="Avalancha de Papers - ¿Cómo elijo y sobrevivo?"
				speaker2="Dra. Bárbara Lara"
				cargo2="Especialista en Medicina de Urgencia
				Jefa de Investigación Sección de Medicina de Urgencia UC
				Profesor Asistente"
				imgSpeaker2={barbara}
			/>

			<RowSpeaker
				setSaveData={setSaveData}
				abrirCerrar={abrirCerrar}
				state={state}
				id={11}
				grey="grey"
				inicio="11:00"
				fin="11:15"
				tematica="Tratamientos que si sirven en COVID-19"
				speaker2="Dra. Daniela Santander "
				speaker3="Dr. Mikel Urquiza"
				cargo3="Miembro del Comité de Postgrado en Medicina de Urgencia 
				de la Pontificia Universidad Católica de Chile. Director CONCEPTOS UC 2021
				"
				imgSpeaker3={mikel}
				imgSpeaker2={daniela}
				cargo2="Becada Medicina de Urgencia
				Pontificia Universidad Católica de Chile"
			/>

			<RowSpeaker
				setSaveData={setSaveData}
				abrirCerrar={abrirCerrar}
				state={state}
				id={12}
				grey=""
				inicio="11:15"
				fin="11:30"
				tematica="Docencia Bedside y COVID19"
				speaker2="Dra. Sofía Basauri"
				cargo2="Médico especialista en Medicina de Urgencia
				Magister en Educación Médica
				Académica Programa Medicina de Urgencia UC
				"
				imgSpeaker2={sofia}
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
				speaker2="Dr. Jerónimo Rojas"
				cargo2="Médico especialista en Urgencia, Marcoleta,
				Instructor adjunto Sección Urgencia UC, Equipo de Simulación UC
				"
				imgSpeaker2={jeronimo}
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
				speaker2="Dra. Aliosha Sáez "
				cargo2="Becada Medicina de Urgencia
				Pontificia Universidad Católica de Chile"
				imgSpeaker2={aliosha}
				speaker3="Dr. Jerónimo Rojas"
				cargo3="Médico especialista en Urgencia, Marcoleta,
				Instructor adjunto Sección Urgencia UC, Equipo de Simulación UC
				"
				imgSpeaker3={jeronimo}
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
				speaker2="Dr. Ludwig Von Plessing"
				cargo2="Médico especialista en Urgencia, Hospital Sótero del Río y Clínica San Carlos de Apoquindo
				Instructor adjunto Sección Urgencia UC, Equipo de Simulación UC
				"
				imgSpeaker2={ludwin}
				speaker3="Dr. Ricardo Alvarado"
				cargo3="Becado Medicina de Urgencia
				Pontificia Universidad Católica de Chile"
				imgSpeaker3={ricardo2}
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
				speaker2="Dr. José Walker "
				speaker3="Dr. Pablo Aguilera"
				cargo3="Especialista en Medicina de Urgencia
				Jefe de Sección Medicina de Urgencia UC
				Profesor Asistente"
				imgSpeaker3={pablo}
				imgSpeaker2={josew}
				cargo2="Becado Medicina de Urgencia
				Pontificia Universidad Católica de Chile
				"
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
				speaker2="Dr. Jorge Musso"
				cargo2="Médico especialista en Urgencia, Hospital Sótero del Río
				Instructor Adjunto Sección Urgencia UC, Equipo de Simulación UC
				"
				imgSpeaker2={jorge}
			/>
			<RowSpeaker
				setSaveData={setSaveData}
				abrirCerrar={abrirCerrar}
				state={state}
				id={19}
				grey="grey"
				inicio="13:00"
				fin="14:30"
				tematica="Receso de Almuerzo - Simposio Boehringer - Ingelheim 'Trombolisis en ataque cerebrovascular'"
				speaker2="Dr. Alejandro Brunser"
				cargo2="Médico Neurólogo, Unidad de Tratamiento de Ataque Cerebrovascular de Clínica Alemana (UTAC)"
				imgSpeaker2={alejandro}
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
				speaker2="Dr. Tomás Villén Villegas, ESPAÑA"
				cargo2="Profesor Asociado. Director del currículo de ultrasonido en el punto de atención. Universidad Francisco de Vitoria. Madrid. Presidente de la Sección de Ecografía de la Sociedad Española de Medicina de Urgencias, Secretario General de Winfocus"
				imgSpeaker2={tomas}
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
				speaker2="Dr. Felipe Riquelme"
				cargo2="Fellow ultrasonido clínico   Urgenciólogo  UC"
				imgSpeaker2={felipe}
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
				speaker2="Dr. Carlos Basaure"
				cargo2="Jefe de Programa de Postítulo Sección Urgencia UC"
				imgSpeaker2={carlos}
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
				speaker2="Dr. Hans Clausdorff"
				cargo2=" Miembro Comité de Postgrado Sección Medicina de Urgencia
				Magister Educación ©"
				imgSpeaker2={hans}
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
				imgSpeaker2={alonso}
				cargo2="Especialista en Medicina de Urgencia
				Diplomado en Docencia Universitaria – PUC
				Instructor en Simulación – IMS"
				speaker3="Dr. Carlos Basaure"
				cargo3="Jefe de Programa de Postítulo Sección Urgencia UC"
				imgSpeaker3={carlos}
				speaker4="Dr. Tomás Villén Villegas, ESPAÑA"
				cargo4="Profesor Asociado. Director del currículo de ultrasonido en el punto de atención. Universidad Francisco de Vitoria. Madrid. Presidente de la Sección de Ecografía de la Sociedad Española de Medicina de Urgencias, Secretario General de Winfocus"
				imgSpeaker4={tomas}

			/>
			<RowSpeaker
				setSaveData={setSaveData}
				abrirCerrar={abrirCerrar}
				state={state}
				id={26}
				grey=""
				inicio="16:30"
				fin="16:50"
				tematica="Biomérieux: Film Array"
				speaker2="Dr. Mikel Urquiza"
				cargo2="Miembro del Comité de Postgrado en Medicina de Urgencia 
				de la Pontificia Universidad Católica de Chile. Director CONCEPTOS UC 2021
				"
				imgSpeaker2={mikel}
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
				speaker2="Dr. Wilfredo Gómez, Costa Rica"
				cargo2="Médico Especialista en Medicina de Urgencia
				Asistente Especialista en Emergencias en Caja Costarricense De Seguro Social
				"
				imgSpeaker2={wilfredo}
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
