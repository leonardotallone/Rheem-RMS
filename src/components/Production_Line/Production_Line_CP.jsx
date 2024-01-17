import Navbar from "../Navbar/Navbar";
import QR from "../../assets/logos/QR.png";
import { ReactComponent as CP } from '../../assets/icons/cp.svg'
import { useNavigate } from 'react-router-dom';
import { useParams} from "react-router";

const Production_Line_CP = () => {


  const {idPlan} = useParams();
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

            <div className="col s7 m8 l8 no-margin">
              <p className="font-title-plan-list">Listado CP</p>
              <p className="font-subtitle-plan-list">SUBTITULO</p>
            </div>
        

            <div className="col s11 m5 l3 push-l1 no-margin">
              <p className="font-form-plan-list left ">RC:16-062</p>
              <p className="font-date-plan-list left ">FECHA DE REGISTRO: 23-06-2023</p>
              <p className="font-plan-plan-list left ">PLAN Nº: D0103-2023</p>
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
        <div className="row"></div>
        {/* <div className="row">
          <div className="col s6 m4 l3 no-margin">
            <p className="display-box-title">Ordenar CPs</p>
            <div className="display-box valign-wrapper">   
            <select className="browser-default collapsible-header">
              <option value="" disabled selected>
               Ordenar por </option>           
              <option value="1">Opcion 1 </option>
              <option value="2">Opcion 2</option>
            </select>
            </div>
          </div>
        </div> */}

   

    <div className="row display-box-plan z-depth-1">
            <div className="col s6 m8 l9 valign-wrapper">
                <p className="plan">CP Nº</p> 
                <p className="number-plan">D0106-2023</p>
            </div>
            {/* <div className="col s12 m12 l3 ">
                <p className="modification">CANTIDAD DE MODIFICACIONES:</p>
                <p className="num-modification">2</p>
            </div> */}
          
            {/* <div className="col s12 m12 l3">
                <p className="last-modification">ULTIMA MODIFICACION</p>
                <p className="last-modification-date">12-12-2018</p>
            </div> */}
            {/* <div className="col s12 m12 l3">
                <p className="publication">FECHA DE PUBLICACION</p>
                <p className="publication-date">14-05-2023</p>
            </div> */}
            {/* <div className="col s12 m12 l1  ">
               <p className="state-plan">PRODUCCION</p>
            </div> */}
             <div className="col s6 m4 l3 valign-wrapper push-l1">
                <p className="plan valign-wrapper">VER COMPONENTES &nbsp;&nbsp;&nbsp;</p> 
             <a href="/production-components-details">
              <CP className="valign-wrapper"/>
                </a>
            </div>
    </div>
    <div className="row display-box-plan z-depth-1">
            <div className="col s6 m8 l9 valign-wrapper">
                <p className="plan">CP Nº</p> 
                <p className="number-plan">D0106-2023</p>
            </div>
            {/* <div className="col s12 m12 l3 ">
                <p className="modification">CANTIDAD DE MODIFICACIONES:</p>
                <p className="num-modification">2</p>
            </div> */}
          
            {/* <div className="col s12 m12 l3">
                <p className="last-modification">ULTIMA MODIFICACION</p>
                <p className="last-modification-date">12-12-2018</p>
            </div> */}
            {/* <div className="col s12 m12 l3">
                <p className="publication">FECHA DE PUBLICACION</p>
                <p className="publication-date">14-05-2023</p>
            </div> */}
            {/* <div className="col s12 m12 l1  ">
               <p className="state-plan">PRODUCCION</p>
            </div> */}
             <div className="col s6 m4 l3 valign-wrapper push-l1">
                <p className="plan valign-wrapper">VER COMPONENTES &nbsp;&nbsp;&nbsp;</p> 
             <a href="/production-components-details">
              <CP className="valign-wrapper"/>
                </a>
            </div>
    </div>

    <div className="row display-box-plan z-depth-1">
            <div className="col s6 m8 l9 valign-wrapper">
                <p className="plan">CP Nº</p> 
                <p className="number-plan">D0106-2023</p>
            </div>
            {/* <div className="col s12 m12 l3 ">
                <p className="modification">CANTIDAD DE MODIFICACIONES:</p>
                <p className="num-modification">2</p>
            </div> */}
          
            {/* <div className="col s12 m12 l3">
                <p className="last-modification">ULTIMA MODIFICACION</p>
                <p className="last-modification-date">12-12-2018</p>
            </div> */}
            {/* <div className="col s12 m12 l3">
                <p className="publication">FECHA DE PUBLICACION</p>
                <p className="publication-date">14-05-2023</p>
            </div> */}
            {/* <div className="col s12 m12 l1  ">
               <p className="state-plan">PRODUCCION</p>
            </div> */}
             <div className="col s6 m4 l3 valign-wrapper push-l1">
                <p className="plan valign-wrapper">VER COMPONENTES &nbsp;&nbsp;&nbsp;</p> 
             <a href="/production-components-details">
              <CP className="valign-wrapper"/>
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
          <div className="col s12 m12 l12 no-margin ">
              <button onClick={handleGoBack} className="btn-small btn-block waves-effect waves-light z-depth-2 button-regresar-plan-list" type="button">
                regresar
              </button>
            </div>
        </div>





      {/* container */}
       </div>


      
       
      </>
    );
  };
  export default Production_Line_CP;