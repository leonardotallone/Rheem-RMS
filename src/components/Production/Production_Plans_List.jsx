import Navbar from "../Navbar/Navbar";
import QR from "../../assets/logos/QR.png";
import { useState, useContext, useEffect } from "react";
import { getAllPlansContext } from "../../contexts/GetAllPlansContext";
import { updatePlanStateContext } from "../../contexts/UpdatePlanStateContext";

import Popup from "reactjs-popup";
import { Link } from "react-router-dom";

const Production_Plans_List = () => {
 
  const [publish, setPublish] = useState(false);
  const [publishSuccess, setPublishSuccess] = useState(false);

  const [id, setId] = useState()
  const [state, setState] = useState();
  const [mes,  setMes] =  useState();
  const [año, setAño]=  useState();
  
  const {allPlans} = useContext(getAllPlansContext);
  // console.log("ALL PLANS", allPlans)
  const {successPlanState, errorPlanState, setIdPlan, setPlanState, setPublicationDate} = useContext(updatePlanStateContext);
  
  var date = new Date();
  var year = date.toLocaleString("default", { year: "numeric" });
  var month = date.toLocaleString("default", { month: "2-digit" });
  var day = date.toLocaleString("default", { day: "2-digit" });
  var formattedDate = year + "-" + month + "-" + day;
  
  useEffect(() => {     
      setMes(month)
      setAño(year)
  },[month, year])

const loadIdandState = (plan) => {
  setPublish(true);
  if(plan){
  setId(plan.id)
  if(plan.state === "SIN PUBLICAR"){
    setState('PUBLICADO')
  }
  console.log("STATE IN FRONT", state)
}
}
const user = JSON.parse(localStorage.getItem("user"))



// console.log("ID",id)
// console.log("State", state)
// console.log("Todos los Planes", allPlans)

const closePublishPopup = () =>{ setPublish(false);}

const closePublishPopupSuccess = () =>{
  setPublishSuccess(false);
  window.location.reload()
}

const twoFunctionsPublish = () => {
  setPublish(false);
  setPublishSuccess(true)
  setPlanState(state);
  setIdPlan(id)
  setPublicationDate(formattedDate)
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
              <p className="font-title-plan-list">Planes de Producción</p>
              <p className="font-subtitle-plan-list">Todos los Planes</p>
            </div>
        

            <div className="col s11 m5 l3 no-margin">
              <p className="font-form-plan-list left ">RC:16-062</p>
              <p className="font-plan-plan-list left ">&nbsp;</p>
              <p className="font-date-plan-list left ">&nbsp;</p>
            </div>

            <div className="col s1 m1 l1 push-m6">
              <img className="qr right " src={QR} alt=""></img>
              <i className=" right material-symbols-outlined print">&nbsp;</i>
            </div>

          </div>
        </div>
      </div>

       {/* ---------------------------------------Formulario------------------- */}

       

<div className="container">
    <div className="row">
      
    </div>

<ul>
{!allPlans?  
            <div className="progress white">
            <div className="indeterminate red"></div>
          </div> :allPlans?.map((plan)=>(
            <li key={plan.id}>

     <div className="row display-box-plan z-depth-1">
            <div className="col s12 m12 l12">
                <p className="plan">PLAN ID:</p> 
                <p className="number-plan">{plan.id}</p>
            </div>
            <div className="col s12 m12 l2 ">
                <p className="modification">MODIFICACIONES:</p>
                <p className="num-modification">{plan.modification_count}</p>
            </div>
          
            <div className="col s12 m12 l3">
                <p className="last-modification">ULTIMA MODIFICACION:</p>
                <p className="last-modification-date">{plan.last_modification}</p>
            </div>
            <div className="col s12 m12 l3">
                <p className="publication">PUBLICADO EL DIA:</p>
                <p className="publication-date">{plan.publication_date}</p>
            </div>
            <div className="col s12 m12 l2">
               <p className="state-plan">{plan.state.toUpperCase()}</p>
            </div>
            <div className="col s12 m12 l2">

            {user.profileRMS === "INGENIERIA INDUSTRIAL"?
            <a href="/production-advance">  
                 <i className="material-symbols-outlined eye right">precision_manufacturing</i>
              </a>:null
            }

              {user.profileRMS === "GERENCIA"?
              <>
              <a href="/production-advance">  
                 <i className="material-symbols-outlined eye right">precision_manufacturing</i>
              </a>
              <a href="/digital-bmp">  
                <i className="material-symbols-outlined eye right">component_exchange</i>
              </a>
            </>:

              <Link to={`/production-batchs-list/${plan.id}`} key={plan.id}>
                  <i className="material-symbols-outlined eye right">visibility</i>
              </Link>
              }
                <i className="material-symbols-outlined warning right">warning</i>

               {user.profileRMS === "PLANIFICADOR DE PRODUCCIÓN"?
                <>
                {plan.state.toUpperCase() === 'SIN PUBLICAR'?
                   <i onClick={() => loadIdandState(plan)} key={plan.id} className="material-symbols-outlined publish right hover-hand">publish</i>:
                   <i className="material-symbols-outlined publish right edit-disabled">publish</i>
                }
                </>:null
              }
      </div>
    </div>
      </li>))}
</ul>

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

          <div className="col s12 m12 l5 no-margin left"><a href="/dashboard">
              <button className="btn-small btn-block waves-effect waves-light z-depth-2 button-regresar-plan-list " type="submit">
                regresar
              </button></a>
            </div>

            {user.profileRMS === "PLANIFICADOR DE PRODUCCIÓN"?
            <div className="col s12 m12 l5 no-margin right">
              <div><a href="/create-production-plan">
                 <button className="btn-small btn-block waves-effect waves-light  z-depth-2 button-ingresar-plan-list" type="submit">
                  Crear plan de Produccion
                 </button></a>
              </div>
            </div>:null
            }
            {/* row */}
            </div>
      {/* container */}
       </div>
      

       <Popup contentStyle={{background: "0"}} open={publish} closeOnDocumentClick onClose={closePublishPopup} lockScroll = {true}>
               <div className="alert z-depth-1" >
                <div className="row row-fix ">
                  <div className="col s12 m12 l12 no-margin">
                    <div className="atention center-align">ATENCION</div>
                  </div>
                  <div className="col s12 m12 l12 no-margin divisor-bottom-line">
                    <div  className="alert-msg center-align ">Esta por publicar el siguiente Plan</div>
                  </div>
                </div>

                <div className="row">
                     <div className="col s6 m6 l6 divisor-right-line center">
                        <div onClick={closePublishPopup} className="button-alert waves-effect waves-dark btn-block">Cancelar</div >
                     </div>
                      <div className="col s6 m6 l6 center">
                       <div onClick={twoFunctionsPublish} className="button-alert waves-effect waves-dark btn-block">Continuar</div>
                      </div>
                </div>
               </div>
              </Popup>
              <Popup contentStyle={{background: "0"}} open={publishSuccess} closeOnDocumentClick onClose={closePublishPopupSuccess} lockScroll = {true}>
              {errorPlanState || successPlanState?
               <div className="alert z-depth-1" >
                <div className="row row-fix ">
                  <div className="col s12 m12 l12 no-margin">
                        {errorPlanState && (<div className="atention center-align">{errorPlanState}</div>)}
                        {successPlanState && (<div className="atention center-align">{successPlanState}</div>)}
                  </div>
                  <div className="col s12 m12 l12 no-margin divisor-bottom-line">
                  {errorPlanState && (<div className="alert-msg center-align ">Contacte al Administrador</div>)}
                      {successPlanState && (<div className="alert-msg center-align ">Muchas gracias</div>)}
                  </div>
                </div>

                <div className="row">
                      <div className="col s12 m12 l12 center">
                       <div onClick={closePublishPopupSuccess} className="button-alert waves-effect waves-dark btn-block">Continuar</div>
                      </div>
                </div>
               </div>:null};
              </Popup>


      
       
      </>
    );
  };
  export default Production_Plans_List;