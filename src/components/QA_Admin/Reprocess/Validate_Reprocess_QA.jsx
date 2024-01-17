
import Navbar from "../../Navbar/Navbar";
import QR from "../../../assets/logos/QR.png";
// import { useState } from "react";
// import Popup from "reactjs-popup";

const Validate_Reprocess_QA = () => {

// const [directUser] = useState(!false);
// const [planState, setPlanState] = useState(false);
// const [publish, setPublish] = useState(false);
// const [publishSuccess, setPublishSuccess] = useState(false);

// // const publishPlan = ()=>{setPlanState(true);}
// const openPublishPopup = () =>{ setPublish(true);}
// const closePublishPopup = () =>{ setPublish(false);}

// // const openPublishPopupSuccess = () =>{ setPublishSuccess(true);}
// const closePublishPopupSuccess = () =>{ setPublishSuccess(false);}

// const twoFunctionsPublish = () =>{
//   setPlanState(true);
//   setPublish(false)
//   setPublishSuccess(true)
// }


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
              <p className="font-title-plan-list">Validación de Reproceso QA</p>
              <p className="font-subtitle-plan-list">&nbsp;</p>
            </div>
        

            <div className="col s11 m5 l3 no-margin">
              <p className="font-form-plan-list left ">RC:16-062</p>
              <p className="font-plan-plan-list left ">PLAN Nº: D0103-2023</p>
              <p className="font-date-plan-list left ">FECHA DE REGISTRO: 23-06-2023</p>
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

          {/* <div className="col s6 m4 l3 no-margin">
            <p className="display-box-title">Ordenar Planes</p>
            <div className="display-box valign-wrapper">   
            <select className="browser-default collapsible-header">
              <option value="" disabled selected>
               Ordenar por </option>           
              <option value="1">Digitales</option>
              <option value="2">Mecánicos</option>
            </select>
            </div>
          </div> */}
      
        </div>


    <div className="row display-box-plan z-depth-1">
            {/* <div className="col s12 m12 l12">
                <p className="plan">PLAN Nº:</p> 
                <p className="number-plan">D0106-2023</p>
            </div> */}
            <div className="col s12 m12 l2 ">
                <p className="modification">LOTE Nº:</p>
                <p className="num-modification">12345678910</p>
            </div>
          
            <div className="col s12 m12 l3">
                <p className="last-modification">ULTIMA MODIFICACION:</p>
                <p className="last-modification-date">12-12-2018</p>
            </div>
            <div className="col s12 m12 l3">
                <p className="publication">DATO:</p>
                <p className="publication-date">DATO</p>
            </div>
            
            <div className="col s12 m12 l2">
               <p className="state-plan">NO PUBLICADO</p>
            </div>
            <div className="col s12 m12 l2">
              <a href="/production-batchs-list">  
                <i className="material-symbols-outlined eye right">visibility</i>
              </a>
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
          <div className="col s12 m12 l12 no-margin"><a href="/dashboard">
              <button className="btn-small btn-block waves-effect waves-light z-depth-2 button-regresar-plan-list " type="button">
                REGRESAR
              </button></a>
            </div>
            </div>
    
       </div>

       {/* <Popup contentStyle={{background: "0"}} open={publish} closeOnDocumentClick onClose={closePublishPopup} lockScroll = {true}>
               <div className="alert z-depth-1" >
                <div className="row row-fix ">
                  <div className="col s12 m12 l12 no-margin">
                    <div className="atention center-align">ATENCION</div>
                  </div>
                  <div className="col s12 m12 l12 no-margin divisor-bottom-line">
                    <div  className="alert-msg center-align ">Esta publicar el siguiente Plan</div>
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
               <div className="alert z-depth-1" >
                <div className="row row-fix ">
                  <div className="col s12 m12 l12 no-margin">
                    <div className="atention center-align">Plan Publicado Exitosamente!</div>
                  </div>
                  <div className="col s12 m12 l12 no-margin divisor-bottom-line">
                    <div  className="alert-msg center-align ">Muchas Gracias.</div>
                  </div>
                </div>

                <div className="row">
                      <div className="col s12 m12 l12 center">
                       <div onClick={closePublishPopupSuccess} className="button-alert waves-effect waves-dark btn-block">Continuar</div>
                      </div>
                </div>
               </div>
              </Popup> */}


      
       
      </>
    );
  };
  export default Validate_Reprocess_QA;