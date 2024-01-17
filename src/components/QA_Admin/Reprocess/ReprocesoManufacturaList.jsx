import React, { useState }  from "react";

import Navbar from "../../Navbar/Navbar";
import QR from "../../../assets/logos/QR.png";
import Popup from "reactjs-popup";



const ReprocesoManufacturaList = () => {

  // const editMode = () =>{
  //   setEdit(o => !o)
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
              <p className="font-title-batch-list">Reprocesos Pendientes</p>
              <p className="font-subtitle-batch-list">Plan Digital</p>
            </div>
        

            <div className="col s11 m5 l3 no-margin">
              <p className="font-form-batch-list left ">RC:16-062</p>
              <p className="font-plan-batch-list left ">PLAN Nº: D0103-2023</p>
              {/* <p className="font-date-batch-list left ">FECHA DE REGISTRO: 23-06-2023</p> */}
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
        
        <div className="row hide-on-med-and-down">
          <div className="col s12 m12 l12 no-margin">
            <div className="display-box-batchs-rejected z-depth-1">


              <div className="col s1 m1 l1 center box-left-rejected ">
                <p className="batch-number">1234</p> 
                <p className="batch-mode">TO STOCK</p>
              </div>
              
              <div className="col s1 m1 l10 ">
                 <div className="row row-fix bottom-line-rejected">
                  <div className="center-align titles valign-wrapper ">
                  <div className="col l1 right-line-title-rejected">SKU</div>
                  <div className="col l2 right-line-title-rejected">Descripción</div>
                  <div className="col l1 right-line-title-rejected">Cantidad</div>
                  <div className="col l2 right-line-title-rejected">Serie Inicial</div>
                  <div className="col l2 right-line-title-rejected">Serie Final</div>
                  <div className="col l3 right-line-title-rejected no-margin ">
                    <div className="bottom-line-rejected titles-alternative ">Uso Alternativo </div>
                    <div className="padding-1px">
                        <div className="col l6 sub-titles right-line-sub-title-rejected">Serie Anterior</div>
                    </div>
                    <div className="padding-1px">
                        <div className="col l6 sub-titles">Serie Actual</div>
                    </div> 
                    </div>
                  <div className="col l1">Estado</div>
                 </div>
                </div>

                <div className="row row-fix">
                <div className="center-align sub-titles valign-wrapper">
                  <div className="col l1 right-line-sub-title-rejected bottom-line-sub-title">123456</div>
                  <div className="col l2 right-line-sub-title-rejected bottom-line-sub-title">CFRHMIOB13LBAABLME</div>
                  <div className="col l1 right-line-sub-title-rejected bottom-line-sub-title">200</div>
                  <div className="col l2 right-line-sub-title-rejected bottom-line-sub-title">1000</div>
                  <div className="col l2 right-line-sub-title-rejected bottom-line-sub-title ">1200</div>
                  <div className="col l3 no-margin"> 
                    {/* <div className="row row-fix"> */}
                      <div className="col l6 right-line-sub-title bottom-line-sub-title-rejected ">123456</div>
                      <div className="col l6 right-line-sub-title bottom-line-sub-title-rejected ">654321</div>
                    {/* </div> */}
                  </div>
                  <div className="col l1 bottom-line-sub-title-rejected">Producción</div>
                </div>
                </div>
                <div className="row row-fix ">
                   <div className="col l12 bottom-line-observaciones-rejected observaciones-batch-list">
                    <p className="">Observaciones:
                    <p className="observaciones-batch-list-display">
                   Lorem ipsum dolor sit amet consectetur adipiscing elit dis tempus primis bibendum, maecenas eleifend eu senectus sagittis ligula feugiat risus auctor arcu. Integer neque porttitor non eros congue diam enim odio erat rhoncus, nunc cubilia tempus vulputate magna nec proin eu penatibus, hendrerit tellus accumsan nostra est eget quam class varius.
                   </p>
                    </p>
                 
                   </div>
                   <div className="col l12 ">
                   <p className="vigencia">Vigencia:
                   <p className="col l12 vigencia-batch-text no-margin">
                   Lorem ipsum dolor sit amet consectetur adipiscing elit dis tempus primis bibendum, maecenas eleifend eu senectus sagittis ligula feugiat risus auctor arcu.
                  </p>
                   </p>
                   </div>
                </div>
              </div>
              {/* OPTION ICONS ---------------------------------------------------------------------------------------*/}
  


              <div className="col s1 m1 l1 box-right-rejected">
                  <a href="/production-line-test-bench">
                  <i className=" right material-symbols-outlined edit-batch center hover-hand">visibility</i>
                  </a>
              </div>

              
         
            </div>
          </div>
        </div>

{/*------------------------------------ MEDIUM_SMALL_VIEW --------------------------------------------------------*/}

        <div className="row hide-on-large-only">
            <div className="display-box-batchs-ms-rejected z-depth-1">

              <div className="col s5 m3 center box-left-ms-rejected ">
                <p className="batch-number-ms">1234</p> 
                <p className="batch-mode-ms">TO STOCK</p>
              </div>
              


 
              <div className="col s7 m9  top-box-ms-rejected valign-wrapper ">
                <a href="/production-register">
                  <i className=" right material-symbols-outlined edit-batch center hover-hand">visibility</i>
                </a>  
                </div>



              <div className="col s5 m3 no-margin">
                  <div className="col s12 m12 titles-ms right-line-title-ms-rejected bottom-line-ms-rejected">SKU</div>
                  <div className="col s12 m12 titles-ms right-line-title-ms-rejected bottom-line-ms-rejected">Descripción</div>
                  <div className="col s12 m12 titles-ms right-line-title-ms-rejected bottom-line-ms-rejected">Cantidad</div>
                  <div className="col s12 m12 titles-ms right-line-title-ms-rejected bottom-line-ms-rejected">Serie Inicial</div>
                  <div className="col s12 m12 titles-ms right-line-title-ms-rejected bottom-line-ms-rejected">Serie Final</div>
                  <div className="col s12 m12 titles-ms-hm right-line-title-ms-rejected bottom-line-ms-rejected ">Uso Alternativo</div>
                  <div className="col s12 m12 titles-ms right-line-title-ms-rejected bottom-line-ms-rejected">Estado</div>
              </div>

              <div className="col s7 m9 no-margin">
                      <div className="col s12 m12 sub-titles-ms bottom-line-sub-title-ms-rejected">123456</div>
                      <div className="col s12 m12 sub-titles-ms bottom-line-sub-title-ms-rejected">CFRHMIOB13LBAABLME</div>
                      <div className="col s12 m12 sub-titles-ms bottom-line-sub-title-ms-rejected">200</div>
                      <div className="col s12 m12 sub-titles-ms bottom-line-sub-title-ms-rejected">12345678910</div>
                      <div className="col s12 m12 sub-titles-ms bottom-line-sub-title-ms-rejected">12345678910</div>
                      <div className="col s12 m12 sub-titles-ms bottom-line-sub-title-ms-rejected">
                        <div className=" col s6 m3 titles-ms right-line-title-ms-rejected no-margin">Serie Anterior </div>
                        <div className=" col s6 m9">123456</div>
                      </div>
                      <div className="col s12 m12 sub-titles-ms bottom-line-sub-title-ms-rejected">
                        <div className=" col s6 m3 titles-ms right-line-title-ms-rejected no-margin">Serie Actual </div>
                        <div className=" col s6 m9">123456</div> 
                      </div>
                      <div className="col s12 m12 sub-titles-ms bottom-line-sub-title-ms-rejected">Producción</div>
              </div>

              <div className="row row-fix ">
                   <div className="col s12 m12 observaciones-batch-list">
                    <p className="">Observaciones:
                    <p className="observaciones-batch-list-display">
                   Lorem ipsum dolor sit amet consectetur adipiscing elit dis tempus primis bibendum, maecenas eleifend eu senectus sagittis ligula feugiat risus auctor arcu. Integer neque porttitor non eros congue diam enim odio erat rhoncus.
                    </p>
                    </p>
                 
                   </div>
                   <div className="col s12 m12 ">
                    <p className="vigencia">Vigencia:
                    <p className="col s12 m12 vigencia-batch-text no-margin">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit dis tempus primis bibendum, maecenas eleifend eu senectus sagittis ligula feugiat risus auctor arcu.
                    </p>
                    </p>
                   </div>
                </div>
            </div>
          </div>


        {/* paginado */}

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


         {/* botones */}          

        <div className="row">

           <div className="col s12 m12 l12"><a href="/qa-labs-batch-test-report">
           <button className="btn-small btn-block waves-effect waves-light z-depth-2 button-regresar-batch-list " type="submit">
             volver a planes
           </button></a>
         </div>
         

       
          
          </div>
          
      {/* container */}
      </div>

      </>
    );
  };
  export default ReprocesoManufacturaList;