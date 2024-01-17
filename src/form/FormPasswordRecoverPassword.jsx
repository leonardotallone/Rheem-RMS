
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import {indirectPasswordRecoverPasswordContext} from "../../src/contexts/IndirectPasswordRecoverPasswordContext"
import { Formik, Form, Field, ErrorMessage } from "formik";



const FormPasswordRecoverPassword = () => {

  const { setEmail, setPassword, passwordRecoverError, passwordRecoverSuccess } = useContext(indirectPasswordRecoverPasswordContext);
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    setEmail(values.email);
    setPassword(values.password_2);
  };

  useEffect(() => {
    if(passwordRecoverSuccess){
      setTimeout(() => {
        navigate("/signin/indirect");
        localStorage.removeItem('passwordToken');
      }, 5000)
    }
  },[passwordRecoverSuccess]);


  const validar = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "El campo es obligatorio";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Direccion de Correo Electronico Invalida";
    }
    if (!values.password_1) {
        errors.password_1 = "El campo es obligatorio";
      } else if (values.password_1.length < 5) {
        errors.password_1 = "La Contraseña debe tener como minimo, 6 caracteres";
      }
      if (!values.password_2) {
        errors.password_2 = "El campo es obligatorio";
      } else if (values.password_2.length < 5) {
        errors.password_2 = "La Contraseña debe tener como minimo, 6 caracteres";
        
      } else if (values.password_1 !== values.password_2){
        errors.password_2 = "Las Contraseñas deben ser iguales";
      }

    return errors;
  };

  return (
    <>
        <div className="row">
          <div className="col s12 m12 l12 no-margin">
            <Formik initialValues={{email:'', password_1:'', password_2:''}} onSubmit={handleSubmit} validate={validar}>
              <Form>
                <p className="form-tittle center">Complete los siguientes datos</p>
                <div className='forms'>

                <div className="input-field">
                  <i className="material-icons prefix grey-darken-4">email</i>
                  <label className="label-text" htmlFor="email">Correo Electrónico</label>
                  <Field name="email" type="email" />
                </div>
                <div className="warning-inputs right"> <ErrorMessage name="email" /></div>

                <div className="input-field">
                  <i className="material-icons prefix grey-darken-4">key</i>
                  <label className="label-text" htmlFor="password">Ingrese su nueva contraseña</label>
                  <Field name="password_1" type="password" />
                </div>
                <div className="warning-inputs right"> <ErrorMessage name="password_1"/></div>

                <div className="input-field">
                  <i className="material-icons prefix grey-darken-4">key</i>
                  <label className="label-text" htmlFor="password">Reingrese su nueva contraseña</label>
                  <Field name="password_2" type="password" />
                </div>
                <div className="warning-inputs right"> <ErrorMessage name="password_2"/></div>

            
                <br />
              
                
                <div className="accion-text center">
                    <span className="red-text">{passwordRecoverError}</span>
                    <span>{passwordRecoverSuccess}</span>
                </div>

                </div>

                <br />
                <br />

                 {/* botones */}

                <div className="row">
                  <div className="col s6 m6 l6">
                     <a className='white-text' href='/signin/indirect'>
                         <button className="btn-small btn-block grey-rheem waves-effect waves-light z-depth-1 left" type="button">
                             Regresar
                        </button>
                    </a>
                  </div>
                  <div className="col s6 m6 l6">
                       <button className="btn-small btn-block red-rheem waves-effect waves-light right" type="submit" >
                       Enviar
                      </button>
                  </div>
                </div> 
                
              </Form>
            </Formik>
          </div> 
        </div>
      
      </>
  );
};
export default FormPasswordRecoverPassword;
