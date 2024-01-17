import Navbar from "../Navbar/Navbar";
import QR from "../../assets/logos/QR.png";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { ReactComponent as PDFicon } from '../../assets/icons/pdf DispIng.svg';
import Popup from 'reactjs-popup';
import { petitionMVTContext } from "../../contexts/PetitionMVTContext";


const Solicitud_MVT = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [habilitar, setHabilitar] = useState(false);
  const [dvt, setDvt] = useState(null);
  // const [fielValue, setFieldValue ] = useState(null);


  const { setpetitionMVT, petitioMVTSuccess, petitionMVTError} = useContext(petitionMVTContext);

  const user = JSON.parse(localStorage.getItem("user"))
  const navigate = useNavigate();

 

  var date = new Date();
  var year = date.toLocaleString("default", { year: "numeric" });
  var month = date.toLocaleString("default", { month: "2-digit" });
  var day = date.toLocaleString("default", { day: "2-digit" });
  var formattedDate = year + "-" + month + "-" + day;


const currentHour = date.getHours();
const currentMinute = date.getMinutes();
const currentSecond = date.getSeconds();
const currentTime = `${currentHour}:${currentMinute}:${currentSecond}`;


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
    navigate("/r&d-mvt-list");
  }


  const validar = (values) => {
    const errors = {};
    // var extensionPDF = /(\.pdf)$/i;
  
    if (!values.project) {
      errors.project = "Por favor ingrese nombre del Proyecto";
    } else if (!values.sku) {
      errors.sku = "Por favor ingrese SKU";
    } else if (!values.quantity) {
      errors.quantity = "Por favor ingrese Cantidad";
    }
    //  else if (!values.file_DVT) {
    //   errors.observation = "Por favor ingrese documento DVT";
    // } 
    // else if (!extensionPDF.exec(values.file_DVT.name)) {
    //   errors.observation = "Por favor seleccione archivo PDF";
    // }
     else if(values.file_DVT){
      console.log('File content before reading:', values.file_DVT);
      // const pdfFile = new File([values.file_DVT], values.file_DVT.name, { type: "application/pdf" });
      // const fileReader = new FileReader();
      
      // fileReader.onload = function (event) {
      //   const base64String = event.target.result.split(',')[1];
      //   console.log('Base64 String:', base64String);
      //   setDvt(base64String);
      // };
      // fileReader.onerror = function (error) {
      //   console.error('Error reading the file:', error);
      // };
      
      // fileReader.readAsDataURL(pdfFile);
   
  }
  
    if (!values.observation) {
      errors.observation = "Por favor ingrese una Observación";
    } else {
      setHabilitar(true);
    }
  
    return errors;
  };
  
  const handleUploadDVT = (event, setFieldValue) => {
    const file = event.currentTarget.files[0];
    if (file) {
      const fileReader = new FileReader();
      fileReader.onload = function (event) {
        const base64String = event.target.result.split(',')[1];
        // console.log('Base64 String:', base64String);
  
        // Access the file content (base64String) and update the form field
        // setFieldValue('file_DVT', file);
  
        // If you want to store the base64String separately, you can do so as well
        setDvt(base64String);
      };
      fileReader.onerror = function (error) {
        console.error('Error reading the file:', error);
      };
  
      fileReader.readAsDataURL(file);
    }
  };
   
    const handleSubmitMVT = async (values) => {
      const SolicitudMVT = {
          sku: values.sku,
          project: values.project,
          date: formattedDate,
          hour: currentTime,
          quantity: values.quantity,
          observation: values.observation,
          file_DVT: dvt,
          file_MVT:null,
          id_user: user.id,
        };
        console.log("SOLICITUD MVT", SolicitudMVT);
        setpetitionMVT(SolicitudMVT)
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
                <p className="font-title-create-plan">Solicitud de MVT</p>
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
          project:'',
          sku:'',
          quantity:'',
          observation:'',
          file_DVT:'',
        }} 
          onSubmit={handleSubmitMVT}
          validate={validar} 
          isValidating={false} 
          isSubmitting={false} >
                    <Form id="popup">
      <div className="container">
        <p className="form-title">COMPLETE LOS SIGUIENTES DATOS</p>
              <div className="warning-inputs-scan">
                <ErrorMessage name="project"/>
                <ErrorMessage name="sku"/>
                <ErrorMessage name="quantity"/>
                <ErrorMessage name="observation"/>
              </div>

        <div className="row">
          <div className="col s12 m12 l4">
            <div className="col l12 no-margin">
              <p className="display-box-title-reproceso">Proyecto</p>
              <div className="display-box-reproceso">
                  <Field name="project" className="input-field-mvt-proyecto" maxLength="50"/>
              </div>
            </div>
      
            <div className="col l4 right no-margin"> 
              <p className="display-box-title-reproceso">Fecha</p>
              <div className="display-box valign-wrapper">
              {formattedDate}
              </div>
            </div>
            
            <div className="col l7 no-margin"> 
                <p className="display-box-title-reproceso">SKU</p>
                <div className="display-box no-margin">
                    <Field name="sku" className="input-field-mvt-sku" maxLength="50" />
                </div>
            </div>

            <div className="col l4  no-margin"> 
              <p className="display-box-title-reproceso">Cantidad a Fabricar</p>
              <div className="display-box-reproceso">
                  <Field name="quantity" className="input-field-mvt-cantidad" maxLength="50" type="number"/>
              </div>
            </div>

            <div className="col s6 m4 l12  no-margin">
               <p className="display-box-title" >Informe DVT</p>
                <Field 
                name="file_DVT" 
                type="file" 
                id='dvt' 
                style={{display:'none'}}
                accept="application/pdf"
                // onChange={(event) => handleFileChange(event, setFieldValue)}/>
                 onChange={(event) => handleUploadDVT(event)}/>
                <label htmlFor="dvt">
                  <PDFicon className="hover-hand"/>
                </label>
            </div>


          </div>
         
          <div className="col s12 m12 l8">
            <p className="display-box-title-reproceso">Observaciones</p>
              <div className="display-box-text-reproceso">
              <Field as="textarea" name="observation" className="input-field-text-reproceso materialize-textarea"  />
            </div>  
          </div>
        </div>

         {/* botones */}
          
          
        <div className="row">
            <div className="col s12 m12 l4"><a href="/dashboard">
              <button className="btn-small btn-block waves-effect waves-light button-regresar-create-plan z-depth-2" type="button">
                REGRESAR
              </button></a>
            </div>

            <div className="col s12 m12 l8">
              <div >
                 <button onClick={openModal1} disabled={ habilitar === false } className="btn-small btn-block waves-effect waves-light button-ingresar-create-plan z-depth-2" type="button">
                   ENVIAR SOLICITUD
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
                      <div className="alert-msg center-align">Esta por enviar solicitud MVT</div>
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
                        {petitionMVTError && (<div className="atention center-align">Error al crear peticion MVT</div>)}
                        {petitioMVTSuccess && (<div className="atention center-align">Peticion MVT Creada Exitosamente</div>)}
                      </div>
                      <div className="col s12 m12 l12 no-margin divisor-bottom-line">
                        {petitionMVTError && (<div className="alert-msg center-align ">Contacte al Administrador</div>)}
                        {petitioMVTSuccess && (<div className="alert-msg center-align ">Muchas gracias!</div>)}
                      </div>
                    </div>
                    <div className="row">
                         <div className="col s6 m6 l12 center">
                         {petitionMVTError && (<div onClick={closeModal2} className="button-alert waves-effect waves-dark btn-block">Continuar</div >)}
                            {petitioMVTSuccess && (<div onClick={closeModal2} className="button-alert waves-effect waves-dark btn-block">Continuar</div >)}
                         </div>
                    </div>
                   </div>
                  </Popup>
    </>
  );
};
export default Solicitud_MVT;
