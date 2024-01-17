import Navbar from "../Navbar/Navbar";
import QR from "../../assets/logos/QR.png";

import { useState, useEffect } from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import Popup from "reactjs-popup";


const TestSheetSetValue = () => { 



  const [addMedCount, setAddMedCount] = useState(0)
  const [medComp1, setmedComp1] = useState(false)  
  const [medComp2, setmedComp2] = useState(false)  
  const [medComp3, setmedComp3] = useState(false)  
  const [medComp4, setmedComp4] = useState(false)
  const [medComp5, setmedComp5] = useState(false) 
  const [medComp6, setmedComp6] = useState(false) 
  const [medComp7, setmedComp7] = useState(false) 
  const [medComp8, setmedComp8] = useState(false) 
  const [medComp9, setmedComp9] = useState(false) 
  const [medComp10, setmedComp10] = useState(false) 
  const [medComp11, setmedComp11] = useState(false) 
  const [medComp12, setmedComp12] = useState(false) 
  const [medComp13, setmedComp13] = useState(false) 
  const [medComp14, setmedComp14] = useState(false) 
  const [medComp15, setmedComp15] = useState(false) 
  const [medComp16, setmedComp16] = useState(false) 
  const [medComp17, setmedComp17] = useState(false) 
  const [medComp18, setmedComp18] = useState(false) 
  const [medComp19, setmedComp19] = useState(false) 
  const [medComp20, setmedComp20] = useState(false)
  

  const [addAtrCount, setAddAtrCount] = useState(0)
  const [atribute1, setAtribute1] = useState(false)
  const [atribute2, setAtribute2] = useState(false)
  const [atribute3, setAtribute3] = useState(false)
  const [atribute4, setAtribute4] = useState(false)
  const [atribute5, setAtribute5] = useState(false)
  const [atribute6, setAtribute6] = useState(false)
  const [atribute7, setAtribute7] = useState(false)
  const [atribute8, setAtribute8] = useState(false)
  const [atribute9, setAtribute9] = useState(false)
  const [atribute10, setAtribute10] = useState(false)
  const [atribute11, setAtribute11] = useState(false)
  const [atribute12, setAtribute12] = useState(false)
  const [atribute13, setAtribute13] = useState(false)
  const [atribute14, setAtribute14] = useState(false)
  const [atribute15, setAtribute15] = useState(false)
  const [atribute16, setAtribute16] = useState(false)
  const [atribute17, setAtribute17] = useState(false)
  const [atribute18, setAtribute18] = useState(false)
  const [atribute19, setAtribute19] = useState(false)
  const [atribute20, setAtribute20] = useState(false)

  const counterATUp = () => {
    if(addAtrCount < 20) setAddAtrCount (addAtrCount + 1)
  }
  const counterATDown = () => {
    setAddAtrCount (addAtrCount - 1)
  }
  useEffect(()=> {
    if (addAtrCount === 0){
      setAtribute1(false)
    } else if (addAtrCount === 1){
      setAtribute1(true)
      setAtribute2(false)
    } else if (addAtrCount === 2){
      setAtribute2(true)
      setAtribute3(false)
    } else if (addAtrCount === 3){
      setAtribute3(true)
      setAtribute4(false)
    } else if (addAtrCount === 4){
      setAtribute4(true)
      setAtribute5(false)
    } else if (addAtrCount === 5){
      setAtribute5(true)
      setAtribute6(false)
    } else if (addAtrCount === 6){
      setAtribute6(true)
      setAtribute7(false)
    } else if (addAtrCount === 7){
      setAtribute7(true)
      setAtribute8(false)
    } else if (addAtrCount === 8){
      setAtribute8(true)
      setAtribute9(false)
    } else if (addAtrCount === 9){
      setAtribute9(true)
      setAtribute10(false)
    } else if (addAtrCount === 10){
      setAtribute10(true)
      setAtribute11(false)
    } else if (addAtrCount === 11){
      setAtribute11(true)
      setAtribute12(false)
    } else if (addAtrCount === 12){
      setAtribute12(true)
      setAtribute13(false)
    } else if (addAtrCount === 13){
      setAtribute13(true)
      setAtribute14(false)
    } else if (addAtrCount === 14){
      setAtribute14(true)
      setAtribute15(false)
    } else if (addAtrCount === 15){
      setAtribute15(true)
      setAtribute16(false)
    } else if (addAtrCount === 16){
      setAtribute16(true)
      setAtribute17(false)
    } else if (addAtrCount === 17){
      setAtribute17(true)
      setAtribute18(false)
    } else if (addAtrCount === 18){
      setAtribute18(true)
      setAtribute19(false)
    } else if (addAtrCount === 19){
      setAtribute19(true)
      setAtribute20(false)
    } else if (addAtrCount === 20){
      setAtribute20(true)
    }
  },[addAtrCount])
  
  const counterUp = () => {
    if (addMedCount < 20 )setAddMedCount (addMedCount + 1)
  }
  const counterDown = () => {
    setAddMedCount (addMedCount - 1)
  }
  useEffect(()=> {
    if (addMedCount === 0){
      setmedComp1(false)
    } else if (addMedCount === 1){
      setmedComp1(true)
      setmedComp2(false)
    } else if (addMedCount === 2){
      setmedComp2(true)
      setmedComp3(false)
    } else if (addMedCount === 3){
      setmedComp3(true)
      setmedComp4(false)
    } else if (addMedCount === 4){
      setmedComp4(true)
      setmedComp5(false)
    } else if (addMedCount === 5){
      setmedComp5(true)
      setmedComp6(false)
    } else if (addMedCount === 6){
      setmedComp6(true)
      setmedComp7(false)
    } else if (addMedCount === 7){
      setmedComp7(true)
      setmedComp8(false)
    } else if (addMedCount === 8){
      setmedComp8(true)
      setmedComp9(false)
    } else if (addMedCount === 9){
      setmedComp9(true)
      setmedComp10(false)
    } else if (addMedCount === 10){
      setmedComp10(true)
      setmedComp11(false)
    } else if (addMedCount === 11){
      setmedComp11(true)
      setmedComp12(false)
    } else if (addMedCount === 12){
      setmedComp12(true)
      setmedComp13(false)
    } else if (addMedCount === 13){
      setmedComp13(true)
      setmedComp14(false)
    } else if (addMedCount === 14){
      setmedComp14(true)
      setmedComp15(false)
    } else if (addMedCount === 15){
      setmedComp15(true)
      setmedComp16(false)
    } else if (addMedCount === 16){
      setmedComp16(true)
      setmedComp17(false)
    } else if (addMedCount === 17){
      setmedComp17(true)
      setmedComp18(false)
    } else if (addMedCount === 18){
      setmedComp18(true)
      setmedComp19(false)
    } else if (addMedCount === 19){
      setmedComp19(true)
      setmedComp20(false)
    } else if (addMedCount === 20){
      setmedComp20(true)
    }
  },[addMedCount])
  


  const [digital] = useState(true);
  const [editMode, setEditMode] = useState(false);

  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  const openModal1 = () => {setOpen1(true);}
  const closeModal1 = () =>{setOpen1(false);}
  const twoFunctions = () =>{closeModal1(); setEditMode(true)}


  const closeModal2 = () =>{setOpen2(false);}
  const twoFunctions2 = () =>{setOpen3(false); setEditMode(false)}
  

  const validarSKU = (values) => {
    const errors = {};
    const re = /^[0-9]{8}[a-zA-Z]{2}$/
    
    if (!values.sku) {
      errors.sku = "Campo obligatorio";
    }
    else if (!re.test(values.sku)){
      errors.sku = "Formato de SKU invalido"
    }
    return errors
  };
  
  const validarVALUES = (values) => {
    const errors = {};
    const onlyNumbers = /^\d{1,4}(\.\d{1,2})?$/
    const nEValue = /OFF|60/;
    const nPValue = /^ON$/;
    const FCValue = /^ON$/;

      if (values.consumoNominal && !values.consumoNominal.match(onlyNumbers)) {
      errors.consumoNominal='Consumo Nominal con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."';
    } else if (values.consumoNominalINF && !values.consumoNominalINF.match(onlyNumbers)){
      errors.consumoNominalINF= 'Consumo Nominal mínimo con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    } else if (values.consumoNominalSUP && !values.consumoNominalSUP.match(onlyNumbers)){
      errors.consumoNominalSUP= 'Consumo Nominal máximo con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    }

      else if (values.consumoMinimo && !values.consumoMinimo.match(onlyNumbers)){
      errors.consumoMinimo = 'Consumo Mínimo Nominal con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    } else if (values.consumoMinimoINF && !values.consumoMinimoINF.match(onlyNumbers)){
      errors.consumoMinimoINF = 'Consumo Mínimo mínimo con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    } else if (values.consumoMinimoSUP && !values.consumoMinimoSUP.match(onlyNumbers)){
      errors.consumoMinimoSUP = 'Consumo Mínimo máximo con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    } 

      else if (values.potenciaNominal && !values.potenciaNominal.match(onlyNumbers)){
      errors.potenciaNominal = 'Potencia Nominal con Error, Ingrese hasta 4 números entero y dos decimales separados por "."'
    } else if (values.potenciaNominalINF && !values.potenciaNominalINF.match(onlyNumbers)){
      errors.potenciaNominalINF = 'Potencia Nominal mínima con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    } else if (values.potenciaNominalSUP && !values.potenciaNominalSUP.match(onlyNumbers)){
      errors.potenciaNominalSUP ='Potencia Nominal máxima con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    } 

      else if (values.potenciaMinima && !values.potenciaMinima.match(onlyNumbers)){
      errors.potenciaMinima = 'Potencia mínima con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    } else if (values.potenciaMinimaINF && !values.potenciaMinimaINF.match(onlyNumbers)){
      errors.potenciaMinimaINF = 'Potencia Mínima mínima con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    } else if (values.potencuaMinimaSUP && !values.potenciaMinimaSUP.match(onlyNumbers)){
      errors.potenciaMinimaSUP ='Potencia Mínima máxima con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    } 

      else if (values.rendimiento && !values.rendimiento.match(onlyNumbers)){
      errors.rendimiento = 'Rendimiento con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    } else if (values.rendimientoINF && !values.rendimientoINF.match(onlyNumbers)){
      errors.rendimientoINF = 'Rendiminto mínimo con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    } else if (values.rendiminetoSUP && !values.rendimientoSUP.match(onlyNumbers)){
      errors.rendimientoSUP ='Rendiminto máximo con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    } 

     else if (values.combustionNominal && !values.combustionNominal.match(onlyNumbers)){
      errors.combustionNominal = 'Combustión Nominal con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    } else if (values.combustionNominalAlerta && !values.combustionNominalAlerta.match(onlyNumbers)){
      errors.combustionNominalAlerta = 'Combustión Nominal Alerta con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    } else if (values.combustionNominalAlertaMax && !values.combustionNominalAlertaMax.match(onlyNumbers)){
      errors.combustionNominalAlertaMax ='Combustión Nominal Alerta máxima con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    } 

      else if (values.combustionMaxima && !values.combustionMaxima.match(onlyNumbers)){
      errors.combustionMaxima = 'Combustión Máxima con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    } else if (values.combustionMaximaAlerta && !values.combustionMaximaAlerta.match(onlyNumbers)){
      errors.combustionMaximaAlerta = 'Combustión Máxima Alerta con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    } else if (values.combustionMaximaAlertaMax && !values.combustionMaximaAlertaMax.match(onlyNumbers)){
      errors.combustionMaximaAlertaMax ='Combustión Máxima Alerta máxima con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    } 

      else if (values.combustionDucto && !values.combustionDucto.match(onlyNumbers)){
      errors.combustionDucto = 'Combustión Ducto con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    } else if (values.combustionDuctoAlerta && !values.combustionDuctoAlerta.match(onlyNumbers)){
      errors.combustionDuctoAlerta = 'Combustión Ducto Alerta con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    } else if (values.combustionDuctoAlertaMax && !values.combustionDuctoAlertaMax.match(onlyNumbers)){
      errors.combustionDuctoAlertaMax ='Combustión Ducto Alerta máxima con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    } 

      else if (values.combustionViento1m && !values.combustionViento1m.match(onlyNumbers)){
      errors.combustionViento1m = 'Combustión Viento 1m/s con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    } else if (values.combustionViento1mAlerta && !values.combustionViento1mAlerta.match(onlyNumbers)){
      errors.combustionViento1mAlerta = 'Combustión Viento 1m/s Alerta con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    } else if (values.combustionViento1mAlertaMax && !values.combustionViento1mAlertaMax.match(onlyNumbers)){
      errors.combustionViento1mAlertaMax ='Combustión Viento 1m/s Alerta máxima con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    } 

    else if (values.combustionViento3m && !values.combustionViento3m.match(onlyNumbers)){
      errors.combustionViento3m = 'Combustión Viento 3m/s con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    } else if (values.combustionViento3mAlerta && !values.combustionViento3mAlerta.match(onlyNumbers)){
      errors.combustionViento3mAlerta = 'Combustión Viento 3m/s Alerta con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    } else if (values.combustionViento3mAlertaMax && !values.combustionViento3mAlertaMax.match(onlyNumbers)){
      errors.combustionViento3mAlertaMax ='Combustión Viento 3m/s Alerta máxima con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    } 
// Complementarias

      else if (values.mc1 && !values.mc1.match(onlyNumbers)){
      errors.mc1 = 'Medición Complementaria 1 con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    } else if (values.mc1INF && !values.mc1INF.match(onlyNumbers)){
      errors.mc1INF = 'Medición Complementaria 1 mínimo con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    } else if (values.mc1SUP && !values.mc1SUP.match(onlyNumbers)){
      errors.mc1SUP ='Medición Complementaria 1 máximo Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    } 
    else if (values.mc2 && !values.mc2.match(onlyNumbers)){
      errors.mc2 = 'Medición Complementaria 2 con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    } else if (values.mc2INF && !values.mc2INF.match(onlyNumbers)){
      errors.mc2INF = 'Medición Complementaria 2 mínimo con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    } else if (values.mc2SUP && !values.mc2SUP.match(onlyNumbers)){
      errors.mc2SUP ='Medición Complementaria 2 máximo Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    }
    else if (values.mc3 && !values.mc3.match(onlyNumbers)){
      errors.mc3 = 'Medición Complementaria 3 con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    } else if (values.mc3INF && !values.mc3INF.match(onlyNumbers)){
      errors.mc2INF = 'Medición Complementaria 3 mínimo con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    } else if (values.mc3SUP && !values.mc3SUP.match(onlyNumbers)){
      errors.mc3SUP ='Medición Complementaria 3 máximo Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    }
    else if (values.mc4 && !values.mc4.match(onlyNumbers)){
      errors.mc4 = 'Medición Complementaria 4 con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    } else if (values.mc4INF && !values.mc4INF.match(onlyNumbers)){
      errors.mc4INF = 'Medición Complementaria 4 mínimo con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    } else if (values.mc4SUP && !values.mc4SUP.match(onlyNumbers)){
      errors.mc4SUP ='Medición Complementaria 4 máximo Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    }
    else if (values.mc5 && !values.mc5.match(onlyNumbers)){
      errors.mc5 = 'Medición Complementaria 5 con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    } else if (values.mc5INF && !values.mc5INF.match(onlyNumbers)){
      errors.mc5INF = 'Medición Complementaria 5 mínimo con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    } else if (values.mc5SUP && !values.mc5SUP.match(onlyNumbers)){
      errors.mc5SUP ='Medición Complementaria 5 máximo Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    }
    else if (values.mc6 && !values.mc6.match(onlyNumbers)){
      errors.mc6 = 'Medición Complementaria 6 con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    } else if (values.mc6INF && !values.mc6INF.match(onlyNumbers)){
      errors.mc6INF = 'Medición Complementaria 6 mínimo con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    } else if (values.mc6SUP && !values.mc6SUP.match(onlyNumbers)){
      errors.mc6SUP ='Medición Complementaria 6 máximo Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    }
    else if (values.mc7 && !values.mc7.match(onlyNumbers)){
      errors.mc7 = 'Medición Complementaria 7 con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    } else if (values.mc7INF && !values.mc7INF.match(onlyNumbers)){
      errors.mc7INF = 'Medición Complementaria 7 mínimo con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    } else if (values.mc7SUP && !values.mc7SUP.match(onlyNumbers)){
      errors.mc7SUP ='Medición Complementaria 7 máximo Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    }
    else if (values.mc8 && !values.mc8.match(onlyNumbers)){
      errors.mc8 = 'Medición Complementaria 8 con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    } else if (values.mc8INF && !values.mc8INF.match(onlyNumbers)){
      errors.mc8INF = 'Medición Complementaria 8 mínimo con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    } else if (values.mc8SUP && !values.mc8SUP.match(onlyNumbers)){
      errors.mc8SUP ='Medición Complementaria 8 máximo Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    }
    else if (values.mc9 && !values.mc9.match(onlyNumbers)){
      errors.mc9 = 'Medición Complementaria 9 con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    } else if (values.mc9INF && !values.mc9INF.match(onlyNumbers)){
      errors.mc9INF = 'Medición Complementaria 9 mínimo con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    } else if (values.mc9SUP && !values.mc9SUP.match(onlyNumbers)){
      errors.mc9SUP ='Medición Complementaria 9 máximo Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    }
    else if (values.mc10 && !values.mc10.match(onlyNumbers)){
      errors.mc10 = 'Medición Complementaria 10 con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    } else if (values.mc10INF && !values.mc10INF.match(onlyNumbers)){
      errors.mc10INF = 'Medición Complementaria 10 mínimo con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    } else if (values.mc10SUP && !values.mc10SUP.match(onlyNumbers)){
      errors.mc10SUP ='Medición Complementaria 10 máximo Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    }
    else if (values.mc11 && !values.mc11.match(onlyNumbers)){
      errors.mc11 = 'Medición Complementaria 11 con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    } else if (values.mc11INF && !values.mc11INF.match(onlyNumbers)){
      errors.mc11INF = 'Medición Complementaria 11 mínimo con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    } else if (values.mc11SUP && !values.mc11SUP.match(onlyNumbers)){
      errors.mc11SUP ='Medición Complementaria 11 máximo Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    }
    else if (values.mc12 && !values.mc12.match(onlyNumbers)){
      errors.mc12 = 'Medición Complementaria 12 con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    } else if (values.mc12INF && !values.mc12INF.match(onlyNumbers)){
      errors.mc12INF = 'Medición Complementaria 12 mínimo con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    } else if (values.mc12SUP && !values.mc12SUP.match(onlyNumbers)){
      errors.mc12SUP ='Medición Complementaria 12 máximo Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    }
    else if (values.mc13 && !values.mc13.match(onlyNumbers)){
      errors.mc13 = 'Medición Complementaria 13 con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    } else if (values.mc13INF && !values.mc13INF.match(onlyNumbers)){
      errors.mc13INF = 'Medición Complementaria 13 mínimo con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    } else if (values.mc13SUP && !values.mc13SUP.match(onlyNumbers)){
      errors.mc13SUP ='Medición Complementaria 13 máximo Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    }
    else if (values.mc14 && !values.mc14.match(onlyNumbers)){
      errors.mc14 = 'Medición Complementaria 14 con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    } else if (values.mc14INF && !values.mc14INF.match(onlyNumbers)){
      errors.mc14INF = 'Medición Complementaria 14 mínimo con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    } else if (values.mc14SUP && !values.mc14SUP.match(onlyNumbers)){
      errors.mc14SUP ='Medición Complementaria 14 máximo Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    }
    else if (values.mc15 && !values.mc15.match(onlyNumbers)){
      errors.mc15 = 'Medición Complementaria 15 con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    } else if (values.mc15INF && !values.mc15INF.match(onlyNumbers)){
      errors.mc15INF = 'Medición Complementaria 15 mínimo con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    } else if (values.mc15SUP && !values.mc15SUP.match(onlyNumbers)){
      errors.mc15SUP ='Medición Complementaria 15 máximo Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    }
    else if (values.mc16 && !values.mc16.match(onlyNumbers)){
      errors.mc16 = 'Medición Complementaria 16 con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    } else if (values.mc16INF && !values.mc16INF.match(onlyNumbers)){
      errors.mc16INF = 'Medición Complementaria 16 mínimo con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    } else if (values.mc16SUP && !values.mc16SUP.match(onlyNumbers)){
      errors.mc16SUP ='Medición Complementaria 16 máximo Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    }
    else if (values.mc17 && !values.mc17.match(onlyNumbers)){
      errors.mc17 = 'Medición Complementaria 17 con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    } else if (values.mc17INF && !values.mc17INF.match(onlyNumbers)){
      errors.mc17INF = 'Medición Complementaria 17 mínimo con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    } else if (values.mc17SUP && !values.mc17SUP.match(onlyNumbers)){
      errors.mc17SUP ='Medición Complementaria 17 máximo Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    }
    else if (values.mc18 && !values.mc18.match(onlyNumbers)){
      errors.mc18 = 'Medición Complementaria 18 con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    } else if (values.mc18INF && !values.mc18INF.match(onlyNumbers)){
      errors.mc18INF = 'Medición Complementaria 18 mínimo con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    } else if (values.mc18SUP && !values.mc18SUP.match(onlyNumbers)){
      errors.mc18SUP ='Medición Complementaria 18 máximo Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    }
    else if (values.mc19 && !values.mc19.match(onlyNumbers)){
      errors.mc19 = 'Medición Complementaria 19 con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    } else if (values.mc19INF && !values.mc19INF.match(onlyNumbers)){
      errors.mc19INF = 'Medición Complementaria 19 mínimo con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    } else if (values.mc19SUP && !values.mc19SUP.match(onlyNumbers)){
      errors.mc19SUP ='Medición Complementaria 19 máximo Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    }
    else if (values.mc20 && !values.mc20.match(onlyNumbers)){
      errors.mc20 = 'Medición Complementaria 20 con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    } else if (values.mc20INF && !values.mc20INF.match(onlyNumbers)){
      errors.mc20INF = 'Medición Complementaria 20 mínimo con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    } else if (values.mc20SUP && !values.mc20SUP.match(onlyNumbers)){
      errors.mc20SUP ='Medición Complementaria 20 máximo Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    }
// Digitales

    else if (values.FA && !values.FA.match(onlyNumbers)){
      errors.FA = 'FA con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    } 

    else if (values.PH && !values.PH.match(onlyNumbers)){
      errors.PH = 'PH con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    } else if (values.PHINF && !values.PHINF.match(onlyNumbers)){
      errors.PHINF = 'PH mínimo con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    } else if (values.PHSUP && !values.PHSUP.match(onlyNumbers)){
      errors.PHSUP ='PH máximo Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    }

    else if (values.FH && !values.FH.match(onlyNumbers)){
      errors.FH = 'FH con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    } else if (values.FHINF && !values.FHINF.match(onlyNumbers)){
      errors.FHINF = 'FH mínimo con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    } else if (values.FHSUP && !values.FHSUP.match(onlyNumbers)){
      errors.FHSUP ='FH máximo Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    }

    else if (values.PL && !values.PL.match(onlyNumbers)){
      errors.PL = 'PL con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    } else if (values.PLINF && !values.PLINF.match(onlyNumbers)){
      errors.PLINF = 'PL mínimo con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    } else if (values.PLSUP && !values.PLSUP.match(onlyNumbers)){
      errors.PLSUP ='PL máximo Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    }

    else if (values.FL && !values.FL.match(onlyNumbers)){
      errors.FL = 'FL con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    } else if (values.FLINF && !values.FLINF.match(onlyNumbers)){
      errors.FLINF = 'FL mínimo con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    } else if (values.FLSUP && !values.FLSUP.match(onlyNumbers)){
      errors.FLSUP ='FL máximo Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    }

    else if (values.dH && !values.dH.match(onlyNumbers)){
      errors.dH = 'dH con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    } else if (values.dHINF && !values.dHINF.match(onlyNumbers)){
      errors.dHINF = 'dH mínimo con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    } else if (values.dHSUP && !values.dHSUP.match(onlyNumbers)){
      errors.dHSUP ='dH máximo Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    }

    else if (values.dF && !values.dF.match(onlyNumbers)){
      errors.dF = 'dF con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    } else if (values.dFINF && !values.dFINF.match(onlyNumbers)){
      errors.dFINF = 'dF mínimo con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    } else if (values.dFSUP && !values.dFSUP.match(onlyNumbers)){
      errors.dFSUP ='dF máximo Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    }

    else if (values.nE && !values.nE.match(nEValue)){
      errors.nE = 'nE con Error, ingrese "OFF" o "60" '
    } 
    else if (values.nP && !values.nP.match(nPValue)){
      errors.nP = 'nP con Error, Solo puede ser "ON" '
    } 
    else if (values.HC && !values.HC.match(onlyNumbers)){
      errors.HC = 'HC con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    } 
    else if (values.LC && !values.LC.match(onlyNumbers)){
      errors.LC = 'LC con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    } 
    else if (values.FC && !values.FC.match(FCValue)){
      errors.FC = 'FC con Error, Solo puede ser "ON" '
    } 

    return errors;
  };



  const handleSubmitSKU = (values) => {
    const sku = {sku: values.sku}
    console.log("SKU", sku)
  }
  const handleSubmitVALUES = (values) => {
    setOpen3(true)
    
    const settingsObject = {
        caracteristicasExteriores:{
          Label1:{label:(values.label1)? values.label1:null,
                  resultadoM1:'',
                  resultadoM2:'',
                  resultadoM3:'',
                  resultadoM4:'',
                  resultadoM5:'',
                  resultadoM6:'',
                  resultadoM7:'',
                  resultadoM8:'',
          },
          Label2:{label:(values.label2)? values.label2:null,
            resultadoM1:'',
            resultadoM2:'',
            resultadoM3:'',
            resultadoM4:'',
            resultadoM5:'',
            resultadoM6:'',
            resultadoM7:'',
            resultadoM8:'',
          },
          Label3:{label:(values.label3)? values.label3:null,
            resultadoM1:'',
            resultadoM2:'',
            resultadoM3:'',
            resultadoM4:'',
            resultadoM5:'',
            resultadoM6:'',
            resultadoM7:'',
            resultadoM8:'',
          },
           Label4:{label:(values.label4)? values.label4:null,
            resultadoM1:'',
            resultadoM2:'',
            resultadoM3:'',
            resultadoM4:'',
            resultadoM5:'',
            resultadoM6:'',
            resultadoM7:'',
            resultadoM8:'',
          },  
          Label5:{label:(values.label5)? values.label5:null,
            resultadoM1:'',
            resultadoM2:'',
            resultadoM3:'',
            resultadoM4:'',
            resultadoM5:'',
            resultadoM6:'',
            resultadoM7:'',
            resultadoM8:'',
           }, 
           Label6:{label:(values.label6)? values.label6:null,
            resultadoM1:'',
            resultadoM2:'',
            resultadoM3:'',
            resultadoM4:'',
            resultadoM5:'',
            resultadoM6:'',
            resultadoM7:'',
            resultadoM8:'',
           },
           Label7:{label:(values.label7)? values.label7:null,
            resultadoM1:'',
            resultadoM2:'',
            resultadoM3:'',
            resultadoM4:'',
            resultadoM5:'',
            resultadoM6:'',
            resultadoM7:'',
            resultadoM8:'',
          },
          Label8:{label:(values.label8)? values.label8:null,
            resultadoM1:'',
            resultadoM2:'',
            resultadoM3:'',
            resultadoM4:'',
            resultadoM5:'',
            resultadoM6:'',
            resultadoM7:'',
            resultadoM8:'',
          },
          Label9:{label:(values.label9)? values.label9:null,
            resultadoM1:'',
            resultadoM2:'',
            resultadoM3:'',
            resultadoM4:'',
            resultadoM5:'',
            resultadoM6:'',
            resultadoM7:'',
            resultadoM8:'',
          },
          Label10:{label:(values.label10)? values.label10:null,
            resultadoM1:'',
            resultadoM2:'',
            resultadoM3:'',
            resultadoM4:'',
            resultadoM5:'',
            resultadoM6:'',
            resultadoM7:'',
            resultadoM8:'',
          },
          Label11:{label:(values.label11)? values.label11:null,
            resultadoM1:'',
            resultadoM2:'',
            resultadoM3:'',
            resultadoM4:'',
            resultadoM5:'',
            resultadoM6:'',
            resultadoM7:'',
            resultadoM8:'',
          },
          Label12:{label:(values.label12)? values.label12:null,
            resultadoM1:'',
            resultadoM2:'',
            resultadoM3:'',
            resultadoM4:'',
            resultadoM5:'',
            resultadoM6:'',
            resultadoM7:'',
            resultadoM8:'',
          },
          Label13:{label:(values.label13)? values.label13:null,
            resultadoM1:'',
            resultadoM2:'',
            resultadoM3:'',
            resultadoM4:'',
            resultadoM5:'',
            resultadoM6:'',
            resultadoM7:'',
            resultadoM8:'',
          },
          Label14:{label:(values.label14)? values.label14:null,
            resultadoM1:'',
            resultadoM2:'',
            resultadoM3:'',
            resultadoM4:'',
            resultadoM5:'',
            resultadoM6:'',
            resultadoM7:'',
            resultadoM8:'',
           },
           Label15:{label:(values.label15)? values.label15:null,
            resultadoM1:'',
            resultadoM2:'',
            resultadoM3:'',
            resultadoM4:'',
            resultadoM5:'',
            resultadoM6:'',
            resultadoM7:'',
            resultadoM8:'',
          },
          Label16:{label:(values.label16)? values.label16:null,
            resultadoM1:'',
            resultadoM2:'',
            resultadoM3:'',
            resultadoM4:'',
            resultadoM5:'',
            resultadoM6:'',
            resultadoM7:'',
            resultadoM8:'',
          },
          Label17:{label:(values.label17)? values.label17:null,
            resultadoM1:'',
            resultadoM2:'',
            resultadoM3:'',
            resultadoM4:'',
            resultadoM5:'',
            resultadoM6:'',
            resultadoM7:'',
            resultadoM8:'',
          },
          Label18:{label:(values.label18)? values.label18:null,
            resultadoM1:'',
            resultadoM2:'',
            resultadoM3:'',
            resultadoM4:'',
            resultadoM5:'',
            resultadoM6:'',
            resultadoM7:'',
            resultadoM8:'',
          },
          Label19:{label:(values.label19)? values.label19:null,
            resultadoM1:'',
            resultadoM2:'',
            resultadoM3:'',
            resultadoM4:'',
            resultadoM5:'',
            resultadoM6:'',
            resultadoM7:'',
            resultadoM8:'',
          },
          Label20:{label:(values.label20)? values.label20:null,
            resultadoM1:'',
            resultadoM2:'',
            resultadoM3:'',
            resultadoM4:'',
            resultadoM5:'',
            resultadoM6:'',
            resultadoM7:'',
            resultadoM8:'',
           },
        },
        parametrosComunes:{
          consumoNominal: {
            nominal:(Number(values.consumoNominal)),
            minimo:(Number(values.consumoNominalINF)), 
            maximo:(Number(values.consumoNominalSUP)), 
        },
        consumoMinimo: {
            nominal:(Number(values.consumoMinimo)),
            minimo:(Number(values.consumoMinimoINF)),
            maximo: (Number(values.consumoMinimoSUP)),
        },
        potenciaNominal: {
          nominal: (Number(values.potenciaNominal)),
          minimo: (Number(values.potenciaNominalINF)),
          maximo: (Number(values.potenciaNominalSUP)),
        },
        potenciaMinima: {
          nominal: (Number(values.potenciaMinima)),
          minimo: (Number(values.potenciaMinimaINF)),
          maximo: (Number(values.potenciaMinimaSUP)),
        },
        rendimiento: {
          nominal: (Number(values.rendimiento)),
          minimo: (Number(values.rendimientoINF)),
          maximo: (Number(values.rendimientoSUP)),
        }
      },
          Combustion:{
          CombustionNominal: {
          nominal: (Number(values.presionNominal)),
          alertaNominal: (Number(values.presionNominalAlerta)), 
          alertaMaxima: (Number(values.presionNominalA)),
        },
          CombustionMaxima: {
          nominal: (Number(values.combustionMaxima)),
          alertaNominal: (Number(values.combustionMaximaAlerta)), 
          alertaMaxima: (Number(values.combustionMaximaAlertaMax)),
        },
        CombustionDucto: {
          nominal: (Number(values.combustionDucto)),
          alertaNominal: (Number(values.combustionDuctoAlerta)), 
          alertaMaxima: (Number(values.combustionDuctoAlertaMax)),
        },
        CombustionViento1m: {
          nominal: (Number(values.combustionViento1m)),
          alertaNominal: (Number(values.combustionViento1mAlerta)), 
          alertaMaxima: (Number(values.combustionViento1mAlertaMax)),
        },
        CommbustionViento3m: {
          nominal: (Number(values.combustionViento3m)),
          alertaNominal: (Number(values.combustionViento3mAlerta)), 
          alertaMaxima: (Number(values.combustionViento3mAlertaMax)),
        },
        },
        medicionesComplementarias:{
          MC1:{
            label:values.labelmc1,
            nominal: (Number(values.mc1)),
            minimo: (Number(values.mc1INF)), 
            maximo: (Number(values.mc1SUP)),
          },
          MC2:{
            label:values.labelmc2,
            nominal: (Number(values.mc2)),
            minimo: (Number(values.mc2INF)), 
            maximo: (Number(values.mc2SUP)),
          },
          MC3:{
            label:values.labelmc3,
            nominal: (Number(values.mc3)),
            minimo: (Number(values.mc3INF)), 
            maximo: (Number(values.mc3SUP)),
          },
          MC4:{
            label:values.labelmc4,
            nominal: (Number(values.mc4)),
            minimo: (Number(values.mc4INF)), 
            maximo: (Number(values.mc4SUP)),
          },
          MC5:{
            label:values.labelmc5,
            nominal: (Number(values.mc5)),
            minimo: (Number(values.mc5INF)), 
            maximo: (Number(values.mc5SUP)),
          },
          MC6:{
            label:values.labelmc6,
            nominal: (Number(values.mc6)),
            minimo: (Number(values.mc6INF)), 
            maximo: (Number(values.mc6SUP)),
          },
          MC7:{
            label:values.labelmc7,
            nominal: (Number(values.mc7)),
            minimo: (Number(values.mc7INF)), 
            maximo: (Number(values.mc7SUP)),
          },
          MC8:{
            label:values.labelmc8,
            nominal: (Number(values.mc8)),
            minimo: (Number(values.mc8INF)), 
            maximo: (Number(values.mc8SUP)),
          },
          MC9:{
            label:values.labelmc9,
            nominal: (Number(values.mc9)),
            minimo: (Number(values.mc9INF)), 
            maximo: (Number(values.mc9SUP)),
          },
          MC10:{
            label:values.labelmc10,
            nominal: (Number(values.mc10)),
            minimo: (Number(values.mc10INF)), 
            maximo: (Number(values.mc10SUP)),
          },
          MC11:{
            label:values.labelmc11,
            nominal: (Number(values.mc11)),
            minimo: (Number(values.mc11INF)), 
            maximo: (Number(values.mc11SUP)),
          },
          MC12:{
            label:values.labelmc12,
            nominal: (Number(values.mc12)),
            minimo: (Number(values.mc12INF)), 
            maximo: (Number(values.mc12SUP)),
          },
          MC13:{
            label:values.labelmc13,
            nominal: (Number(values.mc13)),
            minimo: (Number(values.mc13INF)), 
            maximo: (Number(values.mc13SUP)),
          },
          MC14:{
            label:values.labelmc14,
            nominal: (Number(values.mc14)),
            minimo: (Number(values.mc14INF)), 
            maximo: (Number(values.mc14SUP)),
          },
          MC15:{
            label:values.labelmc15,
            nominal: (Number(values.mc15)),
            minimo: (Number(values.mc15INF)), 
            maximo: (Number(values.mc15SUP)),
          },
          MC16:{
            label:values.labelmc16,
            nominal: (Number(values.mc16)),
            minimo: (Number(values.mc16INF)), 
            maximo: (Number(values.mc16SUP)),
          },
          MC17:{
            label:values.labelmc17,
            nominal: (Number(values.mc17)),
            minimo: (Number(values.mc17INF)), 
            maximo: (Number(values.mc17SUP)),
          },
          MC18:{
            label:values.labelmc18,
            nominal: (Number(values.mc18)),
            minimo: (Number(values.mc18INF)), 
            maximo: (Number(values.mc18SUP)),
          },
          MC19:{
            label:values.labelmc19,
            nominal: (Number(values.mc19)),
            minimo: (Number(values.mc19INF)), 
            maximo: (Number(values.mc19SUP)),
          },
          MC20:{
            label:values.labelmc20,
            nominal: (Number(values.mc20)),
            minimo: (Number(values.mc20INF)), 
            maximo: (Number(values.mc20SUP)),
          },
        },
        parametrosDigitales:{
          FA: {
            nominal: (Number(values.FA)),
          },
          PH: {
            nominal: (Number(values.PH)),
            minimo: (Number(values.PHINF)), 
            maximmo: (Number(values.PHSUP)),
          },
          FH: {
            nominal:(Number(values.FH)),
            minimo: (Number(values.FHINF)), 
            maximo: (Number(values.FHSUP)),
        },
          PL: {
            nominal: (Number(values.PL)),
            minimo: (Number(values.PLINF)), 
            maximo: (Number(values.PLSUP)),
        },
          FL: {
            nominal: (Number(values.FL)),
            minimo: (Number(values.FLINF)), 
            maximo: (Number(values.FLSUP)),
        },
          dh: {
            nominal: (Number(values.dh)),
            minimo: (Number(values.dhINF)), 
            maximo: (Number(values.dhSUP)),
        },
          dF: {
            nominal: (Number(values.dF)),
            minimo: (Number(values.dFINF)), 
            maximo: (Number(values.dFSUP)),
        },
          nE: {
            nominal: (values.nE === "60")? Number(values.nE):values.nE,
          },
            nP: {
              nominal: values.nP,
          },
            HC: {
              nominal: (Number(values.HC)),
          },
            LC: {
              nominal: (Number(values.LC)),
          },
            FC: {
              nominal:values.FC,
          },
        },
        };
        window.localStorage.setItem("settings", JSON.stringify(settingsObject));
    }

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
              <div className="col s12 m12 l10">
              <p className="font-title-create-plan">Planilla de Ensayo QA(E)</p>
              <p className="font-subtitle-create-plan black-text">Determinación de requisitos SKU</p>
              <p className="font-subtitle-create-plan">Escenee el producto que desea editar</p>
              <div className="display-box-fine-tunning-scancode z-depth-1">

                  <Formik initialValues={{sku:''}} onSubmit={handleSubmitSKU}  validate={validarSKU} isValidating={false} isSubmitting={false} >
                    <Form>
                      <div className="col s3 m1 l1 ">
                        <button type="submit" className="hover-hand">
                          <i className="material-symbols-outlined qr-input">qr_code_scanner</i>
                        </button>
                      </div>
                      <div className="col s9 m10 push-m1 l10 push-l1 ">
                      <div className="input-field">
                            <label className="label-text-scan" htmlFor="sku" >SKU </label>
                                <Field name="sku" type="text" />
                                <div className="warning-inputs-scan right"><ErrorMessage name="sku" /></div>
                                </div>       
                      </div>
                    </Form>
                  </Formik>
              </div>
                <p className="display-box-title">Si no dispone de lector, ingrese el SKU manualmente.</p>
            </div>
            </div>
           

            <div className="col s11 m11 l3 push-l2">
                <p className="font-form-create-plan">RC:16-062</p>
                <p className="font-tunning-black">CODIGO DE PAIS: 054 (ARG)</p>
                <p className="font-tunning-black">ULTIMA VERSION: 27-07-2023</p>
                <p className="font-tunning-black">SKU: 1234-4321</p>
                <p className="font-tunning-black">DESCRIPCION: ARM-J26-KLM</p>
                <p className="font-tunning-black">USUARIO: NOMBRE APELLIDO</p>  
                <p className="font-tunning-black">VERSION: 1</p>
                <p className="font-tunning-black">PLATAFORMA: DIGITAL</p>
            </div>
        
            <div className="col s1 m1 l1 push-l1">
              <img className="qr right " src={QR} alt=""></img>
              {/* <i className=" right material-symbols-outlined print hover-hand">note_add</i> */}
              
              {/* <p className="font-tunning-black">Aprobado</p>
              <div className="reference-state-aprobado"></div>
              <p className="font-tunning-black">A.Observado</p>
              <div className="reference-state-observado"></div>
              <p className="font-tunning-black">Rechazado</p>
              <div className="reference-state-rechazado"></div> */}
            </div>

          
          </div>
        </div>
{/* --------------------------------------------Formulario------------------- */}

{/* //TITULOS// */}

      <div className="container">
        <div className="row "></div>

{/* //CARACTERISTICAS CUALITATIVAS// */}

        <Formik initialValues={{
        label1:'',
        label2:'',
        label3:'', 
        label4:'', 
        label5:'',
        label6:'',
        label7:'',
        label8:'',
        label9:'', 
        label10:'',
        label11:'', 
        label12:'', 
        label13:'', 
        label14:'', 
        label15:'', 
        label16:'', 
        label17:'', 
        label18:'', 
        label19:'',
        label20:'', 

        consumoNominal:0, consumoNominalINF:0, consumoNominalSUP:0, 
        consumoMinimo:0, consumoMinimoINF:0, consumoMinimoSUP:0,
        potenciaNominal:0, potenciaNominalINF:0, potenciaNominalSUP:0,
        potenciaMinima:0, potenciaMinimaINF:0, potenciaMinimaSUP:0,
        rendimiento:0, rendimientoINF:0, rendimientoSUP:0,

        combustionNominal:0, combustionNominalAlerta:0,  combustionNominalAlertaMax:0,
        combustionMaxima:0, combustionMaximaAlerta:0, combustionMaximaAlertaMax:0,
        combustionDucto:0, combustionDuctoAlerta:0, combustionDuctoAlertaMax:0,
        combustionViento1m:0, combustionViento1mAlerta:0, combustionViento1mAlertaMax:0,
        combustionViento3m:0, combustionViento3mAlerta:0, combustionViento3mAlertaMax:0,

       labelmc1:'', mc1:0, mc1INF:0, mc1SUP:0,
       labelmc2:'', mc2:0, mc2INF:0, mc2SUP:0,
       labelmc3:'', mc3:0, mc3INF:0, mc3SUP:0, 
       labelmc4:'', mc4:0, mc4INF:0, mc4SUP:0, 
       labelmc5:'', mc5:0, mc5INF:0, mc5SUP:0, 
       labelmc6:'', mc6:0, mc6INF:0, mc6SUP:0, 
       labelmc7:'', mc7:0, mc7INF:0, mc7SUP:0, 
       labelmc8:'', mc8:0, mc8INF:0, mc8SUP:0, 
       labelmc9:'', mc9:0, mc9INF:0, mc9SUP:0,
       labelmc10:'', mc10:0, mc10INF:0, mc10SUP:0,
       labelmc11:'', mc11:0, mc11INF:0, mc11SUP:0,
       labelmc12:'', mc12:0, mc12INF:0, mc12SUP:0, 
       labelmc13:'', mc13:0, mc13INF:0, mc13SUP:0, 
       labelmc14:'', mc14:0, mc14INF:0, mc14SUP:0, 
       labelmc15:'', mc15:0, mc15INF:0, mc15SUP:0, 
       labelmc16:'', mc16:0, mc16INF:0, mc16SUP:0, 
       labelmc17:'', mc17:0, mc17INF:0, mc17SUP:0,
       labelmc18:'', mc18:0, mc18INF:0, mc18SUP:0,
       labelmc19:'', mc19:0, mc19INF:0, mc19SUP:0, 
       labelmc20:'', mc20:0, mc20INF:0, mc20SUP:0, 
       
       FA:0,
       PH:0, PHINF:0, PHSUP:0, 
       FH:0, FHINF:0, FHSUP:0, 
       PL:0, PLINF:0, PLSUP:0, 
       FL:0, FLINF:0, FLSUP:0, 
       dh:0, dhINF:0, dhSUP:0, 
       dF:0, dFINF:0, dFSUP:0, 
       nE:'OFF',
       nP:'ON', 
       HC:0, 
       LC:0,
       FC:'ON', 
      }} 
        onSubmit={handleSubmitVALUES}  validate={validarVALUES} isValidating={false} isSubmitting={false} >
        <Form>

        <div className="col s12 m12 l12 no-margin center">
              <div className="col s1 m1 l12">
                {editMode?
                  <i onClick={counterATUp} className="material-symbols-outlined add_circle hover-hand left">add_circle</i> :null}
                  {atribute1 === true && editMode?
                  <i onClick={counterATDown} className="material-symbols-outlined add_circle hover-hand left">do_not_disturb_on</i>:null} 
                  <p className="display-box-title-ensayo-QA left">CARACTERISTICAS CUALITATIVAS</p>
              </div>
              {/* <div className="col s1 m1 l12">
                  <div className="warning-inputs-scan left"><ErrorMessage name="mc1"/></div>
                  <div className="warning-inputs-scan left"><ErrorMessage name="mc1Label"/></div>
                  <div className="warning-inputs-scan left"><ErrorMessage name="mc2"/></div>
                  <div className="warning-inputs-scan left"><ErrorMessage name="mc2Label"/></div>
                  <div className="warning-inputs-scan left"><ErrorMessage name="mc3"/></div>
                  <div className="warning-inputs-scan left"><ErrorMessage name="mc3Label"/></div>
              </div> */}
            </div>
            {/* <div className="row row-fix">
            <div className="col s12 m12 l12 center-align no-margin">
                <div className="col s1 m1 l8">
                <div className="display-box-fine-tunning z-depth-1 limites">
                  <Field name="at1" disabled={!editMode} className="input-label-ensayo" placeholder="Caracteristica Existente" maxLength="31"/>
                </div>
                </div>
              </div>
            </div> */}
        {atribute1 === true?
          <div className="row row-fix">
            <div className="col s12 m12 l12 center-align no-margin">
                <div className="col s1 m1 l8">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue">
                  <Field name="label1" disabled={!editMode} className="input-label-ensayo" placeholder="Ingrese Característica Cualitativa" maxLength="31"/>
                </div>
                </div>
              </div>
            </div>:null}
            {atribute2 === true?
          <div className="row row-fix">
            <div className="col s12 m12 l12 center-align no-margin">
                <div className="col s1 m1 l8">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue">
                  <Field name="label2" disabled={!editMode} className="input-label-ensayo" placeholder="Ingrese Característica Cualitativa" maxLength="31"/>
                </div>
                </div>
              </div>
            </div>:null}
            {atribute3 === true?
          <div className="row row-fix">
            <div className="col s12 m12 l12 center-align no-margin">
                <div className="col s1 m1 l8">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue">
                  <Field name="label3" disabled={!editMode} className="input-label-ensayo" placeholder="Ingrese Característica Cualitativa" maxLength="31"/>
                </div>
                </div>
              </div>
            </div>:null}
            {atribute4 === true?
          <div className="row row-fix">
            <div className="col s12 m12 l12 center-align no-margin">
                <div className="col s1 m1 l8">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue">
                  <Field name="label4" disabled={!editMode} className="input-label-ensayo" placeholder="Ingrese Característica Cualitativa" maxLength="31"/>
                </div>
                </div>
              </div>
            </div>:null}
            {atribute5 === true?
          <div className="row row-fix">
            <div className="col s12 m12 l12 center-align no-margin">
                <div className="col s1 m1 l8">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue">
                  <Field name="label5" disabled={!editMode} className="input-label-ensayo" placeholder="Ingrese Característica Cualitativa" maxLength="31"/>
                </div>
                </div>
              </div>
            </div>:null}
            {atribute6 === true?
          <div className="row row-fix">
            <div className="col s12 m12 l12 center-align no-margin">
                <div className="col s1 m1 l8">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue">
                  <Field name="label6" disabled={!editMode} className="input-label-ensayo" placeholder="Ingrese Característica Cualitativa" maxLength="31"/>
                </div>
                </div>
              </div>
            </div>:null}
            {atribute7 === true?
          <div className="row row-fix">
            <div className="col s12 m12 l12 center-align no-margin">
                <div className="col s1 m1 l8">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue">
                  <Field name="label7" disabled={!editMode} className="input-label-ensayo" placeholder="Ingrese Característica Cualitativa" maxLength="31"/>
                </div>
                </div>
              </div>
            </div>:null}
            {atribute8 === true?
          <div className="row row-fix">
            <div className="col s12 m12 l12 center-align no-margin">
                <div className="col s1 m1 l8">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue">
                  <Field name="label8" disabled={!editMode} className="input-label-ensayo" placeholder="Ingrese Característica Cualitativa" maxLength="31"/>
                </div>
                </div>
              </div>
            </div>:null}
            {atribute9 === true?
          <div className="row row-fix">
            <div className="col s12 m12 l12 center-align no-margin">
                <div className="col s1 m1 l8">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue">
                  <Field name="label9" disabled={!editMode} className="input-label-ensayo" placeholder="Ingrese Característica Cualitativa" maxLength="31"/>
                </div>
                </div>
              </div>
            </div>:null}
            {atribute10 === true?
          <div className="row row-fix">
            <div className="col s12 m12 l12 center-align no-margin">
                <div className="col s1 m1 l8">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue">
                  <Field name="label10" disabled={!editMode} className="input-label-ensayo" placeholder="Ingrese Característica Cualitativa" maxLength="31"/>
                </div>
                </div>
              </div>
            </div>:null}
            {atribute11 === true?
          <div className="row row-fix">
            <div className="col s12 m12 l12 center-align no-margin">
                <div className="col s1 m1 l8">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue">
                  <Field name="label11" disabled={!editMode} className="input-label-ensayo" placeholder="Ingrese Característica Cualitativa" maxLength="31"/>
                </div>
                </div>
              </div>
            </div>:null}
            {atribute12 === true?
          <div className="row row-fix">
            <div className="col s12 m12 l12 center-align no-margin">
                <div className="col s1 m1 l8">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue">
                  <Field name="label12" disabled={!editMode} className="input-label-ensayo" placeholder="Ingrese Característica Cualitativa" maxLength="31"/>
                </div>
                </div>
              </div>
            </div>:null}
            {atribute13 === true?
          <div className="row row-fix">
            <div className="col s12 m12 l12 center-align no-margin">
                <div className="col s1 m1 l8">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue">
                  <Field name="label13" disabled={!editMode} className="input-label-ensayo" placeholder="Ingrese Característica Cualitativa" maxLength="31"/>
                </div>
                </div>
              </div>
            </div>:null}
            {atribute14 === true?
          <div className="row row-fix">
            <div className="col s12 m12 l12 center-align no-margin">
                <div className="col s1 m1 l8">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue">
                  <Field name="label14" disabled={!editMode} className="input-label-ensayo" placeholder="Ingrese Característica Cualitativa" maxLength="31"/>
                </div>
                </div>
              </div>
            </div>:null}
            {atribute15 === true?
          <div className="row row-fix">
            <div className="col s12 m12 l12 center-align no-margin">
                <div className="col s1 m1 l8">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue">
                  <Field name="label15" disabled={!editMode} className="input-label-ensayo" placeholder="Ingrese Característica Cualitativa" maxLength="31"/>
                </div>
                </div>
              </div>
            </div>:null}
            {atribute16 === true?
          <div className="row row-fix">
            <div className="col s12 m12 l12 center-align no-margin">
                <div className="col s1 m1 l8">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue">
                  <Field name="label16" disabled={!editMode} className="input-label-ensayo" placeholder="Ingrese Característica Cualitativa" maxLength="31"/>
                </div>
                </div>
              </div>
            </div>:null}
            {atribute17 === true?
          <div className="row row-fix">
            <div className="col s12 m12 l12 center-align no-margin">
                <div className="col s1 m1 l8">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue">
                  <Field name="label17" disabled={!editMode} className="input-label-ensayo" placeholder="Ingrese Característica Cualitativa" maxLength="31"/>
                </div>
                </div>
              </div>
            </div>:null}
            {atribute18 === true?
          <div className="row row-fix">
            <div className="col s12 m12 l12 center-align no-margin">
                <div className="col s1 m1 l8">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue">
                  <Field name="label18" disabled={!editMode} className="input-label-ensayo" placeholder="Ingrese Característica Cualitativa" maxLength="31"/>
                </div>
                </div>
              </div>
            </div>:null}
            {atribute19 === true?
          <div className="row row-fix">
            <div className="col s12 m12 l12 center-align no-margin">
                <div className="col s1 m1 l8">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue">
                  <Field name="label19" disabled={!editMode} className="input-label-ensayo" placeholder="Ingrese Característica Cualitativa" maxLength="31"/>
                </div>
                </div>
              </div>
            </div>:null}
            {atribute20 === true?
          <div className="row row-fix">
            <div className="col s12 m12 l12 center-align no-margin">
                <div className="col s1 m1 l8">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue">
                  <Field name="label20" disabled={!editMode} className="input-label-ensayo" placeholder="Ingrese Característica Cualitativa" maxLength="31"/>
                </div>
                </div>
              </div>
            </div>:null}
            


          <div className="row"></div>

          <div className="row row-fix ">
            <div className="col s12 m12 l8 left">
                <p className="display-box-title-ensayo-QA">VALORES DECLARADOS</p>
                <div className="warning-inputs-scan"><ErrorMessage name="consumoNominal"/></div>
                <div className="warning-inputs-scan"><ErrorMessage name="consumoNominalSUP"/></div>
                <div className="warning-inputs-scan"><ErrorMessage name="consumoNominalINF"/></div>

                <div className="warning-inputs-scan"><ErrorMessage name="consumoMinimo"/></div>
                <div className="warning-inputs-scan"><ErrorMessage name="consumoMinimoINF"/></div>
                <div className="warning-inputs-scan"><ErrorMessage name="consumoMinimoSUP"/></div>

                <div className="warning-inputs-scan"><ErrorMessage name="potenciaNominal"/></div>
                <div className="warning-inputs-scan"><ErrorMessage name="potenciaNominalINF"/></div>
                <div className="warning-inputs-scan"><ErrorMessage name="potenciaNominalSUP"/></div>

                <div className="warning-inputs-scan"><ErrorMessage name="potenciaMinima"/></div>
                <div className="warning-inputs-scan"><ErrorMessage name="potenciaMinimaINF"/></div>
                <div className="warning-inputs-scan"><ErrorMessage name="potenciaMinimaSUP"/></div>

                <div className="warning-inputs-scan"><ErrorMessage name="rendimiento"/></div>
                <div className="warning-inputs-scan"><ErrorMessage name="rendimientoINF"/></div>
                <div className="warning-inputs-scan"><ErrorMessage name="rendimientoSUP"/></div>

            </div>
            <div className="col s4 no-margin">
                <div className="col s12 m12 l4 center">
                    <p className="display-box-title-ensayo-QA">NOMINAL</p>        
                </div>
                <div className="col s12 m12 l4 center">
                    <p className="display-box-title-ensayo-QA">MINIMO</p>        
                </div>
                <div className="col s12 m12 l4 center">
                    <p className="display-box-title-ensayo-QA">MAXIMO</p>        
                </div>

            </div>
          </div>
            
{/* //CARACTERISTICAS // */}

          <div className="row row-fix"></div>
        
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l8">
              <div className="display-box-test-setup z-depth-1 background-grey">
                  <p className="text-production-register">Consumo Nominal (± 5%)</p>
              </div>
              </div>
              <div className="col l4 no-margin">
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 nominal">
                <Field name="consumoNominal" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 limites">
                <Field name="consumoNominalINF" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/> 
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 limites">
                <Field name="consumoNominalSUP" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>
              </div>
            </div>


          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l8">
              <div className="display-box-test-setup z-depth-1 background-grey">
                  <p className="text-production-register">Consumo Mínimo (± 5%)</p>
              </div>
              </div>
              <div className="col l4 no-margin">
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 nominal input-field-fine-tunning">
                <Field name="consumoMinimo" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
           
                
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                <Field name="consumoMinimoINF" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
             
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                <Field name="consumoMinimoSUP" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
               
                </div>
              </div>
              </div>
            </div>
          </div>



          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l8">
              <div className="display-box-test-setup z-depth-1 background-grey">
                  <p className="text-production-register">Potencia Nominal (± 5%)</p>
              </div>
              </div>
              <div className="col l4 no-margin">
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 nominal input-field-fine-tunning">
                <Field name="potenciaNominal" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                <Field name="potenciaNominalINF" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                <Field name="potenciaNominalSUP" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
               
                </div>
              </div>
              </div>
            </div>
          </div>
          

          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l8">
              <div className="display-box-test-setup z-depth-1 background-grey">
                  <p className="text-production-register">Potencia Mínima (± 5%)</p>
              </div>
              </div>
              <div className="col l4 no-margin">
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 nominal input-field-fine-tunning">
                <Field name="potenciaMinima" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
               
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                <Field name="potenciaMinimaINF" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                <Field name="potenciaMinimaSUP" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                
                </div>
              </div>
              </div>
            </div>
          </div>

          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l8">
              <div className="display-box-test-setup z-depth-1 background-grey">
                  <p className="text-production-register">Rendimiento (± 5%)</p>
              </div>
              </div>
              <div className="col l4 no-margin">
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 nominal input-field-fine-tunning">
                <Field name="rendimiento" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
               
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                <Field name="rendimientoINF" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                <Field name="rendimientoSUP" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                
                </div>
              </div>
              </div>
            </div>
          </div>
          
{/* //MEDICION DE COMBUSTION // */}

          <div className="row"></div>

          <div className="row row-fix ">
          <div className="col s12 m12 l12 no-margin left">
              <div className="col s1 m1 l8 left">
                  <p className="display-box-title-ensayo-QA">COMBUSTION (PPM)</p>

                  <div className="warning-inputs-scan"><ErrorMessage name="combustionNominal"/></div>
                  <div className="warning-inputs-scan"><ErrorMessage name="combustionNominalAlerta"/></div>
                  <div className="warning-inputs-scan"><ErrorMessage name="combustionNominalAlertaMax"/></div>
                  <div className="warning-inputs-scan"><ErrorMessage name="combustionMaxima"/></div>
                  <div className="warning-inputs-scan"><ErrorMessage name="combustionMaximaAlerta"/></div>
                  <div className="warning-inputs-scan"><ErrorMessage name="combustionMaximaAlertaMax"/></div>
                  <div className="warning-inputs-scan"><ErrorMessage name="combustionDucto"/></div>
                  <div className="warning-inputs-scan"><ErrorMessage name="combustionDuctoAlerta"/></div>
                  <div className="warning-inputs-scan"><ErrorMessage name="combustionDuctoAlertaMax"/></div>
                  <div className="warning-inputs-scan"><ErrorMessage name="combustionViento1m"/></div>
                  <div className="warning-inputs-scan"><ErrorMessage name="combustionViento1mAlerta"/></div>
                  <div className="warning-inputs-scan"><ErrorMessage name="combustionViento1mAlertaMax"/></div>
                  <div className="warning-inputs-scan"><ErrorMessage name="combustionViento3m"/></div>
                  <div className="warning-inputs-scan"><ErrorMessage name="combustionViento3mAlerta"/></div>
                  <div className="warning-inputs-scan"><ErrorMessage name="combustionViento3mAlertaMax"/></div>
              </div>
              <div className="col s4 no-margin">
                <div className="col s12 m12 l4 center">
                    <p className="display-box-title-ensayo-QA">NOMINAL</p>        
                </div>
                <div className="col s12 m12 l4 center">
                    <p className="display-box-title-ensayo-QA">ALERTA NOMINAL</p>        
                </div>
                <div className="col s12 m12 l4 center">
                    <p className="display-box-title-ensayo-QA">ALERTA MAXIMA</p>        
                </div>
            </div>
            </div>
          </div>

          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l8">
              <div className="display-box-test-setup z-depth-1 background-grey">
                  <p className="text-production-register">Nominal</p>
              </div>
              </div>
              <div className="col l4 no-margin">
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 nominal input-field-fine-tunning">
                <Field name="combustionNominal" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 alerta input-field-fine-tunning">
                <Field name="combustionNominalAlerta" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 alerta input-field-fine-tunning">
                <Field name="combustionNominalAlertaMax" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>
              </div>
              
            </div>
          </div>

          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l8">
              <div className="display-box-test-setup z-depth-1 background-grey">
                  <p className="text-production-register">Máxima</p>
              </div>
              </div>
              <div className="col l4 no-margin">
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 nominal input-field-fine-tunning">
                <Field name="combustionMaxima" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 alerta input-field-fine-tunning">
                <Field name="combustionMaximaAlerta" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 alerta input-field-fine-tunning">
                <Field name="combustionMaximaAlertaMax" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>
              </div>
            </div>
          </div>

          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l8">
              <div className="display-box-test-setup z-depth-1 background-grey">
                  <p className="text-production-register">Ducto</p>
              </div>
              </div>
              <div className="col l4 no-margin">
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 nominal input-field-fine-tunning">
                <Field name="combustionDucto"  disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/> 
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 alerta input-field-fine-tunning">
                <Field name="combustionDuctoAlerta" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 alerta input-field-fine-tunning">
                <Field name="combustionDuctoAlertaMax" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>
              </div>
            </div>
          </div>

          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l8">
              <div className="display-box-test-setup z-depth-1 background-grey">
                  <p className="text-production-register">Viento en contra (1m/s)</p>
              </div>
              </div>
              <div className="col l4 no-margin">
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 nominal input-field-fine-tunning">
                <Field name="combustionViento1m" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>      
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 alerta input-field-fine-tunning">
                <Field name="combustionViento1mAlerta" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 alerta input-field-fine-tunning">
                <Field name="combustionViento1mAlertaMax" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>
              </div>
            </div>
          </div>

          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l8">
              <div className="display-box-test-setup z-depth-1 background-grey">
                  <p className="text-production-register">Viento en contra (3m/s)</p>
              </div>
              </div>
              <div className="col l4 no-margin">
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 nominal input-field-fine-tunning">
                <Field name="combustionViento3m" disabled={!editMode} className="inputfield-fine-tunning"/>
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 alerta input-field-fine-tunning">
                <Field name="combustionViento3mAlerta" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 alerta input-field-fine-tunning">
                <Field name="combustionViento3mAlertaMax" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>
              </div>
            </div>
          </div>



          <div className="row"></div>

          <div className="row row-fix ">
          <div className="col s12 m12 l12 no-margin left">
              <div className="col s1 m1 l8 left">
              
                {editMode?
                  <i onClick={counterUp} className="material-symbols-outlined add_circle hover-hand left">add_circle</i> :null}
                  {medComp1 === true && editMode?
                  <i onClick={counterDown} className="material-symbols-outlined add_circle hover-hand left">do_not_disturb_on</i>:null} 
              
                  <p className="display-box-title-ensayo-QA">MEDICIONES COMPLEMENTARIAS</p>
                  <div className="warning-inputs-scan"><ErrorMessage name="mc1"/></div>
                  <div className="warning-inputs-scan"><ErrorMessage name="mc1INF"/></div>
                  <div className="warning-inputs-scan"><ErrorMessage name="mc1SUP"/></div>

                  <div className="warning-inputs-scan"><ErrorMessage name="mc2"/></div>
                  <div className="warning-inputs-scan"><ErrorMessage name="mc2INF"/></div>
                  <div className="warning-inputs-scan"><ErrorMessage name="mc2SUP"/></div>

                  <div className="warning-inputs-scan"><ErrorMessage name="mc3"/></div>
                  <div className="warning-inputs-scan"><ErrorMessage name="mc3INF"/></div>
                  <div className="warning-inputs-scan"><ErrorMessage name="mc3SUP"/></div>

                  <div className="warning-inputs-scan"><ErrorMessage name="mc4"/></div>
                  <div className="warning-inputs-scan"><ErrorMessage name="mc4INF"/></div>
                  <div className="warning-inputs-scan"><ErrorMessage name="mc4SUP"/></div>

                  <div className="warning-inputs-scan"><ErrorMessage name="mc5"/></div>
                  <div className="warning-inputs-scan"><ErrorMessage name="mc5INF"/></div>
                  <div className="warning-inputs-scan"><ErrorMessage name="mc5SUP"/></div>

                  <div className="warning-inputs-scan"><ErrorMessage name="mc6"/></div>
                  <div className="warning-inputs-scan"><ErrorMessage name="mc6INF"/></div>
                  <div className="warning-inputs-scan"><ErrorMessage name="mc6SUP"/></div>

                  <div className="warning-inputs-scan"><ErrorMessage name="mc7"/></div>
                  <div className="warning-inputs-scan"><ErrorMessage name="mc7INF"/></div>
                  <div className="warning-inputs-scan"><ErrorMessage name="mc7SUP"/></div>

                  <div className="warning-inputs-scan"><ErrorMessage name="mc8"/></div>
                  <div className="warning-inputs-scan"><ErrorMessage name="mc8INF"/></div>
                  <div className="warning-inputs-scan"><ErrorMessage name="mc8SUP"/></div>

                  <div className="warning-inputs-scan"><ErrorMessage name="mc9"/></div>
                  <div className="warning-inputs-scan"><ErrorMessage name="mc9INF"/></div>
                  <div className="warning-inputs-scan"><ErrorMessage name="mc9SUP"/></div>
                  
                  <div className="warning-inputs-scan"><ErrorMessage name="mc10"/></div>
                  <div className="warning-inputs-scan"><ErrorMessage name="mc10INF"/></div>
                  <div className="warning-inputs-scan"><ErrorMessage name="mc10SUP"/></div>

                  <div className="warning-inputs-scan"><ErrorMessage name="mc11"/></div>
                  <div className="warning-inputs-scan"><ErrorMessage name="mc11INF"/></div>
                  <div className="warning-inputs-scan"><ErrorMessage name="mc11SUP"/></div>

                  <div className="warning-inputs-scan"><ErrorMessage name="mc12"/></div>
                  <div className="warning-inputs-scan"><ErrorMessage name="mc12INF"/></div>
                  <div className="warning-inputs-scan"><ErrorMessage name="mc12SUP"/></div>

                  <div className="warning-inputs-scan"><ErrorMessage name="mc13"/></div>
                  <div className="warning-inputs-scan"><ErrorMessage name="mc13INF"/></div>
                  <div className="warning-inputs-scan"><ErrorMessage name="mc13SUP"/></div>

                  <div className="warning-inputs-scan"><ErrorMessage name="mc14"/></div>
                  <div className="warning-inputs-scan"><ErrorMessage name="mc14INF"/></div>
                  <div className="warning-inputs-scan"><ErrorMessage name="mc14SUP"/></div>

                  <div className="warning-inputs-scan"><ErrorMessage name="mc15"/></div>
                  <div className="warning-inputs-scan"><ErrorMessage name="mc15INF"/></div>
                  <div className="warning-inputs-scan"><ErrorMessage name="mc15SUP"/></div>

                  <div className="warning-inputs-scan"><ErrorMessage name="mc16"/></div>
                  <div className="warning-inputs-scan"><ErrorMessage name="mc16INF"/></div>
                  <div className="warning-inputs-scan"><ErrorMessage name="mc16SUP"/></div>

                  <div className="warning-inputs-scan"><ErrorMessage name="mc17"/></div>
                  <div className="warning-inputs-scan"><ErrorMessage name="mc17INF"/></div>
                  <div className="warning-inputs-scan"><ErrorMessage name="mc17SUP"/></div>

                  <div className="warning-inputs-scan"><ErrorMessage name="mc18"/></div>
                  <div className="warning-inputs-scan"><ErrorMessage name="mc18INF"/></div>
                  <div className="warning-inputs-scan"><ErrorMessage name="mc18SUP"/></div>

                  <div className="warning-inputs-scan"><ErrorMessage name="mc19"/></div>
                  <div className="warning-inputs-scan"><ErrorMessage name="mc19INF"/></div>
                  <div className="warning-inputs-scan"><ErrorMessage name="mc19SUP"/></div>

                  <div className="warning-inputs-scan"><ErrorMessage name="mc20"/></div>
                  <div className="warning-inputs-scan"><ErrorMessage name="mc20INF"/></div>
                  <div className="warning-inputs-scan"><ErrorMessage name="mc20SUP"/></div>

                  
                  
              </div>
              {medComp1 === true?
                        <div className="col s4 no-margin">
                          <div className="col s12 m12 l4 center">
                              <p className="display-box-title-ensayo-QA">NOMINAL</p>        
                          </div>
                          <div className="col s12 m12 l4 center">
                              <p className="display-box-title-ensayo-QA">MINIMO</p>        
                          </div>
                          <div className="col s12 m12 l4 center">
                              <p className="display-box-title-ensayo-QA">MAXIMO</p>        
                          </div>
                      </div>:null}
            </div>
          </div>

          
          {medComp1 === true?
          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l8">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue">
                  <Field name="labelmc1" disabled={!editMode} className="input-label-ensayo" placeholder="Ingrese nombre del Parámetro" maxLength="60"/>
                </div>
           
              </div>
              <div className="col l4 no-margin">
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 nominal input-field-fine-tunning">
                <Field name="mc1" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                <Field name="mc1INF" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
              
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                <Field name="mc1SUP" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                
                </div>
              </div>
              </div>
            </div>
          </div>:null}

          {medComp2 === true?
          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l8">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue">
                  <Field name="labelmc2" disabled={!editMode} className="input-label-ensayo" placeholder="Ingrese nombre del Parámetro" maxLength="50"/>
                </div>
           
              </div>
              <div className="col l4 no-margin">
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 nominal input-field-fine-tunning">
                <Field name="mc2" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                <Field name="mc2INF" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
              
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                <Field name="mc2SUP" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                
                </div>
              </div>
              </div>
            </div>
          </div>:null}

          {medComp3 === true?
          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l8">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue">
                  <Field name="labelmc3" disabled={!editMode} className="input-label-ensayo" placeholder="Ingrese nombre del Parámetro" maxLength="50"/>
                </div>
           
              </div>
              <div className="col l4 no-margin">
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 nominal input-field-fine-tunning">
                <Field name="mc3" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                <Field name="mc3INF" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
              
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                <Field name="mc3SUP" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                
                </div>
              </div>
              </div>
            </div>
          </div>:null}
          {medComp4 === true?
          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l8">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue">
                  <Field name="labelmc4" disabled={!editMode} className="input-label-ensayo" placeholder="Ingrese nombre del Parámetro" maxLength="50"/>
                </div>
           
              </div>
              <div className="col l4 no-margin">
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 nominal input-field-fine-tunning">
                <Field name="mc4" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                <Field name="mc4INF" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
              
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                <Field name="mc4SUP" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                
                </div>
              </div>
              </div>
            </div>
          </div>:null}
          {medComp5 === true?
          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l8">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue">
                  <Field name="labelmc5" disabled={!editMode} className="input-label-ensayo" placeholder="Ingrese nombre del Parámetro" maxLength="50"/>
                </div>
           
              </div>
              <div className="col l4 no-margin">
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 nominal input-field-fine-tunning">
                <Field name="mc5" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                <Field name="mc5INF" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
              
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                <Field name="mc5SUP" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                
                </div>
              </div>
              </div>
            </div>
          </div>:null}
          {medComp6 === true?
          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l8">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue">
                  <Field name="labelmc6" disabled={!editMode} className="input-label-ensayo" placeholder="Ingrese nombre del Parámetro" maxLength="50"/>
                </div>
           
              </div>
              <div className="col l4 no-margin">
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 nominal input-field-fine-tunning">
                <Field name="mc6" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                <Field name="mc6INF" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
              
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                <Field name="mc6SUP" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                
                </div>
              </div>
              </div>
            </div>
          </div>:null}
          {medComp7 === true?
          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l8">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue">
                  <Field name="labelmc7" disabled={!editMode} className="input-label-ensayo" placeholder="Ingrese nombre del Parámetro" maxLength="50"/>
                </div>
           
              </div>
              <div className="col l4 no-margin">
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 nominal input-field-fine-tunning">
                <Field name="mc7" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                <Field name="mc7INF" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
              
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                <Field name="mc7SUP" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                
                </div>
              </div>
              </div>
            </div>
          </div>:null}
          {medComp8 === true?
          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l8">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue">
                  <Field name="labelmc8" disabled={!editMode} className="input-label-ensayo" placeholder="Ingrese nombre del Parámetro" maxLength="50"/>
                </div>
           
              </div>
              <div className="col l4 no-margin">
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 nominal input-field-fine-tunning">
                <Field name="mc8" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                <Field name="mc8INF" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
              
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                <Field name="mc8SUP" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                
                </div>
              </div>
              </div>
            </div>
          </div>:null}
          {medComp9 === true?
          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l8">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue">
                  <Field name="labelmc9" disabled={!editMode} className="input-label-ensayo" placeholder="Ingrese nombre del Parámetro" maxLength="50"/>
                </div>
           
              </div>
              <div className="col l4 no-margin">
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 nominal input-field-fine-tunning">
                <Field name="mc9" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                <Field name="mc9INF" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
              
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                <Field name="mc9SUP" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                
                </div>
              </div>
              </div>
            </div>
          </div>:null}
          {medComp10 === true?
          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l8">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue">
                  <Field name="labelmc10" disabled={!editMode} className="input-label-ensayo" placeholder="Ingrese nombre del Parámetro" maxLength="50"/>
                </div>
           
              </div>
              <div className="col l4 no-margin">
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 nominal input-field-fine-tunning">
                <Field name="mc10" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                <Field name="mc10INF" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
              
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                <Field name="mc10SUP" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                
                </div>
              </div>
              </div>
            </div>
          </div>:null}
          {medComp11 === true?
          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l8">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue">
                  <Field name="labelmc11" disabled={!editMode} className="input-label-ensayo" placeholder="Ingrese nombre del Parámetro" maxLength="50"/>
                </div>
           
              </div>
              <div className="col l4 no-margin">
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 nominal input-field-fine-tunning">
                <Field name="mc11" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                <Field name="mc11INF" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
              
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                <Field name="mc11SUP" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                
                </div>
              </div>
              </div>
            </div>
          </div>:null}

          {medComp12 === true?
          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l8">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue">
                  <Field name="labelmc12" disabled={!editMode} className="input-label-ensayo" placeholder="Ingrese nombre del Parámetro" maxLength="50"/>
                </div>
           
              </div>
              <div className="col l4 no-margin">
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 nominal input-field-fine-tunning">
                <Field name="mc12" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                 
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                <Field name="mc12INF" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
              
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                <Field name="mc12SUP" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                
                </div>
              </div>
              </div>
            </div>
          </div>:null}
          {medComp13 === true?
          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l8">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue">
                  <Field name="labelmc13" disabled={!editMode} className="input-label-ensayo" placeholder="Ingrese nombre del Parámetro" maxLength="50"/>
                </div>
           
              </div>
              <div className="col l4 no-margin">
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 nominal input-field-fine-tunning">
                <Field name="mc13" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                <Field name="mc13INF" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
              
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                <Field name="mc13SUP" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                
                </div>
              </div>
              </div>
            </div>
          </div>:null}
          {medComp14 === true?
          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l8">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue">
                  <Field name="labelmc14" disabled={!editMode} className="input-label-ensayo" placeholder="Ingrese nombre del Parámetro" maxLength="50"/>
                </div>
           
              </div>
              <div className="col l4 no-margin">
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 nominal input-field-fine-tunning">
                <Field name="mc14" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                <Field name="mc14INF" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
              
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                <Field name="mc14SUP" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                
                </div>
              </div>
              </div>
            </div>
          </div>:null}
          {medComp15 === true?
          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l8">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue">
                  <Field name="labelmc15" disabled={!editMode} className="input-label-ensayo" placeholder="Ingrese nombre del Parámetro" maxLength="50"/>
                </div>
           
              </div>
              <div className="col l4 no-margin">
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 nominal input-field-fine-tunning">
                <Field name="mc15" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                <Field name="mc15INF" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
              
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                <Field name="mc15SUP" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                
                </div>
              </div>
              </div>
            </div>
          </div>:null}
          {medComp16 === true?
          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l8">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue">
                  <Field name="labelmc16" disabled={!editMode} className="input-label-ensayo" placeholder="Ingrese nombre del Parámetro" maxLength="50"/>
                </div>
           
              </div>
              <div className="col l4 no-margin">
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 nominal input-field-fine-tunning">
                <Field name="mc16" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                <Field name="mc16INF" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
              
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                <Field name="mc16SUP" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                
                </div>
              </div>
              </div>
            </div>
          </div>:null}
          {medComp17 === true?
          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l8">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue">
                  <Field name="labelmc17" disabled={!editMode} className="input-label-ensayo" placeholder="Ingrese nombre del Parámetro" maxLength="50"/>
                </div>
           
              </div>
              <div className="col l4 no-margin">
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 nominal input-field-fine-tunning">
                <Field name="mc17" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                <Field name="mc17INF" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
              
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                <Field name="mc17SUP" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                
                </div>
              </div>
              </div>
            </div>
          </div>:null}
          {medComp18 === true?
          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l8">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue">
                  <Field name="labelmc18" disabled={!editMode} className="input-label-ensayo" placeholder="Ingrese nombre del Parámetro" maxLength="50"/>
                </div>
           
              </div>
              <div className="col l4 no-margin">
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 nominal input-field-fine-tunning">
                <Field name="mc18" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                <Field name="mc18INF" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
              
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                <Field name="mc18SUP" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                
                </div>
              </div>
              </div>
            </div>
          </div>:null}
          {medComp19 === true?
          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l8">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue">
                  <Field name="labelmc19" disabled={!editMode} className="input-label-ensayo" placeholder="Ingrese nombre del Parámetro" maxLength="50"/>
                </div>
           
              </div>
              <div className="col l4 no-margin">
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 nominal input-field-fine-tunning">
                <Field name="mc19" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                <Field name="mc19INF" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
              
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                <Field name="mc19SUP" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                
                </div>
              </div>
              </div>
            </div>
          </div>:null}
          {medComp20 === true?
          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l8">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue">
                  <Field name="labelmc20" disabled={!editMode} className="input-label-ensayo" placeholder="Ingrese nombre del Parámetro" maxLength="50"/>
                </div>
           
              </div>
              <div className="col l4 no-margin">
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 nominal input-field-fine-tunning">
                <Field name="mc20" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                <Field name="mc20INF" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
              
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                <Field name="mc20SUP" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                
                </div>
              </div>
              </div>
            </div>
          </div>:null}


          <div className="row"></div>

{/* //PARAMETROS DE PROGRAMACION // */}
{digital === true?
          <>

              <div className="row row-fix ">
              <div className="col s12 m12 l12 no-margin left">
                  <div className="col s1 m1 l8 left">
                      <p className="display-box-title-ensayo-QA">PARAMETROS DE PROGRAMACION</p>

                      <div className="warning-inputs-scan"><ErrorMessage name="FA"/></div>

                      <div className="warning-inputs-scan"><ErrorMessage name="PH"/></div>
                      <div className="warning-inputs-scan"><ErrorMessage name="PHINF"/></div>
                      <div className="warning-inputs-scan"><ErrorMessage name="PHSUP"/></div>


                      <div className="warning-inputs-scan"><ErrorMessage name="FH"/></div>
                      <div className="warning-inputs-scan"><ErrorMessage name="FHINF"/></div>
                      <div className="warning-inputs-scan"><ErrorMessage name="FHSUP"/></div>

                      <div className="warning-inputs-scan"><ErrorMessage name="PL"/></div>
                      <div className="warning-inputs-scan"><ErrorMessage name="PLINF"/></div>
                      <div className="warning-inputs-scan"><ErrorMessage name="PLSUP"/></div>

                      <div className="warning-inputs-scan"><ErrorMessage name="FL"/></div>
                      <div className="warning-inputs-scan"><ErrorMessage name="FLINF"/></div>
                      <div className="warning-inputs-scan"><ErrorMessage name="FLSUP"/></div>


                      <div className="warning-inputs-scan"><ErrorMessage name="dh"/></div>
                      <div className="warning-inputs-scan"><ErrorMessage name="dhINF"/></div>
                      <div className="warning-inputs-scan"><ErrorMessage name="dhSUP"/></div>

                      <div className="warning-inputs-scan"><ErrorMessage name="dF"/></div>
                      <div className="warning-inputs-scan"><ErrorMessage name="dFINF"/></div>
                      <div className="warning-inputs-scan"><ErrorMessage name="dFSUP"/></div>

                      <div className="warning-inputs-scan"><ErrorMessage name="nE"/></div>
                      <div className="warning-inputs-scan"><ErrorMessage name="nP"/></div>
                      <div className="warning-inputs-scan"><ErrorMessage name="HC"/></div>
                      <div className="warning-inputs-scan"><ErrorMessage name="LC"/></div>
                      <div className="warning-inputs-scan"><ErrorMessage name="FC"/></div>

                  </div>

                  <div className="col s4 no-margin">
                <div className="col s12 m12 l4 center">
                    <p className="display-box-title-ensayo-QA">NOMINAL</p>        
                </div>
                <div className="col s12 m12 l4 center">
                    <p className="display-box-title-ensayo-QA">MINIMO</p>        
                </div>
                <div className="col s12 m12 l4 center">
                    <p className="display-box-title-ensayo-QA">MAXIMO</p>        
                </div>

            </div>
                </div>
              </div>

              <div className="row row-fix">
              <div className="col s12 m12 l12 center-align no-margin">
                  <div className="col s1 m1 l8">
                  <div className="display-box-test-setup z-depth-1 background-grey">
                      <p className="text-production-register">FA</p>
                  </div>
                  </div>
                  <div className="col l4 no-margin">
                  <div className="col s1 m1 l4 ">
                    <div className="display-box-test-setup z-depth-1 nominal input-field-fine-tunning">
                    <Field name="FA" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                    
                    </div>
                  </div>
                  </div>
                </div>
              </div>
              <div className="row row-fix">
              <div className="col s12 m12 l12 center-align no-margin">
                  <div className="col s1 m1 l8">
                  <div className="display-box-test-setup z-depth-1 background-grey">
                      <p className="text-production-register">PH</p>
                  </div>
                  </div>
                  <div className="col l4 no-margin">
                  <div className="col s1 m1 l4 ">
                    <div className="display-box-test-setup z-depth-1 nominal input-field-fine-tunning">
                    <Field name="PH" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                   
                    </div>
                  </div>
                  <div className="col s1 m1 l4 ">
                    <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                    <Field name="PHINF" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                    
                    </div>
                  </div>
                  <div className="col s1 m1 l4 ">
                    <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                    <Field name="PHSUP" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                   
                    </div>
                  </div>
                  </div>
                </div>
              </div>
              <div className="row row-fix">
              <div className="col s12 m12 l12 center-align no-margin">
                  <div className="col s1 m1 l8">
                  <div className="display-box-test-setup z-depth-1 background-grey">
                      <p className="text-production-register">FH</p>
                  </div>
                  </div>
                  <div className="col l4 no-margin">
                  <div className="col s1 m1 l4 ">
                    <div className="display-box-test-setup z-depth-1 nominal input-field-fine-tunning">
                    <Field name="FH" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                    
                    </div>
                  </div>
                  <div className="col s1 m1 l4 ">
                    <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                    <Field name="FHINF" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                    
                    </div>
                  </div>
                  <div className="col s1 m1 l4 ">
                    <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                    <Field name="FHSUP" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                    
                    </div>
                  </div>
                  </div>
                </div>
              </div>
              <div className="row row-fix">
              <div className="col s12 m12 l12 center-align no-margin">
                  <div className="col s1 m1 l8">
                  <div className="display-box-test-setup z-depth-1 background-grey">
                      <p className="text-production-register">PL</p>
                  </div>
                  </div>
                  <div className="col l4 no-margin">
                  <div className="col s1 m1 l4 ">
                    <div className="display-box-test-setup z-depth-1 nominal input-field-fine-tunning">
                    <Field name="PL" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                  
                    </div>
                  </div>
                  <div className="col s1 m1 l4 ">
                    <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                    <Field name="PLINF" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                  
                    </div>
                  </div>
                  <div className="col s1 m1 l4 ">
                    <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                    <Field name="PLSUP" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                    
                    </div>
                  </div>
                  </div>
                </div>
              </div>
              <div className="row row-fix">
              <div className="col s12 m12 l12 center-align no-margin">
                  <div className="col s1 m1 l8">
                  <div className="display-box-test-setup z-depth-1 background-grey">
                      <p className="text-production-register">FL</p>
                  </div>
                  </div>
                  <div className="col l4 no-margin">
                  <div className="col s1 m1 l4 ">
                    <div className="display-box-test-setup z-depth-1 nominal input-field-fine-tunning">
                    <Field name="FL" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                  
                    </div>
                  </div>
                  <div className="col s1 m1 l4 ">
                    <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                    <Field name="FLINF" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                  
                    </div>
                  </div>
                  <div className="col s1 m1 l4 ">
                    <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                    <Field name="FLSUP" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                    
                    </div>
                  </div>
                  </div>
                </div>
              </div>
              <div className="row row-fix">
              <div className="col s12 m12 l12 center-align no-margin">
                  <div className="col s1 m1 l8">
                  <div className="display-box-test-setup z-depth-1 background-grey">
                      <p className="text-production-register">dH</p>
                  </div>
                  </div>
                  <div className="col l4 no-margin">
                  <div className="col s1 m1 l4 ">
                    <div className="display-box-test-setup z-depth-1 nominal input-field-fine-tunning">
                    <Field name="dh" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                    
                    </div>
                  </div>
                  <div className="col s1 m1 l4 ">
                    <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                    <Field name="dhINF" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                    
                    </div>
                  </div>
                  <div className="col s1 m1 l4 ">
                    <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                    <Field name="dhSUP" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                    
                    </div>
                  </div>
                  </div>
                </div>
              </div>
              <div className="row row-fix">
              <div className="col s12 m12 l12 center-align no-margin">
                  <div className="col s1 m1 l8">
                  <div className="display-box-test-setup z-depth-1 background-grey">
                      <p className="text-production-register">dF</p>
                  </div>
                  </div>
                  <div className="col l4 no-margin">
                  <div className="col s1 m1 l4 ">
                    <div className="display-box-test-setup z-depth-1 nominal input-field-fine-tunning">
                    <Field name="dF" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                    
                    </div>
                  </div>
                  <div className="col s1 m1 l4 ">
                    <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                    <Field name="dFINF" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                    
                    </div>
                  </div>
                  <div className="col s1 m1 l4 ">
                    <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                    <Field name="dFSUP" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                   
                    </div>
                  </div>
                  </div>
                </div>
              </div>

          


              <div className="row row-fix">
              <div className="col s12 m12 l12 center-align no-margin">
                  <div className="col s1 m1 l8">
                  <div className="display-box-test-setup z-depth-1 background-grey">
                      <p className="text-production-register">nE</p>
                  </div>
                  </div>
                  <div className="col l4 no-margin">
                  <div className="col s1 m1 l4 ">
                    <div className="display-box-test-setup z-depth-1 nominal input-field-fine-tunning">
                    <Field name="nE" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                    
                    </div>
                  </div>
                  </div>
                </div>
              </div>

              <div className="row row-fix">
              <div className="col s12 m12 l12 center-align no-margin">
                  <div className="col s1 m1 l8">
                  <div className="display-box-test-setup z-depth-1 background-grey">
                      <p className="text-production-register">nP</p>
                  </div>
                  </div>
                  <div className="col l4 no-margin">
                  <div className="col s1 m1 l4 ">

                    <div className="display-box-test-setup z-depth-1 nominal input-field-fine-tunning">
                    <Field name="nP" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                    </div>

                  {/* <div className="display-box-test-setup z-depth-1 valign-wrapper background-light-blue">   
                        <Field as="select" name="nP" disabled={!editMode} className="browser-default collapsible-header">
                        <option value="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-</option>
                         <option value="1">&nbsp;&nbsp;ON</option>
                         <option value="0">&nbsp;&nbsp;OFF</option>
                         </Field>               
                    </div> */}
                  </div>
                  


                  </div>
                </div>
              </div>


              <div className="row row-fix">
              <div className="col s12 m12 l12 center-align no-margin">
                  <div className="col s1 m1 l8">
                  <div className="display-box-test-setup z-depth-1 background-grey">
                      <p className="text-production-register">HC</p>
                  </div>
                  </div>
                  <div className="col l4 no-margin">
                  <div className="col s1 m1 l4 ">
                    <div className="display-box-test-setup z-depth-1 nominal input-field-fine-tunning">
                    <Field name="HC" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
              <div className="row row-fix">
              <div className="col s12 m12 l12 center-align no-margin">
                  <div className="col s1 m1 l8">
                  <div className="display-box-test-setup z-depth-1 background-grey">
                      <p className="text-production-register">LC</p>
                  </div>
                  </div>
                  <div className="col l4 no-margin">
                  <div className="col s1 m1 l4 ">
                    <div className="display-box-test-setup z-depth-1 nominal input-field-fine-tunning">
                    <Field name="LC" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>              
                    </div>
                  </div>
                  </div>
                </div>
              </div>
              <div className="row row-fix">
              <div className="col s12 m12 l12 center-align no-margin">
                  <div className="col s1 m1 l8">
                  <div className="display-box-test-setup z-depth-1 background-grey">
                      <p className="text-production-register">FC</p>
                  </div>
                  </div>
                  <div className="col l4 no-margin">
                  <div className="col s1 m1 l4 ">
                    <div className="display-box-test-setup z-depth-1 nominal input-field-fine-tunning">
                    <Field name="FC" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                    </div>
                  </div>
                  </div>
                </div>
              </div>

              </>
            :null}

       <div className="row"></div>

          <div className="row">
            <div className="col s12 m12 l8 "><a href="/dashboard">
              <button className="btn-small btn-block waves-effect waves-light button-regresar-create-plan z-depth-2" type="button">
                REGRESAR
              </button></a>
            </div>
            {!editMode === true? 
            <div className="col s12 m12 l4 ">
              <button onClick={openModal1} className="btn-small btn-block waves-effect waves-light button-regresar-create-plan z-depth-2" type="button">
                EDITAR PARAMETROS
              </button>
            </div>:
            <div className="col s12 m12 l4 ">
              <button className="btn-small btn-block waves-effect waves-light button-modoedicion-batch-list z-depth-2" type="submit">
                GUARDAR EDICION
              </button>
            </div>
            }
        </div> 





              <Popup contentStyle={{background: "0"}} open={open1} closeOnDocumentClick onClose={closeModal1} lockScroll = {true}>
               <div className="alert z-depth-1" >
                <div className="row row-fix ">
                  <div className="col s12 m12 l12 no-margin">
                    <div className="atention center-align">ATENCION</div>
                  </div>
                  <div className="col s12 m12 l12 no-margin divisor-bottom-line">
                    <div  className="alert-msg center-align ">Esta por modificar parámetros de seguridad</div>
                  </div>
                </div>

                <div className="row">
                     <div className="col s6 m6 l6 divisor-right-line center">
                        <div onClick={closeModal1} className="button-alert waves-effect waves-dark btn-block">Cancelar</div >
                     </div>
                      <div className="col s6 m6 l6 center">
                       <div onClick={twoFunctions} className="button-alert waves-effect waves-dark btn-block">Continuar</div>
                      </div>
                </div>
               </div>
              </Popup>
              <Popup contentStyle={{background: "0"}} open={open2} closeOnDocumentClick onClose={closeModal2} lockScroll = {true}>
               <div className="alert z-depth-1" >
                <div className="row row-fix ">
                  <div className="col s12 m12 l12 no-margin">
                    <div className="atention center-align">ATENCION</div>
                  </div>
                  <div className="col s12 m12 l12 no-margin divisor-bottom-line">
                    <div  className="alert-msg center-align ">¿Esta seguro de guardar los cambios?</div>
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
              <Popup contentStyle={{background: "0"}} open={open3} closeOnDocumentClick onClose={twoFunctions2} lockScroll = {true}>
               <div className="alert z-depth-1" >
                <div className="row row-fix ">
                  <div className="col s12 m12 l12 no-margin">
                    <div className="atention center-align">Valores actualizados Exitosamente!</div>
                  </div>
                  <div className="col s12 m12 l12 no-margin divisor-bottom-line">
                    <div className="alert-msg center-align ">Muchas Gracias.</div>
                  </div>
                </div>

                <div className="row">
                      <div className="col s12 m12 l12 center">
                       <div onClick={twoFunctions2} className="button-alert waves-effect waves-dark btn-block">Continuar</div>
                      </div>
                </div>
               </div>
              </Popup>
    
        </Form>
      </Formik>
        </div>
      </div>

      


    </>
  );
};
export default TestSheetSetValue;
