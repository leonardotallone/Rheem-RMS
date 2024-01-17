import Navbar from "../Navbar/Navbar";
import QR from "../../assets/logos/QR.png";
import { useState, useContext, useEffect } from "react";
import { useParams} from "react-router";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { ReactComponent as PDFicon } from '../../assets/icons/pdf DispIng.svg';
import Popup from 'reactjs-popup';
import { reprocessRandDContext } from "../../contexts/ReprocessRandDContext"

const Disposicion_Ingenieria = () => {

  const [AT, setAT] = useState(false)
  const [ING, setING] = useState(false)
  const [INGAT, setINGAT] = useState(false);

  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [habilitar, setHabilitar] = useState(false);

  const {setReprocessRandD, reprocessSuccess, reprocessError} = useContext(reprocessRandDContext)

  const user = JSON.parse(localStorage.getItem("user"))

  const { number_batch } = useParams()
  const { description } = useParams()
  const { id_plan } = useParams()
  const { sku } = useParams()

  var date = new Date();
  var year = date.toLocaleString("default", { year: "numeric" });
  var month = date.toLocaleString("default", { month: "2-digit" });
  var day = date.toLocaleString("default", { day: "2-digit" });
  var formattedDate = year + "-" + month + "-" + day;
  
  const openModal1 = () => {
    if(habilitar === true) {
      setOpen1(true);
 }}
  const closeModall1 =() => {
      setOpen1(false);
  };
  const twoFunctions = () => {
    setOpen2(true);
    setOpen1(false) 
  }
  const closeModal2 =() => {
    setOpen2(false);
    window.location.reload()
    // navigate("/production-batchs-list");
  }
  
  
  const validar = (values) => {
    
    const errors = {};
    var extensionPDF = /(\.pdf)$/i;
    
    if (!values.observaciones){
      errors.reproceso = "Por favor ingrese una Observación"    
    }
    
    if (!values.at && values.reproceso === "AT"){
        errors.reproceso = "Por favor ingrese Informe AT"    
      } else if (values.at  && !extensionPDF.exec(values.at)){
          errors.reproceso = "Por favor seleccione archivo PDF"    
        }
        if (!values.ingenieria && values.reproceso === 'ING'){
            errors.reproceso = 'Por favor ingrese Informe de Ingeniería'
          } 
          if (values.ingenieria  && !extensionPDF.exec(values.ingenieria)){
              errors.reproceso = "Por favor seleccione archivo PDF"
            }
            if (values.reproceso === "ING/AT" && !values.at){
              errors.reproceso = 'Por favor ingrese Informe AT'
            } 
            if (values.reproceso === "ING/AT" && !values.ingenieria){
                errors.reproceso = 'Por favor ingrese Informe de Ingeniería'
              } 
                
              if (values.reproceso === "ING/AT"){
                  setINGAT(true)
                  setAT(false)
                  setING(false)
                } 
                if(values.reproceso === "AT"){
                  setAT(true)
                  setING(false)
                  setINGAT(false)
                } 
                if(values.reproceso === "ING"){
                  setING(true)
                  setAT(false)
                  setINGAT(false)
                }
                if (!values.reproceso){
                  setING(false)
                  setAT(false)
                  setINGAT(false)
                }
                if (!values.reproceso) {
                  errors.reproceso = "Por favor seleccione tipo de Reproceso";
                } 
                if (!errors.reproceso) {
                  setHabilitar(true)
                } 
                if (errors.reproceso) {
                  setHabilitar(false)
               }

        console.log("ERRORES", errors)
        return errors
      }
      
      const handleSubmitReproceso = (values) => {

        const ReprocesoIngenieria = {
          number_batch: parseInt(number_batch),
          created_date: formattedDate,
          arrangement:'',
          sku: sku, 
          id_plan: id_plan,
          description: description,
          // file_AT:values.at,
          file_AT:null,
          // file_ING:values.ingenieria,
          file_ING:null,
          observation:values.observaciones,
          id_user:user.id,
        }
        setReprocessRandD(ReprocesoIngenieria)
        console.log("REPROCESO INGENIERIA", ReprocesoIngenieria)
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

            <div className="col s12 m12 l7 no-margin">
              <div className="col s12 m12 l9">
                <p className="font-title-create-plan">Disposición de Ingeniería</p>
              </div>
            </div>

            <div className="col s11 m11 l4 ">
              <div className="col s12 m5 l6 no-margin pull-l2">
              
              </div>
                <div className="col s12 m7 l6 no-margin ">
                <p className="font-form-create-plan">RC:16-062</p>  
                <p className="font-tunning-black">ELABORO: CARMONA MARIO</p>
                <p className="font-tunning-black">APROBO: LEOPOLDO SANCHEZ</p>
                <p className="font-tunning-black">REVISION Nº: P0103-2023</p>
                <p className="font-tunning-black">FECHA: {formattedDate}</p>
                
                </div>
            </div>
        
            <div className="col s1 m1 l1">
              <img className="qr right " src={QR} alt=""></img>
              <i className=" right material-symbols-outlined print hover-hand">print</i>
            </div>

          </div>
          </div>
        </div>
      

      {/* ---------------------------------------Formulario------------------- */}
        
      <Formik initialValues={{
        observaciones:'', 
        ingenieria:'',
        at:'',
      }} 
      onSubmit={handleSubmitReproceso} 
      validate={validar} 
 
      >
                    <Form id="popup">
      <div className="container">
        <p className="form-title">COMPLETA INGENIERIA</p>
        <div className="warning-inputs-scan">
              <ErrorMessage name="reproceso" />
        </div>

        <div className="row">
          <div className="col s12 m12 l5">
        
            <div className="col l4 no-margin"> 
              <p className="display-box-title-reproceso">Nº De Lote</p>
              <div className="display-box valign-wrapper">
              {number_batch}
              </div>
            </div>
         
            <div className="col l7 right no-margin ">
              <p className="display-box-title-reproceso">Reproceso</p>
              <div className="display-box valign-wrapper no-margin">
                  <Field as="select" name="reproceso" className="browser-default collapsible-header">
                          <option value="">&nbsp;&nbsp;&nbsp;Seleccione Reproceso</option>     
                          <option value="ING">&nbsp;&nbsp;&nbsp;Reproceso ING</option>
                          <option value="AT">&nbsp;&nbsp;&nbsp;Reproceso AT</option>
                          <option value="ING/AT">&nbsp;&nbsp;&nbsp;Reproceso ING/AT</option>
                  </Field>    
              </div>
            </div>
            
            <div className="col l4 no-margin"> 
              <p className="display-box-title-reproceso">SKU</p>
              <div className="display-box valign-wrapper">
              {sku}
              </div>
            </div>

            <div className="col l7 right no-margin"> 
              <p className="display-box-title-reproceso">ID del Plan</p>
              <div className="display-box valign-wrapper">
              {id_plan}
              </div>
            </div>
            
            <div className="col l12 no-margin"> 
              <p className="display-box-title-reproceso">Descripción</p>
              <div className="display-box valign-wrapper">
              {description}
              </div>
            </div>

{ING === true?
            <div className="col s6 m4 l6 no-margin">
               <p className="display-box-title" >Informe Ingeniería</p>
                <Field id="ing" type="file" name='ingenieria' style={{display:'none'}}/>
                <label htmlFor="ing" >
                  <PDFicon className="hover-hand"/>
                </label>
            </div>:null}
 {AT === true?      
            <div className="col s6 m4 l6 no-margin">
              <p className="display-box-title" >&nbsp;&nbsp;&nbsp;&nbsp;AT</p>
                <Field id="at" type="file" name='at'style={{display:'none'}}/>
                <label htmlFor="at">
                <PDFicon className="hover-hand"/>
                </label>  
            </div>:null}
{INGAT === true?<>
             <div className="col s6 m4 l6 no-margin">
               <p className="display-box-title" >Informe Ingeniería</p>
                <Field id="ing" type="file" name='ingenieria' style={{display:'none'}}/>
                <label htmlFor="ing">
                  <PDFicon className="hover-hand"/>
                </label>
            </div>
            <div className="col s6 m4 l6 pull-l2 no-margin">
              <p className="display-box-title" >&nbsp;&nbsp;&nbsp;&nbsp;AT</p>
                <Field id="at" type="file" name='at' style={{display:'none'}}/>
                <label htmlFor="at">
                <PDFicon className="hover-hand"/>
                </label>  
            </div>
            </>:null}           
      
          </div>
         
          <div className="col s12 m12 l7">
            <p className="display-box-title-reproceso">Observaciones Reproceso</p>
              <div className="display-box-text-reproceso">
              <Field as="textarea" name="observaciones" className="input-field-text-reproceso materialize-textarea"  />
            </div>  
          </div>
        </div>

         {/* botones */}
          
          
        <div className="row">
            <div className="col s12 m12 l5"><a href="/dashboard">
              <button className="btn-small btn-block waves-effect waves-light button-regresar-create-plan z-depth-2" type="button">
                REGRESAR
              </button></a>
            </div>

            <div className="col s12 m12 l7">
              <div >
                 <button onClick={openModal1} disabled={ habilitar === false } className="btn-small btn-block waves-effect waves-light button-ingresar-create-plan z-depth-2" type="button">
                   EMITIR INFORME
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
                      <div className="alert-msg center-align">Esta por crear informe de reproceso</div>
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
                   
                   <div className="alert z-depth-1" >
                    <div className="row row-fix ">
                      <div className="col s12 m12 l12 no-margin">
                        {reprocessError && (<div className="atention center-align">Error al emitir Informe</div>)}
                        {reprocessSuccess && (<div className="atention center-align">Informe emitido Exitosamente</div>)}
                      </div>
                      <div className="col s12 m12 l12 no-margin divisor-bottom-line">
                        {reprocessError && (<div className="alert-msg center-align ">Contacte al Administrador</div>)}
                        {reprocessSuccess && (<div className="alert-msg center-align ">Muchas gracias!</div>)}
                      </div>
                    </div>
    
                    <div className="row">
                         <div className="col s6 m6 l12 center">
                            {reprocessError && (<div onClick={closeModal2} className="button-alert waves-effect waves-dark btn-block">Continuar</div >)}
                            {reprocessSuccess && (<div onClick={closeModal2} className="button-alert waves-effect waves-dark btn-block">Continuar</div >)}
                         </div>
                    </div>
                   </div>
                  </Popup>
        
    </>
  );
};
export default Disposicion_Ingenieria;
