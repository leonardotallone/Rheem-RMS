import Navbar from "../Navbar/Navbar";
import QR from "../../assets/logos/QR.png";
import testPDF from "../../assets/manual.pdf"
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";


const Fine_Tuning = () => {

//  window.localStorage.removeItem("ft1")
//  window.localStorage.removeItem("ft2")
//  window.localStorage.removeItem("ft3")
//  window.localStorage.removeItem("ft4")
//  window.localStorage.removeItem("ft5")
//  window.localStorage.removeItem("ft6")
//  window.localStorage.removeItem("ft7")
//  window.localStorage.removeItem("ft8")
//  window.localStorage.removeItem("ft9")
//  window.localStorage.removeItem("ft10")


  const [ensayo, setEnsayo ] = useState(true); 
  const [aprobacion, setAprobacion] = useState(false);

  const edicionPuestaAPunto = JSON.parse(window.localStorage.getItem("edicionPuestaAPunto"));
  // console.log("EDICION PUESTA A PUNTO", edicionPuestaAPunto )

  const FT1 = (JSON.parse(window.localStorage.getItem("ft1")))
  console.log("FT1", FT1)
  const FT2 = (JSON.parse(window.localStorage.getItem("ft2")))
  console.log("FT2", FT2)
  const FT3 = (JSON.parse(window.localStorage.getItem("ft3")))
  console.log("FT3", FT3)
  const FT4 = (JSON.parse(window.localStorage.getItem("ft4")))
  console.log("FT4", FT4)
  const FT5 = (JSON.parse(window.localStorage.getItem("ft5")))
  console.log("FT5", FT5)
  const FT6 = (JSON.parse(window.localStorage.getItem("ft6")))
  console.log("FT6", FT6)
  const FT7 = (JSON.parse(window.localStorage.getItem("ft7")))
  console.log("FT7", FT7)
  const FT8 = (JSON.parse(window.localStorage.getItem("ft8")))
  console.log("FT8", FT8)
  const FT9 = (JSON.parse(window.localStorage.getItem("ft9")))
  console.log("FT9", FT9)
  const FT10 = (JSON.parse(window.localStorage.getItem("ft10")))
  console.log("FT10", FT10)


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
    window.localStorage.removeItem('ft1') 
    window.localStorage.removeItem('ft2') 
    window.localStorage.removeItem('ft3') 
    window.localStorage.removeItem('ft4') 
    window.localStorage.removeItem('ft5') 
    window.localStorage.removeItem('ft6') 
    window.localStorage.removeItem('ft7') 
    window.localStorage.removeItem('ft8') 
    window.localStorage.removeItem('ft9') 
    window.localStorage.removeItem('ft10') 
    // window.location.reload();
    const sku = {sku: values.sku}
    console.log("SKU FINE TUNING", sku)
  };
  const validarVALUES = (values) => {
    
    const errors = {};
    const onlyNumbers = /^\d{1,4}(\.\d{1,2})?$/

     if (!values.largo){
     errors.largo = 'Largo sin Ingresar'
    } else if (values.largo && !values.largo.match(onlyNumbers)){
    errors.largo = 'Largo con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    }
      else if (!values.ancho){
      errors.ancho = 'Ancho sin Ingresar'
     } else if (values.ancho && !values.ancho.match(onlyNumbers)){
     errors.ancho = 'Ancho con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
     }
      else if (!values.diametroInt){
      errors.diametroInt = 'Diámetro Interior sin Ingresar'
     } else if (values.diametroInt && !values.diametroInt.match(onlyNumbers)){
     errors.diametroInt = 'Diámetro Interior con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
     }


     else if (edicionPuestaAPunto.caracteristicasCuantitativas.cc1.label && values.cc1 === ""){
      errors.cc1 = 'Característica Cuantitativa 1 sin Ingresar'
     } else if (values.cc1 && !values.cc1.match(onlyNumbers)){
     errors.cc1 = 'Característica Cuantitativa 1 con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
     }
     else if (edicionPuestaAPunto.caracteristicasCuantitativas.cc2.label && values.cc2 === ""){
      errors.cc2 = 'Característica Cuantitativa 2 sin Ingresar'
     } else if (values.cc2 && !values.cc2.match(onlyNumbers)){
     errors.cc2 = 'Característica Cuantitativa 2 con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
     }
     else if  (edicionPuestaAPunto.caracteristicasCuantitativas.cc3.label && values.cc3 === ""){
      errors.cc3 = 'Característica Cuantitativa 3 sin Ingresar'
     } else if (values.cc3 && !values.cc3.match(onlyNumbers)){
     errors.cc3 = 'Característica Cuantitativa 3 con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
     }
     else if  (edicionPuestaAPunto.caracteristicasCuantitativas.cc4.label && values.cc4 === ""){
      errors.cc4 = 'Característica Cuantitativa 4 sin Ingresar'
     } else if (values.cc4 && !values.cc4.match(onlyNumbers)){
     errors.cc4 = 'Característica Cuantitativa 4 con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
     }
     else if  (edicionPuestaAPunto.caracteristicasCuantitativas.cc5.label && values.cc5 === ""){
      errors.cc5 = 'Característica Cuantitativa 5 sin Ingresar'
     } else if (values.cc5 && !values.cc5.match(onlyNumbers)){
     errors.cc5 = 'Característica Cuantitativa 5 con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
     }
     else if  (edicionPuestaAPunto.caracteristicasCuantitativas.cc6.label && values.cc6 === ""){
      errors.cc6 = 'Característica Cuantitativa 6 sin Ingresar'
     } else if (values.cc6 && !values.cc6.match(onlyNumbers)){
     errors.cc6 = 'Característica Cuantitativa 6 con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
     }
     else if  (edicionPuestaAPunto.caracteristicasCuantitativas.cc7.label && values.cc7 === ""){
      errors.cc7 = 'Característica Cuantitativa 7 sin Ingresar'
     } else if (values.cc7 && !values.cc7.match(onlyNumbers)){
     errors.cc7 = 'Característica Cuantitativa 7 con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
     }
     else if  (edicionPuestaAPunto.caracteristicasCuantitativas.cc8.label && values.cc8 === ""){
      errors.cc8 = 'Característica Cuantitativa 8 sin Ingresar'
     } else if (values.cc8 && !values.cc8.match(onlyNumbers)){
     errors.cc8 = 'Característica Cuantitativa 8 con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
     }
     else if  (edicionPuestaAPunto.caracteristicasCuantitativas.cc9.label && values.cc9 === ""){
      errors.cc9 = 'Característica Cuantitativa 9 sin Ingresar'
     } else if (values.cc9 && !values.cc9.match(onlyNumbers)){
     errors.cc9 = 'Característica Cuantitativa 9 con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
     }
     else if  (edicionPuestaAPunto.caracteristicasCuantitativas.cc10.label && values.cc10 === ""){
      errors.cc10 = 'Característica Cuantitativa 10 sin Ingresar'
     } else if (values.cc10 && !values.cc10.match(onlyNumbers)){
     errors.cc10 = 'Característica Cuantitativa 10 con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
     }
     else if  (edicionPuestaAPunto.caracteristicasCuantitativas.cc11.label && values.cc11 === ""){
      errors.cc11 = 'Característica Cuantitativa 11 sin Ingresar'
     } else if (values.cc11 && !values.cc11.match(onlyNumbers)){
     errors.cc11 = 'Característica Cuantitativa 11 con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
     }
     else if  (edicionPuestaAPunto.caracteristicasCuantitativas.cc12.label && values.cc12 === ""){
      errors.cc12 = 'Característica Cuantitativa 12 sin Ingresar'
     } else if (values.cc12 && !values.cc12.match(onlyNumbers)){
     errors.cc12 = 'Característica Cuantitativa 12 con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
     }
     else if (edicionPuestaAPunto.caracteristicasCuantitativas.cc13.label && values.cc13 === ""){
      errors.cc13 = 'Característica Cuantitativa 13 sin Ingresar'
     } else if (values.cc13 && !values.cc13.match(onlyNumbers)){
     errors.cc13 = 'Característica Cuantitativa 13 con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
     }
     else if  (edicionPuestaAPunto.caracteristicasCuantitativas.cc14.label && values.cc14 === ""){
      errors.cc14 = 'Característica Cuantitativa 14 sin Ingresar'
     } else if (values.cc14 && !values.cc14.match(onlyNumbers)){
     errors.cc14 = 'Característica Cuantitativa 14 con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
     }
     else if  (edicionPuestaAPunto.caracteristicasCuantitativas.cc15.label && values.cc15 === ""){
      errors.cc15 = 'Característica Cuantitativa 15 sin Ingresar'
     } else if (values.cc15 && !values.cc15.match(onlyNumbers)){
     errors.cc15 = 'Característica Cuantitativa 15 con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
     }
     else if  (edicionPuestaAPunto.caracteristicasCuantitativas.cc16.label && values.cc16 === ""){
      errors.cc16 = 'Característica Cuantitativa 16 sin Ingresar'
     } else if (values.cc16 && !values.cc16.match(onlyNumbers)){
     errors.cc16 = 'Característica Cuantitativa 16 con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
     }
     else if  (edicionPuestaAPunto.caracteristicasCuantitativas.cc17.label && values.cc17 === ""){
      errors.cc17 = 'Característica Cuantitativa 17 sin Ingresar'
     } else if (values.cc17 && !values.cc17.match(onlyNumbers)){
     errors.cc17 = 'Característica Cuantitativa 17 con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
     }
     else if  (edicionPuestaAPunto.caracteristicasCuantitativas.cc18.label && values.cc18 === ""){
      errors.cc18 = 'Característica Cuantitativa 18 sin Ingresar'
     } else if (values.cc18 && !values.cc18.match(onlyNumbers)){
     errors.cc18 = 'Característica Cuantitativa 18 con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
     }
     else if  (edicionPuestaAPunto.caracteristicasCuantitativas.cc19.label && values.cc19 === ""){
      errors.cc19 = 'Característica Cuantitativa 19 sin Ingresar'
     } else if (values.cc19 && !values.cc19.match(onlyNumbers)){
     errors.cc19 = 'Característica Cuantitativa 19 con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
     }
     else if  (edicionPuestaAPunto.caracteristicasCuantitativas.cc20.label && values.cc20 === ""){
      errors.cc20 = 'Característica Cuantitativa 20 sin Ingresar'
     } else if (values.cc20 && !values.cc20.match(onlyNumbers)){
     errors.cc20 = 'Característica Cuantitativa 20 con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
     }

// MEDIOCIONES COMPLEMENTARIAS

      else if (edicionPuestaAPunto.medicionesComplementarias.MC1.label && values.mc1 === ""){
      errors.mc1 = 'Medición Complementaria 1 sin Ingresar'
    } else if (values.mc1 && !values.mc1.match(onlyNumbers)){
      errors.mc1 = 'Medición Complementaria 1 con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    }
    else if (edicionPuestaAPunto.medicionesComplementarias.MC2.label && values.mc2 === ""){
      errors.mc2 = 'Medición Complementaria 2 sin Ingresar'
    } else if (values.mc2 && !values.mc2.match(onlyNumbers)){
      errors.mc2= 'Medición Complementaria 2 con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    }
    else if (edicionPuestaAPunto.medicionesComplementarias.MC3.label && values.mc3 === ""){
      errors.mc3= 'Medición Complementaria 3 sin Ingresar'
    } else if (values.mc3 && !values.mc3.match(onlyNumbers)){
      errors.mc3 = 'Medición Complementaria 3 con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    }
    else if  (edicionPuestaAPunto.medicionesComplementarias.MC4.label && values.mc4 === ""){
      errors.mc4= 'Medición Complementaria 4 sin Ingresar'
    } else if (values.mc4 && !values.mc4.match(onlyNumbers)){
      errors.mc4 = 'Medición Complementaria 4 con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    }
    else if (edicionPuestaAPunto.medicionesComplementarias.MC5.label && values.mc5 === ""){
      errors.mc5= 'Medición Complementaria 5 sin Ingresar'
    } else if (values.mc5 && !values.mc5.match(onlyNumbers)){
      errors.mc5 = 'Medición Complementaria 5 con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    }
    else if (edicionPuestaAPunto.medicionesComplementarias.MC6.label && values.mc6 === ""){
      errors.mc6= 'Medición Complementaria 6 sin Ingresar'
    } else if (values.mc6 && !values.mc6.match(onlyNumbers)){
      errors.mc6 = 'Medición Complementaria 6 con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    }
    else if  (edicionPuestaAPunto.medicionesComplementarias.MC7.label && values.mc7 === ""){
      errors.mc7= 'Medición Complementaria 7 sin Ingresar'
    } else if (values.mc7 && !values.mc7.match(onlyNumbers)){
      errors.mc7 = 'Medición Complementaria 7 con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    }
    else if (edicionPuestaAPunto.medicionesComplementarias.MC8.label && values.mc8 === ""){
      errors.mc8= 'Medición Complementaria 8 sin Ingresar'
    } else if (values.mc8 && !values.mc8.match(onlyNumbers)){
      errors.mc8 = 'Medición Complementaria 8 con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    }
    else if  (edicionPuestaAPunto.medicionesComplementarias.MC9.label && values.mc9 === ""){
      errors.mc9= 'Medición Complementaria 9 sin Ingresar'
    } else if (values.mc9 && !values.mc9.match(onlyNumbers)){
      errors.mc9 = 'Medición Complementaria 9 con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    }
    else if (edicionPuestaAPunto.medicionesComplementarias.MC10.label && values.mc10 === ""){
      errors.mc10= 'Medición Complementaria 10 sin Ingresar'
    } else if (values.mc10 && !values.mc10.match(onlyNumbers)){
      errors.mc10 = 'Medición Complementaria 10 con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    }
    else if  (edicionPuestaAPunto.medicionesComplementarias.MC11.label && values.mc11 === ""){
      errors.mc11= 'Medición Complementaria 11 sin Ingresar'
    } else if (values.mc11 && !values.mc11.match(onlyNumbers)){
      errors.mc11 = 'Medición Complementaria 11 con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    }
    else if  (edicionPuestaAPunto.medicionesComplementarias.MC12.label && values.mc12 === ""){
      errors.mc12= 'Medición Complementaria 12 sin Ingresar'
    } else if (values.mc12 && !values.mc12.match(onlyNumbers)){
      errors.mc12 = 'Medición Complementaria 12 con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    }
    else if (edicionPuestaAPunto.medicionesComplementarias.MC13.label && values.mc13 === ""){
      errors.mc13 = 'Medición Complementaria 13 sin Ingresar'
    } else if (values.mc13 && !values.mc13.match(onlyNumbers)){
      errors.mc13 = 'Medición Complementaria 13 con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    }
    else if (edicionPuestaAPunto.medicionesComplementarias.MC14.label && values.mc14 === ""){
      errors.mc14 = 'Medición Complementaria 14 sin Ingresar'
    } else if (values.mc14 && !values.mc14.match(onlyNumbers)){
      errors.mc14 = 'Medición Complementaria 14 con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    }
    else if (edicionPuestaAPunto.medicionesComplementarias.MC15.label && values.mc15 === ""){
      errors.mc15 = 'Medición Complementaria 15 sin Ingresar'
    } else if (values.mc15 && !values.mc15.match(onlyNumbers)){
      errors.mc15 = 'Medición Complementaria 15 con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    }
    else if (edicionPuestaAPunto.medicionesComplementarias.MC16.label && values.mc16 === ""){
      errors.mc16 = 'Medición Complementaria 16 sin Ingresar'
    } else if (values.mc16 && !values.mc16.match(onlyNumbers)){
      errors.mc16 = 'Medición Complementaria 16 con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    }
    else if (edicionPuestaAPunto.medicionesComplementarias.MC17.label && values.mc17 === ""){
      errors.mc17 = 'Medición Complementaria 17 sin Ingresar'
    } else if (values.mc17 && !values.mc17.match(onlyNumbers)){
      errors.mc17 = 'Medición Complementaria 17 con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    }
    else if (edicionPuestaAPunto.medicionesComplementarias.MC18.label && values.mc18 === ""){
      errors.mc18 = 'Medición Complementaria 18 sin Ingresar'
    } else if (values.mc18 && !values.mc18.match(onlyNumbers)){
      errors.mc18 = 'Medición Complementaria 18 con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    }
     else if (edicionPuestaAPunto.medicionesComplementarias.MC19.label && values.mc19 === ""){
      errors.mc19 = 'Medición Complementaria 19 sin Ingresar'
    } else if (values.mc19 && !values.mc19.match(onlyNumbers)){
      errors.mc19 = 'Medición Complementaria 19 con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    }
    else if (edicionPuestaAPunto.medicionesComplementarias.MC20.label && values.mc20 === ""){
      errors.mc20 = 'Medición Complementaria 20 sin Ingresar'
    } else if (values.mc20 && !values.mc20.match(onlyNumbers)){
      errors.mc20 = 'Medición Complementaria 20 con Error, Ingrese hasta 4 números enteros y dos decimales separados por "."'
    }

     return errors;
  };

  const handleSubmitRESULT = (values) => {
    const fineTuning = {

        caracteristicasCuantitativas:{
          largo: {
            resultado:(Number(values.largo)),
        },
        ancho: {
            resultado:(Number(values.ancho)),
        },
        diametroInt: {
            resultado:(Number(values.diametroInt)),
        },
        cc1:{
          resultado:(Number(values.cc1))
        },
        cc2:{
          resultado:(Number(values.cc2))
        },
        cc3:{
          resultado:(Number(values.cc3))
        },
        cc4:{
          resultado:(Number(values.cc4))
        },
        cc5:{
          resultado:(Number(values.cc5))
        },
        cc6:{
          resultado:(Number(values.cc6))
        },
        cc7:{
          resultado:(Number(values.cc7))
        },
        cc8:{
          resultado:(Number(values.cc8))
        },
        cc9:{
          resultado:(Number(values.cc9))
        },
        cc10:{
          resultado:(Number(values.cc10))
        },
        cc11:{
          resultado:(Number(values.cc11))
        },
        cc12:{
          resultado:(Number(values.cc12))
        },
        cc13:{
          resultado:(Number(values.cc13))
        },
        cc14:{
          resultado:(Number(values.cc14))
        },
        cc15:{
          resultado:(Number(values.cc15))
        },
        cc16:{
          resultado:(Number(values.cc16))
        },
        cc17:{
          resultado:(Number(values.cc17))
        },
        cc18:{
          resultado:(Number(values.cc18))
        },
        cc19:{
          resultado:(Number(values.cc19))
        },
        cc20:{
          resultado:(Number(values.cc20))
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
        };

        if (FT1 === null) {
          window.localStorage.setItem("ft1", JSON.stringify(fineTuning));
          window.location.reload();
         } else if (FT2 === null){
          window.localStorage.setItem("ft2", JSON.stringify(fineTuning));
          window.location.reload();
        } else if (FT3 === null){
          window.localStorage.setItem("ft3", JSON.stringify(fineTuning));
          window.location.reload();
        } else if (FT4 === null){
          window.localStorage.setItem("ft4", JSON.stringify(fineTuning));
          window.location.reload();
        } else if (FT5 === null){
          window.localStorage.setItem("ft5", JSON.stringify(fineTuning));
          window.location.reload();
        } else if (FT6 === null){
          window.localStorage.setItem("ft6", JSON.stringify(fineTuning));
          window.location.reload();
        } else if (FT7 === null){
          window.localStorage.setItem("ft7", JSON.stringify(fineTuning));
          window.location.reload();
        } else if (FT8 === null){
          window.localStorage.setItem("ft8", JSON.stringify(fineTuning));
          window.location.reload(); 
        } else if (FT9 === null){
          window.localStorage.setItem("ft9", JSON.stringify(fineTuning));
          window.location.reload(); 
        } else if (FT10 === null){
          window.localStorage.setItem("ft10", JSON.stringify(fineTuning));
          window.location.reload(); 
        }
      }
     
  const validarENSAYO = (values) => {
        const errors = {};
        if (!values.calificacion){
          errors.calificacion = " Por favor seleccione Calificación"
        } else if (!values.ordenDeCompra){
          errors.ordenDeCompra = 'Por favor ingrese Nº de Orden de Compra'
        }
        return errors
      };    
      
const handleSubmitENSAYO = () =>{
  console.log("RESOLVER LOGICA!")
}
       
  const eraseFT1 = () => {
    window.localStorage.removeItem('ft1') 
    window.location.reload();
  }
  const eraseFT2 = () => {
    window.localStorage.removeItem('ft2') 
    window.location.reload();
  }
  const eraseFT3 = () => {
    window.localStorage.removeItem('ft3') 
    window.location.reload();
  }
  const eraseFT4 = () => {
    window.localStorage.removeItem('ft4') 
    window.location.reload();
  }
  const eraseFT5 = () => {
    window.localStorage.removeItem('ft5') 
    window.location.reload();
  }
  const eraseFT6 = () => {
    window.localStorage.removeItem('ft6') 
    window.location.reload();
  }
  const eraseFT7= () => {
    window.localStorage.removeItem('ft7') 
    window.location.reload();
  }
  const eraseFT8 = () => {
    window.localStorage.removeItem('ft8') 
    window.location.reload();
  }
  const eraseFT9 = () => {
    window.localStorage.removeItem('ft9') 
    window.location.reload();
  }
  const eraseFT10 = () => {
    window.localStorage.removeItem('ft10') 
    window.location.reload();
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
              <div className="col s12 m12 l9">

              <p className="font-title-create-plan">Registro de Puesta a Punto</p>
              <p className="font-subtitle-create-plan">Plegadora</p>
              <div className="display-box-fine-tunning-scancode z-depth-1">
                  <Formik initialValues={{ sku:''}} 
                  onSubmit={handleSubmitSKU}  validate={validarSKU} isValidating={false} isSubmitting={false} >
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
                <p className="display-box-title">Codigo de Componente.</p>
              </div>
            </div>

            <div className="col s11 m11 l4 ">
              <div className="col s12 m5 l5 no-margin">
              <p className="font-form-create-plan hide-on-small-only" >&emsp;</p> 
              {/* <p className="font-tunning-black">DATO: DATO</p>
              <p className="font-tunning-black">DATO: DATO</p>
            <p className="font-tunning-black">DATO: DATO</p> */}
              </div>
                <div className="col s12 m7 l7 no-margin pull-l1">
                <p className="font-form-create-plan">RC:16-062</p>  
                <p className="font-tunning-black">CODIGO SKU: SKU</p>
                <p className="font-tunning-black">FECHA DE ENSAYO: 20-07-2023</p>
                <p className="font-tunning-black">DESCRIPCION COMP.DESCRIPCION</p>
                <p className="font-tunning-black">DESCRIPCION SKU: DESCRIPCION</p> 
                <p className="font-tunning-black">Nº DE LOTE: 1234</p>
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
      <Formik initialValues={{
           largo:0,
           ancho:0, 
           diametroInt:0,
           
            cc1:0,
            cc2:0,
            cc3:0,
            cc4:0, 
            cc5:0,
            cc6:0, 
            cc7:0, 
            cc8:0, 
            cc9:0, 
            cc10:0, 
            cc11:0, 
            cc12:0, 
            cc13:0, 
            cc14:0, 
            cc15:0, 
            cc16:0, 
            cc17:0, 
            cc18:0, 
            cc19:0, 
            cc20:0,  

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

        }} 
          onSubmit={handleSubmitRESULT}  
          validate={validarVALUES} 
          isValidating={false} 
          isSubmitting={false} 
          >
          <Form>
      <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l1">
                  <p className="title-production-register">CUANTITATIVAS</p>
              </div>
              <div className="col s1 m1 l1">
                  <p className="title-production-register">RESULTADO</p>
              </div>
              <div className="col s1 m1 l1">
                  <p className="title-production-register">M-#1</p>
              </div>
              <div className="col s1 m1 l1">
                  <p className="title-production-register">M-#2</p>
              </div>
              <div className="col s1 m1 l1">
                  <p className="title-production-register">M-#3</p>
              </div>
              <div className="col s1 m1 l1">
                  <p className="title-production-register">M-#4</p>
              </div>
              <div className="col s1 m1 l1">
                  <p className="title-production-register">M-#5</p>
              </div>
              <div className="col s1 m1 l1">
                  <p className="title-production-register">M-#6</p>
              </div>
              <div className="col s1 m1 l1">
                  <p className="title-production-register">M-#7</p>
              </div>
              <div className="col s1 m1 l1">
                  <p className="title-production-register">M-#8</p>
              </div>
              <div className="col s1 m1 l1">
                  <p className="title-production-register">M-#9</p>
              </div>
              <div className="col s1 m1 l1">
                  <p className="title-production-register">M-#10</p>
              </div>
            </div>
          </div>

          <div className="col l12">
                    <p className="warning-inputs-scan left"><ErrorMessage name="largo"/></p>
                    <p className="warning-inputs-scan left"><ErrorMessage name="ancho"/></p>
                    <p className="warning-inputs-scan left"><ErrorMessage name="diametroInt"/></p>
                    <p className="warning-inputs-scan left"><ErrorMessage name="cc1"/></p>
                    <p className="warning-inputs-scan left"><ErrorMessage name="cc2"/></p>
                    <p className="warning-inputs-scan left"><ErrorMessage name="cc3"/></p>
                    <p className="warning-inputs-scan left"><ErrorMessage name="cc4"/></p>
                    <p className="warning-inputs-scan left"><ErrorMessage name="cc5"/></p>
                    <p className="warning-inputs-scan left"><ErrorMessage name="cc6"/></p>
                    <p className="warning-inputs-scan left"><ErrorMessage name="cc7"/></p>
                    <p className="warning-inputs-scan left"><ErrorMessage name="cc8"/></p>
                    <p className="warning-inputs-scan left"><ErrorMessage name="cc9"/></p>
                    <p className="warning-inputs-scan left"><ErrorMessage name="cc10"/></p>
                    <p className="warning-inputs-scan left"><ErrorMessage name="cc11"/></p>
                    <p className="warning-inputs-scan left"><ErrorMessage name="cc12"/></p>
                    <p className="warning-inputs-scan left"><ErrorMessage name="cc13"/></p>
                    <p className="warning-inputs-scan left"><ErrorMessage name="cc14"/></p>
                    <p className="warning-inputs-scan left"><ErrorMessage name="cc15"/></p>
                    <p className="warning-inputs-scan left"><ErrorMessage name="cc16"/></p>
                    <p className="warning-inputs-scan left"><ErrorMessage name="cc17"/></p>
                    <p className="warning-inputs-scan left"><ErrorMessage name="cc18"/></p>
                    <p className="warning-inputs-scan left"><ErrorMessage name="cc19"/></p>
                    <p className="warning-inputs-scan left"><ErrorMessage name="cc20"/></p>
            </div>

          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l1">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">LARGO</p>
              </div>
              </div>
              <div className="col l1 ">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue input-field-fine-tunning">
                <Field name="largo" disabled={!ensayo} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>

              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                  <p className="text-production-register">{FT1?.caracteristicasCuantitativas?.largo?.resultado? FT1.caracteristicasCuantitativas.largo.resultado: null}</p> 
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT2?.caracteristicasCuantitativas?.largo?.resultado? FT2.caracteristicasCuantitativas.largo.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT3?.caracteristicasCuantitativas?.largo?.resultado? FT3.caracteristicasCuantitativas.largo.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT4?.caracteristicasCuantitativas?.largo?.resultado? FT4.caracteristicasCuantitativas.largo.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT5?.caracteristicasCuantitativas?.largo?.resultado? FT5.caracteristicasCuantitativas.largo.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT6?.caracteristicasCuantitativas?.largo?.resultado? FT6.caracteristicasCuantitativas.largo.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT7?.caracteristicasCuantitativas?.largo?.resultado? FT7.caracteristicasCuantitativas.largo.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT8?.caracteristicasCuantitativas?.largo?.resultado? FT8.caracteristicasCuantitativas.largo.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT9?.caracteristicasCuantitativas?.largo?.resultado? FT9.caracteristicasCuantitativas.largo.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT10?.caracteristicasCuantitativas?.largo?.resultado? FT10.caracteristicasCuantitativas.largo.resultado: null}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l1">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">ANCHO</p>
              </div>
              </div>
              <div className="col l1 ">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue input-field-fine-tunning">
                <Field name="ancho" disabled={!ensayo} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT1?.caracteristicasCuantitativas?.ancho?.resultado? FT1.caracteristicasCuantitativas.ancho.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT2?.caracteristicasCuantitativas?.ancho?.resultado? FT2.caracteristicasCuantitativas.ancho.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT3?.caracteristicasCuantitativas?.ancho?.resultado? FT3.caracteristicasCuantitativas.ancho.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT4?.caracteristicasCuantitativas?.ancho?.resultado? FT4.caracteristicasCuantitativas.ancho.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT5?.caracteristicasCuantitativas?.ancho?.resultado? FT5.caracteristicasCuantitativas.ancho.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT6?.caracteristicasCuantitativas?.ancho?.resultado? FT6.caracteristicasCuantitativas.ancho.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT7?.caracteristicasCuantitativas?.ancho?.resultado? FT7.caracteristicasCuantitativas.ancho.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT8?.caracteristicasCuantitativas?.ancho?.resultado? FT8.caracteristicasCuantitativas.ancho.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT9?.caracteristicasCuantitativas?.ancho?.resultado? FT9.caracteristicasCuantitativas.ancho.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT10?.caracteristicasCuantitativas?.ancho?.resultado? FT10.caracteristicasCuantitativas.ancho.resultado: null}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l1">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">Ø INT.</p>
              </div>
              </div>
              <div className="col l1 ">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue input-field-fine-tunning">
                <Field name="diametroInt" disabled={!ensayo} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT1?.caracteristicasCuantitativas?.diametroInt?.resultado? FT1.caracteristicasCuantitativas.diametroInt.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT2?.caracteristicasCuantitativas?.diametroInt?.resultado? FT2.caracteristicasCuantitativas.diametroInt.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT3?.caracteristicasCuantitativas?.diametroInt?.resultado? FT3.caracteristicasCuantitativas.diametroInt.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT4?.caracteristicasCuantitativas?.diametroInt?.resultado? FT4.caracteristicasCuantitativas.diametroInt.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT5?.caracteristicasCuantitativas?.diametroInt?.resultado? FT5.caracteristicasCuantitativas.diametroInt.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT6?.caracteristicasCuantitativas?.diametroInt?.resultado? FT6.caracteristicasCuantitativas.diametroInt.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT7?.caracteristicasCuantitativas?.diametroInt?.resultado? FT7.caracteristicasCuantitativas.diametroInt.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT8?.caracteristicasCuantitativas?.diametroInt?.resultado? FT8.caracteristicasCuantitativas.diametroInt.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT9?.caracteristicasCuantitativas?.diametroInt?.resultado? FT9.caracteristicasCuantitativas.diametroInt.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT10?.caracteristicasCuantitativas?.diametroInt?.resultado? FT10.caracteristicasCuantitativas.diametroInt.resultado: null}</p>
                </div>
              </div>
            </div>
          </div>

   {/* ADICIONALES */}

{edicionPuestaAPunto.caracteristicasCuantitativas.cc1.label?
          <div className="row row-fix">
          <div className="col l12 center-align no-margin">
              <div className="col s1 m1 l1">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">{edicionPuestaAPunto.caracteristicasCuantitativas.cc1.label}</p>
              </div>
              </div>
              <div className="col l1 ">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue input-field-fine-tunning">
                <Field name="cc1" disabled={!ensayo} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT1?.caracteristicasCuantitativas?.cc1?.resultado? FT1.caracteristicasCuantitativas.cc1.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT2?.caracteristicasCuantitativas?.cc1?.resultado? FT2.caracteristicasCuantitativas.cc1.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT3?.caracteristicasCuantitativas?.cc1?.resultado? FT3.caracteristicasCuantitativas.cc1.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT4?.caracteristicasCuantitativas?.cc1?.resultado? FT4.caracteristicasCuantitativas.cc1.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT5?.caracteristicasCuantitativas?.cc1?.resultado? FT5.caracteristicasCuantitativas.cc1.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT6?.caracteristicasCuantitativas?.cc1?.resultado? FT6.caracteristicasCuantitativas.cc1.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT7?.caracteristicasCuantitativas?.cc1?.resultado? FT7.caracteristicasCuantitativas.cc1.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT8?.caracteristicasCuantitativas?.cc1?.resultado? FT8.caracteristicasCuantitativas.cc1.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT9?.caracteristicasCuantitativas?.cc1?.resultado? FT9.caracteristicasCuantitativas.cc1.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT10?.caracteristicasCuantitativas?.cc1?.resultado? FT10.caracteristicasCuantitativas.cc1.resultado: null}</p>
                </div>
              </div>
            </div>
          </div>
          :null}

{edicionPuestaAPunto.caracteristicasCuantitativas.cc2.label?
          <div className="row row-fix">
          <div className="col l12 center-align no-margin">
              <div className="col s1 m1 l1">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">{edicionPuestaAPunto.caracteristicasCuantitativas.cc2.label}</p>
              </div>
              </div>
              <div className="col l1 ">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue input-field-fine-tunning">
                <Field name="cc2" disabled={!ensayo} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT1?.caracteristicasCuantitativas?.cc2?.resultado? FT1.caracteristicasCuantitativas.cc2.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT2?.caracteristicasCuantitativas?.cc2?.resultado? FT2.caracteristicasCuantitativas.cc2.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT3?.caracteristicasCuantitativas?.cc2?.resultado? FT3.caracteristicasCuantitativas.cc2.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT4?.caracteristicasCuantitativas?.cc2?.resultado? FT4.caracteristicasCuantitativas.cc2.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT5?.caracteristicasCuantitativas?.cc2?.resultado? FT5.caracteristicasCuantitativas.cc2.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT6?.caracteristicasCuantitativas?.cc2?.resultado? FT6.caracteristicasCuantitativas.cc2.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT7?.caracteristicasCuantitativas?.cc2?.resultado? FT7.caracteristicasCuantitativas.cc2.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT8?.caracteristicasCuantitativas?.cc2?.resultado? FT8.caracteristicasCuantitativas.cc2.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT9?.caracteristicasCuantitativas?.cc2?.resultado? FT9.caracteristicasCuantitativas.cc2.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT10?.caracteristicasCuantitativas?.cc2?.resultado? FT10.caracteristicasCuantitativas.cc2.resultado: null}</p>
                </div>
              </div>
            </div>
          </div>
          :null}

{edicionPuestaAPunto.caracteristicasCuantitativas.cc3.label?
          <div className="row row-fix">
          <div className="col l12 center-align no-margin">
              <div className="col s1 m1 l1">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">{edicionPuestaAPunto.caracteristicasCuantitativas.cc3.label}</p>
              </div>
              </div>
              <div className="col l1 ">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue input-field-fine-tunning">
                <Field name="cc3" disabled={!ensayo} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT1?.caracteristicasCuantitativas?.cc3?.resultado? FT1.caracteristicasCuantitativas.cc3.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT2?.caracteristicasCuantitativas?.cc3?.resultado? FT2.caracteristicasCuantitativas.cc3.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT3?.caracteristicasCuantitativas?.cc3?.resultado? FT3.caracteristicasCuantitativas.cc3.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT4?.caracteristicasCuantitativas?.cc3?.resultado? FT4.caracteristicasCuantitativas.cc3.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT5?.caracteristicasCuantitativas?.cc3?.resultado? FT5.caracteristicasCuantitativas.cc3.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT6?.caracteristicasCuantitativas?.cc3?.resultado? FT6.caracteristicasCuantitativas.cc3.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT7?.caracteristicasCuantitativas?.cc3?.resultado? FT7.caracteristicasCuantitativas.cc3.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT8?.caracteristicasCuantitativas?.cc3?.resultado? FT8.caracteristicasCuantitativas.cc3.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT9?.caracteristicasCuantitativas?.cc3?.resultado? FT9.caracteristicasCuantitativas.cc3.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT10?.caracteristicasCuantitativas?.cc3?.resultado? FT10.caracteristicasCuantitativas.cc3.resultado: null}</p>
                </div>
              </div>
            </div>
          </div>
          :null}

{edicionPuestaAPunto.caracteristicasCuantitativas.cc4.label?
          <div className="row row-fix">
          <div className="col l12 center-align no-margin">
              <div className="col s1 m1 l1">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">{edicionPuestaAPunto.caracteristicasCuantitativas.cc4.label}</p>
              </div>
              </div>
              <div className="col l1 ">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue input-field-fine-tunning">
                <Field name="cc4" disabled={!ensayo} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT1?.caracteristicasCuantitativas?.cc4?.resultado? FT1.caracteristicasCuantitativas.cc4.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT2?.caracteristicasCuantitativas?.cc4?.resultado? FT2.caracteristicasCuantitativas.cc4.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT3?.caracteristicasCuantitativas?.cc4?.resultado? FT3.caracteristicasCuantitativas.cc4.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT4?.caracteristicasCuantitativas?.cc4?.resultado? FT4.caracteristicasCuantitativas.cc4.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT5?.caracteristicasCuantitativas?.cc4?.resultado? FT5.caracteristicasCuantitativas.cc4.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT6?.caracteristicasCuantitativas?.cc4?.resultado? FT6.caracteristicasCuantitativas.cc4.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT7?.caracteristicasCuantitativas?.cc4?.resultado? FT7.caracteristicasCuantitativas.cc4.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT8?.caracteristicasCuantitativas?.cc4?.resultado? FT8.caracteristicasCuantitativas.cc4.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT9?.caracteristicasCuantitativas?.cc4?.resultado? FT9.caracteristicasCuantitativas.cc4.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT10?.caracteristicasCuantitativas?.cc4?.resultado? FT10.caracteristicasCuantitativas.cc4.resultado: null}</p>
                </div>
              </div>
            </div>
          </div>
          :null}

{edicionPuestaAPunto.caracteristicasCuantitativas.cc5.label?
          <div className="row row-fix">
          <div className="col l12 center-align no-margin">
              <div className="col s1 m1 l1">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">{edicionPuestaAPunto.caracteristicasCuantitativas.cc5.label}</p>
              </div>
              </div>
              <div className="col l1 ">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue input-field-fine-tunning">
                <Field name="cc5" disabled={!ensayo} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT1?.caracteristicasCuantitativas?.cc5?.resultado? FT1.caracteristicasCuantitativas.cc5.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT2?.caracteristicasCuantitativas?.cc5?.resultado? FT2.caracteristicasCuantitativas.cc5.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT3?.caracteristicasCuantitativas?.cc5?.resultado? FT3.caracteristicasCuantitativas.cc5.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT4?.caracteristicasCuantitativas?.cc5?.resultado? FT4.caracteristicasCuantitativas.cc5.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT5?.caracteristicasCuantitativas?.cc5?.resultado? FT5.caracteristicasCuantitativas.cc5.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT6?.caracteristicasCuantitativas?.cc5?.resultado? FT6.caracteristicasCuantitativas.cc5.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT7?.caracteristicasCuantitativas?.cc5?.resultado? FT7.caracteristicasCuantitativas.cc5.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT8?.caracteristicasCuantitativas?.cc5?.resultado? FT8.caracteristicasCuantitativas.cc5.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT9?.caracteristicasCuantitativas?.cc5?.resultado? FT9.caracteristicasCuantitativas.cc5.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT10?.caracteristicasCuantitativas?.cc5?.resultado? FT10.caracteristicasCuantitativas.cc5.resultado: null}</p>
                </div>
              </div>
            </div>
          </div>
          :null}

{edicionPuestaAPunto.caracteristicasCuantitativas.cc6.label?
          <div className="row row-fix">
          <div className="col l12 center-align no-margin">
              <div className="col s1 m1 l1">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">{edicionPuestaAPunto.caracteristicasCuantitativas.cc6.label}</p>
              </div>
              </div>
              <div className="col l1 ">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue input-field-fine-tunning">
                <Field name="cc6" disabled={!ensayo} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT1?.caracteristicasCuantitativas?.cc6?.resultado? FT1.caracteristicasCuantitativas.cc6.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT2?.caracteristicasCuantitativas?.cc6?.resultado? FT2.caracteristicasCuantitativas.cc6.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT3?.caracteristicasCuantitativas?.cc6?.resultado? FT3.caracteristicasCuantitativas.cc6.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT4?.caracteristicasCuantitativas?.cc6?.resultado? FT4.caracteristicasCuantitativas.cc6.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT5?.caracteristicasCuantitativas?.cc6?.resultado? FT5.caracteristicasCuantitativas.cc6.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT6?.caracteristicasCuantitativas?.cc6?.resultado? FT6.caracteristicasCuantitativas.cc6.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT7?.caracteristicasCuantitativas?.cc6?.resultado? FT7.caracteristicasCuantitativas.cc6.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT8?.caracteristicasCuantitativas?.cc6?.resultado? FT8.caracteristicasCuantitativas.cc6.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT9?.caracteristicasCuantitativas?.cc6?.resultado? FT9.caracteristicasCuantitativas.cc6.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT10?.caracteristicasCuantitativas?.cc6?.resultado? FT10.caracteristicasCuantitativas.cc6.resultado: null}</p>
                </div>
              </div>
            </div>
          </div>
          :null}

{edicionPuestaAPunto.caracteristicasCuantitativas.cc7.label?
          <div className="row row-fix">
          <div className="col l12 center-align no-margin">
              <div className="col s1 m1 l1">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">{edicionPuestaAPunto.caracteristicasCuantitativas.cc7.label}</p>
              </div>
              </div>
              <div className="col l1 ">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue input-field-fine-tunning">
                <Field name="cc7" disabled={!ensayo} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT1?.caracteristicasCuantitativas?.cc7?.resultado? FT1.caracteristicasCuantitativas.cc7.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT2?.caracteristicasCuantitativas?.cc7?.resultado? FT2.caracteristicasCuantitativas.cc7.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT3?.caracteristicasCuantitativas?.cc7?.resultado? FT3.caracteristicasCuantitativas.cc7.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT4?.caracteristicasCuantitativas?.cc7?.resultado? FT4.caracteristicasCuantitativas.cc7.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT5?.caracteristicasCuantitativas?.cc7?.resultado? FT5.caracteristicasCuantitativas.cc7.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT6?.caracteristicasCuantitativas?.cc7?.resultado? FT6.caracteristicasCuantitativas.cc7.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT7?.caracteristicasCuantitativas?.cc7?.resultado? FT7.caracteristicasCuantitativas.cc7.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT8?.caracteristicasCuantitativas?.cc7?.resultado? FT8.caracteristicasCuantitativas.cc7.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT9?.caracteristicasCuantitativas?.cc7?.resultado? FT9.caracteristicasCuantitativas.cc7.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT10?.caracteristicasCuantitativas?.cc7?.resultado? FT10.caracteristicasCuantitativas.cc7.resultado: null}</p>
                </div>
              </div>
            </div>
          </div>
          :null}

{edicionPuestaAPunto.caracteristicasCuantitativas.cc8.label?
          <div className="row row-fix">
          <div className="col l12 center-align no-margin">
              <div className="col s1 m1 l1">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">{edicionPuestaAPunto.caracteristicasCuantitativas.cc8.label}</p>
              </div>
              </div>
              <div className="col l1 ">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue input-field-fine-tunning">
                <Field name="cc8" disabled={!ensayo} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT1?.caracteristicasCuantitativas?.cc8?.resultado? FT1.caracteristicasCuantitativas.cc8.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT2?.caracteristicasCuantitativas?.cc8?.resultado? FT2.caracteristicasCuantitativas.cc8.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT3?.caracteristicasCuantitativas?.cc8?.resultado? FT3.caracteristicasCuantitativas.cc8.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT4?.caracteristicasCuantitativas?.cc8?.resultado? FT4.caracteristicasCuantitativas.cc8.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT5?.caracteristicasCuantitativas?.cc8?.resultado? FT5.caracteristicasCuantitativas.cc8.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT6?.caracteristicasCuantitativas?.cc8?.resultado? FT6.caracteristicasCuantitativas.cc8.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT7?.caracteristicasCuantitativas?.cc8?.resultado? FT7.caracteristicasCuantitativas.cc8.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT8?.caracteristicasCuantitativas?.cc8?.resultado? FT8.caracteristicasCuantitativas.cc8.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT9?.caracteristicasCuantitativas?.cc8?.resultado? FT9.caracteristicasCuantitativas.cc8.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT10?.caracteristicasCuantitativas?.cc8?.resultado? FT10.caracteristicasCuantitativas.cc8.resultado: null}</p>
                </div>
              </div>
            </div>
          </div>
          :null}

{edicionPuestaAPunto.caracteristicasCuantitativas.cc9.label?
          <div className="row row-fix">
          <div className="col l12 center-align no-margin">
              <div className="col s1 m1 l1">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">{edicionPuestaAPunto.caracteristicasCuantitativas.cc9.label}</p>
              </div>
              </div>
              <div className="col l1 ">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue input-field-fine-tunning">
                <Field name="cc9" disabled={!ensayo} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT1?.caracteristicasCuantitativas?.cc9?.resultado? FT1.caracteristicasCuantitativas.cc9.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT2?.caracteristicasCuantitativas?.cc9?.resultado? FT2.caracteristicasCuantitativas.cc9.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT3?.caracteristicasCuantitativas?.cc9?.resultado? FT3.caracteristicasCuantitativas.cc9.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT4?.caracteristicasCuantitativas?.cc9?.resultado? FT4.caracteristicasCuantitativas.cc9.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT5?.caracteristicasCuantitativas?.cc9?.resultado? FT5.caracteristicasCuantitativas.cc9.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT6?.caracteristicasCuantitativas?.cc9?.resultado? FT6.caracteristicasCuantitativas.cc9.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT7?.caracteristicasCuantitativas?.cc9?.resultado? FT7.caracteristicasCuantitativas.cc9.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT8?.caracteristicasCuantitativas?.cc9?.resultado? FT8.caracteristicasCuantitativas.cc9.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT9?.caracteristicasCuantitativas?.cc9?.resultado? FT9.caracteristicasCuantitativas.cc9.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT10?.caracteristicasCuantitativas?.cc9?.resultado? FT10.caracteristicasCuantitativas.cc9.resultado: null}</p>
                </div>
              </div>
            </div>
          </div>
          :null}

{edicionPuestaAPunto.caracteristicasCuantitativas.cc10.label?
          <div className="row row-fix">
          <div className="col l12 center-align no-margin">
              <div className="col s1 m1 l1">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">{edicionPuestaAPunto.caracteristicasCuantitativas.cc10.label}</p>
              </div>
              </div>
              <div className="col l1 ">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue input-field-fine-tunning">
                <Field name="cc10" disabled={!ensayo} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT1?.caracteristicasCuantitativas?.cc10?.resultado? FT1.caracteristicasCuantitativas.cc10.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT2?.caracteristicasCuantitativas?.cc10?.resultado? FT2.caracteristicasCuantitativas.cc10.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT3?.caracteristicasCuantitativas?.cc10?.resultado? FT3.caracteristicasCuantitativas.cc10.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT4?.caracteristicasCuantitativas?.cc10?.resultado? FT4.caracteristicasCuantitativas.cc10.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT5?.caracteristicasCuantitativas?.cc10?.resultado? FT5.caracteristicasCuantitativas.cc10.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT6?.caracteristicasCuantitativas?.cc10?.resultado? FT6.caracteristicasCuantitativas.cc10.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT7?.caracteristicasCuantitativas?.cc10?.resultado? FT7.caracteristicasCuantitativas.cc10.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT8?.caracteristicasCuantitativas?.cc10?.resultado? FT8.caracteristicasCuantitativas.cc10.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT9?.caracteristicasCuantitativas?.cc10?.resultado? FT9.caracteristicasCuantitativas.cc10.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT10?.caracteristicasCuantitativas?.cc10?.resultado? FT10.caracteristicasCuantitativas.cc10.resultado: null}</p>
                </div>
              </div>
            </div>
          </div>
          :null}

{edicionPuestaAPunto.caracteristicasCuantitativas.cc11.label?
          <div className="row row-fix">
          <div className="col l12 center-align no-margin">
              <div className="col s1 m1 l1">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">{edicionPuestaAPunto.caracteristicasCuantitativas.cc11.label}</p>
              </div>
              </div>
              <div className="col l1 ">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue input-field-fine-tunning">
                <Field name="cc11" disabled={!ensayo} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT1?.caracteristicasCuantitativas?.cc11?.resultado? FT1.caracteristicasCuantitativas.cc11.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT2?.caracteristicasCuantitativas?.cc11?.resultado? FT2.caracteristicasCuantitativas.cc11.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT3?.caracteristicasCuantitativas?.cc11?.resultado? FT3.caracteristicasCuantitativas.cc11.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT4?.caracteristicasCuantitativas?.cc11?.resultado? FT4.caracteristicasCuantitativas.cc11.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT5?.caracteristicasCuantitativas?.cc11?.resultado? FT5.caracteristicasCuantitativas.cc11.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT6?.caracteristicasCuantitativas?.cc11?.resultado? FT6.caracteristicasCuantitativas.cc11.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT7?.caracteristicasCuantitativas?.cc11?.resultado? FT7.caracteristicasCuantitativas.cc11.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT8?.caracteristicasCuantitativas?.cc11?.resultado? FT8.caracteristicasCuantitativas.cc11.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT9?.caracteristicasCuantitativas?.cc11?.resultado? FT9.caracteristicasCuantitativas.cc11.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT10?.caracteristicasCuantitativas?.cc11?.resultado? FT10.caracteristicasCuantitativas.cc11.resultado: null}</p>
                </div>
              </div>
            </div>
          </div>
          :null}

{edicionPuestaAPunto.caracteristicasCuantitativas.cc12.label?
          <div className="row row-fix">
          <div className="col l12 center-align no-margin">
              <div className="col s1 m1 l1">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">{edicionPuestaAPunto.caracteristicasCuantitativas.cc12.label}</p>
              </div>
              </div>
              <div className="col l1 ">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue input-field-fine-tunning">
                <Field name="cc12" disabled={!ensayo} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT1?.caracteristicasCuantitativas?.cc12?.resultado? FT1.caracteristicasCuantitativas.cc12.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT2?.caracteristicasCuantitativas?.cc12?.resultado? FT2.caracteristicasCuantitativas.cc12.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT3?.caracteristicasCuantitativas?.cc12?.resultado? FT3.caracteristicasCuantitativas.cc12.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT4?.caracteristicasCuantitativas?.cc12?.resultado? FT4.caracteristicasCuantitativas.cc12.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT5?.caracteristicasCuantitativas?.cc12?.resultado? FT5.caracteristicasCuantitativas.cc12.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT6?.caracteristicasCuantitativas?.cc12?.resultado? FT6.caracteristicasCuantitativas.cc12.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT7?.caracteristicasCuantitativas?.cc12?.resultado? FT7.caracteristicasCuantitativas.cc12.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT8?.caracteristicasCuantitativas?.cc12?.resultado? FT8.caracteristicasCuantitativas.cc12.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT9?.caracteristicasCuantitativas?.cc12?.resultado? FT9.caracteristicasCuantitativas.cc12.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT10?.caracteristicasCuantitativas?.cc12?.resultado? FT10.caracteristicasCuantitativas.cc12.resultado: null}</p>
                </div>
              </div>
            </div>
          </div>
          :null}

{edicionPuestaAPunto.caracteristicasCuantitativas.cc13.label?
          <div className="row row-fix">
          <div className="col l12 center-align no-margin">
              <div className="col s1 m1 l1">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">{edicionPuestaAPunto.caracteristicasCuantitativas.cc13.label}</p>
              </div>
              </div>
              <div className="col l1 ">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue input-field-fine-tunning">
                <Field name="cc13" disabled={!ensayo} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT1?.caracteristicasCuantitativas?.cc13?.resultado? FT1.caracteristicasCuantitativas.cc13.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT2?.caracteristicasCuantitativas?.cc13?.resultado? FT2.caracteristicasCuantitativas.cc13.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT3?.caracteristicasCuantitativas?.cc13?.resultado? FT3.caracteristicasCuantitativas.cc13.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT4?.caracteristicasCuantitativas?.cc13?.resultado? FT4.caracteristicasCuantitativas.cc13.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT5?.caracteristicasCuantitativas?.cc13?.resultado? FT5.caracteristicasCuantitativas.cc13.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT6?.caracteristicasCuantitativas?.cc13?.resultado? FT6.caracteristicasCuantitativas.cc13.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT7?.caracteristicasCuantitativas?.cc13?.resultado? FT7.caracteristicasCuantitativas.cc13.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT8?.caracteristicasCuantitativas?.cc13?.resultado? FT8.caracteristicasCuantitativas.cc13.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT9?.caracteristicasCuantitativas?.cc13?.resultado? FT9.caracteristicasCuantitativas.cc13.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT10?.caracteristicasCuantitativas?.cc13?.resultado? FT10.caracteristicasCuantitativas.cc13.resultado: null}</p>
                </div>
              </div>
            </div>
          </div>
          :null}

{edicionPuestaAPunto.caracteristicasCuantitativas.cc14.label?
          <div className="row row-fix">
          <div className="col l12 center-align no-margin">
              <div className="col s1 m1 l1">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">{edicionPuestaAPunto.caracteristicasCuantitativas.cc14.label}</p>
              </div>
              </div>
              <div className="col l1 ">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue input-field-fine-tunning">
                <Field name="cc14" disabled={!ensayo} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT1?.caracteristicasCuantitativas?.cc14?.resultado? FT1.caracteristicasCuantitativas.cc14.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT2?.caracteristicasCuantitativas?.cc14?.resultado? FT2.caracteristicasCuantitativas.cc14.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT3?.caracteristicasCuantitativas?.cc14?.resultado? FT3.caracteristicasCuantitativas.cc14.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT4?.caracteristicasCuantitativas?.cc14?.resultado? FT4.caracteristicasCuantitativas.cc14.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT5?.caracteristicasCuantitativas?.cc14?.resultado? FT5.caracteristicasCuantitativas.cc14.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT6?.caracteristicasCuantitativas?.cc14?.resultado? FT6.caracteristicasCuantitativas.cc14.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT7?.caracteristicasCuantitativas?.cc14?.resultado? FT7.caracteristicasCuantitativas.cc14.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT8?.caracteristicasCuantitativas?.cc14?.resultado? FT8.caracteristicasCuantitativas.cc14.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT9?.caracteristicasCuantitativas?.cc14?.resultado? FT9.caracteristicasCuantitativas.cc14.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT10?.caracteristicasCuantitativas?.cc14?.resultado? FT10.caracteristicasCuantitativas.cc14.resultado: null}</p>
                </div>
              </div>
            </div>
          </div>
          :null}

{edicionPuestaAPunto.caracteristicasCuantitativas.cc15.label?
          <div className="row row-fix">
          <div className="col l12 center-align no-margin">
              <div className="col s1 m1 l1">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">{edicionPuestaAPunto.caracteristicasCuantitativas.cc15.label}</p>
              </div>
              </div>
              <div className="col l1 ">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue input-field-fine-tunning">
                <Field name="cc15" disabled={!ensayo} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT1?.caracteristicasCuantitativas?.cc15?.resultado? FT1.caracteristicasCuantitativas.cc15.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT2?.caracteristicasCuantitativas?.cc15?.resultado? FT2.caracteristicasCuantitativas.cc15.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT3?.caracteristicasCuantitativas?.cc15?.resultado? FT3.caracteristicasCuantitativas.cc15.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT4?.caracteristicasCuantitativas?.cc15?.resultado? FT4.caracteristicasCuantitativas.cc15.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT5?.caracteristicasCuantitativas?.cc15?.resultado? FT5.caracteristicasCuantitativas.cc15.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT6?.caracteristicasCuantitativas?.cc15?.resultado? FT6.caracteristicasCuantitativas.cc15.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT7?.caracteristicasCuantitativas?.cc15?.resultado? FT7.caracteristicasCuantitativas.cc15.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT8?.caracteristicasCuantitativas?.cc15?.resultado? FT8.caracteristicasCuantitativas.cc15.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT9?.caracteristicasCuantitativas?.cc15?.resultado? FT9.caracteristicasCuantitativas.cc15.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT10?.caracteristicasCuantitativas?.cc15?.resultado? FT10.caracteristicasCuantitativas.cc15.resultado: null}</p>
                </div>
              </div>
            </div>
          </div>
          :null}

{edicionPuestaAPunto.caracteristicasCuantitativas.cc16.label?
          <div className="row row-fix">
          <div className="col l12 center-align no-margin">
              <div className="col s1 m1 l1">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">{edicionPuestaAPunto.caracteristicasCuantitativas.cc16.label}</p>
              </div>
              </div>
              <div className="col l1 ">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue input-field-fine-tunning">
                <Field name="cc16" disabled={!ensayo} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT1?.caracteristicasCuantitativas?.cc16?.resultado? FT1.caracteristicasCuantitativas.cc16.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT2?.caracteristicasCuantitativas?.cc16?.resultado? FT2.caracteristicasCuantitativas.cc16.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT3?.caracteristicasCuantitativas?.cc16?.resultado? FT3.caracteristicasCuantitativas.cc16.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT4?.caracteristicasCuantitativas?.cc16?.resultado? FT4.caracteristicasCuantitativas.cc16.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT5?.caracteristicasCuantitativas?.cc16?.resultado? FT5.caracteristicasCuantitativas.cc16.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT6?.caracteristicasCuantitativas?.cc16?.resultado? FT6.caracteristicasCuantitativas.cc16.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT7?.caracteristicasCuantitativas?.cc16?.resultado? FT7.caracteristicasCuantitativas.cc16.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT8?.caracteristicasCuantitativas?.cc16?.resultado? FT8.caracteristicasCuantitativas.cc16.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT9?.caracteristicasCuantitativas?.cc16?.resultado? FT9.caracteristicasCuantitativas.cc16.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT10?.caracteristicasCuantitativas?.cc16?.resultado? FT10.caracteristicasCuantitativas.cc16.resultado: null}</p>
                </div>
              </div>
            </div>
          </div>
          :null}

{edicionPuestaAPunto.caracteristicasCuantitativas.cc17.label?
          <div className="row row-fix">
          <div className="col l12 center-align no-margin">
              <div className="col s1 m1 l1">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">{edicionPuestaAPunto.caracteristicasCuantitativas.cc17.label}</p>
              </div>
              </div>
              <div className="col l1 ">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue input-field-fine-tunning">
                <Field name="cc17" disabled={!ensayo} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT1?.caracteristicasCuantitativas?.cc17?.resultado? FT1.caracteristicasCuantitativas.cc17.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT2?.caracteristicasCuantitativas?.cc17?.resultado? FT2.caracteristicasCuantitativas.cc17.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT3?.caracteristicasCuantitativas?.cc17?.resultado? FT3.caracteristicasCuantitativas.cc17.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT4?.caracteristicasCuantitativas?.cc17?.resultado? FT4.caracteristicasCuantitativas.cc17.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT5?.caracteristicasCuantitativas?.cc17?.resultado? FT5.caracteristicasCuantitativas.cc17.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT6?.caracteristicasCuantitativas?.cc17?.resultado? FT6.caracteristicasCuantitativas.cc17.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT7?.caracteristicasCuantitativas?.cc17?.resultado? FT7.caracteristicasCuantitativas.cc17.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT8?.caracteristicasCuantitativas?.cc17?.resultado? FT8.caracteristicasCuantitativas.cc17.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT9?.caracteristicasCuantitativas?.cc17?.resultado? FT9.caracteristicasCuantitativas.cc17.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT10?.caracteristicasCuantitativas?.cc17?.resultado? FT10.caracteristicasCuantitativas.cc17.resultado: null}</p>
                </div>
              </div>
            </div>
          </div>
          :null}

{edicionPuestaAPunto.caracteristicasCuantitativas.cc18.label?
          <div className="row row-fix">
          <div className="col l12 center-align no-margin">
              <div className="col s1 m1 l1">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">{edicionPuestaAPunto.caracteristicasCuantitativas.cc18.label}</p>
              </div>
              </div>
              <div className="col l1 ">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue input-field-fine-tunning">
                <Field name="cc18" disabled={!ensayo} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT1?.caracteristicasCuantitativas?.cc18?.resultado? FT1.caracteristicasCuantitativas.cc18.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT2?.caracteristicasCuantitativas?.cc18?.resultado? FT2.caracteristicasCuantitativas.cc18.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT3?.caracteristicasCuantitativas?.cc18?.resultado? FT3.caracteristicasCuantitativas.cc18.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT4?.caracteristicasCuantitativas?.cc18?.resultado? FT4.caracteristicasCuantitativas.cc18.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT5?.caracteristicasCuantitativas?.cc18?.resultado? FT5.caracteristicasCuantitativas.cc18.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT6?.caracteristicasCuantitativas?.cc18?.resultado? FT6.caracteristicasCuantitativas.cc18.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT7?.caracteristicasCuantitativas?.cc18?.resultado? FT7.caracteristicasCuantitativas.cc18.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT8?.caracteristicasCuantitativas?.cc18?.resultado? FT8.caracteristicasCuantitativas.cc18.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT9?.caracteristicasCuantitativas?.cc18?.resultado? FT9.caracteristicasCuantitativas.cc18.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT10?.caracteristicasCuantitativas?.cc18?.resultado? FT10.caracteristicasCuantitativas.cc18.resultado: null}</p>
                </div>
              </div>
            </div>
          </div>
          :null}

{edicionPuestaAPunto.caracteristicasCuantitativas.cc19.label?
          <div className="row row-fix">
          <div className="col l12 center-align no-margin">
              <div className="col s1 m1 l1">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">{edicionPuestaAPunto.caracteristicasCuantitativas.cc19.label}</p>
              </div>
              </div>
              <div className="col l1 ">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue input-field-fine-tunning">
                <Field name="cc19" disabled={!ensayo} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT1?.caracteristicasCuantitativas?.cc19?.resultado? FT1.caracteristicasCuantitativas.cc19.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT2?.caracteristicasCuantitativas?.cc19?.resultado? FT2.caracteristicasCuantitativas.cc19.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT3?.caracteristicasCuantitativas?.cc19?.resultado? FT3.caracteristicasCuantitativas.cc19.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT4?.caracteristicasCuantitativas?.cc19?.resultado? FT4.caracteristicasCuantitativas.cc19.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT5?.caracteristicasCuantitativas?.cc19?.resultado? FT5.caracteristicasCuantitativas.cc19.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT6?.caracteristicasCuantitativas?.cc19?.resultado? FT6.caracteristicasCuantitativas.cc19.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT7?.caracteristicasCuantitativas?.cc19?.resultado? FT7.caracteristicasCuantitativas.cc19.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT8?.caracteristicasCuantitativas?.cc19?.resultado? FT8.caracteristicasCuantitativas.cc19.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT9?.caracteristicasCuantitativas?.cc19?.resultado? FT9.caracteristicasCuantitativas.cc19.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT10?.caracteristicasCuantitativas?.cc19?.resultado? FT10.caracteristicasCuantitativas.cc19.resultado: null}</p>
                </div>
              </div>
            </div>
          </div>
          :null}

{edicionPuestaAPunto.caracteristicasCuantitativas.cc20.label?
          <div className="row row-fix">
          <div className="col l12 center-align no-margin">
              <div className="col s1 m1 l1">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">{edicionPuestaAPunto.caracteristicasCuantitativas.cc20.label}</p>
              </div>
              </div>
              <div className="col l1 ">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue input-field-fine-tunning">
                <Field name="cc20" disabled={!ensayo} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT1?.caracteristicasCuantitativas?.cc20?.resultado? FT1.caracteristicasCuantitativas.cc20.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT2?.caracteristicasCuantitativas?.cc20?.resultado? FT2.caracteristicasCuantitativas.cc20.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT3?.caracteristicasCuantitativas?.cc20?.resultado? FT3.caracteristicasCuantitativas.cc20.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT4?.caracteristicasCuantitativas?.cc20?.resultado? FT4.caracteristicasCuantitativas.cc20.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT5?.caracteristicasCuantitativas?.cc20?.resultado? FT5.caracteristicasCuantitativas.cc20.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT6?.caracteristicasCuantitativas?.cc20?.resultado? FT6.caracteristicasCuantitativas.cc20.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT7?.caracteristicasCuantitativas?.cc20?.resultado? FT7.caracteristicasCuantitativas.cc20.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT8?.caracteristicasCuantitativas?.cc20?.resultado? FT8.caracteristicasCuantitativas.cc20.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT9?.caracteristicasCuantitativas?.cc20?.resultado? FT9.caracteristicasCuantitativas.cc20.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT10?.caracteristicasCuantitativas?.cc20?.resultado? FT10.caracteristicasCuantitativas.cc20.resultado: null}</p>
                </div>
              </div>
            </div>
          </div>
          :null}

        <div className="row"> </div>

        <div className="row row-fix ">
          <div className="col s12 m12 l12 no-margin">
              <div className="col s1 m1 l2">
                  <p className="title-production-register">ATRIBUTOS COMPLEMENTARIOS</p>
              </div>
            </div>
          </div>

          <div className="col l12">
                    <p className="warning-inputs-scan left"><ErrorMessage name="mc1"/></p>
                    <p className="warning-inputs-scan left"><ErrorMessage name="mc2"/></p>
                    <p className="warning-inputs-scan left"><ErrorMessage name="mc3"/></p>
                    <p className="warning-inputs-scan left"><ErrorMessage name="mc4"/></p>
                    <p className="warning-inputs-scan left"><ErrorMessage name="mc5"/></p>
                    <p className="warning-inputs-scan left"><ErrorMessage name="mc6"/></p>
                    <p className="warning-inputs-scan left"><ErrorMessage name="mc7"/></p>
                    <p className="warning-inputs-scan left"><ErrorMessage name="mc8"/></p>
                    <p className="warning-inputs-scan left"><ErrorMessage name="mc9"/></p>
                    <p className="warning-inputs-scan left"><ErrorMessage name="mc10"/></p>
                    <p className="warning-inputs-scan left"><ErrorMessage name="mc11"/></p>
                    <p className="warning-inputs-scan left"><ErrorMessage name="mc12"/></p>
                    <p className="warning-inputs-scan left"><ErrorMessage name="mc13"/></p>
                    <p className="warning-inputs-scan left"><ErrorMessage name="mc14"/></p>
                    <p className="warning-inputs-scan left"><ErrorMessage name="mc15"/></p>
                    <p className="warning-inputs-scan left"><ErrorMessage name="mc16"/></p>
                    <p className="warning-inputs-scan left"><ErrorMessage name="mc17"/></p>
                    <p className="warning-inputs-scan left"><ErrorMessage name="mc18"/></p>
                    <p className="warning-inputs-scan left"><ErrorMessage name="mc19"/></p>
                    <p className="warning-inputs-scan left"><ErrorMessage name="mc20"/></p>   
            </div>

          <div className="row"></div>
         
{edicionPuestaAPunto.medicionesComplementarias.MC1.label?
          <div className="row row-fix">
          <div className="col l12 center-align no-margin">
              <div className="col s1 m1 l1">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">{edicionPuestaAPunto.medicionesComplementarias.MC1.label}</p>
              </div>
              </div>
              <div className="col l1 ">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue input-field-fine-tunning">
                <Field name="mc1" disabled={!ensayo} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT1?.medicionesComplementarias?.MC1?.resultado? FT1.medicionesComplementarias.MC1.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT2?.medicionesComplementarias?.MC1?.resultado? FT2.medicionesComplementarias.MC1.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT3?.medicionesComplementarias?.MC1?.resultado? FT3.medicionesComplementarias.MC1.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT4?.medicionesComplementarias?.MC1?.resultado? FT4.medicionesComplementarias.MC1.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT5?.medicionesComplementarias?.MC1?.resultado? FT5.medicionesComplementarias.MC1.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT6?.medicionesComplementarias?.MC1?.resultado? FT6.medicionesComplementarias.MC1.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT7?.medicionesComplementarias?.MC1?.resultado? FT7.medicionesComplementarias.MC1.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT8?.medicionesComplementarias?.MC1?.resultado? FT8.medicionesComplementarias.MC1.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT9?.medicionesComplementarias?.MC1?.resultado? FT9.medicionesComplementarias.MC1.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT10?.medicionesComplementarias?.MC1?.resultado? FT10.medicionesComplementarias.MC1.resultado: null}</p>
                </div>
              </div>
            </div>
          </div>
          :null}

{edicionPuestaAPunto.medicionesComplementarias.MC2.label?
          <div className="row row-fix">
          <div className="col l12 center-align no-margin">
              <div className="col s1 m1 l1">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">{edicionPuestaAPunto.medicionesComplementarias.MC2.label}</p>
              </div>
              </div>
              <div className="col l1 ">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue input-field-fine-tunning">
                <Field name="mc2" disabled={!ensayo} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT1?.medicionesComplementarias?.MC2?.resultado? FT1.medicionesComplementarias.MC2.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT2?.medicionesComplementarias?.MC2?.resultado? FT2.medicionesComplementarias.MC2.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT3?.medicionesComplementarias?.MC2?.resultado? FT3.medicionesComplementarias.MC2.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT4?.medicionesComplementarias?.MC2?.resultado? FT4.medicionesComplementarias.MC2.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT5?.medicionesComplementarias?.MC2?.resultado? FT5.medicionesComplementarias.MC2.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT6?.medicionesComplementarias?.MC2?.resultado? FT6.medicionesComplementarias.MC1.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT7?.medicionesComplementarias?.MC2?.resultado? FT7.medicionesComplementarias.MC2.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT8?.medicionesComplementarias?.MC2?.resultado? FT8.medicionesComplementarias.MC2.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT9?.medicionesComplementarias?.MC2?.resultado? FT9.medicionesComplementarias.MC2.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT10?.medicionesComplementarias?.MC2?.resultado? FT10.medicionesComplementarias.MC2.resultado: null}</p>
                </div>
              </div>
            </div>
          </div>
          :null}

{edicionPuestaAPunto.medicionesComplementarias.MC3.label?
          <div className="row row-fix">
          <div className="col l12 center-align no-margin">
              <div className="col s1 m1 l1">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">{edicionPuestaAPunto.medicionesComplementarias.MC3.label}</p>
              </div>
              </div>
              <div className="col l1 ">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue input-field-fine-tunning">
                <Field name="mc3" disabled={!ensayo} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT1?.medicionesComplementarias?.MC3?.resultado? FT1.medicionesComplementarias.MC3.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT2?.medicionesComplementarias?.MC3?.resultado? FT2.medicionesComplementarias.MC3.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT3?.medicionesComplementarias?.MC3?.resultado? FT3.medicionesComplementarias.MC3.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT4?.medicionesComplementarias?.MC3?.resultado? FT4.medicionesComplementarias.MC3.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT5?.medicionesComplementarias?.MC3?.resultado? FT5.medicionesComplementarias.MC3.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT6?.medicionesComplementarias?.MC3?.resultado? FT6.medicionesComplementarias.MC3.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT7?.medicionesComplementarias?.MC3?.resultado? FT7.medicionesComplementarias.MC3.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT8?.medicionesComplementarias?.MC3?.resultado? FT8.medicionesComplementarias.MC3.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT9?.medicionesComplementarias?.MC3?.resultado? FT9.medicionesComplementarias.MC3.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT10?.medicionesComplementarias?.MC3?.resultado? FT10.medicionesComplementarias.MC3.resultado: null}</p>
                </div>
              </div>
            </div>
          </div>
          :null}

{edicionPuestaAPunto.medicionesComplementarias.MC4.label?
          <div className="row row-fix">
          <div className="col l12 center-align no-margin">
              <div className="col s1 m1 l1">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">{edicionPuestaAPunto.medicionesComplementarias.MC4.label}</p>
              </div>
              </div>
              <div className="col l1 ">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue input-field-fine-tunning">
                <Field name="mc4" disabled={!ensayo} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT1?.medicionesComplementarias?.MC4?.resultado? FT1.medicionesComplementarias.MC4.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT2?.medicionesComplementarias?.MC4?.resultado? FT2.medicionesComplementarias.MC4.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT3?.medicionesComplementarias?.MC4?.resultado? FT3.medicionesComplementarias.MC4.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT4?.medicionesComplementarias?.MC4?.resultado? FT4.medicionesComplementarias.MC4.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT5?.medicionesComplementarias?.MC4?.resultado? FT5.medicionesComplementarias.MC4.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT6?.medicionesComplementarias?.MC4?.resultado? FT6.medicionesComplementarias.MC4.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT7?.medicionesComplementarias?.MC4?.resultado? FT7.medicionesComplementarias.MC4.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT8?.medicionesComplementarias?.MC4?.resultado? FT8.medicionesComplementarias.MC4.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT9?.medicionesComplementarias?.MC4?.resultado? FT9.medicionesComplementarias.MC4.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT10?.medicionesComplementarias?.MC4?.resultado? FT10.medicionesComplementarias.MC4.resultado: null}</p>
                </div>
              </div>
            </div>
          </div>
          :null}

{edicionPuestaAPunto.medicionesComplementarias.MC5.label?
          <div className="row row-fix">
          <div className="col l12 center-align no-margin">
              <div className="col s1 m1 l1">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">{edicionPuestaAPunto.medicionesComplementarias.MC1.label}</p>
              </div>
              </div>
              <div className="col l1 ">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue input-field-fine-tunning">
                <Field name="mc5" disabled={!ensayo} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT1?.medicionesComplementarias?.MC5?.resultado? FT1.medicionesComplementarias.MC5.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT2?.medicionesComplementarias?.MC5?.resultado? FT2.medicionesComplementarias.MC5.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT3?.medicionesComplementarias?.MC5?.resultado? FT3.medicionesComplementarias.MC5.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT4?.medicionesComplementarias?.MC5?.resultado? FT4.medicionesComplementarias.MC5.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT5?.medicionesComplementarias?.MC5?.resultado? FT5.medicionesComplementarias.MC5.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT6?.medicionesComplementarias?.MC5?.resultado? FT6.medicionesComplementarias.MC5.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT7?.medicionesComplementarias?.MC5?.resultado? FT7.medicionesComplementarias.MC5.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT8?.medicionesComplementarias?.MC5?.resultado? FT8.medicionesComplementarias.MC5.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT9?.medicionesComplementarias?.MC5?.resultado? FT9.medicionesComplementarias.MC5.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT10?.medicionesComplementarias?.MC5?.resultado? FT10.medicionesComplementarias.MC5.resultado: null}</p>
                </div>
              </div>
            </div>
          </div>
          :null}

{edicionPuestaAPunto.medicionesComplementarias.MC6.label?
          <div className="row row-fix">
          <div className="col l12 center-align no-margin">
              <div className="col s1 m1 l1">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">{edicionPuestaAPunto.medicionesComplementarias.MC6.label}</p>
              </div>
              </div>
              <div className="col l1 ">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue input-field-fine-tunning">
                <Field name="mc6" disabled={!ensayo} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT1?.medicionesComplementarias?.MC6?.resultado? FT1.medicionesComplementarias.MC6.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT2?.medicionesComplementarias?.MC6?.resultado? FT2.medicionesComplementarias.MC6.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT3?.medicionesComplementarias?.MC6?.resultado? FT3.medicionesComplementarias.MC6.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT4?.medicionesComplementarias?.MC6?.resultado? FT4.medicionesComplementarias.MC6.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT5?.medicionesComplementarias?.MC6?.resultado? FT5.medicionesComplementarias.MC6.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT6?.medicionesComplementarias?.MC6?.resultado? FT6.medicionesComplementarias.MC6.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT7?.medicionesComplementarias?.MC6?.resultado? FT7.medicionesComplementarias.MC6.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT8?.medicionesComplementarias?.MC6?.resultado? FT8.medicionesComplementarias.MC6.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT9?.medicionesComplementarias?.MC6?.resultado? FT9.medicionesComplementarias.MC6.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT10?.medicionesComplementarias?.MC6?.resultado? FT10.medicionesComplementarias.MC6.resultado: null}</p>
                </div>
              </div>
            </div>
          </div>
          :null}

{edicionPuestaAPunto.medicionesComplementarias.MC7.label?
          <div className="row row-fix">
          <div className="col l12 center-align no-margin">
              <div className="col s1 m1 l1">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">{edicionPuestaAPunto.medicionesComplementarias.MC7.label}</p>
              </div>
              </div>
              <div className="col l1 ">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue input-field-fine-tunning">
                <Field name="mc7" disabled={!ensayo} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT1?.medicionesComplementarias?.MC7?.resultado? FT1.medicionesComplementarias.MC7.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT2?.medicionesComplementarias?.MC7?.resultado? FT2.medicionesComplementarias.MC7.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT3?.medicionesComplementarias?.MC7?.resultado? FT3.medicionesComplementarias.MC7.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT4?.medicionesComplementarias?.MC7?.resultado? FT4.medicionesComplementarias.MC7.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT5?.medicionesComplementarias?.MC7?.resultado? FT5.medicionesComplementarias.MC7.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT6?.medicionesComplementarias?.MC7?.resultado? FT6.medicionesComplementarias.MC7.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT7?.medicionesComplementarias?.MC7?.resultado? FT7.medicionesComplementarias.MC7.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT8?.medicionesComplementarias?.MC7?.resultado? FT8.medicionesComplementarias.MC7.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT9?.medicionesComplementarias?.MC7?.resultado? FT9.medicionesComplementarias.MC7.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT10?.medicionesComplementarias?.MC7?.resultado? FT10.medicionesComplementarias.MC7.resultado: null}</p>
                </div>
              </div>
            </div>
          </div>
          :null}

{edicionPuestaAPunto.medicionesComplementarias.MC8.label?
          <div className="row row-fix">
          <div className="col l12 center-align no-margin">
              <div className="col s1 m1 l1">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">{edicionPuestaAPunto.medicionesComplementarias.MC8.label}</p>
              </div>
              </div>
              <div className="col l1 ">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue input-field-fine-tunning">
                <Field name="mc8" disabled={!ensayo} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT1?.medicionesComplementarias?.MC8?.resultado? FT1.medicionesComplementarias.MC8.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT2?.medicionesComplementarias?.MC8?.resultado? FT2.medicionesComplementarias.MC8.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT3?.medicionesComplementarias?.MC8?.resultado? FT3.medicionesComplementarias.MC8.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT4?.medicionesComplementarias?.MC8?.resultado? FT4.medicionesComplementarias.MC8.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT5?.medicionesComplementarias?.MC8?.resultado? FT5.medicionesComplementarias.MC8.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT6?.medicionesComplementarias?.MC8?.resultado? FT6.medicionesComplementarias.MC8.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT7?.medicionesComplementarias?.MC8?.resultado? FT7.medicionesComplementarias.MC8.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT8?.medicionesComplementarias?.MC8?.resultado? FT8.medicionesComplementarias.MC8.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT9?.medicionesComplementarias?.MC8?.resultado? FT9.medicionesComplementarias.MC8.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT10?.medicionesComplementarias?.MC8?.resultado? FT10.medicionesComplementarias.MC8.resultado: null}</p>
                </div>
              </div>
            </div>
          </div>
          :null}

{edicionPuestaAPunto.medicionesComplementarias.MC9.label?
          <div className="row row-fix">
          <div className="col l12 center-align no-margin">
              <div className="col s1 m1 l1">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">{edicionPuestaAPunto.medicionesComplementarias.MC9.label}</p>
              </div>
              </div>
              <div className="col l1 ">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue input-field-fine-tunning">
                <Field name="mc9" disabled={!ensayo} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT1?.medicionesComplementarias?.MC9?.resultado? FT1.medicionesComplementarias.MC9.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT2?.medicionesComplementarias?.MC9?.resultado? FT2.medicionesComplementarias.MC9.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT3?.medicionesComplementarias?.MC9?.resultado? FT3.medicionesComplementarias.MC9.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT4?.medicionesComplementarias?.MC9?.resultado? FT4.medicionesComplementarias.MC9.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT5?.medicionesComplementarias?.MC9?.resultado? FT5.medicionesComplementarias.MC9.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT6?.medicionesComplementarias?.MC9?.resultado? FT6.medicionesComplementarias.MC9.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT7?.medicionesComplementarias?.MC9?.resultado? FT7.medicionesComplementarias.MC9.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT8?.medicionesComplementarias?.MC9?.resultado? FT8.medicionesComplementarias.MC9.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT9?.medicionesComplementarias?.MC9?.resultado? FT9.medicionesComplementarias.MC9.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT10?.medicionesComplementarias?.MC1?.resultado? FT10.medicionesComplementarias.MC9.resultado: null}</p>
                </div>
              </div>
            </div>
          </div>
          :null}

{edicionPuestaAPunto.medicionesComplementarias.MC10.label?
          <div className="row row-fix">
          <div className="col l12 center-align no-margin">
              <div className="col s1 m1 l1">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">{edicionPuestaAPunto.medicionesComplementarias.MC10.label}</p>
              </div>
              </div>
              <div className="col l1 ">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue input-field-fine-tunning">
                <Field name="mc10" disabled={!ensayo} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT1?.medicionesComplementarias?.MC10?.resultado? FT1.medicionesComplementarias.MC10.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT2?.medicionesComplementarias?.MC10?.resultado? FT2.medicionesComplementarias.MC10.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT3?.medicionesComplementarias?.MC10?.resultado? FT3.medicionesComplementarias.MC10.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT4?.medicionesComplementarias?.MC10?.resultado? FT4.medicionesComplementarias.MC10.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT5?.medicionesComplementarias?.MC10?.resultado? FT5.medicionesComplementarias.MC10.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT6?.medicionesComplementarias?.MC10?.resultado? FT6.medicionesComplementarias.MC10.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT7?.medicionesComplementarias?.MC10?.resultado? FT7.medicionesComplementarias.MC10.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT8?.medicionesComplementarias?.MC10?.resultado? FT8.medicionesComplementarias.MC10.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT9?.medicionesComplementarias?.MC10?.resultado? FT9.medicionesComplementarias.MC10.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT10?.medicionesComplementarias?.MC10?.resultado? FT10.medicionesComplementarias.MC10.resultado: null}</p>
                </div>
              </div>
            </div>
          </div>
          :null}

{edicionPuestaAPunto.medicionesComplementarias.MC11.label?
          <div className="row row-fix">
          <div className="col l12 center-align no-margin">
              <div className="col s1 m1 l1">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">{edicionPuestaAPunto.medicionesComplementarias.MC11.label}</p>
              </div>
              </div>
              <div className="col l1 ">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue input-field-fine-tunning">
                <Field name="mc11" disabled={!ensayo} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT1?.medicionesComplementarias?.MC11?.resultado? FT1.medicionesComplementarias.MC11.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT2?.medicionesComplementarias?.MC11?.resultado? FT2.medicionesComplementarias.MC11.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT3?.medicionesComplementarias?.MC11?.resultado? FT3.medicionesComplementarias.MC11.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT4?.medicionesComplementarias?.MC11?.resultado? FT4.medicionesComplementarias.MC11.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT5?.medicionesComplementarias?.MC11?.resultado? FT5.medicionesComplementarias.MC11.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT6?.medicionesComplementarias?.MC11?.resultado? FT6.medicionesComplementarias.MC11.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT7?.medicionesComplementarias?.MC11?.resultado? FT7.medicionesComplementarias.MC11.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT8?.medicionesComplementarias?.MC11?.resultado? FT8.medicionesComplementarias.MC11.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT9?.medicionesComplementarias?.MC11?.resultado? FT9.medicionesComplementarias.MC11.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT10?.medicionesComplementarias?.MC11?.resultado? FT10.medicionesComplementarias.MC11.resultado: null}</p>
                </div>
              </div>
            </div>
          </div>
          :null}

{edicionPuestaAPunto.medicionesComplementarias.MC12.label?
          <div className="row row-fix">
          <div className="col l12 center-align no-margin">
              <div className="col s1 m1 l1">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">{edicionPuestaAPunto.medicionesComplementarias.MC12.label}</p>
              </div>
              </div>
              <div className="col l1 ">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue input-field-fine-tunning">
                <Field name="mc12" disabled={!ensayo} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT1?.medicionesComplementarias?.MC12?.resultado? FT1.medicionesComplementarias.MC12.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT2?.medicionesComplementarias?.MC12?.resultado? FT2.medicionesComplementarias.MC12.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT3?.medicionesComplementarias?.MC12?.resultado? FT3.medicionesComplementarias.MC12.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT4?.medicionesComplementarias?.MC12?.resultado? FT4.medicionesComplementarias.MC12.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT5?.medicionesComplementarias?.MC12?.resultado? FT5.medicionesComplementarias.MC12.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT6?.medicionesComplementarias?.MC12?.resultado? FT6.medicionesComplementarias.MC12.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT7?.medicionesComplementarias?.MC12?.resultado? FT7.medicionesComplementarias.MC12.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT8?.medicionesComplementarias?.MC12?.resultado? FT8.medicionesComplementarias.MC12.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT9?.medicionesComplementarias?.MC12?.resultado? FT9.medicionesComplementarias.MC12.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT10?.medicionesComplementarias?.MC12?.resultado? FT10.medicionesComplementarias.MC12.resultado: null}</p>
                </div>
              </div>
            </div>
          </div>
          :null}

{edicionPuestaAPunto.medicionesComplementarias.MC13.label?
          <div className="row row-fix">
          <div className="col l12 center-align no-margin">
              <div className="col s1 m1 l1">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">{edicionPuestaAPunto.medicionesComplementarias.MC13.label}</p>
              </div>
              </div>
              <div className="col l1 ">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue input-field-fine-tunning">
                <Field name="mc13" disabled={!ensayo} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT1?.medicionesComplementarias?.MC13?.resultado? FT1.medicionesComplementarias.MC13.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT2?.medicionesComplementarias?.MC13?.resultado? FT2.medicionesComplementarias.MC13.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT3?.medicionesComplementarias?.MC13?.resultado? FT3.medicionesComplementarias.MC13.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT4?.medicionesComplementarias?.MC13?.resultado? FT4.medicionesComplementarias.MC13.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT5?.medicionesComplementarias?.MC13?.resultado? FT5.medicionesComplementarias.MC13.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT6?.medicionesComplementarias?.MC13?.resultado? FT6.medicionesComplementarias.MC13.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT7?.medicionesComplementarias?.MC13?.resultado? FT7.medicionesComplementarias.MC13.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT8?.medicionesComplementarias?.MC13?.resultado? FT8.medicionesComplementarias.MC13.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT9?.medicionesComplementarias?.MC13?.resultado? FT9.medicionesComplementarias.MC13.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT10?.medicionesComplementarias?.MC13?.resultado? FT10.medicionesComplementarias.MC13.resultado: null}</p>
                </div>
              </div>
            </div>
          </div>
          :null}

{edicionPuestaAPunto.medicionesComplementarias.MC14.label?
          <div className="row row-fix">
          <div className="col l12 center-align no-margin">
              <div className="col s1 m1 l1">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">{edicionPuestaAPunto.medicionesComplementarias.MC1.label}</p>
              </div>
              </div>
              <div className="col l1 ">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue input-field-fine-tunning">
                <Field name="mc14" disabled={!ensayo} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT1?.medicionesComplementarias?.MC14?.resultado? FT1.medicionesComplementarias.MC14.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT2?.medicionesComplementarias?.MC14?.resultado? FT2.medicionesComplementarias.MC14.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT3?.medicionesComplementarias?.MC14?.resultado? FT3.medicionesComplementarias.MC14.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT4?.medicionesComplementarias?.MC14?.resultado? FT4.medicionesComplementarias.MC14.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT5?.medicionesComplementarias?.MC14?.resultado? FT5.medicionesComplementarias.MC14.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT6?.medicionesComplementarias?.MC14?.resultado? FT6.medicionesComplementarias.MC14.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT7?.medicionesComplementarias?.MC14?.resultado? FT7.medicionesComplementarias.MC14.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT8?.medicionesComplementarias?.MC14?.resultado? FT8.medicionesComplementarias.MC14.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT9?.medicionesComplementarias?.MC14?.resultado? FT9.medicionesComplementarias.MC14.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT10?.medicionesComplementarias?.MC14?.resultado? FT10.medicionesComplementarias.MC14.resultado: null}</p>
                </div>
              </div>
            </div>
          </div>
          :null}

{edicionPuestaAPunto.medicionesComplementarias.MC15.label?
          <div className="row row-fix">
          <div className="col l12 center-align no-margin">
              <div className="col s1 m1 l1">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">{edicionPuestaAPunto.medicionesComplementarias.MC15.label}</p>
              </div>
              </div>
              <div className="col l1 ">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue input-field-fine-tunning">
                <Field name="mc15" disabled={!ensayo} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT1?.medicionesComplementarias?.MC15?.resultado? FT1.medicionesComplementarias.MC15.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT2?.medicionesComplementarias?.MC15?.resultado? FT2.medicionesComplementarias.MC15.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT3?.medicionesComplementarias?.MC15?.resultado? FT3.medicionesComplementarias.MC15.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT4?.medicionesComplementarias?.MC15?.resultado? FT4.medicionesComplementarias.MC15.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT5?.medicionesComplementarias?.MC15?.resultado? FT5.medicionesComplementarias.MC15.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT6?.medicionesComplementarias?.MC15?.resultado? FT6.medicionesComplementarias.MC15.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT7?.medicionesComplementarias?.MC15?.resultado? FT7.medicionesComplementarias.MC15.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT8?.medicionesComplementarias?.MC15?.resultado? FT8.medicionesComplementarias.MC15.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT9?.medicionesComplementarias?.MC15?.resultado? FT9.medicionesComplementarias.MC15.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT10?.medicionesComplementarias?.MC15?.resultado? FT10.medicionesComplementarias.MC15.resultado: null}</p>
                </div>
              </div>
            </div>
          </div>
          :null}

{edicionPuestaAPunto.medicionesComplementarias.MC16.label?
          <div className="row row-fix">
          <div className="col l12 center-align no-margin">
              <div className="col s1 m1 l1">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">{edicionPuestaAPunto.medicionesComplementarias.MC16.label}</p>
              </div>
              </div>
              <div className="col l1 ">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue input-field-fine-tunning">
                <Field name="mc16" disabled={!ensayo} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT1?.medicionesComplementarias?.MC16?.resultado? FT1.medicionesComplementarias.MC16.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT2?.medicionesComplementarias?.MC16?.resultado? FT2.medicionesComplementarias.MC16.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT3?.medicionesComplementarias?.MC16?.resultado? FT3.medicionesComplementarias.MC16.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT4?.medicionesComplementarias?.MC16?.resultado? FT4.medicionesComplementarias.MC16.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT5?.medicionesComplementarias?.MC16?.resultado? FT5.medicionesComplementarias.MC16.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT6?.medicionesComplementarias?.MC16?.resultado? FT6.medicionesComplementarias.MC16.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT7?.medicionesComplementarias?.MC16?.resultado? FT7.medicionesComplementarias.MC16.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT8?.medicionesComplementarias?.MC16?.resultado? FT8.medicionesComplementarias.MC16.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT9?.medicionesComplementarias?.MC16?.resultado? FT9.medicionesComplementarias.MC16.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT10?.medicionesComplementarias?.MC16?.resultado? FT10.medicionesComplementarias.MC16.resultado: null}</p>
                </div>
              </div>
            </div>
          </div>
          :null}

{edicionPuestaAPunto.medicionesComplementarias.MC17.label?
          <div className="row row-fix">
          <div className="col l12 center-align no-margin">
              <div className="col s1 m1 l1">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">{edicionPuestaAPunto.medicionesComplementarias.MC17.label}</p>
              </div>
              </div>
              <div className="col l1 ">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue input-field-fine-tunning">
                <Field name="mc17" disabled={!ensayo} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT1?.medicionesComplementarias?.MC17?.resultado? FT1.medicionesComplementarias.MC17.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT2?.medicionesComplementarias?.MC17?.resultado? FT2.medicionesComplementarias.MC17.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT3?.medicionesComplementarias?.MC17?.resultado? FT3.medicionesComplementarias.MC17.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT4?.medicionesComplementarias?.MC17?.resultado? FT4.medicionesComplementarias.MC17.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT5?.medicionesComplementarias?.MC17?.resultado? FT5.medicionesComplementarias.MC17.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT6?.medicionesComplementarias?.MC17?.resultado? FT6.medicionesComplementarias.MC17.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT7?.medicionesComplementarias?.MC17?.resultado? FT7.medicionesComplementarias.MC17.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT8?.medicionesComplementarias?.MC17?.resultado? FT8.medicionesComplementarias.MC17.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT9?.medicionesComplementarias?.MC17?.resultado? FT9.medicionesComplementarias.MC17.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT10?.medicionesComplementarias?.MC17?.resultado? FT10.medicionesComplementarias.MC17.resultado: null}</p>
                </div>
              </div>
            </div>
          </div>
          :null}

{edicionPuestaAPunto.medicionesComplementarias.MC18.label?
          <div className="row row-fix">
          <div className="col l12 center-align no-margin">
              <div className="col s1 m1 l1">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">{edicionPuestaAPunto.medicionesComplementarias.MC18.label}</p>
              </div>
              </div>
              <div className="col l1 ">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue input-field-fine-tunning">
                <Field name="mc18" disabled={!ensayo} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT1?.medicionesComplementarias?.MC18?.resultado? FT1.medicionesComplementarias.MC18.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT2?.medicionesComplementarias?.MC18?.resultado? FT2.medicionesComplementarias.MC18.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT3?.medicionesComplementarias?.MC18?.resultado? FT3.medicionesComplementarias.MC18.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT4?.medicionesComplementarias?.MC18?.resultado? FT4.medicionesComplementarias.MC18.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT5?.medicionesComplementarias?.MC18?.resultado? FT5.medicionesComplementarias.MC18.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT6?.medicionesComplementarias?.MC18?.resultado? FT6.medicionesComplementarias.MC18.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT7?.medicionesComplementarias?.MC18?.resultado? FT7.medicionesComplementarias.MC18.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT8?.medicionesComplementarias?.MC18?.resultado? FT8.medicionesComplementarias.MC18.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT9?.medicionesComplementarias?.MC18?.resultado? FT9.medicionesComplementarias.MC18.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT10?.medicionesComplementarias?.MC18?.resultado? FT10.medicionesComplementarias.MC18.resultado: null}</p>
                </div>
              </div>
            </div>
          </div>
          :null}

{edicionPuestaAPunto.medicionesComplementarias.MC19.label?
          <div className="row row-fix">
          <div className="col l12 center-align no-margin">
              <div className="col s1 m1 l1">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">{edicionPuestaAPunto.medicionesComplementarias.MC19.label}</p>
              </div>
              </div>
              <div className="col l1 ">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue input-field-fine-tunning">
                <Field name="mc19" disabled={!ensayo} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT1?.medicionesComplementarias?.MC19?.resultado? FT1.medicionesComplementarias.MC19.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT2?.medicionesComplementarias?.MC19?.resultado? FT2.medicionesComplementarias.MC19.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT3?.medicionesComplementarias?.MC19?.resultado? FT3.medicionesComplementarias.MC19.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT4?.medicionesComplementarias?.MC19?.resultado? FT4.medicionesComplementarias.MC19.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT5?.medicionesComplementarias?.MC19?.resultado? FT5.medicionesComplementarias.MC19.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT6?.medicionesComplementarias?.MC19?.resultado? FT6.medicionesComplementarias.MC19.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT7?.medicionesComplementarias?.MC19?.resultado? FT7.medicionesComplementarias.MC19.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT8?.medicionesComplementarias?.MC19?.resultado? FT8.medicionesComplementarias.MC19.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT9?.medicionesComplementarias?.MC19?.resultado? FT9.medicionesComplementarias.MC19.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT10?.medicionesComplementarias?.MC19?.resultado? FT10.medicionesComplementarias.MC19.resultado: null}</p>
                </div>
              </div>
            </div>
          </div>
          :null}

{edicionPuestaAPunto.medicionesComplementarias.MC20.label?
          <div className="row row-fix">
          <div className="col l12 center-align no-margin">
              <div className="col s1 m1 l1">
              <div className="display-box-fine-tunning z-depth-1 background-grey">
                  <p className="text-production-register">{edicionPuestaAPunto.medicionesComplementarias.MC20.label}</p>
              </div>
              </div>
              <div className="col l1 ">
                <div className="display-box-fine-tunning z-depth-1 background-light-blue input-field-fine-tunning">
                <Field name="mc20" disabled={!ensayo} className="inputfield-fine-tunning" maxLength="7"/>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT1?.medicionesComplementarias?.MC20?.resultado? FT1.medicionesComplementarias.MC20.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT2?.medicionesComplementarias?.MC20?.resultado? FT2.medicionesComplementarias.MC20.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT3?.medicionesComplementarias?.MC20?.resultado? FT3.medicionesComplementarias.MC20.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT4?.medicionesComplementarias?.MC20?.resultado? FT4.medicionesComplementarias.MC20.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT5?.medicionesComplementarias?.MC20?.resultado? FT5.medicionesComplementarias.MC20.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT6?.medicionesComplementarias?.MC20?.resultado? FT6.medicionesComplementarias.MC20.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT7?.medicionesComplementarias?.MC20?.resultado? FT7.medicionesComplementarias.MC20.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT8?.medicionesComplementarias?.MC20?.resultado? FT8.medicionesComplementarias.MC20.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT9?.medicionesComplementarias?.MC20?.resultado? FT9.medicionesComplementarias.MC20.resultado: null}</p>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="display-box-fine-tunning z-depth-1">
                <p className="text-production-register">{FT10?.medicionesComplementarias?.MC20?.resultado? FT10.medicionesComplementarias.MC20.resultado: null}</p>
                </div>
              </div>
            </div>
          </div>
          :null}

          <div className="row"> </div>

        <div className="row row-fix ">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col l2">
                  <button className="btn-small btn-block waves-effect waves-light button-modoedicion-batch-list z-depth-2" type="submit">
                    ENSAYAR
                  </button>
              </div>
           

              <div className="col l1 trash">
              {FT1?
                   <button onClick={eraseFT1} className="material-symbols-outlined hover-hand">delete</button>
                  :<button disabled className="material-symbols-outlined">delete</button>}
              </div>
              <div className="col l1 trash">
              {FT2?
                   <button onClick={eraseFT2} className="material-symbols-outlined hover-hand">delete</button>
                  :<button disabled className="material-symbols-outlined">delete</button>}
              </div>
              <div className="col l1 trash">
              {FT3?
                   <button onClick={eraseFT3} className="material-symbols-outlined hover-hand">delete</button>
                  :<button disabled className="material-symbols-outlined">delete</button>}
              </div>
              <div className="col l1 trash">
              {FT4?
                   <button onClick={eraseFT4} className="material-symbols-outlined hover-hand">delete</button>
                  :<button disabled className="material-symbols-outlined">delete</button>}
              </div>
              <div className="col l1 trash">
              {FT5?
                   <button onClick={eraseFT5} className="material-symbols-outlined hover-hand">delete</button>
                  :<button disabled className="material-symbols-outlined">delete</button>}
              </div>
              <div className="col l1 trash">
              {FT6?
                   <button onClick={eraseFT6} className="material-symbols-outlined hover-hand">delete</button>
                  :<button disabled className="material-symbols-outlined">delete</button>}
              </div>
              <div className="col l1 trash">
              {FT7?
                   <button onClick={eraseFT7} className="material-symbols-outlined hover-hand">delete</button>
                  :<button disabled className="material-symbols-outlined">delete</button>}
              </div>
              <div className="col l1 trash">
              {FT8?
                   <button onClick={eraseFT8} className="material-symbols-outlined hover-hand">delete</button>
                  :<button disabled className="material-symbols-outlined">delete</button>}
              </div>
              <div className="col l1 trash">
              {FT9?
                   <button onClick={eraseFT9} className="material-symbols-outlined hover-hand">delete</button>
                  :<button disabled className="material-symbols-outlined">delete</button>}
              </div>
              <div className="col l1 trash">
              {FT10?
                   <button onClick={eraseFT10} className="material-symbols-outlined hover-hand">delete</button>
                  :<button disabled className="material-symbols-outlined">delete</button>}
              </div>

            </div>
          </div>


     </Form>
    </Formik>


          <div className="row"></div>

          <Formik initialValues={{ calificacion:'', ordenDeCompra:'', observaciones:''}} 
                  onSubmit={handleSubmitENSAYO}  validate={validarENSAYO} isValidating={false} isSubmitting={false} >
                    <Form>

        <div className="row">

          <div className="col s12 m12 l6 no-margin">
            <p className="display-box-title">Estado de aprobación</p>
            <div className="display-box valign-wrapper">   
            <Field as="select" name="calificacion" className="browser-default collapsible-header">
                <option disabled value="">Seleccione Calificación</option>     
                <option value="aprobado">Aprobado</option>
                <option value="observado">Aprobado con observaciones</option>
                <option value="rechazado">Rechazado</option>
              </Field> 
            </div>
            <p className="warning-inputs-scan left"><ErrorMessage name="calificacion"/></p>
          </div>

          <div className="col s12 m12 l4  right no-margin ">
              <p className="display-box-title">Orden de Compra</p>
              <div className="display-box valign-wrapper">
                  <Field name="ordenDeCompra"  className="input-field-batch-lote" type="text"/>
              </div>  
              <p className="warning-inputs-scan left"><ErrorMessage name="ordenDeCompra"/></p> 
          </div>
          </div>

          <div className="col s12 m12 l12">
            <p className="display-box-title">Observaciones</p>
              <div className="observaciones-create-batch">
              <Field as="textarea" name="observaciones" className="input-field-text-create-plan materialize-textarea"  />
            </div>
          </div>



          <div className="row">
            <div className="col s12 m12 l6 "><a href="/component_list">
              <button className="btn-small btn-block waves-effect waves-light button-regresar-create-plan z-depth-2" type="button">
                REGRESAR
              </button></a>
            </div>
          
            <div className="col s12 m12 l6 right">
              <button className="btn-small btn-block waves-effect waves-light button-modoedicion-batch-list z-depth-2" type="submit">
                REGISTRAR ENSAYO
              </button>
            </div>
        </div>  

      </Form>
    </Formik>
      </div>
    </>
  );
};
export default Fine_Tuning;
