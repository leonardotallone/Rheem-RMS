import { useNavigate } from "react-router-dom"
import { Formik, Form, Field, ErrorMessage } from "formik";

import { useContext, useEffect } from "react";
import { loguedUserContext } from "../contexts/LogInContext"

// 11850683-9 // manuel

const FormSignInDirect = () => {
  const { setCredentials, accessToken, errorMsj } = useContext(loguedUserContext);
  

  
  
  const navigate = useNavigate();

  const validar = (values) => {
    const errors = {};
    const rut = /^\d{7,8}-\d$/

    if (!values.rut) {
      errors.rut = "El campo es obligatorio";
    } else if (!values.rut.match(rut) ) {
      errors.rut = "Formato de RUT incorrecto";
    }
    if (!values.password) {
      errors.password = "El campo es obligatorio";
    } else if (values.password.length < 6) {
      errors.password = "La Contraseña debe tener como minimo, 6 caracteres";
    }
    return errors;
  };

  const handleSubmit = (values) => {
    const user = {
      username: values.rut,
      password: values.password
    }
    setCredentials(user);
  };
  
  useEffect(() => {
    if(accessToken){
        navigate("/dashboard");
    }
  },[accessToken])

  return (
    <>
        <div className="row">
          <div className="col s12 m12 l12 no-margin">
            <Formik initialValues={{ rut: "", password: "" }} onSubmit={handleSubmit} validate={validar}>
              <Form>
                <p className="form-tittle center">Ingrese a su Cuenta</p>
                <div className='forms'>
                <div className="input-field ">
                  <i className="material-icons prefix grey-darken-4">assignment_ind</i>
                  <label className="label-text" htmlFor="rut">RUT Colaborador</label>
                  <Field name="rut" type="text" />
                </div>
                <div className="warning-inputs right"><ErrorMessage name="rut" /></div>
      
                <div className="input-field">
                  <i className="material-icons prefix grey-darken-4">key</i>
                  <label className="label-text" htmlFor="name">Contraseña</label>
                  <Field name="password" type="password" />
                </div>
                <div className="warning-inputs right"><ErrorMessage name="password" /> </div>
             
                <br />
                <br />
                <br />

                {errorMsj?
                <div className="center">
                    <p className="accion-text red-text">
                     {errorMsj}
                    </p>
                  </div>:null}

                <div className='center'>
                    <a className="accion-text" href="#">
                      ¿Olvido su Contraseña? Contacte a su Supervisor 
                    </a>
            
                </div>
             
                </div>

                <br />
                <br />

                {/* botones */}

                <div className="row">
                  <div className="col s6 m6 l6">
                     <a className='white-text' href='/usertype'>
                         <button className="btn-small btn-block grey-rheem waves-effect waves-light z-depth-1 left" type="button">
                             Regresar
                        </button>
                    </a>
                  </div>
                  
                  <div className="col s6 m6 l6">
                       <button  className="btn-small btn-block red-rheem waves-effect waves-light right" type="submit" >
                        Ingresar
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
export default FormSignInDirect;
