import Navbar from "../../Navbar/Navbar";
import QR from "../../../assets/logos/QR.png";


import { Formik, Form, Field, ErrorMessage } from "formik";

const Definicion_de_Reproceso = () => {
  var onlyNumbers = /^[0-9]+$/;

    const validar = (values) => {
        const errors = {};
        if (!values.disposicion) {
          errors.disposicion = "Por favor seleccione Disposición";
        } else if (!values.lote){
            errors.lote = "Por favor ingrese número de lote"
        } else if(!values.lote.match(onlyNumbers)){
          errors.lote = "El lote puede ser solo numeros"
        } else if (!values.sku){
            errors.sku = "Por favor ingrese SKU"
        } else if(!values.sku.match(onlyNumbers)){
          errors.sku = "El SKU puede ser solo numeros"
        } else if (!values.idPlan){
            errors.idPlan = "Por favor ingrese el ID del Plan"
        } else if (!values.descripcion){
            errors.descripcion = "Por favor ingrese Descripción"
        } else if (!values.observacionReproceso){
            errors.observacionReproceso = "Por favor ingrese una Observación"    
        };
        return errors
    }

    const handleSubmitDefinicionReproceso = (values) => {
        const definicionReproceso = {
            sku: values.sku, 
            idPlan: values.idPlan,
            descripcion: values.descripcion,
            lote:values.lote,disposicion:values.disposicion, 
            observacionReproceso:values.observacionReproceso,
        }
        console.log("DEFINICION REPROCESO", definicionReproceso)
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
                <p className="font-title-create-plan">Definición de Reproceso</p>
              </div>
            </div>

            <div className="col s11 m11 l4 ">
              <div className="col s12 m5 l6 no-margin pull-l2">
              
                {/* <p className="font-tunning-black">&nbsp;</p>
                <p className="font-tunning-black">&nbsp;</p>
                <p className="font-tunning-black">Aprobado</p>
                <div className="reference-state-aprobado"></div>
                <p className="font-tunning-black">A.Observado</p>
                <div className="reference-state-observado"></div>
                <p className="font-tunning-black">Rechazado</p>
                <div className="reference-state-rechazado"></div> */}
              
              </div>
                <div className="col s12 m7 l6 no-margin ">
                <p className="font-form-create-plan">RC:16-062</p>  
                <p className="font-tunning-black">ELABORO: CARMONA MARIO</p>
                <p className="font-tunning-black">APROBO: LEOPOLDO SANCHEZ</p>
                <p className="font-tunning-black">REVISION Nº: P0103-2023</p>
                <p className="font-tunning-black">FECHA: 07-08-2023</p>
                
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
        
      <Formik initialValues={{ lote:'',sku:'', idPlan:'', descripcion:'',disposicion:'',descripcionReproceso:'',observacionReproceso:''}} 
                  onSubmit={handleSubmitDefinicionReproceso} validate={validar} isValidating={false} isSubmitting={false} >
                    <Form>
      <div className="container">
        <p className="form-title">COMPLETAR POR QA ADMINISTRATIVO</p>
        <div className="row">
          <div className="col s12 m12 l4 ">
            <p className="display-box-title-reproceso">Disposición</p>
            <div className="display-box-reproceso valign-wrapper">
                <Field as="select" name="disposicion" className="browser-default collapsible-header">
                         <option value=""></option>     
                         <option value="QA">&nbsp;&nbsp;&nbsp;Disposición QA</option>
                         <option value="ING">&nbsp;&nbsp;&nbsp;Disposicion Ingeniería</option>
                </Field>    
            </div>
            <div className="warning-inputs-scan right"><ErrorMessage name="disposicion" /></div>

            <p className="display-box-title-reproceso">Nº Lote</p>    
            <div className="display-box-reproceso">
                <Field name="lote" className="input-field-reproceso" maxLength="50"/>
            </div>
            <div className="warning-inputs-scan right"><ErrorMessage name="lote" /></div>

            <p className="display-box-title-reproceso">SKU</p>
            <div className="display-box-reproceso">
                <Field name="sku" className="input-field-reproceso" maxLength="50"/>
            </div>
            <div className="warning-inputs-scan right"><ErrorMessage name="sku" /></div>
          

            <p className="display-box-title-reproceso">ID del Plan</p>
            <div className="display-box-reproceso">
                <Field name="idPlan" className="input-field-reproceso" maxLength="50"/>
            </div>
            <div className="warning-inputs-scan right"><ErrorMessage name="idPlan" /></div>

            <p className="display-box-title-reproceso">Descripción</p>
            <div className="display-box-reproceso">
                <Field name="descripcion" className="input-field-reproceso" maxLength="50"/>
            </div>

            <div className="warning-inputs-scan right"><ErrorMessage name="descripcion" /></div>

          </div>
         
          <div className="col s12 m12 l8">
            <p className="display-box-title-reproceso">Observaciones Reproceso</p>
              <div className="display-box-text-reproceso">
              <Field as="textarea" name="observacionReproceso" className="input-field-text-reproceso materialize-textarea"  />
            </div>  
            <div className="warning-inputs-scan right"><ErrorMessage name="observacionReproceso" /></div>
          </div>
        </div>

         {/* botones */}
          
          
        <div className="row">
            <div className="col s12 m12 l4"><a href="/home">
              <button className="btn-small btn-block waves-effect waves-light button-regresar-create-plan z-depth-2" type="button">
                REGRESAR
              </button></a>
            </div>

            <div className="col s12 m12 l8">
              <div >
                 <button className="btn-small btn-block waves-effect waves-light button-ingresar-create-plan z-depth-2" type="submit">
                   NOTIFICAR REPROCESO
                 </button>
              </div>
            </div>
        </div>
      </div>
    </Form>
    </Formik>
    </>
  );
};
export default Definicion_de_Reproceso;
