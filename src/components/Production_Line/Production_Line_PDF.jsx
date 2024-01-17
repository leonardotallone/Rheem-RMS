import React, { useState, useContext, useEffect}  from "react";
import Navbar from "../Navbar/Navbar";
import QR from "../../assets/logos/QR.png";
import { ReactComponent as PDFicon } from '../../assets/icons/pdf 34x34.svg';
import { useNavigate } from 'react-router-dom';
import { useParams} from "react-router";

import { getAllQADPlansContext } from "../../contexts/QAD/GetAllQADPlansContext"

const Production_Line_PDF = () => {

  const [pdf, setPdf] = useState();

  const { allQADPlans, setSku } = useContext( getAllQADPlansContext )  
  console.log("PLANO OBTENIDO", allQADPlans)
  
  useEffect(() => {
    // Decode base64 to binary
    const binaryData = atob(allQADPlans);
    const arrayBuffer = new ArrayBuffer(binaryData.length);
    const uint8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < binaryData.length; i++) {
      uint8Array[i] = binaryData.charCodeAt(i);
    }
    // Create Blob from binary data
    const blob = new Blob([uint8Array], { type: 'application/pdf' });
    const dataUrl = URL.createObjectURL(blob);
    // Open the PDF in a new tab
    setPdf(dataUrl);
  }, [allQADPlans]);


  const { idPlan } = useParams();
  const navigate = useNavigate();

 const handleGoBack = () => {
  navigate(`/production-batchs-list/${idPlan}`);
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

            <div className="col s8 m8 l8 no-margin">
              <p className="font-title-plan-list">Planos PDF</p>
              <p className="font-subtitle-plan-list">SUBTITULO</p>
            </div>
        

            <div className="col s5 m5 l2 no-margin">
              <p className="font-form-plan-list left ">RC:16-062</p>
              <p className="font-plan-plan-list left ">PLAN Nº: D0103-2023</p>
              <p className="font-date-plan-list left ">LOTE Nº: 23-06-2023 &emsp; &emsp;</p>
            </div>

            <div className="col s1 push-s6 m1 l1 push-m6">
              <img className="qr right " src={QR} alt=""></img>
              <i className=" right material-symbols-outlined print">print</i>
            </div>

          </div>
        </div>
      </div>

       {/* ---------------------------------------Formulario------------------- */}

       <div className="container">
        <div className="row">
        </div>


    <div className="row display-box-plan z-depth-1">
            <div className="col s7 m9 l2 valign-wrapper">
                <p className="plan">PLANO Nº</p> 
                <p className="number-plan">D0106-2023</p>
            </div>
            <div className="col s12 m9 l3 valign-wrapper">
                <p className="modification">CODIGO DE COMPONENTE:</p>
                <p className="num-modification">234 4635180</p>
            </div>
          
            <div className="col s12 m9 l3 valign-wrapper">
                <p className="last-modification">DESCRIPCION:</p>
                <p className="last-modification-date">CARCASA INF.</p>
            </div>
            {/* <div className="col s12 m12 l3">
                <p className="publication">FECHA DE PUBLICACION</p>
                <p className="publication-date">14-05-2023</p>
            </div> */}
            {/* <div className="col s12 m12 l1  ">
               <p className="state-plan">PRODUCCION</p>
            </div> */}
             <div className="col s5 push-s1 m3 l2 valign-wrapper right">
                <p className="plan valign-wrapper">VER PLANO&emsp;</p> 
              <a href={pdf} target="_blank">
                <PDFicon className="valign-wrapper"/>
              </a>
            </div>
    </div>

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

     
        <div className="row">
          <div className="col s12 m12 l12 no-margin">
              <button onClick={handleGoBack} className="btn-small btn-block waves-effect waves-light z-depth-2 button-regresar-plan-list " type="button">
                regresar
              </button>
            </div>
        </div>
      
       </div>
      </>
    );
  };
  export default Production_Line_PDF;