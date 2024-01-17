import Navbar from "../Navbar/Navbar";
import QR from "../../assets/logos/QR.png";
import { ReactComponent as Clock_Timming } from '../../assets/icons/clock_timming.svg';

import { Formik, Form, Field, ErrorMessage } from "formik";
import Popup from "reactjs-popup";

import { useState } from "react";

const Edicion_Linea_Productiva = () => {
    
    const [editMode, setEditMode] = useState(false);
    const [fase0State, setFase0State] = useState(false);
    const [fase1State, setFase1State] = useState(false);
    const [fase2State, setFase2State] = useState(false);
    const [fase3State, setFase3State] = useState(false);
    const [fase4State, setFase4State] = useState(false);
    const [fase5State, setFase5State] = useState(false);
    const [fase6State, setFase6State] = useState(false);
    
    const switchFase0 = () => { setFase0State(o => !o) }
    const switchFase1 = () => { setFase1State(o => !o) }
    const switchFase2 = () => { setFase2State(o => !o) }
    const switchFase3 = () => { setFase3State(o => !o) }
    const switchFase4 = () => { setFase4State(o => !o) }
    const switchFase5 = () => { setFase5State(o => !o) }
    const switchFase6 = () => { setFase6State(o => !o) }
    
    
    
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [habilitar, setHabilitar] = useState(false);

    const openModal1 = () => {setOpen1(true);}
    const closeModal1 = () =>{setOpen1(false);}
    const twoFunctions = () =>{closeModal1(); setEditMode(true)}

    const openModal2 =() => {
      setOpen2(true);
  }

    const closeModal2 = () =>{setOpen2(false);}
    const twoFunctions2 = () =>{setOpen2(false); setOpen3(true);}
    const closeModal3 = () =>{setOpen3(false);setEditMode(false)}

const validarSKU = (values) => {
    const errors = {};
    const re = /^[0-9]{8}[a-zA-Z]{2}$/
    if (!values.sku) {
      errors.sku = "Campo obligatorio";
    }
    else if (!re.test(values.sku)){
      errors.sku = "Formato de SKU invalido"
    }
    return errors
  };

const validarVALUES = (values) => {
    const errors = {};
if ( isNaN(parseFloat(values.fase0))) {
      errors.fase0 ='Fase 0 con Error, Ingrese solo números'
    } else if (isNaN(parseFloat(values.fase1))){
      errors.fase1 = 'Fase 1 con Error, Ingrese solo números'
    } else if (isNaN(parseFloat(values.fase2))){
        errors.fase2 = 'Fase 2 con Error, Ingrese solo números'
    } else if (isNaN(parseFloat(values.fase3))){
        errors.fase3 = 'Fase 3 con Error, Ingrese solo números'
    } else if (isNaN(parseFloat(values.fase4))){
        errors.fase4 = 'Fase 4 con Error, Ingrese solo números'
    } else if (isNaN(parseFloat(values.fase5))){
        errors.fase5 = 'Fase 5 con Error, Ingrese solo números'
    } else if (isNaN(parseFloat(values.fase6))){
        errors.fase6 = 'Fase 6 con Error, Ingrese solo números'
    } 
    else if (isNaN(parseFloat(values.plegadora1))){
        errors.plegadora1 = 'Valor Plegadora (Frente #1) con Error, Ingrese solo números'
    } else if (isNaN(parseFloat(values.plegadora2))){
        errors.plegadora2 = 'Valor Plegadora (Respaldo Piq. y Ple.) con Error, Ingrese solo números'
    } else if (isNaN(parseFloat(values.plegadora3))){
       errors.plegadora3 = 'Valor Plegadora (Tapa Sup. Piq.)  con Error, Ingrese solo números'
    } else if (isNaN(parseFloat(values.plegadora4))){
        errors.plegadora4 = 'Valor Plegadora (Tapa Inf. Piq.) con Error, Ingrese solo números'
    }
    
    else if (isNaN(parseFloat(values.impresora1))){
        errors.impresora1 = 'Valor Impresora (Planta Frente) con Error, Ingrese solo números'
    }  else if (isNaN(parseFloat(values.impresora2))){
        errors.impresora2 = 'Valor Impresora (Decorado Tapa) con Error, Ingrese solo números'
    }  

    else if (isNaN(parseFloat(values.punzonadora1))){
      errors.punzonadora1 = 'Valor Punzonadora (Frente Piq.) con Error, Ingrese solo números'
    } else if (isNaN(parseFloat(values.punzonadora2))){
      errors.punzonadora2 = 'Valor Punzonadora (Frente Piq.#2) con Error, Ingrese solo números'
    } else if (isNaN(parseFloat(values.punzonadora3))){
      errors.punzonadora3 = 'Valor Punzonadora (Respaldo Piq. y Ple.) con Error, Ingrese solo números'
    } else if (isNaN(parseFloat(values.punzonadora4))){
      errors.punzonadora4 = 'Valor Punzonadora (Tapa Sup. Piq.) con Error, Ingrese solo números'
    } else if (isNaN(parseFloat(values.punzonadora4))){
      errors.punzonadora5 = 'Valor Punzonadora (Tapa Inf. Piq.) con Error, Ingrese solo números'
    } else {
      setHabilitar(true)
    }
  
     return errors;
  };



  const handleSubmitSKU = (values) => {
    const sku = {sku: values.sku}
    console.log("SKU", sku)
  };
  const handleSubmitRESULT = (values) => {

    const defaultTimes = {

      lineaProductiva:{
        faseO_Testingz3:{
          state:fase0State,
          setTime:(values.fase0)? Number(Number(values.fase0.replace(",",".")).toFixed(2)): Number(values.fase0),
        },
        fase1_PunteroEnsamblador:{
          state:fase1State,
          setTime:(values.fase1)? Number(Number(values.fase1.replace(",",".")).toFixed(2)): Number(values.fase1),
        },
        fase2_BancoPruebaFuncional:{
          state:fase2State,
          setTime:(values.fase2)? Number(Number(values.fase2.replace(",",".")).toFixed(2)): Number(values.fase2),
        },
        fase3_EnsambladorFrente:{
          state:fase3State,
          setTime:(values.fase3)? Number(Number(values.fase3.replace(",",".")).toFixed(2)): Number(values.fase3),
        },
        fase4_PunteroEmbalaje:{
          state:fase4State,
          setTime:(values.fase4)? Number(Number(values.fase4.replace(",",".")).toFixed(2)): Number(values.fase4),
        },
        fase5_BoxPoint:{
          state:fase5State,
          setTime:(values.fase5)? Number(Number(values.fase5.replace(",",".")).toFixed(2)): Number(values.fase5),
        },
        fase6_Pallete:{
          state:fase6State,
          setTime:(values.fase6)? Number(Number(values.fase6.replace(",",".")).toFixed(2)): Number(values.fase6),
        },
      },
      areasAdyacentes:{
        plegadora:{
          frente1:(values.plegadora1)? Number(Number(values.plegadora1.replace(",",".")).toFixed(2)): Number(values.plegadora1),
          respaldoPiqyPle:(values.plegadora2)? Number(Number(values.plegadora2.replace(",",".")).toFixed(2)): Number(values.plegadora2),
          tapaSupPiq:(values.plegadora3)? Number(Number(values.plegadora3.replace(",",".")).toFixed(2)): Number(values.plegadora3),
          tapaInfPiq:(values.plegadora4)? Number(Number(values.plegadora4.replace(",",".")).toFixed(2)): Number(values.plegadora4),
        },
        punzonadora:{
          frentePiq:(values.punzonadora1)? Number(Number(values.punzonadora1.replace(",",".")).toFixed(2)): Number(values.punzonadora1),
          frentePiq2:(values.punzonadora2)? Number(Number(values.punzonadora2.replace(",",".")).toFixed(2)): Number(values.punzonadora2),
          respaldoPiqyPle:(values.punzonadora3)? Number(Number(values.punzonadora3.replace(",",".")).toFixed(2)): Number(values.punzonadora3),
          tapaSupPiq: (values.punzonadora4)? Number(Number(values.punzonadora4.replace(",",".")).toFixed(2)): Number(values.punzonadora4),
          tapaInfPiq: (values.punzonadora5)? Number(Number(values.punzonadora5.replace(",",".")).toFixed(2)): Number(values.punzonadora5),
        },
        impresora:{
          plantaFrente:(values.impresora1)? Number(Number(values.impresora1.replace(",",".")).toFixed(2)): Number(values.impresora1),
          decoradoTapa:(values.impresora2)? Number(Number(values.impresora2.replace(",",".")).toFixed(2)): Number(values.impresora2),
        },
      },
      }

      console.log("DEFAULT TIMES", defaultTimes)
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

            <div className="col s12 m12 l7 no-margin">
              <div className="col s12 m12 l12">

              <p className="font-title-create-plan">Edición Procesos de Manufactura</p>
              <p className="font-subtitle-create-plan">&nbsp;</p>
                </div>
                <div className="col s12 m12 l9">
              <div className="display-box-fine-tunning-scancode z-depth-1">
                  <Formik initialValues={{ sku:''}} 
                  onSubmit={handleSubmitSKU}  validate={validarSKU} isValidating={false} isSubmitting={false} >
                    <Form>

                  <div className="col s3 m1 l1 ">
                    <button type="submit" className="hover-hand">
                      <i className="material-symbols-outlined qr-input">qr_code_scanner</i>
                    </button>
                  </div>
                  <div className="col s9 m10 push-m1 l10 push-l1 ">
                              <div className="input-field">
                                <label className="label-text-scan" htmlFor="sku" >SKU </label>
                                  <Field name="sku" type="text" />
                              <div className="warning-inputs-scan right"><ErrorMessage name="sku" /></div>
                              </div>
                  </div>
                    </Form>
                  </Formik>
                </div>
                    <p className="display-box-title">Si no dispone de lector, ingrese el SKU manualmente.</p>
                </div>
            </div>

            <div className="col s11 m11 l4 push-l2">
              <div className="col s12 m5 l6 no-margin pull-l2">
              {/* <p className="font-form-create-plan hide-on-small-only" >&emsp;</p> 
              <p className="font-tunning-black">CODIGO DE PAIS: 054 (ARG)</p>
              <p className="font-tunning-black">FECHA DE ENSAYO: 27-07-2023</p>
              <p className="font-tunning-black">SKU: 1234-4321</p>
              <p className="font-tunning-black">DESCRIPCION: ARM-J26-KLM</p>
              <p className="font-tunning-black">USUARIO: NOMBRE APELLIDO</p> */}
              
              </div>
                <div className="col s12 m7 l no-margin ">
                <p className="font-form-create-plan">&nbsp;</p>  
                <p className="font-tunning-black">SKU: 12345678910</p>
                <p className="font-tunning-black">DESCRIPCION: DESCRIPCION</p>
                <p className="font-tunning-black">PAIS: 1234</p>
                <p className="font-tunning-black">ULTIMA REVISION:28-08-2023</p>
                <p className="font-tunning-black">OBSERVACIONES: OBS</p>
             
                
                </div>

            </div>
        
            <div className="col s1 m1 l1">
              <img className="qr right " src={QR} alt=""></img>
              {/* <i className=" right material-symbols-outlined print hover-hand">note_add</i> */}
            </div>

          </div>
          </div>
        </div>
      

{/* ------------------------Formulario------------------- */}

{/* //TITULOS// */}

       <div className="container">
       <Formik initialValues={{fase0:0,fase1:0,fase2:0,fase3:0,fase4:0,fase5:0,fase6:0, plegadora1:0, plegadora2:0, plegadora3:0, plegadora4:0, impresora1:0, impresora2:0, punzonadora1:0, punzonadora2:0, punzonadora3:0,punzonadora4:0, punzonadora5:0 }} 
          onSubmit={handleSubmitRESULT}  validate={validarVALUES} isValidating={false} isSubmitting={false} >
          <Form id="fooId">
         

          <div className="row"></div>

          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l6 no-margin">
                  <p className="display-box-title-ensayo-QA left">MAQUINAS CRITICAS</p>
              </div>
              <div className="col l2"></div>
              <div className="col l4">
              <div className="col s1 m1 l5 push-l2">
              <p className="display-box-title-ensayo-QA ">Default Time (mins)</p>
              </div>
              <div className="col s1 m1 l5 push-l2">
              <p className="display-box-title-ensayo-QA ">Set Time (mins)</p>
              </div>

              </div>
              <div className="col s1 m1 l6 left-align no-margin">
                      <p className="display-box-title-ensayo-QA left">PLEGADORA</p>
                      <div className="warning-inputs-scan"><ErrorMessage name="plegadora1"/></div>
                      <div className="warning-inputs-scan"><ErrorMessage name="plegadora2"/></div>
                      <div className="warning-inputs-scan"><ErrorMessage name="plegadora3"/></div>
                      <div className="warning-inputs-scan"><ErrorMessage name="punzonadora1"/></div>
                      <div className="warning-inputs-scan"><ErrorMessage name="punzonadora2"/></div>
                      <div className="warning-inputs-scan"><ErrorMessage name="punzonadora3"/></div>
                      <div className="warning-inputs-scan"><ErrorMessage name="impresora1"/></div>
                      <div className="warning-inputs-scan"><ErrorMessage name="impresora2"/></div>
              </div>
            </div>
          </div>
          <div className="row row-fix"></div>
{/* PLEGADORA Pieza 1 */}
          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l6 display-box-fine-tunning z-depth-1 background-grey ">
                <div className="col l4 left-align">
                    <p className="black-text-inside-box-ing">Nombre de Pieza 1</p>
                </div>
                {/* <div className="col l4 right">
                   <p className="black-text-inside-box-ing">Nombre de Pieza 1</p>
                </div> */}
              </div>
              <div className="col l2"></div>
              <div className="col l4 no-margin">
              <div className="col l5 push-l2">
                  <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">0</p>
                  </div>
                </div>
                <div className="col l5 push-l2">
                  <div className="display-box-fine-tunning z-depth-1 background-light-blue input-field-fine-tunning">
                  <Field name="plegadora1" disabled={!editMode} className="inputfield-fine-tunning" maxLength="5"/>
                  </div>
                </div>
              </div>
{/* PLEGADORA Pieza 2 */}
              <div className="col s1 m1 l6 display-box-fine-tunning z-depth-1 background-grey ">
                <div className="col l4 left-align">
                   <p className="black-text-inside-box-ing">Nombre de Pieza 2</p>
                </div>
                {/* <div className="col l4 right">
                    <p className="black-text-inside-box-ing">Nombre de Pieza 2</p>
                </div> */}
              </div>
              <div className="col l2"></div>
              <div className="col l4 no-margin">
              <div className="col l5 push-l2">
                  <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">0</p>
                  </div>
                </div>
                <div className="col l5 push-l2">
                  <div className="display-box-fine-tunning z-depth-1 background-light-blue input-field-fine-tunning">
                  <Field name="plegadora2" disabled={!editMode} className="inputfield-fine-tunning" maxLength="5"/>
                  </div>
                </div>
              </div>
{/* PLEGADORA Pieza 3 */}
              <div className="col s1 m1 l6 display-box-fine-tunning z-depth-1 background-grey ">
                <div className="col l4 left-align">
                    <p className="black-text-inside-box-ing">Nombre de Pieza 3</p>
                </div>
                {/* <div className="col l4 right">
                    <p className="black-text-inside-box-ing">Nombre de Pieza 3</p>
                </div> */}
              </div>
              <div className="col l2"></div>
              <div className="col l4 no-margin">
              <div className="col l5 push-l2">
                  <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">0</p>
                  </div>
                </div>
                <div className="col l5 push-l2">
                  <div className="display-box-fine-tunning z-depth-1 background-light-blue input-field-fine-tunning">
                  <Field name="plegadora3" disabled={!editMode} className="inputfield-fine-tunning" maxLength="5"/>
                  </div>
                </div>
              </div>
   {/* PLEGADORA TIEMPO TOTAL */}           
              <div className="col s12 m12 l12 center-align no-margin">
              <div className="col l4 no-margin right">
                <div className="col l5 push-l2">
                  <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">0</p>
                  </div>
                </div>
                <div className="col l5 push-l2">
                <div className="black-text-ing-timming">
                    <p className="en-linea">TOTAL PLEGADORA</p>
                  </div>
                  <Clock_Timming />
                </div>
              </div>
            </div>


{/* PUNZONADORA Pieza 1 */}

              <div className="col s1 m1 l12 left-align no-margin">
                      <p className="display-box-title-ensayo-QA left">PUNZONADORA</p>
              </div>

              <div className="col s1 m1 l6 display-box-fine-tunning z-depth-1 background-grey ">
                <div className="col l4 left-align">
                      <p className="black-text-inside-box-ing">Nombre Pieza 1</p>
                </div>
                {/* <div className="col l4 right">
                    <p className="black-text-inside-box-ing">Nombre Pieza 1</p>
                </div> */}
              </div>
              <div className="col l2"></div>
              <div className="col l4 no-margin">
                <div className="col l5 push-l2">
                  <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">0</p>
                  </div>
                </div>
                <div className="col l5 push-l2">
                  <div className="display-box-fine-tunning z-depth-1 background-light-blue input-field-fine-tunning">
                  <Field name="punzonadora1" disabled={!editMode} className="inputfield-fine-tunning" maxLength="5"/>
                  </div>
                </div>
              </div>

{/* PUNZONADORA Pieza 2 */}
              <div className="col s1 m1 l6 display-box-fine-tunning z-depth-1 background-grey ">
                <div className="col l4 left-align">
                    <p className="black-text-inside-box-ing">Nombre Pieza 2</p>
                </div>
                {/* <div className="col l4 right">
                    <p className="black-text-inside-box-ing">Nombre Pieza 2</p>
                </div> */}
              </div>
              <div className="col l2"></div>
              <div className="col l4 no-margin">
                <div className="col l5 push-l2">
                  <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">0</p>
                  </div>
                </div>
                <div className="col l5 push-l2">
                  <div className="display-box-fine-tunning z-depth-1 background-light-blue input-field-fine-tunning">
                  <Field name="punzonadora2" disabled={!editMode} className="inputfield-fine-tunning" maxLength="5"/>
                  </div>
                </div>
              </div>

{/* PUNZONADORA Pieza 3 */}
              <div className="col s1 m1 l6 display-box-fine-tunning z-depth-1 background-grey ">
                <div className="col l4 left-align">
                    <p className="black-text-inside-box-ing">Nombre Pieza 3</p>
                </div>
                {/* <div className="col l4 right">
                    <p className="black-text-inside-box-ing">Nombre Pieza 3</p>
                </div> */}
              </div>
              <div className="col l2"></div>
              <div className="col l4 no-margin">
                <div className="col l5 push-l2">
                  <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">0</p>
                  </div>
                </div>
                <div className="col l5 push-l2">
                  <div className="display-box-fine-tunning z-depth-1 background-light-blue input-field-fine-tunning">
                  <Field name="punzonadora3" disabled={!editMode} className="inputfield-fine-tunning" maxLength="5"/>
                  </div>
                </div>
              </div>
{/* PUNZONADORA TIEMPO TOTAL */}           
              <div className="col s12 m12 l12 center-align no-margin">
              <div className="col l4 no-margin right">
                <div className="col l5 push-l2">
                  <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">0</p>
                  </div>
                </div>
                <div className="col l5 push-l2">
                  <div className="black-text-ing-timming">
                    <p className="en-linea">TOTAL PUNZONADORA</p>
                  </div>
                  <Clock_Timming />
                </div>
              </div>
            </div>

            {/* IMPRESORA Pieza 1 */}
            <div className="col s1 m1 l12 left-align no-margin">
                      <p className="display-box-title-ensayo-QA left">IMPRESORA</p>
              </div>
            <div className="col s1 m1 l6 display-box-fine-tunning z-depth-1 background-grey ">
                <div className="col l4 left-align">
                    <p className="black-text-inside-box-ing">Nombre Pieza 1</p>
                </div>
                {/* <div className="col l4 right">
                    <p className="black-text-inside-box-ing">Nombre Pieza 1</p>
                </div> */}
              </div>
              <div className="col l2"></div>
              <div className="col l4 no-margin">
              <div className="col l5 push-l2">
                  <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">0</p>
                  </div>
                </div>
                <div className="col l5 push-l2">
                  <div className="display-box-fine-tunning z-depth-1 background-light-blue input-field-fine-tunning">
                  <Field name="impresora1" disabled={!editMode} className="inputfield-fine-tunning" maxLength="5"/>
                  </div>
                </div>
              </div>
{/* IMPRESORA Pieza 2 */}
              <div className="col s1 m1 l6 display-box-fine-tunning z-depth-1 background-grey ">
                <div className="col l4 left-align">
                <p className="black-text-inside-box-ing">Nombre Pieza 2</p>
                </div>
                {/* <div className="col l4 right">
                    <p className="black-text-inside-box-ing">Nombre Pieza 2</p>
                </div> */}
              </div>
              <div className="col l2"></div>
              <div className="col l4 no-margin">
              <div className="col l5 push-l2">
                  <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">0</p>
                  </div>
                </div>
                <div className="col l5 push-l2">
                  <div className="display-box-fine-tunning z-depth-1 background-light-blue input-field-fine-tunning">
                  <Field name="impresora2" disabled={!editMode} className="inputfield-fine-tunning" maxLength="5"/>
                  </div>
                </div>
              </div>
{/* IMPRESORA TIEMPO TOTAL */}           
                 <div className="col s12 m12 l12 center-align no-margin">
              <div className="col l4 no-margin right">
                <div className="col l5 push-l2">
                  <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">0</p>
                  </div>
                </div>
                <div className="col l5 push-l2">
                <div className="black-text-ing-timming">
                    <p className="en-linea">TOTAL IMPRESORA</p>
                  </div>
                  <Clock_Timming />
                </div>
              </div>
            </div>
            </div>
            </div>
            <div className="row"></div>


            <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin ">
              <div className="col s1 m1 l6 no-margin">
                  <p className="display-box-title-ensayo-QA left">LINEA DE PRODUCCION</p>
              </div>
              <div className="col l2"></div>
              <div className="col l4">
              <div className="col s1 m1 l5 push-l2">
              <p className="display-box-title-ensayo-QA ">Default Time (mins)</p>
              </div>
              <div className="col s1 m1 l5 push-l2">
              <p className="display-box-title-ensayo-QA ">Set Time (mins)</p>
              </div>

              </div>
              
              <div className="col s1 m1 l6 left-align">
              <div className="warning-inputs-scan"><ErrorMessage name="fase0"/></div>
              <div className="warning-inputs-scan"><ErrorMessage name="fase1"/></div>
              <div className="warning-inputs-scan"><ErrorMessage name="fase2"/></div>
              <div className="warning-inputs-scan"><ErrorMessage name="fase3"/></div>
              <div className="warning-inputs-scan"><ErrorMessage name="fase4"/></div>
              <div className="warning-inputs-scan"><ErrorMessage name="fase5"/></div>
              <div className="warning-inputs-scan"><ErrorMessage name="fase6"/></div>
              </div>
            </div>
          </div>
          <div className="row row-fix"></div>

    {/* FASES PRODUCTIVAS */}
          
          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l6 display-box-fine-tunning z-depth-1 background-grey ">
                <div className="col l4 left-align">
                     <p className="grey-text-inside-box-ing">Fase Producción 0</p>
                </div>
                <div className="col l4 right">
                    <p className="black-text-inside-box-ing">Test HEX</p>
                </div>
              </div>
              <div className="col l2">
                <div className="col l8">
                  {editMode === true?<>
                  {fase0State === true?
                  <button onClick={switchFase0} className="btn-small btn-block waves-effect waves-light button-desactivar-linea-productiva z-depth-2" type="button">DESACTIVAR</button>:
                  <button onClick={switchFase0} className="btn-small btn-block waves-effect waves-light  button-activar-linea-productiva z-depth-2" type="button">ACTIVAR</button>}</>:null}
                </div>
              </div>
              <div className="col l4 no-margin">
                <div className="col l5 push-l2">
                  <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">0</p>
                  </div>
                </div>
                <div className="col l5 push-l2">
                  <div className="display-box-fine-tunning z-depth-1 background-light-blue input-field-fine-tunning">
                  <Field name="fase0" disabled={!editMode} className="inputfield-fine-tunning" maxLength="5"/>
                  </div>
                </div>
              </div>
            </div>

            <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l6 display-box-fine-tunning z-depth-1 background-grey ">
                <div className="col l4 left-align">
                     <p className="grey-text-inside-box-ing">Fase Producción 1</p>
                </div>
                <div className="col l4 right">
                    <p className="black-text-inside-box-ing">Puntero de Ensamblaje</p>
                </div>
              </div>
              <div className="col l2">
                <div className="col l8">
                {editMode === true?<>
                  {fase1State === true?
                  <button onClick={switchFase1} className="btn-small btn-block waves-effect waves-light button-desactivar-linea-productiva z-depth-2" type="button">DESACTIVAR</button>:
                  <button onClick={switchFase1} className="btn-small btn-block waves-effect waves-light button-activar-linea-productiva z-depth-2" type="button">ACTIVAR</button>}</>:null}
                </div>
              </div>
              <div className="col l4 no-margin">
              <div className="col l5 push-l2">
                  <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">0</p>
                  </div>
                </div>
                <div className="col l5 push-l2">
                  <div className="display-box-fine-tunning z-depth-1 background-light-blue input-field-fine-tunning">
                  <Field name="fase1" disabled={!editMode} className="inputfield-fine-tunning" maxLength="5"/>
                  </div>
                </div>
              </div>

            </div>

            <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l6 display-box-fine-tunning z-depth-1 background-grey ">
                <div className="col l4 left-align">
                     <p className="grey-text-inside-box-ing">Fase Producción 2</p>
                </div>
                <div className="col l4 right">
                    <p className="black-text-inside-box-ing">Testinf Funcional</p>
                </div>
              </div>
              <div className="col l2">
                <div className="col l8">
                {editMode === true?<>
                  {fase2State === true?
                  <button  onClick={switchFase2} className="btn-small btn-block waves-effect waves-light button-desactivar-linea-productiva z-depth-2" type="button">DESACTIVAR</button>:
                  <button  onClick={switchFase2} className="btn-small btn-block waves-effect waves-light button-activar-linea-productiva z-depth-2" type="button">ACTIVAR</button>}</>:null}
                </div>
              </div>
              <div className="col l4 no-margin">
              <div className="col l5 push-l2">
                  <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">0</p>
                  </div>
                </div>
                <div className="col l5 push-l2">
                  <div className="display-box-fine-tunning z-depth-1 background-light-blue input-field-fine-tunning">
                  <Field name="fase2" disabled={!editMode} className="inputfield-fine-tunning" maxLength="5"/>
                  </div>
                </div>
              </div>
            </div>
            <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l6 display-box-fine-tunning z-depth-1 background-grey ">
                <div className="col l4 left-align">
                     <p className="grey-text-inside-box-ing">Fase Producción 3</p>
                </div>
                <div className="col l4 right">
                    <p className="black-text-inside-box-ing">Puntero Embalaje</p>
                </div>
              </div>
              <div className="col l2">
                <div className="col l8">
                {editMode === true?<>
                  {fase3State === true?
                  <button onClick={switchFase3} className="btn-small btn-block waves-effect waves-light button-desactivar-linea-productiva z-depth-2" type="button">DESACTIVAR</button>:
                  <button onClick={switchFase3} className="btn-small btn-block waves-effect waves-light button-activar-linea-productiva z-depth-2" type="button">ACTIVAR</button>}</>:null}
                </div>
              </div>
              <div className="col l4 no-margin">
                <div className="col l5 push-l2">
                  <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">0</p>
                  </div>
                </div>
                <div className="col l5 push-l2">
                  <div className="display-box-fine-tunning z-depth-1 background-light-blue input-field-fine-tunning">
                  <Field name="fase3" disabled={!editMode} className="inputfield-fine-tunning" maxLength="5"/>
                  </div>
                </div>
              </div>
            </div>
            <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l6 display-box-fine-tunning z-depth-1 background-grey ">
                <div className="col l4 left-align">
                     <p className="grey-text-inside-box-ing">Fase Producción 4</p>
                </div>
                <div className="col l4 right">
                    <p className="black-text-inside-box-ing">Embalaje #1</p>
                </div>
              </div>
              <div className="col l2">
                <div className="col l8">
                {editMode === true?<>
                  {fase4State === true?
                  <button onClick={switchFase4} className="btn-small btn-block waves-effect waves-light button-desactivar-linea-productiva z-depth-2" type="button">DESACTIVAR</button>:
                  <button onClick={switchFase4} className="btn-small btn-block waves-effect waves-light button-activar-linea-productiva z-depth-2" type="button">ACTIVAR</button>}</>:null}
                </div>
              </div>
              <div className="col l4 no-margin">
                 <div className="col l5 push-l2">
                  <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">0</p>
                  </div>
                </div>
                <div className="col l5 push-l2">
                  <div className="display-box-fine-tunning z-depth-1 background-light-blue input-field-fine-tunning">
                  <Field name="fase4" disabled={!editMode} className="inputfield-fine-tunning" maxLength="5"/>
                  </div>
                </div>
              </div>
            </div>
            <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l6 display-box-fine-tunning z-depth-1 background-grey ">
                <div className="col l4 left-align">
                     <p className="grey-text-inside-box-ing">Fase Producción 5</p>
                </div>
                <div className="col l4 right">
                    <p className="black-text-inside-box-ing">Embalaje #1</p>
                </div>
              </div>
              <div className="col l2">
                <div className="col l8">
                {editMode === true?<>
                  {fase5State === true?
                  <button  onClick={switchFase5} className="btn-small btn-block waves-effect waves-light button-desactivar-linea-productiva z-depth-2" type="button">DESACTIVAR</button>:
                  <button  onClick={switchFase5} className="btn-small btn-block waves-effect waves-light button-activar-linea-productiva z-depth-2" type="button">ACTIVAR</button>}</>:null}
                </div>
              </div>
              <div className="col l4 no-margin">
              <div className="col l5 push-l2">
                  <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">0</p>
                  </div>
                </div>
                <div className="col l5 push-l2">
                  <div className="display-box-fine-tunning z-depth-1 background-light-blue input-field-fine-tunning">
                  <Field name="fase5" disabled={!editMode} className="inputfield-fine-tunning" maxLength="5"/>
                  </div>
                </div>
              </div>
            </div>
            <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l6 display-box-fine-tunning z-depth-1 background-grey ">
                <div className="col l4 left-align">
                     <p className="grey-text-inside-box-ing">Fase Producción 6</p>
                </div>
                <div className="col l4 right">
                    <p className="black-text-inside-box-ing">Paletizado</p>
                </div>
              </div>
              <div className="col l2">
                <div className="col l8">
                {editMode === true?<>
                  {fase6State === true?
                  <button onClick={switchFase6} className="btn-small btn-block waves-effect waves-light button-desactivar-linea-productiva z-depth-2" type="button">DESACTIVAR</button>:
                  <button onClick={switchFase6} className="btn-small btn-block waves-effect waves-light button-activar-linea-productiva z-depth-2" type="button">ACTIVAR</button>}</>:null}
                </div>
              </div>
              <div className="col l4 no-margin">
                <div className="col l5 push-l2">
                  <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">0</p>
                  </div>
                </div>
                <div className="col l5 push-l2">
                  <div className="display-box-fine-tunning z-depth-1 background-light-blue input-field-fine-tunning">
                  <Field name="fase6" disabled={!editMode} className="inputfield-fine-tunning" maxLength="5"/>
                  </div>
                </div>
              </div>
            </div>

            <div className="col s12 m12 l12 center-align no-margin">
              <div className="col l4 no-margin right">
                <div className="col l5 push-l2">
                  <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">0</p>
                  </div>
                </div>
                <div className="col l5 push-l2">
                <div className="black-text-ing-timming">
                    <p className="en-linea">TOTAL LINEA PRODUCTIVA</p>
                  </div>
                  <Clock_Timming />
                </div>
              </div>
            </div>


          </div>

            <div className="row"></div>
            <div className="row"></div>
            
          <div className="row">
            <div className="col s12 m12 l6 no-margin "><a href="/dashboard">
              <button className="btn-small btn-block waves-effect waves-light button-regresar-create-plan z-depth-2" type="button">
                REGRESAR
              </button></a>
            </div>
          <div className="col l2"></div>
            <div className="col l4 ">
              <div className="col l10 push-l2 no-margin">
{editMode===false?
            <button onClick = {openModal1} className="btn-small btn-block waves-effect waves-light button-regresar-create-plan z-depth-2" type="button">
                 EDITAR PARAMETROS
            </button>:
            <button  disabled={habilitar===false} onClick={openModal2} className="btn-small btn-block waves-effect waves-light button-modoedicion-batch-list z-depth-2" type="button">
                GUARDAR CAMBIOS
            </button>}
            </div>
            </div>
        </div>

        <Popup contentStyle={{background: "0"}} open={open1} closeOnDocumentClick onClose={closeModal1} lockScroll = {true}>
               <div className="alert z-depth-1" >
                <div className="row row-fix ">
                  <div className="col s12 m12 l12 no-margin">
                    <div className="atention center-align">ATENCION</div>
                  </div>
                  <div className="col s12 m12 l12 no-margin divisor-bottom-line">
                    <div  className="alert-msg center-align ">Esta por modificar tiempos de trabajo</div>
                  </div>
                </div>

                <div className="row">
                     <div className="col s6 m6 l6 divisor-right-line center">
                        <div onClick={closeModal1} className="button-alert waves-effect waves-dark btn-block">Cancelar</div >
                     </div>
                      <div className="col s6 m6 l6 center">
                       <div onClick={twoFunctions} className="button-alert waves-effect waves-dark btn-block">Continuar</div>
                      </div>
                </div>
               </div>
              </Popup>
              <Popup contentStyle={{background: "0"}} open={open2} closeOnDocumentClick onClose={closeModal2} lockScroll = {true}>
               <div className="alert z-depth-1" >
                <div className="row row-fix ">
                  <div className="col s12 m12 l12 no-margin">
                    <div className="atention center-align">ATENCION</div>
                  </div>
                  <div className="col s12 m12 l12 no-margin divisor-bottom-line">
                    <div  className="alert-msg center-align ">¿Esta seguro de guardar los cambios?</div>
                  </div>
                </div>

                <div className="row">
                     <div className="col s6 m6 l6 divisor-right-line center">
                        <div onClick={closeModal2} className="button-alert waves-effect waves-dark btn-block">Cancelar</div >
                     </div>
                      <div className="col s6 m6 l6 center">
                       <button form="fooId" onClick={twoFunctions2} className="button-alert waves-dark btn-block" type="submit">Continuar</button>
                      </div>
                </div>
               </div>   
              </Popup>
              <Popup contentStyle={{background: "0"}} open={open3} closeOnDocumentClick onClose={closeModal3} lockScroll = {true}>
               <div className="alert z-depth-1" >
                <div className="row row-fix ">
                  <div className="col s12 m12 l12 no-margin">
                    <div className="atention center-align">Valores actualizados Exitosamente!</div>
                  </div>
                  <div className="col s12 m12 l12 no-margin divisor-bottom-line">
                    <div className="alert-msg center-align ">Muchas Gracias.</div>
                  </div>
                </div>

                <div className="row">
                      <div className="col s12 m12 l12 center">
                       <div onClick={closeModal3} className="button-alert waves-effect waves-dark btn-block">Continuar</div>
                      </div>
                </div>
               </div>
              </Popup>
        </Form>
      </Formik>  

      </div>
    </>
  );
};
export default Edicion_Linea_Productiva;
