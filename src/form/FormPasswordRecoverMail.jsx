import { Formik, Form, Field, ErrorMessage } from "formik";
import { useContext, useEffect } from "react";
import { indirectPasswordRecoverContext } from "../contexts/IndirectPasswordRecoverContext";
import { useNavigate } from "react-router-dom";

const FormPasswordRecoverMail = () => {

  const { setEmail, setEmailError, emailError, success } = useContext(indirectPasswordRecoverContext);
   const navigate = useNavigate();

  const handleSubmit = (values) => {
    if(emailError) {
      setEmailError('')
    }
    const recoverEmail = {
      email: values.email
    } 
    setEmail(recoverEmail)
  };

  // useEffect(() => {
  //   if(success) {
  //     setTimeout(()=> {
  //       navigate("/recover/password-password");
  //     }, 5000)
      
  //   }
  // },[success])

  const validar = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "El campo es obligatorio";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Direccion de Correo Electronico Invalida";
    }

    return errors;
  };

  return (
    <>
        <div className="row">
          <div className="col s12 m12 l12 no-margin">
            <Formik initialValues={{email:''}} onSubmit={handleSubmit} validate={validar}>
              <Form>
                <p className="form-tittle center">Ingrese su correo electrónico</p>
                <div className='forms'>
                <div className="input-field">
                  <i className="material-icons prefix grey-darken-4">email</i>
                  <label className="label-text" htmlFor="email">Correo Electrónico</label>
                  <Field name="email" type="email" />
                </div>
                <div className="warning-inputs right"> <ErrorMessage name="email" />  </div>

                <div className="input-field">
                  <i className="material-icons prefix grey-text">key</i>
                  <label className="label-text" htmlFor="name">Contraseña</label>
                  <Field disabled name="password" type="password" />
                </div>
                <br />
                <br />
                <br />
         
                <br />
             
                <div className="accion-text center">
                    <p>{success}</p>
                    <p className="red-text">{emailError}</p>
                    {/* <span className="material-icons resize-icon-priority">priority_high</span> */}
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
                        Enviar Correo
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
export default FormPasswordRecoverMail;
