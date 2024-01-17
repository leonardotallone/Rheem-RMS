import React, { useState, useContext, useEffect}  from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import { useParams} from "react-router";
import { Link } from "react-router-dom"
import Navbar from "../Navbar/Navbar";
import QR from "../../assets/logos/QR.png";
import { ReactComponent as PDFicon } from '../../assets/icons/pdf 34x34.svg';
import { ReactComponent as CP } from '../../assets/icons/cp.svg';
import { ReactComponent as Testing } from '../../assets/icons/qrtesting.svg';
import { ReactComponent as TestingZ3 } from '../../assets/icons/gas 1.svg';
import { ReactComponent as Ensamblador } from '../../assets/icons/ensamblador.svg';
import { ReactComponent as Ensamblador2 } from '../../assets/icons/ensamblador 2.svg';
import { ReactComponent as Embalaje } from '../../assets/icons/Box_1.svg';
import { ReactComponent as BoxPoint } from '../../assets/icons/Box_2.svg';
import { ReactComponent as Pallet } from '../../assets/icons/pallet.svg';
import { ReactComponent as Tuning } from '../../assets/icons/tuning.svg';
import { ReactComponent as ArrowUp } from '../../assets/icons/arrowUp.svg';
import { ReactComponent as ArrowDown } from '../../assets/icons/arrowDown.svg';


import Popup from "reactjs-popup";

import Partiality from "./Partiality";


import { getAllBatchInsidePlanContext } from "../../contexts/GetAllBatchInsidePlanContext"
import { getAllPlansContext } from "../../contexts/GetAllPlansContext"
import { flagPartialCountdownContext } from "../../contexts/FlagPartialCountDownContext";
import { updateBatchStateContext } from "../../contexts/UpdateBatchStateContext"



const Production_Batchs_List = () => {

  const [batchs, setBatchs] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4']); 
  const [habilitar, setHabilitar] = useState(false);
  const [edit, setEdit] = useState(false);

 

  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [abort, setAbort] = useState(false);
  const [partial, setPartial] = useState(false);
  const [partiality, setPartiality] = useState(false);
  const [editbatch, setEditbatch] = useState(false);
  const [play, setPlay] = useState(false);
  const [playSuccess, setPlaySuccess] = useState(false);
  const [removeBatch1, setRemoveBatch1] = useState(false);
  const [removeBatch2, setRemoveBatch2] = useState(false);
  
  // const [hours, setHours] = useState("00");
  // const [minutes, setMinutes] = useState("00");
  // const [seconds, setSeconds] = useState("00");
  const [batchTimers, setBatchTimers] = useState([]);
  // const [intervalId, setIntervalId] = useState(null);
  // const [clock, setClock] = useState();


  
  const { allBatchs, setIdPlanBatch} = useContext(getAllBatchInsidePlanContext)
  const { setIdLote } = useContext(flagPartialCountdownContext)
  const { setIdBatchStateUpdate, setBatchState, updateBatchStateSuccess, updateBatchStateError} = useContext(updateBatchStateContext)


  // console.log("allbatchs", allBatchs)
  const {allPlans} = useContext(getAllPlansContext);
  const [planData, setPlanData] = useState()
  const {idPlan} = useParams();
  
  const user = JSON.parse(localStorage.getItem("user"))
  const navigate = useNavigate();

  const validar = (values, batch) => {
    const errors = {};
    if (values.selection){
      setIdBatchStateUpdate(batch.id_batch)
      setHabilitar(true)
    }
    if (!values.selection){
      setHabilitar(false)
    }
     return errors;
    };

  const handleSubmit = () => {
    // console.log("HANDLE SUBIMT!")
      const submit = {
        status:"En reserva",
      }
      console.log("SUBMIT", submit)
      setBatchState(submit)     
    };

  useEffect(() => {
    setIdPlanBatch(idPlan)
  },[idPlan]);


  
  // CountDown Clocks

useEffect(() => {
  if (allBatchs) {
    const timers = allBatchs.map((lote) => {
    //  console.log(lote)
      const creationBatchDate = lote.created_date;
      const consultDate = new Date().getTime();
      const timeDifference = consultDate - creationBatchDate;
      const batch_id = lote.id_batch
      
      if (timeDifference > 1) {
        const remainingTime = 2700000 - timeDifference;
        // const remainingTime = 60000 - timeDifference;
        return { created_date: creationBatchDate, remainingTime,batch_id  };
      }
      return null;
    });
    setBatchTimers(timers.filter((timer) => timer !== null));
  }
}, [allBatchs]);

useEffect(() => {
  const interval = setInterval(() => {
    setBatchTimers(prevTimers => 
      prevTimers.map((timer) => {
        // console.log(timer);
        if (timer.remainingTime <= 0) {
          return timer;
        }
        const newRemainingTime = timer.remainingTime - 1000;
        if (newRemainingTime <= 0) {
          console.log("NO MORE TIME FOR Batch:", timer.batch_id )
          setIdLote(timer.batch_id)
          clearInterval(interval);
          setTimeout(()=>{
            window.location.reload(false);
          },1000)
          
         
        }
        return { created_date: timer.created_date, remainingTime: newRemainingTime, batch_id: timer.batch_id };
      })
    );
  }, 1000);
  return () => clearInterval(interval);
}, []);

useEffect(()=>{

}, []);


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ fucking clocks /////////////////////////////////////////

  useEffect(()=>{
    if(allPlans){
    setPlanData (allPlans.filter(plan => plan.id == idPlan))
    }
  },[allPlans])

  const closeModal1 = () => {setOpen1(false);}
  const closeModal2 = () => {setOpen2(false);}
  const closeModal3 = () => {setOpen3(false);}  
  const closeModalAbort = () => {setAbort(false);}  
  // const closeModalPartial = () => {setPartial(false);} 
  const closeModalPartiality = () => {setPartiality(false);}
  // const closeModalEditBatch =() => {setEditbatch(false);}
  // const closeModalPlay =() => {setPlay(false);}
  // const closeModalPlaySuccess =() => { setPlaySuccess(false);}

  const openRemoveBatch1 = () =>{setRemoveBatch1(true);}
  const closeRemoveBatch1 = () => {setRemoveBatch1(false);}

  const removeBatchTwoFunctions = () =>{
    setRemoveBatch1(false);
    setRemoveBatch2(true);
  }

  const closeRemoveBatch2 = () =>{
    navigate(`/production-batchs-list/${idPlan}`)
    window.location.reload()
    setRemoveBatch2(false);

  }

  const twoFunctions1 = () => {
    editMode()
    setOpen1(false);
  }
  const twoFunctions2 = ()=>{
   setOpen2(false)
   setOpen3(true);
 }
 const twoFunctions3 = ()=>{
  editMode()
  setOpen3(false);
}
const abortEdit = ()=>{
  setAbort(true);
}
const twoFunctionsAbort = ()=>{
  editMode()
  setAbort(false);
}
// const openPartial = ()=>{ setPartial(true);}
const openPartialily = ()=>{ setPartiality(true);}
// const openEditBatch = ()=>{ setEditbatch(true);}
  

// const startBatch = ()=>{ setPlay (true)}
// // const startPlaySuccess = ()=>{ setPlaySuccess (true)}
// const twoFunctionsPlaySuccess =()=>{
//   setPlay (false)  
//   setPlaySuccess(true)
//   setBatchState(true); 
// }

  const editMode = () =>{
    setEdit(o => !o)
  }


  // const repositionItem = (oldIndex, newIndex) => {
  //   const newItems = [...allBatchs];
  //   const [removedItem] = newItems.splice(oldIndex, 1);
  //   newItems.splice(newIndex, 0, removedItem);
  //   setBatchs(newItems);
  // };

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
              <p className="font-title-batch-list">Listado de Lotes</p>
              <p className="font-subtitle-plan-list">Todos los Planes</p>
            </div>
        

            <div className="col s11 m5 l3 push-l1 no-margin">
              <p className="font-form-batch-list left ">RC:16-062</p>
              
              <p className="font-date-batch-list left ">FECHA DE CREACION: {planData?planData[0].created_date:null}</p>
              <p className="font-plan-batch-list left">PLAN Nº: {idPlan}</p>
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
       {!allBatchs?  <>
             <div className="progress white">
             <div className="indeterminate red"></div>
           </div> 
        <p className="font-subtitle-plan-list center">NO SE ENCONTRARON LOTES EN EL PLAN</p>
       </>
           
           :allBatchs?.map((batch)=>(
       <li key={batch.id_batch}>


      <div className="container">
        
        <div className="row hide-on-med-and-down">
          <div className="col s12 m12 l12 no-margin">
            <div className="display-box-batchs z-depth-1">

{/* columan Izquierda */}
              <div className="col s1 m1 l1 center box-left ">
                <p className="batch-number">{batch.batch_number}</p> 
                <p className="batch-mode">{batch.mode.toUpperCase()}</p>
              </div>

{/* Columna Central */}
              <div className="col s1 m1 l10">
                 <div className="row row-fix bottom-line">
                  <div className="center-align titles valign-wrapper ">
                  <div className="col l1 right-line-title">SKU</div>
                  <div className="col l2 right-line-title">Descripción</div>
                  <div className="col l1 right-line-title">Cantidad</div>
                  <div className="col l2 right-line-title">Serie Inicial</div>
                  <div className="col l2 right-line-title">Serie Final</div>
                  <div className="col l3 right-line-title no-margin ">
                    <div className="bottom-line titles-alternative ">Uso Alternativo </div>
                    <div className="padding-1px">
                        <div className="col l6 sub-titles right-line-sub-title">SKU Anterior</div>
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
                  <div className="col l1 right-line-sub-title bottom-line-sub-title">{batch.sku}</div>
                  <div className="col l2 right-line-sub-title bottom-line-sub-title">{batch.description }</div>
                  <div className="col l1 right-line-sub-title bottom-line-sub-title">{batch.quantity}</div>
                  <div className="col l2 right-line-sub-title bottom-line-sub-title">{batch.first_serie}</div>
                  <div className="col l2 right-line-sub-title bottom-line-sub-title ">{batch.last_serie}</div>
                  <div className="col l3 no-margin"> 
                    {/* <div className="row row-fix"> */}
                      <div className="col l6 right-line-sub-title bottom-line-sub-title ">{batch.old_sku!==null?batch.old_sku:"-"}</div>
                      <div className="col l6 right-line-sub-title bottom-line-sub-title ">{batch.actually_sku!==null?batch.actually_sku:"-"}</div>
                    {/* </div> */}
                  </div>
                  {/* <div className="col l1 bottom-line-sub-title">{batch.status.toUpperCase()}</div> */}
                  <div className="col l1 bottom-line-sub-title">ESPERA</div>
                </div>
                </div>
                <div className="row row-fix ">
                   <div className="col l8 bottom-line-observaciones observaciones-batch-list">
                    <p className="">Observaciones del Lote:
                    <p className="observaciones-batch-list-display">
                    {batch.observation !== null? batch.observation:'Sin Observaciones del Lote'}
                   </p>
                    </p>
                 
                   </div>
                   <div className="col l4  no-margin">
                   <p className="vigencia">&nbsp;&nbsp;&nbsp;Vigencia:
                   <p className="col l12 vigencia-batch-text">
                   {batch.validity !== null? batch.validity:'Sin Observaciones de Vigencia'}
                  </p>
                   </p>
                   </div>
                </div>

                {/* iconos inferiores */}
               <div className="col l12">
               
                  <div className="col l1 ">
{user.profileRMS === null && user.procesosHabilitados.test_hex === true?<>                       
               <Link to={`/production-line-test-hex/${idPlan}`}>
                  <TestingZ3 className="hover-hand margin-left-icon" />
                  </Link>
                  <p className="text-icons">TESTING DE FUGA</p></>:<>
                  <div className="container no-margin svg-disabled">
                  <TestingZ3 className="margin-left-icon svg-relative" />
                  </div>
                  <p className="text-icons edit-disabled">TESTING DE FUGA</p>
                  </>}
              </div>

              <div className="col l1 "> 
{user.profileRMS === null && user.procesosHabilitados.assembly_pointer === true?<>              
                  <Link to={`/production-line-ensamblaje/${idPlan}`}>
                      <Ensamblador className="hover-hand margin-left-icon"/>
                  </Link>
                  <p className="text-icons">ENSAMBLAJE CALEFON</p></>:<>
                  <div className="container no-margin svg-disabled">
                  <Ensamblador className="margin-left-icon svg-relative"/>
                  </div>
                  <p className="text-icons edit-disabled">ENSAMBLAJE CALEFON</p></>}
              </div>

              <div className="col l1 ">
{user.profileRMS === null && user.procesosHabilitados.functional_test === true?<>  
                  <Link to={`/production-line-test-bench/${idPlan}`}>
                  <Testing className="hover-hand margin-left-icon"/>
                  </Link>
                  <p className="text-icons">TESTING FUNCIONAL</p></>:<>
                   <Testing className=" margin-left-icon" style={{ fill: "#D3D3D3" }}/>
                   <p className="text-icons edit-disabled">TESTING FUNCIONAL</p></>}
              </div>

              <div className="col l1 ">
{user.profileRMS === null && user.procesosHabilitados.pointer_packaging === true?<>  
                  <Link to={`/production-line-ensamblaje-frente/${idPlan}`}>
                    <Ensamblador2 className="hover-hand  margin-left-icon"/>
                  </Link>
                  <p className="text-icons">ENSAMBLAJE FRENTE</p></>:<>
                  <div className="container no-margin svg-disabled">
                  <Ensamblador2 className="margin-left-icon svg-relative" />
                  <p className="text-icons edit-disabled">ENSAMBLAJE FRENTE</p>
                  </div>
                  </>}
              </div>
              <div className="col l1 "> 
{user.profileRMS === null && user.procesosHabilitados.packaging_1 === true?<> 
                  <Link to={`/production-line-embalaje-1/${idPlan}`}>
                        <Embalaje className="hover-hand  margin-left-icon svg-disabled"/>
                  </Link>
                  <p className="text-icons">EMBALAJE #1</p></>:<>
                  <div className="container no-margin svg-disabled">
                  <Embalaje className="margin-left-icon svg-relative"/>
                  </div>
                  <p className="text-icons edit-disabled">EMBALAJE #1</p>
                  </>}
              </div>

              <div className="col l1">
{user.profileRMS === null && user.procesosHabilitados.packaging_2 === true?<>  
                  <Link to={`/production-line-embalaje-2/${idPlan}`}>
                    <BoxPoint className="hover-hand  margin-left-icon" />
                  </Link>
                  <p className="text-icons">EMBALAJE #2</p></>:<>
                    <div className="container no-margin svg-disabled">
                  <BoxPoint className="margin-left-icon svg-relative" />
                    </div>
                  <p className="text-icons edit-disabled">EMBALAJE #2</p>
                  </>}
                </div>

              <div className="col l1"> 
{user.profileRMS === null && user.procesosHabilitados.palletized === true?<>              
                    <Link to={`/production-line-paletizado/${idPlan}`}>
                      <Pallet className="hover-hand margin-left-icon"/>
                    </Link>
                    <p className="text-icons">PALETIZADO</p></>:<>
                    <div className="container no-margin svg-disabled">
                          <Pallet className="margin-left-icon svg-relative" />
                    </div>
                    <p className="text-icons edit-disabled">PALETIZADO</p>
                    </>}
              </div>


              <div className="col l1">  
{user.profileRMS===null && user.procesosHabilitados.folder === true ||user.procesosHabilitados.punching_machine === true|| user.procesosHabilitados.printer===true?<>                
                  <Link to={`/component_list/${idPlan}`}>
                      <Tuning className="hover-hand margin-left-icon"/>
                  </Link>
                  <p className="text-icons">PUESTA A PUNTO</p></>:<>
                  <Tuning className="margin-left-icon" style={{ fill: "#D3D3D3" }}/>
                  <p className="text-icons edit-disabled">PUESTA A PUNTO</p></>}
              </div>

              <div className="col l1"> 

{user.profileRMS===null && user.procesosHabilitados.folder===true ||user.procesosHabilitados.punching_machine === true|| user.procesosHabilitados.printer===true?<>
                  <Link to={`/production-register/${idPlan}`}>
                      <i className="material-symbols-outlined edit-batch hover-hand">factory</i>
                  </Link>
                  <p className="text-icons ">REGISTRO PRODUCCION</p></>:<>
                  <i className="material-symbols-outlined edit-batch edit-disabled">factory</i>
                  <p className="text-icons edit-disabled">REGISTRO PRODUCCION</p>
                  </>}
              </div>

              <div className="col l1"> 
              {user.profileRMS === null && user.procesosHabilitados.folder===true ||user.procesosHabilitados.punching_machine === true|| user.procesosHabilitados.printer === true?<>              
                  <Link to={`/production-line-cp/${idPlan}`}>
                      <CP className="hover-hand margin-left-icon"/>
                  </Link>
                  <p className="text-icons">LISTA MAESTRA</p>
                  </>:<>
                  <div className="container no-margin svg-disabled">
                        <CP className="margin-left-icon svg-relative" />
                        <p className="text-icons edit-disabled">LISTA MAESTRA</p>
                  </div>
                  
                  </>}
              </div>

              <div className="col l1 "> 
{user.profileRMS==="PLANIFICADOR DE PRODUCCIÓN"?<>
              {batch.flag_partial_countdown === 1 ?
                <Link to={`/production-partiality/${idPlan}/${batch.id_batch}`}>
                  <i onClick={openPartialily} className="material-symbols-outlined clock-batch hover-hand edit-batch margin-clock">timer</i>
                </Link>
       
                 :<i className="material-symbols-outlined clock-batch edit-disabled edit-batch margin-clock">timer</i>}
                
                <ul>
                              {batchTimers.map((timer) => {
                                if (timer.created_date === batch.created_date) {
                                  return (
                                    <li key={timer.created_date} className="mins-font">
                                      {/* {String(Math.floor(timer.remainingTime / (1000 * 60 * 60))).padStart(2, "0")}
                                      : */}
                                      {String(Math.floor((timer.remainingTime % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, "0") <= "0"? "00": String(Math.floor((timer.remainingTime % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, "0")  }
                                      :
                                      {String(Math.floor((timer.remainingTime % (1000 * 60)) / 1000)).padStart(2, "0") <= "0"? "00":String(Math.floor((timer.remainingTime % (1000 * 60)) / 1000)).padStart(2, "0") } 
                                      &nbsp;
                                      <p className="mins-font ">mins.</p>
                                    </li>
                                  );
                                }
                                return null;
                              })}
                  </ul>

                 </>:<>
                 <i className="material-symbols-outlined clock-batch edit-disabled edit-batch margin-clock">timer</i>
                 {/* <p className="mins-font edit-disabled">{minutes}:{seconds}</p> */}
                 {/* <p className="mins-font edit-disabled">mins.</p>  */}
                 </>}

              </div>

              <div className="col l1"> 
                <Link to={`/production-line-pdf/${idPlan}`}>
                <PDFicon className="hover-hand margin-left-icon"/>
                </Link>
                <p className="text-icons">VER PLANOS</p>
              </div>




              </div>
            </div>
{/* columan derecha */}

              <div className="col s1 m1 l1  box-right  ">
                <div className="col l12  valign-wrapper">
                    {edit===true ?<>
                      <ArrowUp  className="hover-hand"/>
                      <ArrowDown className="hover-hand"/>
                      {/* <ArrowUp  onClick={() => repositionItem(batch.id_batch,batch.id_batch - 1)}className="hover-hand"/> */}
                      {/* <ArrowDown  onClick={() => repositionItem(batch.id_batch,batch.id_batch + 1)}className="hover-hand"/> */}
                    </>:<>
                      <ArrowUp style={{ fill: "#D3D3D3" }}/>
                      <ArrowDown  style={{ fill: "#D3D3D3" }}/>
                    </>} 
                </div>

{user.profileRMS === "PLANIFICADOR DE PRODUCCIÓN"?
              <div className="col s1 m1 l12 valign-wrapper">
                {edit===true?
                <Link to={`/edit-production-batch/${idPlan}/${batch.batch_number}`}>
                  <i className=" right material-symbols-outlined edit-batch hover-hand">edit</i>
                </Link>:
                <i className=" right material-symbols-outlined edit-batch edit-disabled">edit</i>
              }
     </div>:<div className="col s1 m1 l12 valign-wrapper">
     <i className="material-symbols-outlined edit-batch edit-disabled">edit</i>
     </div>}
     {user.profileRMS === "PLANIFICADOR DE PRODUCCIÓN"?<>
     {batch.mode==="make to order" && batch.order_file=== null?
                 <i className="right material-symbols-outlined warning-batch ">warning</i>:null}
     </>
               :<i className="right material-symbols-outlined warning-batch edit-disabled">warning</i>}

        <Formik
              initialValues={{ 
                selection:false,
              }}
              onSubmit={handleSubmit}
              validate={(values) => validar(values, batch)}
            >
              <Form id="remove"> 
              {edit===true?
              <div className="col l12 push-l3 ">
              <label>
              <Field type="checkbox" name="selection" />
                <span className="margin-selector">&nbsp;</span>
              </label>
              
            </div>:null}

            </Form>
        </Formik>

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
              
{user.profileRMS==="PLANIFICADOR DE PRODUCCIÓN"?
              <div className="col s7 m9 top-box-ms valign-wrapper">
                   {edit===true?
                <>
                <a href="/edit-production-batch">
                  <i className=" right material-symbols-outlined edit-batch hover-hand">edit</i>
                </a>
                {/* <i onClick ={openEditBatch} className=" right material-symbols-outlined edit-batch hover-hand">edit</i>
                <Popup open={editbatch} closeOnDocumentClick onClose={closeModalEditBatch} lockScroll = {true} nested>
                  <Edit_Batch_Params params={closeModalEditBatch}/>
                </Popup> */}
                <i onClick={openPartialily} className="right material-symbols-outlined clock-batch hover-hand">timer</i>
                <Popup open={partiality} closeOnDocumentClick onClose={closeModalPartiality} lockScroll = {true} >
                  <Partiality params={closeModalPartiality}/>
                </Popup>
                </>
                 : <>
                 <i className=" right material-symbols-outlined edit-batch edit-disabled">edit</i>
                 <i className=" right material-symbols-outlined clock-batch edit-disabled">timer</i>
                 </>
                }
                 <p className="mins-font">23</p>
                  &nbsp;
                 <p className="mins-font ">mins.</p>
                 <i className="right material-symbols-outlined warning-batch ">warning</i>
              </div>:null}
  
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

       <div className="container">

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
{user.profileRMS === null?
           <div className="col s12 m12 l12"><a href="/production-plans-list">
           <button className="btn-small btn-block waves-effect waves-light z-depth-2 button-regresar-batch-list " type="button">
             volver a planes
           </button></a>
         </div>:null}
         
{user.profileRMS === "PLANIFICADOR DE PRODUCCIÓN"?
         <>
         {edit===false?
          <>      
            <div className="col s12 m12 l2"><a href="/production-plans-list">
              <button className="btn-small btn-block waves-effect waves-light z-depth-2 button-regresar-batch-list " type="submit">
                volver a planes
              </button></a>
            </div>
            
            <div className="col s12 m12 l2 ">
           
              <Link to={`/create-production-batch/${idPlan}`}>
              <button className="btn-small btn-block waves-effect waves-light z-depth-2 button-crearlote-batch-list" type="button">
                crear lote
              </button>
              </Link>
         
            </div>
           
            <div className="col s12 m12 l4 right">
            
              <button onClick={() => setOpen1(o => !o)} className="btn-small btn-block waves-effect waves-light z-depth-2 button-modoedicion-batch-list" type="submit">
                   modo edicion 
              </button> 
              <Popup contentStyle={{background: "0"}} open={open1} closeOnDocumentClick onClose={closeModal1} lockScroll = {true}>
                 
               <div className="alert z-depth-1" >
                <div className="row row-fix ">
                  <div className="col s12 m12 l12 no-margin">
                    <div className="atention center-align">ATENCION</div>
                  </div>
                  <div className="col s12 m12 l12 no-margin divisor-bottom-line">
                    <div  className="alert-msg center-align ">Esta por editar parámetros de Lotes Existentes</div>
                  </div>
                </div>

                <div className="row">
                     <div className="col s6 m6 l6 divisor-right-line center">
                        <div onClick={closeModal1} className="button-alert waves-effect waves-dark btn-block">Cancelar</div >
                     </div>
                      <div className="col s6 m6 l6 center">
                       <div onClick={twoFunctions1} className="button-alert waves-effect waves-dark btn-block">Continuar</div>
                      </div>
                </div>
               </div>
              </Popup>

            </div>
            </> :
            <>
            <div className="col s12 m12 l2">
              <button disabled={habilitar===false} onClick={openRemoveBatch1} className="btn-small btn-block waves-effect waves-light z-depth-2 button-add-remove-batch-list" type="button">
               quitar lotes
              </button>
            </div>
            <div className="col s12 m12 l2 ">
              <Link to={`/batch-reserve-list/${idPlan}`}>
              <button className="btn-small btn-block waves-effect waves-light z-depth-2 button-add-remove-batch-list " type="button">
                ingresar lotes</button>
              </Link>
          
           </div>
           
            <div className="col s12 m12 l2 right">
              <div >
                <button onClick={() => setOpen2(o => !o)} className="btn-small btn-block waves-effect waves-light  z-depth-2 button-modoedicion-batch-list" type="submit">
                   guardar edicion
                 </button>
                 <Popup contentStyle={{background: "0"}} open={open2} closeOnDocumentClick onClose={closeModal2} lockScroll = {true}>
                      <div className="alert z-depth-1" >
                       <div className="row row-fix ">
                         <div className="col s12 m12 l12 no-margin">
                           <div className="atention center-align">ATENCION </div>
                         </div>
                         <div className="col s12 m12 l12 no-margin divisor-bottom-line">
                          <div className="alert-msg center-align ">Esta seguro de guardar cambios realizados?</div>
                         </div>
                       </div>

                      <div className="row">
                            <div className="col s6 m6 l6 divisor-right-line center">
                                <div onClick={closeModal2} className="button-alert waves-effect waves-dark btn-block">Cancelar</div >
                             </div>
                              <div className="col s6 m6 l6 center">
                                <div onClick={twoFunctions2} className="button-alert waves-effect waves-dark btn-block">Continuar</div>         
                               </div>
                      </div>
               </div>
            </Popup>  

            <Popup contentStyle={{background: "0"}} open={open3} closeOnDocumentClick onClose={closeModal3} lockScroll = {true}>                
                 <div className="alert z-depth-1" >
                   <div className="row row-fix ">
                        <div className="col s12 m12 l12 no-margin">
                             <div className="atention center-align">Cambios Guardados Exitósamente</div>
                        </div>
                       <div className="col s12 m12 l12 no-margin divisor-bottom-line">
                             <div  className="alert-msg center-align ">Muchas Gracias!</div>
                       </div>
                   </div>

                     <div className="row">
                         <div className="col s12 m12 l12 divisor-right-line center">
                             <div onClick={twoFunctions3} className="button-alert waves-effect waves-dark btn-block">Continuar</div >
                           </div>
                      
                   </div>
                 </div>
           </Popup>
      
              </div>
            </div> 
            <div className="col s12 m12 l2 right">
              <div >
                <button onClick={abortEdit} className="btn-small btn-block waves-effect waves-light  z-depth-2 button-cancelar-batch-list" type="submit">
                cancelar edicion 
                </button>
                </div>
            </div>

             {/* abortar edicion */}
             <Popup contentStyle={{background: "0"}} open={abort} closeOnDocumentClick onClose={closeModalAbort} lockScroll = {true}>
                 <div className="alert z-depth-1" >
                  <div className="row row-fix ">
                    <div className="col s12 m12 l12 no-margin">
                      <div className="atention center-align">ATENCION</div>
                    </div>
                    <div className="col s12 m12 l12 no-margin divisor-bottom-line">
                      <div  className="alert-msg center-align ">Los cambios no se guardaron!</div>
                    </div>
                  </div>
  
                  <div className="row">
                       <div className="col s6 m6 l6 divisor-right-line center">
                          <div onClick={closeModalAbort} className="button-alert waves-effect waves-dark btn-block">Cancelar</div >
                       </div>
                        <div className="col s6 m6 l6 center">
                         <div onClick={twoFunctionsAbort} className="button-alert waves-effect waves-dark btn-block">Continuar</div>
                        </div>
                  </div>
                 </div>
                </Popup>

                <Popup contentStyle={{background: "0"}} open={removeBatch1} closeOnDocumentClick onClose={closeRemoveBatch1} lockScroll = {true}>
                      <div className="alert z-depth-1" >
                       <div className="row row-fix ">
                         <div className="col s12 m12 l12 no-margin">
                           <div className="atention center-align">ATENCION </div>
                         </div>
                         <div className="col s12 m12 l12 no-margin divisor-bottom-line">
                          <div className="alert-msg center-align ">Esta por quitar el lote del Plan</div>
                         </div>
                       </div>

                      <div className="row">
                            <div className="col s6 m6 l6 divisor-right-line center">
                                <div onClick={closeRemoveBatch1} className="button-alert waves-effect waves-dark btn-block">Cancelar</div >
                             </div>
                              <div className="col s6 m6 l6 center">
                                <button form="remove" onClick={removeBatchTwoFunctions} className="button-alert waves-effect waves-dark btn-block" type="submit">Continuar</button>         
                               </div>
                      </div>
               </div>
            </Popup>  

            <Popup contentStyle={{background: "0"}} open={removeBatch2} closeOnDocumentClick onClose={closeRemoveBatch2} lockScroll = {true}>                
                 <div className="alert z-depth-1" >
                   <div className="row row-fix ">
                        <div className="col s12 m12 l12 no-margin">
                        {updateBatchStateError && (<div className="atention center-align">Error al quitar Lote</div>)}
                        {updateBatchStateSuccess && (<div className="atention center-align">Lote quitado Exitosamente</div>)}
                        </div>
                       <div className="col s12 m12 l12 no-margin divisor-bottom-line">
                       {updateBatchStateError && (<div className="alert-msg center-align ">Contacte al Administrador</div>)}
                       {updateBatchStateSuccess && (<div className="alert-msg center-align ">Muchas gracias!</div>)}
                       </div>
                   </div>

                     <div className="row">
                         <div className="col s12 m12 l12 divisor-right-line center">
                             {updateBatchStateError && (<div onClick={closeRemoveBatch2} className="button-alert waves-effect waves-dark btn-block">Continuar</div >)}
                             {updateBatchStateSuccess && (<div onClick={closeRemoveBatch2} className="button-alert waves-effect waves-dark btn-block">Continuar</div >)}
                           </div>
                      
                   </div>
                 </div>
           </Popup>

            </>
          }
            </>
            :null}
          </div>
      </div>

      </>
    );
  };
  export default Production_Batchs_List;