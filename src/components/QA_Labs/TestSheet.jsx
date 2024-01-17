import Navbar from "../Navbar/Navbar";
import QR from "../../assets/logos/QR.png";
import { ReactComponent as PDFicon } from '../../assets/icons/pdf 35x35.svg';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { testSheetContext } from "../../contexts/TestSheetContext";
import { testSheetSetValuesContext } from "../../contexts/TestSheetSetValuesContext";


const TestSheet = () => {

  // window.localStorage.removeItem("test1")
  // window.localStorage.removeItem("test2")
  // window.localStorage.removeItem("test3")
  // window.localStorage.removeItem("test4")
  // window.localStorage.removeItem("test5")
  // window.localStorage.removeItem("test6")
  // window.localStorage.removeItem("test7")
  // window.localStorage.removeItem("test8")

  const [digital] = useState(true);
  const [ensayo, setEnsayo ] = useState(true);  
  const [calificar, setCalificar] = useState(false);

// const {M1,M2,M3,M4,M5,M6,M7,M8} = useContext(testSheetContext);
const { settingsObject } = useContext(testSheetSetValuesContext);
console.log("testSheetSetValues", settingsObject)

const M1 = (JSON.parse(window.localStorage.getItem("test1")))
const M2 = (JSON.parse(window.localStorage.getItem("test2")))
const M3 = (JSON.parse(window.localStorage.getItem("test3")))
const M4 = (JSON.parse(window.localStorage.getItem("test4")))
const M5 = (JSON.parse(window.localStorage.getItem("test5")))
const M6 = (JSON.parse(window.localStorage.getItem("test6")))
const M7 = (JSON.parse(window.localStorage.getItem("test7")))
const M8 = (JSON.parse(window.localStorage.getItem("test8")))

console.log("M1", M1);
console.log("M2", M2)
console.log("M3", M3)
console.log("M4", M4)
console.log("M5", M5)
console.log("M6", M6)
console.log("M7", M7)
console.log("M8", M8)

const handleCALIFICACION = (values) => {
  if (M1.calificacion === ""){
    M1.calificacion = values.calificacion
    M1.observaciones = values.obs
     window.localStorage.setItem("test1", JSON.stringify(M1));
     window.location.reload();
  } else if (M2.calificacion === ""){
    M2.calificacion = values.calificacion
    M2.observaciones = values.obs
     window.localStorage.setItem("test2", JSON.stringify(M2));
     window.location.reload();
  } else if (M3.calificacion === ""){
    M3.calificacion = values.calificacion
    M3.observaciones = values.obs
     window.localStorage.setItem("test3", JSON.stringify(M3));
  } else if (M4.calificacion === ""){
    M4.calificacion = values.calificacion
    M4.observaciones = values.obs
     window.localStorage.setItem("test4", JSON.stringify(M4));
  } else if (M5.calificacion === ""){
    M5.calificacion = values.calificacion
    M5.observaciones = values.obs
     window.localStorage.setItem("test5", JSON.stringify(M5));
  } else if (M6.calificacion === ""){
    M6.calificacion = values.calificacion
    M5.observaciones = values.obs
     window.localStorage.setItem("test6", JSON.stringify(M6));
  } else if (M7.calificacion === ""){
    M7.calificacion = values.calificacion
    M7.observaciones = values.obs
     window.localStorage.setItem("test7", JSON.stringify(M7));
  } else if (M8.calificacion === ""){
    M8.calificacion = values.calificacion
    M8.observaciones = values.obs
     window.localStorage.setItem("test8", JSON.stringify(M8));
  } 
}
  const validarVALUES = (values) => {
    
    const errors = {};
    const onlyNumbers = /^\d{1,4}(\.\d{1,2})?$/

    if (settingsObject.caracteristicasExteriores.Label1.label && values.at1 === ""){
      errors.at1 = 'Las caracteristicas exteriores deben ser seleccionadas'
    } else if (settingsObject.caracteristicasExteriores.Label2.label && values.at2 === ""){
      errors.at2 = 'Las caracteristicas exteriores deben ser seleccionadas'
    } else if (settingsObject.caracteristicasExteriores.Label3.label && values.at3 === ""){
      errors.at3 = 'Las caracteristicas exteriores deben ser seleccionadas'
    } else if (settingsObject.caracteristicasExteriores.Label4.label && values.at4 === ""){
      errors.at4 = 'Las caracteristicas exteriores deben ser seleccionadas'
    } else if (settingsObject.caracteristicasExteriores.Label5.label && values.at5 === ""){
      errors.at5 = 'Las caracteristicas exteriores deben ser seleccionadas'
    } else if (settingsObject.caracteristicasExteriores.Label6.label && values.at6 === ""){
      errors.at6 = 'Las caracteristicas exteriores deben ser seleccionadas'
    } else if (settingsObject.caracteristicasExteriores.Label7.label && values.at7 === ""){
      errors.at7 = 'Las caracteristicas exteriores deben ser seleccionadas'
    } else if (settingsObject.caracteristicasExteriores.Label8.label && values.at8 === ""){
      errors.at8 = 'Las caracteristicas exteriores deben ser seleccionadas'
    } else if (settingsObject.caracteristicasExteriores.Label9.label && values.at9 === ""){
      errors.at9 = 'Las caracteristicas exteriores deben ser seleccionadas'
    } else if (settingsObject.caracteristicasExteriores.Label10.label && values.at10 === ""){
      errors.at10 = 'Las caracteristicas exteriores deben ser seleccionadas'
    } else if (settingsObject.caracteristicasExteriores.Label11.label && values.at11 === ""){
      errors.at11 = 'Las caracteristicas exteriores deben ser seleccionadas'
    } else if (settingsObject.caracteristicasExteriores.Label12.label && values.at12 === ""){
      errors.at12 = 'Las caracteristicas exteriores deben ser seleccionadas'
    } else if (settingsObject.caracteristicasExteriores.Label13.label && values.at13 === ""){
      errors.at13 = 'Las caracteristicas exteriores deben ser seleccionadas'
    } else if (settingsObject.caracteristicasExteriores.Label14.label && values.at14 === ""){
      errors.at14 = 'Las caracteristicas exteriores deben ser seleccionadas'
    } else if (settingsObject.caracteristicasExteriores.Label15.label && values.at15 === ""){
      errors.at15 = 'Las caracteristicas exteriores deben ser seleccionadas'
    } else if (settingsObject.caracteristicasExteriores.Label16.label && values.at16 === ""){
      errors.at16 = 'Las caracteristicas exteriores deben ser seleccionadas'
    } else if (settingsObject.caracteristicasExteriores.Label17.label && values.at17 === ""){
      errors.at17 = 'Las caracteristicas exteriores deben ser seleccionadas'
    } else if (settingsObject.caracteristicasExteriores.Label18.label && values.at18 === ""){
      errors.at18 = 'Las caracteristicas exteriores deben ser seleccionadas'
    } else if (settingsObject.caracteristicasExteriores.Label19.label && values.at19 === ""){
      errors.at19 = 'Las caracteristicas exteriores deben ser seleccionadas'
    } else if (settingsObject.caracteristicasExteriores.Label20.label && values.at20 === ""){
      errors.at20 = 'Las caracteristicas exteriores deben ser seleccionadas'
    } 

     else if (!values.consumoNominal) {
      errors.consumoNominal='Consumo Nominal Sin Ingresar'
    } else if (values.consumoNominal && !values.consumoNominal.match(onlyNumbers)) {
      errors.consumoNominal='Consumo Nominal con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    } else if (!values.consumoMinimo){
      errors.consumoMinimo = 'Consumo Mínimo Sin Ingresar' 
    } else if (values.consumoMinimo && !values.consumoMinimo.match(onlyNumbers)){
      errors.consumoMinimo = 'Consumo Mínimo con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'

    } else if (!values.potenciaNominal){
      errors.potenciaNominal = 'Potencia Nominal sin Ingresar'
    } else if (values.potenciaNominal && !values.potenciaNominal.match(onlyNumbers)){
      errors.potenciaNominal = 'Potencia Nominal con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    

    } else if (!values.potenciaMinima){
      errors.potenciaMinima = 'Potencia Mínima sin Ingresar'
    } else if (values.potenciaMinima && !values.potenciaMinima.match(onlyNumbers)){
      errors.potenciaMinima = 'Potencia Mínima con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    
    } else if (!values.rendimiento){
      errors.rendimiento = 'Rendimiento sin Ingresar'
    } else if (values.rendimiento && !values.rendimiento.match(onlyNumbers)){
      errors.rendimiento = 'Rendimiento con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'

    } else if (!values.combustionNominal){
      errors.combustionNominal = 'Combustion Nominal sin Ingresar'
    } else if (values.combustionNominal && !values.combustionNominal.match(onlyNumbers)){
      errors.combustionNominal = 'Combustion Nominal con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'  
    } else if (!values.combustionMaxima){
      errors.combustionMaxima = 'Combustion Máxima sin Ingresar'
    } else if (values.combustionMaxima && !values.combustionMaxima.match(onlyNumbers)){
      errors.combustionMaxima = 'Combustion Máxima con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'  
    } else if (!values.combustionDucto){
      errors.combustionDucto = 'Combustion Ducto sin Ingresar'
    } else if (values.combustionDucto && !values.combustionDucto.match(onlyNumbers)){
      errors.combustionDucto = 'Combustion Ducto con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'  
    } else if (!values.combustionViento1m){ 
      errors.combustionViento1m = 'Combustion Viento 1m/s sin Ingresar'
    } else if (values.combustionViento1m && !values.combustionViento1m.match(onlyNumbers)){
      errors.combustionViento1m = 'Combustion Viento 1m/s con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'   
    } else if (!values.combustionViento3m){ 
      errors.combustionViento3m = 'Combustion Viento 3m/s sin Ingresar'
    } else if (values.combustionViento3m && !values.combustionViento3m.match(onlyNumbers)){
      errors.combustionViento3m = 'Combustion Viento 3m/s con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'  
  

    } else if (settingsObject.medicionesComplementarias.MC1.label && values.mc1 === ""){
      errors.mc1 = 'Ingrese valores para mediciones complementarias'
    } else if (settingsObject.medicionesComplementarias.MC2.label && values.mc2 === ""){
      errors.mc2 = 'Ingrese valores para mediciones complementarias'
    } else if (settingsObject.medicionesComplementarias.MC3.label && values.mc3 === ""){
      errors.mc3 = 'Ingrese valores para mediciones complementarias'
    } else if (settingsObject.medicionesComplementarias.MC4.label && values.mc4 === ""){
      errors.mc4 = 'Ingrese valores para mediciones complementarias'
    } else if (settingsObject.medicionesComplementarias.MC5.label && values.mc5 === ""){
      errors.mc5 = 'Ingrese valores para mediciones complementarias'
    } else if (settingsObject.medicionesComplementarias.MC6.label && values.mc62 === ""){
      errors.mc6 = 'Ingrese valores para mediciones complementarias'
    } else if (settingsObject.medicionesComplementarias.MC7.label && values.mc7 === ""){
      errors.mc7 = 'Ingrese valores para mediciones complementarias'
    } else if (settingsObject.medicionesComplementarias.MC8.label && values.mc8 === ""){
      errors.mc8 = 'Ingrese valores para mediciones complementarias'
    } else if (settingsObject.medicionesComplementarias.MC9.label && values.mc9 === ""){
      errors.mc9 = 'Ingrese valores para mediciones complementarias'
    } else if (settingsObject.medicionesComplementarias.MC10.label && values.mc10 === ""){
      errors.mc10 = 'Ingrese valores para mediciones complementarias'
    } else if (settingsObject.medicionesComplementarias.MC11.label && values.mc11 === ""){
      errors.mc11 = 'Ingrese valores para mediciones complementarias'
    } else if (settingsObject.medicionesComplementarias.MC12.label && values.mc12 === ""){
      errors.mc12 = 'Ingrese valores para mediciones complementarias'
    } else if (settingsObject.medicionesComplementarias.MC13.label && values.mc13 === ""){
      errors.mc13 = 'Ingrese valores para mediciones complementarias'
    } else if (settingsObject.medicionesComplementarias.MC14.label && values.mc14 === ""){
      errors.mc14 = 'Ingrese valores para mediciones complementarias'
    } else if (settingsObject.medicionesComplementarias.MC15.label && values.mc15 === ""){
      errors.mc15 = 'Ingrese valores para mediciones complementarias'
    } else if (settingsObject.medicionesComplementarias.MC16.label && values.mc16 === ""){
      errors.mc16 = 'Ingrese valores para mediciones complementarias'
    } else if (settingsObject.medicionesComplementarias.MC17.label && values.mc17 === ""){
      errors.mc17 = 'Ingrese valores para mediciones complementarias'
    } else if (settingsObject.medicionesComplementarias.MC18.label && values.mc18 === ""){
      errors.mc18 = 'Ingrese valores para mediciones complementarias'
    } else if (settingsObject.medicionesComplementarias.MC19.label && values.mc19 === ""){
      errors.mc19 = 'Ingrese valores para mediciones complementarias'
    } else if (settingsObject.medicionesComplementarias.MC20.label && values.mc20 === ""){
      errors.mc20 = 'Ingrese valores para mediciones complementarias'
    }

    else if(digital === true){
 
      if (!values.FA){
      errors.FA = 'FA sin Ingresar'
    } else if (values.FA && !values.FA.match(onlyNumbers)){
      errors.FA = 'FA con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'  
    } else if (!values.PH){
      errors.PH = 'PH sin Ingresar'  
    } else if (values.PH && !values.PH.match(onlyNumbers)){
      errors.PH = 'PH con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'  
    } else if (!values.FH){
      errors.FH = 'FH sin Ingresar'
    } else if (values.FH && !values.FH.match(onlyNumbers)){
      errors.FH = 'FH con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'  
    } else if (!values.PL){
      errors.PL = 'PL sin Ingresar'
    } else if (values.PL && !values.PL.match(onlyNumbers)){
      errors.PL = 'PL con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'  
    } else if (!values.FL){
      errors.FL = 'FL sin Ingresar'
    } else if (values.FL && !values.FL.match(onlyNumbers)){
      errors.FL = 'FL con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'  
    } else if (!values.dh){
      errors.dh = 'dH sin Ingresar'
    } else if (values.dH && !values.dH.match(onlyNumbers)){
      errors.dh = 'dH con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."' 
    } else if (!values.dF){
      errors.dF = 'dF sin Ingresar'
    } else if (values.dF && !values.dF.match(onlyNumbers)){
      errors.dF = 'dF con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."' 
    } 
    // else if (!values.nE){
    //   errors.nE = 'nE sin Ingresar'
    // } else if (!values.nP){
    //   errors.nP = 'nP sin Ingresar'
    // } 
    else if (!values.HC){
      errors.HC = 'HC sin Ingresar'
    } else if (values.HC && !values.HC.match(onlyNumbers)){
      errors.HC = 'HC con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."' 
    } else if (!values.LC){
      errors.LC = 'LC sin Ingresar'
    } else if (values.LC && !values.LC.match(onlyNumbers)){
      errors.LC ='LC con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."' 
    } 
    // else if (!values.FC){
    //   errors.FC = 'FC sin Ingresar'
    // } 

    }

     return errors;
  };
  const validarsn = (values) => {
    const errors = {};
    const re = /^[0-9]{8}[a-zA-Z]{2}$/
    if (!values.nSerie) {
      errors.nSerie = "Campo obligatorio";
    }
    else if (!re.test(values.nSerie)){
      errors.nSerie = "Formato de Número de Serie inválido"
    }
    return errors
  };
  const validarCalificacion = (values) =>{
    const errors = {};
    if (!values.calificacion){
        errors.calificacion='Por favor ingrese Calificación'
    }
    return errors
  }
  const handleSubmitsn = (values) => {
    window.localStorage.removeItem('test1') 
    window.localStorage.removeItem('test2') 
    window.localStorage.removeItem('test3') 
    window.localStorage.removeItem('test4') 
    window.localStorage.removeItem('test5') 
    window.localStorage.removeItem('test6') 
    window.localStorage.removeItem('test7') 
    window.localStorage.removeItem('test8') 
    window.location.reload();
    const nSerie = {nSerie: values.nSerie}
    console.log("NUMERO DE SERIE", nSerie)
  

  };
  const handleSubmitRESULT = (values) => {
    const submitResultObject = {
      caracteristicasExteriores:{
        AT1:(values.at1)? (JSON.parse(values.at1)):values.at1,
        AT2:(values.at2)? (JSON.parse(values.at2)):values.at2,
        AT3:(values.at3)? (JSON.parse(values.at3)):values.at3,
        AT4:(values.at4)? (JSON.parse(values.at4)):values.at4,
        AT5:(values.at5)? (JSON.parse(values.at5)):values.at5,
        AT6:(values.at6)? (JSON.parse(values.at6)):values.at6,
        AT7:(values.at7)? (JSON.parse(values.at7)):values.at7,
        AT8:(values.at8)? (JSON.parse(values.at8)):values.at8,
        AT9:(values.at9)? (JSON.parse(values.at9)):values.at9,
        AT10:(values.at10)? (JSON.parse(values.at10)):values.at10,
        AT11:(values.at11)? (JSON.parse(values.at11)):values.at11,
        AT12:(values.at12)? (JSON.parse(values.at12)):values.at12,
        AT13:(values.at13)? (JSON.parse(values.at13)):values.at13,
        AT14:(values.at14)? (JSON.parse(values.at14)):values.at14,
        AT15:(values.at15)? (JSON.parse(values.at15)):values.at15,
        AT16:(values.at16)? (JSON.parse(values.at16)):values.at16,
        AT17:(values.at17)? (JSON.parse(values.at17)):values.at17,
        AT18:(values.at18)? (JSON.parse(values.at18)):values.at18,
        AT19:(values.at19)? (JSON.parse(values.at19)):values.at19,
        AT20:(values.at20)? (JSON.parse(values.at20)):values.at20,
        },
        parametrosComunes:{
          consumoNominal: {
            resultado: (Number(values.consumoNominal)),
        },
        consumoMinimo: {
            resultado:(Number(values.consumoMinimo)),
        },
        potenciaNominal: {
          resultado: (Number(values.potenciaNominal)),
        },
        potenciaMinima: {
          resultado: (Number(values.potenciaMinima)),
        },
        rendimiento: {
          resultado: (Number(values.rendimiento)),
        },
     
      },
       combustion:{
          combustionNominal: {
            resultado: (Number(values.combustionNominal)),
        },
        combustionMaxima: {
          resultado: (Number(values.combustionMaxima)),
        },
        combustionDucto: {
          resultado: (Number(values.combustionDucto)),
        },
        combustionViento1m: {
          resultado: (Number(values.combustionViento1m)),
        },
        combustionViento3m: {
          resultado: (Number(values.combustionViento3m)),
        },
        },
        medicionesComplementarias:{
          MC1:{
            resultado: (Number(values.mc1)),
          },
          MC2:{
            resultado: (Number(values.mc2)),
          },
          MC3:{
            resultado: (Number(values.mc3)),
          },
          MC4:{
            resultado: (Number(values.mc4)),
          },
          MC5:{
            resultado: (Number(values.mc5)),
          },
          MC6:{
            resultado: (Number(values.mc6)),
          },
          MC7:{
            resultado: (Number(values.mc7)),
          },
          MC8:{
            resultado: (Number(values.mc8)),
          },
          MC9:{
            resultado: (Number(values.mc9)),
          },
          MC10:{
            resultado: (Number(values.mc10)),
          },
          MC11:{
            resultado: (Number(values.mc11)),
          },
          MC12:{
            resultado: (Number(values.mc12)),
          },
          MC13:{
            resultado: (Number(values.mc13)),
          },
          MC14:{
            resultado: (Number(values.mc14)),
          },
          MC15:{
            resultado: (Number(values.mc15)),
          },
          MC16:{
            resultado: (Number(values.mc16)),
          },
          MC17:{
            resultado: (Number(values.mc17)),
          },
          MC18:{
            resultado: (Number(values.mc18)),
          },
          MC19:{
            resultado: (Number(values.mc19)),
          },
          MC20:{
            resultado: (Number(values.mc20)),
          },
      },
        parametrosDigitales:{
          FA: {
            resultado: (Number(values.FA)),
          },
          PH: {
            resultado: (Number(values.PH)),
          },
          FH: {
            resultado: (Number(values.FH)),
        },
          PL: {
            resultado: (Number(values.PL)),
        },
          FL: {
            resultado: (Number(values.FL)),
        },
          dh: {
            resultado: (Number(values.dh)),
        },
          dF: {
            resultado: (Number(values.dF)),
        },
          nE: {
            resultado: (values.nE === "60"? 60 :(values.nE === "0"? 0:"")) ,
          },
            nP: {
              resultado: (values.nP === "1"? 1 : ""),
          },
            HC: {
              resultado: (Number(values.HC)),
          },
            LC: {
              resultado: (Number(values.LC)),
          },
            FC: {
              resultado: (values.FC === "1"? 1 : ""),
          },
        },
        calificacion:'', 
        observaciones:'', 
        
        };
       

        if (M1 === null) {
          window.localStorage.setItem("test1", JSON.stringify(submitResultObject));
          window.location.reload();
         } else if (M2 === null){
          window.localStorage.setItem("test2", JSON.stringify(submitResultObject));
          window.location.reload();
        } else if (M3 === null){
          window.localStorage.setItem("test3", JSON.stringify(submitResultObject));
          window.location.reload();
        } else if (M4 === null){
          window.localStorage.setItem("test4", JSON.stringify(submitResultObject));
          window.location.reload();
        } else if (M5 === null){
          window.localStorage.setItem("test5", JSON.stringify(submitResultObject));
          window.location.reload();
        } else if (M6 === null){
          window.localStorage.setItem("test6", JSON.stringify(submitResultObject));
          window.location.reload();
        } else if (M7 === null){
          window.localStorage.setItem("test7", JSON.stringify(submitResultObject));
          window.location.reload();
        } else if (M8 === null){
          window.localStorage.setItem("test8", JSON.stringify(submitResultObject));
          window.location.reload(); 
        }
        
      }
  const publishSample =(values) => {
    console.log("PUBLISH SAMPLE", M1.calificacion = values.calificacion)
  }    
      const eraseM1 = () => {
        window.localStorage.removeItem('test1') 
        window.location.reload();
      }
      const eraseM2 = () => {
        window.localStorage.removeItem('test2') 
        window.location.reload();
      }
      const eraseM3 = () => {
        window.localStorage.removeItem('test3') 
        window.location.reload();
      }
      const eraseM4 = () => {
        window.localStorage.removeItem('test4') 
        window.location.reload();
      }
      const eraseM5 = () => {
        window.localStorage.removeItem('test5') 
        window.location.reload();
      }
      const eraseM6 = () => {
        window.localStorage.removeItem('test6') 
        window.location.reload();
      }
      const eraseM7 = () => {
        window.localStorage.removeItem('test7') 
        window.location.reload();
      }
      const eraseM8 = () => {
        window.localStorage.removeItem('test8') 
        window.location.reload();
      } 

      useEffect(() => {
        if(M1 && M1.calificacion === ""){
          setCalificar(true)
        } else if(M2 && M2.calificacion === ""){
          setCalificar(true)
        } else if(M3 && M3.calificacion === ""){
          setCalificar(true)
        } else if(M4 && M4.calificacion === ""){
          setCalificar(true)
        } else if(M5 && M5.calificacion === ""){
          setCalificar(true)
        } else if(M6 && M6.calificacion === ""){
          setCalificar(true)
        } else if(M7 && M7.calificacion === ""){
          setCalificar(true)
        } else if(M8 && M8.calificacion === ""){
          setCalificar(true)
        }

      }, []);
   
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

              <p className="font-title-create-plan">Planilla de Ensayo QA</p>
              <p className="font-subtitle-create-plan">Escenee el producto que desea ensayar</p>
              <div className="display-box-fine-tunning-scancode z-depth-1">
                  <Formik initialValues={{ nSerie:''}} 
                  onSubmit={handleSubmitsn}  validate={validarsn} isValidating={false} isSubmitting={false} >
                    <Form>

                  <div className="col s3 m1 l1 ">
                    <button type="submit" className="hover-hand">
                      <i className="material-symbols-outlined qr-input">qr_code_scanner</i>
                    </button>
                  </div>
                  <div className="col s9 m10 push-m1 l10 push-l1 ">
                              <div className="input-field">
                                <label className="label-text-scan" htmlFor="nSerie" >Nº de Serie </label>
                                  <Field name="nSerie" type="text" />
                              <div className="warning-inputs-scan right"><ErrorMessage name="nSerie" /></div>
                              </div>
                  </div>
                    </Form>
                  </Formik>
                </div>
                <p className="display-box-title">Si no dispone de lector, ingrese el Nº de Serie manualmente.</p>
              </div>
            </div>

            <div className="col s11 m11 l4 ">
              <div className="col s12 m5 l6 no-margin pull-l2">
              <p className="font-form-create-plan hide-on-small-only" >&emsp;</p> 
                <p className="font-tunning-black">PLAN Nº: D0105-2023</p>
                <p className="font-tunning-black">LOTE: 1234</p>
                <p className="font-tunning-black">SKU: 1234-4321</p>
                <p className="font-tunning-black">DESCRIPCION: ARM-J26-KLM</p>
              
              </div>
                <div className="col s12 m7 l6 no-margin ">
                <p className="font-form-create-plan">RC:16-062</p>  
                <p className="font-tunning-black">CANTIDAD: 100</p>
                <p className="font-tunning-black">CODIGO DE PAIS: 054 (ARG)</p>
                <p className="font-tunning-black">FECHA DE ENSAYO: 27-07-2023</p>
                <p className="font-tunning-black">USUARIO: NOMBRE APELLIDO</p>
                {/* <p className="font-tunning-black">PLATAFORMA: DIGITAL</p> */}

                </div>

            </div>
        
            <div className="col s1 m1 l1">
              <div className="col l6 right">
                <img className="qr right " src={QR} alt=""></img>
              </div>  
              <div className="row"></div>

              <p className="font-tunning-black">Aprobado</p>
              <div className="reference-state-aprobado"></div>
              <p className="font-tunning-black">A.Observado</p>
              <div className="reference-state-observado"></div>
              <p className="font-tunning-black">Rechazado</p>
              <div className="reference-state-rechazado"></div>
   
            </div>

          </div>
          </div>
        </div>
      

{/* ------------------------Formulario------------------- */}

{/* //TITULOS// */}

       <div className="container">
       <Formik initialValues={{
        at1:'',
        at2:'',
        at3:'',
        at4:'', 
        at5:'',
        at6:'', 
        at7:'', 
        at8:'', 
        at9:'', 
        at10:'', 
        at11:'', 
        at12:'', 
        at13:'', 
        at14:'', 
        at15:'', 
        at16:'', 
        at17:'', 
        at18:'', 
        at19:'', 
        at20:'',  

        consumoNominal:0,
        consumoMinimo:0, 
        potenciaNominal:0,
        potenciaMinima:0,
        rendimiento:0,

        combustionNominal:0, 
        combustionMaxima:0, 
        combustionDucto:0, 
        combustionViento1m:0, 
        combustionViento3m:0, 
        
        mc1:0, 
        mc2:0,
        mc3:0,
        mc4:0,
        mc5:0,
        mc6:0,
        mc7:0,
        mc8:0,
        mc9:0,
        mc10:0,
        mc11:0,
        mc12:0,
        mc13:0,
        mc14:0,
        mc15:0,
        mc16:0,
        mc17:0,
        mc18:0,
        mc19:0,
        mc20:0,
        
        FA:0,
        PH:0, 
        FH:0, 
        PL:0, 
        FL:0, 
        dh:0,
        dF:0,
        nE:'', 
        nP:'', 
        HC:0, 
        LC:0,
        FC:'', 
        
        }} 
          onSubmit={handleSubmitRESULT}  
          validate={validarVALUES} 
          isValidating={false} 
          isSubmitting={false} 
          >
          <Form>
         <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
               <div className="col s1 m1 l4">
                  <p className="display-box-title-ensayo-QA"></p>
              </div>
              <div className="col s1 m1 l8">
                  <p className="display-box-title-ensayo-QA">ENSAYOS REALIZADOS</p>
              </div>
              <div className="col s1 m1 l3">
                  <p className="display-box-title-ensayo-QA left">CARACTERISTICAS CUALITATIVAS</p>
              </div>
              <div className="col s1 m1 l1">
                  <p className="display-box-title-ensayo-QA">RESULTADO</p>
              </div>
              <div className="col s1 m1 l1">
                  <p className="display-box-title-ensayo-QA">M-INICIO</p>
              </div>
              <div className="col s1 m1 l1">
                  <p className="display-box-title-ensayo-QA">M-#2</p>
              </div>
              <div className="col s1 m1 l1">
                  <p className="display-box-title-ensayo-QA">M-#3</p>
              </div>
              <div className="col s1 m1 l1">
                  <p className="display-box-title-ensayo-QA">M-#4</p>
              </div>
              <div className="col s1 m1 l1">
                  <p className="display-box-title-ensayo-QA">M-#5</p>
              </div>
              <div className="col s1 m1 l1">
                  <p className="display-box-title-ensayo-QA">M-#6</p>
              </div>
              <div className="col s1 m1 l1">
                  <p className="display-box-title-ensayo-QA">M-#7</p> 
              </div>
              <div className="col s1 m1 l1">
                  <p className="display-box-title-ensayo-QA">M-#8</p>
              </div>
            </div>
          </div>
          <div className="row row-fix">
          <div className="col l12 center-align no-margin">
            <div className="col l4">
                    <p className="warning-inputs-scan left"><ErrorMessage name="at1"/></p>
                    <p className="warning-inputs-scan left"><ErrorMessage name="at2"/></p>                 
                    <p className="warning-inputs-scan left"><ErrorMessage name="at3"/></p>                
                    <p className="warning-inputs-scan left"><ErrorMessage name="at4"/></p>
                    <p className="warning-inputs-scan left"><ErrorMessage name="at5"/></p>
                    <p className="warning-inputs-scan left"><ErrorMessage name="at6"/></p>
                    <p className="warning-inputs-scan left"><ErrorMessage name="at7"/></p>
                    <p className="warning-inputs-scan left"><ErrorMessage name="at8"/></p>
                    <p className="warning-inputs-scan left"><ErrorMessage name="at9"/></p>
                    <p className="warning-inputs-scan left"><ErrorMessage name="at10"/></p>
                    <p className="warning-inputs-scan left"><ErrorMessage name="at11"/></p>
                    <p className="warning-inputs-scan left"><ErrorMessage name="at12"/></p>
                    <p className="warning-inputs-scan left"><ErrorMessage name="at13"/></p>
                    <p className="warning-inputs-scan left"><ErrorMessage name="at14"/></p>
                    <p className="warning-inputs-scan left"><ErrorMessage name="at15"/></p>
                    <p className="warning-inputs-scan left"><ErrorMessage name="at16"/></p>
                    <p className="warning-inputs-scan left"><ErrorMessage name="at17"/></p>
                    <p className="warning-inputs-scan left"><ErrorMessage name="at18"/></p>
                    <p className="warning-inputs-scan left"><ErrorMessage name="at19"/></p>
                    <p className="warning-inputs-scan left"><ErrorMessage name="at20"/></p>

            </div>
            <div className="col l1">
                  <p className="display-box-title-ensayo-QA">SNº 12345678</p>
            </div>
            <div className="col l1">
                  <p className="display-box-title-ensayo-QA">SNº 12345678</p>
            </div>
            <div className="col l1">
                  <p className="display-box-title-ensayo-QA">SNº 12345678</p>
            </div>
            <div className="col l1">
                  <p className="display-box-title-ensayo-QA">SNº 12345678</p>
            </div>
            <div className="col l1">
                  <p className="display-box-title-ensayo-QA">SNº 12345678</p>
            </div>
            <div className="col l1">
                  <p className="display-box-title-ensayo-QA">SNº 12345678</p>
            </div>
            <div className="col l1">
                  <p className="display-box-title-ensayo-QA">SNº 12345678</p>
            </div>
            <div className="col l1">
                  <p className="display-box-title-ensayo-QA">SNº 12345678</p>
            </div>

          </div>
          </div>

          {/* //CARACTERISTICAS CUALITATIVAS// */}
          
          {settingsObject.caracteristicasExteriores.Label1.label?
          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l3">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">{settingsObject.caracteristicasExteriores.Label1.label}</p>
              </div>
              </div>
              <div className="col s1 m1 l1">
                    <div className="display-box-fine-tunning z-depth-1 valign-wrapper background-light-blue">   
                        <Field as="select" name="at1" disabled={!ensayo} className="browser-default collapsible-header">
                         <option value=""></option>     
                         <option value="true">&nbsp;&nbsp;&nbsp;SI</option>
                         <option value="false">&nbsp;&nbsp;&nbsp;NO</option>
                         <option value="null">&nbsp;&nbsp;&nbsp;NA</option>
                         </Field>               
                    </div>
              </div>
              <div className="col s1 m1 l1">
                    <div className="display-box-fine-tunning z-depth-1 ">  
                        <p className="text-production-register">{M1?.caracteristicasExteriores?.AT1 === true? "SI":M1?.caracteristicasExteriores?.AT1 === false? "NO":M1?.caracteristicasExteriores?.AT1 === null?"NA":null}</p> 
                    </div>
              </div>
              <div className="col s1 m1 l1">
                       <div className="display-box-fine-tunning z-depth-1 ">  
                          <p className="text-production-register">{M2?.caracteristicasExteriores?.AT1 === true? "SI":M2?.caracteristicasExteriores?.AT1 === false? "NO":M2?.caracteristicasExteriores?.AT1 === null?"NA":null}</p> 
                      </div>
                      </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                          <p className="text-production-register">{M3?.caracteristicasExteriores?.AT1 === true? "SI":M3?.caracteristicasExteriores?.AT1 === false? "NO":M3?.caracteristicasExteriores?.AT1 === null?"NA":null}</p> 
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                          <p className="text-production-register">{M4?.caracteristicasExteriores?.AT1 === true? "SI":M4?.caracteristicasExteriores?.AT1 === false? "NO":M4?.caracteristicasExteriores?.AT1 === null?"NA":null}</p> 
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                          <p className="text-production-register">{M5?.caracteristicasExteriores?.AT1 === true? "SI":M5?.caracteristicasExteriores?.AT1 === false? "NO":M5?.caracteristicasExteriores?.AT1 === null?"NA":null}</p> 
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                          <p className="text-production-register">{M6?.caracteristicasExteriores?.AT1 === true? "SI":M6?.caracteristicasExteriores?.AT1 === false? "NO":M6?.caracteristicasExteriores?.AT1 === null?"NA":null}</p> 
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                          <p className="text-production-register">{M7?.caracteristicasExteriores?.AT1 === true? "SI":M7?.caracteristicasExteriores?.AT1 === false? "NO":M7?.caracteristicasExteriores?.AT1 === null?"NA":null}</p> 
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                          <p className="text-production-register">{M8?.caracteristicasExteriores?.AT1 === true? "SI":M8?.caracteristicasExteriores?.AT1 === false? "NO":M8?.caracteristicasExteriores?.AT1 === null?"NA":null}</p> 
                      </div>
              </div>
            </div>
          </div>:null}

          {settingsObject.caracteristicasExteriores.Label2.label?
          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l3">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">{settingsObject.caracteristicasExteriores.Label2.label}</p>
              </div>
              </div>
              <div className="col s1 m1 l1">
                    <div className="display-box-fine-tunning z-depth-1 valign-wrapper background-light-blue">   
                        <Field as="select" name="at2" disabled={!ensayo} className="browser-default collapsible-header">
                         <option value=""></option>     
                         <option value="true">&nbsp;&nbsp;&nbsp;SI</option>
                         <option value="false">&nbsp;&nbsp;&nbsp;NO</option>
                         <option value="null">&nbsp;&nbsp;&nbsp;NA</option>
                         </Field>               
                    </div>
              </div>
              <div className="col s1 m1 l1">
                       <div className="display-box-fine-tunning z-depth-1 ">  
                          <p className="text-production-register">{M1?.caracteristicasExteriores?.AT2 === true? "SI":M1?.caracteristicasExteriores?.AT2 === false? "NO":M1?.caracteristicasExteriores?.AT12 === null?"NA":null}</p> 
                      </div>
                      </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                          <p className="text-production-register">{M2?.caracteristicasExteriores?.AT2 === true? "SI":M2?.caracteristicasExteriores?.AT2 === false? "NO":M2?.caracteristicasExteriores?.AT2 === null?"NA":null}</p> 
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                          <p className="text-production-register">{M3?.caracteristicasExteriores?.AT2 === true? "SI":M3?.caracteristicasExteriores?.AT2 === false? "NO":M3?.caracteristicasExteriores?.AT2 === null?"NA":null}</p> 
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                          <p className="text-production-register">{M4?.caracteristicasExteriores?.AT2 === true? "SI":M4?.caracteristicasExteriores?.AT2 === false? "NO":M4?.caracteristicasExteriores?.AT2 === null?"NA":null}</p> 
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                          <p className="text-production-register">{M5?.caracteristicasExteriores?.AT2 === true? "SI":M5?.caracteristicasExteriores?.AT2 === false? "NO":M5?.caracteristicasExteriores?.AT2 === null?"NA":null}</p> 
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                          <p className="text-production-register">{M6?.caracteristicasExteriores?.AT2 === true? "SI":M6?.caracteristicasExteriores?.AT2 === false? "NO":M6?.caracteristicasExteriores?.AT2 === null?"NA":null}</p> 
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                          <p className="text-production-register">{M7?.caracteristicasExteriores?.AT2 === true? "SI":M7?.caracteristicasExteriores?.AT2 === false? "NO":M7?.caracteristicasExteriores?.AT2 === null?"NA":null}</p> 
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                          <p className="text-production-register">{M8?.caracteristicasExteriores?.AT2 === true? "SI":M8?.caracteristicasExteriores?.AT2 === false? "NO":M8?.caracteristicasExteriores?.AT2 === null?"NA":null}</p> 
                      </div>
              </div>   
            </div>
          </div>:null}

          {settingsObject.caracteristicasExteriores.Label3.label?
          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l3">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">{settingsObject.caracteristicasExteriores.Label3.label}</p>
              </div>
              </div>
              <div className="col s1 m1 l1">
                    <div className="display-box-fine-tunning z-depth-1 valign-wrapper background-light-blue">   
                        <Field as="select" name="at3" disabled={!ensayo} className="browser-default collapsible-header">
                         <option value=""></option>     
                         <option value="true">&nbsp;&nbsp;&nbsp;SI</option>
                         <option value="false">&nbsp;&nbsp;&nbsp;NO</option>
                         <option value="null">&nbsp;&nbsp;&nbsp;NA</option>
                         </Field>               
                    </div>
              </div>
              <div className="col s1 m1 l1">
                       <div className="display-box-fine-tunning z-depth-1 ">  
                          <p className="text-production-register">{M1?.caracteristicasExteriores?.AT3 === true? "SI":M1?.caracteristicasExteriores?.AT3 === false? "NO":M1?.caracteristicasExteriores?.AT3 === null?"NA":null}</p> 
                      </div>
                      </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                          <p className="text-production-register">{M2?.caracteristicasExteriores?.AT3 === true? "SI":M2?.caracteristicasExteriores?.AT3 === false? "NO":M2?.caracteristicasExteriores?.AT3 === null?"NA":null}</p> 
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                          <p className="text-production-register">{M3?.caracteristicasExteriores?.AT3 === true? "SI":M3?.caracteristicasExteriores?.AT3 === false? "NO":M3?.caracteristicasExteriores?.AT3 === null?"NA":null}</p> 
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                          <p className="text-production-register">{M4?.caracteristicasExteriores?.AT3 === true? "SI":M4?.caracteristicasExteriores?.AT3 === false? "NO":M4?.caracteristicasExteriores?.AT3 === null?"NA":null}</p> 
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                          <p className="text-production-register">{M5?.caracteristicasExteriores?.AT3 === true? "SI":M5?.caracteristicasExteriores?.AT3 === false? "NO":M5?.caracteristicasExteriores?.AT3 === null?"NA":null}</p> 
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                          <p className="text-production-register">{M6?.caracteristicasExteriores?.AT3 === true? "SI":M6?.caracteristicasExteriores?.AT3 === false? "NO":M6?.caracteristicasExteriores?.AT3 === null?"NA":null}</p> 
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                          <p className="text-production-register">{M7?.caracteristicasExteriores?.AT3 === true? "SI":M7?.caracteristicasExteriores?.AT3 === false? "NO":M7?.caracteristicasExteriores?.AT3 === null?"NA":null}</p> 
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                          <p className="text-production-register">{M8?.caracteristicasExteriores?.AT3 === true? "SI":M8?.caracteristicasExteriores?.AT3 === false? "NO":M8?.caracteristicasExteriores?.AT3 === null?"NA":null}</p> 
                      </div>
              </div>
              
            </div>
          </div>:null}

    {settingsObject.caracteristicasExteriores.Label4.label?
          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l3">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">{settingsObject.caracteristicasExteriores.Label4.label}</p>
              </div>
              </div>
              <div className="col s1 m1 l1">
              <div className="display-box-fine-tunning z-depth-1 valign-wrapper background-light-blue">   
                        <Field as="select" name="at4" disabled={!ensayo} className="browser-default collapsible-header">
                         <option value=""></option>     
                         <option value="true">&nbsp;&nbsp;&nbsp;SI</option>
                         <option value="false">&nbsp;&nbsp;&nbsp;NO</option>
                         <option value="null">&nbsp;&nbsp;&nbsp;NA</option>
                         </Field>               
                    </div>
              </div>
              <div className="col s1 m1 l1">
                       <div className="display-box-fine-tunning z-depth-1 ">  
                          <p className="text-production-register">{M1?.caracteristicasExteriores?.AT4 === true? "SI":M1?.caracteristicasExteriores?.AT4 === false? "NO":M1?.caracteristicasExteriores?.AT4 === null?"NA":null}</p> 
                      </div>
                      </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                          <p className="text-production-register">{M2?.caracteristicasExteriores?.AT4 === true? "SI":M2?.caracteristicasExteriores?.AT4 === false? "NO":M2?.caracteristicasExteriores?.AT4 === null?"NA":null}</p> 
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                          <p className="text-production-register">{M3?.caracteristicasExteriores?.AT4 === true? "SI":M3?.caracteristicasExteriores?.AT4 === false? "NO":M3?.caracteristicasExteriores?.AT4 === null?"NA":null}</p> 
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                          <p className="text-production-register">{M4?.caracteristicasExteriores?.AT4 === true? "SI":M4?.caracteristicasExteriores?.AT4 === false? "NO":M4?.caracteristicasExteriores?.AT4 === null?"NA":null}</p> 
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                          <p className="text-production-register">{M5?.caracteristicasExteriores?.AT4 === true? "SI":M5?.caracteristicasExteriores?.AT4 === false? "NO":M5?.caracteristicasExteriores?.AT4 === null?"NA":null}</p> 
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                          <p className="text-production-register">{M6?.caracteristicasExteriores?.AT4 === true? "SI":M6?.caracteristicasExteriores?.AT4 === false? "NO":M6?.caracteristicasExteriores?.AT4 === null?"NA":null}</p> 
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                          <p className="text-production-register">{M7?.caracteristicasExteriores?.AT4 === true? "SI":M7?.caracteristicasExteriores?.AT4 === false? "NO":M7?.caracteristicasExteriores?.AT4 === null?"NA":null}</p> 
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                          <p className="text-production-register">{M8?.caracteristicasExteriores?.AT4 === true? "SI":M8?.caracteristicasExteriores?.AT4 === false? "NO":M8?.caracteristicasExteriores?.AT4 === null?"NA":null}</p> 
                      </div>
              </div>
            </div>
          </div>:null}

          {settingsObject.caracteristicasExteriores.Label5.label?
          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l3">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">{settingsObject.caracteristicasExteriores.Label5.label}</p>
              </div>
              </div>
              <div className="col s1 m1 l1">
              <div className="display-box-fine-tunning z-depth-1 valign-wrapper background-light-blue">   
                        <Field as="select" name="at5" disabled={!ensayo} className="browser-default collapsible-header">
                         <option value=""></option>     
                         <option value="true">&nbsp;&nbsp;&nbsp;SI</option>
                         <option value="false">&nbsp;&nbsp;&nbsp;NO</option>
                         <option value="null">&nbsp;&nbsp;&nbsp;NA</option>
                         </Field>               
                    </div>
              </div>
              <div className="col s1 m1 l1">
                       <div className="display-box-fine-tunning z-depth-1 ">  
                          <p className="text-production-register">{M1?.caracteristicasExteriores?.AT5 === true? "SI":M1?.caracteristicasExteriores?.AT5 === false? "NO":M1?.caracteristicasExteriores?.AT5 === null?"NA":null}</p> 
                      </div>
                      </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                          <p className="text-production-register">{M2?.caracteristicasExteriores?.AT5 === true? "SI":M2?.caracteristicasExteriores?.AT5 === false? "NO":M2?.caracteristicasExteriores?.AT5 === null?"NA":null}</p> 
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                          <p className="text-production-register">{M3?.caracteristicasExteriores?.AT5 === true? "SI":M3?.caracteristicasExteriores?.AT5 === false? "NO":M3?.caracteristicasExteriores?.AT5 === null?"NA":null}</p> 
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                          <p className="text-production-register">{M4?.caracteristicasExteriores?.AT5 === true? "SI":M4?.caracteristicasExteriores?.AT5 === false? "NO":M4?.caracteristicasExteriores?.AT5 === null?"NA":null}</p> 
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                          <p className="text-production-register">{M5?.caracteristicasExteriores?.AT5 === true? "SI":M5?.caracteristicasExteriores?.AT5 === false? "NO":M5?.caracteristicasExteriores?.AT5 === null?"NA":null}</p> 
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                          <p className="text-production-register">{M6?.caracteristicasExteriores?.AT5 === true? "SI":M6?.caracteristicasExteriores?.AT5 === false? "NO":M6?.caracteristicasExteriores?.AT5 === null?"NA":null}</p> 
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                          <p className="text-production-register">{M7?.caracteristicasExteriores?.AT5 === true? "SI":M7?.caracteristicasExteriores?.AT5 === false? "NO":M7?.caracteristicasExteriores?.AT5 === null?"NA":null}</p> 
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                          <p className="text-production-register">{M8?.caracteristicasExteriores?.AT5 === true? "SI":M8?.caracteristicasExteriores?.AT5 === false? "NO":M8?.caracteristicasExteriores?.AT5 === null?"NA":null}</p> 
                      </div>
              </div>
            </div>
          </div>:null}

          {settingsObject.caracteristicasExteriores.Label6.label?
          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l3">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">{settingsObject.caracteristicasExteriores.Label6.label}</p>
              </div>
              </div>
              <div className="col s1 m1 l1">
              <div className="display-box-fine-tunning z-depth-1 valign-wrapper background-light-blue">   
                        <Field as="select" name="at6" disabled={!ensayo} className="browser-default collapsible-header">
                         <option value=""></option>     
                         <option value="true">&nbsp;&nbsp;&nbsp;SI</option>
                         <option value="false">&nbsp;&nbsp;&nbsp;NO</option>
                         <option value="null">&nbsp;&nbsp;&nbsp;NA</option>
                         </Field>               
                    </div>
              </div>
              <div className="col s1 m1 l1">
                       <div className="display-box-fine-tunning z-depth-1 ">  
                          <p className="text-production-register">{M1?.caracteristicasExteriores?.AT6 === true? "SI":M1?.caracteristicasExteriores?.AT6 === false? "NO":M1?.caracteristicasExteriores?.AT6 === null?"NA":null}</p> 
                      </div>
                      </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                          <p className="text-production-register">{M2?.caracteristicasExteriores?.AT6 === true? "SI":M2?.caracteristicasExteriores?.AT6 === false? "NO":M2?.caracteristicasExteriores?.AT6 === null?"NA":null}</p> 
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                          <p className="text-production-register">{M3?.caracteristicasExteriores?.AT6 === true? "SI":M3?.caracteristicasExteriores?.AT6 === false? "NO":M3?.caracteristicasExteriores?.AT6 === null?"NA":null}</p> 
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                          <p className="text-production-register">{M4?.caracteristicasExteriores?.AT6 === true? "SI":M4?.caracteristicasExteriores?.AT6 === false? "NO":M4?.caracteristicasExteriores?.AT6 === null?"NA":null}</p> 
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                          <p className="text-production-register">{M5?.caracteristicasExteriores?.AT6 === true? "SI":M5?.caracteristicasExteriores?.AT6 === false? "NO":M5?.caracteristicasExteriores?.AT6 === null?"NA":null}</p> 
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                          <p className="text-production-register">{M6?.caracteristicasExteriores?.AT6 === true? "SI":M6?.caracteristicasExteriores?.AT6 === false? "NO":M6?.caracteristicasExteriores?.AT6 === null?"NA":null}</p> 
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                          <p className="text-production-register">{M7?.caracteristicasExteriores?.AT6 === true? "SI":M7?.caracteristicasExteriores?.AT6 === false? "NO":M7?.caracteristicasExteriores?.AT6 === null?"NA":null}</p> 
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                          <p className="text-production-register">{M8?.caracteristicasExteriores?.AT6 === true? "SI":M8?.caracteristicasExteriores?.AT6 === false? "NO":M8?.caracteristicasExteriores?.AT6 === null?"NA":null}</p> 
                      </div>
              </div>
            </div>
          </div>:null}

          {settingsObject.caracteristicasExteriores.Label7.label?
          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l3">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">{settingsObject.caracteristicasExteriores.Label7.label}</p>
              </div>
              </div>
              <div className="col s1 m1 l1">
              <div className="display-box-fine-tunning z-depth-1 valign-wrapper background-light-blue">   
                        <Field as="select" name="at7" disabled={!ensayo} className="browser-default collapsible-header">
                         <option value=""></option>     
                         <option value="true">&nbsp;&nbsp;&nbsp;SI</option>
                         <option value="false">&nbsp;&nbsp;&nbsp;NO</option>
                         <option value="null">&nbsp;&nbsp;&nbsp;NA</option>
                         </Field>               
                    </div>
              </div>
              <div className="col s1 m1 l1">
                       <div className="display-box-fine-tunning z-depth-1 ">  
                          <p className="text-production-register">{M1?.caracteristicasExteriores?.AT7 === true? "SI":M1?.caracteristicasExteriores?.AT7 === false? "NO":M1?.caracteristicasExteriores?.AT7 === null?"NA":null}</p> 
                      </div>
                      </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                          <p className="text-production-register">{M2?.caracteristicasExteriores?.AT7 === true? "SI":M2?.caracteristicasExteriores?.AT7 === false? "NO":M2?.caracteristicasExteriores?.AT7 === null?"NA":null}</p> 
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                          <p className="text-production-register">{M3?.caracteristicasExteriores?.AT7 === true? "SI":M3?.caracteristicasExteriores?.AT7 === false? "NO":M3?.caracteristicasExteriores?.AT7 === null?"NA":null}</p> 
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                          <p className="text-production-register">{M4?.caracteristicasExteriores?.AT7 === true? "SI":M4?.caracteristicasExteriores?.AT7 === false? "NO":M4?.caracteristicasExteriores?.AT7 === null?"NA":null}</p> 
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                          <p className="text-production-register">{M5?.caracteristicasExteriores?.AT7 === true? "SI":M5?.caracteristicasExteriores?.AT7 === false? "NO":M5?.caracteristicasExteriores?.AT7 === null?"NA":null}</p> 
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                          <p className="text-production-register">{M6?.caracteristicasExteriores?.AT7 === true? "SI":M6?.caracteristicasExteriores?.AT7 === false? "NO":M6?.caracteristicasExteriores?.AT7 === null?"NA":null}</p> 
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                          <p className="text-production-register">{M7?.caracteristicasExteriores?.AT7 === true? "SI":M7?.caracteristicasExteriores?.AT7 === false? "NO":M7?.caracteristicasExteriores?.AT7 === null?"NA":null}</p> 
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                          <p className="text-production-register">{M8?.caracteristicasExteriores?.AT7 === true? "SI":M8?.caracteristicasExteriores?.AT7 === false? "NO":M8?.caracteristicasExteriores?.AT7 === null?"NA":null}</p> 
                      </div>
              </div>
            </div>
          </div>:null}

          {settingsObject.caracteristicasExteriores.Label8.label?
          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l3">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">{settingsObject.caracteristicasExteriores.Label8.label}</p>
              </div>
              </div>
              <div className="col s1 m1 l1">
              <div className="display-box-fine-tunning z-depth-1 valign-wrapper background-light-blue">   
                        <Field as="select" name="at8" disabled={!ensayo} className="browser-default collapsible-header">
                         <option value=""></option>     
                         <option value="true">&nbsp;&nbsp;&nbsp;SI</option>
                         <option value="false">&nbsp;&nbsp;&nbsp;NO</option>
                         <option value="null">&nbsp;&nbsp;&nbsp;NA</option>
                         </Field>               
                    </div>
              </div>
              <div className="col s1 m1 l1">
                       <div className="display-box-fine-tunning z-depth-1 ">  
                          <p className="text-production-register">{M1?.caracteristicasExteriores?.AT8 === true? "SI":M1?.caracteristicasExteriores?.AT8 === false? "NO":M1?.caracteristicasExteriores?.AT8 === null?"NA":null}</p> 
                      </div>
                      </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                          <p className="text-production-register">{M2?.caracteristicasExteriores?.AT8 === true? "SI":M2?.caracteristicasExteriores?.AT8 === false? "NO":M2?.caracteristicasExteriores?.AT8 === null?"NA":null}</p> 
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                          <p className="text-production-register">{M3?.caracteristicasExteriores?.AT8 === true? "SI":M3?.caracteristicasExteriores?.AT8 === false? "NO":M3?.caracteristicasExteriores?.AT8 === null?"NA":null}</p> 
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                      <p className="text-production-register">{M4?.caracteristicasExteriores?.AT8 === true? "SI":M4?.caracteristicasExteriores?.AT8 === false? "NO":M4?.caracteristicasExteriores?.AT8 === null?"NA":null}</p> 
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                      <p className="text-production-register">{M5?.caracteristicasExteriores?.AT8 === true? "SI":M5?.caracteristicasExteriores?.AT8 === false? "NO":M5?.caracteristicasExteriores?.AT8 === null?"NA":null}</p>  
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                      <p className="text-production-register">{M6?.caracteristicasExteriores?.AT8 === true? "SI":M6?.caracteristicasExteriores?.AT8 === false? "NO":M6?.caracteristicasExteriores?.AT8 === null?"NA":null}</p>  
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                      <p className="text-production-register">{M7?.caracteristicasExteriores?.AT8 === true? "SI":M7?.caracteristicasExteriores?.AT8 === false? "NO":M7?.caracteristicasExteriores?.AT8 === null?"NA":null}</p>  
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                      <p className="text-production-register">{M8?.caracteristicasExteriores?.AT8 === true? "SI":M8?.caracteristicasExteriores?.AT8 === false? "NO":M8?.caracteristicasExteriores?.AT8 === null?"NA":null}</p>   
                      </div>
              </div>
            </div>
          </div>:null}

          {settingsObject.caracteristicasExteriores.Label9.label?
          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l3">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">{settingsObject.caracteristicasExteriores.Label9.label}</p>
              </div>
              </div>
              <div className="col s1 m1 l1">
              <div className="display-box-fine-tunning z-depth-1 valign-wrapper background-light-blue">   
                        <Field as="select" name="at9" disabled={!ensayo} className="browser-default collapsible-header">
                         <option value=""></option>     
                         <option value="true">&nbsp;&nbsp;&nbsp;SI</option>
                         <option value="false">&nbsp;&nbsp;&nbsp;NO</option>
                         <option value="null">&nbsp;&nbsp;&nbsp;NA</option>
                         </Field>               
                    </div>
              </div>
              <div className="col s1 m1 l1">
                       <div className="display-box-fine-tunning z-depth-1 ">  
                          <p className="text-production-register">{M1?.caracteristicasExteriores?.AT9 === true? "SI":M1?.caracteristicasExteriores?.AT9 === false? "NO":M1?.caracteristicasExteriores?.AT9 === null?"NA":null}</p>
                      </div>
                      </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                      <p className="text-production-register">{M2?.caracteristicasExteriores?.AT9 === true? "SI":M2?.caracteristicasExteriores?.AT9 === false? "NO":M2?.caracteristicasExteriores?.AT9 === null?"NA":null}</p>
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                      <p className="text-production-register">{M3?.caracteristicasExteriores?.AT9 === true? "SI":M3?.caracteristicasExteriores?.AT9 === false? "NO":M3?.caracteristicasExteriores?.AT9 === null?"NA":null}</p> 
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                      <p className="text-production-register">{M4?.caracteristicasExteriores?.AT9 === true? "SI":M4?.caracteristicasExteriores?.AT9 === false? "NO":M4?.caracteristicasExteriores?.AT9 === null?"NA":null}</p>
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                      <p className="text-production-register">{M5?.caracteristicasExteriores?.AT9 === true? "SI":M5?.caracteristicasExteriores?.AT9 === false? "NO":M5?.caracteristicasExteriores?.AT9 === null?"NA":null}</p>
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                      <p className="text-production-register">{M6?.caracteristicasExteriores?.AT9 === true? "SI":M6?.caracteristicasExteriores?.AT9 === false? "NO":M6?.caracteristicasExteriores?.AT9 === null?"NA":null}</p>
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                      <p className="text-production-register">{M7?.caracteristicasExteriores?.AT9 === true? "SI":M7?.caracteristicasExteriores?.AT9 === false? "NO":M7?.caracteristicasExteriores?.AT9 === null?"NA":null}</p>
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                      <p className="text-production-register">{M8?.caracteristicasExteriores?.AT9 === true? "SI":M8?.caracteristicasExteriores?.AT9 === false? "NO":M8?.caracteristicasExteriores?.AT9 === null?"NA":null}</p>
                      </div>
              </div>
            </div>
          </div>:null}

          {settingsObject.caracteristicasExteriores.Label10.label?
          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l3">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">{settingsObject.caracteristicasExteriores.Label10.label}</p>
              </div>
              </div>
              <div className="col s1 m1 l1">
              <div className="display-box-fine-tunning z-depth-1 valign-wrapper background-light-blue">   
                        <Field as="select" name="at10" disabled={!ensayo} className="browser-default collapsible-header">
                         <option value=""></option>     
                         <option value="true">&nbsp;&nbsp;&nbsp;SI</option>
                         <option value="false">&nbsp;&nbsp;&nbsp;NO</option>
                         <option value="null">&nbsp;&nbsp;&nbsp;NA</option>
                         </Field>               
                    </div>
              </div>
              <div className="col s1 m1 l1">
                       <div className="display-box-fine-tunning z-depth-1 ">  
                       <p className="text-production-register">{M1?.caracteristicasExteriores?.AT10 === true? "SI":M1?.caracteristicasExteriores?.AT10 === false? "NO":M1?.caracteristicasExteriores?.AT10 === null?"NA":null}</p>
                      </div>
                      </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                      <p className="text-production-register">{M2?.caracteristicasExteriores?.AT10 === true? "SI":M2?.caracteristicasExteriores?.AT10 === false? "NO":M2?.caracteristicasExteriores?.AT10 === null?"NA":null}</p>
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                      <p className="text-production-register">{M3?.caracteristicasExteriores?.AT10 === true? "SI":M3?.caracteristicasExteriores?.AT10 === false? "NO":M3?.caracteristicasExteriores?.AT10 === null?"NA":null}</p>
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                      <p className="text-production-register">{M4?.caracteristicasExteriores?.AT10 === true? "SI":M4?.caracteristicasExteriores?.AT10 === false? "NO":M4?.caracteristicasExteriores?.AT10 === null?"NA":null}</p>
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                      <p className="text-production-register">{M5?.caracteristicasExteriores?.AT10 === true? "SI":M5?.caracteristicasExteriores?.AT10 === false? "NO":M5?.caracteristicasExteriores?.AT10 === null?"NA":null}</p>
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                      <p className="text-production-register">{M6?.caracteristicasExteriores?.AT10 === true? "SI":M6?.caracteristicasExteriores?.AT10 === false? "NO":M6?.caracteristicasExteriores?.AT10 === null?"NA":null}</p>
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                      <p className="text-production-register">{M7?.caracteristicasExteriores?.AT10 === true? "SI":M7?.caracteristicasExteriores?.AT10 === false? "NO":M7?.caracteristicasExteriores?.AT10 === null?"NA":null}</p>
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                      <p className="text-production-register">{M8?.caracteristicasExteriores?.AT10 === true? "SI":M8?.caracteristicasExteriores?.AT10 === false? "NO":M8?.caracteristicasExteriores?.AT10 === null?"NA":null}</p>
                      </div>
              </div>
            </div>
          </div>:null}

          {settingsObject.caracteristicasExteriores.Label11.label?
          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l3">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">{settingsObject.caracteristicasExteriores.Label11.label}</p>
              </div>
              </div>
              <div className="col s1 m1 l1">
              <div className="display-box-fine-tunning z-depth-1 valign-wrapper background-light-blue">   
                        <Field as="select" name="at11" disabled={!ensayo} className="browser-default collapsible-header">
                         <option value=""></option>     
                         <option value="true">&nbsp;&nbsp;&nbsp;SI</option>
                         <option value="false">&nbsp;&nbsp;&nbsp;NO</option>
                         <option value="null">&nbsp;&nbsp;&nbsp;NA</option>
                         </Field>               
                    </div>
              </div>
              <div className="col s1 m1 l1">
                       <div className="display-box-fine-tunning z-depth-1 ">  
                       <p className="text-production-register">{M1?.caracteristicasExteriores?.AT11 === true? "SI":M1?.caracteristicasExteriores?.AT11 === false? "NO":M1?.caracteristicasExteriores?.AT11 === null?"NA":null}</p>
                      </div>
                      </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                      <p className="text-production-register">{M2?.caracteristicasExteriores?.AT11 === true? "SI":M2?.caracteristicasExteriores?.AT11 === false? "NO":M2?.caracteristicasExteriores?.AT11 === null?"NA":null}</p>
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                      <p className="text-production-register">{M3?.caracteristicasExteriores?.AT11 === true? "SI":M3?.caracteristicasExteriores?.AT11 === false? "NO":M3?.caracteristicasExteriores?.AT11 === null?"NA":null}</p>
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                      <p className="text-production-register">{M4?.caracteristicasExteriores?.AT11 === true? "SI":M4?.caracteristicasExteriores?.AT11 === false? "NO":M4?.caracteristicasExteriores?.AT11 === null?"NA":null}</p>
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                      <p className="text-production-register">{M5?.caracteristicasExteriores?.AT11 === true? "SI":M5?.caracteristicasExteriores?.AT11 === false? "NO":M5?.caracteristicasExteriores?.AT11 === null?"NA":null}</p>
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                      <p className="text-production-register">{M6?.caracteristicasExteriores?.AT11 === true? "SI":M6?.caracteristicasExteriores?.AT11 === false? "NO":M6?.caracteristicasExteriores?.AT11 === null?"NA":null}</p>
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                      <p className="text-production-register">{M7?.caracteristicasExteriores?.AT11 === true? "SI":M7?.caracteristicasExteriores?.AT11 === false? "NO":M7?.caracteristicasExteriores?.AT11 === null?"NA":null}</p>
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                      <p className="text-production-register">{M8?.caracteristicasExteriores?.AT11 === true? "SI":M8?.caracteristicasExteriores?.AT11 === false? "NO":M8?.caracteristicasExteriores?.AT11 === null?"NA":null}</p> 
                      </div>
              </div>
            </div>
          </div>:null}
          {settingsObject.caracteristicasExteriores.Label12.label?
          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l3">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">{settingsObject.caracteristicasExteriores.Label12.label}</p>
              </div>
              </div>
              <div className="col s1 m1 l1">
              <div className="display-box-fine-tunning z-depth-1 valign-wrapper background-light-blue">   
                        <Field as="select" name="at12" disabled={!ensayo} className="browser-default collapsible-header">
                         <option value=""></option>     
                         <option value="true">&nbsp;&nbsp;&nbsp;SI</option>
                         <option value="false">&nbsp;&nbsp;&nbsp;NO</option>
                         <option value="null">&nbsp;&nbsp;&nbsp;NA</option>
                         </Field>               
                    </div>
              </div>
              <div className="col s1 m1 l1">
                       <div className="display-box-fine-tunning z-depth-1 ">  
                       <p className="text-production-register">{M1?.caracteristicasExteriores?.AT12 === true? "SI":M1?.caracteristicasExteriores?.AT12 === false? "NO":M1?.caracteristicasExteriores?.AT12 === null?"NA":null}</p>
                      </div>
                      </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                      <p className="text-production-register">{M2?.caracteristicasExteriores?.AT12 === true? "SI":M2?.caracteristicasExteriores?.AT12 === false? "NO":M2?.caracteristicasExteriores?.AT12 === null?"NA":null}</p>
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                      <p className="text-production-register">{M3?.caracteristicasExteriores?.AT12 === true? "SI":M3?.caracteristicasExteriores?.AT12 === false? "NO":M3?.caracteristicasExteriores?.AT12 === null?"NA":null}</p>
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                      <p className="text-production-register">{M4?.caracteristicasExteriores?.AT12 === true? "SI":M4?.caracteristicasExteriores?.AT12 === false? "NO":M4?.caracteristicasExteriores?.AT12 === null?"NA":null}</p>
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                      <p className="text-production-register">{M5?.caracteristicasExteriores?.AT12 === true? "SI":M5?.caracteristicasExteriores?.AT12 === false? "NO":M5?.caracteristicasExteriores?.AT12 === null?"NA":null}</p>
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                      <p className="text-production-register">{M6?.caracteristicasExteriores?.AT12 === true? "SI":M6?.caracteristicasExteriores?.AT12 === false? "NO":M6?.caracteristicasExteriores?.AT12 === null?"NA":null}</p>
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                      <p className="text-production-register">{M7?.caracteristicasExteriores?.AT12 === true? "SI":M7?.caracteristicasExteriores?.AT12 === false? "NO":M7?.caracteristicasExteriores?.AT12 === null?"NA":null}</p>
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                      <p className="text-production-register">{M8?.caracteristicasExteriores?.AT12 === true? "SI":M8?.caracteristicasExteriores?.AT12 === false? "NO":M8?.caracteristicasExteriores?.AT12 === null?"NA":null}</p>
                      </div>
              </div>
            </div>
          </div>:null}

          {settingsObject.caracteristicasExteriores.Label13.label?
          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l3">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">{settingsObject.caracteristicasExteriores.Label13.label}</p>
              </div>
              </div>
              <div className="col s1 m1 l1">
              <div className="display-box-fine-tunning z-depth-1 valign-wrapper background-light-blue">   
                        <Field as="select" name="at13" disabled={!ensayo} className="browser-default collapsible-header">
                         <option value=""></option>     
                         <option value="true">&nbsp;&nbsp;&nbsp;SI</option>
                         <option value="false">&nbsp;&nbsp;&nbsp;NO</option>
                         <option value="null">&nbsp;&nbsp;&nbsp;NA</option>
                         </Field>               
                    </div>
              </div>
              <div className="col s1 m1 l1">
                       <div className="display-box-fine-tunning z-depth-1 ">  
                       <p className="text-production-register">{M1?.caracteristicasExteriores?.AT13 === true? "SI":M1?.caracteristicasExteriores?.AT13 === false? "NO":M1?.caracteristicasExteriores?.AT13 === null?"NA":null}</p>
                      </div>
                      </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                      <p className="text-production-register">{M2?.caracteristicasExteriores?.AT13 === true? "SI":M2?.caracteristicasExteriores?.AT13 === false? "NO":M2?.caracteristicasExteriores?.AT13 === null?"NA":null}</p>
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                      <p className="text-production-register">{M3?.caracteristicasExteriores?.AT13 === true? "SI":M3?.caracteristicasExteriores?.AT13 === false? "NO":M3?.caracteristicasExteriores?.AT13 === null?"NA":null}</p>
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                      <p className="text-production-register">{M4?.caracteristicasExteriores?.AT13 === true? "SI":M4?.caracteristicasExteriores?.AT13 === false? "NO":M4?.caracteristicasExteriores?.AT13 === null?"NA":null}</p>
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                      <p className="text-production-register">{M5?.caracteristicasExteriores?.AT13 === true? "SI":M5?.caracteristicasExteriores?.AT13 === false? "NO":M5?.caracteristicasExteriores?.AT13 === null?"NA":null}</p>
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                      <p className="text-production-register">{M6?.caracteristicasExteriores?.AT13 === true? "SI":M6?.caracteristicasExteriores?.AT13 === false? "NO":M6?.caracteristicasExteriores?.AT13 === null?"NA":null}</p>
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                      <p className="text-production-register">{M7?.caracteristicasExteriores?.AT13 === true? "SI":M7?.caracteristicasExteriores?.AT13 === false? "NO":M7?.caracteristicasExteriores?.AT13 === null?"NA":null}</p>
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                      <p className="text-production-register">{M8?.caracteristicasExteriores?.AT13 === true? "SI":M8?.caracteristicasExteriores?.AT13 === false? "NO":M8?.caracteristicasExteriores?.AT13 === null?"NA":null}</p>
                      </div>
              </div>
            </div>
          </div>:null}

          {settingsObject.caracteristicasExteriores.Label14.label?
          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l3">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">{settingsObject.caracteristicasExteriores.Label14.label}</p>
              </div>
              </div>
              <div className="col s1 m1 l1">
              <div className="display-box-fine-tunning z-depth-1 valign-wrapper background-light-blue">   
                        <Field as="select" name="at14" disabled={!ensayo} className="browser-default collapsible-header">
                         <option value=""></option>     
                         <option value="true">&nbsp;&nbsp;&nbsp;SI</option>
                         <option value="false">&nbsp;&nbsp;&nbsp;NO</option>
                         <option value="null">&nbsp;&nbsp;&nbsp;NA</option>
                         </Field>               
                    </div>
              </div>
              <div className="col s1 m1 l1">
                       <div className="display-box-fine-tunning z-depth-1 ">  
                       <p className="text-production-register">{M1?.caracteristicasExteriores?.AT14 === true? "SI":M1?.caracteristicasExteriores?.AT14 === false? "NO":M1?.caracteristicasExteriores?.AT14 === null?"NA":null}</p>
                      </div>
                      </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                      <p className="text-production-register">{M2?.caracteristicasExteriores?.AT14 === true? "SI":M2?.caracteristicasExteriores?.AT14 === false? "NO":M2?.caracteristicasExteriores?.AT14 === null?"NA":null}</p>
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                      <p className="text-production-register">{M3?.caracteristicasExteriores?.AT14 === true? "SI":M3?.caracteristicasExteriores?.AT14 === false? "NO":M3?.caracteristicasExteriores?.AT14 === null?"NA":null}</p>
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                      <p className="text-production-register">{M4?.caracteristicasExteriores?.AT14 === true? "SI":M4?.caracteristicasExteriores?.AT14 === false? "NO":M4?.caracteristicasExteriores?.AT14 === null?"NA":null}</p> 
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                      <p className="text-production-register">{M5?.caracteristicasExteriores?.AT14 === true? "SI":M5?.caracteristicasExteriores?.AT14 === false? "NO":M5?.caracteristicasExteriores?.AT14 === null?"NA":null}</p>
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                      <p className="text-production-register">{M6?.caracteristicasExteriores?.AT14 === true? "SI":M6?.caracteristicasExteriores?.AT14 === false? "NO":M6?.caracteristicasExteriores?.AT14 === null?"NA":null}</p> 
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                      <p className="text-production-register">{M7?.caracteristicasExteriores?.AT14 === true? "SI":M7?.caracteristicasExteriores?.AT14 === false? "NO":M7?.caracteristicasExteriores?.AT14 === null?"NA":null}</p>
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                      <p className="text-production-register">{M8?.caracteristicasExteriores?.AT14 === true? "SI":M8?.caracteristicasExteriores?.AT14 === false? "NO":M8?.caracteristicasExteriores?.AT14 === null?"NA":null}</p>
                      </div>
              </div>
            </div>
          </div>:null}
          {settingsObject.caracteristicasExteriores.Label15.label?
          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l3">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">{settingsObject.caracteristicasExteriores.Label15.label}</p>
              </div>
              </div>
              <div className="col s1 m1 l1">
              <div className="display-box-fine-tunning z-depth-1 valign-wrapper background-light-blue">   
                        <Field as="select" name="at15" disabled={!ensayo} className="browser-default collapsible-header">
                         <option value=""></option>     
                         <option value="true">&nbsp;&nbsp;&nbsp;SI</option>
                         <option value="false">&nbsp;&nbsp;&nbsp;NO</option>
                         <option value="null">&nbsp;&nbsp;&nbsp;NA</option>
                         </Field>               
                    </div>
              </div>
              <div className="col s1 m1 l1">
                       <div className="display-box-fine-tunning z-depth-1 ">  
                       <p className="text-production-register">{M1?.caracteristicasExteriores?.AT15 === true? "SI":M1?.caracteristicasExteriores?.AT15 === false? "NO":M1?.caracteristicasExteriores?.AT15 === null?"NA":null}</p> 
                      </div>
                      </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                      <p className="text-production-register">{M2?.caracteristicasExteriores?.AT15 === true? "SI":M2?.caracteristicasExteriores?.AT15 === false? "NO":M2?.caracteristicasExteriores?.AT15 === null?"NA":null}</p> 
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                      <p className="text-production-register">{M3?.caracteristicasExteriores?.AT15 === true? "SI":M3?.caracteristicasExteriores?.AT15 === false? "NO":M3?.caracteristicasExteriores?.AT15 === null?"NA":null}</p>  
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                      <p className="text-production-register">{M4?.caracteristicasExteriores?.AT15 === true? "SI":M4?.caracteristicasExteriores?.AT15 === false? "NO":M4?.caracteristicasExteriores?.AT15 === null?"":null}</p> 
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                      <p className="text-production-register">{M5?.caracteristicasExteriores?.AT15 === true? "SI":M5?.caracteristicasExteriores?.AT15 === false? "NO":M5?.caracteristicasExteriores?.AT15 === null?"NA":null}</p>  
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                      <p className="text-production-register">{M6?.caracteristicasExteriores?.AT15 === true? "SI":M6?.caracteristicasExteriores?.AT15 === false? "NO":M6?.caracteristicasExteriores?.AT15 === null?"NA":null}</p> 
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                      <p className="text-production-register">{M7?.caracteristicasExteriores?.AT15 === true? "SI":M7?.caracteristicasExteriores?.AT15 === false? "NO":M7?.caracteristicasExteriores?.AT15 === null?"NA":null}</p> 
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                      <p className="text-production-register">{M8?.caracteristicasExteriores?.AT15 === true? "SI":M8?.caracteristicasExteriores?.AT15 === false? "NO":M8?.caracteristicasExteriores?.AT15 === null?"NA":null}</p>  
                      </div>
              </div>
            </div>
          </div>:null}
          {settingsObject.caracteristicasExteriores.Label16.label?
          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l3">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">{settingsObject.caracteristicasExteriores.Label16.label}</p>
              </div>
              </div>
              <div className="col s1 m1 l1">
              <div className="display-box-fine-tunning z-depth-1 valign-wrapper background-light-blue">   
                        <Field as="select" name="at16" disabled={!ensayo} className="browser-default collapsible-header">
                         <option value=""></option>     
                         <option value="true">&nbsp;&nbsp;&nbsp;SI</option>
                         <option value="false">&nbsp;&nbsp;&nbsp;NO</option>
                         <option value="null">&nbsp;&nbsp;&nbsp;NA</option>
                         </Field>               
                    </div>
              </div>
              <div className="col s1 m1 l1">
                       <div className="display-box-fine-tunning z-depth-1 ">  
                       <p className="text-production-register">{M1?.caracteristicasExteriores?.AT16 === true? "SI":M1?.caracteristicasExteriores?.AT16 === false? "NO":M1?.caracteristicasExteriores?.AT16 === null?"NA":null}</p> 
                      </div>
                      </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                      <p className="text-production-register">{M2?.caracteristicasExteriores?.AT16 === true? "SI":M2?.caracteristicasExteriores?.AT16 === false? "NO":M2?.caracteristicasExteriores?.AT16 === null?"NA":null}</p>  
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                      <p className="text-production-register">{M3?.caracteristicasExteriores?.AT16 === true? "SI":M3?.caracteristicasExteriores?.AT16 === false? "NO":M3?.caracteristicasExteriores?.AT16 === null?"NA":null}</p> 
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                      <p className="text-production-register">{M4?.caracteristicasExteriores?.AT16 === true? "SI":M4?.caracteristicasExteriores?.AT16 === false? "NO":M4?.caracteristicasExteriores?.AT16 === null?"NA":null}</p> 
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                      <p className="text-production-register">{M5?.caracteristicasExteriores?.AT16 === true? "SI":M5?.caracteristicasExteriores?.AT16 === false? "NO":M5?.caracteristicasExteriores?.AT16 === null?"NA":null}</p> 
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                      <p className="text-production-register">{M6?.caracteristicasExteriores?.AT16 === true? "SI":M6?.caracteristicasExteriores?.AT16 === false? "NO":M6?.caracteristicasExteriores?.AT16 === null?"NA":null}</p> 
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                      <p className="text-production-register">{M7?.caracteristicasExteriores?.AT16 === true? "SI":M7?.caracteristicasExteriores?.AT16 === false? "NO":M7?.caracteristicasExteriores?.AT16 === null?"NA":null}</p> 
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                      <p className="text-production-register">{M8?.caracteristicasExteriores?.AT16 === true? "SI":M8?.caracteristicasExteriores?.AT16 === false? "NO":M8?.caracteristicasExteriores?.AT16 === null?"NA":null}</p> 
                      </div>
              </div>
            </div>
          </div>:null}
          {settingsObject.caracteristicasExteriores.Label17.label?
          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l3">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">{settingsObject.caracteristicasExteriores.Label17.label}</p>
              </div>
              </div>
              <div className="col s1 m1 l1">
              <div className="display-box-fine-tunning z-depth-1 valign-wrapper background-light-blue">   
                        <Field as="select" name="at17" disabled={!ensayo} className="browser-default collapsible-header">
                         <option value=""></option>     
                         <option value="true">&nbsp;&nbsp;&nbsp;SI</option>
                         <option value="false">&nbsp;&nbsp;&nbsp;NO</option>
                         <option value="null">&nbsp;&nbsp;&nbsp;NA</option>
                         </Field>               
                    </div>
              </div>
              <div className="col s1 m1 l1">
                       <div className="display-box-fine-tunning z-depth-1 ">  
                       <p className="text-production-register">{M1?.caracteristicasExteriores?.AT17 === true? "SI":M1?.caracteristicasExteriores?.AT17 === false? "NO":M1?.caracteristicasExteriores?.AT17 === null?"NA":null}</p> 
                      </div>
                      </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                      <p className="text-production-register">{M2?.caracteristicasExteriores?.AT17 === true? "SI":M2?.caracteristicasExteriores?.AT17 === false? "NO":M2?.caracteristicasExteriores?.AT17 === null?"NA":null}</p>
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                      <p className="text-production-register">{M3?.caracteristicasExteriores?.AT17 === true? "SI":M3?.caracteristicasExteriores?.AT17 === false? "NO":M3?.caracteristicasExteriores?.AT17 === null?"NA":null}</p> 
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                      <p className="text-production-register">{M4?.caracteristicasExteriores?.AT17 === true? "SI":M4?.caracteristicasExteriores?.AT17 === false? "NO":M4?.caracteristicasExteriores?.AT17 === null?"NA":null}</p> 
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                      <p className="text-production-register">{M5?.caracteristicasExteriores?.AT17 === true? "SI":M5?.caracteristicasExteriores?.AT17 === false? "NO":M5?.caracteristicasExteriores?.AT17 === null?"NA":null}</p> 
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                      <p className="text-production-register">{M6?.caracteristicasExteriores?.AT17 === true? "SI":M6?.caracteristicasExteriores?.AT17 === false? "NO":M6?.caracteristicasExteriores?.AT17 === null?"NA":null}</p> 
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                      <p className="text-production-register">{M7?.caracteristicasExteriores?.AT17 === true? "SI":M7?.caracteristicasExteriores?.AT17 === false? "NO":M7?.caracteristicasExteriores?.AT17 === null?"NA":null}</p>  
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                      <p className="text-production-register">{M8?.caracteristicasExteriores?.AT17 === true? "SI":M8?.caracteristicasExteriores?.AT17 === false? "NO":M8?.caracteristicasExteriores?.AT17 === null?"NA":null}</p>  
                      </div>
              </div>
            </div>
          </div>:null}
          {settingsObject.caracteristicasExteriores.Label18.label?
          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l3">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">{settingsObject.caracteristicasExteriores.Label18.label}</p>
              </div>
              </div>
              <div className="col s1 m1 l1">
              <div className="display-box-fine-tunning z-depth-1 valign-wrapper background-light-blue">   
                        <Field as="select" name="at18" disabled={!ensayo} className="browser-default collapsible-header">
                         <option value=""></option>     
                         <option value="true">&nbsp;&nbsp;&nbsp;SI</option>
                         <option value="false">&nbsp;&nbsp;&nbsp;NO</option>
                         <option value="null">&nbsp;&nbsp;&nbsp;NA</option>
                         </Field>               
                    </div>
              </div>
              <div className="col s1 m1 l1">
                       <div className="display-box-fine-tunning z-depth-1 ">  
                       <p className="text-production-register">{M1?.caracteristicasExteriores?.AT18 === true? "SI":M1?.caracteristicasExteriores?.AT18 === false? "NO":M1?.caracteristicasExteriores?.AT18 === null?"NA":null}</p> 
                      </div>
                      </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                      <p className="text-production-register">{M2?.caracteristicasExteriores?.AT18 === true? "SI":M2?.caracteristicasExteriores?.AT18 === false? "NO":M2?.caracteristicasExteriores?.AT18 === null?"NA":null}</p> 
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                      <p className="text-production-register">{M3?.caracteristicasExteriores?.AT18 === true? "SI":M3?.caracteristicasExteriores?.AT18 === false? "NO":M3?.caracteristicasExteriores?.AT18 === null?"NA":null}</p>  
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                      <p className="text-production-register">{M4?.caracteristicasExteriores?.AT18 === true? "SI":M4?.caracteristicasExteriores?.AT18 === false? "NO":M4?.caracteristicasExteriores?.AT18 === null?"NA":null}</p> 
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                      <p className="text-production-register">{M5?.caracteristicasExteriores?.AT18 === true? "SI":M5?.caracteristicasExteriores?.AT18 === false? "NO":M5?.caracteristicasExteriores?.AT18 === null?"NA":null}</p> 
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                      <p className="text-production-register">{M6?.caracteristicasExteriores?.AT18 === true? "SI":M6?.caracteristicasExteriores?.AT18 === false? "NO":M6?.caracteristicasExteriores?.AT18 === null?"NA":null}</p> 
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                      <p className="text-production-register">{M7?.caracteristicasExteriores?.AT18 === true? "SI":M7?.caracteristicasExteriores?.AT18 === false? "NO":M7?.caracteristicasExteriores?.AT18 === null?"NA":null}</p> 
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                      <p className="text-production-register">{M8?.caracteristicasExteriores?.AT18 === true? "SI":M8?.caracteristicasExteriores?.AT18 === false? "NO":M8?.caracteristicasExteriores?.AT18 === null?"NA":null}</p> 
                      </div>
              </div>
            </div>
          </div>:null}
          {settingsObject.caracteristicasExteriores.Label19.label?
          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l3">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">{settingsObject.caracteristicasExteriores.Label19.label}</p>
              </div>
              </div>
              <div className="col s1 m1 l1">
              <div className="display-box-fine-tunning z-depth-1 valign-wrapper background-light-blue">   
                        <Field as="select" name="at19" disabled={!ensayo} className="browser-default collapsible-header">
                         <option value=""></option>     
                         <option value="true">&nbsp;&nbsp;&nbsp;SI</option>
                         <option value="false">&nbsp;&nbsp;&nbsp;NO</option>
                         <option value="null">&nbsp;&nbsp;&nbsp;NA</option>
                         </Field>               
                    </div>
              </div>
              <div className="col s1 m1 l1">
                       <div className="display-box-fine-tunning z-depth-1 ">  
                       <p className="text-production-register">{M1?.caracteristicasExteriores?.AT19 === true? "SI":M1?.caracteristicasExteriores?.AT19 === false? "NO":M1?.caracteristicasExteriores?.AT19 === null?"NA":null}</p> 
                      </div>
                      </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                      <p className="text-production-register">{M2?.caracteristicasExteriores?.AT19 === true? "SI":M2?.caracteristicasExteriores?.AT19 === false? "NO":M2?.caracteristicasExteriores?.AT19 === null?"NA":null}</p> 
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                      <p className="text-production-register">{M3?.caracteristicasExteriores?.AT19 === true? "SI":M3?.caracteristicasExteriores?.AT19 === false? "NO":M3?.caracteristicasExteriores?.AT19 === null?"NA":null}</p> 
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                      <p className="text-production-register">{M4?.caracteristicasExteriores?.AT19 === true? "SI":M4?.caracteristicasExteriores?.AT19 === false? "NO":M4?.caracteristicasExteriores?.AT19 === null?"NA":null}</p>  
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                      <p className="text-production-register">{M5?.caracteristicasExteriores?.AT19 === true? "SI":M5?.caracteristicasExteriores?.AT19 === false? "NO":M5?.caracteristicasExteriores?.AT19 === null?"NA":null}</p> 
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                      <p className="text-production-register">{M6?.caracteristicasExteriores?.AT19 === true? "SI":M6?.caracteristicasExteriores?.AT19 === false? "NO":M6?.caracteristicasExteriores?.AT19 === null?"NA":null}</p> 
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                      <p className="text-production-register">{M7?.caracteristicasExteriores?.AT19 === true? "SI":M7?.caracteristicasExteriores?.AT19 === false? "NO":M7?.caracteristicasExteriores?.AT19 === null?"NA":null}</p> 
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                      <p className="text-production-register">{M8?.caracteristicasExteriores?.AT19 === true? "SI":M8?.caracteristicasExteriores?.AT19 === false? "NO":M8?.caracteristicasExteriores?.AT19 === null?"NA":null}</p> 
                      </div>
              </div>
            </div>
          </div>:null}
          {settingsObject.caracteristicasExteriores.Label20.label?
          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l3">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">{settingsObject.caracteristicasExteriores.Label20.label}</p>
              </div>
              </div>
              <div className="col s1 m1 l1">
              <div className="display-box-fine-tunning z-depth-1 valign-wrapper background-light-blue">   
                        <Field as="select" name="at20" disabled={!ensayo} className="browser-default collapsible-header">
                         <option value=""></option>     
                         <option value="true">&nbsp;&nbsp;&nbsp;SI</option>
                         <option value="false">&nbsp;&nbsp;&nbsp;NO</option>
                         <option value="null">&nbsp;&nbsp;&nbsp;NA</option>
                         </Field>               
                    </div>
              </div>
              <div className="col s1 m1 l1">
                       <div className="display-box-fine-tunning z-depth-1 ">  
                       <p className="text-production-register">{M1?.caracteristicasExteriores?.AT20 === true? "SI":M1?.caracteristicasExteriores?.AT20 === false? "NO":M1?.caracteristicasExteriores?.AT20 === null?"NA":null}</p> 
                      </div>
                      </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                      <p className="text-production-register">{M2?.caracteristicasExteriores?.AT20 === true? "SI":M2?.caracteristicasExteriores?.AT20 === false? "NO":M2?.caracteristicasExteriores?.AT20 === null?"NA":null}</p> 
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                      <p className="text-production-register">{M3?.caracteristicasExteriores?.AT20 === true? "SI":M3?.caracteristicasExteriores?.AT20 === false? "NO":M3?.caracteristicasExteriores?.AT20 === null?"NA":null}</p> 
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                      <p className="text-production-register">{M4?.caracteristicasExteriores?.AT20 === true? "SI":M4?.caracteristicasExteriores?.AT20 === false? "NO":M4?.caracteristicasExteriores?.AT20 === null?"NA":null}</p> 
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                      <p className="text-production-register">{M5?.caracteristicasExteriores?.AT20 === true? "SI":M5?.caracteristicasExteriores?.AT20 === false? "NO":M5?.caracteristicasExteriores?.AT20 === null?"NA":null}</p> 
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                      <p className="text-production-register">{M6?.caracteristicasExteriores?.AT20 === true? "SI":M6?.caracteristicasExteriores?.AT20 === false? "NO":M6?.caracteristicasExteriores?.AT20 === null?"NA":null}</p> 
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                      <p className="text-production-register">{M7?.caracteristicasExteriores?.AT20 === true? "SI":M7?.caracteristicasExteriores?.AT20 === false? "NO":M7?.caracteristicasExteriores?.AT20 === null?"NA":null}</p> 
                      </div>
              </div>
              <div className="col s1 m1 l1">
                      <div className="display-box-fine-tunning z-depth-1 ">  
                      <p className="text-production-register">{M8?.caracteristicasExteriores?.AT20 === true? "SI":M8?.caracteristicasExteriores?.AT20 === false? "NO":M8?.caracteristicasExteriores?.AT20 === null?"NA":null}</p>  
                      </div>
              </div>
            </div>
          </div>:null}

          <div className="row"></div>
          <div className="row row-fix ">
          <div className="col s12 m12 l12 no-margin center">
              <div className="col l12">
                  <p className="display-box-title-ensayo-QA left">VALORES DECLARADOS</p>
              </div>
              <div className="col l12">
                    <div className="warning-inputs-scan left"><ErrorMessage name="consumoNominal"/></div>
                    <div className="warning-inputs-scan left"><ErrorMessage name="consumoMinimo"/></div>                 
                    <div className="warning-inputs-scan left"><ErrorMessage name="potenciaNominal"/></div>                                            
                    <div className="warning-inputs-scan left"><ErrorMessage name="potenciaMinima"/></div>
                    <div className="warning-inputs-scan left"><ErrorMessage name="rendimiento"/></div>
              </div>
            
            </div>
          </div>

          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l3">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">Consumo Nominal (± 5%)</p>
              </div>
              </div>
              <div className="col s1 m1 l1 ">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue input-field-fine-tunning">
                <Field name="consumoNominal" disabled={!ensayo} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M1?.parametrosComunes?.consumoNominal?.resultado? M1.parametrosComunes.consumoNominal.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M2?.parametrosComunes?.consumoNominal?.resultado? M2.parametrosComunes.consumoNominal.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M3?.parametrosComunes?.consumoNominal?.resultado? M3.parametrosComunes.consumoNominal.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M4?.parametrosComunes?.consumoNominal?.resultado? M4.parametrosComunes.consumoNominal.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M5?.parametrosComunes?.consumoNominal?.resultado? M5.parametrosComunes.consumoNominal.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M6?.parametrosComunes?.consumoNominal?.resultado? M6.parametrosComunes.consumoNominal.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M7?.parametrosComunes?.consumoNominal?.resultado? M7.parametrosComunes.consumoNominal.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M8?.parametrosComunes?.consumoNominal?.resultado? M8.parametrosComunes.consumoNominal.resultado: ""}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l3">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">Consumo Mínimo (± 5%)</p>
              </div>
              </div>
              <div className="col s1 m1 l1 ">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue input-field-fine-tunning">
                <Field name="consumoMinimo" disabled={!ensayo} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M1?.parametrosComunes?.consumoMinimo?.resultado? M1.parametrosComunes.consumoMinimo.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M2?.parametrosComunes?.consumoMinimo?.resultado? M2.parametrosComunes.consumoMinimo.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M3?.parametrosComunes?.consumoMinimo?.resultado? M3.parametrosComunes.consumoMinimo.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M4?.parametrosComunes?.consumoMinimo?.resultado? M4.parametrosComunes.consumoMinimo.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M5?.parametrosComunes?.consumoMinimo?.resultado? M5.parametrosComunes.consumoMinimo.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M6?.parametrosComunes?.consumoMinimo?.resultado? M6.parametrosComunes.consumoMinimo.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M7?.parametrosComunes?.consumoMinimo?.resultado? M7.parametrosComunes.consumoMinimo.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M8?.parametrosComunes?.consumoMinimo?.resultado? M8.parametrosComunes.consumoMinimo.resultado: ""}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l3">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">Potencia Nominal (± 5%)</p>
              </div>
              </div>
              <div className="col s1 m1 l1 ">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue input-field-fine-tunning">
                <Field name="potenciaNominal" disabled={!ensayo} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>
        

            

              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M1?.parametrosComunes?.potenciaNominal?.resultado? M1.parametrosComunes.potenciaNominal.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M2?.parametrosComunes?.potenciaNominal?.resultado? M2.parametrosComunes.potenciaNominal.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M3?.parametrosComunes?.potenciaNominal?.resultado? M3.parametrosComunes.potenciaNominal.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M4?.parametrosComunes?.potenciaNominal?.resultado? M4.parametrosComunes.potenciaNominal.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M5?.parametrosComunes?.potenciaNominal?.resultado? M5.parametrosComunes.potenciaNominal.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M6?.parametrosComunes?.potenciaNominal?.resultado? M6.parametrosComunes.potenciaNominal.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M7?.parametrosComunes?.potenciaNominal?.resultado? M7.parametrosComunes.potenciaNominal.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M8?.parametrosComunes?.potenciaNominal?.resultado? M8.parametrosComunes.potenciaNominal.resultado: ""}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l3">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">Potencia Mínima (± 5%)</p>
              </div>
              </div>
              <div className="col s1 m1 l1 ">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue input-field-fine-tunning">
                <Field name="potenciaMinima" disabled={!ensayo} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M1?.parametrosComunes?.potenciaMinima?.resultado? M1.parametrosComunes.potenciaMinima.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M2?.parametrosComunes?.potenciaMinima?.resultado? M2.parametrosComunes.potenciaMinima.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M3?.parametrosComunes?.potenciaMinima?.resultado? M3.parametrosComunes.potenciaMinima.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M4?.parametrosComunes?.potenciaMinima?.resultado? M4.parametrosComunes.potenciaMinima.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M5?.parametrosComunes?.potenciaMinima?.resultado? M5.parametrosComunes.potenciaMinima.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M6?.parametrosComunes?.potenciaMinima?.resultado? M6.parametrosComunes.potenciaMinima.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M7?.parametrosComunes?.potenciaMinima?.resultado? M7.parametrosComunes.potenciaMinima.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M8?.parametrosComunes?.potenciaMinima?.resultado? M8.parametrosComunes.potenciaMinima.resultado: ""}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l3">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">Rendimiento (± 5%)</p>
              </div>
              </div>
              <div className="col s1 m1 l1 ">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue input-field-fine-tunning">
                <Field name="rendimiento" disabled={!ensayo} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M1?.parametrosComunes?.rendimiento?.resultado? M1.parametrosComunes.rendimiento.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M2?.parametrosComunes?.rendimiento?.resultado? M2.parametrosComunes.rendimiento.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M3?.parametrosComunes?.rendimiento?.resultado? M3.parametrosComunes.rendimiento.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M4?.parametrosComunes?.rendimiento?.resultado? M4.parametrosComunes.rendimiento.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M5?.parametrosComunes?.rendimiento?.resultado? M5.parametrosComunes.rendimiento.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M6?.parametrosComunes?.rendimiento?.resultado? M6.parametrosComunes.rendimiento.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M7?.parametrosComunes?.rendimiento?.resultado? M7.parametrosComunes.rendimiento.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M8?.parametrosComunes?.rendimiento?.resultado? M8.parametrosComunes.rendimiento.resultado: ""}</p>
                </div>
              </div>
            </div>
          </div>


          <div className="row"></div>
          <div className="row row-fix ">
          <div className="col s12 m12 l12 no-margin center">
              <div className="col s1 m1 l12">
                  <p className="display-box-title-ensayo-QA left">COMBUSTION (PPM) </p>
              </div>
              <div className="col s1 m1 l12 ">
                  <div className="warning-inputs-scan left"><ErrorMessage name="combustionNominal"/></div>
                  <div className="warning-inputs-scan left"><ErrorMessage name="combustionMaxima"/></div>
                  <div className="warning-inputs-scan left"><ErrorMessage name="combustionDucto"/></div>
                  <div className="warning-inputs-scan left"><ErrorMessage name="combustionViento1m"/></div>
                  <div className="warning-inputs-scan left"><ErrorMessage name="combustionViento3m"/></div>
            </div>
            </div>
          </div>

          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l3">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">Nominal</p>
              </div>
              </div>
              <div className="col s1 m1 l1 ">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue input-field-fine-tunning">
                <Field name="combustionNominal" disabled={!ensayo} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M1?.combustion?.combustionNominal?.resultado? M1.combustion.combustionNominal.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M2?.combustion?.combustionNominal?.resultado? M2.combustion.combustionNominal.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M3?.combustion?.combustionNominal?.resultado? M3.combustion.combustionNominal.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M4?.combustion?.combustionNominal?.resultado? M4.combustion.combustionNominal.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M5?.combustion?.combustionNominal?.resultado? M5.combustion.combustionNominal.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M6?.combustion?.combustionNominal?.resultado? M6.combustion.combustionNominal.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M7?.combustion?.combustionNominal?.resultado? M7.combustion.combustionNominal.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M8?.combustion?.combustionNominal?.resultado? M8.combustion.combustionNominal.resultado: ""}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l3">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">Máxima</p>
              </div>
              </div>
              <div className="col s1 m1 l1 ">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue input-field-fine-tunning">
                <Field name="combustionMaxima" disabled={!ensayo} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M1?.combustion?.combustionMaxima?.resultado? M1.combustion.combustionMaxima.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M2?.combustion?.combustionMaxima?.resultado? M2.combustion.combustionMaxima.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M3?.combustion?.combustionMaxima?.resultado? M3.combustion.combustionMaxima.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M4?.combustion?.combustionMaxima?.resultado? M4.combustion.combustionMaxima.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M5?.combustion?.combustionMaxima?.resultado? M5.combustion.combustionMaxima.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M6?.combustion?.combustionMaxima?.resultado? M6.combustion.combustionMaxima.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M7?.combustion?.combustionMaxima?.resultado? M7.combustion.combustionMaxima.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M8?.combustion?.combustionMaxima?.resultado? M8.combustion.combustionMaxima.resultado: ""}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l3">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">Ducto</p>
              </div>
              </div>
              <div className="col s1 m1 l1 ">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue input-field-fine-tunning">
                <Field name="combustionDucto" disabled={!ensayo} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M1?.combustion?.combustionDucto?.resultado? M1.combustion.combustionDucto.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M2?.combustion?.combustionDucto?.resultado? M2.combustion.combustionDucto.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M3?.combustion?.combustionDucto?.resultado? M3.combustion.combustionDucto.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M4?.combustion?.combustionDucto?.resultado? M4.combustion.combustionDucto.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M5?.combustion?.combustionDucto?.resultado? M5.combustion.combustionDucto.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M6?.combustion?.combustionDucto?.resultado? M6.combustion.combustionDucto.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M7?.combustion?.combustionDucto?.resultado? M7.combustion.combustionDucto.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M8?.combustion?.combustionDucto?.resultado? M8.combustion.combustionDucto.resultado: ""}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l3">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">Viento en contra (1m/s)</p>
              </div>
              </div>
              <div className="col s1 m1 l1 ">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue input-field-fine-tunning">
                <Field name="combustionViento1m" disabled={!ensayo} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M1?.combustion?.combustionViento1m?.resultado? M1.combustion.combustionViento1m.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M2?.combustion?.combustionViento1m?.resultado? M2.combustion.combustionViento1m.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M3?.combustion?.combustionViento1m?.resultado? M3.combustion.combustionViento1m.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M4?.combustion?.combustionViento1m?.resultado? M4.combustion.combustionViento1m.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M5?.combustion?.combustionViento1m?.resultado? M5.combustion.combustionViento1m.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M6?.combustion?.combustionViento1m?.resultado? M6.combustion.combustionViento1m.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M7?.combustion?.combustionViento1m?.resultado? M7.combustion.combustionViento1m.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M8?.combustion?.combustionViento1m?.resultado? M8.combustion.combustionViento1m.resultado: ""}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l3">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">Viento en contra (3m/s)</p>
              </div>
              </div>
              <div className="col s1 m1 l1 ">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue input-field-fine-tunning">
                <Field name="combustionViento3m" disabled={!ensayo} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M1?.combustion?.combustionViento3m?.resultado? M1.combustion.combustionViento3m.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M2?.combustion?.combustionViento3m?.resultado? M2.combustion.combustionViento3m.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M3?.combustion?.combustionViento3m?.resultado? M3.combustion.combustionViento3m.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M4?.combustion?.combustionViento3m?.resultado? M4.combustion.combustionViento3m.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M5?.combustion?.combustionViento3m?.resultado? M5.combustion.combustionViento3m.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M6?.combustion?.combustionViento3m?.resultado? M6.combustion.combustionViento3m.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M7?.combustion?.combustionViento3m?.resultado? M7.combustion.combustionViento3m.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M8?.combustion?.combustionViento3m?.resultado? M8.combustion.combustionViento3m.resultado: ""}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row row-fix">
          </div>

          <div className="row"></div>
          <div className="row row-fix ">
          <div className="col s12 m12 l12 no-margin center">
              <div className="col s1 m1 l12">
                  <p className="display-box-title-ensayo-QA left">MEDICIONES COMPLEMENTARIAS</p>
              </div>

              <div className="col s1 m1 l12">
                  <div className="warning-inputs-scan left"><ErrorMessage name="mc1"/></div>
                  <div className="warning-inputs-scan left"><ErrorMessage name="mc2"/></div>
                  <div className="warning-inputs-scan left"><ErrorMessage name="mc3"/></div>
                  <div className="warning-inputs-scan left"><ErrorMessage name="mc4"/></div>
                  <div className="warning-inputs-scan left"><ErrorMessage name="mc5"/></div>
                  <div className="warning-inputs-scan left"><ErrorMessage name="mc6"/></div>
                  <div className="warning-inputs-scan left"><ErrorMessage name="mc7"/></div>
                  <div className="warning-inputs-scan left"><ErrorMessage name="mc8"/></div>
                  <div className="warning-inputs-scan left"><ErrorMessage name="mc9"/></div>
                  <div className="warning-inputs-scan left"><ErrorMessage name="mc10"/></div>
                  <div className="warning-inputs-scan left"><ErrorMessage name="mc11"/></div>
                  <div className="warning-inputs-scan left"><ErrorMessage name="mc12"/></div>
                  <div className="warning-inputs-scan left"><ErrorMessage name="mc13"/></div>
                  <div className="warning-inputs-scan left"><ErrorMessage name="mc14"/></div>
                  <div className="warning-inputs-scan left"><ErrorMessage name="mc15"/></div>
                  <div className="warning-inputs-scan left"><ErrorMessage name="mc16"/></div>
                  <div className="warning-inputs-scan left"><ErrorMessage name="mc17"/></div>
                  <div className="warning-inputs-scan left"><ErrorMessage name="mc18"/></div>
                  <div className="warning-inputs-scan left"><ErrorMessage name="mc19"/></div>
                  <div className="warning-inputs-scan left"><ErrorMessage name="mc20"/></div>
                
              </div>
            </div>
          </div>

{settingsObject.medicionesComplementarias.MC1.label?
          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l3">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">{settingsObject.medicionesComplementarias.MC1.label}</p>
              </div>
              </div>

              <div className="col s1 m1 l1 ">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue input-field-fine-tunning">
                <Field name="mc1" disabled={!ensayo} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M1?.medicionesComplementarias?.MC1?.resultado? M1.medicionesComplementarias.MC1.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M2?.medicionesComplementarias?.MC1?.resultado? M2.medicionesComplementarias.MC1.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M3?.medicionesComplementarias?.MC1?.resultado? M3.medicionesComplementarias.MC1.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M4?.medicionesComplementarias?.MC1?.resultado? M4.medicionesComplementarias.MC1.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M5?.medicionesComplementarias?.MC1?.resultado? M5.medicionesComplementarias.MC1.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M6?.medicionesComplementarias?.MC1?.resultado? M6.medicionesComplementarias.MC1.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M7?.medicionesComplementarias?.MC1?.resultado? M7.medicionesComplementarias.MC1.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M8?.medicionesComplementarias?.MC1?.resultado? M8.medicionesComplementarias.MC1.resultado: ""}</p>
                </div>
              </div>
            </div>
          </div>:null}

          {settingsObject.medicionesComplementarias.MC2.label?
          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l3">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">{settingsObject.medicionesComplementarias.MC2.label}</p>
              </div>
              </div>

              <div className="col s1 m1 l1 ">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue input-field-fine-tunning">
                <Field name="mc2" disabled={!ensayo} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M1?.medicionesComplementarias?.MC2?.resultado? M1.medicionesComplementarias.MC2.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M2?.medicionesComplementarias?.MC2?.resultado? M2.medicionesComplementarias.MC2.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M3?.medicionesComplementarias?.MC2?.resultado? M3.medicionesComplementarias.MC2.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M4?.medicionesComplementarias?.MC2?.resultado? M4.medicionesComplementarias.MC2.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M5?.medicionesComplementarias?.MC2?.resultado? M5.medicionesComplementarias.MC2.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M6?.medicionesComplementarias?.MC2?.resultado? M6.medicionesComplementarias.MC2.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M7?.medicionesComplementarias?.MC2?.resultado? M7.medicionesComplementarias.MC2.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M8?.medicionesComplementarias?.MC2?.resultado? M8.medicionesComplementarias.MC2.resultado: ""}</p>
                </div>
              </div>
            </div>
          </div>:null}

          {settingsObject.medicionesComplementarias.MC3.label?
          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l3">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">{settingsObject.medicionesComplementarias.MC3.label}</p>
              </div>
              </div>

              <div className="col s1 m1 l1 ">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue input-field-fine-tunning">
                <Field name="mc3" disabled={!ensayo} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M1?.medicionesComplementarias?.MC3?.resultado? M1.medicionesComplementarias.MC3.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M2?.medicionesComplementarias?.MC3?.resultado? M2.medicionesComplementarias.MC3.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M3?.medicionesComplementarias?.MC3?.resultado? M3.medicionesComplementarias.MC3.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M4?.medicionesComplementarias?.MC3?.resultado? M4.medicionesComplementarias.MC3.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M5?.medicionesComplementarias?.MC3?.resultado? M5.medicionesComplementarias.MC3.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M6?.medicionesComplementarias?.MC3?.resultado? M6.medicionesComplementarias.MC3.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M7?.medicionesComplementarias?.MC3?.resultado? M7.medicionesComplementarias.MC3.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M8?.medicionesComplementarias?.MC3?.resultado? M8.medicionesComplementarias.MC3.resultado: ""}</p>
                </div>
              </div>
            </div>
          </div>:null}

          {settingsObject.medicionesComplementarias.MC4.label?
          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l3">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">{settingsObject.medicionesComplementarias.MC4.label}</p>
              </div>
              </div>

              <div className="col s1 m1 l1 ">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue input-field-fine-tunning">
                <Field name="mc4" disabled={!ensayo} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M1?.medicionesComplementarias?.MC4?.resultado? M1.medicionesComplementarias.MC4.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M2?.medicionesComplementarias?.MC4?.resultado? M2.medicionesComplementarias.MC4.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M3?.medicionesComplementarias?.MC4?.resultado? M3.medicionesComplementarias.MC4.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M4?.medicionesComplementarias?.MC4?.resultado? M4.medicionesComplementarias.MC4.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M5?.medicionesComplementarias?.MC4?.resultado? M5.medicionesComplementarias.MC4.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M6?.medicionesComplementarias?.MC4?.resultado? M6.medicionesComplementarias.MC4.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M7?.medicionesComplementarias?.MC4?.resultado? M7.medicionesComplementarias.MC4.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M8?.medicionesComplementarias?.MC4?.resultado? M8.medicionesComplementarias.MC4.resultado: ""}</p>
                </div>
              </div>
            </div>
          </div>:null}

          {settingsObject.medicionesComplementarias.MC5.label?
          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l3">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">{settingsObject.medicionesComplementarias.MC5.label}</p>
              </div>
              </div>

              <div className="col s1 m1 l1 ">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue input-field-fine-tunning">
                <Field name="mc5" disabled={!ensayo} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M1?.medicionesComplementarias?.MC5?.resultado? M1.medicionesComplementarias.MC5.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M2?.medicionesComplementarias?.MC5?.resultado? M2.medicionesComplementarias.MC5.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M3?.medicionesComplementarias?.MC5?.resultado? M3.medicionesComplementarias.MC5.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M4?.medicionesComplementarias?.MC5?.resultado? M4.medicionesComplementarias.MC5.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M5?.medicionesComplementarias?.MC5?.resultado? M5.medicionesComplementarias.MC5.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M6?.medicionesComplementarias?.MC5?.resultado? M6.medicionesComplementarias.MC5.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M7?.medicionesComplementarias?.MC5?.resultado? M7.medicionesComplementarias.MC5.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M8?.medicionesComplementarias?.MC5?.resultado? M8.medicionesComplementarias.MC5.resultado: ""}</p>
                </div>
              </div>
            </div>
          </div>:null}

          {settingsObject.medicionesComplementarias.MC6.label?
          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l3">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">{settingsObject.medicionesComplementarias.MC6.label}</p>
              </div>
              </div>

              <div className="col s1 m1 l1 ">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue input-field-fine-tunning">
                <Field name="mc6" disabled={!ensayo} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M1?.medicionesComplementarias?.MC6?.resultado? M1.medicionesComplementarias.MC6.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M2?.medicionesComplementarias?.MC6?.resultado? M2.medicionesComplementarias.MC6.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M3?.medicionesComplementarias?.MC6?.resultado? M3.medicionesComplementarias.MC6.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M4?.medicionesComplementarias?.MC6?.resultado? M4.medicionesComplementarias.MC6.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M5?.medicionesComplementarias?.MC6?.resultado? M5.medicionesComplementarias.MC6.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M6?.medicionesComplementarias?.MC6?.resultado? M6.medicionesComplementarias.MC6.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M7?.medicionesComplementarias?.MC6?.resultado? M7.medicionesComplementarias.MC6.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M8?.medicionesComplementarias?.MC6?.resultado? M8.medicionesComplementarias.MC6.resultado: ""}</p>
                </div>
              </div>
            </div>
          </div>:null}

          {settingsObject.medicionesComplementarias.MC7.label?
          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l3">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">{settingsObject.medicionesComplementarias.MC7.label}</p>
              </div>
              </div>

              <div className="col s1 m1 l1 ">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue input-field-fine-tunning">
                <Field name="mc7" disabled={!ensayo} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M1?.medicionesComplementarias?.MC7?.resultado? M1.medicionesComplementarias.MC7.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M2?.medicionesComplementarias?.MC7?.resultado? M2.medicionesComplementarias.MC7.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M3?.medicionesComplementarias?.MC7?.resultado? M3.medicionesComplementarias.MC7.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M4?.medicionesComplementarias?.MC7?.resultado? M4.medicionesComplementarias.MC7.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M5?.medicionesComplementarias?.MC7?.resultado? M5.medicionesComplementarias.MC7.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M6?.medicionesComplementarias?.MC7?.resultado? M6.medicionesComplementarias.MC7.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M7?.medicionesComplementarias?.MC7?.resultado? M7.medicionesComplementarias.MC7.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M8?.medicionesComplementarias?.MC7?.resultado? M8.medicionesComplementarias.MC7.resultado: ""}</p>
                </div>
              </div>
            </div>
          </div>:null}

          {settingsObject.medicionesComplementarias.MC8.label?
          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l3">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">{settingsObject.medicionesComplementarias.MC8.label}</p>
              </div>
              </div>

              <div className="col s1 m1 l1 ">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue input-field-fine-tunning">
                <Field name="mc8" disabled={!ensayo} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M1?.medicionesComplementarias?.MC8?.resultado? M1.medicionesComplementarias.MC8.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M2?.medicionesComplementarias?.MC8?.resultado? M2.medicionesComplementarias.MC8.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M3?.medicionesComplementarias?.MC8?.resultado? M3.medicionesComplementarias.MC8.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M4?.medicionesComplementarias?.MC8?.resultado? M4.medicionesComplementarias.MC8.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M5?.medicionesComplementarias?.MC8?.resultado? M5.medicionesComplementarias.MC8.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M6?.medicionesComplementarias?.MC8?.resultado? M6.medicionesComplementarias.MC8.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M7?.medicionesComplementarias?.MC8?.resultado? M7.medicionesComplementarias.MC8.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M8?.medicionesComplementarias?.MC8?.resultado? M8.medicionesComplementarias.MC8.resultado: ""}</p>
                </div>
              </div>
            </div>
          </div>:null}

          {settingsObject.medicionesComplementarias.MC9.label?
          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l3">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">{settingsObject.medicionesComplementarias.MC9.label}</p>
              </div>
              </div>

              <div className="col s1 m1 l1 ">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue input-field-fine-tunning">
                <Field name="mc9" disabled={!ensayo} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M1?.medicionesComplementarias?.MC9?.resultado? M1.medicionesComplementarias.MC9.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M2?.medicionesComplementarias?.MC9?.resultado? M2.medicionesComplementarias.MC9.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M3?.medicionesComplementarias?.MC9?.resultado? M3.medicionesComplementarias.MC9.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M4?.medicionesComplementarias?.MC9?.resultado? M4.medicionesComplementarias.MC9.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M5?.medicionesComplementarias?.MC9?.resultado? M5.medicionesComplementarias.MC9.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M6?.medicionesComplementarias?.MC9?.resultado? M6.medicionesComplementarias.MC9.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M7?.medicionesComplementarias?.MC9?.resultado? M7.medicionesComplementarias.MC9.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M8?.medicionesComplementarias?.MC9?.resultado? M8.medicionesComplementarias.MC9.resultado: ""}</p>
                </div>
              </div>
            </div>
          </div>:null}

          {settingsObject.medicionesComplementarias.MC10.label?
          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l3">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">{settingsObject.medicionesComplementarias.MC10.label}</p>
              </div>
              </div>

              <div className="col s1 m1 l1 ">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue input-field-fine-tunning">
                <Field name="mc10" disabled={!ensayo} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M1?.medicionesComplementarias?.MC10?.resultado? M1.medicionesComplementarias.MC10.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M2?.medicionesComplementarias?.MC10?.resultado? M2.medicionesComplementarias.MC10.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M3?.medicionesComplementarias?.MC10?.resultado? M3.medicionesComplementarias.MC10.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M4?.medicionesComplementarias?.MC10?.resultado? M4.medicionesComplementarias.MC10.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M5?.medicionesComplementarias?.MC10?.resultado? M5.medicionesComplementarias.MC10.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M6?.medicionesComplementarias?.MC10?.resultado? M6.medicionesComplementarias.MC10.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M7?.medicionesComplementarias?.MC10?.resultado? M7.medicionesComplementarias.MC10.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M8?.medicionesComplementarias?.MC10?.resultado? M8.medicionesComplementarias.MC10.resultado: ""}</p>
                </div>
              </div>
            </div>
          </div>:null}

          {settingsObject.medicionesComplementarias.MC11.label?
          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l3">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">{settingsObject.medicionesComplementarias.MC11.label}</p>
              </div>
              </div>

              <div className="col s1 m1 l1 ">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue input-field-fine-tunning">
                <Field name="mc11" disabled={!ensayo} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M1?.medicionesComplementarias?.MC11?.resultado? M1.medicionesComplementarias.MC11.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M2?.medicionesComplementarias?.MC11?.resultado? M2.medicionesComplementarias.MC11.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M3?.medicionesComplementarias?.MC11?.resultado? M3.medicionesComplementarias.MC11.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M4?.medicionesComplementarias?.MC11?.resultado? M4.medicionesComplementarias.MC11.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M5?.medicionesComplementarias?.MC11?.resultado? M5.medicionesComplementarias.MC11.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M6?.medicionesComplementarias?.MC11?.resultado? M6.medicionesComplementarias.MC11.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M7?.medicionesComplementarias?.MC11?.resultado? M7.medicionesComplementarias.MC11.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M8?.medicionesComplementarias?.MC11?.resultado? M8.medicionesComplementarias.MC11.resultado: ""}</p>
                </div>
              </div>
            </div>
          </div>:null}

          {settingsObject.medicionesComplementarias.MC12.label?
          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l3">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">{settingsObject.medicionesComplementarias.MC12.label}</p>
              </div>
              </div>

              <div className="col s1 m1 l1 ">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue input-field-fine-tunning">
                <Field name="mc12" disabled={!ensayo} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M1?.medicionesComplementarias?.MC12?.resultado? M1.medicionesComplementarias.MC12.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M2?.medicionesComplementarias?.MC12?.resultado? M2.medicionesComplementarias.MC12.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M3?.medicionesComplementarias?.MC12?.resultado? M3.medicionesComplementarias.MC12.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M4?.medicionesComplementarias?.MC12?.resultado? M4.medicionesComplementarias.MC12.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M5?.medicionesComplementarias?.MC12?.resultado? M5.medicionesComplementarias.MC12.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M6?.medicionesComplementarias?.MC12?.resultado? M6.medicionesComplementarias.MC12.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M7?.medicionesComplementarias?.MC12?.resultado? M7.medicionesComplementarias.MC12.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M8?.medicionesComplementarias?.MC12?.resultado? M8.medicionesComplementarias.MC12.resultado: ""}</p>
                </div>
              </div>
            </div>
          </div>:null}

          {settingsObject.medicionesComplementarias.MC13.label?
          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l3">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">{settingsObject.medicionesComplementarias.MC13.label}</p>
              </div>
              </div>

              <div className="col s1 m1 l1 ">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue input-field-fine-tunning">
                <Field name="mc13" disabled={!ensayo} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M1?.medicionesComplementarias?.MC13?.resultado? M1.medicionesComplementarias.MC13.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M2?.medicionesComplementarias?.MC13?.resultado? M2.medicionesComplementarias.MC13.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M3?.medicionesComplementarias?.MC13?.resultado? M3.medicionesComplementarias.MC13.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M4?.medicionesComplementarias?.MC13?.resultado? M4.medicionesComplementarias.MC13.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M5?.medicionesComplementarias?.MC13?.resultado? M5.medicionesComplementarias.MC13.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M6?.medicionesComplementarias?.MC13?.resultado? M6.medicionesComplementarias.MC13.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M7?.medicionesComplementarias?.MC13?.resultado? M7.medicionesComplementarias.MC13.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M8?.medicionesComplementarias?.MC13?.resultado? M8.medicionesComplementarias.MC13.resultado: ""}</p>
                </div>
              </div>
            </div>
          </div>:null}

          {settingsObject.medicionesComplementarias.MC14.label?
          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l3">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">{settingsObject.medicionesComplementarias.MC14.label}</p>
              </div>
              </div>

              <div className="col s1 m1 l1 ">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue input-field-fine-tunning">
                <Field name="mc14" disabled={!ensayo} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M1?.medicionesComplementarias?.MC14?.resultado? M1.medicionesComplementarias.MC14.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M2?.medicionesComplementarias?.MC14?.resultado? M2.medicionesComplementarias.MC14.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M3?.medicionesComplementarias?.MC14?.resultado? M3.medicionesComplementarias.MC14.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M4?.medicionesComplementarias?.MC14?.resultado? M4.medicionesComplementarias.MC14.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M5?.medicionesComplementarias?.MC14?.resultado? M5.medicionesComplementarias.MC14.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M6?.medicionesComplementarias?.MC14?.resultado? M6.medicionesComplementarias.MC14.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M7?.medicionesComplementarias?.MC14?.resultado? M7.medicionesComplementarias.MC14.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M8?.medicionesComplementarias?.MC14?.resultado? M8.medicionesComplementarias.MC14.resultado: ""}</p>
                </div>
              </div>
            </div>
          </div>:null}


          {settingsObject.medicionesComplementarias.MC15.label?
          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l3">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">{settingsObject.medicionesComplementarias.MC15.label}</p>
              </div>
              </div>

              <div className="col s1 m1 l1 ">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue input-field-fine-tunning">
                <Field name="mc15" disabled={!ensayo} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M1?.medicionesComplementarias?.MC15?.resultado? M1.medicionesComplementarias.MC15.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M2?.medicionesComplementarias?.MC15?.resultado? M2.medicionesComplementarias.MC15.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M3?.medicionesComplementarias?.MC15?.resultado? M3.medicionesComplementarias.MC15.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M4?.medicionesComplementarias?.MC15?.resultado? M4.medicionesComplementarias.MC15.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M5?.medicionesComplementarias?.MC15?.resultado? M5.medicionesComplementarias.MC15.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M6?.medicionesComplementarias?.MC15?.resultado? M6.medicionesComplementarias.MC15.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M7?.medicionesComplementarias?.MC15?.resultado? M7.medicionesComplementarias.MC15.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M8?.medicionesComplementarias?.MC15?.resultado? M8.medicionesComplementarias.MC15.resultado: ""}</p>
                </div>
              </div>
            </div>
          </div>:null}

          {settingsObject.medicionesComplementarias.MC16.label?
          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l3">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">{settingsObject.medicionesComplementarias.MC16.label}</p>
              </div>
              </div>

              <div className="col s1 m1 l1 ">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue input-field-fine-tunning">
                <Field name="mc16" disabled={!ensayo} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M1?.medicionesComplementarias?.MC16?.resultado? M1.medicionesComplementarias.MC16.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M2?.medicionesComplementarias?.MC16?.resultado? M2.medicionesComplementarias.MC16.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M3?.medicionesComplementarias?.MC16?.resultado? M3.medicionesComplementarias.MC16.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M4?.medicionesComplementarias?.MC16?.resultado? M4.medicionesComplementarias.MC16.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M5?.medicionesComplementarias?.MC16?.resultado? M5.medicionesComplementarias.MC16.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M6?.medicionesComplementarias?.MC16?.resultado? M6.medicionesComplementarias.MC16.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M7?.medicionesComplementarias?.MC16?.resultado? M7.medicionesComplementarias.MC16.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M8?.medicionesComplementarias?.MC16?.resultado? M8.medicionesComplementarias.MC16.resultado: ""}</p>
                </div>
              </div>
            </div>
          </div>:null}

          {settingsObject.medicionesComplementarias.MC17.label?
          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l3">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">{settingsObject.medicionesComplementarias.MC17.label}</p>
              </div>
              </div>

              <div className="col s1 m1 l1 ">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue input-field-fine-tunning">
                <Field name="mc17" disabled={!ensayo} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M1?.medicionesComplementarias?.MC17?.resultado? M1.medicionesComplementarias.MC17.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M2?.medicionesComplementarias?.MC17?.resultado? M2.medicionesComplementarias.MC17.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M3?.medicionesComplementarias?.MC17?.resultado? M3.medicionesComplementarias.MC17.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M4?.medicionesComplementarias?.MC17?.resultado? M4.medicionesComplementarias.MC17.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M5?.medicionesComplementarias?.MC17?.resultado? M5.medicionesComplementarias.MC17.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M6?.medicionesComplementarias?.MC17?.resultado? M6.medicionesComplementarias.MC17.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M7?.medicionesComplementarias?.MC17?.resultado? M7.medicionesComplementarias.MC17.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M8?.medicionesComplementarias?.MC17?.resultado? M8.medicionesComplementarias.MC17.resultado: ""}</p>
                </div>
              </div>
            </div>
          </div>:null}

          {settingsObject.medicionesComplementarias.MC18.label?
          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l3">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">{settingsObject.medicionesComplementarias.MC18.label}</p>
              </div>
              </div>

              <div className="col s1 m1 l1 ">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue input-field-fine-tunning">
                <Field name="mc18" disabled={!ensayo} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M1?.medicionesComplementarias?.MC18?.resultado? M1.medicionesComplementarias.MC18.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M2?.medicionesComplementarias?.MC18?.resultado? M2.medicionesComplementarias.MC18.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M3?.medicionesComplementarias?.MC18?.resultado? M3.medicionesComplementarias.MC18.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M4?.medicionesComplementarias?.MC18?.resultado? M4.medicionesComplementarias.MC18.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M5?.medicionesComplementarias?.MC18?.resultado? M5.medicionesComplementarias.MC18.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M6?.medicionesComplementarias?.MC18?.resultado? M6.medicionesComplementarias.MC18.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M7?.medicionesComplementarias?.MC18?.resultado? M7.medicionesComplementarias.MC18.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M8?.medicionesComplementarias?.MC18?.resultado? M8.medicionesComplementarias.MC18.resultado: ""}</p>
                </div>
              </div>
            </div>
          </div>:null}

          {settingsObject.medicionesComplementarias.MC19.label?
          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l3">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">{settingsObject.medicionesComplementarias.MC19.label}</p>
              </div>
              </div>

              <div className="col s1 m1 l1 ">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue input-field-fine-tunning">
                <Field name="mc19" disabled={!ensayo} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M1?.medicionesComplementarias?.MC19?.resultado? M1.medicionesComplementarias.MC19.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M2?.medicionesComplementarias?.MC19?.resultado? M2.medicionesComplementarias.MC19.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M3?.medicionesComplementarias?.MC19?.resultado? M3.medicionesComplementarias.MC19.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M4?.medicionesComplementarias?.MC19?.resultado? M4.medicionesComplementarias.MC19.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M5?.medicionesComplementarias?.MC19?.resultado? M5.medicionesComplementarias.MC19.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M6?.medicionesComplementarias?.MC19?.resultado? M6.medicionesComplementarias.MC19.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M7?.medicionesComplementarias?.MC19?.resultado? M7.medicionesComplementarias.MC19.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M8?.medicionesComplementarias?.MC19?.resultado? M8.medicionesComplementarias.MC19.resultado: ""}</p>
                </div>
              </div>
            </div>
          </div>:null}

          {settingsObject.medicionesComplementarias.MC20.label?
          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l3">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">{settingsObject.medicionesComplementarias.MC20.label}</p>
              </div>
              </div>

              <div className="col s1 m1 l1 ">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue input-field-fine-tunning">
                <Field name="mc20" disabled={!ensayo} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M1?.medicionesComplementarias?.MC20?.resultado? M1.medicionesComplementarias.MC20.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M2?.medicionesComplementarias?.MC20?.resultado? M2.medicionesComplementarias.MC20.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M3?.medicionesComplementarias?.MC20?.resultado? M3.medicionesComplementarias.MC20.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M4?.medicionesComplementarias?.MC20?.resultado? M4.medicionesComplementarias.MC20.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M5?.medicionesComplementarias?.MC20?.resultado? M5.medicionesComplementarias.MC20.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M6?.medicionesComplementarias?.MC20?.resultado? M6.medicionesComplementarias.MC20.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M7?.medicionesComplementarias?.MC20?.resultado? M7.medicionesComplementarias.MC20.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M8?.medicionesComplementarias?.MC20?.resultado? M8.medicionesComplementarias.MC20.resultado: ""}</p>
                </div>
              </div>
            </div>
          </div>:null}
       

          <div className="row"></div>


{digital===true?
          <>
          <div className="row row-fix ">
          <div className="col s12 m12 l12 no-margin center">
              <div className="col s1 m1 l12">
                  <p className="display-box-title-ensayo-QA left">PARAMETRO DE PROGRAMACION</p>
              </div>
              <div className="col s1 m1 l12">
                      <div className="warning-inputs-scan left"><ErrorMessage name="FA"/></div>
                      <div className="warning-inputs-scan left"><ErrorMessage name="PH"/></div>
                      <div className="warning-inputs-scan left"><ErrorMessage name="FH"/></div>
                      <div className="warning-inputs-scan left"><ErrorMessage name="PL"/></div>
                      <div className="warning-inputs-scan left"><ErrorMessage name="FL"/></div>
                      <div className="warning-inputs-scan left"><ErrorMessage name="dh"/></div>
                      <div className="warning-inputs-scan left"><ErrorMessage name="dF"/></div>
                      <div className="warning-inputs-scan left"><ErrorMessage name="nE"/></div>
                      <div className="warning-inputs-scan left"><ErrorMessage name="nP"/></div>
                      <div className="warning-inputs-scan left"><ErrorMessage name="HC"/></div>
                      <div className="warning-inputs-scan left"><ErrorMessage name="LC"/></div>
                      <div className="warning-inputs-scan left"><ErrorMessage name="FC"/></div>
              </div>
            </div>
          </div>

          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l3">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">FA</p>
              </div>
              </div>
              <div className="col s1 m1 l1 ">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue input-field-fine-tunning">
                <Field name="FA" disabled={!ensayo} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M1?.parametrosDigitales?.dF?.resultado? M1.parametrosDigitales.dF.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M2?.parametrosDigitales?.dF?.resultado? M2.parametrosDigitales.dF.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M3?.parametrosDigitales?.dF?.resultado? M3.parametrosDigitales.dF.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M4?.parametrosDigitales?.dF?.resultado? M4.parametrosDigitales.dF.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M5?.parametrosDigitales?.dF?.resultado? M5.parametrosDigitales.dF.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M6?.parametrosDigitales?.dF?.resultado? M6.parametrosDigitales.dF.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M7?.parametrosDigitales?.dF?.resultado? M7.parametrosDigitales.dF.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M8?.parametrosDigitales?.dF?.resultado? M8.parametrosDigitales.dF.resultado: ""}</p>
                </div>
              </div>
            </div>  



            
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l3">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">PH</p>
              </div>
              </div>
              <div className="col s1 m1 l1 ">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue input-field-fine-tunning">
                <Field name="PH" disabled={!ensayo} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M1?.parametrosDigitales?.PH?.resultado? M1.parametrosDigitales.PH.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M2?.parametrosDigitales?.PH?.resultado? M2.parametrosDigitales.PH.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M3?.parametrosDigitales?.PH?.resultado? M3.parametrosDigitales.PH.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M4?.parametrosDigitales?.PH?.resultado? M4.parametrosDigitales.PH.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M5?.parametrosDigitales?.PH?.resultado? M5.parametrosDigitales.PH.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M6?.parametrosDigitales?.PH?.resultado? M6.parametrosDigitales.PH.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M7?.parametrosDigitales?.PH?.resultado? M7.parametrosDigitales.PH.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M8?.parametrosDigitales?.PH?.resultado? M8.parametrosDigitales.PH.resultado: ""}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l3">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">FH</p>
              </div>
              </div>
              <div className="col s1 m1 l1 ">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue input-field-fine-tunning">
                <Field name="FH" disabled={!ensayo} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M1?.parametrosDigitales?.FH?.resultado? M1.parametrosDigitales.FH.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M2?.parametrosDigitales?.FH?.resultado? M2.parametrosDigitales.FH.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M3?.parametrosDigitales?.FH?.resultado? M3.parametrosDigitales.FH.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M4?.parametrosDigitales?.FH?.resultado? M4.parametrosDigitales.FH.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M5?.parametrosDigitales?.FH?.resultado? M5.parametrosDigitales.FH.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M6?.parametrosDigitales?.FH?.resultado? M6.parametrosDigitales.FH.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M7?.parametrosDigitales?.FH?.resultado? M7.parametrosDigitales.FH.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M8?.parametrosDigitales?.FH?.resultado? M8.parametrosDigitales.FH.resultado: ""}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l3">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">PL</p>
              </div>
              </div>
              <div className="col s1 m1 l1 ">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue input-field-fine-tunning">
                <Field name="PL" disabled={!ensayo} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M1?.parametrosDigitales?.PL?.resultado? M1.parametrosDigitales.PL.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M2?.parametrosDigitales?.PL?.resultado? M2.parametrosDigitales.PL.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M3?.parametrosDigitales?.PL?.resultado? M3.parametrosDigitales.PL.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M4?.parametrosDigitales?.PL?.resultado? M4.parametrosDigitales.PL.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M5?.parametrosDigitales?.PL?.resultado? M5.parametrosDigitales.PL.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M6?.parametrosDigitales?.PL?.resultado? M6.parametrosDigitales.PL.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M7?.parametrosDigitales?.PL?.resultado? M7.parametrosDigitales.PL.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M8?.parametrosDigitales?.PL?.resultado? M8.parametrosDigitales.PL.resultado: ""}</p>
                </div>
              </div>
            </div>

          </div>
          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l3">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">FL</p>
              </div>
              </div>
              <div className="col s1 m1 l1 ">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue input-field-fine-tunning">
                <Field name="FL" disabled={!ensayo} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M1?.parametrosDigitales?.FL?.resultado? M1.parametrosDigitales.FL.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M2?.parametrosDigitales?.FL?.resultado? M2.parametrosDigitales.FL.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M3?.parametrosDigitales?.FL?.resultado? M3.parametrosDigitales.FL.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M4?.parametrosDigitales?.FL?.resultado? M4.parametrosDigitales.FL.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M5?.parametrosDigitales?.FL?.resultado? M5.parametrosDigitales.FL.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M6?.parametrosDigitales?.FL?.resultado? M6.parametrosDigitales.FL.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M7?.parametrosDigitales?.FL?.resultado? M7.parametrosDigitales.FL.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M8?.parametrosDigitales?.FL?.resultado? M8.parametrosDigitales.FL.resultado: ""}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l3">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">dh</p>
              </div>
              </div>
              <div className="col s1 m1 l1 ">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue input-field-fine-tunning">
                <Field name="dh" disabled={!ensayo} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M1?.parametrosDigitales?.dh?.resultado? M1.parametrosDigitales.dh.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M2?.parametrosDigitales?.dh?.resultado? M2.parametrosDigitales.dh.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M3?.parametrosDigitales?.dh?.resultado? M3.parametrosDigitales.dh.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M4?.parametrosDigitales?.dh?.resultado? M4.parametrosDigitales.dh.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M5?.parametrosDigitales?.dh?.resultado? M5.parametrosDigitales.dh.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M6?.parametrosDigitales?.dh?.resultado? M6.parametrosDigitales.dh.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M7?.parametrosDigitales?.dh?.resultado? M7.parametrosDigitales.dh.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M8?.parametrosDigitales?.dh?.resultado? M8.parametrosDigitales.dh.resultado: ""}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l3">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">dF</p>
              </div>
              </div>
              <div className="col s1 m1 l1 ">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue input-field-fine-tunning">
                <Field name="dF" disabled={!ensayo} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M1?.parametrosDigitales?.dF?.resultado? M1.parametrosDigitales.dF.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M2?.parametrosDigitales?.dF?.resultado? M2.parametrosDigitales.dF.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M3?.parametrosDigitales?.dF?.resultado? M3.parametrosDigitales.dF.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M4?.parametrosDigitales?.dF?.resultado? M4.parametrosDigitales.dF.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M5?.parametrosDigitales?.dF?.resultado? M5.parametrosDigitales.dF.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M6?.parametrosDigitales?.dF?.resultado? M6.parametrosDigitales.dF.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M7?.parametrosDigitales?.dF?.resultado? M7.parametrosDigitales.dF.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M8?.parametrosDigitales?.dF?.resultado? M8.parametrosDigitales.dF.resultado: ""}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l3">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">nE</p>
              </div>
              </div>
              <div className="col s1 m1 l1 ">
                <div className="display-box-fine-tunning z-depth-1 valign-wrapper background-light-blue">
                <Field as="select" name="nE" disabled={!ensayo} className="browser-default collapsible-header">
                        <option value="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-</option>
                         <option value="60">&nbsp;&nbsp;60</option>
                         <option value="0">&nbsp;&nbsp;OFF</option>
                         </Field> 
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M1?.parametrosDigitales?.nE?.resultado === 60? "60":(M1?.parametrosDigitales?.nE?.resultado === 0 ? "OFF" :'')}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M2?.parametrosDigitales?.nE?.resultado === 60? "60":(M2?.parametrosDigitales?.nE?.resultado === 0 ? "OFF" :'')}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M3?.parametrosDigitales?.nE?.resultado === 60? "60":(M3?.parametrosDigitales?.nE?.resultado === 0 ? "OFF" :'')}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M4?.parametrosDigitales?.nE?.resultado === 60? "60":(M4?.parametrosDigitales?.nE?.resultado === 0 ? "OFF" :'')}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M5?.parametrosDigitales?.nE?.resultado === 60? "60":(M5?.parametrosDigitales?.nE?.resultado === 0 ? "OFF" :'')}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M6?.parametrosDigitales?.nE?.resultado === 60? "60":(M6?.parametrosDigitales?.nE?.resultado === 0 ? "OFF" :'')}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M7?.parametrosDigitales?.nE?.resultado === 60? "60":(M7?.parametrosDigitales?.nE?.resultado === 0 ? "OFF" :'')}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M8?.parametrosDigitales?.nE?.resultado === 60? "60":(M8?.parametrosDigitales?.nE?.resultado === 0 ? "OFF" :'')}</p>
                </div>
              </div>
            </div>
          </div>

          
             

          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l3">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">nP</p>
              </div>
              </div>

              <div className="col s1 m1 l1 ">
              <div className="display-box-fine-tunning z-depth-1 valign-wrapper background-light-blue">   
                        <Field as="select" name="nP" disabled={!ensayo} className="browser-default collapsible-header">
                        <option value="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-</option>
                         <option value="1">&nbsp;&nbsp;ON</option>
                         </Field>               
                    </div>
                </div>

              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M1?.parametrosDigitales?.nP?.resultado === 1? "ON":''}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M2?.parametrosDigitales?.nP?.resultado === 1? "ON":''}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M3?.parametrosDigitales?.nP?.resultado === 1? "ON":''}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M4?.parametrosDigitales?.nP?.resultado === 1? "ON":''}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M5?.parametrosDigitales?.nP?.resultado === 1? "ON":''}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M6?.parametrosDigitales?.nP?.resultado === 1? "ON":''}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M7?.parametrosDigitales?.nP?.resultado === 1? "ON":''}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{M8?.parametrosDigitales?.nP?.resultado === 1? "ON":''}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l3">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">HC</p>
              </div>
              </div>
              <div className="col s1 m1 l1 ">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue input-field-fine-tunning">
                <Field name="HC" disabled={!ensayo} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M1?.parametrosDigitales?.HC?.resultado? M1.parametrosDigitales.HC.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M2?.parametrosDigitales?.HC?.resultado? M2.parametrosDigitales.HC.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M3?.parametrosDigitales?.HC?.resultado? M3.parametrosDigitales.HC.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M4?.parametrosDigitales?.HC?.resultado? M4.parametrosDigitales.HC.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M5?.parametrosDigitales?.HC?.resultado? M5.parametrosDigitales.HC.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M6?.parametrosDigitales?.HC?.resultado? M6.parametrosDigitales.HC.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M7?.parametrosDigitales?.HC?.resultado? M7.parametrosDigitales.HC.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M8?.parametrosDigitales?.HC?.resultado? M8.parametrosDigitales.HC.resultado: ""}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l3">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">LC</p>
              </div>
              </div>
              <div className="col s1 m1 l1 ">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue input-field-fine-tunning">
                <Field name="LC" disabled={!ensayo} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M1?.parametrosDigitales?.LC?.resultado? M1.parametrosDigitales.LC.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M2?.parametrosDigitales?.LC?.resultado? M2.parametrosDigitales.LC.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M3?.parametrosDigitales?.LC?.resultado? M3.parametrosDigitales.LC.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M4?.parametrosDigitales?.LC?.resultado? M4.parametrosDigitales.LC.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M5?.parametrosDigitales?.LC?.resultado? M5.parametrosDigitales.LC.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M6?.parametrosDigitales?.LC?.resultado? M6.parametrosDigitales.LC.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M7?.parametrosDigitales?.LC?.resultado? M7.parametrosDigitales.LC.resultado: ""}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M8?.parametrosDigitales?.LC?.resultado? M8.parametrosDigitales.LC.resultado: ""}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l3">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">FC</p>
              </div>
              </div>
              <div className="col s1 m1 l1 ">
              <div className="display-box-fine-tunning z-depth-1 valign-wrapper background-light-blue">   
                        <Field as="select" name="FC" disabled={!ensayo} className="browser-default collapsible-header">
                        <option value="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-</option>
                         <option value="1">&nbsp;&nbsp;ON</option>
                         </Field>               
                    </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M1?.parametrosDigitales?.FC?.resultado === 1? "ON":''}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M2?.parametrosDigitales?.FC?.resultado === 1? "ON":''}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M3?.parametrosDigitales?.FC?.resultado === 1? "ON":''}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M4?.parametrosDigitales?.FC?.resultado === 1? "ON":''}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M5?.parametrosDigitales?.FC?.resultado === 1? "ON":''}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M6?.parametrosDigitales?.FC?.resultado === 1? "ON":''}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M7?.parametrosDigitales?.FC?.resultado === 1? "ON":''}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{M8?.parametrosDigitales?.FC?.resultado === 1? "ON":''}</p>
                </div>
              </div>
            </div>
          </div>
          </>:null}
          
          <div className="row"></div>
          <div className="row ">
            <div className="col l12 center no-margin">
              <div className="col l4">
                <button className="btn-small btn-block waves-effect waves-light button-modoedicion-batch-list z-depth-2" type="submit">
                  ENSAYAR MUESTRA
                </button>
              </div>
            
              <div className="col l1 trash">
                {M1?.calificacion === ""?
                   <button onClick={eraseM1} className="material-symbols-outlined hover-hand">delete</button>
                  :<button disabled className="material-symbols-outlined">delete</button>}
              </div>
              <div className="col l1 trash">
              {M2?.calificacion === ""?
                   <button onClick={eraseM2} className="material-symbols-outlined hover-hand">delete</button>
                  :<button disabled className="material-symbols-outlined">delete</button>}
              </div>
              <div className="col l1 trash">
              {M3?.calificacion === ""?
                   <button onClick={eraseM3} className="material-symbols-outlined hover-hand">delete</button>
                  :<button disabled className="material-symbols-outlined">delete</button>}
              </div>
              <div className="col l1 trash">
              {M4?.calificacion === ""?
                   <button onClick={eraseM4} className="material-symbols-outlined hover-hand">delete</button>
                  :<button disabled className="material-symbols-outlined">delete</button>}
              </div>
              <div className="col l1 trash">
              {M5?.calificacion === ""?
                   <button onClick={eraseM5} className="material-symbols-outlined hover-hand">delete</button>
                  :<button disabled className="material-symbols-outlined">delete</button>}
              </div>
              <div className="col l1 trash">
              {M6?.calificacion === ""?
                   <button onClick={eraseM6} className="material-symbols-outlined hover-hand">delete</button>
                  :<button disabled className="material-symbols-outlined">delete</button>}
              </div>
              <div className="col l1 trash">
              {M7?.calificacion === ""?
                   <button onClick={eraseM7} className="material-symbols-outlined hover-hand">delete</button>
                  :<button disabled className="material-symbols-outlined">delete</button>}                 
              </div>
              <div className="col l1 trash">
              {M8?.calificacion === ""?
                   <button onClick={eraseM8} className="material-symbols-outlined hover-hand">delete</button>
                  :<button disabled className="material-symbols-outlined">delete</button>}
              </div>  
            </div>
          </div>

          </Form>
      </Formik>

      
          <Formik initialValues={{ calificacion:'', obs:''}} 
                  onSubmit={handleCALIFICACION} 
                  validate={validarCalificacion} 
                  isValidating={false} 
                  isSubmitting={false} >
                    <Form>
          <div className="row">     

              <div className="col l2">
                  <button disabled={calificar === false} className="btn-small btn-block waves-effect waves-light button-modoedicion-batch-list z-depth-2" type="submit">
                    CALIFICAR MUESTRA
                  </button>
              </div>
             <div className="col l1 pdf">
                <Field type="file" name="orden" id='ordenpdf' className="browser-default collapsible-header" style={{display:'none'}}/>
                  <label htmlFor="ordenpdf">
                      <PDFicon className="hover-hand" />
                  </label> 
              </div>
              <div className="col l1">
              <div className="display-box-fine-tunning z-depth-1 valign-wrapper">   
                        <Field as="select" name="calificacion" disabled={calificar === false} className="browser-default collapsible-header">
                         <option value=""></option>     
                         <option value="aprobada">&nbsp;&nbsp;&nbsp;AP</option>
                         <option value="observada">&nbsp;&nbsp;&nbsp;OB</option>
                         <option value="rechazada">&nbsp;&nbsp;&nbsp;RE</option>
                         </Field>               
                    </div>
              </div>
    


              <div className="col l1 center">
                  <div className="display-box-fine-tunning z-depth-1 ">  
                      <p className="text-production-register">{M1?.calificacion? (M1.calificacion).toUpperCase():null}</p> 
                  </div>
              </div>
              <div className="col l1 center">
                  
                  <div className="display-box-fine-tunning z-depth-1 ">  
                  <p className="text-production-register">{M2?.calificacion? (M2.calificacion).toUpperCase():null}</p> 
                  </div>
              </div>
              <div className="col l1 center">
                 
                  <div className="display-box-fine-tunning z-depth-1 ">  
                  <p className="text-production-register">{M3?.calificacion? (M3.calificacion).toUpperCase():null}</p>
                  </div>
              </div>
              <div className="col l1 center">
                  
                  <div className="display-box-fine-tunning z-depth-1 ">  
                  <p className="text-production-register">{M4?.calificacion? (M4.calificacion).toUpperCase():null}</p>
                  </div>
              </div>
              <div className="col l1 center">
                 
                  <div className="display-box-fine-tunning z-depth-1 ">  
                  <p className="text-production-register">{M5?.calificacion? (M5.calificacion).toUpperCase():null}</p>
                  </div>
              </div>
              <div className="col l1 center">
                 
                  <div className="display-box-fine-tunning z-depth-1 ">  
                  <p className="text-production-register">{M6?.calificacion? (M6.calificacion).toUpperCase():null}</p> 
                  </div>
              </div>
              <div className="col l1 center">
                 
                  <div className="display-box-fine-tunning z-depth-1 ">  
                  <p className="text-production-register">{M7?.calificacion? (M7.calificacion).toUpperCase():null}</p> 
                  </div>
                  
              </div>
              <div className="col l1 center">
                 
                  <div className="display-box-fine-tunning z-depth-1 ">  
                  <p className="text-production-register">{M8?.calificacion? (M8.calificacion).toUpperCase():null}</p>
                  </div>
              </div>  
              <div className="col 12">
                      <div className="warning-inputs-scan left"><ErrorMessage name="calificacion"/></div>
              </div>

              </div>

          <div className="row"></div>

          <div className="col s12 m12 l12">
            <p className="display-box-title">Observaciones del Ensayo</p>
              <div className="observaciones-muestra">
              <Field name="obs" type="text" placeholder ="Luego de ensayar la muestra, podra ingresar observaciones a la misma." disabled={M1===null} className="input-text-ensayo"/>
            </div>
          </div>
          <div className="col s12 m12 l12">
            <p className="display-box-title">Observaciones Previas</p>
              <div className="observaciones-previas">
               <p className="obs-text">{M1?.observaciones? "Muestra 1:" + "\u00A0" + M1.observaciones:""}</p>
               <p className="obs-text">{M2?.observaciones? "Muestra 2:" + "\u00A0" + M2.observaciones:""}</p>
               <p className="obs-text">{M3?.observaciones? "Muestra 3:" + "\u00A0" + M3.observaciones:""}</p>
               <p className="obs-text">{M4?.observaciones? "Muestra 4:" + "\u00A0" + M4.observaciones:""}</p>
               <p className="obs-text">{M5?.observaciones? "Muestra 5:" + "\u00A0" + M5.observaciones:""}</p>
               <p className="obs-text">{M6?.observaciones? "Muestra 6:" + "\u00A0" + M6.observaciones:""}</p>
               <p className="obs-text">{M7?.observaciones? "Muestra 7:" + "\u00A0" + M7.observaciones:""}</p>
               <p className="obs-text">{M8?.observaciones? "Muestra 8:" + "\u00A0" + M8.observaciones:""}</p>
            </div>
          </div>

              </Form>
              </Formik>

          <div className="row">
            <div className="col s12 m12 l3 "><a href="/dashboard">
              <button className="btn-small btn-block waves-effect waves-light button-regresar-create-plan z-depth-2" type="button">
                REGRESAR
              </button></a>
            </div>
            <div className="col s12 m12 l6 ">
              <button onClick={publishSample} className="btn-small btn-block waves-effect waves-light button-regresar-create-plan z-depth-2" type="button">
               PUBLICAR MUESTRA
              </button>
            </div>
            <div className="col s12 m12 l3 "><a href="/qa-labs-batch-test-report">
              <button className="btn-small btn-block waves-effect waves-light button-regresar-create-plan z-depth-2" type="button">
                VER INFORME
              </button></a>
            </div>
        </div>
        <br />
        <br />
     
     

      </div>
    </>
  );
};
export default TestSheet;
