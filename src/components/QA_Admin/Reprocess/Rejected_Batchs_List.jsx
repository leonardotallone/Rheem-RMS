import React, { useContext}  from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom"
import Navbar from "../../Navbar/Navbar";
import QR from "../../../assets/logos/QR.png";
import { ReactComponent as PDFicon } from '../../../assets/icons/pdf 34x34.svg';
import { ReactComponent as CP } from '../../../assets/icons/cp.svg';
import { ReactComponent as Testing } from '../../../assets/icons/qrtesting.svg';
import { ReactComponent as TestingZ3 } from '../../../assets/icons/gas 1.svg';
import { ReactComponent as Ensamblador } from '../../../assets/icons/ensamblador.svg';
import { ReactComponent as Ensamblador2 } from '../../../assets/icons/ensamblador 2.svg';
import { ReactComponent as Embalaje } from '../../../assets/icons/Box_1.svg';
import { ReactComponent as BoxPoint } from '../../../assets/icons/Box_2.svg';
import { ReactComponent as Pallet } from '../../../assets/icons/pallet.svg';
import { ReactComponent as Tuning } from '../../../assets/icons/tuning.svg';


import { getAllRejectedBatchsContext } from "../../../contexts/GetAllRejectedBatchsContext"

const Rejected_Batchs_List = () => {

  const user = JSON.parse(localStorage.getItem("user"))

  const { allRejectedBatchs } = useContext(getAllRejectedBatchsContext);
  console.log("Todos los lotes rechazados: ", allRejectedBatchs)
  

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
              <p className="font-title-batch-list">Solicitudes de Reprocesos</p>
              <p className="font-subtitle-batch-list">Lotes Rechazados</p> 
            </div>

            <div className="col s11 m5 l3 no-margin">
              <p className="font-form-batch-list left ">RC:16-062</p>
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
       {!allRejectedBatchs ?  <>
             <div className="progress white">
             <div className="indeterminate red"></div>
           </div> 
        <p className="font-subtitle-plan-list center">NO REJECTED BATCHS FOUND</p>
       </>
           
           :allRejectedBatchs?.map((batch)=>(
       <li key={batch.id_batch}>

      <div className="container">
        
        <div className="row hide-on-med-and-down">
          <div className="col s12 m12 l12 no-margin">
            <div className="display-box-batchs-rejected z-depth-1">
{/* columan Izquierda */}
              <div className="col s1 m1 l1 center box-left-rejected ">
                <p className="batch-number">{batch.batch_number}</p> 
                <p className="batch-mode">{batch.mode.toUpperCase()}</p>
              </div>
{/* Columna Central */}
              <div className="col s1 m1 l10">
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
                        <div className="col l6 sub-titles right-line-sub-title-rejected">SKU Anterior</div>
                    </div>
                    <div className="padding-1px">
                        <div className="col l6 sub-titles">SKU Alternativo</div>
                    </div> 
                    </div>
                  <div className="col l1">Estado</div>
                 </div>
                </div>

                <div className="row row-fix">
                <div className="center-align sub-titles valign-wrapper">
                  <div className="col l1 right-line-sub-title bottom-line-sub-title-rejected">{batch.sku}</div>
                  <div className="col l2 right-line-sub-title bottom-line-sub-title-rejected">{batch.description}</div>
                  <div className="col l1 right-line-sub-title bottom-line-sub-title-rejected">{batch.quantity}</div>
                  <div className="col l2 right-line-sub-title bottom-line-sub-title-rejected">{batch.first_serie}</div>
                  <div className="col l2 right-line-sub-title bottom-line-sub-title-rejected ">{batch.last_serie}</div>
                  <div className="col l3 no-margin"> 
                    {/* <div className="row row-fix"> */}
                      <div className="col l6 right-line-sub-title bottom-line-sub-title-rejected ">{batch.old_sku!==null?batch.old_sku:"-"}</div>
                      <div className="col l6 right-line-sub-title bottom-line-sub-title-rejected ">{batch.actually_sku!==null?batch.actually_sku:"-"}</div>
                    {/* </div> */}
                  </div>
               
                  <div className="col l1 bottom-line-sub-title-rejected">{batch.status.toUpperCase()}</div>
                </div>
                </div>
                <div className="row row-fix ">
                   <div className="col l8 bottom-line-observaciones-rejected observaciones-batch-list">
                    <p className="">Observaciones del Lote:
                    <p className="observaciones-batch-list-display">
                    {batch.observation !== null? batch.observation:'Sin Observaciones del Lote'}
                   </p>
                    </p>
                 
                   </div>
                   <div className="col l4 no-margin  ">
                   <p className="vigencia bottom-line-rejected">&nbsp;&nbsp;&nbsp;Vigencia:
                   <p className="col l12 vigencia-batch-text">
                   {batch.validity !== null? batch.validity:'Sin Observaciones de Vigencia'}
                  </p>
                   </p>
                   </div>
                </div>

                {/* iconos inferiores */}
               <div className="col l12">
               
                  <div className="col l1 ">
                  <div className="container no-margin svg-disabled">
                  <TestingZ3 className="margin-left-icon svg-relative" />
                  </div>
                  <p className="text-icons edit-disabled">TESTING DE FUGA</p>
              </div>

              <div className="col l1 "> 
                  <div className="container no-margin svg-disabled">
                  <Ensamblador className="margin-left-icon svg-relative"/>
                  </div>
                  <p className="text-icons edit-disabled">ENSAMBLAJE CALEFON</p>
              </div>

              <div className="col l1 ">
                   <Testing className=" margin-left-icon" style={{ fill: "#D3D3D3" }}/>
                   <p className="text-icons edit-disabled">TESTING FUNCIONAL</p>
              </div>

              <div className="col l1 ">
                  <div className="container no-margin svg-disabled">
                  <Ensamblador2 className="margin-left-icon svg-relative" />
                  <p className="text-icons edit-disabled">ENSAMBLAJE FRENTE</p>
                  </div>
              </div>
              <div className="col l1 "> 
                  <div className="container no-margin svg-disabled">
                  <Embalaje className="margin-left-icon svg-relative"/>
                  </div>
                  <p className="text-icons edit-disabled">EMBALAJE #1</p>
              </div>

              <div className="col l1">
                    <div className="container no-margin svg-disabled">
                  <BoxPoint className="margin-left-icon svg-relative" />
                    </div>
                  <p className="text-icons edit-disabled">EMBALAJE #2</p>
                </div>

              <div className="col l1"> 
                    <div className="container no-margin svg-disabled">
                          <Pallet className="margin-left-icon svg-relative" />
                    </div>
                    <p className="text-icons edit-disabled">PALETIZADO</p>
              </div>


              <div className="col l1">  
                  <Tuning className="margin-left-icon" style={{ fill: "#D3D3D3" }}/>
                  <p className="text-icons edit-disabled">PUESTA A PUNTO</p>
              </div>

              <div className="col l1"> 
                  <i className="material-symbols-outlined edit-batch edit-disabled">factory</i>
                  <p className="text-icons edit-disabled">REGISTRO PRODUCCION</p>
              </div>

              <div className="col l1"> 
                  <div className="container no-margin svg-disabled">
                        <CP className="margin-left-icon svg-relative" />
                        <p className="text-icons edit-disabled">LISTA MAESTRA</p>
                  </div>
              </div>

              <div className="col l1"> 
                 <i className="material-symbols-outlined clock-batch edit-disabled edit-batch margin-clock">timer</i>
                 <p className="mins-font edit-disabled">
                    00:00
                 </p>
                  &nbsp;
                 <p className="mins-font edit-disabled ">mins.</p>
              </div>

              <div className="col l1"> 
              <div className="svg-disabled"> 
                <PDFicon className="hover-hand margin-left-icon svg-relative"/>
                <p className="text-icons edit-disabled">VER PLANOS</p>
              </div>
              </div>
              
              </div>
            </div>
{/* columan derecha */}
              <div className="col s1 m1 l1  box-right-rejected">

                <div className="row"></div>
  
              {user.profileRMS === "RESEARCH AND DEVELOPMENT (R&D)" ?<>
              <div className="col s1 m1 l12 ">
                  <a href="/r&d-disposicion-ingenieria">
                  <Link to={`/r&d-disposicion-ingenieria/${batch.batch_number}/${batch.description}/${batch.id_plan.id}/${batch.sku}`}>
                      <i className="material-symbols-outlined edit-batch hover-hand">cycle</i>
                  </Link>
                  </a>
              </div>
              <p className="text-icons">R&D</p>
              </>
            :<>
            <div className="col s1 m1 l12">
               <i className="material-symbols-outlined edit-batch edit-disabled">cycle</i>
               </div>
               <p className="text-icons edit-disabled">R&D</p>
            </>}

            {user.profileRMS === "SUPERVISOR DE PRODUCCIÓN" ?<>
              <div className="col s1 m1 l12 ">
                  <a href="/qa-admin-reproceso-manufactura">
                      <i className="material-symbols-outlined edit-batch hover-hand">cycle</i>
                  </a>
              </div>
              <p className="text-icons">MANUFACTURA</p>
              </>
            :<>
            <div className="col s1 m1 l12">
               <i className="material-symbols-outlined edit-batch edit-disabled">cycle</i>
               </div>
               <p className="text-icons edit-disabled">MANUFACTURA</p>
            </>}

            {user.profileRMS === "QA LABORATORISTA" ?<>
              <div className="col s1 m1 l12 ">
                  <a href="/qa-labs-test-sheet">
                      <i className="material-symbols-outlined edit-batch hover-hand">biotech</i>
                  </a>
              </div>
              <p className="text-icons">REPROCESO LAB</p>
              </>
            :<>
            <div className="col s1 m1 l12">
               <i className="material-symbols-outlined edit-batch edit-disabled">biotech</i>
               </div>
               <p className="text-icons edit-disabled">REPROCESO LAB</p>
            </>}

            {user.profileRMS === "QA ADMINISTRATIVO" ?<>
              <div className="col s1 m1 l12 ">
                  <a href="qa-labs-batch-test-report">
                      <i className="material-symbols-outlined edit-batch hover-hand">lab_profile</i>
                  </a>
              </div>
              <p className="text-icons">QA ADMIN</p>
              </>
            : <>
            <div className="col s1 m1 l12 ">
                <a href="qa-labs-batch-test-report">
                    <i className="material-symbols-outlined edit-batch hover-hand">lab_profile</i>
                </a>
            </div>
            <p className="text-icons">INFORME</p>
            </>
            }
              </div>
              </div>
          </div>
        </div>

{/*------------------------------------ MEDIUM_SMALL_VIEW --------------------------------------------------------*/}

        <div className="row hide-on-large-only">
            <div className="display-box-batchs-ms z-depth-1">

              <div className="col s5 m3 center box-left-ms ">
                <p className="batch-number-ms">1234</p> 
                <p className="batch-mode-ms">TO STOCK</p>
              </div>
              
 
                 <i className=" right material-symbols-outlined edit-batch edit-disabled">edit</i>
                 <i className=" right material-symbols-outlined clock-batch edit-disabled">timer</i>
             
                 <p className="mins-font">23</p>
                  &nbsp;
                 <p className="mins-font ">mins.</p>
                 <i className="right material-symbols-outlined warning-batch ">warning</i>
        
  
              <div className="col s5 m3 no-margin">
                  <div className="col s12 m12 titles-ms right-line-title-ms bottom-line-ms">SKU</div>
                  <div className="col s12 m12 titles-ms right-line-title-ms bottom-line-ms">Descripción</div>
                  <div className="col s12 m12 titles-ms right-line-title-ms bottom-line-ms">Cantidad</div>
                  <div className="col s12 m12 titles-ms right-line-title-ms bottom-line-ms">Serie Inicial</div>
                  <div className="col s12 m12 titles-ms right-line-title-ms bottom-line-ms">Serie Final</div>
                  <div className="col s12 m12 titles-ms-hm right-line-title-ms bottom-line-ms ">Uso Alternativo</div>
                  <div className="col s12 m12 titles-ms right-line-title-ms bottom-line-ms">Estado</div>
              </div>

              <div className="col s7 m9 no-margin">
                      <div className="col s12 m12 sub-titles-ms bottom-line-sub-title-ms">123456</div>
                      <div className="col s12 m12 sub-titles-ms bottom-line-sub-title-ms">CFRHMIOB13LBAABLME</div>
                      <div className="col s12 m12 sub-titles-ms bottom-line-sub-title-ms">200</div>
                      <div className="col s12 m12 sub-titles-ms bottom-line-sub-title-ms">12345678910</div>
                      <div className="col s12 m12 sub-titles-ms bottom-line-sub-title-ms">12345678910</div>
                      <div className="col s12 m12 sub-titles-ms bottom-line-sub-title-ms">
                        <div className=" col s6 m3 titles-ms right-line-title-ms no-margin">Serie Anterior </div>
                        <div className=" col s6 m9">123456</div>
                      </div>
                      <div className="col s12 m12 sub-titles-ms bottom-line-sub-title-ms">
                        <div className=" col s6 m3 titles-ms right-line-title-ms no-margin">Serie Actual </div>
                        <div className=" col s6 m9">123456</div> 
                      </div>
                      <div className="col s12 m12 sub-titles-ms bottom-line-sub-title-ms">Producción</div>
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
          <div className="container">
          <div className="col s12 m12 l12 no-margin ">
          <Link to={`/dashboard`}>
              <button className="btn-small btn-block waves-effect waves-light z-depth-2 button-regresar-plan-list " type="button">
                REGRESAR
              </button>
          </Link>
          </div>
          </div>
            </div>  
            <div className="row"></div>


      </>
    );
  };
  export default Rejected_Batchs_List;