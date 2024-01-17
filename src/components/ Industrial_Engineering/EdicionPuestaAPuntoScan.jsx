import Navbar from "../Navbar/Navbar";
import QR from "../../assets/logos/QR.png";
import testPDF from "../../assets/manual.pdf"
import { Formik, Form, Field, ErrorMessage } from "formik";
import { ReactComponent as Settings } from '../../assets/icons/settings.svg';
import { ReactComponent as PDFicon } from '../../assets/icons/pdf 24x24.svg';
import { useState } from "react";

const EdicionPuestaAPuntoScan = () => {

  const [folding] = useState(false);
  const [punching] = useState(false);
  const [print] = useState(true);

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
      

      {/* ---------------------------------------Banner Scan------------------- */}
      <div className="row"></div>

      <div className="container">
      {/* <div className="row display-box-plan z-depth-1 valign-wrapper">
      <div className="col s12 m12 l3 ">
                <p className="modification">SKU PADRE:</p>
                <p className="num-modification">12345678910</p>
            </div>  
            <div className="col s12 m12 l4 ">
                <p className="modification">CODIGO DEL COMPONENTE:</p>
                <p className="num-modification">12345678910</p>
            </div>         
            <div className="col s12 m12 l5">
                <p className="last-modification">DESCRIPCION DEL COMPONENTE:</p>
                <p className="last-modification-date">PRIMER FRENTE</p>
            </div>
            
           <div className="col s12 m12 l2">     
              <a href="/ie-edicion-puesta-a-punto">  
                 <Settings className="right margin-top-settings"/>
              </a>
           </div>     
            <div className="col s12 m12 l1">
                <a href={testPDF} target="_blank">
                   <PDFicon className="margin-top-pdf"/>
                </a>
           </div>  
          </div> */}


         {/* PAGINADO */}

         {/* <div className="col s12 m12 l12 center">
            <ul className="pagination ">
             <li className="disabled"><a href="#!"><i className="material-icons chevron">chevron_left</i></a></li>
             <li className="active"><a className="font-pagination-seslected"href="#!">1</a></li>
             <li className="waves-effect"><a className="font-pagination" href="#!">2</a></li>
             <li className="waves-effect"><a className="font-pagination" href="#!">3</a></li>
             <li className="waves-effect"><a className="font-pagination" href="#!">4</a></li>
             <li className="waves-effect"><a className="font-pagination" href="#!">5</a></li>
             <li className="waves-effect"><a className="font-pagination" href="#!"><i className="material-icons chevron ">chevron_right</i></a></li>
            </ul>
          </div> */}
          
          
        {/* <div className="row">
            <div className="col s12 m12 l12"><a href="/production-batchs-list">
              <button className="btn-small btn-block waves-effect waves-light button-regresar-create-plan z-depth-2" type="submit">
                regresar
              </button></a>
            </div>
        </div> */}
        
        

      </div>
    </>
  );
};
export default EdicionPuestaAPuntoScan;
