import Navbar from "../Navbar/Navbar";
import QR from "../../assets/logos/QR.png";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { getAllFinishedPlansContext } from "../../contexts/GetAllFinishedPlansContext";

const Production_Plans_List = () => {

const {finishedPlans} = useContext(getAllFinishedPlansContext);

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
              <p className="font-title-plan-list">Historial de Planes de Producción</p>
              <p className="font-subtitle-plan-list">Todos los Planes</p>
            </div>
        

            <div className="col s11 m5 l3 push-l1 no-margin">
              <p className="font-form-plan-list left ">RC:16-062</p>
              <p className="font-date-plan-list left ">FECHA DE REGISTRO:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
              <p className="font-plan-plan-list left ">PLAN Nº:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            </div>

            <div className="col s1 m1 l1 push-m6">
              <img className="qr right " src={QR} alt=""></img>
              <i className=" right material-symbols-outlined print">print</i>
            </div>

          </div>
        </div>
      </div>

       {/* ---------------------------------------Formulario------------------- */}

       <ul> 
       {!finishedPlans?  <>
             <div className="progress white">
             <div className="indeterminate red"></div>
           </div> 
        <p className="font-subtitle-plan-list center">FINISHED PLANS NOT FOUND</p>
       </>
           
           :finishedPlans?.map((plan)=>(
       <li key={plan.id}>

       <div className="container">
        <div className="row"></div>
      
    <div className="row display-box-plan z-depth-1">
            <div className="col s12 m12 l12">
                <p className="plan">PLAN Nº:</p> 
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
           
              <Link to={`/production-batchs-list/${plan.id}`} key={plan.id}>
                  <i className="material-symbols-outlined eye right">visibility</i>
              </Link>
            </div>

    </div>
    </div>
    
    </li>))}
</ul>
<div className="container">

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

       
        <div className="row">

          <div className="col s12 m12 l12 no-margin "><a href="/dashboard">
              <button className="btn-small btn-block waves-effect waves-light z-depth-2 button-regresar-plan-list " type="button">
                regresar
              </button></a>
            </div>

  
            </div>
       </div>


      </>
    );
  };
  export default Production_Plans_List;