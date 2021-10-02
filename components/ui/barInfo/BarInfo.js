import Styles from './BarInfo.module.css';
import React, {useContext} from "react";
import Image from 'next/image';
import Link from 'next/link';
import {Accordion, Form} from "react-bootstrap";
import {SessionContext} from "../../../providers/sessionContext";
import {useForm} from "../../../hooks/useForm";


export default function BarInfo({nick, roleF}) {

    const {session} = useContext(SessionContext);
    let id = session.uid;

    const [formUpdateValues, handleUpdateInputChange] = useForm({
        name: '',
        surname: '',
        password: ''
    });

    const [formUploadValues, handleUploadInputChange] = useForm({
       file:''
    });

    const handleSubmit = async (e) => {
        console.log('id > ', id);
        e.preventDefault();
        await fetch(`https://backend-academy.herokuapp.com/api/user/${id}`, {
            method: 'PUT',
            credentials: 'include',
            headers: {
                'Content/Type': 'application/json',
                'Accept': '*/*'
            },
            body: JSON.stringify({
                uid: id,
                name: formUpdateValues.name,
                surname: formUpdateValues.surname,
                password: formUpdateValues.password
            })
        }).then(response => response.json())
            .then(data => {
                if (data.success) {
                    console.log(data);
                } else {
                    console.error('ERROR');
                }
            }).catch(error => {
                console.log(error);
            })
    }

    const handleSubmitFiles = async (e) => {
        e.preventDefault();
        fetch('https://backend-academy.herokuapp.com/api/resource', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                file:formUploadValues.file
            })
        }).then(response => response.json())
            .then(data => {
                console.log(data);
            });
    }

    return (
        <main className={Styles.main}>
            <div className={Styles.test}>
                <h6>Academy profile</h6>
                <div className={Styles.imageCenter}>
                    <Image className={Styles.image} src='/profile.png' width={160} height={160}/>
                </div>
                <span>{nick}</span><br/>
                <span>{roleF}</span><br/>
                <Link href={'/Profile'}>
                    <a>
                        Personal Profile
                    </a>
                </Link>
            </div>
            <div className={Styles.second}>
                <Accordion>
                    <Accordion.Item eventKey={'0'}>
                        <Accordion.Header>Actualizar Informacion</Accordion.Header>
                        <Accordion.Body>
                            <form className={Styles.inputLogin}>
                                <label>Nombre</label>
                                <input
                                    name={'name'}
                                    placeholder="Name"
                                    type="text"
                                    value={formUpdateValues.name}
                                    onChange={handleUpdateInputChange}
                                />
                                <br/>
                                <label>Apellido</label>
                                <input
                                    name={'surname'}
                                    placeholder="Surname"
                                    type="text"
                                    value={formUpdateValues.surname}
                                    onChange={handleUpdateInputChange}
                                />
                                <br/>
                                <label>Contraseña</label>
                                <input
                                    name={'password'}
                                    placeholder="Password"
                                    type="password"
                                    value={formUpdateValues.password}
                                    onChange={handleUpdateInputChange}
                                />
                                <button
                                    className={Styles.buttonLogin}
                                    type="onSubmit"
                                    onClick={handleSubmit}
                                >
                                    <span>Actualizar</span>
                                </button>
                            </form>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                {/*Subir recursos*/}
                <hr/>
                {session.role === 'Teacher_Role' ?
                    <Accordion>
                        <Accordion.Item eventKey={'1'}>
                            <Accordion.Header>Subir Recursos</Accordion.Header>
                            <Accordion.Body>
                                    <Form.Group controlId="formFile" className="mb-3">
                                        <Form.Control type="file" name={'file'}
                                                      value={formUploadValues.file}
                                                      onChange={handleUpdateInputChange}/>
                                    </Form.Group>
                                    <button
                                        className={Styles.buttonLogin}
                                        type="onSubmit"
                                        onClick={handleSubmitFiles}>
                                        <span>Subir</span>
                                    </button>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion> : <span>{}</span>}
            </div>
        </main>
    );
}