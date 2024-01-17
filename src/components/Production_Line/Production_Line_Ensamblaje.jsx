import Navbar from "../Navbar/Navbar";
import QR from "../../assets/logos/QR.png";
import Popup from 'reactjs-popup';

import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";


const Production_Line_Ensamblaje = () => {

    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [habilitar, setHabilitar] = useState(false);

    const [chasis, setChasis] = useState(false);
    const [chasisCodeDisplay, setChasisCodeDisplay] = useState();
    const [camaraCodeDisplay, setCamaraCodeDisplay] = useState();
    // const [month] = useState(new Date().getMonth() + 1)
    // const [year] = useState(new Date().getFullYear())
    const [date] = useState(new Date())

    const restart =()=>{
      window.location.reload();
    }
      

  
    const openModal1 = () => {
     setOpen1(true);
   }
    const closeModall1 =() => {
        setOpen1(false);
    };
    const twoFunctions = () => {
      setOpen2(true);
      setOpen1(false) 
    }
    const closeModal2 =() => {
      window.location.reload()
      setOpen2(false);
    }
    
    const validarCodigos = (values) => {
      const errors = {};
      if(!values.chasisCode){
        errors.chasisCode = "Por favor ingrese código de Chasis"
      }
      return errors;
    };
      
    const handleSubmitCodesDisplay = (values) => {
      setChasisCodeDisplay(values.chasisCode)
      setChasis(true)
      setCamaraCodeDisplay(values.camaraCode)
      if(values.chasisCode && values.camaraCode){
        setHabilitar(true)
      }
    }
    const handleSubmitCodigos = () => {
     
      const ensamblajeCodes = {
        chasisCode: chasisCodeDisplay,
        camaraCode: camaraCodeDisplay,
  
        lote:"",
        descripcion:"",
        date: {date},
        operador:"",
      }

      console.log("ENSAMBLAJE CODES", ensamblajeCodes)
    };
  
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

            <div className="col l9">
                <p className="font-title-create-plan in-line">Linea Productiva</p>
                <p className="subtitle-production-line in-line"> &nbsp;(Ensamblaje Chasis-Cámara)</p>
                <div className="row"></div>
                
              <div className="col s12 m12 l7 no-margin">
              
              <p className="font-subtitle-create-plan">Verificación de Procesos</p>
              <div className="display-box-fine-tunning-scancode z-depth-1">
                  <Formik initialValues={{ chasisCode:'', camaraCode:''}} 
                     onSubmit={handleSubmitCodesDisplay} validate={validarCodigos} isValidating={false} isSubmitting={false} >
                    <Form>

                  <div className="col s3 m1 l1 ">
                    <button type="submit" className="hover-hand">
                      <i className="material-symbols-outlined qr-input">qr_code_scanner</i>
                    </button>
                  </div>

                  {chasis === false?
                  <div className="col s9 m10 push-m1 l10 push-l1 ">
                              <div className="input-field">
                                <label className="label-text-scan" htmlFor="chasis" >Código de Chasis</label>
                                  <Field name="chasisCode" type="text" />
                              <div className="warning-inputs-scan right"><ErrorMessage name="codigoDeChasis" /></div>
                              </div>
                  </div>:
                    <div className="col s9 m10 push-m1 l10 push-l1 ">
                    <div className="input-field">
                      <label className="label-text-scan" htmlFor="chasis">Código de Cámara</label>
                        <Field name="camaraCode" type="text" />
                    <div className="warning-inputs-scan right"><ErrorMessage name="codigoDeChasis" /></div>
                    </div>
                </div>          
                  }
                    </Form>
                  </Formik>
                </div>
                <p className="display-box-title">Si no dispone de lector, ingrese el Código manualmente.</p>
              </div>
            
            </div>

            <div className="col s12 m7 l2">
                 <p className="font-form-create-plan">RC:16-062</p>  
                 <p className="font-tunning-black">LOTE: 1234</p>
                 {/* <p className="font-tunning-black">CODIGO SKU CAMARA: 1234</p> */}
                 <p className="font-tunning-black">SKU CALEFON: 123456789</p>
                 <p className="font-tunning-black">DESCRIPCION: DESCRIPCION </p>
                 <p className="font-tunning-black">FECHA:{`${date}`}</p>
                 <p className="font-tunning-black">OPERADOR:NOMBRE</p>
              </div>
              <div className="col s1 m1 l1 right">
              <img className="qr right " src={QR} alt=""></img>
            </div>
            

          </div>
          </div>
        </div>
      

      {/* ---------------------------------------Formulario------------------- */}


      <Formik
              initialValues={{ chasisCode:{chasisCodeDisplay}, camaraCode:{camaraCodeDisplay}}}
              onSubmit={handleSubmitCodigos}
              
              // validateOnChange={true}
              // validateOnBlur={true}
            >
              <Form id="popup">
      <div className="container">
        <div className="warning-inputs">
          <ErrorMessage name="codigoDeChasis" />
          <ErrorMessage name="codigoDeCamara" />                       
        </div>
        <div className="row">
            <div className="col l6">
                <p className="display-box-title">Código de Chasis</p>
                <div className="ensamblaje-box z-depth-1 center">
                  <p className="ensamblaje-text">{chasisCodeDisplay}</p>
                </div>
            </div>
            <div className="col l6">
                <p className="display-box-title">Código de Cámara</p>
                <div className="ensamblaje-box z-depth-1 center">
                  <p className="ensamblaje-text">{camaraCodeDisplay}</p>
                </div>
            </div>
        </div>

         {/* botones */}
 
        <div className="row">
            <div className="col s12 m12 l6">
              <button onClick={restart} className="btn-small btn-block waves-effect waves-light button-regresar-create-plan z-depth-2" type="button">
               REESCANEAR
              </button>
            </div>
            <div className="col s12 m12 l6">
              <div >
                 <button disabled={habilitar===false} onClick={openModal1} className="btn-small btn-block waves-effect waves-light button-ingresar-create-plan z-depth-2 " type="button">
                   REGISTRAR ENSAMBLAJE
                 </button>
              </div>
            </div>
        </div>
      </div>

      </Form>
            </Formik>
            <Popup contentStyle={{background: "0"}} open={open1} closeOnDocumentClick onClose={closeModall1} lockScroll = {true}>
                 
                 <div className="alertLarge z-depth-1" >
                  <div className="row row-fix ">
                    <div className="col s12 m12 l12 no-margin">
                      <div className="atentionLarge center-align">ATENCION</div>
                    </div>
                    <div className="col s12 m12 l12 no-margin divisor-bottom-lineLarge">
                      <div  className="alert-msgLarge center-align ">Esta por registrar Ensamblaje</div>
                    </div>
                  </div>
  
                  <div className="row">
                       <div className="col s6 m6 l6 divisor-right-lineLarge center">
                          <div onClick={closeModall1} className="button-alertLarge waves-effect waves-dark btn-block">Cancelar</div >
                       </div>
                        <div className="col s6 m6 l6 center">
                         <button form="popup" onClick={twoFunctions} className="button-alertLarge waves-effect waves-dark btn-block" type="submit">Continuar</button>
                        </div>
                  </div>
                 </div> 
                </Popup>
                <Popup contentStyle={{background: "0"}} open={open2} closeOnDocumentClick onClose={closeModal2} lockScroll = {true}>
                   
                   <div className="alertLarge z-depth-1" >
                    <div className="row row-fix ">
                      <div className="col s12 m12 l12 no-margin">
                        <div className="atentionLarge center-align">Ensamblaje registrado exitosamente</div>
                      </div>
                      <div className="col s12 m12 l12 no-margin divisor-bottom-lineLarge">
                        <div  className="alert-msgLarge center-align ">Muchas gracias!</div>
                      </div>
                    </div>
    
                    <div className="row">
                         <div className="col s6 m6 l12 center">
                            <div onClick={closeModal2} className="button-alertLarge waves-effect waves-dark btn-block">Continuar</div >
                         </div>
                    </div>
                   </div>
                  </Popup>

    </>
  );
};
export default Production_Line_Ensamblaje;
