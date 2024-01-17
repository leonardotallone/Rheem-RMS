
import Navbar from "../Navbar/Navbar";
import QR from "../../assets/logos/QR.png";


const Planificacion_MVT = () => {

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
              <p className="font-title-plan-list">Planificación de MVT</p>
              <p className="font-subtitle-plan-list">Planificador de la Producción</p>
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
       <div className="row"></div>

       <div className="row display-box-plan z-depth-1">
            <div className="col s12 m12 l12">
              <div className="col s6 m6 l2">
                  <p className="modification">SOLICITUD Nº</p>
              </div>
              <div className="col s6 m12 l2">
                 <p className="modification">INCLUIDA EN PLANIFICACION</p>
              </div>
              <div className="col s12 m12 l2">
                 <p className="modification">APROBACION QA</p>
              </div>
              <div className="col s12 m12 l2">
                 <p className="modification">CARGAR INFORME MVT</p>
              </div>
              {/* <div className="col l2">
                 <p className="modification">ESTADO</p>
              </div> */}
            </div>

            <div className="col s12 m12 l12">
              <div className="col l2">
              <p className="num-modification">1234567890</p>
              </div>
              <div className="col l2">
                    <label>
                        <input type="checkbox" />
                        <span>&nbsp;</span>
                    </label> 
              </div>
              <div className="col l2">
                    <label>
                        <input type="checkbox" />
                        <span>&nbsp;</span>
                    </label> 
              </div>
              <div className="col l2">
                <a href="/production-batchs-list">  
                    <i className="material-symbols-outlined eye">note_add</i>
                </a>
              
              </div>
              <div className="col l2">
              <p className="num-modification">&nbsp;</p>
              </div>
              <div className="col l2">
              <a href="/production-batchs-list">  
                <i className="material-symbols-outlined eye right">visibility</i>
              </a>
              </div>
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
            <div className="col s12 m12 l4 no-margin left"><a href="/dashboard">
                <button className="btn-small btn-block waves-effect waves-light z-depth-2 button-regresar-plan-list " type="button">
                    REGRESAR
                </button></a>
                </div>

                <div className="col s12 m12 l4 no-margin right">
                <button className="btn-small btn-block waves-effect waves-light z-depth-2 button-ingresar-create-plan " type="submit">
                    INCLUIR MVT
                </button>
                </div>
                
            </div>
       </div>
      </>
    );
  };
  export default Planificacion_MVT;