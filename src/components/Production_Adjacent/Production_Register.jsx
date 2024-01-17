import Navbar from "../Navbar/Navbar";
import QR from "../../assets/logos/QR.png";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState, useEffect} from "react";
import axios from "axios";

import { useNavigate } from 'react-router-dom';
import { useParams} from "react-router";


const Production_Register = () => {

  const [ punzonadora ] = useState(false);
  const [ plegadora ] = useState(false);
  const [ impresora ] = useState(true);
  
  
  const [PFdeterioroParcial, setPFdeterioroParcial] = useState(0);
  const [PFdeterioroTotal, setPFDeterioroTotal] = useState(0);
  const [SFdeterioroParcial, setSFdeterioroParcial] = useState(0);
  const [SFdeterioroTotal, setSFDeterioroTotal] = useState(0);
  const [respaldoDeterioroParcial, setRespaldoDeterioroParcial] = useState(0);
  const [respaldoDeterioroTotal, setRespaldoDeterioroTotal] = useState(0);
  const [TSdeterioroParcial, setTSdeterioroParcial] = useState(0);
  const [TSdeterioroTotal, setTSDeterioroTotal] = useState(0);
  const [TIdeterioroParcial, setTIdeterioroParcial] = useState(0);
  const [TIdeterioroTotal, setTIDeterioroTotal] = useState(0);
  const [totalDeterioro, setTotalDeterioro] = useState(0);
  
  const [PFproducidoParcial, setPFProducidoParcial] = useState(0);
  const [PFproducidoTotal, setPFProducidoTotal] = useState(0);
  const [SFproducidoParcial, setSFProducidoParcial] = useState(0);
  const [SFproducidoTotal, setSFProducidoTotal] = useState(0);
  const [respaldoProducidoParcial, setRespaldoProducidoParcial] = useState(0);
  const [respaldoProducidoTotal, setRespaldoProducidoTotal] = useState(0);
  const [TSproducidoParcial, setTSProducidoParcial] = useState(0);
  const [TSproducidoTotal, setTSProducidoTotal] = useState(0);
  const [TIproducidoParcial, setTIProducidoParcial] = useState(0);
  const [TIproducidoTotal, setTIProducidoTotal] = useState(0);
  const [totalProducido, setTotalProducido] = useState(0);

  const [solicitadoPF, setSolicitadoPF] = useState(21);
  const [solicitadoSF, setSolicitadoSF] = useState(40);
  const [solicitadoRespaldo, setSolicitadoRespaldo] = useState(40);
  const [solicitadoTS, setSolicitadoTS] = useState(40);
  const [solicitadoTI, setSolicitadoTI] = useState(40);
  const [ totalSolicitado ] = useState (solicitadoPF+solicitadoSF+solicitadoRespaldo+solicitadoTS+solicitadoTI);

  const [percentPF, setPercentPF ] = useState(0)  
  const [percentSF, setPercentSF] = useState(0);
  const [percentRespaldo, setPercentRespaldo] = useState(0);
  const [percentTS, setPercentTS] = useState(0);
  const [percentTI, setPercentTI] = useState(0);
  const [ totalPercent, setTotalPercent ] = useState (0);


  const [dataApi, setDataApi] = useState();

  useEffect(() => {
    setPercentPF (Number(((PFproducidoTotal / solicitadoPF)*100).toFixed(2)));
    setPercentSF (Number(((SFproducidoTotal / solicitadoSF)*100).toFixed(2)));
    setPercentRespaldo (Number(((respaldoProducidoTotal / solicitadoRespaldo)*100).toFixed(2)));
    setPercentTS (Number(((TSproducidoTotal / solicitadoTS)*100).toFixed(2)));
    setPercentTI (Number(((TIproducidoTotal / solicitadoTI)*100).toFixed(2)));
    
  }, [PFproducidoTotal, SFproducidoTotal, respaldoProducidoTotal, TSproducidoTotal, TIproducidoTotal]);

  useEffect(() => {
    setTotalPercent(Number(((percentPF+percentSF+percentRespaldo+percentTS+percentTI)/5).toFixed(2)));
  }, [percentPF, percentSF, percentRespaldo, percentTS, percentTI]);

  const DeterioroPF = (e) => { e.preventDefault(); setPFdeterioroParcial(parseInt(e.target.value))}
  const DeterioroSF = (e) => { e.preventDefault(); setSFdeterioroParcial(parseInt(e.target.value))}
  const DeterioroRespaldo = (e) => { e.preventDefault();setRespaldoDeterioroParcial(parseInt(e.target.value))}
  const DeterioroTS = (e) => { e.preventDefault();setTSdeterioroParcial(parseInt(e.target.value))}
  const DeterioroTI = (e) => { e.preventDefault(); setTIdeterioroParcial(parseInt(e.target.value))}

  const producidoPF = (e) => { e.preventDefault(); setPFProducidoParcial(parseInt(e.target.value))}
  const producidoSF = (e) => { e.preventDefault(); setSFProducidoParcial(parseInt(e.target.value))}
  const producidoRespaldo = (e) => { e.preventDefault();setRespaldoProducidoParcial(parseInt(e.target.value))}
  const producidoTS = (e) => { e.preventDefault();setTSProducidoParcial(parseInt(e.target.value))}
  const producidoTI = (e) => { e.preventDefault(); setTIProducidoParcial(parseInt(e.target.value))}

  const PF = () => {
    setPFDeterioroTotal(parseInt(PFdeterioroTotal) + parseInt(PFdeterioroParcial)) 
    setTotalDeterioro(parseInt(totalDeterioro) + parseInt(PFdeterioroParcial))
    setPFdeterioroParcial(parseInt(0))
  }
  const PFRemove = () => {
    setPFDeterioroTotal(parseInt(PFdeterioroTotal) - parseInt(PFdeterioroParcial)) 
    setTotalDeterioro(parseInt(totalDeterioro) - parseInt(PFdeterioroParcial))
    setPFdeterioroParcial(parseInt(0))
  }
  const SF = () => {
    setSFDeterioroTotal(parseInt(SFdeterioroTotal) + parseInt(SFdeterioroParcial)) 
    setTotalDeterioro(parseInt(totalDeterioro) + parseInt(SFdeterioroParcial))
    setSFdeterioroParcial(parseInt(0))
  }
  const SFRemove = () => {
    setSFDeterioroTotal(parseInt(SFdeterioroTotal) - parseInt(SFdeterioroParcial)) 
    setTotalDeterioro(parseInt(totalDeterioro) - parseInt(SFdeterioroParcial))
    setSFdeterioroParcial(parseInt(0))
  }
  const Respaldo = () => {
    setRespaldoDeterioroTotal(parseInt(respaldoDeterioroTotal) + parseInt(respaldoDeterioroParcial)) 
    setTotalDeterioro(parseInt(totalDeterioro) + parseInt(respaldoDeterioroParcial))
    setRespaldoDeterioroParcial(parseInt(0))
  }
  const RespaldoRemove = () => {
    setRespaldoDeterioroTotal(parseInt(respaldoDeterioroTotal) - parseInt(respaldoDeterioroParcial)) 
    setTotalDeterioro(parseInt(totalDeterioro) - parseInt(respaldoDeterioroParcial))
    setRespaldoDeterioroParcial(parseInt(0))
  }
  const TS = () => {
    setTSDeterioroTotal(parseInt(TSdeterioroTotal) + parseInt(TSdeterioroParcial)) 
    setTotalDeterioro(parseInt(totalDeterioro) + parseInt(TSdeterioroParcial))
    setTSdeterioroParcial(parseInt(0))
  }
  const TSRemove = () => {
    setTSDeterioroTotal(parseInt(TSdeterioroTotal) - parseInt(TSdeterioroParcial)) 
    setTotalDeterioro(parseInt(totalDeterioro) - parseInt(TSdeterioroParcial))
    setTSdeterioroParcial(parseInt(0))
  }
  const TI = () => {
    setTIDeterioroTotal(parseInt(TIdeterioroTotal) + parseInt(TIdeterioroParcial)) 
    setTotalDeterioro(parseInt(totalDeterioro) + parseInt(TIdeterioroParcial))
    setTIdeterioroParcial(parseInt(0))
  }
  const TIRemove = () => {
    setTIDeterioroTotal(parseInt(TIdeterioroTotal) - parseInt(TIdeterioroParcial)) 
    setTotalDeterioro(parseInt(totalDeterioro) - parseInt(TIdeterioroParcial))
    setTIdeterioroParcial(parseInt(0))
  }



  const PFP = () => {
    setPFProducidoTotal(parseInt(PFproducidoTotal) + parseInt(PFproducidoParcial)) 
    setTotalProducido(parseInt(totalProducido) + parseInt(PFproducidoParcial))
    setPFProducidoParcial(parseInt(0))
  }
  const PFPRemove = () => {
    setPFProducidoTotal(parseInt(PFproducidoTotal) - parseInt(PFproducidoParcial)) 
    setTotalProducido(parseInt(totalProducido) - parseInt(PFproducidoParcial))
    setPFProducidoParcial(parseInt(0))
  }
  const SFP = () => {
    setSFProducidoTotal(parseInt(SFproducidoTotal) + parseInt(SFproducidoParcial)) 
    setTotalProducido(parseInt(totalProducido) + parseInt(SFproducidoParcial))
    setSFProducidoParcial(parseInt(0))
  }
  const SFPRemove = () => {
    setSFProducidoTotal(parseInt(SFproducidoTotal) - parseInt(SFproducidoParcial)) 
    setTotalProducido(parseInt(totalProducido) - parseInt(SFproducidoParcial))
    setSFProducidoParcial(parseInt(0))
  }
  const RespaldoP = () => {
    setRespaldoProducidoTotal(parseInt(respaldoProducidoTotal) + parseInt(respaldoProducidoParcial)) 
    setTotalProducido(parseInt(totalProducido) + parseInt(respaldoProducidoParcial))
    setRespaldoProducidoParcial(parseInt(0))
  }
  const RespaldoPRemove = () => {
    setRespaldoProducidoTotal(parseInt(respaldoProducidoTotal) - parseInt(respaldoProducidoParcial)) 
    setTotalProducido(parseInt(totalProducido) - parseInt(respaldoProducidoParcial))
    setRespaldoProducidoParcial(parseInt(0))
  }
  const TSP = () => {
    setTSProducidoTotal(parseInt(TSproducidoTotal) + parseInt(TSproducidoParcial)) 
    setTotalProducido(parseInt(totalProducido) + parseInt(TSproducidoParcial))
    setTSProducidoParcial(parseInt(0))
  }
  const TSPRemove = () => {
    setTSProducidoTotal(parseInt(TSproducidoTotal) - parseInt(TSproducidoParcial)) 
    setTotalProducido(parseInt(totalProducido) - parseInt(TSproducidoParcial))
    setTSProducidoParcial(parseInt(0))
  }
  const TIP = () => {
    setTIProducidoTotal(parseInt(TIproducidoTotal) + parseInt(TIproducidoParcial)) 
    setTotalProducido(parseInt(totalProducido) + parseInt(TIproducidoParcial))
    setTIProducidoParcial(parseInt(0))
  }
  const TIPRemove = () => {
    setTIProducidoTotal(parseInt(TIproducidoTotal) - parseInt(TIproducidoParcial)) 
    setTotalProducido(parseInt(totalProducido) - parseInt(TIproducidoParcial))
    setTIProducidoParcial(parseInt(0))
  }



  // const validar = (values) => {
  //   const errors = {};
  
  //   if (!values.password) {
  //     errors.password = "Campo obligatorio";
  //   } else if ( isNaN(values.password) ) {
  //     errors.password = "Este campo solo acepta números";
  //   } else if (values.password.length < 6) {
  //     errors.password= "Minimos 6 caracteres";
  //   }
  //   return errors;
  // };
  const produccion ={ total_solicitado:totalSolicitado,
                      porcentaje_total:totalPercent,
                      total_producido:totalProducido,
                      total_deterioro:totalDeterioro}

  const handleSubmit = () => {
    // getDataApi()
    // postDataApi()
}

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

            <div className="col s12 m12 l7 no-margin">
              <div className="col s12 m12 l9">

              <p className="font-title-create-plan">Registro de Producción</p>
              <p className="font-subtitle-batch-list">Punzonadora / Plegadora / Impresora</p>
              </div>
            </div>

            <div className="col s11 m11 l4 ">
              <div className="col s12 m7 l7 no-margin pull-l1 right">
              <p className="font-form-create-plan">RC:16-062</p>  
              <p className="font-tunning-black">PLAN Nº: D0105-2023</p>
              <p className="font-tunning-black">FECHA: 20-07-2023</p>
              <p className="font-tunning-black">Nº DE LOTE: 1234</p>
              {/* <p className="font-tunning-black">DATO: DATO</p>  */}
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

      <div className="container">

      <div className="row ">
          <div className="col s12 m12 l12 center-align">
              <div className="col s1 m2 l2">
                  <p className="title-production-register">COMPONENTE</p>
              </div>
              <div className="col s1 m1 l1">
                  <p className="title-production-register">&nbsp;</p>
              </div>
              <div className="col s1 m2 l2">
                  <p className="title-production-register">DETERIORO PARCIAL</p>
              </div>
              <div className="col s1 m1 l1">
                  <p className="title-production-register">&nbsp;</p>
              </div>
              <div className="col s1 m2 l2">
                  <p className="title-production-register">PRODUCCION PARCIAL</p>
              </div>
              <div className="col s1 m2 l2">
                  <p className="title-production-register">CANTIDAD SOLICITADA</p>
              </div>
              <div className="col s1 m2 l2">
                  <p className="title-production-register">PRODUCIDO</p>
              </div>
            </div>
          </div>
{/* PRIMER FRENTE */}
          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align">
              <div className="col s1 m2 l2">
                <div className="display-box-production-register z-depth-1">
                  <p className="text-production-register">FRENTE PASO #1</p>
                </div>
              </div>
              <div className="col s1 m2 l2 no-margin">

                <div className="col s6 m6 l6 push-l2 ">
                 <i onClick={PFRemove} className="material-symbols-outlined remove_circle-red hover-hand">do_not_disturb_on</i>
                 <i onClick={PF} className="material-symbols-outlined add_circle-red hover-hand">add_circle</i>
                </div>
                <div className="col s6 m6 l6">
                  <div className="display-box-production-register z-depth-1 background-grey input-field">
                    <input value={PFdeterioroParcial} className="inputfield" type="text" onChange={DeterioroPF} />
                  </div>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-production-register-red z-depth-1">
                  <p className="text-production-register">{PFdeterioroTotal}</p>
                </div>
              </div>

               <div className="col s1 m2 l2 no-margin">
                <div className="col s6 m6 l6 push-l2">
                 <i onClick={PFPRemove} className="material-symbols-outlined remove_circle-green hover-hand">do_not_disturb_on</i>
                 <i onClick={PFP}className="material-symbols-outlined add_circle-green hover-hand">add_circle</i>
                </div>
                <div className="col s6 m6 l6 ">
                <div className="display-box-production-register z-depth-1 background-grey input-field">
                    <input value={PFproducidoParcial} className="inputfield" type="text" onChange={producidoPF} />
                  </div>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-production-register-green z-depth-1">
                  <p className="text-production-register">{PFproducidoTotal}</p>
                </div>
              </div>
              {/* <div className="col s1 m1 l1">
                  <p className="title-production-register">&nbsp;</p>
              </div> */}
              <div className="col s1 m2 l2">
                <div className="display-box-production-register z-depth-1">
                  <p className="text-production-register">{solicitadoPF}</p>
                </div>
              </div>
              {/* <div className="col s1 m1 l1">
                  <p className="title-production-register">&nbsp;</p>
              </div> */}
              <div className="col s1 m2 l2">
                <div className="display-box-production-register z-depth-1">
                  <p className="text-production-register">{percentPF}%</p>
                </div>
              </div>
            </div>
          </div>
{/* SEGUNDO FRENTE */}
          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align">
              <div className="col s1 m2 l2">
                <div className="display-box-production-register z-depth-1">
                  <p className="text-production-register">FRENTE PASO #2</p>
                </div>
              </div>
              <div className="col s1 m2 l2 no-margin">
                <div className="col s6 m6 l6 push-l2 ">
                <i onClick={SFRemove}className="material-symbols-outlined remove_circle-red hover-hand">do_not_disturb_on</i>
                 <i onClick={SF} className="material-symbols-outlined add_circle-red hover-hand">add_circle</i>
                </div>
                <div className="col s6 m6 l6">
                  <div className="display-box-production-register z-depth-1 background-grey input-field">
                    <input value={SFdeterioroParcial} className="inputfield" type="text" onChange={DeterioroSF} />
                  </div>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-production-register-red z-depth-1">
                  <p className="text-production-register">{SFdeterioroTotal}</p>
                </div>
              </div>
               <div className="col s1 m2 l2 no-margin">
                <div className="col s6 m6 l6 push-l2">
                <i onClick={SFPRemove} className="material-symbols-outlined remove_circle-green hover-hand">do_not_disturb_on</i>
                <i onClick={SFP} className="material-symbols-outlined add_circle-green hover-hand">add_circle</i>
                </div>
                <div className="col s6 m6 l6 ">
                <div className="display-box-production-register z-depth-1 background-grey input-field">
                    <input value={SFproducidoParcial} className="inputfield" type="text" onChange={producidoSF} />
                  </div>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-production-register-green z-depth-1">
                  <p className="text-production-register">{SFproducidoTotal}</p>
                </div>
              </div>
              {/* <div className="col s1 m1 l1">
                  <p className="title-production-register">&nbsp;</p>
              </div> */}
              <div className="col s1 m2 l2">
                <div className="display-box-production-register z-depth-1">
                  <p className="text-production-register">{solicitadoSF}</p>
                </div>
              </div>
              {/* <div className="col s1 m1 l1">
                  <p className="title-production-register">&nbsp;</p>
              </div> */}
              <div className="col s1 m2 l2">
                <div className="display-box-production-register z-depth-1">
                  <p className="text-production-register">{percentSF}%</p>
                </div>
              </div>
            </div>
          </div>

{/*RESPALDO */}

          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align">
              <div className="col s1 m2 l2">
                <div className="display-box-production-register z-depth-1">
                  <p className="text-production-register">RESPALDO</p>
                </div>
              </div>
              <div className="col s1 m2 l2 no-margin">
                <div className="col s6 m6 l6 push-l2 ">
                <i onClick={RespaldoRemove}className="material-symbols-outlined remove_circle-red hover-hand">do_not_disturb_on</i>
                 <i onClick={Respaldo} className="material-symbols-outlined add_circle-red hover-hand">add_circle</i>
                </div>
                <div className="col s6 m6 l6">
                  <div className="display-box-production-register z-depth-1 background-grey input-field">
                    <input value={respaldoDeterioroParcial} className="inputfield" type="text" onChange={DeterioroRespaldo} />
                  </div>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-production-register-red z-depth-1">
                  <p className="text-production-register">{respaldoDeterioroTotal}</p>
                </div>
              </div>
               <div className="col s1 m2 l2 no-margin">
                <div className="col s6 m6 l6 push-l2">
                <i onClick={RespaldoPRemove} className="material-symbols-outlined remove_circle-green hover-hand">do_not_disturb_on</i>
                 <i onClick={RespaldoP}className="material-symbols-outlined add_circle-green hover-hand">add_circle</i>
                </div>
                <div className="col s6 m6 l6 ">
                <div className="display-box-production-register z-depth-1 background-grey input-field">
                    <input value={respaldoProducidoParcial} className="inputfield" type="text" onChange={producidoRespaldo} />
                  </div>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-production-register-green z-depth-1">
                  <p className="text-production-register">{respaldoProducidoTotal}</p>
                </div>
              </div>
              {/* <div className="col s1 m1 l1">
                  <p className="title-production-register">&nbsp;</p>
              </div> */}
              <div className="col s1 m2 l2">
                <div className="display-box-production-register z-depth-1">
                  <p className="text-production-register">{solicitadoRespaldo}</p>
                </div>
              </div>
              {/* <div className="col s1 m1 l1">
                  <p className="title-production-register">&nbsp;</p>
              </div> */}
              <div className="col s1 m2 l2">
                <div className="display-box-production-register z-depth-1">
                  <p className="text-production-register">{percentRespaldo}%</p>
                </div>
              </div>
            </div>
          </div>
{/*TAPA SUPERIOR */}
          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align">
              <div className="col s1 m1 l2">
                <div className="display-box-production-register z-depth-1">
                  <p className="text-production-register">TAPA SUPERIOR</p>
                </div>
              </div>
              <div className="col s1 m2 l2 no-margin">
                <div className="col s6 m6 l6 push-l2 ">
                <i onClick={TSRemove}className="material-symbols-outlined remove_circle-red hover-hand">do_not_disturb_on</i>
                 <i onClick={TS} className="material-symbols-outlined add_circle-red hover-hand">add_circle</i>
                </div>
                <div className="col s6 m6 l6">
                  <div className="display-box-production-register z-depth-1 background-grey input-field">
                    <input value={TSdeterioroParcial} className="inputfield" type="text" onChange={DeterioroTS} />
                  </div>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-production-register-red z-depth-1">
                  <p className="text-production-register">{TSdeterioroTotal}</p>
                </div>
              </div>
               <div className="col s1 m2 l2 no-margin">
                <div className="col s6 m6 l6 push-l2">
                <i onClick={TSPRemove}className="material-symbols-outlined remove_circle-green hover-hand">do_not_disturb_on</i>
                 <i onClick={TSP} className="material-symbols-outlined add_circle-green hover-hand">add_circle</i>
                </div>
                <div className="col s6 m6 l6 ">
                <div className="display-box-production-register z-depth-1 background-grey input-field">
                    <input value={TSproducidoParcial} className="inputfield" type="text" onChange={producidoTS} />
                  </div>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-production-register-green z-depth-1">
                  <p className="text-production-register">{TSproducidoTotal} </p>
                </div>
              </div>
              {/* <div className="col s1 m1 l1">
                  <p className="title-production-register">&nbsp;</p>
              </div> */}
              <div className="col s1 m2 l2">
                <div className="display-box-production-register z-depth-1">
                  <p className="text-production-register">{solicitadoTS}</p>
                </div>
              </div>
              {/* <div className="col s1 m1 l1">
                  <p className="title-production-register">&nbsp;</p>
              </div> */}
              <div className="col s1 m2 l2">
                <div className="display-box-production-register z-depth-1">
                  <p className="text-production-register">{percentTS}%</p>
                </div>
              </div>
            </div>
          </div>
{/*TAPA INFERIOR */}
          <div className="row">
          <div className="col s12 m12 l12 center-align">
              <div className="col s1 m2 l2">
                <div className="display-box-production-register z-depth-1">
                  <p className="text-production-register">TAPA INFERIOR</p>
                </div>
              </div>
              <div className="col s1 m2 l2 no-margin">
                <div className="col s6 m6 l6 push-l2 ">
                <i onClick={TIRemove} className="material-symbols-outlined remove_circle-red hover-hand">do_not_disturb_on</i>
                 <i onClick={TI} className="material-symbols-outlined add_circle-red hover-hand">add_circle</i>
                </div>
                <div className="col s6 m6 l6">
                  <div className="display-box-production-register z-depth-1 background-grey input-field">
                    <input value={TIdeterioroParcial} className="inputfield" type="text" onChange={DeterioroTI} />
                  </div>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-production-register-red z-depth-1">
                  <p className="text-production-register">{TIdeterioroTotal}</p>
                </div>
              </div>
               <div className="col s1 m2 l2 no-margin">
                <div className="col s6 m6 l6 push-l2">
                <i onClick={TIPRemove}className="material-symbols-outlined remove_circle-green hover-hand">do_not_disturb_on</i>
                 <i onClick={TIP}className="material-symbols-outlined add_circle-green hover-hand">add_circle</i>
                </div>
                <div className="col s6 m6 l6 ">
                <div className="display-box-production-register z-depth-1 background-grey input-field">
                    <input value={TIproducidoParcial} className="inputfield" type="text" onChange={producidoTI} />
                  </div>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-production-register-green z-depth-1">
                  <p className="text-production-register">{TIproducidoTotal}</p>
                </div>
              </div>
              {/* <div className="col s1 m1 l1">
                  <p className="title-production-register">&nbsp;</p>
              </div> */}
              <div className="col s1 m2 l2">
                <div className="display-box-production-register z-depth-1">
                  <p className="text-production-register">{solicitadoTI}</p>
                </div>
              </div>
              {/* <div className="col s1 m1 l1">
                  <p className="title-production-register">&nbsp;</p>
              </div> */}
              <div className="col s1 m2 l2">
                <div className="display-box-production-register z-depth-1">
                  <p className="text-production-register">{percentTI}%</p>
                </div>
              </div>
            </div>
          </div>

 {/* TOTALES VALUES  ---------------------------------------------------------------------------------------- */}

             
             

          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align">

          <div className="col s1 m2 l2">
                  <p className="title-production-register">&nbsp;</p>
              </div>

          <div className="col s1 m1 l1">
              <p className="text-production-register-totales">&nbsp;</p>
          </div>
          <div className="col s1 m2 l2">
                  <div className="display-box-production-register-red z-depth-1 ">
                    <p className="text-production-register-totales">{totalDeterioro}</p>
                </div>
          </div>

          <div className="col s1 m1 l1">
              <p className="text-production-register-totales">&nbsp;</p>
          </div>
          <div className="col s1 m2 l2">
                  <div className="display-box-production-register-green z-depth-1">
                    <p className="text-production-register-totales">{totalProducido}</p>
                  </div>    
          </div>
          <div className="col s1 m2 l2">
                  <div className="display-box-production-register z-depth-1 ">
                    <p className="text-production-register-totales">{totalSolicitado}</p>
                </div>
          </div>
          <div className="col s1 m2 l2">
                  <div className="display-box-production-register z-depth-1 ">
             
                    <p className="text-production-register-totales" name="password">{totalPercent}%</p>
                    
                  </div> 
          </div>
          </div>
          </div>  



{/* TITULOS TOTALES */}

          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align">

          <div className="col s1 m3 l3">
              <p className="title-production-register">&nbsp;</p>
          </div>
          <div className="col s1 m2 l2">
              <p className="text-production-register-totales">DETERIORO TOTAL</p>
          </div>
          <div className="col s1 m1 l1">
              <p className="title-production-register">&nbsp;</p>
          </div>
          <div className="col s1 m2 l2">
              <p className="text-production-register-totales">PRODUCCION TOTAL</p>
          </div>      
          <div className="col s1 m2 l2 ">
                  <p className="text-production-register-totales">CANTIDAD TOTAL</p>
              </div>
          <div className="col s1 m2 l2">
                  <p className="text-production-register-totales">PRODUCIDO TOTAL</p>
              </div>
          </div>
          </div>

          
        <div className="row">
            <div className="col s12 m3 l3">
              <button onClick={handleGoBack} className="btn-small btn-block waves-effect waves-light button-regresar-create-plan z-depth-2" type="button">
                regresar
              </button>
            </div>
            <div className="col s12 m3 l3 right">
              <button onClick={handleSubmit} className="btn-small btn-block waves-effect waves-light button-modoedicion-batch-list z-depth-2" type="submit">
                registrar
              </button>
            </div>
        </div>

       
      </div>
    </>
  );
};
export default Production_Register;
