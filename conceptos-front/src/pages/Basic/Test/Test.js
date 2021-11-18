import React, { useEffect, useState } from 'react'
import { notification, Popconfirm, Button, Spin } from "antd";
import { AuditOutlined, LoadingOutlined } from "@ant-design/icons";

import { postTestApi, postStartTestApi } from "../../../api/test";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../../utils/constants";
import jwtDecode from "jwt-decode";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { Question } from './Question';
import { Statistic, Row, Col } from 'antd';
import moment from 'moment';
const { Countdown } = Statistic;
// const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Moment is also OK


export const Test = ({ testStatus, setTestStatus, user, setUser, token, setToken, setActiveTest, activeTest, timeFinish, setTimeFinish }) => {

    // test
    const [pages, setPages] = useState(1);
    const [nota, setNota] = useState();
    const [loading, setLoading] = useState(false);
    const [deadline, setDeadline] = useState(0);
    const [finishTest, setFinishTest] = useState(false);
    const [tiempoActual, setTiempoActual] = useState('0');

    const [questions, setQuestions] = useState({
        question1: 0,
        question2: 0,
        question3: 0,
        question4: 0,
        question5: 0,
        question6: 0,
        question7: 0,
        question8: 0,
        question9: 0,
        question10: 0,
        question11: 0,
        question12: 0,
        question13: 0,
        question14: 0,
        question15: 0,
        question16: 0,
        question17: 0,
        question18: 0,
        question19: 0,
        question20: 0,
        question21: 0,
    })


    const {
        question1,
        question2,
        question3,
        question4,
        question5,
        question6,
        question7,
        question8,
        question9,
        question10,
        question11,
        question12,
        question13,
        question14,
        question15,
        question16,
        question17,
        question18,
        question19,
        question20,
        question21
    } = questions

    useEffect(()=>{
        questionsLocal();
        setQuestions(JSON.parse(localStorage.getItem('questions')));
    }, [])

    const questionsLocal = () =>{
        if(JSON.parse(localStorage.getItem('questions')) == null){
            console.log('Entro....')
            localStorage.setItem('questions',JSON.stringify(questions));
            return;
        }
    }
    
    const onFinish = async() => {
        notification['success']({
            message: 'Se acabo el tiempo, prueba enviada'
        })
        setFinishTest(true);
        if(!testStatus){  
            const { note, puntajeObtenido, aprobado, respCorrectas } = await calcularPuntaje()
            setNota(note)
            const data = {
                userID: user.id,
                question1,
                question2,
                question3,
                question4,
                question5,
                question6,
                question7,
                question8,
                question9,
                question10,
                question11,
                question12,
                question13,
                question14,
                question15,
                question16,
                question17,
                question18,
                question19,
                question20,
                question21,
                note: note,
                ptos: puntajeObtenido,
                aprobado: aprobado,
                correctas: respCorrectas
            };
            const response = await postTestApi(token, data);
            if (response.ok) {
                const { accessToken, refreshToken, message } = response;
                localStorage.setItem(ACCESS_TOKEN, accessToken);
                localStorage.setItem(REFRESH_TOKEN, refreshToken);
                setToken(accessToken);
                setUser(jwtDecode(accessToken));
                setTestStatus(true);
                setFinishTest(true);
                setActiveTest(true);
                notification["success"]({
                    message: message,
                });
            } else {
                notification["error"]({
                    message: response.message,
                });
            }

        }

    }

    useEffect(() => {

        console.log(timeFinish);
        
        if (testStatus) {
            setNota(user.note)
        }
        setTiempoActual(moment().format());
        setDeadline(timeFinish);
        if (moment(moment().format()).isAfter(timeFinish) && timeFinish !=0) {
            console.log('El test finalizo')
            setFinishTest(true);
        }     
    }, [user])


    const startTest = async () => {
        if (testStatus) {
            notification["error"]({
                message: "Solo puedes realizar la evaluación una vez",
            });
        } else {
            setLoading(true);
            const data = {
               userID: user.id
            };
            const response = await postStartTestApi(token, data);
            if (response.ok) {
                const { accessToken, refreshToken, message } = response;
                localStorage.setItem(ACCESS_TOKEN, accessToken);
                localStorage.setItem(REFRESH_TOKEN, refreshToken);
                setToken(accessToken);
                setUser(jwtDecode(accessToken));
                setActiveTest(true);
                notification["success"]({
                    message: 'La prueba comenzó',
                });
            } else {
                notification["error"]({
                    message: response.message,
                });
            } 
        }
        setTimeout(()=>{
            setLoading(false);
        },2000)
    }
    const handleCancel = () => {

    }

    const addPages = () => {
        // if (pages < 21) {
        //     if (pages === 1 && questions.question1 === 0) {
        //         notification["error"]({
        //             message: "Debes seleccionar una opción",
        //         });
        //     } else if (pages === 2 && questions.question2 === 0) {
        //         notification["error"]({
        //             message: "Debes seleccionar una opción",
        //         });
        //     } else if (pages === 3 && questions.question3 === 0) {
        //         notification["error"]({
        //             message: "Debes seleccionar una opción",
        //         });
        //     } else if (pages === 4 && questions.question4 === 0) {
        //         notification["error"]({
        //             message: "Debes seleccionar una opción",
        //         });
        //     } else if (pages === 5 && questions.question5 === 0) {
        //         notification["error"]({
        //             message: "Debes seleccionar una opción",
        //         });
        //     } else if (pages === 6 && questions.question6 === 0) {
        //         notification["error"]({
        //             message: "Debes seleccionar una opción",
        //         });
        //     } else if (pages === 7 && questions.question7 === 0) {
        //         notification["error"]({
        //             message: "Debes seleccionar una opción",
        //         });
        //     } else if (pages === 8 && questions.question8 === 0) {
        //         notification["error"]({
        //             message: "Debes seleccionar una opción",
        //         });
        //     } else if (pages === 9 && questions.question9 === 0) {
        //         notification["error"]({
        //             message: "Debes seleccionar una opción",
        //         });
        //     } else if (pages === 10 && questions.question10 === 0) {
        //         notification["error"]({
        //             message: "Debes seleccionar una opción",
        //         });
        //     } else if (pages === 11 && questions.question11 === 0) {
        //         notification["error"]({
        //             message: "Debes seleccionar una opción",
        //         });
        //     } else if (pages === 12 && questions.question12 === 0) {
        //         notification["error"]({
        //             message: "Debes seleccionar una opción",
        //         });
        //     } else if (pages === 13 && questions.question13 === 0) {
        //         notification["error"]({
        //             message: "Debes seleccionar una opción",
        //         });
        //     } else if (pages === 14 && questions.question14 === 0) {
        //         notification["error"]({
        //             message: "Debes seleccionar una opción",
        //         });
        //     } else if (pages === 15 && questions.question15 === 0) {
        //         notification["error"]({
        //             message: "Debes seleccionar una opción",
        //         });
        //     } else if (pages === 16 && questions.question16 === 0) {
        //         notification["error"]({
        //             message: "Debes seleccionar una opción",
        //         });
        //     } else if (pages === 17 && questions.question17 === 0) {
        //         notification["error"]({
        //             message: "Debes seleccionar una opción",
        //         });
        //     } else if (pages === 18 && questions.question18 === 0) {
        //         notification["error"]({
        //             message: "Debes seleccionar una opción",
        //         });
        //     } else if (pages === 19 && questions.question19 === 0) {
        //         notification["error"]({
        //             message: "Debes seleccionar una opción",
        //         });
        //     } else if (pages === 20 && questions.question20 === 0) {
        //         notification["error"]({
        //             message: "Debes seleccionar una opción",
        //         });
        //     } else {
        //     }
        // }
        setPages(pages + 1);
        localStorage.setItem('questions',JSON.stringify(questions));
    };


    const calcularPuntaje = async () => {

        let aprobado;
        const question = {
            que1: question1,
            que2: question2,
            que3: question3,
            que4: question4,
            que5: question5,
            que6: question6,
            que7: question7,
            que8: question8,
            que9: question9,
            que10: question10,
            que11: question11,
            que12: question12,
            que13: question13,
            que14: question14,
            que15: question15,
            que16: question16,
            que17: question17,
            que18: question18,
            que19: question19,
            que20: question20,
            que21: question21,
        }


        const respuestas = {
            resp1: 4,
            resp2: 4,
            resp3: 2,
            resp4: 3,
            resp5: 1,
            resp6: 1,
            resp7: 3,
            resp8: 2,
            resp9: 1,
            resp10: 4,
            resp11: 1,
            resp12: 2,
            resp13: 4,
            resp14: 3,
            resp15: 2,
            resp16: 3,
            resp17: 2,
            resp18: 2,
            resp19: 3,
            resp20: 3,
            resp21: 4
        }
        const totalPuntaje = 100;
        //Suma del puntaje respuesta correcta
        const rc = totalPuntaje / 21
        let puntajeObtenido = 0;
        let respCorrectas = 0;


        for (let index = 1; index <= 21; index++) {
            if (question[`que${index}`] === respuestas[`resp${index}`]) {
                console.log(`Correcta pregunta ${index}`)
                puntajeObtenido += rc;
                respCorrectas++;
            }

        }

        //Calcular nota

        const e = 0.6;
        const nMax = 70;
        const nMin = 10;
        const nApr = 40;
        const pMax = 100;
        let note;
        if (puntajeObtenido < (e * pMax)) {
            console.log('Tiene menos de un 40')
            note = Math.round(((nApr - nMin) * (puntajeObtenido / (e * pMax))) + nMin)
            aprobado = false;
        } else {
            console.log('Tiene más de un 40');
            note = Math.round(((nMax - nApr) * ((puntajeObtenido - (e * pMax)) / (pMax * (1 - e)))) + nApr);
            aprobado = true;
        }

        puntajeObtenido = Math.round(puntajeObtenido)

        return { note, puntajeObtenido , aprobado, respCorrectas };
    }

    const sendTest = async () => {

            if (testStatus) {
                notification["error"]({
                    message: "Solo puedes realizar la evaluación una vez",
                });
            } else {
                //Calcular puntaje y nota
                setLoading(true)
                const { note, puntajeObtenido, aprobado, respCorrectas } = await calcularPuntaje()
                setNota(note)
                console.log(aprobado);
                console.log(respCorrectas);
                const data = {
                    userID: user.id,
                    question1,
                    question2,
                    question3,
                    question4,
                    question5,
                    question6,
                    question7,
                    question8,
                    question9,
                    question10,
                    question11,
                    question12,
                    question13,
                    question14,
                    question15,
                    question16,
                    question17,
                    question18,
                    question19,
                    question20,
                    question21,
                    note: note,
                    ptos: puntajeObtenido,
                    aprobado: aprobado,
                    correctas: respCorrectas
                };
                const response = await postTestApi(token, data);
                if (response.ok) {
                    const { accessToken, refreshToken, message } = response;
                    localStorage.setItem(ACCESS_TOKEN, accessToken);
                    localStorage.setItem(REFRESH_TOKEN, refreshToken);
                    setToken(accessToken);
                    setUser(jwtDecode(accessToken));
                    setTestStatus(true);
                    setFinishTest(true);
                    setActiveTest(true);
                    
                    setTimeout(()=>{
                        setLoading(false);     
                        notification["success"]({
                            message: message,
                        });
                    },2000)

                } else {
                    setLoading(false);
                    notification["error"]({
                        message: response.message,
                    });
                }
            }
    };

    const saveAnswers = (ask, answer) => {
         setQuestions({
            ...questions,
            [ask]: answer
        })
    }

    const antIcon = <LoadingOutlined spin />;

    return (
        <>
        <Spin spinning={loading} size="large" tip="Cargando..." indicator={antIcon}>
            <div className="test-container">
                {(finishTest && activeTest) ? <div className="block-card" /> : null}
                {
                    (activeTest) &&
                    <div className="card-container">
                        {/* Countdown */}
                        <Row gutter={16} style={{ marginBottom: '20px' }}>
                            <Col span={16}>
                                <Countdown title="Tiempo restante" value={deadline} onFinish={onFinish} />
                            </Col>
                        </Row>
                        {/* Test */}
                        <h1 className="card-title">Realizar evaluación</h1>
                        <hr />
                        <div className="question">
                            <Question
                                pages={pages}
                                saveAnswers={saveAnswers}
                                questions={questions}
                            />
                        </div>
                        <hr />
                        <div className="buttons-container">
                            <button
                                className={pages === 1 ? "disabled" : ""}
                                onClick={() => {
                                    pages !== 1 ? setPages(pages - 1) : setPages(pages);
                                }}
                            >
                                <ArrowRightAltIcon className="rotate" /> Anterior
                            </button>
                            <div className="numbers">{pages} de 21</div>
                            {pages < 21 ? (
                                <button onClick={addPages}>
                                    Siguiente <ArrowRightAltIcon />
                                </button>
                            ) : null}
                            {pages === 21 ? <button className='enviar' onClick={sendTest}>Enviar</button> : null}
                        </div>
                    </div>
                }
                {
                    !activeTest &&
                    <div className="card-container">
                        <h1 className='card-title'>Prueba Charlas PUC</h1>
                        <ol>
                            <li>La prueba permite un solo acceso, no puede ingresar nuevamente.</li>
                            <li>Cuenta con 60 minutos para rendirla.</li>
                            <li>El cuestionario consta de 21 preguntas.</li>
                            <li>La prueba estará disponible desde las 00:00 hrs del sábado 23-octubre hasta las 24:00 hrs del lunes 25-octubre.</li>
                            <p style={{marginTop:'10px'}}><strong>Gracias por participar en nuestro curso. ¡Los esperamos en la próxima versión!</strong></p>
                        </ol>
                        <Popconfirm
                            title="¿Estás seguro de activar la prueba?, solo lo puedes realizar 1 vez"
                            onConfirm={() => startTest()}
                            onCancel={handleCancel}
                            okText="Si"
                            cancelText="No"
                        >
                            <Button type="primary" className="btn" block icon={<AuditOutlined />}>
                                Activar Cuestionario
                            </Button>
                        </Popconfirm>
                    </div>
                }
            </div>
        </Spin>
        </>
    )
}
