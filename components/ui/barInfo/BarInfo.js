import Styles from './BarInfo.module.css';
import React, { useContext, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Accordion, Form } from 'react-bootstrap';
import { SessionContext } from '../../../providers/sessionContext';
import { useForm } from '../../../hooks/useForm';
import Swal from 'sweetalert2';

export default function BarInfo({ nick, roleF }) {

  const { session, setSession } = useContext(SessionContext);
  let id = session.uid;
  let nameUser = session.name;

  const [formUpdateValues, handleUpdateInputChange] = useForm({
    name: '',
    surname: '',
    password: ''
  });

  const [resource, setResource] = useState({});

  const handleUploadInputChange = async (e) => {
    e.preventDefault();
    setResource(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`https://backend-academy.herokuapp.com/api/user/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
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
          Swal.fire({
            icon: 'success',
            title: 'Han sido actulizados sus datos'
          });
          console.log(data);
        } else {
          Swal.fire({
            icon: 'error',
            title: 'No se actulizaron sus datos'
          });
          console.error('ERROR');
        }
      }).catch(error => {
        console.log(error);
      });
  };


  const handleSubmitFiles = async (e) => {
    e.preventDefault();
    let dataFiles = new FormData();
    dataFiles.append('resource', resource);
    dataFiles.append('userId', id);

    fetch('https://backend-academy.herokuapp.com/api/resource', {
      method: 'POST',
      body: dataFiles
    }).then(response => response.json())
      .then(data => {
        if (data.success) {
          Swal.fire({
            icon: 'success',
            title: 'El archivo ha sido subido'
          });
          console.log('Registro exitoso');
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Error en la subida del archivo'
          });
          console.log(data.message);
        }
      });
  };

  const handleSubmitDelete = (e) => {
    e.preventDefault();
    Swal.fire({
      icon: 'question',
      text: `${nameUser} ¿Estas seguro que quiere eliminar su cuenta?`,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, estoy seguro',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://backend-academy.herokuapp.com/api/user/${id}`, {
          method: 'DELETE'
        }).then(response => response.json)
          .then(data => {
            console.log(data);
          });
        Swal.fire(
          'Cuenta eliminada',
          'Tu cuenta ha sido eliminada',
          'success'
        );
      }
    });
  };

  const leave = (e) => {
    window.location.href = '/';
  };

  return (
    <main className={Styles.main}>
      <div className={Styles.test}>
        <h6>Perfil Academy</h6>
        <div className={Styles.imageCenter}>
          <Image className={Styles.image} src="/profile.png" width={160}
                 height={160}/>
        </div>
        <span>{nick}</span><br/>
        <span>{roleF}</span><br/>
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
           <Accordion.Item eventKey={'0'}>
             <Accordion.Header>Subir Recursos</Accordion.Header>
             <Accordion.Body>
               <Form.Group controlId="formFile" className="mb-3">
                 <Form.Control type="file" name={'resource'}
                               onChange={handleUploadInputChange}/>
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
        <hr/>
        <Accordion>
          <Accordion.Item eventKey={'0'}>
            <Accordion.Header>Borrar Cuenta</Accordion.Header>
            <Accordion.Body>
              <h4>Dale click al boton para eliminar su cuenta</h4>
              <button
                className={Styles.buttonLoginDelete}
                type="onSubmit"
                onClick={handleSubmitDelete}>
                <span>Eliminar Cuenta</span>
              </button>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <hr/>
        <button
          className={Styles.buttonLoginDelete}
          type="onSubmit"
          onClick={leave}>
          <span>Cerrar sesión</span>
        </button>
      </div>
    </main>
  );
}
