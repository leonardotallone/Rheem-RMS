import Navbar from "../Navbar/Navbar";
import QR from "../../assets/logos/QR.png";
import Popup from 'reactjs-popup';
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import  Barcode  from 'react-barcode';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

import { ReactComponent as Rheem } from '../../assets/logos/Rheem.svg'

import { useNavigate } from 'react-router-dom';
import { useParams} from "react-router";


const Production_Line_Embalaje_2 = () => {

  const exportToPDF = () => {
    const input = document.getElementById('pdf');
    html2canvas(input,{
      scale:4,
      dpi:300,
    })
      .then((canvas) => {     
        const imgData = canvas.toDataURL('image/png',1);
        const pdf = new jsPDF("p","mm","letter",true);
        const imgProps= pdf.getImageProperties(imgData);
        const pdfWidth =  (pdf.internal.pageSize.getWidth())*1;
        
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

        pdf.addImage(imgData,'PNG',0,0, pdfWidth,pdfHeight,"FAST");
        
        pdf.save('Ensamblado#2.pdf');
      });
  };

  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [habilitar, setHabilitar] = useState(false);

  const [chasis, setChasis] = useState(false);
  const [month] = useState(new Date().getMonth() + 1)
  const [year] = useState(new Date().getFullYear())

  
  const openModal1 = () => {
   setOpen1(true);
 }
  const closeModall1 =() => {
      setOpen1(false);
  };

  const twoFunctions = () => {
    setOpen2(true);
    setOpen1(false) 
  }
  const closeModal2 =() => {
    window.location.reload()
    setOpen2(false);
  }
  const validarCodigoDeChasis = (values) => {
    const errors = {};
    // const re = /^[0-9]{8}[a-zA-Z]{2}$/
    if (!values.codigoDeChasis) {
      errors.codigoDeChasis = "Por favor ingrese código de Chasis";
    } else if (values.codigoDeChasis) {
      setChasis(true);
    } else if (!values.codigoDeChasis){
      setChasis(false);
    }
    return errors
  };
  const validar = (values) => {
    const errors = {};

    if(!values.codigoDeChasis){
      errors.codigoDeChasis = "Por favor ingrese código de Chasis"
    } else if(!values.codigoDeCamara){
      errors.codigoDeCamara = "Por favor ingrese código de Cámara"
    } else {
      setHabilitar(true)
    }
    return errors;
  };

  const handleSubmitChasis = (values) => {
    const codigoDeCamara = {codigoDeCamara: values.codigoDeCamara}
    console.log("CODIGO DE CAMARA", codigoDeCamara)
  };

  const handleSubmit = (values) => {

  const TestHex = {
    codigoDeCamara: values.codigoDeCamara,
    sku:values.sku,
    lote:values.lote,
    descripcion: values.descripcion,
    resultadoTestHex: values.resultadoTestHex,
    inspeccionVisual: values.inspeccionVisual,
    date: values.date,
    operador:values.opeador,
    observaciones:values.observaciones,
  }
  console.log("TEST HEX",TestHex)

  
};

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
            <div className="col l9">
            <p className="font-title-create-plan in-line">Linea Productiva</p>
                <p className="subtitle-production-line in-line"> &nbsp;(Embalaje #2)</p>
            </div>
            <div className="col s12 m7 l2">
                 <p className="font-form-create-plan">RC:16-062</p>  
              </div>
              <div className="col s1 m1 l1 right">
              <img className="qr right " src={QR} alt=""></img>
              {/* <i className=" right material-symbols-outlined print">print</i> */}
            </div>
            <div className="col s12 m12 l7 no-margin">
              <div className="col s12 m12 l9">
              
              <p className="font-subtitle-create-plan">Verificación de Procesos</p>
              <div className="display-box-fine-tunning-scancode z-depth-1">
                  <Formik initialValues={{ numeroSerie:''}} 
                     onSubmit={handleSubmitChasis} validate={validarCodigoDeChasis} isValidating={false} isSubmitting={false} >
                    <Form>
                  <div className="col s3 m1 l1 ">
                    <button type="submit" className="hover-hand">
                      <i className="material-symbols-outlined qr-input">qr_code_scanner</i>
                    </button>
                  </div>

                  
                  <div className="col s9 m10 push-m1 l10 push-l1 ">
                              <div className="input-field">
                                <label className="label-text-scan" htmlFor="chasis" >Nº de Serie</label>
                                  <Field name="numeroSerie" type="text" />
                              <div className="warning-inputs-scan right"><ErrorMessage name="codigoDeChasis" /></div>
                              </div>
                  </div>
                   
                
                    </Form>
                  </Formik>
                </div>
                <p className="display-box-title">Si no dispone de lector, ingrese el Código manualmente.</p>
              </div>
            </div>

          </div>
          </div>
        </div>
      

      {/* ---------------------------------------ETIQUETA--------------------------------------------------------- */}


      <div className="container">
          <div className="row row-fix" id="pdf"> 
          <div className="row"></div>
          <div className="col l12">
          
  <div className="col l2"></div>

            <div className="col l8"> 
              <div className="col l12 display-box-plan z-depth-1">
                  
                      <div className="col l1 valigh-wrapper margin-logo-pallet">
                        <Rheem/>
                      </div> 
                      <div className="col l9 push-l1 no-margin">
                                <p className="display-box-title">Denominacion</p>
                                <div className="display-box valign-wrapper">
                                <p>DENOMINACION</p>
                                </div>
                      </div>

                      <div className="col l6 push-l1 no-margin">
                          <p className="display-box-title">Modelo</p>
                          <div className="display-box valign-wrapper">
                          <p >MODELO</p>
                          </div>
                      </div>

                      <div className="col l2 push-l2 no-margin">
                          <p className="display-box-title">Gas</p>
                          <div className="display-box valign-wrapper">
                          <p>NATURAL</p>
                          </div>
                      </div>
                      <div className="row"></div>
                      <div className="col l9 push-l3" >
                        <p className="display-box-title  p-etiquetas ">Código EAN 13</p>
                        <Barcode className="as-block"
                              value="123456789723"
                              width={2.5}
                              height={110}
                              format="EAN13"
                              displayValue={true} 
                              fontOptions=""
                              fontSize="14"
                              font="monospace"
                              textAlign="center"/>
                    </div>

                      <div className="col l2  margin-fecha no-margin">
                          <p className="display-box-title">Fecha</p>
                          <div className="display-box valign-wrapper">
                          <p >{`${month}-${year}`}</p>
                          </div>
                      </div>
                    
   
                
              <div className="row"></div>
                      <div className="col l4 ">
                   
                          <p className="display-box-title  p-etiquetas">Nº de Serie</p>
                          <Barcode 
                              value="123456789723"
                              width={2}
                              height={50}
                              format="CODE128"
                              displayValue={true} 
                              fontOptions=""
                              fontSize="14"
                              font="monospace"
                              textAlign="center"/>
                      </div>

                      <div className="col l4 " >
                          <p className="display-box-title p-etiquetas">Código DEBRYSA (Peru)</p>
                          <Barcode 
                              value="123456789723"
                              width={2}
                              height={50}
                              format="CODE128"
                              displayValue={true} 
                              fontOptions=""
                              fontSize="14"
                              font="monospace"
                              textAlign="center"/>
                      </div>

                      <div className="col l4">
                          <p className="display-box-title p-etiquetas">SKU Producto</p>                          
                          <Barcode 
                              value="123456789723"
                              width={2}
                              height={50}
                              format="CODE128"
                              displayValue={true} 
                              fontOptions=""
                              fontSize="14"
                              font="monospace"
                              textAlign="center"/>
                      </div>

                <div className="col s1 m1 l12 left">&nbsp;</div>

             </div>         
            </div>  

   
          </div>

          <div className="col s1 m1 l12">&nbsp;</div>
          </div>

        <div className="row">
          <div className="col l2"></div>
            <div className="col l4">
              <button onClick={handleGoBack} className="btn-small btn-block waves-effect waves-light button-regresar-create-plan z-depth-2" type="submit">
                REGRESAR
              </button>
            </div>
            <div className="col l4">
              <button onClick={exportToPDF} className="btn-small btn-block waves-effect waves-light button-modoedicion-batch-list z-depth-2" type="submit">
                IMPRIMIR ETIQUETA
              </button>
            </div>
            </div>
          
            <div className="col l2"></div>
            <div className="col l2"></div>
            
            <div className="col s1 m1 l12">&nbsp;</div>

      </div>
    </>
  );
};
export default Production_Line_Embalaje_2;
