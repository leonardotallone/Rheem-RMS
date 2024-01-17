import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import Popup from 'reactjs-popup';
import Navbar from "../Navbar/Navbar";
import QR from "../../assets/logos/QR.png";
import { resetPasswordDirectUserContext } from "../../contexts/ResetPasswordDirectUserContext"
import { useParams } from "react-router";

const NewPassword = () => {

  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [habilitar, setHabilitar] = useState(false);

  const {setNewPassword, setUserRUT, newPasswordError, newPasswordSuccess } = useContext(resetPasswordDirectUserContext);
  let {rut} = useParams();

  const navigate = useNavigate();

  const openModal1 = () => {
   setOpen1(true);
 }
  const closeModall1 =() => {
      setOpen1(false);
  };

  const validar = (values) => {
    const errors = {};
    if (!values.password_1) {
        errors.password_1 = "Por favor ingrese su nueva contraseña";
      } else if (values.password_1.length < 6) {
        errors.password_1= "La Contraseña debe tener como minimo, 6 caracteres";
      } else if (!values.password_2) {
        errors.password_1 = "Por favor reingrese su contraseña";
      } else if (values.password_2.length < 6) {
        errors.password_1 = "La Contraseña debe tener como minimo, 6 caracteres";
      } else if (values.password_1 !== values.password_2){
        errors.password_1 = "Las Contraseñas deben ser iguales";
      } 
      if (!errors.password_1){
        setHabilitar(true)
      }
      if (errors.password_1){
        setHabilitar(false)
      }
     
    return errors;
  };

  const handleSubmit = (values) => {

  const NewPassword = {
    password: values.password_1,
  }
  setNewPassword(NewPassword)
  setUserRUT(rut)

  };
  const twoFunctions = () => {
    setOpen2(true);
    setOpen1(false) 
  }
  const closeModal2 =() => {
    // window.location.reload()
    setOpen2(false);
    navigate("/list-users");
  }

  return (
    <>
      <Navbar />
      <div className="row">
        <div className=" col s12 m12 l12 top-top-banner"></div>
        <div className="col s12 m12 l12 top-banner"></div>
      </div>
      {/* ---------------------------------------Banner Title------------------- */}
      <div className="row">
        <div className="col s12 m12 l12 title-banner z-depth-2">
          <div className="container">

            <div className="col s9 m9 l8 no-margin">
              <p className="font-title-create-plan">Reseteo de Contraseña</p>
              <p className="font-subtitle-create-plan">Usuarios Directos</p>
            </div>
        
            <div className="col s11 m5 l3 no-margin">
              <p className="font-form-create-plan left ">&nbsp;</p>
              <p className="font-plan-create-plan left ">&nbsp;</p>
              <p className="font-date-create-plan left ">&nbsp;</p>
            </div>

            <div className="col s1 m1 l1 push-m6">
              <img className="qr right " src={QR} alt=""></img>
              <i className=" right material-symbols-outlined print">&nbsp;</i>
            </div>

          </div>
        </div>
      </div>

      {/* ---------------------------------------Formulario------------------- */}

      <Formik
              initialValues={{password_1:'',password_2:''}}
              onSubmit={handleSubmit}
              validate={validar}
            >
              <Form id="popup">

      <div className="container">

        <div className="row">
          <div className="col s12 m12 l4 ">
            <p className="display-box-title">POR FAVOR INGRESE SU NUEVA CONTRASEÑA</p>
        <div className="warning-inputs">
          <ErrorMessage name="password_1" />                                         
        </div>
            <p className="display-box-title">Ingrese su nueva contraseña</p> 
              <div className="display-box valign-wrapper">
              <Field name="password_1"  className="input-field-common" type="password"/>
            </div>
            <p className="display-box-title">Reingrese su nueva contraseña</p>
              <div className="display-box valign-wrapper">
              <Field name="password_2"  className="input-field-common" type="password"/>
            </div>

          </div>
        </div>

         {/* botones */}
          
          
        <div className="row">
            <div className="col s12 m12 l4"><a href="/list-users">
              <button className="btn-small btn-block waves-effect waves-light button-regresar-create-plan z-depth-2" type="button">
               REGRESAR
              </button></a>
            </div>
            <div className="col l12"></div>

            <div className="col s12 m12 l4">
              <div >
                 <button disabled={habilitar === false} onClick={openModal1} className="btn-small btn-block waves-effect waves-light button-ingresar-create-plan z-depth-2 " type="button">
                   ACTUALIZAR CONTRASEÑA
                 </button>
              </div>
            </div>
        </div>
      </div>

      </Form>
            </Formik>

            <Popup contentStyle={{background: "0"}} open={open1} closeOnDocumentClick onClose={closeModall1} lockScroll = {true}>
                 
                 <div className="alert z-depth-1" >
                  <div className="row row-fix ">
                    <div className="col s12 m12 l12 no-margin">
                      <div className="atention center-align">ATENCION</div>
                    </div>
                    <div className="col s12 m12 l12 no-margin divisor-bottom-line">
                      <div  className="alert-msg center-align ">Esta por actualizar la contraseña del usuario</div>
                    </div>
                  </div>
  
                  <div className="row">
                       <div className="col s6 m6 l6 divisor-right-line center">
                          <div onClick={closeModall1} className="button-alert waves-effect waves-dark btn-block">Cancelar</div >
                       </div>
                        <div className="col s6 m6 l6 center">
                         <button form="popup" onClick={twoFunctions} className="button-alert waves-effect waves-dark btn-block" type="submit">Continuar</button>
                        </div>
                  </div>
                 </div>
                </Popup>
                <Popup contentStyle={{background: "0"}} open={open2} closeOnDocumentClick onClose={closeModal2} lockScroll = {true}>
                  
                {newPasswordError || newPasswordSuccess?
                   <div className="alert z-depth-1" >
                    <div className="row row-fix ">
                      <div className="col s12 m12 l12 no-margin">
                        {newPasswordError && (<div className="atention center-align">{newPasswordError}</div>)}
                        {newPasswordSuccess && (<div className="atention center-align">{newPasswordSuccess}</div>)}
                      </div>
                      <div className="col s12 m12 l12 no-margin divisor-bottom-line">
                      {newPasswordError && ( <div className="alert-msg center-align ">Contacte al administrador</div>)}
                      {newPasswordSuccess && ( <div className="alert-msg center-align ">Muchas gracias!</div>)}
                      </div>
                    </div>
    
                    <div className="row">
                         <div className="col s6 m6 l12 center">
                         {newPasswordError && ( <div onClick={closeModal2} className="button-alert waves-effect waves-dark btn-block">Continuar</div >)}
                         {newPasswordSuccess && ( <div onClick={closeModal2} className="button-alert waves-effect waves-dark btn-block">Continuar</div >)}
                         </div>
                    </div>
                   </div>:null}
                  </Popup>

    </>
  );
};
export default NewPassword;
