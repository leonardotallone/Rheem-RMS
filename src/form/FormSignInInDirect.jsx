import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { useContext, useEffect } from "react";
import { loguedUserContext } from "../contexts/LogInContext"

const FormSignInIndirect = () => {

  const { setCredentials, accessToken, errorMsj } = useContext(loguedUserContext);

  const navigate = useNavigate();

  const handleSubmit = (values) => {
    const user = {
      username: values.email,
      password: values.password,
    }
    setCredentials(user)
  };

  useEffect(() => {
    if(accessToken){
        navigate("/dashboard");
    }
  },[accessToken])


  const validar = (values) => {
    const errors = {};

    if (!values.password) {
      errors.password = "El campo es obligatorio";
    } else if (values.password.length < 5) {
      errors.password = "La Contraseña debe tener como minimo, 6 caracteres";
    }
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
            <Formik initialValues={{ email: "", password: "" }} onSubmit={handleSubmit}  validate={validar}  isValidating={false} isSubmitting={false}>
              <Form>
                <p className="form-tittle center">Ingrese a su Cuenta</p>
                <div className="forms">
                  <div className="input-field">
                    <i className="material-icons prefix grey-darken-4">email</i>
                    <label className="label-text" htmlFor="email"> Correo Electrónico</label>
                    <Field name="email" type="email" />
                  </div>
                  <div className="warning-inputs right"><ErrorMessage name="email" />  </div>
                 
                  <div className="input-field">
                    <i className="material-icons prefix grey-darken-4">key</i>
                    <label className="label-text" htmlFor="name">Contraseña</label>
                    <Field name="password" type="password" />
                  </div>
                  <div className="warning-inputs right"> <ErrorMessage name="password" /> </div>
                  
                <br />
                <br />
                <br />
                {errorMsj?
                <div className="center">
                    <p className="accion-text red-text">
                     {errorMsj}
                    </p>
                  </div>:null}
            
                  <div className="center">
                    <a className="accion-text" href="/recover/password-email">
                      ¿Olvido su Contraseña? Recuperar Contraseña.
                    </a>
                  </div>
                
                </div>

                <br />
                <br />

                {/* botones */}

                <div className="row">
                  <div className="col s6 m5 l6">
                     <a className='white-text' href='/usertype'>
                         <button className="btn-small btn-block grey-rheem waves-effect waves-light z-depth-1 left" type="button">
                             Regresar
                        </button>
                    </a>
                  </div>
                  <div className="col s6 m5 l6">
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
export default FormSignInIndirect;
