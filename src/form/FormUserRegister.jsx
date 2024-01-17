
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"


import { Formik, Form, Field, ErrorMessage } from "formik";
import Popup from 'reactjs-popup';

const FormUserRegister = () => {

  const navigate = useNavigate();

  const [register, setRegister] = useState(false)
  const [success, setSuccess] = useState(false)

  const openPopup = () => { setRegister(true) }
  const closePopup = () =>{ setRegister(false)}

  const openSuccess = () => { setSuccess(true) }
  const closeSuccess = () =>{ setSuccess(false)}

    const refreshPage = () => {
    window.location.reload();
  };


  const twoFunctions = () => { 
    closePopup();
    openSuccess();
    refreshPage ();
    navigate("/create-user");
    
  }



  const handleSubmit = (values) => {
    openPopup()

  };

 

  const validar = (values) => {
    const errors = {};

   /* ---- RUT COLABORADOR ---- */
    if (!values.rut) {
      errors.rut = "El campo es obligatorio";
    } else if ( isNaN(values.rut) ) {
      errors.rut = "Este campo solo acepta números";
    } else if (values.rut.length < 8) {
      errors.rut = "El RUT deber tener 8 Caracteres";
    }
    /* ---- NOMBRE COMPLETO ---- */
    if (!values.fullName) {
      errors.fullName = "El campo es obligatorio";
    } else if ( !isNaN(values.fullName)) {
      errors.fullName = "Este campo no acepta números";
    }
    /* ---- APELLIDO PATERNO ---- */
    if (!values.lastName) {
      errors.lastName = "El campo es obligatorio";
    } else if ( !isNaN(values.lastName)) {
      errors.lastName = "Este campo no acepta números";
    }
    /* ---- APELLIDO MATERNO ---- */
    if (!values.MotherLastName) {
      errors.MotherLastName = "El campo es obligatorio";
    } else if ( !isNaN(values.MotherLastName)) {
      errors.MotherLastName = "Este campo no acepta números";
    }
    /* ---- EDAD ---- */
    if (!values.age) {
      errors.age = "El campo es obligatorio";
    } else if ( isNaN(values.age)) {
      errors.age = "Este campo solo acepta números";
    }
    /* ---- PHONE ---- */
    if (!values.phone) {
      errors.phone = "El campo es obligatorio";
    } else if (isNaN(values.phone)) {
      errors.phone = "Este campo solo acepta números";
    }     
    /* ---- EMAIL ---- */
    if (!values.email) {
      errors.email = "El campo es obligatorio";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Direccion de Correo Electronico Invalida";
    }
    /* ---- ESTADO ---- */
    if (!values.state) {
      errors.state = "El campo es obligatorio";
    }
    /* ---- DIRECCION ---- */
    if (!values.adress) {
      errors.adress = "El campo es obligatorio";
    }
    /* ---- SUPERVISOR ---- */
    if (!values.supervisor) {
      errors.supervisor = "El campo es obligatorio";
    }
    /* ---- CARGO ---- */
    if (!values.position) {
      errors.position = "El campo es obligatorio";
    }

    return errors;
  };

  return (
    <>
      
        <div className="row">
          <div className="col s12 m12 l12 no-margin"> 
            <Formik
              initialValues={{ rut:'',fullName:'',lastName:'',MotherLastName:'', age:'',phone:'', email: "", state:'', adress:'',supervisor:'', position:''}}
              onSubmit={handleSubmit}
              validate={validar}
            >
              <Form>
                <p className="form-tittle center">Formulario de Registro</p>
                <div className='form-register'>
                
              {/* ---- RUT COLABORADOR ---- */}
              <div className='col s12 m12 l12'>
                <div className="input-field ">
                  <i className="material-icons prefix grey-darken-4">assignment_ind</i>
                  <label className="label-text" htmlFor="rut">RUT Colaborador</label>
                  <Field name="rut" type="text" />
                </div>
                <div className="warning-inputs right">  
                  <ErrorMessage name="rut" />   
                </div>
              </div>


                  {/* ---- NOMBRE COMPLETO ---- */}
              <div className='col s12 m12 l12'>
                  <div className="input-field ">
                  <i className="material-icons prefix grey-darken-4">person</i>
                  <label className="label-text" htmlFor="fullName">Nombre Completo</label>
                  <Field name="fullName" type="text" />
                </div>
                <div className="warning-inputs right">  
                  <ErrorMessage name="fullName" />   
                </div>
              </div>

                
                {/* ---- APELLIDO PATERNO ---- */} 
              <div className='col s12 m12 l12'>
                <div className="input-field ">
                  <i className="material-icons prefix grey-darken-4">badge</i>
                  <label className="label-text" htmlFor="lastName">Apellido Paterno</label>
                  <Field name="lastName" type="text" />
                </div>
                <div className="warning-inputs right">  
                  <ErrorMessage name="lastName" />   
                </div>
              </div>

                {/* ---- APELLIDO MATERNO ---- */}
                <div className='col s12 m12 l12'>
                <div className="input-field ">
                  <i className="material-icons prefix grey-darken-4">badge</i>
                  <label className="label-text" htmlFor="MotherLastName">Apellido Materno</label>
                  <Field name="MotherLastName" type="text" />
                </div>
                <div className="warning-inputs right">  
                  <ErrorMessage name="MotherLastName" />   
                </div>
                </div>

                {/* ---- EDAD ---- */}

                <div className='col s12 m12 l12'>
                <div className="input-field">
                  <i className="material-icons prefix grey-darken-4">hourglass_top</i>
                  <label className="label-text" htmlFor="age">Edad</label>
                  <Field name="age" type="text" />
                </div>
                <div className="warning-inputs right">
                  <ErrorMessage name="age"/>
                </div>
                </div>

                {/* ---- NRO DE CONTACTO ---- */}
                <div className='col s12 m12 l12'>
                <div className="input-field">
                  <i className="material-icons prefix grey-darken-4">phone</i>
                  <label className="label-text" htmlFor="phone">Nro. de Contacto</label>
                  <Field name="phone" type="text" />
                </div>
                <div className="warning-inputs right">
                  <ErrorMessage name="phone" />
                </div>
                </div>

                {/* ---- EMAIL ---- */}
                <div className='col s12 m12 l12'>
                <div className="input-field">
                  <i className="material-icons prefix grey-darken-4">email</i>
                  <label className="label-text" htmlFor="email">Correo Electrónico</label>
                  <Field name="email" type="email" />
                </div>
                <div className="warning-inputs right">
                  <ErrorMessage name="email" />
                </div>
                </div>

                {/* ---- ESTADO ---- */}
                <div className='col s12 m12 l12'>
                <div className="input-field">
                  <i className="material-icons prefix grey-darken-4">update</i>
                  <label className="label-text" htmlFor="state">Estado</label>
                  <Field name="state" type="text" />
                </div>
                <div className="warning-inputs right">
                  <ErrorMessage name="state" />
                </div>
                </div>
                {/* ---- DIRECCION ---- */}
                <div className='col s12 m12 l12'>
                <div className="input-field">
                  <i className="material-icons prefix grey-darken-4">home</i>
                  <label className="label-text" htmlFor="adress">Dirección</label>
                  <Field name="adress" type="text" />
                </div>
                <div className="warning-inputs right">
                  <ErrorMessage name="adress" />
                </div>
                </div>

                {/* ---- SUPERVISOR----  */}
                <div className='col s12 m12 l12'>
                <div className="input-field">
                  <i className="material-icons prefix grey-darken-4">supervisor_account</i>
                  <label className="label-text" htmlFor="supervisor">Supervisor</label>
                  <Field name="supervisor" type="text" />
                </div>
                <div className="warning-inputs right">
                  <ErrorMessage name="supervisor" />
                </div>
                </div>
                {/* ---- CARGO ---- */}

                <div className='col s12 m12 l12'>
                 <div className="input-field">
                  <i className="material-icons prefix grey-darken-4">attribution</i>
                  <label className="label-text" htmlFor="position">Cargo</label>
                  <Field name="position" type="text" />
                </div>
                <div className="warning-inputs right">
                  <ErrorMessage name="position" />
                </div>
                </div>

                <br />
                <br />


                 <div className="warning-form center">
                    <span className="material-icons resize-icon-warning">warning</span>
                    <span>Some Register Error! </span>  
                </div>

                </div>

                <br />
                <br />

                  <div className='col s12 m12 l12 left'><a href="/dashboard">
                    <button type="button" className="btn-small btn-block grey-rheem waves-effect waves-light z-depth-1 button-regresar-user-register" >Regresar</button></a>
                  </div>
                  <div className='col s12 m12 l12 right'>
                    <button className="btn-small btn-block red-rheem waves-effect waves-light button-registrar-user-register" type="submit" >Registrar Usuario</button>
                  </div>
                  <Popup contentStyle={{background: "0"}} open={register} closeOnDocumentClick onClose={closePopup} lockScroll = {true}>
                 
               <div className="alert z-depth-1" >
                <div className="row row-fix ">
                  <div className="col s12 m12 l12 no-margin">
                    <div className="atention center-align">ATENCION</div>
                  </div>
                  <div className="col s12 m12 l12 no-margin divisor-bottom-line">
                    <div  className="alert-msg center-align ">Esta por crear un nuevo usuario</div>
                  </div>
                </div>

                <div className="row">
                     <div className="col s6 m6 l6 divisor-right-line center">
                        <div onClick={closePopup} className="button-alert waves-effect waves-dark btn-block">Cancelar</div >
                     </div>
                      <div className="col s6 m6 l6 center">
                       <div onClick={twoFunctions} className="button-alert waves-effect waves-dark btn-block">Continuar</div>
                      </div>
                </div>
               </div>
              </Popup>
              <Popup contentStyle={{background: "0"}} open={success} closeOnDocumentClick onClose={closeSuccess} lockScroll = {true}>
                 
                 <div className="alert z-depth-1" >
                  <div className="row row-fix ">
                    <div className="col s12 m12 l12 no-margin">
                      <div className="atention center-align">Usuario Creado Exitosamente</div>
                    </div>
                    <div className="col s12 m12 l12 no-margin divisor-bottom-line">
                      <div  className="alert-msg center-align ">Muchas gracias!</div>
                    </div>
                  </div>
  
                  <div className="row">
                       <div className="col s6 m6 l12 center">
                          <div onClick={closeSuccess} className="button-alert waves-effect waves-dark btn-block">Continuar</div >
                       </div>
                  </div>
                 </div>
                </Popup>


                  

               
               
                
              </Form>
            </Formik>
          </div>
          
        </div>
     
    </>
  );
};
export default FormUserRegister;  