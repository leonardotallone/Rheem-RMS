import Navbar from "../Navbar/Navbar";
import QR from "../../assets/logos/QR.png";
import { ReactComponent as PDFicon } from '../../assets/icons/pdf 27x27.svg';
import { Formik, Form, Field, ErrorMessage } from "formik";
import Popup from "reactjs-popup";
import { useState } from "react";

const Documentos_Seguridad_Industrial = () => {
    
    const [editMode, setEditMode] = useState(false);
   
    const [fase0] = useState(false);

    const [open1, setOpen1] = useState(false);
    // const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
  


    const openModal1 = () => {setOpen1(true);}
    const closeModal1 = () =>{setOpen1(false);}
    const twoFunctions = () =>{closeModal1(); setEditMode(true)}

  //   const openModal2 =() => {
  //     setOpen2(true)
  //   if(mistakes === undefined){
  //     setOpen2(true);
  //   } else if((Object.keys(mistakes).length === 0)){
  //     setOpen2(true);
  //   }
  // }
    // const closeModal2 = () => {setOpen2(false);}
    // const twoFunctions2 = () => {setOpen2(false); setOpen3(true);}
    const closeModal3 = () => {setOpen3(false);setEditMode(false)}


const validarVALUES = (values) => {
    const errors = {};
    var extensionPDF = /(\.pdf)$/i;
     if (values.fase0Maquina && !extensionPDF.exec(values.fase0Maquina)) {
      errors.fase0Maquina ='Seleccione archivo PDF para Maquina FASE 0'
     } else if (values.fase0IT && !extensionPDF.exec(values.fase0IT)){  
      errors.fase0IT = 'Seleccione archivo PDF para IT FASE 0'
    } else if (values.fase0PTS && !extensionPDF.exec(values.fase0PTS)){
        errors.fase0PTS = 'Seleccione archivo PDF para PTS FASE 0'
    } else if (values.fase1Maquina && !extensionPDF.exec(values.fase1Maquina)){
        errors.fase1Maquina = 'Seleccione archivo PDF para Maquina FASE 1'
    } else if (values.fase1IT && !extensionPDF.exec(values.fase1IT)){
        errors.fase1IT = 'Seleccione archivo PDF para IT FASE 1'
    } else if (values.fase1PTS && !extensionPDF.exec(values.fase1PTS)){
        errors.fase1PTS = 'Seleccione archivo PDF para PTS FASE 1'
    } else if (values.fase2Maquina && !extensionPDF.exec(values.fase2Maquina)){
        errors.fase2Maquina = 'Seleccione archivo PDF para Maquina FASE 2'
    } else if (values.fase2IT && !extensionPDF.exec(values.fase2IT)){
        errors.fase2IT = 'Seleccione archivo PDF para IT FASE 2'
    }  else if (values.fase2PTS && !extensionPDF.exec(values.fase2PTS)){
        errors.fase2PTS = 'Seleccione archivo PDF para PTS FASE 2'
    }  else if (values.fase3Maquina && !extensionPDF.exec(values.fase3Maquina)){
        errors.fase3Maquina = 'Seleccione archivo PDF para MAQUINA FASE 3'
    }  else if (values.fase3IT && !extensionPDF.exec(values.fase3IT)){
        errors.fase3IT = 'Seleccione archivo PDF para IT FASE 3'
    }  else if (values.fase3PTS && !extensionPDF.exec(values.fase3PTS)){
        errors.fase3PTS = 'Seleccione archivo PDF para PTS FASE 3'
    }  else if (values.fase4Maquina && !extensionPDF.exec(values.fase4Maquina)){
        errors.fase4Maquina = 'Seleccione archivo PDF para MAQUINA FASE 4'
    }  else if (values.fase4IT && !extensionPDF.exec(values.fase4IT)){
        errors.fase4IT = 'Seleccione archivo PDF para IT FASE 4'
    }  else if (values.fase4PTS && !extensionPDF.exec(values.fase4PTS)){
        errors.fase4PTS = 'Seleccione archivo PDF para PTS FASE 4'
    } else if (values.fase5Maquina && !extensionPDF.exec(values.fase5Maquina)){
        errors.fase5Maquina = 'Seleccione archivo PDF para MAQUINA FASE 5'
    } else if (values.fase5IT && !extensionPDF.exec(values.fase5IT)){
        errors.fase5IT = 'Seleccione archivo PDF para IT FASE 5'
    } else if (values.fase5PTS && !extensionPDF.exec(values.fase5PTS)){
        errors.fase5PTS = 'Seleccione archivo PDF para PTS FASE 5'
    }  else if (values.fase6Maquina && !extensionPDF.exec(values.fase6Maquina)){
        errors.fase6Maquina = 'Seleccione archivo PDF para MAQUINA FASE 6'
    }  else if (values.fase6IT && !extensionPDF.exec(values.fase6IT)){
        errors.fase6IT = 'Seleccione archivo PDF para IT FASE 6'
    }  else if (values.fase6PTS && !extensionPDF.exec(values.fase6PTS)){
        errors.fase6PTS = 'Seleccione archivo PDF para PTS FASE 6'
    } else if (values.impresoraMaquina && !extensionPDF.exec(values.impresoraMaquina)){
        errors.impresoraMaquina = 'Seleccione archivo PDF para MAQUINA impresora'
    } else if (values.impresoraIT && !extensionPDF.exec(values.impresoraIT)){
        errors.impresoraIT = 'Seleccione archivo PDF para IT impresora'
    } else if (values.impresoraPTS && !extensionPDF.exec(values.impresoraPTS)){
        errors.impresoraPTS = 'Seleccione archivo PDF para PTS impresora'
    } else if (values.punzonadoraMaquina && !extensionPDF.exec(values.punzonadoraMaquina)){
        errors.punzonadoraMaquina = 'Seleccione archivo PDF para MAQUINA punzonadora'
    }  else if (values.punzonadoraIT && !extensionPDF.exec(values.punzonadoraIT)){
        errors.punzonadoraIT = 'Seleccione archivo PDF para IT punzonadora'
    }   else if (values.punzonadoraPTS && !extensionPDF.exec(values.punzonadoraPTS)){
        errors.punzonadoraPTS = 'Seleccione archivo PDF para PTS punzonadora'
    }  else if (values.plegadoraMaquina && !extensionPDF.exec(values.plegadoraMaquina)){
        errors.plegadoraMaquina = 'Seleccione archivo PDF para MAQUINA plegadora'
    }  else if (values.plegadoraIT && !extensionPDF.exec(values.plegadoraIT)){
        errors.plegadoraIT = 'Seleccione archivo PDF para IT plegadora'
    }  else if (values.plegadoraPTS && !extensionPDF.exec(values.plegadoraPTS)){
        errors.plegadoraPTS = 'Seleccione archivo PDF para PTS plegadora'
    }

     return errors;
  };
  
  const handleSubmitRESULT = (values) => {
    
    const liberacionMaquinas = {
       lineaProductiva:{
                 fase0:{ fase0Maquina:values.fase0Maquina,
                  fase0IT:values.fase0IT,
                  fase0PTS:values.fase0PTS,
                 },
                 fase1:{ fase1Maquina:values.fase1Maquina,
                  fase1IT:values.fase1IT,
                  fase1PTS:values.fase1PTS,
                 },
                 fase2:{ fase2Maquina:values.fase2Maquina,
                    fase2IT:values.fase2IT,
                    fase2PTS:values.fase2PTS,
                  },
                  fase3:{ fase3Maquina:values.fase3Maquina,
                    fase3IT:values.fase3IT,
                    fase3PTS:values.fase3PTS,
                  }, 
                  fase4:{ fase4Maquina:values.fase4Maquina,
                    fase4IT:values.fase4IT,
                    fase4PTS:values.fase4PTS,
                  }, 
                  fase5:{ fase5Maquina:values.fase5Maquina,
                    fase5IT:values.fase5IT,
                    fase5PTS:values.fase5PTS,
                  }, 
                  fase6:{ fase3Maquina:values.fase6Maquina,
                    fase6IT:values.fase6IT,
                    fase6PTS:values.fase3PTS,
                  },      
          },
          areasAdyacentes:{
                  impresora:{
                    impresoraMaquina:values.impresoraMaquina,
                    impresoraIT:values.impresoraIT,
                    impresoraPTS:values.impresoraPTS,
                  },
                  punzonadora:{
                    punzonadoraMaquina:values.punzonadoraMaquina,
                    punzonadoraIT:values.punzonadoraIT,
                    punzonadoraPTS:values.punzonadoraPTS,
                  },
                  plegadora:{
                    plegadoraMaquina:values.plegadoraMaquina,
                    plegadoraIT:values.plegadoraIT,
                    plegadoraPTS:values.plegadoraPTS,
                  },
          }
    }

    setOpen3(true)
    // window.location.reload()
    console.log("LIBERACION DE MAQUINAS", liberacionMaquinas)
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
              <div className="col s12 m12 l9">
              <p className="font-title-create-plan">Documentos Seguridad Industrial</p>
              </div>
            </div>

            <div className="col s11 m11 l4 ">
              <div className="col s12 m5 l6 no-margin pull-l2">
              {/* <p className="font-form-create-plan hide-on-small-only" >&emsp;</p> 
              <p className="font-tunning-black">CODIGO DE PAIS: 054 (ARG)</p>
              <p className="font-tunning-black">FECHA DE ENSAYO: 27-07-2023</p>
              <p className="font-tunning-black">SKU: 1234-4321</p>
              <p className="font-tunning-black">DESCRIPCION: ARM-J26-KLM</p>
              <p className="font-tunning-black">USUARIO: NOMBRE APELLIDO</p> */}
              
              </div>
                <div className="col s12 m7 l6 no-margin ">
                <p className="font-form-create-plan">RC:16-062</p>  
                <p className="font-tunning-black">PAIS: 1234</p>
                <p className="font-tunning-black">ULTIMA REVISION:28-08-2023</p>
                <p className="font-tunning-black">SKU: 12345678910</p>
                <p className="font-tunning-black">DESCRIPCION: DESCRIPCION</p>
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
       <Formik initialValues={{fase0Maquina:'',fase0IT:'', fase0PTS:'', fase1Maquina:'',fase1IT:'',fase1PTS:'', fase2Maquina:'', fase2IT:'', fase2PTS:'', fase3Maquina:'', fase3IT:'', fase3PTS:'', fase4Maquina:'', fase4IT:'', fase4PTS:'', fase5Maquina:'', fase5IT:'',fase5PTS:'', fase6Maquina:'', fase6IT:'',fase6PTS:'', plegadoraMaquina:'', plegadoraIT:'',plegadoraPTS:'',impresoraMaquina:'', impresoraIT:'', impresoraPTS:'', punzonadoraMaquina:'', punzonadoraIT:'', punzonadoraPTS:''}} 
          onSubmit={handleSubmitRESULT}  validate={validarVALUES}  isValidating={false} isSubmitting={false} >
          <Form id="fooId">
          
         <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l12">
                  <p className="display-box-title-ensayo-QA left">LINEA PRODUCTIVA</p>
                 
              </div>
              <div className="col l5"></div>
              <div className="col l1"></div>
              <div className="col l6">
                <div className="col l4">
                <p className="display-box-title-ensayo-QA ">Liberación de Máquina</p> 
                </div>
                <div className="col l4">
                <p className="display-box-title-ensayo-QA ">IT</p> 
                </div>
                <div className="col l4">
                <p className="display-box-title-ensayo-QA ">&nbsp;&nbsp;&nbsp;PTS</p> 
                </div>
              </div>
        
              <div className="col s1 m1 l5 left-align">
              
         
              <div className="warning-inputs-scan"><ErrorMessage name="fase0Maquina"/></div>
              <div className="warning-inputs-scan"><ErrorMessage name="fase0IT"/></div>
              <div className="warning-inputs-scan"><ErrorMessage name="fase0PTS"/></div>
              <div className="warning-inputs-scan"><ErrorMessage name="fase1Maquina"/></div>
              <div className="warning-inputs-scan"><ErrorMessage name="fase1IT"/></div>
              <div className="warning-inputs-scan"><ErrorMessage name="fase1PTS"/></div>
              <div className="warning-inputs-scan"><ErrorMessage name="fase2Maquina"/></div>
              <div className="warning-inputs-scan"><ErrorMessage name="fase2IT"/></div>
              <div className="warning-inputs-scan"><ErrorMessage name="fase2PTS"/></div>
              <div className="warning-inputs-scan"><ErrorMessage name="fase3Maquina"/></div>
              <div className="warning-inputs-scan"><ErrorMessage name="fase3IT"/></div>
              <div className="warning-inputs-scan"><ErrorMessage name="fase3PTS"/></div>
              <div className="warning-inputs-scan"><ErrorMessage name="fase4Maquina"/></div>
              <div className="warning-inputs-scan"><ErrorMessage name="fase4IT"/></div>
              <div className="warning-inputs-scan"><ErrorMessage name="fase4PTS"/></div>
              <div className="warning-inputs-scan"><ErrorMessage name="fase5Maquina"/></div>
              <div className="warning-inputs-scan"><ErrorMessage name="fase5IT"/></div>
              <div className="warning-inputs-scan"><ErrorMessage name="fase5PTS"/></div>
              <div className="warning-inputs-scan"><ErrorMessage name="fase6Maquina"/></div>
              <div className="warning-inputs-scan"><ErrorMessage name="fase6IT"/></div>
              <div className="warning-inputs-scan"><ErrorMessage name="fase6PTS"/></div>
              </div>
            </div>
          </div>
     

    {/* FASES PRODUCTIVAS */}
          
          <div className="row row-fix">

{/* FASE 0 */}            
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l5 display-box-fine-tunning z-depth-1 background-grey ">
                <div className="col l5 left-align">
                     <p className="grey-text-inside-box-ing">Fase Producción 0</p>
                </div>
                <div className="col l6 right">
                    <p className="black-text-inside-box-ing">Test HEX</p>
                </div>
              </div>
              <div className="col l1"></div>

              <div className="col l6 no-margin">
                <div className="col l4 icons-margin">
                    <div className="col l4  push-l1">
                        {editMode === true?<>
                        {fase0 === false? <> 
                        <Field type="file" name="fase0Maquina" id='fase0Maquina' className="browser-default collapsible-header" style={{display:'none'}}/>
                        <label htmlFor="fase0Maquina">
                             <i className="material-symbols-outlined red-text hover-hand ">toggle_off</i>
                        </label></>
                        :
                        <i className="material-symbols-outlined green-text hover-hand">toggle_on</i>}</>:null}
                    </div>
                    <div className="col l4">
                        <PDFicon/>
                    </div>
                    <div className="col l4  pull-l1">
                    {editMode === true?
                        <i className="material-symbols-outlined hover-hand ">restart_alt</i>:null}
                    </div>
                </div>


                <div className="col l4 icons-margin">
                <div className="col l4  push-l1">
                        {editMode === true?<>
                        {fase0 === false? <> 
                        <Field type="file" name="fase0IT" id='fase0IT' className="browser-default collapsible-header" style={{display:'none'}}/>
                        <label htmlFor="fase0IT">
                             <i className="material-symbols-outlined red-text hover-hand ">upload</i>
                        </label></>
                        :
                        <i className="material-symbols-outlined green-text hover-hand">download_done</i>}</>:null}
                    </div>
                    <div className="col l4 ">
                        <PDFicon />
                    </div>
                    <div className="col l4 pull-l1">
                    {editMode === true?
                        <i className="material-symbols-outlined hover-hand ">restart_alt</i>:null}
                    </div>
                </div>

                <div className="col l4 icons-margin">
                <div className="col l4  push-l1">
                        {editMode === true?<>
                        {fase0 === false? <> 
                        <Field type="file" name="fase0PTS" id='fase0PTS' className="browser-default collapsible-header" style={{display:'none'}}/>
                        <label htmlFor="fase0PTS">
                             <i className="material-symbols-outlined red-text hover-hand ">upload</i>
                        </label></>
                        :
                        <i className="material-symbols-outlined green-text hover-hand">download_done</i>}</>:null}
                    </div>
                    <div className="col l4">
                        <PDFicon />
                    </div>
                    <div className="col l4  pull-l1">
                         {editMode === true?
                        <i className="material-symbols-outlined hover-hand ">restart_alt</i>:null}
                    </div>
                </div>
              </div>
            </div>
{/* FASE 1 */}
            <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l5 display-box-fine-tunning z-depth-1 background-grey ">
                <div className="col l5 left-align">
                     <p className="grey-text-inside-box-ing">Fase Producción 1</p>
                </div>
                <div className="col l6 right">
                    <p className="black-text-inside-box-ing">Puntero Ensamblaje</p>
                </div>
              </div>
              <div className="col l1"></div>

              <div className="col l6 no-margin">
                <div className="col l4 icons-margin">
                    <div className="col l4  push-l1">
                        {editMode === true?<>
                        {fase0 === false? <> 
                        <Field type="file" name="fase1Maquina" id='fase1Maquina' className="browser-default collapsible-header" style={{display:'none'}}/>
                        <label htmlFor="fase1Maquina">
                             <i className="material-symbols-outlined red-text hover-hand ">toggle_off</i>
                             
                        </label></>
                        :
                        <i className="material-symbols-outlined green-text hover-hand">toggle_on</i>}</>:null}
                    </div>
                    <div className="col l4">
                        <PDFicon/>
                    </div>
                    <div className="col l4  pull-l1">
                    {editMode === true?
                        <i className="material-symbols-outlined hover-hand ">restart_alt</i>:null}
                    </div>
                </div>


                <div className="col l4 icons-margin">
                <div className="col l4  push-l1">
                        {editMode === true?<>
                        {fase0 === false? <> 
                        <Field type="file" name="fase1IT" id='fase1IT' className="browser-default collapsible-header" style={{display:'none'}}/>
                        <label htmlFor="fase1IT">
                             <i className="material-symbols-outlined red-text hover-hand ">upload</i>
                        </label></>
                        :
                        <i className="material-symbols-outlined green-text hover-hand">download_done</i>}</>:null}
                    </div>
                    <div className="col l4 ">
                        <PDFicon />
                    </div>
                    <div className="col l4 pull-l1">
                    {editMode === true?
                        <i className="material-symbols-outlined hover-hand ">restart_alt</i>:null}
                    </div>
                </div>

                <div className="col l4 icons-margin">
                <div className="col l4  push-l1">
                        {editMode === true?<>
                        {fase0 === false? <> 
                        <Field type="file" name="fase1PTS" id='fase1PTS' className="browser-default collapsible-header" style={{display:'none'}}/>
                        <label htmlFor="fase1PTS">
                             <i className="material-symbols-outlined red-text hover-hand ">upload</i>
                        </label></>
                        :
                        <i className="material-symbols-outlined green-text hover-hand">download_done</i>}</>:null}
                    </div>
                    <div className="col l4">
                        <PDFicon />
                    </div>
                    <div className="col l4  pull-l1">
                         {editMode === true?
                        <i className="material-symbols-outlined hover-hand ">restart_alt</i>:null}
                    </div>
                </div>
              </div>
            </div>

{/* FASE 2 */}
            <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l5 display-box-fine-tunning z-depth-1 background-grey ">
                <div className="col l5 left-align">
                     <p className="grey-text-inside-box-ing">Fase Producción 2</p>
                </div>
                <div className="col l6 right">
                    <p className="black-text-inside-box-ing">Testing Funcional</p>
                </div>
              </div>
              <div className="col l1"></div>

              <div className="col l6 no-margin">
                <div className="col l4 icons-margin">
                    <div className="col l4  push-l1">
                        {editMode === true?<>
                        {fase0 === false? <> 
                        <Field type="file" name="fase2Maquina" id='fase2Maquina' className="browser-default collapsible-header" style={{display:'none'}}/>
                        <label htmlFor="fase2Maquina">
                             <i className="material-symbols-outlined red-text hover-hand ">toggle_off</i>
                        </label></>
                        :
                        <i className="material-symbols-outlined green-text hover-hand">toggle_on</i>}</>:null}
                    </div>
                    <div className="col l4">
                        <PDFicon/>
                    </div>
                    <div className="col l4  pull-l1">
                    {editMode === true?
                        <i className="material-symbols-outlined hover-hand ">restart_alt</i>:null}
                    </div>
                </div>


                <div className="col l4 icons-margin">
                <div className="col l4  push-l1">
                        {editMode === true?<>
                        {fase0 === false? <> 
                        <Field type="file" name="fase2IT" id='fase2IT' className="browser-default collapsible-header" style={{display:'none'}}/>
                        <label htmlFor="fase2IT">
                             <i className="material-symbols-outlined red-text hover-hand ">upload</i>
                        </label></>
                        :
                        <i className="material-symbols-outlined green-text hover-hand">download_done</i>}</>:null}
                    </div>
                    <div className="col l4 ">
                        <PDFicon />
                    </div>
                    <div className="col l4 pull-l1">
                    {editMode === true?
                        <i className="material-symbols-outlined hover-hand ">restart_alt</i>:null}
                    </div>
                </div>

                <div className="col l4 icons-margin">
                <div className="col l4  push-l1">
                        {editMode === true?<>
                        {fase0 === false? <> 
                        <Field type="file" name="fase2PTS" id='fase2PTS' className="browser-default collapsible-header" style={{display:'none'}}/>
                        <label htmlFor="fase2PTS">
                             <i className="material-symbols-outlined red-text hover-hand ">upload</i>
                        </label></>
                        :
                        <i className="material-symbols-outlined green-text hover-hand">download_done</i>}</>:null}
                    </div>
                    <div className="col l4">
                        <PDFicon />
                    </div>
                    <div className="col l4  pull-l1">
                         {editMode === true?
                        <i className="material-symbols-outlined hover-hand ">restart_alt</i>:null}
                    </div>
                </div>
              </div>
            </div>

            {/* FASE 3 */}
            <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l5 display-box-fine-tunning z-depth-1 background-grey ">
                <div className="col l5 left-align">
                     <p className="grey-text-inside-box-ing">Fase Producción 3</p>
                </div>
                <div className="col l6 right">
                    <p className="black-text-inside-box-ing">Puntero Embalaje</p>
                </div>
              </div>
              <div className="col l1"></div>

              <div className="col l6 no-margin">
                <div className="col l4 icons-margin">
                    <div className="col l4  push-l1">
                        {editMode === true?<>
                        {fase0 === false? <> 
                        <Field type="file" name="fase3Maquina" id='fase3Maquina' className="browser-default collapsible-header" style={{display:'none'}}/>
                        <label htmlFor="fase3Maquina">
                             <i className="material-symbols-outlined red-text hover-hand ">toggle_off</i>
                        </label></>
                        :
                        <i className="material-symbols-outlined green-text hover-hand">toggle_on</i>}</>:null}
                    </div>
                    <div className="col l4">
                        <PDFicon/>
                    </div>
                    <div className="col l4  pull-l1">
                    {editMode === true?
                        <i className="material-symbols-outlined hover-hand ">restart_alt</i>:null}
                    </div>
                </div>


                <div className="col l4 icons-margin">
                <div className="col l4  push-l1">
                        {editMode === true?<>
                        {fase0 === false? <> 
                        <Field type="file" name="fase3IT" id='fase3IT' className="browser-default collapsible-header" style={{display:'none'}}/>
                        <label htmlFor="fase3IT">
                             <i className="material-symbols-outlined red-text hover-hand ">upload</i>
                        </label></>
                        :
                        <i className="material-symbols-outlined green-text hover-hand">download_done</i>}</>:null}
                    </div>
                    <div className="col l4 ">
                        <PDFicon />
                    </div>
                    <div className="col l4 pull-l1">
                    {editMode === true?
                        <i className="material-symbols-outlined hover-hand ">restart_alt</i>:null}
                    </div>
                </div>

                <div className="col l4 icons-margin">
                <div className="col l4  push-l1">
                        {editMode === true?<>
                        {fase0 === false? <> 
                        <Field type="file" name="fase3PTS" id='fase3PTS' className="browser-default collapsible-header" style={{display:'none'}}/>
                        <label htmlFor="fase3PTS">
                             <i className="material-symbols-outlined red-text hover-hand ">upload</i>
                        </label></>
                        :
                        <i className="material-symbols-outlined green-text hover-hand">download_done</i>}</>:null}
                    </div>
                    <div className="col l4">
                        <PDFicon />
                    </div>
                    <div className="col l4  pull-l1">
                         {editMode === true?
                        <i className="material-symbols-outlined hover-hand ">restart_alt</i>:null}
                    </div>
                </div>
              </div>
            </div>
            {/* FASE 4 */}
            <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l5 display-box-fine-tunning z-depth-1 background-grey ">
                <div className="col l5 left-align">
                     <p className="grey-text-inside-box-ing">Fase Producción 4</p>
                </div>
                <div className="col l6 right">
                    <p className="black-text-inside-box-ing">Embalaje #1</p>
                </div>
              </div>
              <div className="col l1"></div>

              <div className="col l6 no-margin">
                <div className="col l4 icons-margin">
                    <div className="col l4  push-l1">
                        {editMode === true?<>
                        {fase0 === false? <> 
                        <Field type="file" name="fase4Maquina" id='fase4Maquina' className="browser-default collapsible-header" style={{display:'none'}}/>
                        <label htmlFor="fase4Maquina">
                             <i className="material-symbols-outlined red-text hover-hand ">toggle_off</i>
                        </label></>
                        :
                        <i className="material-symbols-outlined green-text hover-hand">toggle_on</i>}</>:null}
                    </div>
                    <div className="col l4">
                        <PDFicon/>
                    </div>
                    <div className="col l4  pull-l1">
                    {editMode === true?
                        <i className="material-symbols-outlined hover-hand ">restart_alt</i>:null}
                    </div>
                </div>


                <div className="col l4 icons-margin">
                <div className="col l4  push-l1">
                        {editMode === true?<>
                        {fase0 === false? <> 
                        <Field type="file" name="fase4IT" id='fase4IT' className="browser-default collapsible-header" style={{display:'none'}}/>
                        <label htmlFor="fase4IT">
                             <i className="material-symbols-outlined red-text hover-hand ">upload</i>
                        </label></>
                        :
                        <i className="material-symbols-outlined green-text hover-hand">download_done</i>}</>:null}
                    </div>
                    <div className="col l4 ">
                        <PDFicon />
                    </div>
                    <div className="col l4 pull-l1">
                    {editMode === true?
                        <i className="material-symbols-outlined hover-hand ">restart_alt</i>:null}
                    </div>
                </div>

                <div className="col l4 icons-margin">
                <div className="col l4  push-l1">
                        {editMode === true?<>
                        {fase0 === false? <> 
                        <Field type="file" name="fase4PTS" id='fase4PTS' className="browser-default collapsible-header" style={{display:'none'}}/>
                        <label htmlFor="fase4PTS">
                             <i className="material-symbols-outlined red-text hover-hand ">upload</i>
                        </label></>
                        :
                        <i className="material-symbols-outlined green-text hover-hand">download_done</i>}</>:null}
                    </div>
                    <div className="col l4">
                        <PDFicon />
                    </div>
                    <div className="col l4  pull-l1">
                         {editMode === true?
                        <i className="material-symbols-outlined hover-hand ">restart_alt</i>:null}
                    </div>
                </div>
              </div>
            </div>
            {/* FASE 5 */}
            <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l5 display-box-fine-tunning z-depth-1 background-grey ">
                <div className="col l5 left-align">
                     <p className="grey-text-inside-box-ing">Fase Producción 5</p>
                </div>
                <div className="col l6 right">
                    <p className="black-text-inside-box-ing">Embalaje #2</p>
                </div>
              </div>
              <div className="col l1"></div>

              <div className="col l6 no-margin">
                <div className="col l4 icons-margin">
                    <div className="col l4  push-l1">
                        {editMode === true?<>
                        {fase0 === false? <> 
                        <Field type="file" name="fase5Maquina" id='fase5Maquina' className="browser-default collapsible-header" style={{display:'none'}}/>
                        <label htmlFor="fase5Maquina">
                             <i className="material-symbols-outlined red-text hover-hand ">toggle_off</i>
                        </label></>
                        :
                        <i className="material-symbols-outlined green-text hover-hand">toggle_on</i>}</>:null}
                    </div>
                    <div className="col l4">
                        <PDFicon/>
                    </div>
                    <div className="col l4  pull-l1">
                    {editMode === true?
                        <i className="material-symbols-outlined hover-hand ">restart_alt</i>:null}
                    </div>
                </div>


                <div className="col l4 icons-margin">
                <div className="col l4  push-l1">
                        {editMode === true?<>
                        {fase0 === false? <> 
                        <Field type="file" name="fase5IT" id='fase5IT' className="browser-default collapsible-header" style={{display:'none'}}/>
                        <label htmlFor="fase5IT">
                             <i className="material-symbols-outlined red-text hover-hand ">upload</i>
                        </label></>
                        :
                        <i className="material-symbols-outlined green-text hover-hand">download_done</i>}</>:null}
                    </div>
                    <div className="col l4 ">
                        <PDFicon />
                    </div>
                    <div className="col l4 pull-l1">
                    {editMode === true?
                        <i className="material-symbols-outlined hover-hand ">restart_alt</i>:null}
                    </div>
                </div>

                <div className="col l4 icons-margin">
                <div className="col l4  push-l1">
                        {editMode === true?<>
                        {fase0 === false? <> 
                        <Field type="file" name="fase5PTS" id='fase5PTS' className="browser-default collapsible-header" style={{display:'none'}}/>
                        <label htmlFor="fase5PTS">
                             <i className="material-symbols-outlined red-text hover-hand ">upload</i>
                        </label></>
                        :
                        <i className="material-symbols-outlined green-text hover-hand">download_done</i>}</>:null}
                    </div>
                    <div className="col l4">
                        <PDFicon />
                    </div>
                    <div className="col l4  pull-l1">
                         {editMode === true?
                        <i className="material-symbols-outlined hover-hand ">restart_alt</i>:null}
                    </div>
                </div>
              </div>
            </div>
            {/* FASE 6 */}
            <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l5 display-box-fine-tunning z-depth-1 background-grey ">
                <div className="col l5 left-align">
                     <p className="grey-text-inside-box-ing">Fase Producción 6</p>
                </div>
                <div className="col l6 right">
                    <p className="black-text-inside-box-ing">Paletizado</p>
                </div>
              </div>
              <div className="col l1"></div>

              <div className="col l6 no-margin">
                <div className="col l4 icons-margin">
                    <div className="col l4  push-l1">
                        {editMode === true?<>
                        {fase0 === false? <> 
                        <Field type="file" name="fase6Maquina" id='fase6Maquina' className="browser-default collapsible-header" style={{display:'none'}}/>
                        <label htmlFor="fase6Maquina">
                             <i className="material-symbols-outlined red-text hover-hand ">toggle_off</i>
                        </label></>
                        :
                        <i className="material-symbols-outlined green-text hover-hand">toggle_on</i>}</>:null}
                    </div>
                    <div className="col l4">
                        <PDFicon/>
                    </div>
                    <div className="col l4  pull-l1">
                    {editMode === true?
                        <i className="material-symbols-outlined hover-hand ">restart_alt</i>:null}
                    </div>
                </div>


                <div className="col l4 icons-margin">
                <div className="col l4  push-l1">
                        {editMode === true?<>
                        {fase0 === false? <> 
                        <Field type="file" name="fase6IT" id='fase6IT' className="browser-default collapsible-header" style={{display:'none'}}/>
                        <label htmlFor="fase6IT">
                             <i className="material-symbols-outlined red-text hover-hand ">upload</i>
                        </label></>
                        :
                        <i className="material-symbols-outlined green-text hover-hand">download_done</i>}</>:null}
                    </div>
                    <div className="col l4 ">
                        <PDFicon />
                    </div>
                    <div className="col l4 pull-l1">
                    {editMode === true?
                        <i className="material-symbols-outlined hover-hand ">restart_alt</i>:null}
                    </div>
                </div>

                <div className="col l4 icons-margin">
                <div className="col l4  push-l1">
                        {editMode === true?<>
                        {fase0 === false? <> 
                        <Field type="file" name="fase6PTS" id='fase6PTS' className="browser-default collapsible-header" style={{display:'none'}}/>
                        <label htmlFor="fase6PTS">
                             <i className="material-symbols-outlined red-text hover-hand ">upload</i>
                        </label></>
                        :
                        <i className="material-symbols-outlined green-text hover-hand">download_done</i>}</>:null}
                    </div>
                    <div className="col l4">
                        <PDFicon />
                    </div>
                    <div className="col l4  pull-l1">
                         {editMode === true?
                        <i className="material-symbols-outlined hover-hand ">restart_alt</i>:null}
                    </div>
                </div>
              </div>
            </div>

          </div>

          <div className="row"></div>

          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l12">
                  <p className="display-box-title-ensayo-QA left">MAQUINAS CRITICAS</p>
              </div>
              <div className="col l5"></div>
              <div className="col l1"></div>
              <div className="col l6">
                <div className="col l4">
                <p className="display-box-title-ensayo-QA ">Liberación de Máquina</p> 
                </div>
                <div className="col l4">
                <p className="display-box-title-ensayo-QA ">IT</p> 
                </div>
                <div className="col l4">
                <p className="display-box-title-ensayo-QA ">&nbsp;&nbsp;&nbsp;PTS</p> 
                </div>
              </div>
              
        
              <div className="col s1 m1 l5 left-align">
              <div className="warning-inputs-scan"><ErrorMessage name="plegadoraMaquina"/></div>
              <div className="warning-inputs-scan"><ErrorMessage name="plegadoraIT"/></div>
              <div className="warning-inputs-scan"><ErrorMessage name="plegadoraPTS"/></div>
              <div className="warning-inputs-scan"><ErrorMessage name="impresoraMaquina"/></div>
              <div className="warning-inputs-scan"><ErrorMessage name="impresoraIT"/></div>
              <div className="warning-inputs-scan"><ErrorMessage name="impresoraPTS"/></div>
              <div className="warning-inputs-scan"><ErrorMessage name="punzadoraMaquina"/></div>
              <div className="warning-inputs-scan"><ErrorMessage name="punzadoraIT"/></div>
              <div className="warning-inputs-scan"><ErrorMessage name="punzadoraPTS"/></div>
              </div>
            </div>
          </div>

          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l5 display-box-fine-tunning z-depth-1 background-grey ">
                <div className="col l5 left-align">
                     <p className="grey-text-inside-box-ing">Area Adyacente</p>
                </div>
                <div className="col l6 right">
                    <p className="black-text-inside-box-ing">PLEGADORA</p>
                </div>
              </div>
              <div className="col l1"></div>

              <div className="col l6 no-margin">
                <div className="col l4 icons-margin">
                <div className="col l4  push-l1">
                        {editMode === true?<>
                        {fase0 === false? <> 
                        <Field type="file" name="plegadoraMaquina" id='plegadoraMaquina' className="browser-default collapsible-header" style={{display:'none'}}/>
                        <label htmlFor="plegadoraMaquina">
                             <i className="material-symbols-outlined red-text hover-hand ">toggle_off</i>
                        </label></>
                        :
                        <i className="material-symbols-outlined green-text hover-hand">toggle_on</i>}</>:null}
                    </div>
                        <div className="col l4 ">
                        <PDFicon/>
                        </div>
                    <div className="col l4  pull-l1">
                    {editMode === true?
                        <i className="material-symbols-outlined hover-hand ">restart_alt</i>:null}
                    </div>
                </div>
                <div className="col l4 icons-margin">
                <div className="col l4  push-l1">
                        {editMode === true?<>
                        {fase0 === false? <> 
                        <Field type="file" name="plegadoraIT" id='plegadoraIT' className="browser-default collapsible-header" style={{display:'none'}}/>
                        <label htmlFor="plegadoraIT">
                             <i className="material-symbols-outlined red-text hover-hand ">upload</i>
                        </label></>
                        :
                        <i className="material-symbols-outlined green-text hover-hand">download_done</i>}</>:null}
                    </div>
                    <div className="col l4 ">
                         <PDFicon />
                    </div>
                    <div className="col l4 pull-l1">
                    {editMode === true?
                        <i className="material-symbols-outlined hover-hand ">restart_alt</i>:null}
                    </div>
                </div>
                <div className="col l4 icons-margin">
                <div className="col l4  push-l1">
                        {editMode === true?<>
                        {fase0 === false? <> 
                        <Field type="file" name="plegadoraPTS" id='plegadoraPTS' className="browser-default collapsible-header" style={{display:'none'}}/>
                        <label htmlFor="plegadoraPTS">
                             <i className="material-symbols-outlined red-text hover-hand ">upload</i>
                        </label></>
                        :
                        <i className="material-symbols-outlined green-text hover-hand">download_done</i>}</>:null}
                    </div>
                    <div className="col l4 ">
                        <PDFicon />
                    </div>
                    <div className="col l4  pull-l1">
                        {editMode === true?
                        <i className="material-symbols-outlined hover-hand ">restart_alt</i>:null}
                    </div>
                </div>
              </div>

            </div>
            {/* PUNZONADORA */}
            <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l5 display-box-fine-tunning z-depth-1 background-grey ">
                <div className="col l5 left-align">
                     <p className="grey-text-inside-box-ing">Area Adyacente</p>
                </div>
                <div className="col l6 right">
                    <p className="black-text-inside-box-ing">PUNZONADORA</p>
                </div>
              </div>
              <div className="col l1"></div>

              <div className="col l6 no-margin">
                <div className="col l4 icons-margin">
                <div className="col l4  push-l1">
                        {editMode === true?<>
                        {fase0 === false? <> 
                        <Field type="file" name="punzonadoraMaquina" id='punzonadoraMaquina' className="browser-default collapsible-header" style={{display:'none'}}/>
                        <label htmlFor="punzonadoraMaquina">
                             <i className="material-symbols-outlined red-text hover-hand ">toggle_off</i>
                        </label></>
                        :
                        <i className="material-symbols-outlined green-text hover-hand">toggle_on</i>}</>:null}
                    </div>
                        <div className="col l4 ">
                        <PDFicon/>
                        </div>
                    <div className="col l4  pull-l1">
                    {editMode === true?
                        <i className="material-symbols-outlined hover-hand ">restart_alt</i>:null}
                    </div>
                </div>
                <div className="col l4 icons-margin">
                <div className="col l4  push-l1">
                        {editMode === true?<>
                        {fase0 === false? <> 
                        <Field type="file" name="punzonadoraIT" id='punzonadoraIT' className="browser-default collapsible-header" style={{display:'none'}}/>
                        <label htmlFor="punzonadoraIT">
                             <i className="material-symbols-outlined red-text hover-hand ">upload</i>
                        </label></>
                        :
                        <i className="material-symbols-outlined green-text hover-hand">download_done</i>}</>:null}
                    </div>
                    <div className="col l4 ">
                         <PDFicon />
                    </div>
                    <div className="col l4 pull-l1">
                    {editMode === true?
                        <i className="material-symbols-outlined hover-hand ">restart_alt</i>:null}
                    </div>
                </div>
                <div className="col l4 icons-margin">
                <div className="col l4  push-l1">
                        {editMode === true?<>
                        {fase0 === false? <> 
                        <Field type="file" name="punzonadoraPTS" id='punzonadoraPTS' className="browser-default collapsible-header" style={{display:'none'}}/>
                        <label htmlFor="punzonadoraPTS">
                             <i className="material-symbols-outlined red-text hover-hand ">upload</i>
                        </label></>
                        :
                        <i className="material-symbols-outlined green-text hover-hand">download_done</i>}</>:null}
                    </div>
                    <div className="col l4 ">
                        <PDFicon />
                    </div>
                    <div className="col l4  pull-l1">
                        {editMode === true?
                        <i className="material-symbols-outlined hover-hand ">restart_alt</i>:null}
                    </div>
                </div>
              </div>

            </div>

            {/* IMPRESORA */}

            <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l5 display-box-fine-tunning z-depth-1 background-grey ">
                <div className="col l5 left-align">
                     <p className="grey-text-inside-box-ing">Area Adyacente</p>
                </div>
                <div className="col l6 right">
                    <p className="black-text-inside-box-ing">IMPRESORA</p>
                </div>
              </div>
              <div className="col l1"></div>

              <div className="col l6 no-margin">
                <div className="col l4 icons-margin">
                <div className="col l4  push-l1">
                        {editMode === true?<>
                        {fase0 === false? <> 
                        <Field type="file" name="impresoraMaquina" id='impresoraMaquina' className="browser-default collapsible-header" style={{display:'none'}}/>
                        <label htmlFor="impresoraMaquina">
                             <i className="material-symbols-outlined red-text hover-hand ">toggle_off</i>
                        </label></>
                        :
                        <i className="material-symbols-outlined green-text hover-hand">toggle_on</i>}</>:null}
                    </div>
                        <div className="col l4 ">
                        <PDFicon/>
                        </div>
                    <div className="col l4  pull-l1">
                    {editMode === true?
                        <i className="material-symbols-outlined hover-hand ">restart_alt</i>:null}
                    </div>
                </div>
                <div className="col l4 icons-margin">
                <div className="col l4  push-l1">
                        {editMode === true?<>
                        {fase0 === false? <> 
                        <Field type="file" name="impresoraIT" id='impresoraIT' className="browser-default collapsible-header" style={{display:'none'}}/>
                        <label htmlFor="impresoraIT">
                             <i className="material-symbols-outlined red-text hover-hand ">upload</i>
                        </label></>
                        :
                        <i className="material-symbols-outlined green-text hover-hand">download_done</i>}</>:null}
                    </div>
                    <div className="col l4 ">
                         <PDFicon />
                    </div>
                    <div className="col l4 pull-l1">
                    {editMode === true?
                        <i className="material-symbols-outlined hover-hand ">restart_alt</i>:null}
                    </div>
                </div>
                <div className="col l4 icons-margin">
                <div className="col l4  push-l1">
                        {editMode === true?<>
                        {fase0 === false? <> 
                        <Field type="file" name="impresoraPTS" id='impresoraPTS' className="browser-default collapsible-header" style={{display:'none'}}/>
                        <label htmlFor="impresoraPTS">
                             <i className="material-symbols-outlined red-text hover-hand ">upload</i>
                        </label></>
                        :
                        <i className="material-symbols-outlined green-text hover-hand">download_done</i>}</>:null}
                    </div>
                    <div className="col l4 ">
                        <PDFicon />
                    </div>
                    <div className="col l4  pull-l1">
                        {editMode === true?
                        <i className="material-symbols-outlined hover-hand ">restart_alt</i>:null}
                    </div>
                </div>
              </div>

            </div>
          </div>


            <div className="row"></div>
            <div className="row"></div>
            
          <div className="row">
            <div className="col s12 m12 l5 no-margin "><a href="/dashboard">
              <button className="btn-small btn-block waves-effect waves-light button-regresar-create-plan z-depth-2" type="button">
                REGRESAR
              </button></a>
            </div>
          <div className="col l1"></div>
            <div className="col l6 ">
              <div className="col l12 ">
{editMode===false?
            <button onClick = {openModal1} className="btn-small btn-block waves-effect waves-light button-regresar-create-plan z-depth-2" type="button">
                 EDITAR DOCUMENTOS
            </button>:
          <button className="btn-small btn-block waves-effect waves-light button-modoedicion-batch-list z-depth-2" type="submit">
              ACTUALIZAR DOCUMENTOS
          </button>
            }
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
                    <div  className="alert-msg center-align ">Esta por editar documentos de Seguridad</div>
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
              {/* <Popup contentStyle={{background: "0"}} open={open2} closeOnDocumentClick onClose={closeModal2} lockScroll = {true}>
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
              </Popup> */}
              <Popup contentStyle={{background: "0"}} open={open3} closeOnDocumentClick onClose={closeModal3} lockScroll = {true}>
               <div className="alert z-depth-1" >
                <div className="row row-fix ">
                  <div className="col s12 m12 l12 no-margin">
                    <div className="atention center-align">Actualizacion Exitosa!</div>
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
export default Documentos_Seguridad_Industrial;
