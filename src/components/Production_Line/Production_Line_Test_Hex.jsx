import Navbar from "../Navbar/Navbar";
import QR from "../../assets/logos/QR.png";
import Popup from 'reactjs-popup';
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";



const Production_Line = () => {

  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [habilitar, setHabilitar] = useState(true);
  const [test, setTest] = useState(false);

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
  const validarCodigoDeCamara = (values) => {
    const errors = {};
    const re = /^\d{8}$/;
    if (!values.codigoDeCamara) {
      errors.codigoDeCamara = "Campo obligatorio";
    } else if (!re.test(values.codigoDeCamara)){
      errors.codigoDeCamara = "Código de serie de Cámara inválido"
      setTest(false);
    } else if (values.codigoDeCamara){
      setTest(true);
    }
  
    return errors
  };
  const validar = (values) => {
    const errors = {};

    if(!values.inspeccionVisual){
      errors.inspeccionVisual = "Por favor seleccione calificacion Visual"
    } else if(!values.resultadoTestHex){
      errors.resultadoTestHex = "Por favor realize Test Hex"
    } else {
      setHabilitar(true)
    }
    return errors;
  };

  const handleSubmitCodigoDeCamara = (values) => {
    const codigoDeCamara = {codigoDeCamara: values.codigoDeCamara}
    console.log("CODIGO DE CAMARA", codigoDeCamara)
  };

  const handleSubmit = (values) => {

  const TestHex = {
    codigoDeCamara: values.codigoDeCamara,
    sku:values.sku,
    lote:values.lote,
    descripcion: values.descripcion,
    resultadoTestHex: values.resultadoTestHex,
    inspeccionVisual: values.inspeccionVisual,
    date: values.date,
    operador:values.opeador,
    observaciones:values.observaciones,
  }
  console.log("TEST HEX",TestHex)

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
                  <p className="subtitle-production-line in-line">&nbsp; (Test Hex)</p>
    <div className="row"></div>
                  <div className="col s12 m12 l7 no-margin">
              <p className="font-subtitle-create-plan">Verificación de Procesos</p>
              <div className="display-box-fine-tunning-scancode z-depth-1">
                  <Formik initialValues={{ codigoDeCamara:''}} 
                     onSubmit={handleSubmitCodigoDeCamara} validate={validarCodigoDeCamara} isValidating={false} isSubmitting={false} >
                    <Form>

                  <div className="col s3 m1 l1 ">
                    <button type="submit" className="hover-hand">
                      <i className="material-symbols-outlined qr-input">qr_code_scanner</i>
                    </button>
                  </div>
                  <div className="col s9 m10 push-m1 l10 push-l1 ">
                              <div className="input-field">
                                <label className="label-text-scan" htmlFor="chasis" >Código de serie de Cámara</label>
                                  <Field name="codigoDeCamara" type="text" />
                              <div className="warning-inputs-scan right"><ErrorMessage name="codigoDeCamara" /></div>
                              </div>
                  </div>
                    </Form>
                  </Formik>
                </div>
                <p className="display-box-title">Si no dispone de lector, ingrese el Código manualmente.</p>
              </div>

              </div>
              <div className="col s12 m7 l2">
                  <p className="font-form-create-plan">RC:16-062</p>  
                  <p className="font-tunning-black">LOTE: 1234</p>
                  <p className="font-tunning-black">CODIGO SKU CAMARA: 12345</p>
                  <p className="font-tunning-black">SKU CALEFON: 1234561313</p>
                  <p className="font-tunning-black">DESCRIPCION: DESCRIPCION</p>

              </div>
              <div className="col s1 m1 l1 right">
              <img className="qr right " src={QR} alt=""></img>
              {/* <i className=" right material-symbols-outlined print">print</i> */}
            </div>
            <div className="col s12 m12 l7 no-margin">
              
            </div>

        
         

          </div>
          </div>
        </div>
      

      {/* ---------------------------------------Formulario------------------- */}


      <Formik
              initialValues={{ codigoDeCamara:'', sku:'', lote:'', descripcion:'', resultadoTestHex:'', inspeccionVisual:'', date:new Date(), operador:'', observaciones:''}}
              onSubmit={handleSubmit}
              validate={validar}
              validateOnChange={true}
              validateOnBlur={true}
            >
              <Form id="popup">

      <div className="container">

        <div className="warning-inputs">
          <ErrorMessage name="resultadoTestHex" />
          <ErrorMessage name="inspeccionVisual" />                              
        </div>

        <div className="row">
          

          <div className="col s12 m12 l4 ">
            {/* <div className="col s12 m12 l12 no-margin margin-top-test-hex">
              <button  className="btn-block btn-block waves-effect waves-light button-ingresar-create-plan z-depth-2" type="button">
               REALIZAR TEST
              </button>
            </div> */}
{test===true?
          <div className="col l12 no-margin">
            <p className="display-box-title ">&nbsp;</p>
              <div className="boton-test-box-test-hex z-depth-2 valign-wrapper hover-hand waves-effect waves-effect waves-light"  type="button">
                  <p className="text-boton-test-hex">REALIZAR TEST</p>
            </div>
          </div>:
          <div className="col l12 no-margin">
            <p className="display-box-title ">&nbsp;</p>
              <div className="boton-disabled-test-box-test-hex z-depth-2 valign-wrapper hover-hand waves-effect waves-effect waves-light"  type="button">
                  <p className="text-boton-test-hex">REALIZAR TEST</p>
            </div>
          </div>}
            <div className="col l12 no-margin">
              <p className="display-box-title">Resultado Test Hex</p>
                <div className="resultado-test-box-test-hex z-depth-1 valign-wrapper">
                  <p className="text-resultado-test-hex">&nbsp;&nbsp; APROBADO</p>
                  {/* <Field name="operador"  className="input-field-common" type="text"/> */}
                </div>
            </div>
          </div>

          {/* columna medio */}

          <div className="col s12 m12 l4">
            {/* <div className="col l12 no-margin">
                  <p className="display-box-title">Inspección Visual</p>
                  <div className="display-box valign-wrapper">   
                        <Field as="select" name="inspeccionVisual"  className="browser-default collapsible-header">
                          <option disabled value="">Seleccione Calificación</option>     
                          <option value="aprobado">Aprobado</option>
                          <option value="rechazado">Rechazado</option>
                        </Field> 
                  </div>
            </div> */}

            <div className="col s12 m12 l12 no-margin">
            <p className="display-box-title ">Observaciones Inspección Visual</p>
              <div className="inspeccion-visual-test-box-test-hex">
              <Field as="textarea" name="observaciones" className="input-field-text-test-hex materialize-textarea" />
            </div>
          </div>
          <div className="col l12 no-margin">
                  <p className="display-box-title">Cámaras Total Lote</p>
                  <div className="camarasT-box-test-hex z-depth-1 valign-wrapper">
                    <p className="camaras-conteo-test-hex">127</p>
                </div>
          </div>







          </div>
{/* columna derecha */}
          <div className="col l4">
                <div className="col l12 no-margin">
                      <p className="display-box-title">Fecha de Test</p>
                        <div className="display-box valign-wrapper">
                        <Field name="date"  className="input-field-common" type="text"/>
                      </div>
                    </div>
                <div className="col l12 no-margin">
                  <p className="display-box-title">Operador</p>
                    <div className="display-box valign-wrapper">
                    <Field name="operador"  className="input-field-common" type="text"/>
                  </div>
                </div>
                <div className="col l6 ">
                  <p className="display-box-title">Cámaras Aprobadas</p>
                  <div className="camarasA-box-test-hex z-depth-1 valign-wrapper">
                    <p className="camaras-conteo-test-hex">14</p>
                </div>
                </div>
                <div className="col l6">
                  <p className="display-box-title">Cámaras Rechazadas</p>
                  <div className="camarasR-box-test-hex z-depth-1 valign-wrapper">
                    <p className="camaras-conteo-test-hex">2</p>
                </div>
                </div>
          </div>
          
        </div>

         {/* botones */}
 
        <div className="row">
            <div className="col s12 m12 l4">
              <button onClick={restart} className="btn-small btn-block waves-effect waves-light button-regresar-create-plan z-depth-2" type="button">
              REESCANEAR
              </button>
            </div>

            <div className="col s12 m12 l8">
              <div >
                 <button disabled={habilitar === false} onClick={openModal1} className="btn-small btn-block waves-effect waves-light button-ingresar-create-plan z-depth-2 " type="button">
                   REGISTRAR TEST HEX
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
                      <div  className="alert-msgLarge center-align ">Esta por registrar Test Hex</div>
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
                        <div className="atentionLarge center-align">Test Hex registrado exitosamente</div>
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
export default Production_Line;
