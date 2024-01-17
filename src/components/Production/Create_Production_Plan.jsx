import { Formik, Form, Field, ErrorMessage} from "formik";
import { useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { createNewPlanContext } from "../../contexts/CreateNewPlanContext";
import {counterMechanicPlansContext} from "../../contexts/CounterMechanicPlansContext"
import {counterDigitalPlansContext} from "../../contexts/CounterDigitalPlansContext"



import Popup from 'reactjs-popup';
import Navbar from "../Navbar/Navbar";
import QR from "../../assets/logos/QR.png";

const Create_Production_Plan = () => {

  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [plan, setPlan] = useState('');
  const [planNumber, setPlanNumber] = useState('');
  const [mes,  setMes] =  useState();
  const [año, setAño]=  useState();
  const [habilitar, setHabilitar] = useState(false);
  
  const {setNewPlan, newPlanError, newPlanSuccess} = useContext(createNewPlanContext);
  const {mechanicCountPlans} = useContext(counterMechanicPlansContext);
  const {digitalCountPlans} = useContext(counterDigitalPlansContext);

  const user = JSON.parse(localStorage.getItem('user'));

  var date = new Date();
  var year = date.toLocaleString("default", { year: "numeric" });
  var month = date.toLocaleString("default", { month: "2-digit" });
  var day = date.toLocaleString("default", { day: "2-digit" });
  var formattedDate = year + "-" + month + "-" + day;
  
  useEffect(() => {     
      setMes(month)
      setAño(year)
  },[month, year])

  const navigate = useNavigate();
  const openModal1 = () => {
   setOpen1(true);
 }
  const closeModall1 =() => {
      setOpen1(false);
  };

const validar = (values) => {
  const errors = {};
  if(!values.type_plan){
    errors.type_plan = "Por favor seleccione tipo de plan"
  } 
  else if(values.type_plan === "digital"){
    setPlan("D")
    setPlanNumber(digitalCountPlans)
    setHabilitar(true)
  }
  else if(values.type_plan === "mecanico"){
    setPlan("M")
    setPlanNumber(mechanicCountPlans)
    setHabilitar(true)
  }
  return errors;
};

  const handleSubmit = (values) => {

  const newPlan = {
    created_date: formattedDate,
    modification_count:0,
    state: "SIN PUBLICAR",
    type_plan: values.type_plan,
    id:plan+planNumber+mes+'-'+año,
    id_user: user.id
  }
  console.log(newPlan)
  setNewPlan(newPlan)
  };

  const twoFunctions = () => {
    setOpen2(true);
    setOpen1(false) 
  }
  const planID = plan+planNumber+mes+'-'+año

  const closeModal2 =() => {
    window.location.reload()
    setOpen2(false);
    if(newPlanSuccess){
     navigate(`/create-production-batch/${planID}`);
    }
  }

  return (
    <>
      <Navbar />
      <div className="row">
        <div className=" col s12 m12 l12 top-top-banner"></div>
        <div className="col s12 m12 l12 top-banner"></div>
      </div>
      {/* ---------------------------------------Banner Titlee------------------- */}
      <div className="row">
        <div className="col s12 m12 l12 title-banner z-depth-2">
          <div className="container">

            <div className="col s9 m9 l8 no-margin">
              <p className="font-title-create-plan">Crear Plan de Producción</p>
              <p className="font-subtitle-create-plan">&nbsp;</p>
            </div>
        

            <div className="col s11 m5 l3 no-margin">
              <p className="font-form-create-plan left ">RC:16-062</p>
              <p className="font-plan-create-plan left ">&nbsp;</p>
              <p className="font-date-create-plan left ">&nbsp;</p>
            </div>

            <div className="col s1 m1 l1 push-m6">
              <img className="qr right " src={QR} alt=""></img>
              <i className=" right material-symbols-outlined print">&nbsp;</i>
            </div>

          </div>
        </div>
      </div>

      {/* ---------------------------------------Formulario------------------- */}

    {!mechanicCountPlans || !digitalCountPlans? <>
             <div className="progress white">
             <div className="indeterminate red"></div>
           </div>
       </>:

      <Formik
              initialValues={{type_plan:'', created_date:'', planNumber:''}}
              onSubmit={handleSubmit}
              validate={validar}
            >
              <Form id="popup">

      <div className="container">
        <p className="form-title">SELECCIONE EL TIPO DE PLAN A CREAR</p>

        <div className="warning-inputs">
          <ErrorMessage name="type_plan" />
          <ErrorMessage name="created_date" /> 
          <ErrorMessage name="id" />                                          
        </div>

        <div className="row">
          <div className="col s12 m12 l4 ">
            <p className="display-box-title">Tipo de Plan</p>

            <div className="display-box valign-wrapper">   
                  <Field as="select" name="type_plan"  className="browser-default collapsible-header">
                    <option disabled value="">Seleccione tipo de Plan</option>     
                    <option value="mecanico">Mecánico</option>
                    <option value="digital">Digital</option>
                  </Field> 
            </div>

            <p className="display-box-title">Fecha de Creación</p>
              <div className="col l12 no-margin">
              <p className="font-form-create-plan left ">{formattedDate}</p>
            </div>

            {/* <p className="display-box-title">Nº de Plan</p>
              <div className="display-box valign-wrapper">
              <Field name="number_plan" className="input-field-common" type="text"/>
            </div> */}

            <p className="display-box-title">ID del Plan</p>
              
              {/* <Field disabled name="id" className="input-field-common black-text" type="text"/> */}
              
              <p className="font-form-create-plan left ">{plan+planNumber+mes+"-"+año}</p>
              

            <div className="row"></div>
            {/* botones */}

            <div className="col s12 m12 l12 no-margin"><a href="/dashboard">
              <button className="btn-small btn-block waves-effect waves-light button-regresar-create-plan z-depth-2" type="button">
               REGRESAR
              </button></a>
            </div>

            <div className="col s12 m12 l12 no-margin">
              <div >
                 <button disabled={habilitar===false} onClick={openModal1} className="btn-small btn-block waves-effect waves-light button-ingresar-create-plan z-depth-2 " type="button">
                   Ingresar Plan de Producción
                 </button>
              </div>
            </div>

          </div>
         
          {/* <div className="col s12 m12 l8">
            <p className="display-box-title ">Observaciones</p>
            <div className="display-box-text">
            <Field disabled as="textarea" name="comentariosPlan" className="input-field-text-create-plan materialize-textarea" />
            </div>
          </div> */}
      
        </div>
    
      </div>
     
      </Form>
            </Formik>}

<Popup contentStyle={{background: "0"}} open={open1} closeOnDocumentClick onClose={closeModall1} lockScroll = {true}>
                 
                 <div className="alert z-depth-1" >
                  <div className="row row-fix ">
                    <div className="col s12 m12 l12 no-margin">
                      <div className="atention center-align">ATENCION</div>
                    </div>
                    <div className="col s12 m12 l12 no-margin divisor-bottom-line">
                      <div  className="alert-msg center-align ">Esta por crear un nuevo Plan Productivo</div>
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
                   {newPlanError || newPlanSuccess?
                   <div className="alert z-depth-1">
                    <div className="row row-fix ">
                      <div className="col s12 m12 l12 no-margin">
                       {newPlanSuccess && (<div className="atention center-align">{newPlanSuccess}</div>)}
                       {newPlanError && (<div className="atention center-align">{newPlanError}</div>)}
                      </div>
                      <div className="col s12 m12 l12 no-margin divisor-bottom-line">
                      {newPlanSuccess && (<div className="alert-msg center-align ">Muchas gracias!</div>)}
                      {newPlanError && (<div className="alert-msg center-align ">Contacte al Administrador</div>)}
                      </div>
                    </div>
    
                    <div className="row">
                         <div className="col s6 m6 l12 center">
                         {newPlanSuccess && (<div onClick={closeModal2} className="button-alert waves-effect waves-dark btn-block">Continuar</div>)}
                         {newPlanError && (<div onClick={closeModal2} className="button-alert waves-effect waves-dark btn-block">Continuar</div>)}
                         </div>
                    </div>
                   </div>:null}
                  </Popup>

                   
</>
);
};
export default Create_Production_Plan;
