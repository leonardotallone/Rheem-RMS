import Navbar from "../Navbar/Navbar";
import QR from "../../assets/logos/QR.png";
import { ReactComponent as PDFicon } from '../../assets/icons/signature.svg';
import { useContext } from "react";
import { Link } from "react-router-dom";

import { getAllMVTPetitionsContext } from "../../contexts/GetAllMVTPetitionContext";

const Aprobacion_de_MVT = () => {

  const { allMVTPetitions } = useContext(getAllMVTPetitionsContext)

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
              <p className="font-title-plan-list">Listado de MVT</p>
              <p className="font-subtitle-plan-list">&nbsp;</p>
            </div>
            <div className="col s11 m5 l3 no-margin">
              <p className="font-form-plan-list left ">RC:16-062</p>

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
           <p className="form-title">SELECCIONE LA MVT A APROBAR</p>
        </div>

        <ul>
          {!allMVTPetitions?
                    <div className="progress white">
                    <div className="indeterminate red"></div>
                  </div> :allMVTPetitions?.map((mvt)=>(
                    <li key={mvt.id}>

        <div className="row display-box-mvt-list z-depth-1">
                    <div className="col l7 ">
                    <div className="col s6 m6 l12 aprobacion-mvt-titulos">
                        <p>PROYECTO:</p>
                        <p className="aprobacion-mvt-name">{mvt.project} </p>
                    </div>
                    </div>

                    <div className="col l2 left-line-mvt  aprobacion-mvt-titulos">
                        <p>ESTADO:</p>
                        <p style={mvt.rd_status === false || mvt.qa_status === false || mvt.industrial_status === false || mvt.prod_status === false? { color: 'red' } : {}} className="aprobacion-mvt-status-date">{mvt.rd_status === false || mvt.qa_status === false|| mvt.industrial_status === false || mvt.prod_status === false? "PENDIENTE": "APROBADO"}</p>
                
                    </div>
                    <div className="col l2 aprobacion-mvt-titulos  left-line-mvt">
                        <p>FECHA MVT</p>
                        <p className="aprobacion-mvt-status-date">{mvt.date}</p>
                    </div>
                    <div className="col l1 center left-line-mvt push-signature">
                      <Link to={`/r&d-aprobacion-mvt/${mvt.id}`}>
                        <PDFicon className="hover-hand margin-files "/> 
                      </Link>
                        
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
          <div className="col s12 m12 l12 no-margin "><a href="/dashboard">
              <button className="btn-small btn-block waves-effect waves-light z-depth-2 button-regresar-plan-list " type="button">
                REGRESAR
              </button></a>
            </div>
            </div>
       </div>
      </>
    );
  };
  export default Aprobacion_de_MVT;