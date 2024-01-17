import { useState, useContext, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import { Link } from "react-router-dom"
import QR from "../../assets/logos/QR.png";
import Popup from "reactjs-popup";
import Navbar from "../Navbar/Navbar";
import { ReactComponent as PDFicon } from '../../assets/icons/pdf 35x35.svg';

import {getAllPlansContext} from "../../contexts/GetAllPlansContext"
import {getAllBatchInsidePlanContext} from "../../contexts/GetAllBatchInsidePlanContext"
import {updateBatchContext} from "../../contexts/UpdateBatchContext"
import { skuDetailsContext } from "../../contexts/SkuDetailsContext";

const Edit_Batch_Params = (e) => {

  // const [conditional1, setConditional1] = useState(false);
  // const [conditional2, setConditional2] = useState(false);
  const [conditionalMode, setConditionalMode] = useState(false);
  const [erase, setErase] = useState(false);
  const [modalEdition, setModalEdition] = useState(false);
  const [open2, setOpen2] = useState(false);

  const [habilitar, setHabilitar] = useState(false);
  const [alternativeUse, setAlternativeUse] = useState(false);
  const [stockMode, setStockMode] = useState(false);
  const [currentPlan, setCurrentPlan] = useState();
  const [currentBatch, setCurrentBatch] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const { allPlans } = useContext (getAllPlansContext)
  const { allBatchs, setIdPlanBatch} = useContext(getAllBatchInsidePlanContext)
  const { skuDetail, setSku } = useContext(skuDetailsContext)
  const { setIdBatchUpdate, setUpdatedBatch, updateBatchSuccess, updateBatchError } = useContext(updateBatchContext)

  let {idPlan} = useParams();
  let {batch_number} = useParams();

  // Seteo del Plan
  useEffect(()=>{
    if(allPlans){
      setCurrentPlan (allPlans.filter(plan => plan.id === idPlan))
    }
  },[allPlans])
 
  useEffect(() => {
    if(idPlan){
      setIdPlanBatch(idPlan)
    }
  },[setIdPlanBatch, idPlan])

// Seteo del Lote a editar
useEffect(() => {
  if (allBatchs) {
    const filteredBatch = allBatchs.filter(batch => batch.batch_number === parseInt(batch_number));
    setCurrentBatch(filteredBatch[0]);
  }
}, [allBatchs]);

// Seteo ID del Lote a editar
console.log("ID BATCH IN FRONT", currentBatch.id_batch)
useEffect(() => {
  if(currentBatch){
    setIdBatchUpdate(currentBatch.id_batch)
  }
},[ currentBatch ])

console.log("CURRENT BATCH", currentBatch)

// Seteo de CANTIDAD / FROM / TO
 useEffect(()=>{
  if(currentBatch.sku){
    setSku(currentBatch.sku)
  }
  if(skuDetail){
    setTotalQuantity(skuDetail.serial+1+quantity)
  }
  if(skuDetail === 0){
    setTotalQuantity(skuDetail.serial)
  }
},[quantity, skuDetail])

 

  const openErase =()=>{
    setErase(true);
  }
  const closeErase =()=>{
    setErase(false);
  }
  const openModalEdition =()=>{
    setModalEdition(true);
  }
  const closeModalEdition=() => {
    setModalEdition(false)
  }

  const validar = (values) => {
    const errors = {};
    var extensionPDF = /(\.pdf)$/i;
    var onlyNumbers = /^[0-9]+$/;
    var limit100 = /^[\s\S]{0,100}$/;
     
    if(values.mode === "Stock"){
      setStockMode(true)
      setConditionalMode(false)
    } 
    if(values.mode === "Order" ){
      setStockMode(false)
      setConditionalMode(true)
    } 
      if(values.mode === "Order" && !values.num_order){
        errors.quantity = "Por Favor Ingrese Número de Orden"
      }
      if(values.num_order && !values.num_order.match(onlyNumbers)){
        errors.quantity = "Ingrese Solo Numeros para Numero de Orden"
      }
      if(values.mode==="Order" && !values.order_file){
        errors.quantity =  "Por Favor Ingrese Orden"
      }
      if (values.order_file && !extensionPDF.exec(values.order_file)){
        errors.quantity = "La Orden puede ser solo PDF"
      }
      if(values.state_useAlternative === 1 || values.state_useAlternative === '1' && !values.actually_sku){
        errors.quantity = "Por favor ingrese SKU Actual"
      } 
      if(values.state_useAlternative === 1 || values.state_useAlternative === '1' && !values.old_sku){
        errors.quantity = "Por favor ingrese SKU Antiguo"
      } 
      if (values.state_useAlternative === 0 || values.state_useAlternative === '0'){
        setAlternativeUse(false)
      } 
    if (values.state_useAlternative === 1 || values.state_useAlternative === '1'){
       setAlternativeUse(true)
     }
    if(!errors.quantity){
    setHabilitar(true)
    }
    if(errors.quantity){
    setHabilitar(false)
   }
   console.log(errors)
  return errors;
};

  const handleSubmit = (values) => {

  const updatedBatch = {

        state_useAlternative:values.state_useAlternative === "1"? 1:0,
           old_sku: alternativeUse === true? values.old_sku:null,
           actually_sku: alternativeUse === true? values.actually_sku:null,
        mode:values.mode,
           num_order:stockMode === true? null:values.num_order,
           order_file:stockMode === true? null:values.order_file,
           deliver_date:values.deliver_date,
        quantity:values.quantity, 
        last_serie:values.last_serie, 
        observation:values.observation, 
        validity:values.validity,
  }
  setUpdatedBatch(updatedBatch)

  };

  const navigate = useNavigate();

  const twoFunctions = () => {
    setOpen2(true);
    setModalEdition(false)
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
      {currentBatch.quantity? <> 
      <div className="row">
        <div className="col s12 m12 l12 title-banner-edit-mode z-depth-2">
          <div className="container">

            <div className="col s7 m8 l8 no-margin">
              <p className="font-title-create-batch">Edición de Parámetros de Lote</p>
              <p className="font-subtitle-create-batch">SUBTITULO</p>
            </div>
      
            <div className="col s11 m5 l3 push-l1 no-margin">
              <p className="font-form-create-batch left ">RC:16-062</p>
              <p className="font-date-create-batch left ">FECHA DE REGISTRO: {currentPlan?currentPlan[0].created_date:null}</p>
              <p className="font-plan-create-batch left ">PLAN Nº: {currentPlan?currentPlan[0].id:null} </p>
            </div>

            <div className="col s1 m1 l1 push-m6">
              <img className="qr right " src={QR} alt=""></img>
              <i className=" right material-symbols-outlined print">print</i>
            </div>

          </div>
        </div>
      </div>

      {/* ---------------------------------------Formulario------------------- */}
      <Formik
      initialValues={{ 
        // batch_number:'',
        // sku:'',
        // description:'',
        state_useAlternative:currentBatch.state_useAlternative,
          old_sku: currentBatch.old_sku, 
          actually_sku: currentBatch.actually_sku,
        // plataform:'',
        // brand:'',
        mode:currentBatch.mode,
           num_order:currentBatch.num_order,
           order_file:currentBatch.order_file,
           deliver_date:currentBatch.deliver_date,
           quantity: currentBatch.quantity,
        // first_serie:currentBatch.first_serie, 
        last_serie:totalQuantity,
        observation:currentBatch.observation, 
        validity:currentBatch.validity,
      }}

      onSubmit={handleSubmit}
      validate={validar}
      
            >
              <Form id="popup">

      <div className="container">
        <p className="form-title">&nbsp;</p>


        <div className="warning-inputs-scan">
            <ErrorMessage name="quantity" />  
        </div>
        <div className="row">
        <div className="col s12 m12 l3 no-margin">

          <div className="col s12 m4 l6">
            <p className="display-box-title">Nº De Lote</p>
              <div className="display-box valign-wrapper grey-text">
               <p>{currentBatch.batch_number}</p>
              </div>
          </div>

          <div className="col s12 m4 l6">
            <p className="display-box-title">SKU</p>
              <div className="display-box valign-wrapper  grey-text">
               <p>{currentBatch.sku}</p>
              </div>
          </div>
          <div className="col s12 m4 l12">
              <p className="display-box-title">Descripción</p>
                 <div className="display-box valign-wrapper  grey-text">
               <p>{currentBatch.description}</p>
            </div>
          </div>

          <div className="col s12 m12 l12">
            <p className="display-box-title">Uso Alternativo</p>
             <div className="display-box valign-wrapper">   
             <Field as="select" name="state_useAlternative"  className="browser-default collapsible-header">
                <option disabled value="">Uso Disposición</option>     
                <option value="1">Si</option>
                <option value="0">No</option>
              </Field> 
            </div>
          </div>

          <div className="col s6 m6 l6">
              <p className="display-box-title">SKU Antiguo</p>
                <div className={alternativeUse===false? "display-box valign-wrapper conditional-background":"display-box valign-wrapper"}>
                <Field disabled={alternativeUse===false} name="old_sku"  className="input-field-batch-lote" type="text"/>
                </div>
          </div>
          <div className="col s6 m6 l6">
              <p className="display-box-title">SKU Actual</p>
                <div className={alternativeUse===false? "display-box valign-wrapper conditional-background":"display-box valign-wrapper"}>
                <Field disabled={alternativeUse===false} name="actually_sku"  className="input-field-batch-lote" type="text"/>
                </div>
          </div>
          </div>

          <div className="col s12 m12 l4 no-margin">
          <div className="col s12 m12 l12 ">
            <p className="display-box-title">Tipo de Plataforma</p>
            <div className="display-box valign-wrapper  grey-text">   
            <p>{currentBatch.platform}</p>
            </div>
          </div>

          <div className="col s12 m12 l12">
            <p className="display-box-title">Marca</p>
             <div className="display-box valign-wrapper grey-text">   
             <p>{currentBatch.brand}</p>
            </div>
          </div>

          <div className="col s12 m8 l8">
            <p className="display-box-title">Modalidad de Lote</p>
            <div className="display-box valign-wrapper">   
            <Field as="select" name="mode"className="browser-default collapsible-header">
                <option disabled value="">Modalidad</option>     
                <option value="Order">Make to Order</option>
                <option value="Stock">Make to Stock</option>
              </Field> 
            </div>
          </div>

          <div className="col s6 m4 l4">
              <p className="display-box-title">Orden PDF</p>
              <Field disabled={conditionalMode===false} type="file" name="order_file" id='ordenpdf' className="browser-default collapsible-header" style={{display:'none'}}/>
                        <label htmlFor="ordenpdf">
                            <PDFicon className="hover-hand" />
                        </label>
          </div>

          <div className="col s6 m6 l6 left">
              <p className="display-box-title">Nro. Orden</p>
                <div className={conditionalMode === false? "display-box valign-wrapper conditional-background":"display-box valign-wrapper"} >
                <Field disabled={conditionalMode=== false} name="num_order"  className="input-field-batch-lote" type="text"/>
                </div>
          </div>
          <div className="col s12 m6 l6">
              <p className="display-box-title">Fecha de Entrega</p>
                <div className="display-box valign-wrapper">
                <Field name="deliver_date"  className="input-field-batch-lote" type="date"/>
                </div>
          </div>
        </div>
        {/* 3er Columna */}
        <div className="col s12 m12 l5 no-margin">

        <div className="col s12 m4 l4">
            <p className="display-box-title">Cantidad</p>
              <div className="display-box valign-wrapper">
              <Field name="quantity" className="input-field-batch-lote" type="number" />
              </div>
          </div>

          <div className="col s6 m4 l4">
              <p className="display-box-title">Desde</p>
                <div className="display-box margin-description grey-text">
                {currentBatch.first_serie}  
                </div>
          </div>

          <div className="col s6 m4 l4">
          <p className="display-box-title">Hasta</p>
              <div className="display-box valign-wrapper grey-text">
              {totalQuantity}  
          </div>
          </div>


          <div className="col s12 m12 l12">
            <p className="display-box-title">Observaciones</p>
              <div className="observaciones-create-batch">
              <Field as="textarea" name="observation" className="input-field-text-create-plan materialize-textarea" maxLength="101" />
            </div>
          </div>

          <div className="col s12 m12 l12">
            <p className="display-box-title">Vigencia</p>
              <div className="vigencia-create-batch">
              <Field as="textarea" name="validity" className="input-field-text-create-plan materialize-textarea" maxLength="101" />
            </div>
          </div>
        {/* botones */}
        
        </div>
        
        <div className="row">

                       
          <div className="col s12 m12 l7">
        <Link to={`/production-batchs-list/${idPlan}`}>
              <button className="btn-small btn-block waves-effect waves-light button-regresar-edit-batch z-depth-2" type="button">
                CANCELAR EDICION  Y regresar a Lotes
              </button>
              </Link>

          </div>
          <div className="col s12 m12 l5">
          <div className="row">

          <div className="col s12 m12 l6">
                 <button onClick={openErase} className="btn-small btn-block waves-effect waves-light button-erase-batch z-depth-2 " type="submit">
                   Eliminar lote
                 </button>

          <Popup contentStyle={{background: "0"}} open={erase} closeOnDocumentClick onClose={closeErase} lockScroll = {true}>
               <div className="alert z-depth-1" >
                <div className="row row-fix ">
                  <div className="col s12 m12 l12 no-margin">
                    <div className="atention center-align">ATENCION</div>
                  </div>
                  <div className="col s12 m12 l12 no-margin divisor-bottom-line">
                    <div  className="alert-msg center-align ">Esta por eliminar el Lote del Plan</div>
                  </div>
                </div>

                <div className="row">
                     <div className="col s6 m6 l6 divisor-right-line center">
                        <div onClick={closeErase} className="button-alert waves-effect waves-dark btn-block">Cancelar</div >
                     </div>
                      <div className="col s6 m6 l6 center">
                       <div className="button-alert waves-effect waves-dark btn-block">Continuar</div>
                      </div>
                </div>
               </div>            
          </Popup> 
          <Popup contentStyle={{background: "0"}} open={modalEdition} closeOnDocumentClick onClose={closeModalEdition} lockScroll = {true}>
               <div className="alert z-depth-1" >
                <div className="row row-fix ">
                  <div className="col s12 m12 l12 no-margin">
                    <div className="atention center-align">ATENCION</div>
                  </div>
                  <div className="col s12 m12 l12 no-margin divisor-bottom-line">
                    <div  className="alert-msg center-align ">Esta por guardar cambios a Lote</div>
                  </div>
                </div>

                <div className="row">
                     <div className="col s6 m6 l6 divisor-right-line center">
                        <div onClick={closeModalEdition} className="button-alert waves-effect waves-dark btn-block">Cancelar</div >
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
                      
                        {updateBatchError && (<div className="atention center-align">{updateBatchError}</div>)}
                        {updateBatchSuccess && (<div className="atention center-align">{updateBatchSuccess}</div>)}
                      </div>
                      <div className="col s12 m12 l12 no-margin divisor-bottom-line">
                      {updateBatchError && (<div className="alert-msg center-align ">Contacte al Administrador</div>)}
                      {updateBatchSuccess && (<div className="alert-msg center-align ">Muchas gracias!</div>)}
                      </div>
                    </div>
    
                    <div className="row">
                         <div className="col s6 m6 l12 center">
                         {updateBatchError && (<div onClick={closeModal2} className="button-alert waves-effect waves-dark btn-block">Continuar</div >)}
                         {updateBatchSuccess && (<div onClick={closeModal2} className="button-alert waves-effect waves-dark btn-block">Continuar</div >)}
                         </div>
                    </div>
                   </div>
                  </Popup>      



          </div>
          <div className="col s12 m12 l6">
                 <button disabled={habilitar === false} onClick={openModalEdition} className="btn-small btn-block waves-effect waves-light button-erase-batch z-depth-2 " type="submit">
                   GUARDAR EDICION
                 </button>
          </div>



        </div>
        </div>
       
        </div>


        </div>

           
        {/* container */}
         </div> 
         </Form>
            </Formik>
            </>: <div className="progress white">
            <div className="indeterminate red"></div>
          </div>}
        
    </>
    );
  };
  export default Edit_Batch_Params;