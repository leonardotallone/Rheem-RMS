import Navbar from "../Navbar/Navbar";
import QR from "../../assets/logos/QR.png";

import { useState, useEffect } from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import Popup from "reactjs-popup";



const EdicionPuestaAPunto = () => { 

  const [ensayo, setEnsayo ] = useState(true); 


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
  

  const [addCCCount, setAddCCCount] = useState(0)
  const [cc1, setcc1] = useState(false)
  const [cc2, setcc2] = useState(false)
  const [cc3, setcc3] = useState(false)
  const [cc4, setcc4] = useState(false)
  const [cc5, setcc5] = useState(false)
  const [cc6, setcc6] = useState(false)
  const [cc7, setcc7] = useState(false)
  const [cc8, setcc8] = useState(false)
  const [cc9, setcc9] = useState(false)
  const [cc10, setcc10] = useState(false)
  const [cc11, setcc11] = useState(false)
  const [cc12, setcc12] = useState(false)
  const [cc13, setcc13] = useState(false)
  const [cc14, setcc14] = useState(false)
  const [cc15, setcc15] = useState(false)
  const [cc16, setcc16] = useState(false)
  const [cc17, setcc17] = useState(false)
  const [cc18, setcc18] = useState(false)
  const [cc19, setcc19] = useState(false)
  const [cc20, setcc20] = useState(false)


  const counterCCUp = () => {
    if(addCCCount < 20) setAddCCCount (addCCCount + 1)
  }
  const counterCCDown = () => {
    setAddCCCount (addCCCount - 1)
  }
  useEffect(()=> {
    if (addCCCount === 0){
      setcc1(false)
    } else if (addCCCount === 1){
      setcc1(true)
      setcc2(false)
    } else if (addCCCount === 2){
      setcc2(true)
      setcc3(false)
    } else if (addCCCount === 3){
      setcc3(true)
      setcc4(false)
    } else if (addCCCount === 4){
      setcc4(true)
      setcc5(false)
    } else if (addCCCount === 5){
      setcc5(true)
      setcc6(false)
    } else if (addCCCount === 6){
      setcc6(true)
      setcc7(false)
    } else if (addCCCount === 7){
      setcc7(true)
      setcc8(false)
    } else if (addCCCount === 8){
      setcc8(true)
      setcc9(false)
    } else if (addCCCount === 9){
      setcc9(true)
      setcc10(false)
    } else if (addCCCount === 10){
      setcc10(true)
      setcc11(false)
    } else if (addCCCount === 11){
      setcc11(true)
      setcc12(false)
    } else if (addCCCount === 12){
      setcc12(true)
      setcc13(false)
    } else if (addCCCount === 13){
      setcc13(true)
      setcc14(false)
    } else if (addCCCount === 14){
      setcc14(true)
      setcc15(false)
    } else if (addCCCount === 15){
      setcc15(true)
      setcc16(false)
    } else if (addCCCount === 16){
      setcc16(true)
      setcc17(false)
    } else if (addCCCount === 17){
      setcc17(true)
      setcc18(false)
    } else if (addCCCount === 18){
      setcc18(true)
      setcc19(false)
    } else if (addCCCount === 19){
      setcc19(true)
      setcc20(false)
    } else if (addCCCount === 20){
      setcc20(true)
    }
  },[addCCCount])
  
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
  
  const [editMode, setEditMode] = useState(false);

  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  const openModal1 = () => {setOpen1(true);}
  const closeModal1 = () =>{setOpen1(false);}
  const twoFunctions = () =>{closeModal1(); setEditMode(true)}

  const closeModal2 = () =>{setOpen2(false);}
  const twoFunctions2 = () =>{setOpen3(false); setEditMode(false)}
  
  const validarVALUES = (values) => {
    const errors = {};
    const onlyNumbers = /^\d{1,4}(\.\d{1,2})?$/

      if (values.largo && !values.largo.match(onlyNumbers)) {
      errors.largo='Largo con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."';
    } else if (values.largoMinimo && !values.largoMinimo.match(onlyNumbers)){
      errors.largoMinimo= 'Largo Minimo mínimo con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    } else if (values.largoMaximo && !values.largoMaximo.match(onlyNumbers)){
      errors.largoMaximo= 'Largo Maximo máximo con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    }

      else if (values.ancho && !values.ancho.match(onlyNumbers)){
      errors.ancho = 'Ancho con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    } else if (values.anchoMinimo && !values.anchoMinimo.match(onlyNumbers)){
      errors.anchoMinimo = 'Ancho Minimo con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    } else if (values.anchoMaximo && !values.anchoMaximo.match(onlyNumbers)){
      errors.anchoMaximo = 'Ancho Maximo con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    } 

      else if (values.potenciaNominal && !values.potenciaNominal.match(onlyNumbers)){
      errors.potenciaNominal = 'Potencia Nominal con Error, Ingrese hasta 4 números entero y dos decimales separados por "."'
    } else if (values.potenciaNominalINF && !values.potenciaNominalINF.match(onlyNumbers)){
      errors.potenciaNominalINF = 'Potencia Nominal mínima con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    } else if (values.potenciaNominalSUP && !values.potenciaNominalSUP.match(onlyNumbers)){
      errors.potenciaNominalSUP ='Potencia Nominal máxima con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    } 

      else if (values.diametroInt && !values.diametroInt.match(onlyNumbers)){
      errors.diametroInt = 'Diámetro Interior con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    } else if (values.diametroIntMinimo && !values.diametroIntMinimo.match(onlyNumbers)){
      errors.diametroIntMinimo = 'Diámetro Interior Mínimo con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    } else if (values.diametroIntMaximo && !values.diametroIntMaximo.match(onlyNumbers)){
      errors.diametroIntMaximo ='Diámetro Interior Maaximo con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    } 
// Caracteristicas Cuantitativas

        else if (values.cc1Nominal && !values.cc1Nominal.match(onlyNumbers)){
            errors.cc1Nominal = 'CC Adicional 1 con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
        } else if (values.cc1Minimo && !values.cc1Minimo.match(onlyNumbers)){
            errors.cc1Minimo = 'CC Adicional 1 Mínimo con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
        } else if (values.cc1Maximo && !values.cc1Maximo.match(onlyNumbers)){
            errors.cc1Maximo ='CC Adicional 1 Máximo conError, Ingrese hasta 4 números enteros y dos decimales separados por "."'
        } 

        else if (values.cc2Nominal && !values.cc2Nominal.match(onlyNumbers)){
            errors.cc2Nominal = 'CC Adicional 2 con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
        } else if (values.cc2Minimo && !values.cc2Minimo.match(onlyNumbers)){
            errors.cc2Minimo = 'CC Adicional 2 Mínimo con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
        } else if (values.cc2Maximo && !values.cc2Maximo.match(onlyNumbers)){
            errors.cc2Maximo ='CC Adicional 2 Máximo conError, Ingrese hasta 4 números enteros y dos decimales separados por "."'
        } 

        else if (values.cc3Nominal && !values.cc3Nominal.match(onlyNumbers)){
            errors.cc3Nominal = 'CC Adicional 3 con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
        } else if (values.cc3Minimo && !values.cc3Minimo.match(onlyNumbers)){
            errors.cc3Minimo = 'CC Adicional 3 Mínimo con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
        } else if (values.cc3Maximo && !values.cc3Maximo.match(onlyNumbers)){
            errors.cc3Maximo ='CC Adicional 3 Máximo conError, Ingrese hasta 4 números enteros y dos decimales separados por "."'
        } 

        else if (values.cc4Nominal && !values.cc4Nominal.match(onlyNumbers)){
            errors.cc4Nominal = 'CC Adicional 4 con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
        } else if (values.cc4Minimo && !values.cc4Minimo.match(onlyNumbers)){
            errors.cc4Minimo = 'CC Adicional 4 Mínimo con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
        } else if (values.cc4Maximo && !values.cc4Maximo.match(onlyNumbers)){
            errors.cc4Maximo ='CC Adicional 4 Máximo conError, Ingrese hasta 4 números enteros y dos decimales separados por "."'
        } 

        else if (values.cc5Nominal && !values.cc5Nominal.match(onlyNumbers)){
            errors.cc5Nominal = 'CC Adicional 5 con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
        } else if (values.cc5Minimo && !values.cc5Minimo.match(onlyNumbers)){
            errors.cc5Minimo = 'CC Adicional 5 Mínimo con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
        } else if (values.cc5Maximo && !values.cc5Maximo.match(onlyNumbers)){
            errors.cc5Maximo ='CC Adicional 5 Máximo conError, Ingrese hasta 4 números enteros y dos decimales separados por "."'
        } 

        else if (values.cc6Nominal && !values.cc6Nominal.match(onlyNumbers)){
            errors.cc6Nominal = 'CC Adicional 6 con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
        } else if (values.cc6Minimo && !values.cc6Minimo.match(onlyNumbers)){
            errors.cc6Minimo = 'CC Adicional 6 Mínimo con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
        } else if (values.cc6Maximo && !values.cc6Maximo.match(onlyNumbers)){
            errors.cc6Maximo ='CC Adicional 6 Máximo conError, Ingrese hasta 4 números enteros y dos decimales separados por "."'
        } 

        else if (values.cc7Nominal && !values.cc7Nominal.match(onlyNumbers)){
            errors.cc7Nominal = 'CC Adicional 7 con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
        } else if (values.cc7Minimo && !values.cc7Minimo.match(onlyNumbers)){
            errors.cc7Minimo = 'CC Adicional 7 Mínimo con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
        } else if (values.cc7Maximo && !values.cc7Maximo.match(onlyNumbers)){
            errors.cc7Maximo ='CC Adicional 7 Máximo conError, Ingrese hasta 4 números enteros y dos decimales separados por "."'
        } 

        else if (values.cc8Nominal && !values.cc8Nominal.match(onlyNumbers)){
            errors.cc8Nominal = 'CC Adicional 8 con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
        } else if (values.cc8Minimo && !values.cc8Minimo.match(onlyNumbers)){
            errors.cc8Minimo = 'CC Adicional 8 Mínimo con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
        } else if (values.cc8Maximo && !values.cc8Maximo.match(onlyNumbers)){
            errors.cc8Maximo ='CC Adicional 8 Máximo conError, Ingrese hasta 4 números enteros y dos decimales separados por "."'
        } 

        else if (values.cc9Nominal && !values.cc9Nominal.match(onlyNumbers)){
            errors.cc9Nominal = 'CC Adicional 9 con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
        } else if (values.cc9Minimo && !values.cc9Minimo.match(onlyNumbers)){
            errors.cc9Minimo = 'CC Adicional 9 Mínimo con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
        } else if (values.cc9Maximo && !values.cc9Maximo.match(onlyNumbers)){
            errors.cc9Maximo ='CC Adicional 9 Máximo conError, Ingrese hasta 4 números enteros y dos decimales separados por "."'
        } 

        else if (values.cc10Nominal && !values.cc10Nominal.match(onlyNumbers)){
            errors.cc10Nominal = 'CC Adicional 10 con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
        } else if (values.cc10Minimo && !values.cc10Minimo.match(onlyNumbers)){
            errors.cc10Minimo = 'CC Adicional 10 Mínimo con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
        } else if (values.cc10Maximo && !values.cc10Maximo.match(onlyNumbers)){
            errors.cc10Maximo ='CC Adicional 10 Máximo conError, Ingrese hasta 4 números enteros y dos decimales separados por "."'
        } 

        else if (values.cc11Nominal && !values.cc11Nominal.match(onlyNumbers)){
            errors.cc11Nominal = 'CC Adicional 11 con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
        } else if (values.cc11Minimo && !values.cc11Minimo.match(onlyNumbers)){
            errors.cc11Minimo = 'CC Adicional 11 Mínimo con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
        } else if (values.cc11Maximo && !values.cc11Maximo.match(onlyNumbers)){
            errors.cc11Maximo ='CC Adicional 11 Máximo conError, Ingrese hasta 4 números enteros y dos decimales separados por "."'
        } 

        else if (values.cc12Nominal && !values.cc12Nominal.match(onlyNumbers)){
            errors.cc12Nominal = 'CC Adicional 12 con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
        } else if (values.cc12Minimo && !values.cc12Minimo.match(onlyNumbers)){
            errors.cc12Minimo = 'CC Adicional 12 Mínimo con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
        } else if (values.cc12Maximo && !values.cc12Maximo.match(onlyNumbers)){
            errors.cc12Maximo ='CC Adicional 12 Máximo conError, Ingrese hasta 4 números enteros y dos decimales separados por "."'
        } 

        else if (values.cc13Nominal && !values.cc13Nominal.match(onlyNumbers)){
            errors.cc13Nominal = 'CC Adicional 13 con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
        } else if (values.cc13Minimo && !values.cc13Minimo.match(onlyNumbers)){
            errors.cc13Minimo = 'CC Adicional 13 Mínimo con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
        } else if (values.cc13Maximo && !values.cc13Maximo.match(onlyNumbers)){
            errors.cc13Maximo ='CC Adicional 13 Máximo conError, Ingrese hasta 4 números enteros y dos decimales separados por "."'
        } 

        else if (values.cc14Nominal && !values.cc14Nominal.match(onlyNumbers)){
            errors.cc14Nominal = 'CC Adicional 14 con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
        } else if (values.cc14Minimo && !values.cc14Minimo.match(onlyNumbers)){
            errors.cc14Minimo = 'CC Adicional 14 Mínimo con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
        } else if (values.cc14Maximo && !values.cc14Maximo.match(onlyNumbers)){
            errors.cc14Maximo ='CC Adicional 14 Máximo conError, Ingrese hasta 4 números enteros y dos decimales separados por "."'
        } 

        else if (values.cc15Nominal && !values.cc15Nominal.match(onlyNumbers)){
            errors.cc15Nominal = 'CC Adicional 15 con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
        } else if (values.cc15Minimo && !values.cc15Minimo.match(onlyNumbers)){
            errors.cc15Minimo = 'CC Adicional 15 Mínimo con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
        } else if (values.cc15Maximo && !values.cc15Maximo.match(onlyNumbers)){
            errors.cc15Maximo ='CC Adicional 15 Máximo conError, Ingrese hasta 4 números enteros y dos decimales separados por "."'
        } 

        else if (values.cc16Nominal && !values.cc16Nominal.match(onlyNumbers)){
            errors.cc16Nominal = 'CC Adicional 16 con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
        } else if (values.cc16Minimo && !values.cc16Minimo.match(onlyNumbers)){
            errors.cc16Minimo = 'CC Adicional 16 Mínimo con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
        } else if (values.cc16Maximo && !values.cc16Maximo.match(onlyNumbers)){
            errors.cc16Maximo ='CC Adicional 16 Máximo conError, Ingrese hasta 4 números enteros y dos decimales separados por "."'
        } 

        else if (values.cc17Nominal && !values.cc17Nominal.match(onlyNumbers)){
            errors.cc17Nominal = 'CC Adicional 17 con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
        } else if (values.cc17Minimo && !values.cc17Minimo.match(onlyNumbers)){
            errors.cc17Minimo = 'CC Adicional 17 Mínimo con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
        } else if (values.cc17Maximo && !values.cc17Maximo.match(onlyNumbers)){
            errors.cc17Maximo ='CC Adicional 17 Máximo conError, Ingrese hasta 4 números enteros y dos decimales separados por "."'
        } 

        else if (values.cc18Nominal && !values.cc18Nominal.match(onlyNumbers)){
            errors.cc18Nominal = 'CC Adicional 18 con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
        } else if (values.cc18Minimo && !values.cc18Minimo.match(onlyNumbers)){
            errors.cc18Minimo = 'CC Adicional 18 Mínimo con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
        } else if (values.cc18Maximo && !values.cc18Maximo.match(onlyNumbers)){
            errors.cc18Maximo ='CC Adicional 18 Máximo conError, Ingrese hasta 4 números enteros y dos decimales separados por "."'
        } 

        else if (values.cc19Nominal && !values.cc19Nominal.match(onlyNumbers)){
            errors.cc19Nominal = 'CC Adicional 19 con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
        } else if (values.cc19Minimo && !values.cc19Minimo.match(onlyNumbers)){
            errors.cc19Minimo = 'CC Adicional 19 Mínimo con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
        } else if (values.cc19Maximo && !values.cc19Maximo.match(onlyNumbers)){
            errors.cc19Maximo ='CC Adicional 19 Máximo conError, Ingrese hasta 4 números enteros y dos decimales separados por "."'
        } 

        else if (values.cc20Nominal && !values.cc20Nominal.match(onlyNumbers)){
            errors.cc20Nominal = 'CC Adicional 20 con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
        } else if (values.cc20Minimo && !values.cc20Minimo.match(onlyNumbers)){
            errors.cc20Minimo = 'CC Adicional 20 Mínimo con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
        } else if (values.cc20Maximo && !values.cc20Maximo.match(onlyNumbers)){
            errors.cc20Maximo ='CC Adicional 20 Máximo conError, Ingrese hasta 4 números enteros y dos decimales separados por "."'
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





    return errors;
  };

  const handleSubmitVALUES = (values) => {
    // console.log("VALUES", values);
    setOpen3(true)
    const edicionPuestaAPunto = {
       
        caracteristicasCuantitativas:{
          alto: {
            nominal:(Number(values.largo)),
            minimo:(Number(values.largoMinimo)), 
            maximo:(Number(values.largoMaximo)), 
        },
        ancho: {
            nominal:(Number(values.ancho)),
            minimo:(Number(values.anchoMinimo)),
            maximo: (Number(values.anchoMaximo)),
        },
        diametroInterno: {
          nominal: (Number(values.diametroInt)),
          minimo: (Number(values.diametroIntMinimo)),
          maximo: (Number(values.diametroIntMaximo)),
        },
        cc1:{
            label: values.labelcc1,
            nominal: (Number(values.cc1Nominal)),
            minimo: (Number(values.cc1Minimo)),
            maximo: (Number(values.cc1Maximo)),
        },
        cc2:{
            label: values.labelcc2,
            nominal: (Number(values.cc2Nominal)),
            minimo: (Number(values.cc2Minimo)),
            maximo: (Number(values.cc2Maximo)),
        },
        cc3:{
            label: values.labelcc3,
            nominal: (Number(values.cc3Nominal)),
            minimo: (Number(values.cc3Minimo)),
            maximo: (Number(values.cc3Maximo)),
        },
        cc4:{
            label: values.labelcc4,
            nominal: (Number(values.cc4Nominal)),
            minimo: (Number(values.cc4Minimo)),
            maximo: (Number(values.cc4Maximo)),
        },
        cc5:{
            label: values.labelcc5,
            nominal: (Number(values.cc5Nominal)),
            minimo: (Number(values.cc5Minimo)),
            maximo: (Number(values.cc5Maximo)),
        } ,
        cc6:{
            label: values.labelcc6,
            nominal: (Number(values.cc6Nominal)),
            minimo: (Number(values.cc6Minimo)),
            maximo: (Number(values.cc6Maximo)),
        },
        cc7:{
            label: values.labelcc7,
            nominal: (Number(values.cc7Nominal)),
            minimo: (Number(values.cc7Minimo)),
            maximo: (Number(values.cc7Maximo)),
        },
        cc8:{
            label: values.labelcc8,
            nominal: (Number(values.cc8Nominal)),
            minimo: (Number(values.cc8Minimo)),
            maximo: (Number(values.cc8Maximo)),
        },
        cc9:{
            label: values.labelcc9,
            nominal: (Number(values.cc9Nominal)),
            minimo: (Number(values.cc9Minimo)),
            maximo: (Number(values.cc9Maximo)),
        },
        cc10:{
            label: values.labelcc10,
            nominal: (Number(values.cc10Nominal)),
            minimo: (Number(values.cc10Minimo)),
            maximo: (Number(values.cc10Maximo)),
        },
        cc11:{
            label: values.labelcc11,
            nominal: (Number(values.cc11Nominal)),
            minimo: (Number(values.cc11Minimo)),
            maximo: (Number(values.cc11Maximo)),
        },
        cc12:{
            label: values.labelcc12,
            nominal: (Number(values.cc12Nominal)),
            minimo: (Number(values.cc12Minimo)),
            maximo: (Number(values.cc12Maximo)),
        } ,
        cc13:{
            label: values.labelcc13,
            nominal: (Number(values.cc13Nominal)),
            minimo: (Number(values.cc13Minimo)),
            maximo: (Number(values.cc13Maximo)),
        },
        cc14:{
            label: values.labelcc14,
            nominal: (Number(values.cc14Nominal)),
            minimo: (Number(values.cc14Minimo)),
            maximo: (Number(values.cc14Maximo)),
        },
        cc15:{
            label: values.labelcc15,
            nominal: (Number(values.cc15Nominal)),
            minimo: (Number(values.cc15Minimo)),
            maximo: (Number(values.cc15Maximo)),
        },
        cc16:{
            label: values.labelcc16,
            nominal: (Number(values.cc16Nominal)),
            minimo: (Number(values.cc16Minimo)),
            maximo: (Number(values.cc16Maximo)),
        },
        cc17:{
            label: values.labelcc17,
            nominal: (Number(values.cc17Nominal)),
            minimo: (Number(values.cc17Minimo)),
            maximo: (Number(values.cc17Maximo)),
        },
        cc18:{
            label: values.labelcc18,
            nominal: (Number(values.cc18Nominal)),
            minimo: (Number(values.cc18Minimo)),
            maximo: (Number(values.cc18Maximo)),
        },
        cc19:{
            label: values.labelcc19,
            nominal: (Number(values.cc19Nominal)),
            minimo: (Number(values.cc19Minimo)),
            maximo: (Number(values.cc19Maximo)),
        },
        cc20:{
            label: values.labelcc20,
            nominal: (Number(values.cc20Nominal)),
            minimo: (Number(values.cc20Minimo)),
            maximo: (Number(values.cc20Maximo)),
        }

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
        
    };
    console.log("Edicion Puesta a Punto",edicionPuestaAPunto )  
    window.localStorage.setItem("edicionPuestaAPunto", JSON.stringify(edicionPuestaAPunto));
    }

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
    const handleSubmitSKU = (values) => {
      const sku = {sku: values.sku}
      console.log("SKU", sku)
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
              <p className="font-title-create-plan">Edición de Puesta a Punto</p>
              <p className="font-subtitle-create-plan black-text">De Componentes</p>
              {/* <p className="font-subtitle-create-plan">Escenee el producto que desea editar</p> */}
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
                            <label className="label-text-scan" htmlFor="sku" >SKU Componente</label>
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
                <p className="font-form-create-plan">&nbsp;</p>
                <p className="font-tunning-black">SKU COMPONENTE: 1234-4321</p>
                <p className="font-tunning-black">DESCRIPCION: ARM-J26-KLM</p>
                <p className="font-tunning-black">ULTIMA VERSION: 27-07-2023</p>
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
        </div>

      <div className="row">
        
{/* --------------------------------------------Formulario------------------- */}

{/* //TITULOS// */}

      <div className="container">
        <div className="row "></div>

{/* //CARACTERISTICAS EXTERIORES// */}

        <Formik initialValues={{


        largo:0, largoMinimo:0, largoMaximo:0, 
        ancho:0, anchoMinimo:0, anchoMaximo:0,
        diametroInt:0, diametroIntMinimo:0, diametroIntMaximo:0,
   

       labelcc1:'', cc1Nominal:0, cc1Minimo:0, cc1Maximo:0,
       labelcc2:'', cc2Nominal:0, cc2Minimo:0, cc2Maximo:0,
       labelcc3:'', cc3Nominal:0, cc3Minimo:0, cc3Maximo:0,
       labelcc4:'', cc4Nominal:0, cc4Minimo:0, cc4Maximo:0,
       labelcc5:'', cc5Nominal:0, cc5Minimo:0, cc5Maximo:0,
       labelcc6:'', cc6Nominal:0, cc6Minimo:0, cc6Maximo:0,
       labelcc7:'', cc7Nominal:0, cc7Minimo:0, cc7Maximo:0,
       labelcc8:'', cc8Nominal:0, cc8Minimo:0, cc8Maximo:0,
       labelcc9:'', cc9Nominal:0, cc9Minimo:0, cc9Maximo:0,
       labelcc10:'', cc10Nominal:0, cc10Minimo:0, cc10Maximo:0,
       labelcc11:'', cc11Nominal:0, cc11Minimo:0, cc11Maximo:0,
       labelcc12:'', cc12Nominal:0, cc12Minimo:0, cc12Maximo:0,
       labelcc13:'', cc13Nominal:0, cc13Minimo:0, cc13Maximo:0,
       labelcc14:'', cc14Nominal:0, cc14Minimo:0, cc14Maximo:0,
       labelcc15:'', cc15Nominal:0, cc15Minimo:0, cc15Maximo:0,
       labelcc16:'', cc16Nominal:0, cc16Minimo:0, cc16Maximo:0,
       labelcc17:'', cc17Nominal:0, cc17Minimo:0, cc17Maximo:0,
       labelcc18:'', cc18Nominal:0, cc18Minimo:0, cc18Maximo:0,
       labelcc19:'', cc19Nominal:0, cc19Minimo:0, cc19Maximo:0,
       labelcc20:'', cc20Nominal:0, cc20Minimo:0, cc20Maximo:0,


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
    
      }} 
        onSubmit={handleSubmitVALUES}  validate={validarVALUES} isValidating={false} isSubmitting={false} >
        <Form>

          <div className="row"></div>

          <div className="row row-fix ">
            <div className="col s12 m12 l8 left">
                <p className="display-box-title-ensayo-QA">CARACTERISTICAS CUANTITATIVAS</p>
                <div className="warning-inputs-scan"><ErrorMessage name="largo"/></div>
                <div className="warning-inputs-scan"><ErrorMessage name="largoMinimo"/></div>
                <div className="warning-inputs-scan"><ErrorMessage name="largoMaximo"/></div>

                <div className="warning-inputs-scan"><ErrorMessage name="ancho"/></div>
                <div className="warning-inputs-scan"><ErrorMessage name="anchoMinimo"/></div>
                <div className="warning-inputs-scan"><ErrorMessage name="anchoMaximo"/></div>

                <div className="warning-inputs-scan"><ErrorMessage name="diametroInt"/></div>
                <div className="warning-inputs-scan"><ErrorMessage name="diametroIntMinimo"/></div>
                <div className="warning-inputs-scan"><ErrorMessage name="diametroIntMaximo"/></div>

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
            
{/* //CARACTERISTICAS CUANTITATIVAS // */}

          <div className="row row-fix"></div>
        
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l8">
              <div className="display-box-test-setup z-depth-1 background-grey">
                  <p className="text-production-register">Largo</p>
              </div>
              </div>
              <div className="col l4 no-margin">
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 nominal">
                <Field name="largo" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 limites">
                <Field name="largoMinimo" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/> 
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 limites">
                <Field name="largoMaximo" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>
              </div>
            </div>


          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l8">
              <div className="display-box-test-setup z-depth-1 background-grey">
                  <p className="text-production-register">Ancho</p>
              </div>
              </div>
              <div className="col l4 no-margin">
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 nominal input-field-fine-tunning">
                <Field name="ancho" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
           
                
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                <Field name="anchoMinimo" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
             
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                <Field name="anchoMaximo" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
               
                </div>
              </div>
              </div>
            </div>
          </div>



          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l8">
              <div className="display-box-test-setup z-depth-1 background-grey">
                  <p className="text-production-register">Diámetro Interno</p>
              </div>
              </div>
              <div className="col l4 no-margin">
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 nominal input-field-fine-tunning">
                <Field name="diametroInt" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                <Field name="diametroIntMinimo" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                <Field name="diametroIntMaximo" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
               
                </div>
              </div>
              </div>
            </div>
          </div>



 {/* //ADD CARACTERISTICSA CUANTITAVIVAS // */}         




          <div className="row row-fix ">
          <div className="col s12 m12 l12 no-margin left">
              <div className="col s1 m1 l8 left">
              
                {editMode?
                  <i onClick={counterCCUp} className="material-symbols-outlined add_circle hover-hand left">add_circle</i> :null}
                  {cc1 === true && editMode?
                  <i onClick={counterCCDown} className="material-symbols-outlined add_circle hover-hand left">do_not_disturb_on</i>:null} 
              
                  {/* <p className="display-box-title-ensayo-QA">ATRIBUTOS COMPLEMENTARIAS</p> */}
                  <div className="warning-inputs-scan"><ErrorMessage name="cc1Nominal"/></div>
                  <div className="warning-inputs-scan"><ErrorMessage name="cc1Maximo"/></div>
                  <div className="warning-inputs-scan"><ErrorMessage name="cc1Minimo"/></div>

                  <div className="warning-inputs-scan"><ErrorMessage name="cc2Nominal"/></div>
                  <div className="warning-inputs-scan"><ErrorMessage name="cc2Maximo"/></div>
                  <div className="warning-inputs-scan"><ErrorMessage name="cc2Minimo"/></div>

                  <div className="warning-inputs-scan"><ErrorMessage name="cc3Nominal"/></div>
                  <div className="warning-inputs-scan"><ErrorMessage name="cc3Maximo"/></div>
                  <div className="warning-inputs-scan"><ErrorMessage name="cc3Minimo"/></div>

                  <div className="warning-inputs-scan"><ErrorMessage name="cc4Nominal"/></div>
                  <div className="warning-inputs-scan"><ErrorMessage name="cc4Maximo"/></div>
                  <div className="warning-inputs-scan"><ErrorMessage name="cc4Minimo"/></div>

                  <div className="warning-inputs-scan"><ErrorMessage name="cc5Nominal"/></div>
                  <div className="warning-inputs-scan"><ErrorMessage name="cc5Maximo"/></div>
                  <div className="warning-inputs-scan"><ErrorMessage name="cc5Minimo"/></div>

                  <div className="warning-inputs-scan"><ErrorMessage name="cc6Nominal"/></div>
                  <div className="warning-inputs-scan"><ErrorMessage name="cc6Maximo"/></div>
                  <div className="warning-inputs-scan"><ErrorMessage name="cc6Minimo"/></div>

                  <div className="warning-inputs-scan"><ErrorMessage name="cc7Nominal"/></div>
                  <div className="warning-inputs-scan"><ErrorMessage name="cc7Maximo"/></div>
                  <div className="warning-inputs-scan"><ErrorMessage name="cc7Minimo"/></div>

                  <div className="warning-inputs-scan"><ErrorMessage name="cc8Nominal"/></div>
                  <div className="warning-inputs-scan"><ErrorMessage name="cc8Maximo"/></div>
                  <div className="warning-inputs-scan"><ErrorMessage name="cc8Minimo"/></div>

                  <div className="warning-inputs-scan"><ErrorMessage name="cc9Nominal"/></div>
                  <div className="warning-inputs-scan"><ErrorMessage name="cc9Maximo"/></div>
                  <div className="warning-inputs-scan"><ErrorMessage name="cc9Minimo"/></div>

                  <div className="warning-inputs-scan"><ErrorMessage name="cc10Nominal"/></div>
                  <div className="warning-inputs-scan"><ErrorMessage name="cc10Maximo"/></div>
                  <div className="warning-inputs-scan"><ErrorMessage name="cc10Minimo"/></div>

                  <div className="warning-inputs-scan"><ErrorMessage name="cc11Nominal"/></div>
                  <div className="warning-inputs-scan"><ErrorMessage name="cc11Maximo"/></div>
                  <div className="warning-inputs-scan"><ErrorMessage name="cc11Minimo"/></div>

                  <div className="warning-inputs-scan"><ErrorMessage name="cc12Nominal"/></div>
                  <div className="warning-inputs-scan"><ErrorMessage name="cc12Maximo"/></div>
                  <div className="warning-inputs-scan"><ErrorMessage name="cc12Minimo"/></div>
                  
                  <div className="warning-inputs-scan"><ErrorMessage name="cc13Nominal"/></div>
                  <div className="warning-inputs-scan"><ErrorMessage name="cc13Maximo"/></div>
                  <div className="warning-inputs-scan"><ErrorMessage name="cc13Minimo"/></div>

                  <div className="warning-inputs-scan"><ErrorMessage name="cc14Nominal"/></div>
                  <div className="warning-inputs-scan"><ErrorMessage name="cc14Maximo"/></div>
                  <div className="warning-inputs-scan"><ErrorMessage name="cc14Minimo"/></div>

                  <div className="warning-inputs-scan"><ErrorMessage name="cc15Nominal"/></div>
                  <div className="warning-inputs-scan"><ErrorMessage name="cc15Maximo"/></div>
                  <div className="warning-inputs-scan"><ErrorMessage name="cc15Minimo"/></div>

                  <div className="warning-inputs-scan"><ErrorMessage name="cc16Nominal"/></div>
                  <div className="warning-inputs-scan"><ErrorMessage name="cc16Maximo"/></div>
                  <div className="warning-inputs-scan"><ErrorMessage name="cc16Minimo"/></div>

                  <div className="warning-inputs-scan"><ErrorMessage name="cc17Nominal"/></div>
                  <div className="warning-inputs-scan"><ErrorMessage name="cc17Maximo"/></div>
                  <div className="warning-inputs-scan"><ErrorMessage name="cc17Minimo"/></div>

                  <div className="warning-inputs-scan"><ErrorMessage name="cc18Nominal"/></div>
                  <div className="warning-inputs-scan"><ErrorMessage name="cc18Maximo"/></div>
                  <div className="warning-inputs-scan"><ErrorMessage name="cc18Minimo"/></div>

                  <div className="warning-inputs-scan"><ErrorMessage name="cc19Nominal"/></div>
                  <div className="warning-inputs-scan"><ErrorMessage name="cc19Maximo"/></div>
                  <div className="warning-inputs-scan"><ErrorMessage name="cc19Minimo"/></div>

                  <div className="warning-inputs-scan"><ErrorMessage name="cc20Nominal"/></div>
                  <div className="warning-inputs-scan"><ErrorMessage name="cc20Maximo"/></div>
                  <div className="warning-inputs-scan"><ErrorMessage name="cc20Minimo"/></div>

                  
                  
              </div>
              {/* {cc1 === true?
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
                      </div>:null} */}
            </div>
          </div>

          
          {cc1 === true?
          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l8">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue">
                  <Field name="labelcc1" disabled={!editMode} className="input-label-ensayo" placeholder="Ingrese nombre del Parámetro" maxLength="60"/>
                </div>
           
              </div>
              <div className="col l4 no-margin">
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 nominal input-field-fine-tunning">
                <Field name="cc1Nominal" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                <Field name="cc1Minimo" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
              
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                <Field name="cc1Maximo" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                
                </div>
              </div>
              </div>
            </div>
          </div>:null}

          {cc2 === true?
          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l8">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue">
                  <Field name="labelcc2" disabled={!editMode} className="input-label-ensayo" placeholder="Ingrese nombre del Parámetro" maxLength="50"/>
                </div>
           
              </div>
              <div className="col l4 no-margin">
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 nominal input-field-fine-tunning">
                <Field name="cc2Nominal" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                <Field name="cc2Minimo" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
              
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                <Field name="cc2Maximo" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                
                </div>
              </div>
              </div>
            </div>
          </div>:null}

          {cc3 === true?
          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l8">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue">
                  <Field name="labelcc3" disabled={!editMode} className="input-label-ensayo" placeholder="Ingrese nombre del Parámetro" maxLength="50"/>
                </div>
           
              </div>
              <div className="col l4 no-margin">
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 nominal input-field-fine-tunning">
                <Field name="cc3Nominal" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                <Field name="cc3Minimo" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
              
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                <Field name="cc3Maximo" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                
                </div>
              </div>
              </div>
            </div>
          </div>:null}
          {cc4 === true?
          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l8">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue">
                  <Field name="labelcc4" disabled={!editMode} className="input-label-ensayo" placeholder="Ingrese nombre del Parámetro" maxLength="50"/>
                </div>
           
              </div>
              <div className="col l4 no-margin">
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 nominal input-field-fine-tunning">
                <Field name="cc4Nominal" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                <Field name="cc4Minimo" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
              
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                <Field name="cc4Maximo" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                
                </div>
              </div>
              </div>
            </div>
          </div>:null}
          {cc5 === true?
          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l8">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue">
                  <Field name="labelcc5" disabled={!editMode} className="input-label-ensayo" placeholder="Ingrese nombre del Parámetro" maxLength="50"/>
                </div>
           
              </div>
              <div className="col l4 no-margin">
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 nominal input-field-fine-tunning">
                <Field name="cc5Nominal" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                <Field name="cc5Minimo" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
              
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                <Field name="cc5Maximo" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                
                </div>
              </div>
              </div>
            </div>
          </div>:null}
          {cc6 === true?
          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l8">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue">
                  <Field name="labelcc6" disabled={!editMode} className="input-label-ensayo" placeholder="Ingrese nombre del Parámetro" maxLength="50"/>
                </div>
           
              </div>
              <div className="col l4 no-margin">
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 nominal input-field-fine-tunning">
                <Field name="cc6Nominal" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                <Field name="cc6Minimo" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
              
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                <Field name="cc6Maximo" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                
                </div>
              </div>
              </div>
            </div>
          </div>:null}
          {cc7 === true?
          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l8">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue">
                  <Field name="labelcc7" disabled={!editMode} className="input-label-ensayo" placeholder="Ingrese nombre del Parámetro" maxLength="50"/>
                </div>
           
              </div>
              <div className="col l4 no-margin">
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 nominal input-field-fine-tunning">
                <Field name="cc7Nominal" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                <Field name="cc7Minimo" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
              
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                <Field name="cc7Maximo" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                
                </div>
              </div>
              </div>
            </div>
          </div>:null}

          {cc8 === true?
          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l8">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue">
                  <Field name="labelcc8" disabled={!editMode} className="input-label-ensayo" placeholder="Ingrese nombre del Parámetro" maxLength="50"/>
                </div>
           
              </div>
              <div className="col l4 no-margin">
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 nominal input-field-fine-tunning">
                <Field name="cc8Nominal" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                <Field name="cc8Minimo" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
              
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                <Field name="cc8Maximo" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                
                </div>
              </div>
              </div>
            </div>
          </div>:null}
          {cc9 === true?
          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l8">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue">
                  <Field name="labelcc9" disabled={!editMode} className="input-label-ensayo" placeholder="Ingrese nombre del Parámetro" maxLength="50"/>
                </div>
           
              </div>
              <div className="col l4 no-margin">
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 nominal input-field-fine-tunning">
                <Field name="cc9Nominal" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                <Field name="cc9Minimo" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
              
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                <Field name="cc9Maximo" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                
                </div>
              </div>
              </div>
            </div>
          </div>:null}
          {cc10 === true?
          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l8">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue">
                  <Field name="labelcc10" disabled={!editMode} className="input-label-ensayo" placeholder="Ingrese nombre del Parámetro" maxLength="50"/>
                </div>
           
              </div>
              <div className="col l4 no-margin">
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 nominal input-field-fine-tunning">
                <Field name="cc10Nominal" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                <Field name="cc10Minimo" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
              
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                <Field name="cc10Maximo" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                
                </div>
              </div>
              </div>
            </div>
          </div>:null}
          {cc11 === true?
          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l8">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue">
                  <Field name="labelcc11" disabled={!editMode} className="input-label-ensayo" placeholder="Ingrese nombre del Parámetro" maxLength="50"/>
                </div>
           
              </div>
              <div className="col l4 no-margin">
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 nominal input-field-fine-tunning">
                <Field name="cc11Nominal" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                <Field name="cc11Minimo" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
              
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                <Field name="cc1Maximo" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                
                </div>
              </div>
              </div>
            </div>
          </div>:null}

          {cc12 === true?
          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l8">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue">
                  <Field name="labelcc12" disabled={!editMode} className="input-label-ensayo" placeholder="Ingrese nombre del Parámetro" maxLength="50"/>
                </div>
           
              </div>
              <div className="col l4 no-margin">
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 nominal input-field-fine-tunning">
                <Field name="cc12Nominal" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                 
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                <Field name="cc12Minimo" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
              
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                <Field name="cc12Maximo" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                
                </div>
              </div>
              </div>
            </div>
          </div>:null}
          {cc13 === true?
          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l8">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue">
                  <Field name="labelcc13" disabled={!editMode} className="input-label-ensayo" placeholder="Ingrese nombre del Parámetro" maxLength="50"/>
                </div>
           
              </div>
              <div className="col l4 no-margin">
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 nominal input-field-fine-tunning">
                <Field name="cc13Nominal" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                <Field name="cc13Minimo" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
              
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                <Field name="cc13Maximo" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                
                </div>
              </div>
              </div>
            </div>
          </div>:null}
          {cc14 === true?
          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l8">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue">
                  <Field name="labelcc14" disabled={!editMode} className="input-label-ensayo" placeholder="Ingrese nombre del Parámetro" maxLength="50"/>
                </div>
           
              </div>
              <div className="col l4 no-margin">
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 nominal input-field-fine-tunning">
                <Field name="cc14Nominal" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                <Field name="cc14Minimo" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
              
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                <Field name="cc14Maximo" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                
                </div>
              </div>
              </div>
            </div>
          </div>:null}
          {cc15 === true?
          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l8">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue">
                  <Field name="labelcc15" disabled={!editMode} className="input-label-ensayo" placeholder="Ingrese nombre del Parámetro" maxLength="50"/>
                </div>
           
              </div>
              <div className="col l4 no-margin">
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 nominal input-field-fine-tunning">
                <Field name="cc15Nominal" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                <Field name="cc15Minimo" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
              
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                <Field name="cc15Maximo" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                
                </div>
              </div>
              </div>
            </div>
          </div>:null}
          {cc16 === true?
          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l8">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue">
                  <Field name="labelcc16" disabled={!editMode} className="input-label-ensayo" placeholder="Ingrese nombre del Parámetro" maxLength="50"/>
                </div>
           
              </div>
              <div className="col l4 no-margin">
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 nominal input-field-fine-tunning">
                <Field name="cc16Nominal" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                <Field name="cc16Minimo" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
              
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                <Field name="cc16Maximo" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                
                </div>
              </div>
              </div>
            </div>
          </div>:null}
          {cc17 === true?
          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l8">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue">
                  <Field name="labelcc17" disabled={!editMode} className="input-label-ensayo" placeholder="Ingrese nombre del Parámetro" maxLength="50"/>
                </div>
           
              </div>
              <div className="col l4 no-margin">
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 nominal input-field-fine-tunning">
                <Field name="cc17Nominal" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                <Field name="cc17Minimo" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
              
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                <Field name="cc17Maximo" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                
                </div>
              </div>
              </div>
            </div>
          </div>:null}
          {cc18 === true?
          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l8">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue">
                  <Field name="labelcc18" disabled={!editMode} className="input-label-ensayo" placeholder="Ingrese nombre del Parámetro" maxLength="50"/>
                </div>
           
              </div>
              <div className="col l4 no-margin">
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 nominal input-field-fine-tunning">
                <Field name="cc18Nominal" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                <Field name="cc18Minimo" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
              
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                <Field name="cc18Maximo" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                
                </div>
              </div>
              </div>
            </div>
          </div>:null}
          {cc19 === true?
          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l8">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue">
                  <Field name="labelcc19" disabled={!editMode} className="input-label-ensayo" placeholder="Ingrese nombre del Parámetro" maxLength="50"/>
                </div>
           
              </div>
              <div className="col l4 no-margin">
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 nominal input-field-fine-tunning">
                <Field name="cc19Nominal" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                <Field name="cc19Minimo" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
              
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                <Field name="cc19Maximo" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                
                </div>
              </div>
              </div>
            </div>
          </div>:null}

          {cc20 === true?
          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l8">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue">
                  <Field name="labelcc20" disabled={!editMode} className="input-label-ensayo" placeholder="Ingrese nombre del Parámetro" maxLength="50"/>
                </div>
           
              </div>
              <div className="col l4 no-margin">
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 nominal input-field-fine-tunning">
                <Field name="cc20Nominal" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                <Field name="cc20Minimo" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
              
                </div>
              </div>
              <div className="col s1 m1 l4 ">
                <div className="display-box-test-setup z-depth-1 limites input-field-fine-tunning">
                <Field name="cc20Maximo" disabled={!editMode} className="inputfield-fine-tunning" maxLength="7"/>
                
                </div>
              </div>
              </div>
            </div>
          </div>:null}



          

{/* //ATRUBUTOS COMPLEMENTARIOS // */}

          <div className="row"></div>

          <div className="row row-fix ">
          <div className="col s12 m12 l12 no-margin left">
              <div className="col s1 m1 l8 left">
              
                {editMode?
                  <i onClick={counterUp} className="material-symbols-outlined add_circle hover-hand left">add_circle</i> :null}
                  {medComp1 === true && editMode?
                  <i onClick={counterDown} className="material-symbols-outlined add_circle hover-hand left">do_not_disturb_on</i>:null} 
              
                  <p className="display-box-title-ensayo-QA">ATRIBUTOS COMPLEMENTARIOS</p>
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
export default EdicionPuestaAPunto;
