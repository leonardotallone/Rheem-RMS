import Navbar from "../Navbar/Navbar";
import QR from "../../assets/logos/QR.png";
import { useState } from "react";
import Popup from "reactjs-popup";

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

import { useNavigate } from 'react-router-dom';
import { useParams} from "react-router";

const Production_Line_Failure_List = () => {


  const exportToPDF = () => {
      const input = document.getElementById('test-pdf');
      html2canvas(input,{
        logging: true,
        useCORS: true,
        allowTaint: true,
        scale: 3.75,
      })
        .then((canvas) => {     
          const imgData = canvas.toDataURL('image/png', 1);
          const pdf = new jsPDF("landscape","mm", "a3", true,);
          const imgProps= pdf.getImageProperties(imgData);
          const pdfWidth =  pdf.internal.pageSize.getWidth();
          const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
          pdf.addImage(imgData, 'PNG',0,0, pdfWidth,pdfHeight,"FAST");
          pdf.save('Listado de Fallas.pdf');
        });
    };




const [planState, setPlanState] = useState(false);
const [publish, setPublish] = useState(false);
const [publishSuccess, setPublishSuccess] = useState(false);

// const publishPlan = ()=>{setPlanState(true);}
const openPublishPopup = () =>{ setPublish(true);}
const closePublishPopup = () =>{ setPublish(false);}

// const openPublishPopupSuccess = () =>{ setPublishSuccess(true);}
const closePublishPopupSuccess = () =>{ setPublishSuccess(false);}

const twoFunctionsPublish = () =>{
  setPlanState(true);
  setPublish(false)
  setPublishSuccess(true)
}

const {idPlan} = useParams();
const navigate = useNavigate();

const handleGoBack = () => {
navigate(`/production-batchs-list/${idPlan}`);
};


    return (
      <div id="test-pdf">
      <Navbar />
      <div >
      <div className="row">
        <div className=" col s12 m12 l12 top-top-banner"></div>
        <div className="col s12 m12 l12 top-banner"></div>
      </div>
         {/* ---------------------------------------Banner Title------------------- */}
         <div className="row">
        <div className="col s12 m12 l12 title-banner z-depth-2">
          <div className="container">

            <div className="col s7 m8 l8 no-margin">
              <p className="font-title-plan-list">Listado de Fallas</p>
              <p className="font-subtitle-plan-list">Vista Previa</p>
            </div>
        

            <div className="col s11 m5 l3 no-margin">
              <p className="font-form-plan-list left ">RC:16-062</p>
              {/* <p className="font-plan-plan-list left ">PLAN Nº: D0103-2023</p>
              <p className="font-date-plan-list left ">FECHA DE REGISTRO: 23-06-2023</p> */}
            </div>

            <div className="col s1 m1 l1 push-m6">
              <img className="qr right " src={QR} alt=""></img>
              <i  onClick={exportToPDF} className=" right material-symbols-outlined print  hover-hand">print</i>
            </div>

          </div>
        </div>
      </div>

       {/* ---------------------------------------Formulario------------------- */}

       <div className="container" >
          <div className="row"></div>
          <div className="row"></div>


    <div className="row display-box-plan z-depth-1">
            <div className="col s12 m12 l3">
                <p className="plan">Código de Componente:</p> 
                <p className="number-plan">B01000</p>
            </div>
            <div className="col s12 m12 l8 ">
                <p className="plan">Código de Falla:</p> 
                <p className="number-plan">B01003</p>
            </div>
            <div className="col s12 m12 l5 ">
                <p className="modification">Componente:</p>
                <p className="num-modification">Dispositivo de regulacion de gas/agua</p>
            </div>
            <div className="col s12 m12 l6">
                <p className="last-modification">Defecto o Falla:</p>
                <p className="last-modification-date">Cuerpo entrada de agua defectuoso</p>
            </div>
            <div className="col s12 m12 l1">
              <a href="/production-batchs-list">  
                <i className="material-symbols-outlined trash-bin">delete</i>
              </a>
            </div>
    </div>

    <div className="row display-box-plan z-depth-1">
            <div className="col s12 m12 l3">
                <p className="plan">Código de Componente:</p> 
                <p className="number-plan">B01000</p>
            </div>
            <div className="col s12 m12 l8 ">
                <p className="plan">Código de Falla:</p> 
                <p className="number-plan">B01003</p>
            </div>
            <div className="col s12 m12 l5 ">
                <p className="modification">Componente:</p>
                <p className="num-modification">Dispositivo de regulacion de gas/agua</p>
            </div>
            <div className="col s12 m12 l6">
                <p className="last-modification">Defecto o Falla:</p>
                <p className="last-modification-date">Cuerpo entrada de agua defectuoso</p>
            </div>
            <div className="col s12 m12 l1">
              <a href="/production-batchs-list">  
                <i className="material-symbols-outlined trash-bin">delete</i>
              </a>
            </div>
    </div>

    <div className="row display-box-plan z-depth-1">
            <div className="col s12 m12 l3">
                <p className="plan">Código de Componente:</p> 
                <p className="number-plan">B01000</p>
            </div>
            <div className="col s12 m12 l8 ">
                <p className="plan">Código de Falla:</p> 
                <p className="number-plan">B01003</p>
            </div>
            <div className="col s12 m12 l5 ">
                <p className="modification">Componente:</p>
                <p className="num-modification">Dispositivo de regulacion de gas/agua</p>
            </div>
            <div className="col s12 m12 l6">
                <p className="last-modification">Defecto o Falla:</p>
                <p className="last-modification-date">Cuerpo entrada de agua defectuoso</p>
            </div>
            <div className="col s12 m12 l1">
              <a href="/production-batchs-list">  
                <i className="material-symbols-outlined trash-bin">delete</i>
              </a>
            </div>
    </div>

    <div className="row display-box-plan z-depth-1">
            <div className="col s12 m12 l3">
                <p className="plan">Código de Componente:</p> 
                <p className="number-plan">B01000</p>
            </div>
            <div className="col s12 m12 l8 ">
                <p className="plan">Código de Falla:</p> 
                <p className="number-plan">B01003</p>
            </div>
            <div className="col s12 m12 l5 ">
                <p className="modification">Componente:</p>
                <p className="num-modification">Dispositivo de regulacion de gas/agua</p>
            </div>
            <div className="col s12 m12 l6">
                <p className="last-modification">Defecto o Falla:</p>
                <p className="last-modification-date">Cuerpo entrada de agua defectuoso</p>
            </div>
            <div className="col s12 m12 l1">
              <a href="/production-batchs-list">  
                <i className="material-symbols-outlined trash-bin">delete</i>
              </a>
            </div>
    </div>

    <div className="row display-box-plan z-depth-1">
            <div className="col s12 m12 l3">
                <p className="plan">Código de Componente:</p> 
                <p className="number-plan">B01000</p>
            </div>
            <div className="col s12 m12 l8 ">
                <p className="plan">Código de Falla:</p> 
                <p className="number-plan">B01003</p>
            </div>
            <div className="col s12 m12 l5 ">
                <p className="modification">Componente:</p>
                <p className="num-modification">Dispositivo de regulacion de gas/agua</p>
            </div>
            <div className="col s12 m12 l6">
                <p className="last-modification">Defecto o Falla:</p>
                <p className="last-modification-date">Cuerpo entrada de agua defectuoso</p>
            </div>
            <div className="col s12 m12 l1">
              <a href="/production-batchs-list">  
                <i className="material-symbols-outlined trash-bin">delete</i>
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

          <div className="col s12 m12 l4 no-margin left">
            
              <button onClick={handleGoBack} className="btn-small btn-block waves-effect waves-light z-depth-2 button-regresar-plan-list " type="button">
                REGRESAR
              </button>
              
            </div>
            </div>
       </div>

       <Popup contentStyle={{background: "0"}} open={publish} closeOnDocumentClick onClose={closePublishPopup} lockScroll = {true}>
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
              </Popup>


      
              </div>
      </div>
    );
  };
  export default Production_Line_Failure_List;