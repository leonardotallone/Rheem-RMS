import Navbar from "../Navbar/Navbar";
import QR from "../../assets/logos/QR.png";
import { useState } from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";

const Informe_De_Rechazo = () => {

  const types = ["application/pdf"];

  const [rechazo, setRechazo] = useState(null);
  const [error, setError] = useState(null);


  const handlerRECHAZO = (e) => {
    let upload = e.target.files[0];
    if (upload && types.includes(upload.type)) {
        setRechazo(upload)
    setError('')
    } else {
      setRechazo(null);  
      setError(
        "Por favor seleccione archivos PDF"
      );
  };
}
console.log("INFORME RECHAZO", rechazo);
console.log("ERROR", error)

    const validar = (values) => {
        const errors = {};
        if (!values.lote) {
          errors.lote = "Por favor ingrese lote";
        } else if (!values.serie){
            errors.serie = "Por favor ingrese serie"
        } else if (!values.sku){
            errors.sku = "Por favor ingrese SKU"
        } else if (!values.fecha){
            errors.fecha = "Por favor ingrese la fecha"
        } else if (!values.rechazo){
            errors.rechazo = "Por favor ingrese grado de rechazo"
        } else if (!values.observaciones){
            errors.observaciones = "Por favor ingrese una Observación"    
        };
        return errors
    }

    const handleSubmitRECHAZO = (values) => {
        const InformeDeRechazo = {
            lote: values.lote,
            serie: values.serie,
            sku: values.sku, 
            fecha: values.fecha,
            rechazo: values.rechazo,
            observaciones:values.observaciones,
        }
        console.log("INFORME DE RECHAZO", InformeDeRechazo)
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
                <p className="font-title-create-plan">Informe de Rechazo</p>
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
        
      <Formik initialValues={{ lote:'',serie:'', sku:'', fecha:'',rechazo:'',observaciones:''}} 
                  onSubmit={handleSubmitRECHAZO} validate={validar} isValidating={false} isSubmitting={false} >
                    <Form>
      <div className="container">
        <p className="form-title">COMPLETE LOS SIGUIENTES DATOS</p>

        <div className="row">
          <div className="col s12 m12 l4">
            <div className="col l12 no-margin">
              <p className="display-box-title-reproceso">Nº de Lote</p>
              <div className="display-box-reproceso">
                  <Field name="lote" className="input-field-reproceso" maxLength="50"/>
              </div>
              <div className="warning-inputs-scan right"><ErrorMessage name="lote" /></div>
            </div>
            <div className="col l7 no-margin"> 
              <p className="display-box-title-reproceso">Nº de Serie</p>    
              <div className="display-box-reproceso">
                  <Field name="serie" className="input-field-reproceso" maxLength="50"/>
              </div>
              <div className="warning-inputs-scan right"><ErrorMessage name="serie" /></div>
            </div>
            <div className="col l4 right no-margin ">
            <p className="display-box-title-reproceso">SKU</p>    
              <div className="display-box-reproceso">
                  <Field name="sku" className="input-field-reproceso" maxLength="50"/>
              </div>
              <div className="warning-inputs-scan right"><ErrorMessage name="sku" /></div>
            </div>
            
            <div className="col l7 no-margin"> 
                <p className="display-box-title-reproceso">Fecha</p>
                <div className="display-box-reproceso">
                    <Field name="fecha" className="input-field-reproceso" maxLength="50"/>
                </div>
                <div className="warning-inputs-scan right"><ErrorMessage name="fecha" /></div>
            </div>

            <div className="col l4 right no-margin"> 
              <p className="display-box-title-reproceso">Grado de Rechazo</p>
              <div className="display-box-reproceso">
                  <Field name="rechazo" className="input-field-reproceso" maxLength="50"/>
              </div>
              <div className="warning-inputs-scan right"><ErrorMessage name="rechazo" /></div>
            </div>

            <div className="col s6 m4 l6  no-margin">
               <p className="display-box-title" >Informe Rechazo</p>
                <input id="file" type="file" onChange={handlerRECHAZO} style={{display:'none'}}/>
                <label htmlFor="file">
                  <i className="material-symbols-outlined add-file-ingenieria hover-hand">note_add</i>
                </label>
            </div>
          
            {/* <div className="col s6 m4 l6 push-l2 no-margin">
              <p className="display-box-title" >&nbsp;&nbsp;&nbsp;&nbsp;AT</p>
                <input id="file" type="file" onChange={handlerAT} style={{display:'none'}}/>
                <label htmlFor="file">
                  <i className="material-symbols-outlined add-file-ingenieria hover-hand">note_add</i>
                </label>  
            </div>
            <div className="col l12">
                <div className="warning-inputs-scan left-align">{error}</div>
            </div> */}

          </div>
         
          <div className="col s12 m12 l8">
            <p className="display-box-title-reproceso">Observaciones</p>
              <div className="display-box-text-reproceso">
              <Field as="textarea" name="observaciones" className="input-field-text-reproceso materialize-textarea"  />
            </div>  
            <div className="warning-inputs-scan right"><ErrorMessage name="observaciones" /></div>
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
                   ENVIAR INFORME
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
export default Informe_De_Rechazo;
