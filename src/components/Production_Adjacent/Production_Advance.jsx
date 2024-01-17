import Navbar from "../Navbar/Navbar";
import QR from "../../assets/logos/QR.png";
// import { ReactComponent as PDFicon } from '../../assets/icons/pdf 45x45.svg';

const Avance_Productivo = () => {


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

            <div className="col s12 m12 l7 no-margin">
              <div className="col s12 m12 l9">

              <p className="font-title-create-plan">Reporte de Máquinas Críticas</p>
              <p className="font-subtitle-create-plan">Producción de Inventario</p>
              </div>
            </div>

            <div className="col s11 m11 l4 ">
              <div className="col s12 m5 l6 no-margin pull-l2">
              {/* <p className="font-form-create-plan hide-on-small-only" >&emsp;</p> 
              <p className="font-tunning-black">CODIGO DE PAIS: 054 (ARG)</p>
              <p className="font-tunning-black">FECHA DE ENSAYO: 27-07-2023</p>
              <p className="font-tunning-black">SKU: 1234-4321</p>
              <p className="font-tunning-black">DESCRIPCION: ARM-J26-KLM</p>
              <p className="font-tunning-black">USUARIO: NOMBRE APELLIDO</p> */}
              
              </div>
                <div className="col s12 m7 l6 no-margin ">
                <p className="font-form-create-plan">RC:16-062</p>  
                <p className="font-tunning-black">FECHA:04-09-2023</p>
                <p className="font-tunning-black">Nº DE PLAN:123456</p>
                <p className="font-tunning-black">&nbsp;</p>
                <p className="font-tunning-black">&nbsp;</p>
                </div>

            </div>
        
            <div className="col s1 m1 l1">
              <img className="qr right " src={QR} alt=""></img>
              {/* <i className=" right material-symbols-outlined print hover-hand">note_add</i> */}
            </div>

          </div>
          </div>
        </div>
      

 {/* ------------------------Formulario------------------- */}


  <div className="container">
 
        <div className="row hide-on-med-and-down">
          <div className="col l12 no-margin">
            <div className="display-box-production-advance z-depth-1">

                <div className="col l3">
                    <div className="col l4 titles-production-advance">
                        <div>LOTE:</div>
                        <div>SKU:</div>
                        <div>DESCRIPCION:</div>
                        <div>CANTIDAD:</div>
                    </div>
                    <div className="col l7 sub-titles-production-advance">
                        <div>1234</div>
                        <div>12345678910</div>
                        <div>CFRFG IOJ 12L BA A BLME</div>
                        <div>200</div>
                    </div>
                </div>

                <div className="col l2 center-align no-margin right-line-production-advance left-line-production-advance">
                    <div className="col l12 titles-production-advance bottom-line-production-advance black-text">IMPRESORA DOCAN</div>
                    <div className="col l6 titles-production-advance bottom-line-production-advance right-line-production-advance">Frente</div>
                    <div className="col l6 titles-production-advance bottom-line-production-advance">Tapa I</div>
                    <div className="col l6 sub-titles-production-advance-num right-line-production-advance ">300</div>
                    <div className="col l6 sub-titles-production-advance-num">500</div>
                </div>

                <div className="col l4 center-align no-margin right-line-production-advance"> 
                    <div className="col l12 titles-production-advance bottom-line-production-advance black-text">PUNZONADORA</div>
                    <div className="col l2 titles-production-advance bottom-line-production-advance right-line-production-advance">Frente</div>
                    <div className="col l2 titles-production-advance bottom-line-production-advance right-line-production-advance">Frente</div>
                    <div className="col l4 titles-production-advance bottom-line-production-advance right-line-production-advance">Respaldo</div>
                    <div className="col l2 titles-production-advance bottom-line-production-advance right-line-production-advance">Tapa I</div>
                    <div className="col l2 titles-production-advance bottom-line-production-advance">Tapa S</div>
                    <div className="col l2 sub-titles-production-advance-num right-line-production-advance">300</div>
                    <div className="col l2 sub-titles-production-advance-num right-line-production-advance">500</div>
                    <div className="col l4 sub-titles-production-advance-num right-line-production-advance">500</div>
                    <div className="col l2 sub-titles-production-advance-num right-line-production-advance">500</div>
                    <div className="col l2 sub-titles-production-advance-num">500</div>
                </div>

                <div className="col l3 center-align no-margin">
                    <div className="col l12 titles-production-advance bottom-line-production-advance black-text">PLEGADORA</div>
                    <div className="col l3 titles-production-advance bottom-line-production-advance right-line-production-advance">Frente</div>
                    <div className="col l3 titles-production-advance bottom-line-production-advance right-line-production-advance">Respaldo</div>
                    <div className="col l3 titles-production-advance bottom-line-production-advance right-line-production-advance">Tapa I</div>
                    <div className="col l3 titles-production-advance bottom-line-production-advance">Tapa S</div>
                    <div className="col l3 sub-titles-production-advance-num right-line-production-advance">300</div>
                    <div className="col l3 sub-titles-production-advance-num right-line-production-advance">500</div>
                    <div className="col l3 sub-titles-production-advance-num right-line-production-advance">500</div>
                    <div className="col l3 sub-titles-production-advance-num">500</div>
                </div>
           </div>

             
            </div>
          </div>


          <div className="row">
            <div className="col s12 m12 l12 no-margin"><a href="/dashboard">
              <button className="btn-small btn-block waves-effect waves-light button-regresar-create-plan z-depth-2" type="button">
                REGRESAR
              </button></a>
            </div>
        </div>



        </div>
   





    </>
  );
};
export default  Avance_Productivo;
