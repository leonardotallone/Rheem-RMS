import Navbar from "../Navbar/Navbar";
import QR from "../../assets/logos/QR.png";
import { useState } from "react";

const Mechanic_BMP = () => {

  const [pickingState] = useState("incompleta");

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
              <p className="font-title-plan-list">Bodega Materia Prima</p>
              <p className="font-subtitle-plan-list">Planes Mecánicos</p>
            </div>
        

            <div className="col s11 m5 l3 no-margin">
              <p className="font-form-plan-list left ">RC:16-062</p>
              <p className="font-plan-plan-list left ">PLAN Nº: D0103-2023</p>
              <p className="font-date-plan-list left ">FECHA DE REGISTRO: 23-06-2023</p>
            </div>

            <div className="col s1 m1 l1 push-m6">
              <img className="qr right " src={QR} alt=""></img>
              <i className="right material-symbols-outlined print">print</i>
            </div>

          </div>
        </div>
      </div>

       {/* ---------------------------------------Formulario------------------- */}

       <div className="container">
        <div className="row">
          <div className="col s6 m4 l12">
            <p className="plan-text">PLAN Nº:</p>
            <p className="plan-number">&emsp;D0105-2023</p>
          </div>
        </div>

    <div className="row ">
      <div className="col s12 m12 l12 no-margin">
            <div className="col s4 m4 l1 center-align">
                <p className="text-inside-box">LOTE</p> 
            </div> 
            <div className="col s6 m5 l1 center-align">
                <p className="text-inside-box">SKU</p> 
            </div>
            <div className="col s2 m3 l3 center-align">
                <p className="text-inside-box">DESCRIPCION</p> 
            </div>
            <div className="col s2 m3 l1 center-align">
                <p className="text-inside-box">CANTIDAD</p> 
            </div>
            <div className="col s2 m3 l1 center-align ">
                <p className="text-inside-box">PRODUCIDO</p> 
            </div>
            <div className="col s2 m3 l2 center-align">
                <p className="text-inside-box">PICKING</p> 
            </div>
            <div className="col s2 m3 l3 center-align">
               <div className="col l6">
                <p className="text-inside-box">ESTADO</p> 
               </div>
               <div className="col l5">
               <p className="text-inside-box">UBICACION</p> 
               </div>
            </div>
      </div>
    </div>

    <div className="row ">
      <div className="col s12 m12 l12 no-margin">
        <div className="col s4 m4 l1 center-align">
            <div className="display-box-components z-depth-1 ">
                   <p className="text-inside-box">1234</p> 
            </div>
      </div>
      <div className="col s6 m5 l1 center-align no-margin">
        <div className="display-box-components z-depth-1 ">
            <p className="text-inside-box">123456</p> 
        </div>
     </div>
     <div className="col s6 m5 l3 center-align">
        <div className="display-box-components z-depth-1 ">
            <p className="text-inside-box">CFRHM IOB 13L BA A BL ME</p> 
        </div>
     </div>
     <div className="col s6 m5 l1 center-align no-margin">
        <div className="display-box-components z-depth-1 ">
            <p className="text-inside-box">200</p> 
        </div>
     </div>
     <div className="col s6 m5 l1 center-align">
        <div className="display-box-components z-depth-1 ">
            <p className="text-inside-box">127</p> 
        </div>
     </div>
     <a href="/production-line-cp">
     <div className="col s6 m5 l2 center-align no-margin">
        <div className=
        {pickingState==="ingresada"?
        "display-box-bmp-ingresada z-depth-1":pickingState==="enpicking"?
        "display-box-bmp-picking z-depth-1":pickingState==="completa"?
        "display-box-bmp-completa z-depth-1":pickingState==="incompleta"?
        "display-box-bmp-incompleta z-depth-1"
        :"display-box-components zdepth-1"}>
            <p className="text-inside-box">INGRESADA</p> 
        </div>
     </div>
     </a> 
     <div className="col s6 m5 l3 center-align no-margin">
       <div className="col l6">
        <div className="display-box-components z-depth-1">
            <p className="text-inside-box">EN PROCESO</p> 
        </div>
        </div>
        <div className="col l5 no-margin">
        <div className="display-box-components z-depth-1 center-align">
                  <p className="text-inside-box">CALPROD</p> 
            </div>
          
        </div>
        <div className="col l1">
        <div className="center-align">
        <i className="material-symbols-outlined warning-bmp">warning</i>
            </div>
        </div>
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

          <div className="col s12 m12 l12"><a href="/production-line-cp">
              <button className="btn-small btn-block waves-effect waves-light z-depth-2 button-regresar-plan-list " type="submit">
                regresar
              </button></a>
            </div>

            {/* row */} 
            </div>
      {/* container */}
       </div>

      </>
    );
  };
  export default Mechanic_BMP;