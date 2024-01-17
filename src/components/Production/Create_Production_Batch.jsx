import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router";
import Popup from 'reactjs-popup';
import Navbar from "../Navbar/Navbar";
import QR from "../../assets/logos/QR.png";
import { ReactComponent as PDFicon } from '../../assets/icons/pdf 35x35.svg';

import { getAllPlansContext } from "../../contexts/GetAllPlansContext"
import { createNewBatchContext } from "../../contexts/CreateNewBatchContext"
import { skuListContext } from "../../contexts/SkuListContext";
import { skuDetailsContext } from "../../contexts/SkuDetailsContext";
import { batchCounterContext } from "../../contexts/BatchCounterContext"

const Create_Production_Batch = () => {

  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  const [conditional1, setConditional1] = useState(false);
  const [conditional2, setConditional2] = useState(false);
  const [habilitar, setHabilitar] = useState(false);
  const [plan, setPlan] = useState();
  const [quantity, setQuantity] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  // const [clockName, setClockName] = useState();
 

  const { allPlans } = useContext(getAllPlansContext)
  const { setNewBatch, newBatchSuccess,newBatchError } = useContext (createNewBatchContext)
  const { skuList } = useContext( skuListContext)
  const { skuDetail, setSku } = useContext(skuDetailsContext)
  const { totalBatchs } = useContext(batchCounterContext)
  
  const user = JSON.parse(localStorage.getItem('user'));
  let { idPlan } = useParams();

  useEffect(() => {
    if(allPlans){
      setPlan(allPlans.find(plan => plan.id === idPlan))
    }
  },[allPlans])

  useEffect(()=>{
    if(skuDetail){
      setTotalQuantity(skuDetail.serial+quantity+1)
    }
  },[quantity, skuDetail])


  const navigate = useNavigate();

  const openModal1 = () => {
    if(habilitar === true) {
      setOpen1(true);
 }}
  const closeModall1 =() => {
      setOpen1(false);
  };

  const validar = (values) => {
    const errors = {};
    var extensionPDF = /(\.pdf)$/i;
    var onlyNumbers = /^[0-9]+$/;
    var limit100 = /^[\s\S]{0,100}$/;
     
 
    if(!values.deliver_date){
      errors.sku = "Por favor ingrese fecha de entrega"
    } 
    if(!values.validity.match(limit100)){
      errors.sku = "Ingrese un maximo de 100 caracteres"
    }
    if(!values.observation.match(limit100)){
    errors.sku = "Ingrese un maximo de 100 caracteres"
    }
    if (!values.quantity){
      errors.sku = "Por favor ingrese cantidad"
    } 
    if(values.quantity){
      setQuantity(values.quantity)
    }
    if(!values.deliver_date){
      errors.sku = "Por favor ingrese Fecha de entrega"
    }
    if (!values.mode){
      errors.sku = "Por favor seleccione modalidad del lote"
    } 
    if(values.mode === "Stock"){
      setConditional2(false)
    } 
    if(values.mode === "Order"){
      setConditional2(true)
      if(!values.num_order){
        errors.sku = "Por Favor Ingrese Número de Orden"
      }
      if(values.num_order && !values.num_order.match(onlyNumbers)){
        errors.sku = "Ingrese Solo Numeros para Numero de Orden"
      }
      if (values.order_file && !extensionPDF.exec(values.order_file)){
        errors.sku = "La Orden puede ser solo PDF"
      }
      if(!values.order_file){
        errors.sku = "Por Favor Ingrese Orden"
      }
    } 
    if (!values.state_useAlternative){
      errors.sku = "Por favor seleccione uso alternativo"
    } 
    if (values.state_useAlternative === "0"){
      setConditional1(false)
    } 
   if (values.state_useAlternative === "1" ){
      setConditional1(true)
      if(!values.actually_sku){
        errors.sku = "Por favor ingrese SKU Actual"
      } 
      if(!values.old_sku){
        errors.sku = "Por favor ingrese SKU Antiguo"
      } 
    }
    if(values.sku){
      setSku(values.sku)
    }
    if(!values.sku){
      errors.sku = "Por favor seleccione SKU"
     } 
  if(!errors.sku){
    setHabilitar(true)
  }
  if(errors.sku){
    setHabilitar(false)
  }

  return errors;
};

  const handleSubmit = (values) => {

  const newbatch = {
   batch_number: totalBatchs,
   sku:values.sku,
   description:skuDetail.description,
   state_useAlternative: values.state_useAlternative === "1"? 1:0,
   old_sku: values.old_sku,
   actually_sku:values.actually_sku,

   platform: skuDetail.platform.platform,
   brand: skuDetail.brand.brand,
   mode: values.mode,
   order_file: values.order_file,
   num_order: values.num_order,
   deliver_date:values.deliver_date,

   quantity: values.quantity,
   first_serie: skuDetail.serial + 1,
   last_serie: totalQuantity,

   observation:values.observation,
   validity:values.validity,

   id_plan: idPlan,
   id_user: user.id,
   ranking_batch:0,
   status:"En espera",
   flag_partial_countdown: true,
   created_date: new Date().getTime(),
  }

  setNewBatch(newbatch)

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
              <p className="font-title-create-batch">Creación de Lotes</p>
              <p className="font-subtitle-create-batch">SUBTITULO</p>
            </div>
        
            <div className="col s11 m5 l3 push-l1 no-margin">
              <p className="font-form-create-batch left ">RC:16-062</p>
              <p className="font-date-create-batch left ">FECHA DE CREACION: {plan?plan.created_date:null}</p> 
              <p className="font-plan-create-batch left ">PLAN Nº: {plan?plan.id:null}</p>
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
              initialValues={{ batch_number:'',sku:'',description:'',state_useAlternative:'', old_sku: null, actually_sku:null, plataform:'',brand:'', mode:'',num_order:null, order_file:null,deliver_date:'', quantity:'', first_serie:'', last_serie:'', observation:'', validity:''}}
              onSubmit={handleSubmit}
              validate={validar}
      
            >
              <Form id="popup">

      <div className="container">
        <p className="form-title">COMPLETE EL SIGUIENTE FORMULARIO</p>

     
        <div className="warning-inputs">
              <ErrorMessage name="sku" />       
        </div>

        <div className="row">
        <div className="col s12 m12 l3 no-margin">

          <div className="col s12 m4 l5">
            <p className="display-box-title">Nº De Lote</p>
              <div className="display-box valign-wrapper">
              {totalBatchs}
              </div>
          </div>

          <div className="col s12 m4 l7">
          <p className="display-box-title">SKU</p>
          <div className="display-box valign-wrapper no-margin">
              <Field as="select" name="sku"  className="browser-default collapsible-header">
                    <option disabled value="">Selecccione SKU</option>  
                    {skuList?.map((item) => (
                <option value={item.sku} key={item.sku}>{item.sku}</option>
              ))}   
              </Field>
            </div>
            </div>
 
          <div className="col s12 m4 l12">
              <p className="display-box-title">Descripción</p>
                 <div className="display-box margin-description">
                 {skuDetail?.description? skuDetail.description:null}
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
                <div className={conditional1===false? "display-box valign-wrapper conditional-background":"display-box valign-wrapper"}>
                <Field disabled={conditional1===false} name="old_sku"  className="input-field-batch-lote" type="text"/>
                </div>
          </div>
          <div className="col s6 m6 l6">
              <p className="display-box-title">SKU Actual</p>
                <div className={conditional1===false? "display-box valign-wrapper conditional-background":"display-box valign-wrapper"}>
                <Field disabled={conditional1===false} name="actually_sku"  className="input-field-batch-lote" type="text"/>
                </div>
          </div>
          </div>

          <div className="col s12 m12 l4 no-margin">

          <div className="col s12 m12 l12 ">
            <p className="display-box-title">Tipo de Plataforma</p>
            <div className="display-box margin-description"> 
            {skuDetail?.platform.platform? skuDetail.platform.platform:null}  
            </div>
          </div>

          <div className="col s12 m12 l12">
            <p className="display-box-title">Marca</p>
             <div className="display-box margin-description">   
             {skuDetail?.brand.brand? skuDetail.brand.brand:null}  
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
              <Field disabled={conditional2===false} type="file" name="order_file" id='ordenpdf' className="browser-default collapsible-header" style={{display:'none'}}/>
                        <label htmlFor="ordenpdf" >
                            <PDFicon className="hover-hand" />
                        </label>
          </div>
          <div className="col s6 m6 l6 left">
              <p className="display-box-title">Nro. Orden</p>
                <div className={conditional2 === false? "display-box valign-wrapper conditional-background":"display-box valign-wrapper"} >
                <Field disabled={conditional2 === false} name="num_order"  className="input-field-batch-lote" type="text"/>
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
              <Field name="quantity"  className="input-field-batch-lote" type="number"/>
              </div>
          </div>

        <div className="col s6 m4 l4">
              <p className="display-box-title">Desde</p>
                <div className="display-box margin-description">
                {skuDetail?.serial? skuDetail.serial + 1:null}  
                </div>
        </div>

        <div className="col s6 m4 l4">
          <p className="display-box-title">Hasta</p>
              <div className="display-box valign-wrapper">
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

        <div className="row"></div>
        
        <div className="row">
          <div className="col s12 m12 l7"><a href="/production-plans-list">
              <button className="btn-small btn-block waves-effect waves-light button-regresar-create-batch z-depth-2" type="button">
                Regresar
              </button></a>
          </div>
          <div className="col s12 m12 l5">
                 <button disabled={habilitar===false} onClick={openModal1} className="btn-small btn-block waves-effect waves-light button-ingresar-create-batch z-depth-2 " type="button">
                   Ingresar Lote a Plan
                 </button>
          </div>
        </div>
        </div>

           
        {/* container */}
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
                      <div  className="alert-msg center-align ">Esta por crear un nuevo Lote</div>
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
                      
                        {newBatchError && (<div className="atention center-align">{newBatchError}</div>)}
                        {newBatchSuccess && (<div className="atention center-align">{newBatchSuccess}</div>)}
                      </div>
                      <div className="col s12 m12 l12 no-margin divisor-bottom-line">
                      {newBatchError && (<div className="alert-msg center-align ">Contacte al Administrador</div>)}
                      {newBatchSuccess && (<div className="alert-msg center-align ">Muchas gracias!</div>)}
                      </div>
                    </div>
    
                    <div className="row">
                         <div className="col s6 m6 l12 center">
                         {newBatchError && (<div onClick={closeModal2} className="button-alert waves-effect waves-dark btn-block">Continuar</div >)}
                         {newBatchSuccess && (<div onClick={closeModal2} className="button-alert waves-effect waves-dark btn-block">Continuar</div >)}
                         </div>
                    </div>
                   </div>
                  </Popup>
        
    </>
    );
  };
  export default Create_Production_Batch;