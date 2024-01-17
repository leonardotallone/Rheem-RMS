import Navbar from "../Navbar/Navbar";
import QR from "../../assets/logos/QR.png";
import { ReactComponent as PDFicon } from '../../assets/icons/pdf 45x45.svg';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router";
import Popup from 'reactjs-popup';

import { getAllMVTPetitionsContext } from "../../contexts/GetAllMVTPetitionContext";
import { mvtUpdateQaStatusContext } from "../../contexts/MVTUpdateQaStatusContext";
import { mvtUpdateProductionStatusContext } from "../../contexts/MVTUpdateProductionStatusContext";
import { mvtUpdateRdStatusContext } from "../../contexts/MVTUpdateRdStatusContext";
import { mvtUpdateIndustrialStatusContext } from "../../contexts/MVTUpdateIndustrialStatusContext";
import { uploadMVTFileContext } from "../../contexts/UploadMVTFileContext";

const Aprobacion_de_MVT = () => {

  const [habilitar, setHabilitar] = useState(false)
  const [currentMVT, setCurrentMVT] = useState()
  const [MVT_File, setMVT_File] = useState(); // Lecture
  const [DVT_File, setDVT_File] = useState();// Lecture

  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  const { allMVTPetitions } = useContext(getAllMVTPetitionsContext)
  const { setQaMvtStatus, setId_mvt_qa, updateMvtQaStatusSuccess, updateMvtQaStatusError } = useContext(mvtUpdateQaStatusContext)
  const { setProductionMvtStatus, setId_mvt_production, updateMvtProductionStatusSuccess, updateMvtProductionStatusError } = useContext(mvtUpdateProductionStatusContext)
  const { setRdMvtStatus, setId_mvt_rd, updateMvtRdStausSuccess, updateMvtRdnStatusError} = useContext(mvtUpdateRdStatusContext)
  const { setIndustrialMvtStatus, setId_mvt_industrial, updateMvtIndustrialStatusSuccess, updateMvtIndustrialStatusError} = useContext(mvtUpdateIndustrialStatusContext)
  const { setMvtPetitionId, setMvtFile, uploadMvtSuccess, uploadMvtError } = useContext(uploadMVTFileContext)
  
  
  const user = JSON.parse(localStorage.getItem("user"))
  let {idMvt} = useParams();
  
  
  // SETEO CURRENT MVT
  useEffect(()=>{
    if(allMVTPetitions){
      setId_mvt_qa(idMvt)
      setId_mvt_production(idMvt)
      setId_mvt_rd(idMvt)
      setId_mvt_industrial(idMvt)
      let mvt = allMVTPetitions.filter(mvt => mvt.id === parseInt(idMvt))
      setCurrentMVT (mvt[0])
    }
  },[allMVTPetitions])

  console.log("Current MVT", currentMVT)

  // SETEO ARCHIVO DVT (LECTURA)

  useEffect(() => {
    if(currentMVT && currentMVT.file_DVT){
      console.log(currentMVT.file_DVT)
      // Decode base64 to binary
      const binaryData = atob(currentMVT.file_DVT);
      const arrayBuffer = new ArrayBuffer(binaryData.length);
      const uint8Array = new Uint8Array(arrayBuffer);
      for (let i = 0; i < binaryData.length; i++) {
        uint8Array[i] = binaryData.charCodeAt(i);
      }
      // Create Blob from binary data
      const blob = new Blob([uint8Array], { type: 'application/pdf' });
      const dataUrl = URL.createObjectURL(blob);
      // Open the PDF in a new tab
      setDVT_File(dataUrl);
      
    }
  }, [currentMVT]);

   // SETEO ARCHIVO MVT (LECTURA)

   useEffect(() => {
    if(currentMVT && currentMVT.file_MVT){
      console.log(currentMVT.file_MVT)
      // Decode base64 to binary
      const binaryData = atob(currentMVT.file_MVT);
      const arrayBuffer = new ArrayBuffer(binaryData.length);
      const uint8Array = new Uint8Array(arrayBuffer);
      for (let i = 0; i < binaryData.length; i++) {
        uint8Array[i] = binaryData.charCodeAt(i);
      }
      // Create Blob from binary data
      const blob = new Blob([uint8Array], { type: 'application/pdf' });
      const dataUrl = URL.createObjectURL(blob);
      // Open the PDF in a new tab
      setMVT_File(dataUrl);
      
    }
  }, [currentMVT]);

  // UPLOAD MVT FILE ------------------------------------------------------

  useEffect(() => {
    if(currentMVT && currentMVT.id){
      setMvtPetitionId(currentMVT.id)
    }
  },[currentMVT]);

  const handleUploadMVT = (event, setFieldValue) => {

    const file = event.currentTarget.files[0];
    if (file) {
      const fileReader = new FileReader();
      fileReader.onload = function (event) {
        setMvtFile(event.target.result.split(',')[1]);
      };
      fileReader.onerror = function (error) {
        console.error('Error reading the file:', error);
      };
      fileReader.readAsDataURL(file);
    }
  };
  // console.log("MVT64",mvt)
   

  const openModal1 = () => {
    setOpen1(true);
  }
  const closeModal1 = () => {
    setOpen1(false);
  }
  const closeModal2 = () => {
    setOpen2(false);
    window.location.reload();

  }
  const twoFunctions = () => {
    setOpen2(true);
    setOpen1(false) 
  }

  const validar = (values) => {
    const errors = {};
    var extensionPDF = /(\.pdf)$/i;

    if (values.mvt && extensionPDF.exec(values.mvt)) {
      errors.mvt ='Seleccione archivo PDF para MVT'
      setHabilitar(false)
     }
    if (values.mvt && !extensionPDF.exec(values.mvt)) {
      errors.mvt ='Seleccione archivo PDF para MVT'
      setHabilitar(true)
     }
     if (values.qa_status){
       setHabilitar(o => !o)
      }
      if (!values.qa_status){
        setHabilitar(o => !o)
      }
      if (values.industrial_status){
        setHabilitar(o => !o)
      }
      if (!values.industrial_status){
        setHabilitar(o => !o)
      }
      if (values.prod_status){
        setHabilitar(o => !o)
      }
      if (!values.prod_status){
        setHabilitar(o => !o)
      }
      if (values.rd_status){
        setHabilitar(true)
      }
      if (!values.rd_status){
        setHabilitar(false)
      }
    return errors;
  };

  const handleSubmit = (values) => {

  const aprobacionMVT = {
    ...(user.profileRMS === "SUPERVISOR DE PRODUCCIÓN" ? { prod_status: values.prod_status === true ? 1 : null } : {}),
    ...(user.profileRMS === "INGENIERIA INDUSTRIAL" ? { industrial_status: values.industrial_status === true ? 1 : null } : {}),
    ...(user.profileRMS === "QA ADMINISTRATIVO" ? { qa_status: values.qa_status === true ? 1 : null } : {}),
    ...(user.profileRMS === "RESEARCH AND DEVELOPMENT (R&D)" ? { rd_status:values.rd_status === true ? 1 : null } : {}),
  }
  if(user.profileRMS === "RESEARCH AND DEVELOPMENT (R&D)"){
    setRdMvtStatus(aprobacionMVT)
  }
  if(user.profileRMS === "QA ADMINISTRATIVO"){
    setQaMvtStatus(aprobacionMVT)
  }
  if(user.profileRMS === "INGENIERIA INDUSTRIAL"){
    setIndustrialMvtStatus(aprobacionMVT)
  }
  if(user.profileRMS === "SUPERVISOR DE PRODUCCIÓN"){
    setProductionMvtStatus(aprobacionMVT)
  }
 

  };

    return (
      <>
      <Navbar />
      {currentMVT?<>
      <Formik
              initialValues={{
                prod_status:currentMVT.prod_status, 
                industrial_status:currentMVT.industrial_status, 
                qa_status:currentMVT.qa_status, 
                rd_status:currentMVT.rd_status, 
              }}
              onSubmit={handleSubmit}
              validate={validar}
              // validateOnChange={true}
              // validateOnBlur={false}
            >
              <Form id="popup">

      <div className="row">
        <div className=" col s12 m12 l12 top-top-banner"></div>
        <div className="col s12 m12 l12 top-banner"></div>
      </div>
         {/* ---------------------------------------Banner Title------------------- */}
         <div className="row">
         <div className="col s12 m12 l12 title-banner z-depth-2">
          <div className="container">
            <div className="col s7 m8 l8 no-margin">
              <p className="font-title-plan-list">Aprobación de MVT</p>
              <p className="font-subtitle-plan-list">R&D, Supervisor de Producción, Ing.Industrial, QA.Administrador</p>
            </div>
            <div className="col s11 m5 l3 no-margin">
              <p className="font-form-plan-list left ">RC:16-062</p>
              {/* <p className="font-plan-plan-list left ">PLAN Nº: D0103-2023</p>
              <p className="font-date-plan-list left ">FECHA DE REGISTRO: 23-06-2023</p> */}
            </div>
            <div className="col s1 m1 l1 push-m6">
              <img className="qr right " src={QR} alt=""></img>
              <i className=" right material-symbols-outlined print">print</i>
            </div>
          </div>
        </div>
      </div>

       {/* ---------------------------------------Formulario------------------- */}

       <div className="container">
         <div className="row">
         
         <div className="warning-inputs">
          <ErrorMessage name="mvt" />                             
          </div>
         </div>
        <div className="row display-box-mvt z-depth-1">
{/* fila superior */}
            <div className="col l7 bottom-line-mvt">
              <div className="col s6 m6 l12 aprobacion-mvt-titulos">
                  <p>PROYECTO:</p>
                  <p className="aprobacion-mvt-name">{currentMVT.project} </p>
                  
              </div>
            </div>

            <div className="col l2  bottom-line-mvt left-line-mvt  aprobacion-mvt-titulos">
             
                  <p>ESTADO:</p>
                  <p style={currentMVT.rd_status === false || currentMVT.qa_status === false  || currentMVT.industrial_status === false || currentMVT.prod_status === false? { color: 'red' } : {}} className="aprobacion-mvt-status-date">{currentMVT.rd_status === false || currentMVT.qa_status === false || currentMVT.industrial_status === false || currentMVT.prod_status === false? "PENDIENTE": "APROBADO"}</p>
            </div>
              <div className="col l3 aprobacion-mvt-titulos bottom-line-mvt left-line-mvt">
                  <p>FECHA MVT</p>
                  <p className="aprobacion-mvt-status-date">{currentMVT.date}</p>
              </div>
{/* fila central */}
            <div className="col s12 m12 l9 ">
              
              <div className="col s6 m12 l3 no-margin center aprobacion-mvt-titulos">
                 <p>QA ADMINISTRATIVO</p>
                 <div className="col l12  aprobacion-mvt-subtitles center no-margin">
                <div className="col l3 ">
                {user.profileRMS !== "QA ADMINISTRATIVO"?<>
               <Field
                name="mvt" 
                type="file" 
                id='mvt' 
                style={{display:'none'}}
                accept="application/pdf"
                onChange={(event) => handleUploadMVT(event)} 
                // className="browser-default collapsible-header" 
                />
                        <label htmlFor="mvt">
                            <i className="material-symbols-outlined hover-hand margin-upload-file black-text">upload_file</i>
                        </label> </>:
                        <i className="material-symbols-outlined  margin-upload-file black-text edit-disabled">upload_file</i>}
                </div>
                <div className="col l5 no-margin">
                  <p>APROBADO</p>
                </div>                         
                              <div className="col l4 margin-checkbox">
                                    <label>
                                    <Field disabled={user.profileRMS === "QA ADMINISTRATIVO" || currentMVT.qa_status === true}type="checkbox" name="qa_status" />
                                      <span ></span>
                                    </label>
                              </div> 
              </div>
              </div>

              <div className="col l3 no-margin center aprobacion-mvt-titulos">
                  <p >INGENIERIA INDUSTRIAL</p>
                 <div className="col l12 aprobacion-mvt-subtitles center no-margin">
                             <div className="col l6 push-l1">
                                <p>APROBADO</p>
                              </div>
                              <div className="col l6  margin-checkbox">
                                    <label>
                                    <Field disabled={user.profileRMS !== "INGENIERIA INDUSTRIAL" || currentMVT.industrial_status === true} type="checkbox" name="industrial_status" />
                                      <span ></span>
                                    </label>
                              </div>              
              </div>
              </div>

              <div className="col s12 m12 l3 no-margin center aprobacion-mvt-titulos">
                 <p>SUP.DE PRODUCCION</p>
                 <div className="col l12 aprobacion-mvt-subtitles center no-margin">
                              <div className="col l6 push-l1">
                                <p>APROBADO</p>
                              </div>
                              <div className="col l6 margin-checkbox">
                                    <label>
                                    <Field disabled={user.profileRMS !== "SUPERVISOR DE PRODUCCIÓN" || currentMVT.prod_status === true} type="checkbox" name="prod_status" />
                                      <span ></span>
                                    </label>
                              </div> 
              </div>
              </div>

              <div className="col s12 m12 l3  no-margin center aprobacion-mvt-titulos">
                 <p>RESEARCH & DEVELOPMENT</p>
                 <div className="col l12 aprobacion-mvt-subtitles center no-margin">
                              <div className="col l6 push-l2">
                                <p>APROBADO</p>
                              </div>
                              <div className="col l6 margin-checkbox">
                                    <label>
                                    <Field disabled={user.profileRMS !== "RESEARCH AND DEVELOPMENT (R&D)" || currentMVT.rd_status === true} type="checkbox" name="rd_status" />
                                      <span ></span>
                                    </label>
                              </div> 
              </div>
              </div>
            </div>


            <div className="col l3 left-line-mvt">
              <div className="col l6 aprobacion-mvt-titulos">
                      <p>DVT</p>
                      <div className="col l12  no-margin">
                          {DVT_File?
                              <a href={DVT_File} target="_blank">
                                <PDFicon className="hover-hand margin-files" />
                              </a> :
                                <PDFicon className="margin-file svg-relative" />
                            }
                      </div>
              </div>

              <div className="col l6 pull-l3 aprobacion-mvt-titulos">
                 <p>MVT</p>
                    <div className="col l12 no-margin">
                    {MVT_File? 
                    <a href={MVT_File} target="_blank"> 
                        <PDFicon className="hover-hand margin-files"/> 
                    </a>:
                     <PDFicon className="margin-file svg-relative" />
                    }
                    </div>
              </div>
            </div>
{/* fila inferior */}
            <div className="col l9 top-line-mvt ">
              <div className="col s6 m6 l12 aprobacion-mvt-titulos ">
                  <p>COMENTARIOS</p>
                 <p className="aprobacion-mvt-subtitles ">{currentMVT.observation} </p>
              </div>
            </div>
           
            <div className="col l3 center no-margin top-line-mvt">
    
                            <div className="col l12 aprobacion-mvt-button ">
                            {habilitar === true?
                                <p className="red-text hover-hand" onClick={openModal1} type="button">APROBAR MVT</p>:null}
                           
                          </div>  
            </div>
            
    </div>

         {/* PAGINADO */}

         <div className="col s12 m12 l12 center">
            <ul className="pagination ">
             <li className="disabled"><a href="#!"><i className="material-icons chevron">chevron_left</i></a></li>
             <li className="active"><a className="font-pagination-seslected"href="#!">1</a></li>
             <li className="waves-effect"><a className="font-pagination" href="#!">2</a></li>
             <li className="waves-effect"><a className="font-pagination" href="#!">3</a></li>
             <li className="waves-effect"><a className="font-pagination" href="#!">4</a></li>
             <li className="waves-effect"><a className="font-pagination" href="#!">5</a></li>
             <li className="waves-effect"><a className="font-pagination" href="#!"><i className="material-icons chevron ">chevron_right</i></a></li>
            </ul>
          </div>

        {/* botones  */}
        <div className="row">
          <div className="col s12 m12 l12 no-margin "><a href="/r&d-mvt-list">
              <button className="btn-small btn-block waves-effect waves-light z-depth-2 button-regresar-plan-list " type="button">
                REGRESAR A LISTA DE MVT
              </button></a>
            </div>
            </div>
    
       </div>
        
       </Form>
            </Formik>

            <Popup contentStyle={{background: "0"}} open={open1} closeOnDocumentClick onClose={closeModal1} lockScroll = {true}>
                 
                 <div className="alert z-depth-1" >
                  <div className="row row-fix ">
                    <div className="col s12 m12 l12 no-margin">
                      <div className="atention center-align">ATENCION</div>
                    </div>
                    <div className="col s12 m12 l12 no-margin divisor-bottom-line">
                      <div  className="alert-msg center-align ">Esta por Aprobar MVT</div>
                    </div>
                  </div>
  
                  <div className="row">
                       <div className="col s6 m6 l6 divisor-right-line center">
                          <div onClick={closeModal1} className="button-alert waves-effect waves-dark btn-block">Cancelar</div >
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
                        {updateMvtRdnStatusError ? <div className="atention center-align">Error al aprobar MVT</div>:null}
                        {updateMvtQaStatusError ? <div className="atention center-align">Error al aprobar MVT</div>:null}
                        {updateMvtProductionStatusError ? <div className="atention center-align">Error al aprobar MVT</div>:null}
                        {updateMvtIndustrialStatusError ? <div className="atention center-align">Error al aprobar MVT</div>:null}

                        {updateMvtRdStausSuccess? <div className="atention center-align">MVT Aprobada Exitosamente!</div>:null}
                        {updateMvtQaStatusSuccess? <div className="atention center-align">MVT Aprobada Exitosamente!</div>:null}
                        {updateMvtProductionStatusSuccess? <div className="atention center-align">MVT Aprobada Exitosamente!</div>:null}
                        {updateMvtIndustrialStatusSuccess? <div className="atention center-align">MVT Aprobada Exitosamente!</div>:null}
                      </div>
                      <div className="col s12 m12 l12 no-margin divisor-bottom-line">
                        {updateMvtRdnStatusError ? <div className="alert-msg center-align ">Contacte al Administrador</div>:null}
                        {updateMvtQaStatusError ? <div className="alert-msg center-align ">Contacte al Administrador</div>:null}
                        {updateMvtProductionStatusError ? <div className="alert-msg center-align ">Contacte al Administrador</div>:null}
                        {updateMvtIndustrialStatusError ? <div className="alert-msg center-align ">Contacte al Administrador</div>:null}

                        {updateMvtRdStausSuccess ?<div className="alert-msg center-align ">Muchas gracias!</div>:null}
                        {updateMvtQaStatusSuccess ?<div className="alert-msg center-align ">Muchas gracias!</div>:null}
                        {updateMvtProductionStatusSuccess ?<div className="alert-msg center-align ">Muchas gracias!</div>:null}
                        {updateMvtIndustrialStatusSuccess ?<div className="alert-msg center-align ">Muchas gracias!</div>:null}
                      </div>
                    </div>
    
                    <div className="row">
                         <div className="col s6 m6 l12 center">
                            {updateMvtRdnStatusError? <div onClick={closeModal2} className="button-alert waves-effect waves-dark btn-block">Continuar</div> :null}
                            {updateMvtQaStatusError? <div onClick={closeModal2} className="button-alert waves-effect waves-dark btn-block">Continuar</div> :null}
                            {updateMvtProductionStatusError? <div onClick={closeModal2} className="button-alert waves-effect waves-dark btn-block">Continuar</div> :null}
                            {updateMvtIndustrialStatusError? <div onClick={closeModal2} className="button-alert waves-effect waves-dark btn-block">Continuar</div> :null}

                            {updateMvtRdStausSuccess?<div onClick={closeModal2} className="button-alert waves-effect waves-dark btn-block">Continuar</div >:null}
                            {updateMvtQaStatusSuccess?<div onClick={closeModal2} className="button-alert waves-effect waves-dark btn-block">Continuar</div >:null}
                            {updateMvtProductionStatusSuccess?<div onClick={closeModal2} className="button-alert waves-effect waves-dark btn-block">Continuar</div >:null}
                            {updateMvtIndustrialStatusSuccess?<div onClick={closeModal2} className="button-alert waves-effect waves-dark btn-block">Continuar</div >:null}
                      
                         </div>
                    </div>
                   </div>
                  </Popup>
                  </>: <div className="progress white">
    <div className="indeterminate red"></div>
    </div>}
      </>
    );
  };
  export default Aprobacion_de_MVT;