import React from 'react'
import './Question.scss';

export const Question = ({ sendQuestion, onChange, questionInput }) => {
    return (
        <div className="container-question">
            <div className="titulo">
                <div className='texto'>
                    <h3>Envía aquí tus</h3>
                    <h3>preguntas o saludos</h3>
                </div>
                <input type="text"
                    placeholder="Escribe aquí..."
                    name="question" id="question"
                    value={questionInput}
                    onChange={onChange}
                />
                <button className="option" onClick={sendQuestion}>Enviar</button>
            </div>
        </div>
    )
}
