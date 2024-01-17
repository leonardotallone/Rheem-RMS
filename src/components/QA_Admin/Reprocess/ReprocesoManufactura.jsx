import Navbar from "../../Navbar/Navbar";
import QR from "../../../assets/logos/QR.png";

import { Formik, Form, Field, ErrorMessage } from "formik";


const ReprocesoManufactura = () => {

      const validar = (values) => {
        const errors = {};
        if (!values.rechazosTotales) {
          errors.rechazosTotales = "Por favor ingrese Rechazos totales";
        } else if (!values.muestrasReprocesadas){
            errors.muestrasReprocesadas = "Por favor ingrese muestras Reprocesadas"
        } else if (!values.muestrasOk){
            errors.muestrasOk = "Por favor ingrese muestras OK"
        } else if (!values.observacionReprocesoManufactura){
            errors.observacionReprocesoManufactura = "Por favor ingrese una Observación"    
        };
          return errors 
    }

        const handleSubmitReprocesoManufactura = (values) => {
        const ReprocesoManufactura = {
           rechazosTotales: values.rechazosTotales, 
            muestrasReprocesadas: values.muestrasReprocesadas,
            muestrasOk: values.muestrasOk,
            observacionReprocesoManufactura:values.observacionReprocesoManufactura,
        }
        console.log("REPROCESO MANUFACTURA", ReprocesoManufactura)
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
                <p className="font-title-create-plan">Reproceso Manufactura</p>
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
      
      <Formik initialValues={{rechazosTotales:'',muestrasReprocesadas:'', muestrasOk:'',observacionReprocesoManufactura:''}} 
                  onSubmit={handleSubmitReprocesoManufactura} validate={validar} isValidating={false} isSubmitting={false} >
                    <Form>
      <div className="container">
        <p className="form-title">COMPLETA MANUFACTURA</p>
            <div className="warning-inputs-scan">
                    <ErrorMessage name="rechazosTotales" />
                    <ErrorMessage name="muestrasReprocesadas" />
                    <ErrorMessage name="muestrasOk" />
                    <ErrorMessage name="observacionReprocesoManufactura" />
            </div>

        <div className="row">
          <div className="col s12 m12 l4 ">
            <p className="display-box-title-reproceso">Rechazos Totales</p>
            <div className="display-box-reproceso">
                <Field name="rechazosTotales" className="input-field-reproceso" maxLength="50"/>
            </div>

            <p className="display-box-title-reproceso">Muestras Reporcesada</p>
            <div className="display-box-reproceso">
                <Field name="muestrasReprocesadas" className="input-field-reproceso" maxLength="50"/>
            </div>
            

            <p className="display-box-title-reproceso">Muestras OK</p>
            <div className="display-box-reproceso">
                <Field name="muestrasOk" className="input-field-reproceso" maxLength="50"/>
            </div>
         

            <p className="display-box-title-reproceso">Observaciones Manufactura</p>
            <div className="display-box-text-reproceso-manufactura">
              <Field as="textarea" name="observacionReprocesoManufactura" className="input-field-text-reproceso materialize-textarea"  />
            </div> 
          </div>
         
          <div className="col s12 m12 l8">
            <p className="display-box-title-reproceso">Observaciones del Reproceso</p>
              <div className="display-box-text-reproceso">
               <p>Observaciones Realidadas por QA.</p>
            </div>
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
                 <button className="btn-small btn-block waves-effect waves-light button-ingresar-create-plan z-depth-2 " type="submit">
                   NOTIFICAR A LABORATORIO
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
export default ReprocesoManufactura;
