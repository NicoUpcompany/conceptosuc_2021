import React from 'react'
import { Speaker } from './Speaker'
import flecha from "../../../assets/img/flecha.png";

export const RowSpeaker = ({ id, 
	grey, 
	inicio, 
	fin, 
	tematica, 
	moderador, 
	setSaveData, 
	abrirCerrar, 
	state, 
	tematica2, 
	empresa1, 
	empresa2, 
	empresa3, 
	empresa4, 
	empresa5, 
	empresa6, 
	empresa7, 
	cargo1, 
	cargo2, 
	cargo3, 
	cargo4, 
	cargo5, 
	cargo6, 
	cargo7, 
	speaker2, 
	speaker3, 
	speaker4, 
	speaker5, 
	speaker6, 
	speaker7, 
	imgSpeaker1, 
	imgSpeaker2, 
	imgSpeaker3, 
	imgSpeaker4, 
	imgSpeaker5, 
	imgSpeaker6, 
	imgSpeaker7 }) => {
	return (
		<div className={`row2 ${grey}`} id={`row${id}`} style={{ transitionDuration: "1s" }}>
			<div className="fondoRow">
				<div className="tiempo">
					<p>
						{inicio} <span>{inicio && "-"}</span> {fin} {fin && "hrs"}
					</p>
				</div>
				<div className="plenario">
					<p className="texto2">
						<img src={flecha} alt="" id={`flecha${id}`} onClick={() => abrirCerrar(`imagen${id}`, `flecha${id}`)} />
						{state ? null : (
							<a onClick={() => setSaveData(3)} className="conFondo">
								ENTRAR AL SALÓN{" "}
							</a>
						)}
					</p>

					<p className="texto1">
						<strong>{tematica}</strong>
					</p>
					<p className="texto1">
						{
							tematica2 &&
							<strong>{`"${tematica2}"`}</strong>
						}

					</p>
				</div>
			</div>
			<div className="imagenes" id={`imagen${id}`}>
				<div className="espacio"></div>
				<div className="imagen">
					{
						moderador &&
						<Speaker
							nombre={moderador}
							moderador={moderador}
							cargo={cargo1}
							empresa={empresa1}
							speaker={imgSpeaker1}
						/>
					}
					{
						speaker2 &&
						<Speaker
							nombre={speaker2}
							cargo={cargo2}
							empresa={empresa2}
							speaker={imgSpeaker2}
						/>
					}

					{
						speaker3 &&
						<Speaker
							nombre={speaker3}
							cargo={cargo3}
							empresa={empresa3}
							speaker={imgSpeaker3}
						/>
					}

					{
						speaker4 &&
						<Speaker
							nombre={speaker4}
							speaker={imgSpeaker4}
							cargo={cargo4}
							empresa={empresa4}
						/>
					}

					{
						speaker5 &&
						<Speaker
							nombre={speaker5}
							speaker={imgSpeaker5}
							cargo={cargo5}
							empresa={empresa5}
						/>
					}

					{
						speaker6 &&
						<Speaker
							nombre={speaker6}
							speaker={imgSpeaker6}
							cargo={cargo6}
							empresa={empresa6}
						/>
					}

					{
						speaker7 &&
						<Speaker
							nombre={speaker7}
							speaker={imgSpeaker7}
							cargo={cargo7}
							empresa={empresa7}
						/>
					}

				</div>
			</div>
		</div>
	)
}
