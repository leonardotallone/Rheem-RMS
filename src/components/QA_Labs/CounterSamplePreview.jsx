import Navbar from "../Navbar/Navbar";
import QR from "../../assets/logos/QR.png";


import { useState } from "react";


const CounterSamplePreview = () => {

  const [largo, setLargo]= useState(0);
  const [ancho, setAncho]= useState(0);
  const [diametroInt, setDiametroInt]= useState(0);
  const [AT1, setAT1]= useState(0);
  const [AT2, setAT2]= useState(0);
  const [AT3, setAT3]= useState(0);

  const [aprobacion, setAprobacion] = useState(false);


  const inputLargo = (e) => {e.preventDefault();setLargo(parseInt(e.target.value))}
  const inputAncho = (e) => {e.preventDefault();setAncho(parseInt(e.target.value))}
  const inputDiametroInt = (e) => {e.preventDefault();setDiametroInt(parseInt(e.target.value))}
  const inputAT1 = (e) => {e.preventDefault();setAT1(parseInt(e.target.value))}
  const inputAT2 = (e) => {e.preventDefault();setAT2(parseInt(e.target.value))}
  const inputAT3 = (e) => {e.preventDefault();setAT3(parseInt(e.target.value))}



  const inputAprobacion = (e) => {e.preventDefault();setAprobacion(e.target.value)}
  

  const validar = (values) => {
    const errors = {};
    if (!values.sku) {
      errors.sku = "Campo obligatorio";
    } else if ( isNaN(values.sku) ) {
      errors.sku = "Este campo solo acepta números";
    } else if (values.sku.length < 6) {
      errors.sku = "Minimos 6 caracteres";
    }
    return errors;
  };
  const handleSubmitAlt = (values) => {
    console.log("SKU",values);
    // navigate("/dashboard");
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

            <div className="col s12 m12 l8 no-margin">
              <div className="col s12 m12 l9">

              <p className="font-title-create-plan">Avance de Contramuestras QA</p>
              <p className="font-subtitle-create-plan">Subtitulo</p>
              {/* <div className="display-box-samples-big-scancode z-depth-1">
                  <Formik initialValues={{ sku:''}} 
                  onSubmit={handleSubmitAlt}  validate={validar} isValidating={false} isSubmitting={false} >
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
                </div> */}
                {/* <p className="display-box-title">Si no dispone de lector, ingrese el SKU manualmente.</p> */}
              </div>
            </div>

            <div className="col s11 m11 l3 ">
             
            </div>
        
            <div className="col s1 m1 l1">
              <img className="qr right " src={QR} alt=""></img>
              <i className=" right material-symbols-outlined print hover-hand">&nbsp;</i>
              
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
      
      {/* ---------------------------------------Dash------------------- */}

{/* //LOTE 1// */}

      <div className="container">
      <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
          <div className="col s1 m1 l2 no-margin">
          <div className="col l2 pull-l1">
            <p className="text-title-samples">&nbsp;</p>
          </div>          
            <div className="col l5">
                <p className="text-title-samples">LOTE</p>
            </div>
            <div className="col l5">
                    <p className="text-title-samples">CANTIDAD</p>
                </div>
              </div>

              <div className="col l10 no-margin">
                <div className="col l6 no-margin">
                        <div className="col l3">
                        <p className="text-title-samples">INICIO</p>
                    </div>
                    <div className="col l3">
                        <p className="text-title-samples">M#-2</p>
                    </div>
                    <div className="col l3">
                        <p className="text-title-samples">M#-3</p>
                    </div>
                    <div className="col l3">
                        <p className="text-title-samples">M#-4</p>
                    </div>
                </div>
                <div className="col l6 no-margin">
                        <div className="col l3 no-margin">
                        <p className="text-title-samples">M#-5</p>
                    </div>
                    <div className="col l3">
                        <p className="text-title-samples">M#-6</p>
                    </div>
                    <div className="col l3">
                        <p className="text-title-samples">M#-7</p>
                    </div>
                    <div className="col l3">
                        <p className="text-title-samples">M#-8</p>
                    </div>
                </div>




              </div>
              
           
        
            </div>
          </div>



          <div className="row"></div>
         

          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l2 no-margin">
                <div className="col l2 pull-l1">
                   <a href="qa-labs-batch-test-report">
                    <i className="material-symbols-outlined eye-sample hover-hand left">visibility</i>
                   </a>
                </div>
              <div className="col s1 m1 l5 ">
                <div className="display-box-samples-big z-depth-1 background-grey">
                  <p className="text-inside-big">1234</p>
                </div>
              </div>
              <div className="col s1 m1 l5">
                <div className="display-box-samples-big z-depth-1 background-grey">
                  <p className="text-inside-big">100</p>
                </div>
              </div>
              </div>

              <div className="col l10 no-margin">
                <div className="col l6 no-margin">
                <div className="col s1 m1 l3">
                <div className="display-box-samples-med z-depth-1 rejected">
                  <p className="text-inside-med">RECHAZADO</p>
                </div>
                <div className="display-box-samples-sm z-depth-1 rejected">
                  <p className="text-inside-sm">SNº*****</p>
                </div>
              </div>
              <div className="col s1 m1 l3">
                <div className="display-box-samples-med z-depth-1 approved">
                  <p className="text-inside-med">APROBADO</p>
                </div>
                <div className="display-box-samples-sm z-depth-1 approved">
                  <p className="text-inside-sm">SNº*****</p>
                </div>
              </div>           
              <div className="col s1 m1 l3">
                <div className="display-box-samples-med z-depth-1 testing">
                  <p className="text-inside-med">TESTING</p>
                </div>
                <div className="display-box-samples-sm z-depth-1 testing">
                  <p className="text-inside-sm">SNº*****</p>
                </div>
              </div>
              <div className="col s1 m1 l3">
                <div className="display-box-samples-med z-depth-1 testing">
                  <p className="text-inside-med">TESTING</p>
                </div>
                <div className="display-box-samples-sm z-depth-1 testing">
                  <p className="text-inside-sm">SNº*****</p>
                </div>
              </div>
                </div>

                <div className="col l6 no-margin">
                <div className="col s1 m1 l3">
                <div className="display-box-samples-med z-depth-1 testing">
                  <p className="text-inside-med">TESTING</p>
                </div>
                <div className="display-box-samples-sm z-depth-1 testing">
                  <p className="text-inside-sm">SNº*****</p>
                </div>
              </div>
              <div className="col s1 m1 l3">
                <div className="display-box-samples-med z-depth-1 available">
                  <p className="text-inside-med">DISPONIBLE</p>
                </div>
                <div className="display-box-samples-sm z-depth-1 available">
                  <p className="text-inside-sm">SNº*****</p>
                </div>
              </div>
              <div className="col s1 m1 l3">
                <div className="display-box-samples-med z-depth-1">
                  <p className="text-inside-med">NO DISPONIBLE</p>
                </div>
                <div className="display-box-samples-sm z-depth-1">
                  <p className="text-inside-sm">SNº*****</p>
                </div>
              </div>
              <div className="col s1 m1 l3">
                <div className="display-box-samples-med z-depth-1">
                  <p className="text-inside-med">NO DISPONIBLE</p>
                </div>
                <div className="display-box-samples-sm z-depth-1">
                  <p className="text-inside-sm">SNº*****</p>
                </div>
              </div>




                </div>

              </div>
              
        
              
            </div>
          </div>

          <div className="row"></div>
          <hr />

          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l2 no-margin">
                <div className="col l2 pull-l1">
                   <a href="qa-labs-batch-test-report">
                    <i className="material-symbols-outlined eye-sample hover-hand left">visibility</i>
                   </a>
                </div>
              <div className="col s1 m1 l5 ">
                <div className="display-box-samples-big z-depth-1 background-grey">
                  <p className="text-inside-big">1234</p>
                </div>
              </div>
              <div className="col s1 m1 l5">
                <div className="display-box-samples-big z-depth-1 background-grey">
                  <p className="text-inside-big">100</p>
                </div>
              </div>
              </div>

              <div className="col l10 no-margin">
                <div className="col l6 no-margin">
                <div className="col s1 m1 l3">
                <div className="display-box-samples-med z-depth-1 rejected">
                  <p className="text-inside-med">RECHAZADO</p>
                </div>
                <div className="display-box-samples-sm z-depth-1 rejected">
                  <p className="text-inside-sm">SNº*****</p>
                </div>
              </div>
              <div className="col s1 m1 l3">
                <div className="display-box-samples-med z-depth-1 approved">
                  <p className="text-inside-med">APROBADO</p>
                </div>
                <div className="display-box-samples-sm z-depth-1 approved">
                  <p className="text-inside-sm">SNº*****</p>
                </div>
              </div>           
              <div className="col s1 m1 l3">
                <div className="display-box-samples-med z-depth-1 testing">
                  <p className="text-inside-med">TESTING</p>
                </div>
                <div className="display-box-samples-sm z-depth-1 testing">
                  <p className="text-inside-sm">SNº*****</p>
                </div>
              </div>
              <div className="col s1 m1 l3">
                <div className="display-box-samples-med z-depth-1 testing">
                  <p className="text-inside-med">TESTING</p>
                </div>
                <div className="display-box-samples-sm z-depth-1 testing">
                  <p className="text-inside-sm">SNº*****</p>
                </div>
              </div>
                </div>

                <div className="col l6 no-margin">
                <div className="col s1 m1 l3">
                <div className="display-box-samples-med z-depth-1 testing">
                  <p className="text-inside-med">TESTING</p>
                </div>
                <div className="display-box-samples-sm z-depth-1 testing">
                  <p className="text-inside-sm">SNº*****</p>
                </div>
              </div>
              <div className="col s1 m1 l3">
                <div className="display-box-samples-med z-depth-1 available">
                  <p className="text-inside-med">DISPONIBLE</p>
                </div>
                <div className="display-box-samples-sm z-depth-1 available">
                  <p className="text-inside-sm">SNº*****</p>
                </div>
              </div>
              <div className="col s1 m1 l3">
                <div className="display-box-samples-med z-depth-1">
                  <p className="text-inside-med">NO DISPONIBLE</p>
                </div>
                <div className="display-box-samples-sm z-depth-1">
                  <p className="text-inside-sm">SNº*****</p>
                </div>
              </div>
              <div className="col s1 m1 l3">
                <div className="display-box-samples-med z-depth-1">
                  <p className="text-inside-med">NO DISPONIBLE</p>
                </div>
                <div className="display-box-samples-sm z-depth-1">
                  <p className="text-inside-sm">SNº*****</p>
                </div>
              </div>




                </div>

              </div>
              
        
              
            </div>
          </div>

          <div className="row"></div>
          <hr />

          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l2 no-margin">
                <div className="col l2 pull-l1">
                   <a href="qa-labs-batch-test-report">
                    <i className="material-symbols-outlined eye-sample hover-hand left">visibility</i>
                   </a>
                </div>
              <div className="col s1 m1 l5 ">
                <div className="display-box-samples-big z-depth-1 background-grey">
                  <p className="text-inside-big">1234</p>
                </div>
              </div>
              <div className="col s1 m1 l5">
                <div className="display-box-samples-big z-depth-1 background-grey">
                  <p className="text-inside-big">100</p>
                </div>
              </div>
              </div>

              <div className="col l10 no-margin">
                <div className="col l6 no-margin">
                <div className="col s1 m1 l3">
                <div className="display-box-samples-med z-depth-1 rejected">
                  <p className="text-inside-med">RECHAZADO</p>
                </div>
                <div className="display-box-samples-sm z-depth-1 rejected">
                  <p className="text-inside-sm">SNº*****</p>
                </div>
              </div>
              <div className="col s1 m1 l3">
                <div className="display-box-samples-med z-depth-1 approved">
                  <p className="text-inside-med">APROBADO</p>
                </div>
                <div className="display-box-samples-sm z-depth-1 approved">
                  <p className="text-inside-sm">SNº*****</p>
                </div>
              </div>           
              <div className="col s1 m1 l3">
                <div className="display-box-samples-med z-depth-1 testing">
                  <p className="text-inside-med">TESTING</p>
                </div>
                <div className="display-box-samples-sm z-depth-1 testing">
                  <p className="text-inside-sm">SNº*****</p>
                </div>
              </div>
              <div className="col s1 m1 l3">
                <div className="display-box-samples-med z-depth-1 testing">
                  <p className="text-inside-med">TESTING</p>
                </div>
                <div className="display-box-samples-sm z-depth-1 testing">
                  <p className="text-inside-sm">SNº*****</p>
                </div>
              </div>
                </div>

                <div className="col l6 no-margin">
                <div className="col s1 m1 l3">
                <div className="display-box-samples-med z-depth-1 testing">
                  <p className="text-inside-med">TESTING</p>
                </div>
                <div className="display-box-samples-sm z-depth-1 testing">
                  <p className="text-inside-sm">SNº*****</p>
                </div>
              </div>
              <div className="col s1 m1 l3">
                <div className="display-box-samples-med z-depth-1 available">
                  <p className="text-inside-med">DISPONIBLE</p>
                </div>
                <div className="display-box-samples-sm z-depth-1 available">
                  <p className="text-inside-sm">SNº*****</p>
                </div>
              </div>
              <div className="col s1 m1 l3">
                <div className="display-box-samples-med z-depth-1">
                  <p className="text-inside-med">NO DISPONIBLE</p>
                </div>
                <div className="display-box-samples-sm z-depth-1">
                  <p className="text-inside-sm">SNº*****</p>
                </div>
              </div>
              <div className="col s1 m1 l3">
                <div className="display-box-samples-med z-depth-1">
                  <p className="text-inside-med">NO DISPONIBLE</p>
                </div>
                <div className="display-box-samples-sm z-depth-1">
                  <p className="text-inside-sm">SNº*****</p>
                </div>
              </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row"></div>
          <hr />

          <div className="row row-fix">
          <div className="col s12 m12 l12 center-align no-margin">
              <div className="col s1 m1 l2 no-margin">
                <div className="col l2 pull-l1">
                   <a href="qa-labs-batch-test-report">
                    <i className="material-symbols-outlined eye-sample hover-hand left">visibility</i>
                   </a>
                </div>
              <div className="col s1 m1 l5 ">
                <div className="display-box-samples-big z-depth-1 background-grey">
                  <p className="text-inside-big">1234</p>
                </div>
              </div>
              <div className="col s1 m1 l5">
                <div className="display-box-samples-big z-depth-1 background-grey">
                  <p className="text-inside-big">100</p>
                </div>
              </div>
              </div>

              <div className="col l10 no-margin">
                <div className="col l6 no-margin">
                <div className="col s1 m1 l3">
                <div className="display-box-samples-med z-depth-1 rejected">
                  <p className="text-inside-med">RECHAZADO</p>
                </div>
                <div className="display-box-samples-sm z-depth-1 rejected">
                  <p className="text-inside-sm">SNº*****</p>
                </div>
              </div>
              <div className="col s1 m1 l3">
                <div className="display-box-samples-med z-depth-1 approved">
                  <p className="text-inside-med">APROBADO</p>
                </div>
                <div className="display-box-samples-sm z-depth-1 approved">
                  <p className="text-inside-sm">SNº*****</p>
                </div>
              </div>           
              <div className="col s1 m1 l3">
                <div className="display-box-samples-med z-depth-1 testing">
                  <p className="text-inside-med">TESTING</p>
                </div>
                <div className="display-box-samples-sm z-depth-1 testing">
                  <p className="text-inside-sm">SNº*****</p>
                </div>
              </div>
              <div className="col s1 m1 l3">
                <div className="display-box-samples-med z-depth-1 testing">
                  <p className="text-inside-med">TESTING</p>
                </div>
                <div className="display-box-samples-sm z-depth-1 testing">
                  <p className="text-inside-sm">SNº*****</p>
                </div>
              </div>
                </div>
                <div className="col l6 no-margin">
                <div className="col s1 m1 l3">
                <div className="display-box-samples-med z-depth-1 testing">
                  <p className="text-inside-med">TESTING</p>
                </div>
                <div className="display-box-samples-sm z-depth-1 testing">
                  <p className="text-inside-sm">SNº*****</p>
                </div>
              </div>
              <div className="col s1 m1 l3">
                <div className="display-box-samples-med z-depth-1 available">
                  <p className="text-inside-med">DISPONIBLE</p>
                </div>
                <div className="display-box-samples-sm z-depth-1 available">
                  <p className="text-inside-sm">SNº*****</p>
                </div>
              </div>
              <div className="col s1 m1 l3">
                <div className="display-box-samples-med z-depth-1">
                  <p className="text-inside-med">NO DISPONIBLE</p>
                </div>
                <div className="display-box-samples-sm z-depth-1">
                  <p className="text-inside-sm">SNº*****</p>
                </div>
              </div>
              <div className="col s1 m1 l3">
                <div className="display-box-samples-med z-depth-1">
                  <p className="text-inside-med">NO DISPONIBLE</p>
                </div>
                <div className="display-box-samples-sm z-depth-1">
                  <p className="text-inside-sm">SNº*****</p>
                </div>
              </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row"></div>
          <hr />

         
         


        


          
          <div className="row">
            <div className="col s12 m12 l12 "><a href="/dashboard">
              <button className="btn-small btn-block waves-effect waves-light button-regresar-create-plan z-depth-2" type="button">
                regresar
              </button></a>
            </div>
        </div>  

      </div>
    </>
  );
};
export default CounterSamplePreview;
