import Navbar from "../Navbar/Navbar";
import QR from "../../assets/logos/QR.png";
import { ReactComponent as PDFicon } from '../../assets/icons/pdf 45x45.svg';
import { useState } from "react";


const Batch_Test_Report = () => {

const [proceso] = useState(false)


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
                <p className="font-title-create-plan">Informe de Ensayo de Lote.</p>
              </div>
            </div>

            <div className="col s11 m11 l4 ">
              <div className="col s12 m5 l6 no-margin pull-l2">
              
                <p className="font-tunning-black">&nbsp;</p>
                <p className="font-tunning-black">&nbsp;</p>
                <p className="font-tunning-black">Aprobado</p>
                <div className="reference-state-aprobado"></div>
                <p className="font-tunning-black">A.Observado</p>
                <div className="reference-state-observado"></div>
                <p className="font-tunning-black">Rechazado</p>
                <div className="reference-state-rechazado"></div>
              
              </div>
                <div className="col s12 m7 l6 no-margin ">
                <p className="font-form-create-plan">RC:16-062</p>  
                <p className="font-tunning-black">ELABORO: CARMONA MARIO</p>
                <p className="font-tunning-black">APROBO: LEOPOLDO SANCHEZ</p>
                <p className="font-tunning-black">REVISION Nº: P0103-2023</p>
                <p className="font-tunning-black">FECHA: 07-08-2023</p>
                
                </div>
            </div>
        
            <div className="col s1 m1 l1">
              <img className="qr right " src={QR} alt=""></img>
              <i className=" right material-symbols-outlined print hover-hand">print</i>
            </div>

          </div>
          </div>
        </div>
      

      {/* ---------------------------------------Formulario------------------- */}

{/* //TITULOS// */}

       <div className="container">
 
         <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l4">
                  <p className="title-test-report left">DATOS DE ENSAYO</p>
              </div>
              <div className="col s1 m1 l4">
                  <p className="title-test-report left">PARAMETROS DE REPROCESO</p>
              </div>
              <div className="col s1 m1 l4 no-margin push-l1 ">
                  <p className="title-test-report left">INFORMES</p>
              </div>
            </div>
          </div>

          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s12 m6 l4 no-margin">
                <div className="col l6">
                  <p className="key-text-test-report">MARCA:</p>
                  <p className="key-text-test-report">MODELO:</p>
                  <p className="key-text-test-report">TIPO DE GAS:</p>
                  <p className="key-text-test-report">CODIGO:</p>
                  <p className="key-text-test-report">Nº DE LOTE:</p>
                  <p className="key-text-test-report">CANTIDAD:</p>
                  <p className="key-text-test-report">Nº DE MUESTRAS TOTALES:</p>
                  <p className="key-text-test-report">Nº DE MUESTRAS PARCIALES:</p>
                  <p className="key-text-test-report">Nº DE SERIE INICIAL:</p>
                  <p className="key-text-test-report">Nº DE SERIE PARCIAL:</p>
                  <p className="key-text-test-report">ENSAYO REALIZADO POR:</p>
                </div>
                <div className="col l6">
                  <p className="value-text-test-report">RHEEM</p>
                  <p className="value-text-test-report">MODELO</p>
                  <p className="value-text-test-report">NATURAL</p>
                  <p className="value-text-test-report">CODE</p>
                  <p className="value-text-test-report">CANTIDAD</p>
                  <p className="value-text-test-report">Nº DE LOTE</p>
                  <p className="value-text-test-report">8</p>
                  <p className="value-text-test-report">4</p>
                  <p className="value-text-test-report">1234</p>
                  <p className="value-text-test-report">1234</p>
                  <p className="value-text-test-report">USER</p>
               
                </div>
              </div>

              <div className="col l8">
              <div className="col s4 m4 l6 no-margin">
                <div className="col l6 no-margin">
                  <p className="key-text-test-report">CONDICION DE INICIO:</p>
                  <p className="key-text-test-report">CONDICION PARCIAL:</p>
                  <p className="key-text-test-report">CONDICION LOTE:</p>
                  <p className="key-text-test-report">LOTE LIBERADO:</p>
                </div>

                <div className="col l6 no-margin">
                  <p className="value-text-test-report">APROBADO</p>
                  <p className="value-text-test-report">NO DISPONIBLE</p>
                  <p className="value-text-test-report">NO DISPONIBLE</p>
                  <p className="value-text-test-report">NO</p>
                </div>
              </div>

              <div className="col s4 m4 l6  push-l1 no-margin">
                <div className="col l6 push-l1 no-margin">
                  <div className="col l12 no-margin">
                    <p className="key-text-test-report">Informe Ingeniería</p>
                  </div>
                  <div className="col l12 no-margin">
                    <PDFicon className="left print hover-hand"/>
                  </div>
                </div>
                <div className="col l6 push-l1 no-margin">
                  <div className="col l12 no-margin">
                    <p className="key-text-test-report">Informe AT</p>
                  </div>
                  <div className="col l12 no-margin">
                  <PDFicon className="left print hover-hand"/>
                  </div>
                </div>
              </div>
               <div className="row"></div>
                <div className="col s12 m12 l12 no-margin">
                    <p className="display-box-title left-align">Observaciones Previas</p>
                <div className="observaciones-previas-test-report z-depth-1">
                     <p className="obs-text left-align">Observaciones Previas</p>
                </div>
                </div>

              </div>
              
            </div>
          </div>

{/* PARCIALES */}
<br />

<div className="row"></div>
        <div className="row"> 
        <div className="col l12 center-align no-margin">
          <div className="col l3">
            <div className="col l5 push-l3 etiquetas-muestras z-depth-1  no-testing">
                 <p className="text-serial-test-report">SN 1234567890</p>
                 <p className="text-inside-test-report ">APROBADA</p>
                 <p className="text-outside-test-report">PARCIAL</p>
            </div>
            <div className="col l5 push-l3 right etiquetas-muestras z-depth-1  no-testing">
                 <p className="text-serial-test-report">SN 1234567890</p>
                 <p className="text-inside-test-report">APROBADA</p>
                 <p className="text-outside-test-report">PARCIAL</p>
            </div>
          </div>
          <div className="col l3">
            <div className="col l5 push-l3 center etiquetas-muestras z-depth-1  no-testing"> 
                 <p className="text-serial-test-report">SN 1234567890</p>
                 <p className="text-inside-test-report ">APROBADA</p>
                 <p className="text-outside-test-report">PARCIAL</p>
            </div>
            <div className="col l5 push-l3 right etiquetas-muestras z-depth-1  no-testing">
                 <p className="text-serial-test-report">SN 1234567890</p>
                 <p className="text-inside-test-report">RECHAZADA</p>
                 <p className="text-outside-test-report">PARCIAL</p>
            </div>
          </div>
          <div className="col l3">
            <div className="col l5 push-l3 center etiquetas-muestras z-depth-1  no-testing">
                 <p className="text-serial-test-report">SN 1234567890</p>
                 <p className="text-inside-test-report ">APROBADA</p>
                 <p className="text-outside-test-report">PARCIAL</p>
            </div>
          </div>
          <div className="col l3">
            <div className="col l5 pull-l3 center etiquetas-muestras z-depth-1  no-testing">
                 <p className="text-serial-test-report">SN 1234567890</p>
                 <p className="text-inside-test-report ">APROBADA</p>
                 <p className="text-outside-test-report">PARCIAL</p>
            </div>

            <div className="col l5 pull-l3 right etiquetas-muestras z-depth-1  no-testing">
                 <p className="text-serial-test-report">SN 1234567890</p>
                 <p className="text-inside-test-report ">OBSERVADA</p>
                 <p className="text-outside-test-report">PARCIAL</p>
            </div>

          </div>
        </div>
        </div>

{/* MUESTRAS */}

        <div className="row"></div>
        <div className="row"></div>
        <div className="row"> 
        <div className="col l12 center-align no-margin">
          <div className="col l3">
            <div className="col l5 etiquetas-muestras z-depth-1  aprobada">
                 <p className="text-serial-test-report">SN 1234567890</p>
                 <p className="text-inside-test-report ">APROBADA</p>
                 <p className="text-outside-test-report">INICIO</p>
            </div>
            <div className="col l5 right etiquetas-muestras z-depth-1  aprobada">
                 <p className="text-serial-test-report">SN 1234567890</p>
                 <p className="text-inside-test-report">APROBADA</p>
                 <p className="text-outside-test-report">MUESTRA</p>
            </div>
          </div>
          <div className="col l3">
            <div className="col l5 center etiquetas-muestras z-depth-1  aprobada">
                 <p className="text-serial-test-report">SN 1234567890</p>
                 <p className="text-inside-test-report ">APROBADA</p>
                 <p className="text-outside-test-report">MUESTRA</p>
            </div>
            <div className="col l5 right etiquetas-muestras z-depth-1  rechazada">
                 <p className="text-serial-test-report">SN 1234567890</p>
                 <p className="text-inside-test-report">RECHAZADA</p>
                 <p className="text-outside-test-report">MUESTRA</p>
            </div>
          </div>
          <div className="col l3">
            <div className="col l5 center etiquetas-muestras z-depth-1  aprobada">
                 <p className="text-serial-test-report">SN 1234567890</p>
                 <p className="text-inside-test-report ">APROBADA</p>
                 <p className="text-outside-test-report">MUESTRA</p>
            </div>
            <div className="col l5 right etiquetas-muestras z-depth-1  aprobada">
                 <p className="text-serial-test-report">SN 1234567890</p>
                 <p className="text-inside-test-report">APROBADA</p>
                 <p className="text-outside-test-report">MUESTRA</p>
            </div>
          </div>
          <div className="col l3">
            <div className="col l5 center etiquetas-muestras z-depth-1  aprobada">
                 <p className="text-serial-test-report">SN 1234567890</p>
                 <p className="text-inside-test-report ">APROBADA</p>
                 <p className="text-outside-test-report">MUESTRA</p>
            </div>

            <div className="col l5 right etiquetas-muestras z-depth-1  observada">
                 <p className="text-serial-test-report">SN 1234567890</p>
                 <p className="text-inside-test-report">OBSERVADA</p>
                 <p className="text-outside-test-report">LOTE</p>
            </div>
            
          </div>
        </div>
        </div>
        
{/* CONTRAMUESTRAS */}

<div className="row"></div>
<div className="row"></div>
        <div className="row"> 
        <div className="col l12 center-align no-margin">
          <div className="col l3">
            <div className="col l5 push-l3 etiquetas-muestras z-depth-1  no-testing">
                 <p className="text-serial-test-report">SN 1234567890</p>
                 <p className="text-inside-test-report ">APROBADA</p>
                 <p className="text-outside-test-report">CONTRAMUESTRA</p>
            </div>
            <div className="col l5 push-l3 right etiquetas-muestras z-depth-1  no-testing">
                 <p className="text-serial-test-report">SN 1234567890</p>
                 <p className="text-inside-test-report">APROBADA</p>
                 <p className="text-outside-test-report">CONTRAMUESTRA</p>
            </div>
          </div>
          <div className="col l3">
            <div className="col l5 push-l3 center etiquetas-muestras z-depth-1  no-testing"> 
                 <p className="text-serial-test-report">SN 1234567890</p>
                 <p className="text-inside-test-report ">APROBADA</p>
                 <p className="text-outside-test-report">CONTRAMUESTRA</p>
            </div>
            <div className="col l5 push-l3 right etiquetas-muestras z-depth-1  no-testing">
                 <p className="text-serial-test-report">SN 1234567890</p>
                 <p className="text-inside-test-report">RECHAZADA</p>
                 <p className="text-outside-test-report">CONTRAMUESTRA</p>
            </div>
          </div>
          <div className="col l3">
            <div className="col l5 push-l3 center etiquetas-muestras z-depth-1  no-testing">
                 <p className="text-serial-test-report">SN 1234567890</p>
                 <p className="text-inside-test-report ">APROBADA</p>
                 <p className="text-outside-test-report">CONTRAMUESTRA</p>
            </div>
          </div>
          <div className="col l3">
            <div className="col l5 pull-l3 center etiquetas-muestras z-depth-1  no-testing">
                 <p className="text-serial-test-report">SN 1234567890</p>
                 <p className="text-inside-test-report ">APROBADA</p>
                 <p className="text-outside-test-report">C.MUESTRA</p>
            </div>

            <div className="col l5 pull-l3 right etiquetas-muestras z-depth-1  no-testing">
                 <p className="text-serial-test-report">SN 1234567890</p>
                 <p className="text-inside-test-report ">OBSERVADA</p>
                 <p className="text-outside-test-report">C.MUESTRA</p>
            </div>

          </div>
        </div>
        </div>



        <div className="row"></div>
         

          <div className="row">
            <div className="col s12 m12 l4 "><a href="/qa-admin-rejected-batchs-list">
              <button className="btn-small btn-block waves-effect waves-light button-regresar-create-plan z-depth-2" type="button">
                REGRESAR
              </button></a>
            </div>
          {proceso === true?
          <>
            <div className="col s12 m12 l4 "><a href="/qa-admin-rejected-batchs-list">
              <button className="btn-small btn-block waves-effect waves-light button-modoedicion-batch-list z-depth-2" type="submit">
                RECHAZAR
              </button></a>
            </div>
            <div className="col s12 m12 l4 "><a href="/dashboard">
              <button className="btn-small btn-block waves-effect waves-light button-regresar-create-plan z-depth-2" type="button">
              APROBAR
              </button></a>
            </div>
            </>:
            <div className="col s12 m12 l8 "><a href="/qa-admin-definicionreproceso">
              <button className="btn-small btn-block waves-effect waves-light button-modoedicion-batch-list z-depth-2" type="button">
              INICIAR REPROCESO
              </button></a>
            </div>}

        </div>
      </div>
    </>
  );
};
export default Batch_Test_Report;
