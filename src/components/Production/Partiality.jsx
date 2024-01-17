import Navbar from "../Navbar/Navbar";
import QR from "../../assets/logos/QR.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom"
import { useParams} from "react-router";
import Popup from 'reactjs-popup';

import { partialLiberationContext } from "../../contexts/PartialLiberationContext";


const Partiality = () => {

  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  const [habilitar, setHabilitar] = useState(false);
  const {partialLiberationSuccess, partialLiberationError, setIdBatchPartialLiberation, setPartialLiberation} = useContext(partialLiberationContext)

  const {idPlan} = useParams();
  const {id_batch} = useParams();
  const navigate = useNavigate();

  useEffect(()=>{
    if(id_batch){
      setIdBatchPartialLiberation(id_batch)
    }
  },[id_batch])


  const validar = (values) => {
    const errors = {};
    
    if(!values.partial_quantity){
      errors.partial = "Por favor ingrese cantidad"
    } 
  
    if(!errors.partial){
    setHabilitar(true)
    }
    if(errors.partial){
    setHabilitar(false)
  }
  return errors;
};


  const handleSubmit = (values) => {

    const partial = {
      partial_release: "1",
      partial_quantity: values.partial_quantity,
    }
    console.log("JSON PARTIAL", partial)
    setPartialLiberation(partial)
  
    };

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
      navigate(`/production-batchs-list/${idPlan}`)
      window.location.reload()
      setOpen2(false);
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

            <div className="col s7 m8 l8 no-margin">
              <p className="font-title-batch-list"> Liberación Parcial de Lotes</p>
              <p className="font-subtitle-plan-list">-</p>
            </div>
        

            <div className="col s11 m5 l3 push-l1 no-margin">
              <p className="font-form-batch-list left ">RC:16-062</p>
              
              {/* <p className="font-date-batch-list ">FECHA DE CREACION:</p>
              <p className="font-plan-batch-list ">LOTE Nº: </p> */}
            </div>

            <div className="col s1 m1 l1 push-m6">
              <img className="qr right " src={QR} alt=""></img>
              <i className=" right material-symbols-outlined print">print</i>
            </div>

          </div>
        </div>
      </div>

      <Formik
              initialValues={{ partial_quantity:''}}
              onSubmit={handleSubmit}
              validate={validar}
      
            >
              <Form id="popup">

  <div className="container">
    <div className="row">
      <div className="col s6 m8 l6 no-margin">
          

              <div className="col s12 m12 l12 no-margin">
                <p className="font-subtitle-batch-list">
                  Indique la cantidad de parciales a liberar
                </p>
              </div>

              <div className="warning-inputs">
              <ErrorMessage name="partial" />       
              </div>

             <div className="col s6 m6 l12 ">
                <p className="display-box-title">Cantidad</p>
                <div className="partiality-box z-depth-1 center">
                <Field name="partial_quantity"  className="partiality-text center" type="number" style={{ borderBottom: 'none' }} /> 
      
                </div>
              </div>

                  <div className="col s12 m12 l6 left ">
                  <Link to={`/production-batchs-list/${idPlan}`}>
                      <button 
                        className="btn-small btn-block waves-effect waves-light z-depth-2 button-regresar-plan-list "
                        type="button"
                      >
                        regresar
                      </button>
                      </Link>
                
                  </div>
                  <div className="col s12 m12 l6  right">
                    <div>
                      <a href="/create-production-plan">
                        <button disabled={habilitar===false} onClick={openModal1} 
                          className="btn-small btn-block waves-effect waves-light  z-depth-2 button-ingresar-plan-list"
                          type="submit"
                        >
                          Solicitar Liberacion
                        </button>
                      </a>
                    </div>
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
                      <div  className="alert-msg center-align ">Esta por liberar parciales</div>
                    </div>
                  </div>
  
                  <div className="row">
                       <div className="col s6 m6 l6 divisor-right-line center">
                          <div onClick={closeModall1} className="button-alert waves-effect waves-dark btn-block">Cancelar</div >
                       </div>
                        <div className="col s6 m6 l6 center">
                         <button form="popup" onClick={twoFunctions}className="button-alert waves-effect waves-dark btn-block" type="submit">Continuar</button>
                        </div>
                  </div>
                 </div>
                </Popup>
                <Popup contentStyle={{background: "0"}} open={open2} closeOnDocumentClick onClose={closeModal2} lockScroll = {true}>
                   
                   <div className="alert z-depth-1" >
                    <div className="row row-fix ">
                      <div className="col s12 m12 l12 no-margin">
                      
                        {partialLiberationError && (<div className="atention center-align">{partialLiberationError}</div>)}
                        {partialLiberationSuccess && (<div className="atention center-align">{partialLiberationSuccess}</div>)}
                      </div>
                      <div className="col s12 m12 l12 no-margin divisor-bottom-line">
                      {partialLiberationError && (<div className="alert-msg center-align ">Contacte al Administrador</div>)}
                      {partialLiberationSuccess && (<div className="alert-msg center-align ">Muchas gracias!</div>)}
                      </div>
                    </div>
    
                    <div className="row">
                         <div className="col s6 m6 l12 center">
                         {partialLiberationError && (<div onClick={closeModal2} className="button-alert waves-effect waves-dark btn-block">Continuar</div >)}
                         {partialLiberationSuccess && (<div onClick={closeModal2} className="button-alert waves-effect waves-dark btn-block">Continuar</div >)}
                         </div>
                    </div>
                   </div>
                  </Popup>
      
    </>
  );
};
export default Partiality;

