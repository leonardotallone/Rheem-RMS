import Navbar from "../Navbar/Navbar";
import QR from "../../assets/logos/QR.png";
import { useState } from "react";
import Popup from "reactjs-popup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from 'react-router-dom';
import { useParams} from "react-router";

const Production_Components_Details = () => {

const [userbmp] = useState(false);

const [useAlt, setUseAlt] = useState(false);
const [useAltSuccess, setUseAltSuccess] = useState(false);
const [buyOrder, setBuyOrder] = useState(false);

const [picking, setPicking] = useState(false);
const [pickingSuccess, setPickingSuccess] = useState(false);

const useAltOn = () =>{ setUseAlt(true); };
const PickingOn = () =>{ setPicking(true);};
const buyOrderOn =() =>{ setBuyOrder(true); };

const closeUseAlt = () =>{ setUseAlt(false); };
const closeUseAltSuccess = () =>{ setUseAltSuccess(false);};

const closePicking = () =>{ setPicking(false);};
const closePickingSuccess = () =>{ setPickingSuccess(false);};

const closeOrder = () =>{ setBuyOrder(false);};


const {idPlan} = useParams();
const navigate = useNavigate();

const handleGoBack = () => {
  navigate(`/production-batchs-list/${idPlan}`);
};

const handleSubmitAlt = (values) => {
  console.log("USO ALTERNATIVO",values);
  setUseAlt(false);
  setUseAltSuccess(true);
  // navigate("/dashboard");
};

const handleSubmitPicking = (values) => {
  console.log("PICKING VALUES",values);
  setPicking(false);
  setPickingSuccess(true);
  // navigate("/dashboard");
};





const validar_usoAlt = (values) => {
  const errors = {};

  if (!values.skuAntiguo) {
    errors.skuAntiguo = "Campo obligatorio";
  } else if ( isNaN(values.skuAntiguo) ) {
    errors.skuAntiguo = "Este campo solo acepta números";
  } else if (values.skuAntiguo.length < 6) {
    errors.skuAntiguo = "Minimos 6 caracteres";
  }

  if (!values.skuActual) {
    errors.skuActual = "Campo obligatorio";
  } else if ( isNaN(values.skuActual) ) {
    errors.skuActual = "Este campo solo acepta números";
  } else if (values.skuActual.length < 6) {
    errors.skuActual = "Minimos 6 caracteres";
  }

  if (!values.componenteAlt) {
    errors.componenteAlt = "Campo obligatorio";
  } else if ( isNaN(values.componenteAlt) ) {
    errors.componenteAlt = "Este campo solo acepta números";
  } else if (values.componenteAlt.length < 6) {
    errors.componenteAlt = "Minimos 6 caracteres";
  }
  return errors;
};

const validar_picking = (values) => {
  const errors = {};

  if (!values.cantidad) {
    errors.cantidad = "Campo obligatorio";
  } else if ( isNaN(values.cantidad) ) {
    errors.cantidad = "Este campo solo acepta números";
  } else if (values.cantidad.length < 2) {
    errors.cantidad = "Cantidad minima 10";
  }

  if (!values.orderNumber) {
    errors.orderNumber = "Campo obligatorio";
  } else if ( isNaN(values.orderNumber) ) {
    errors.orderNumber = "Este campo solo acepta números";
  } else if (values.orderNumber.length > 8) {
    errors.orderNumber = "La orden tiene 8 digitos";
  }
  return errors;
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

            <div className="col s7 m8 l8 no-margin">
              <p className="font-title-plan-list">Listado de Componentes</p>
              <p className="font-subtitle-plan-list">SUBTITULO</p>
            </div>
        

            <div className="col s11 m5 l3 push-l1 no-margin">
              <p className="font-form-plan-list left ">RC:16-062</p>
              <p className="font-date-plan-list left ">FECHA DE REGISTRO: 23-06-2023</p>
              <p className="font-plan-plan-list left ">PLAN Nº: D0103-2023</p>
            </div>

            <div className="col s1 m1 l1 push-m6">
              <img className="qr right " src={QR} alt=""></img>
              <i className=" right material-symbols-outlined print">print</i>
            </div>

          </div>
        </div>
      </div>

       {/* ---------------------------------------Formulario------------------- */}

       <div className="container">
       <div className="row">
          <div className="col s6 m4 l12">
            <p className="plan-text">CP Nº:</p>
            <p className="plan-number">&emsp;D0105-2023</p>
          </div>
        </div>

    <div className="row">
      <div className="col s12 m12 l12 no-margin">
            {userbmp === true?
            <div className="col s4 m4 l1 center-align">
                <p className="text-inside-box">USO ALT.</p> 
            </div> :null}
            <div className="col s4 m4 l2 center-align">
                <p className="text-inside-box">COMPONENTE</p> 
            </div> 
            <div className="col s6 m5 l3 center-align">
                <p className="text-inside-box">DESCRIPCION</p> 
            </div>
            <div className="col s2 m3 l1 center-align">
                <p className="text-inside-box">CANTIDAD SOLICITADA</p> 
            </div>
            <div className="col s2 m3 l1 center-align">
                <p className="text-inside-box">CANTIDAD INGRESADA</p> 
            </div>
            {userbmp === true?<>
            <div className="col s2 m3 l2 center-align">
                <p className="text-inside-box">ULTIMA OC</p> 
            </div>
            <div className="col s2 m3 l1 center-align">
                <p className="text-inside-box">PICKING</p> 
            </div>
            <div className="col s2 m3 l1 center-align">
                <p className="text-inside-box">LISTA OC</p> 
            </div></>:null}
      </div>
    </div>

    <div className="row ">
      <div className="col s12 m12 l12 no-margin">
      {userbmp === true?
        <div className="col s4 m4 l1 center-align">
            <div onClick={useAltOn} className="display-box-components-yellow z-depth-1  hover-hand waves-effect waves-light btn-block">
            <i className="material-symbols-outlined">power_settings_new</i>  
            </div>
      </div>:null}

      <div className="col s6 m5 l2 center-align ">
        <div className="display-box-components z-depth-1 ">
            <p className="text-inside-box">12345678910</p> 
        </div>

     </div>
     <div className="col s2 m3 l3 center-align">
            <div className="display-box-components z-depth-1 center-align">
                  <p className="text-inside-box">CFRHM IOB 13L BA A BL ME</p> 
            </div>
     </div>

     <div className="col s2 m3 l1 center-align">
            <div className="display-box-components z-depth-1 center-align">
                  <p className="text-inside-box">200</p> 
            </div>
     </div>
     <div className="col s2 m3 l1 center-align">
            <div className="display-box-components z-depth-1 center-align">
                  <p className="text-inside-box">170</p> 
            </div>
     </div>
     {userbmp === true?<>
     <div className="col s2 m3 l2 center-align">
            <div className="display-box-components z-depth-1 center-align">
                  <p className="text-inside-box">12345678910</p> 
            </div>
     </div>
     <div className="col s2 m3 l1 center-align">
            <div onClick={PickingOn}  className="display-box-components-yellow z-depth-1 center-align hover-hand waves-effect waves-light btn-block">
            <i className="material-symbols-outlined">qr_code_scanner</i> 
            </div>
     </div>
     <div className="col s2 m3 l1 center-align">
            <div onClick={buyOrderOn} className="display-box-components-yellow z-depth-1 center-align hover-hand waves-effect waves-light btn-block">
            <i className="material-symbols-outlined">list_alt</i> 
            </div>
     </div></>:null}
      </div>
    </div>

    <div className="row ">
      <div className="col s12 m12 l12 no-margin">
      {userbmp === true?
        <div className="col s4 m4 l1 center-align">
            <div onClick={useAltOn} className="display-box-components-yellow z-depth-1  hover-hand waves-effect waves-light btn-block">
            <i className="material-symbols-outlined">power_settings_new</i>  
            </div>
      </div>:null}

      <div className="col s6 m5 l2 center-align ">
        <div className="display-box-components z-depth-1 ">
            <p className="text-inside-box">12345678910</p> 
        </div>

     </div>
     <div className="col s2 m3 l3 center-align">
            <div className="display-box-components z-depth-1 center-align">
                  <p className="text-inside-box">CFRHM IOB 13L BA A BL ME</p> 
            </div>
     </div>

     <div className="col s2 m3 l1 center-align">
            <div className="display-box-components z-depth-1 center-align">
                  <p className="text-inside-box">200</p> 
            </div>
     </div>
     <div className="col s2 m3 l1 center-align">
            <div className="display-box-components z-depth-1 center-align">
                  <p className="text-inside-box">170</p> 
            </div>
     </div>
     {userbmp === true?<>
     <div className="col s2 m3 l2 center-align">
            <div className="display-box-components z-depth-1 center-align">
                  <p className="text-inside-box">12345678910</p> 
            </div>
     </div>
     <div className="col s2 m3 l1 center-align">
            <div onClick={PickingOn}  className="display-box-components-yellow z-depth-1 center-align hover-hand waves-effect waves-light btn-block">
            <i className="material-symbols-outlined">qr_code_scanner</i> 
            </div>
     </div>
     <div className="col s2 m3 l1 center-align">
            <div onClick={buyOrderOn} className="display-box-components-yellow z-depth-1 center-align hover-hand waves-effect waves-light btn-block">
            <i className="material-symbols-outlined">list_alt</i> 
            </div>
     </div></>:null}
      </div>
    </div>

    <div className="row ">
      <div className="col s12 m12 l12 no-margin">
      {userbmp === true?
        <div className="col s4 m4 l1 center-align">
            <div onClick={useAltOn} className="display-box-components-yellow z-depth-1  hover-hand waves-effect waves-light btn-block">
            <i className="material-symbols-outlined">power_settings_new</i>  
            </div>
      </div>:null}

      <div className="col s6 m5 l2 center-align ">
        <div className="display-box-components z-depth-1 ">
            <p className="text-inside-box">12345678910</p> 
        </div>

     </div>
     <div className="col s2 m3 l3 center-align">
            <div className="display-box-components z-depth-1 center-align">
                  <p className="text-inside-box">CFRHM IOB 13L BA A BL ME</p> 
            </div>
     </div>

     <div className="col s2 m3 l1 center-align">
            <div className="display-box-components z-depth-1 center-align">
                  <p className="text-inside-box">200</p> 
            </div>
     </div>
     <div className="col s2 m3 l1 center-align">
            <div className="display-box-components z-depth-1 center-align">
                  <p className="text-inside-box">170</p> 
            </div>
     </div>
     {userbmp === true?<>
     <div className="col s2 m3 l2 center-align">
            <div className="display-box-components z-depth-1 center-align">
                  <p className="text-inside-box">12345678910</p> 
            </div>
     </div>
     <div className="col s2 m3 l1 center-align">
            <div onClick={PickingOn}  className="display-box-components-yellow z-depth-1 center-align hover-hand waves-effect waves-light btn-block">
            <i className="material-symbols-outlined">qr_code_scanner</i> 
            </div>
     </div>
     <div className="col s2 m3 l1 center-align">
            <div onClick={buyOrderOn} className="display-box-components-yellow z-depth-1 center-align hover-hand waves-effect waves-light btn-block">
            <i className="material-symbols-outlined">list_alt</i> 
            </div>
     </div></>:null}
      </div>
    </div>

    <div className="row ">
      <div className="col s12 m12 l12 no-margin">
      {userbmp === true?
        <div className="col s4 m4 l1 center-align">
            <div onClick={useAltOn} className="display-box-components-yellow z-depth-1  hover-hand waves-effect waves-light btn-block">
            <i className="material-symbols-outlined">power_settings_new</i>  
            </div>
      </div>:null}

      <div className="col s6 m5 l2 center-align ">
        <div className="display-box-components z-depth-1 ">
            <p className="text-inside-box">12345678910</p> 
        </div>

     </div>
     <div className="col s2 m3 l3 center-align">
            <div className="display-box-components z-depth-1 center-align">
                  <p className="text-inside-box">CFRHM IOB 13L BA A BL ME</p> 
            </div>
     </div>

     <div className="col s2 m3 l1 center-align">
            <div className="display-box-components z-depth-1 center-align">
                  <p className="text-inside-box">200</p> 
            </div>
     </div>
     <div className="col s2 m3 l1 center-align">
            <div className="display-box-components z-depth-1 center-align">
                  <p className="text-inside-box">170</p> 
            </div>
     </div>
     {userbmp === true?<>
     <div className="col s2 m3 l2 center-align">
            <div className="display-box-components z-depth-1 center-align">
                  <p className="text-inside-box">12345678910</p> 
            </div>
     </div>
     <div className="col s2 m3 l1 center-align">
            <div onClick={PickingOn}  className="display-box-components-yellow z-depth-1 center-align hover-hand waves-effect waves-light btn-block">
            <i className="material-symbols-outlined">qr_code_scanner</i> 
            </div>
     </div>
     <div className="col s2 m3 l1 center-align">
            <div onClick={buyOrderOn} className="display-box-components-yellow z-depth-1 center-align hover-hand waves-effect waves-light btn-block">
            <i className="material-symbols-outlined">list_alt</i> 
            </div>
     </div></>:null}
      </div>
    </div>

  

    

    



         {/* PAGINADO */}

         <div className="col s12 m12 l12 center">
            <ul className="pagination ">
             <li className="disabled"><a href="#!"><i className="material-icons chevron">chevron_left</i></a></li>
             <li className="active"><a className="font-pagination-seslected"href="#!">1</a></li>
             <li className="waves-effect"><a className="font-pagination" href="#!">2</a></li>
             <li className="waves-effect"><a className="font-pagination" href="#!">3</a></li>
             <li className="waves-effect"><a className="font-pagination" href="#!">4</a></li>
             <li className="waves-effect"><a className="font-pagination" href="#!">5</a></li>
             <li className="waves-effect"><a className="font-pagination" href="#!"><i className="material-icons chevron ">chevron_right</i></a></li>
            </ul>
          </div>

        {/* botones  */}
        <div className="row">

          <div className="col s12 m12 l12 no-margin">
              <button onClick={handleGoBack} className="btn-small btn-block waves-effect waves-light z-depth-2 button-regresar-plan-list " type="submit">
                regresar
              </button>
            </div>
            {/* row */} 
            </div>

      {/* container */}
       </div>
       {/* ------------------- POPUP USO ALTERNATIVO  -----------------------*/}
       <Popup contentStyle={{background: "0"}} open={useAlt} closeOnDocumentClick onClose={closeUseAlt} lockScroll = {true}>
               <div className="z-depth-1 forms-pop-up"  >
                <div className="row row-fix ">
                  <div className="col s12 m12 l12 no-margin">
                  <Formik initialValues={{ skuAntiguo: "", skuActual: "", componenteAlt:''}} 
                  onSubmit={handleSubmitAlt}  validate={validar_usoAlt} isValidating={false} isSubmitting={false} >
                    <Form>
                          <div className="">
                              <div className="input-field">
                                <label className="label-text" htmlFor="skuAntiguo" >SKU Antiguo</label>
                                  <Field name="skuAntiguo" type="text" />
                              </div>
                              <div className="warning-inputs right"><ErrorMessage name="skuAntiguo" /></div>

                              <div className="input-field">
                                <label className="label-text" htmlFor="skuActual">SKU Actual</label>
                                  <Field name="skuActual" type="text" />
                              </div>
                              <div className="warning-inputs right"><ErrorMessage name="skuActual" /></div>

                              <div className="input-field">
                                <label className="label-text" htmlFor="componenteAlt">Nº Componente Alt.</label>
                                  <Field name="componenteAlt" type="text" />
                              </div>
                              <div className="warning-inputs right"><ErrorMessage name="componenteAlt" /></div>
                          </div>
                     
                     <div className="col s6 m6 l8 no-margin">
                        <div onClick={closeUseAlt} className="button-alert waves-effect waves-dark btn-block ">Cancelar</div >
                     </div>
                      <div className="col s6 m6 l4 no-margin ">
                       <button className="button-alert waves-effect waves-dark btn-block right-align" type="submit">Guardar</button>
                      </div>
                    </Form>
                  </Formik>
                  </div>
                </div>
               </div>
              </Popup>
              <Popup contentStyle={{background: "0"}} open={useAltSuccess} closeOnDocumentClick onClose={closeUseAltSuccess} lockScroll = {true}>
               <div className="alert z-depth-1" >
                <div className="row row-fix ">
                  <div className="col s12 m12 l12 no-margin">
                    <div className="atention center-align">Uso Alternativo exitoso</div>
                  </div>
                  <div className="col s12 m12 l12 no-margin divisor-bottom-line">
                    <div  className="alert-msg center-align ">Muchas Gracias.</div>
                  </div>
                </div>

                <div className="row">
                      <div className="col s12 m12 l12 center">
                       <div onClick={closeUseAltSuccess} className="button-alert waves-effect waves-dark btn-block">Continuar</div>
                      </div>
                </div>
               </div>
              </Popup>
       {/* ------------------- POPUP PICKING  -----------------------*/}
       <Popup contentStyle={{background: "0"}} open={picking} closeOnDocumentClick onClose={closePicking} lockScroll = {true}>
               <div className="z-depth-1 forms-pop-up"  >
                <div className="row row-fix ">
                  <div className="col s12 m12 l12 no-margin">
                  <Formik initialValues={{ cantidad: "", orderNumber: ''}} 
                  onSubmit={handleSubmitPicking} validate={validar_picking} isValidating={false} isSubmitting={false} >
                    <Form>
                              <div className="input-field">
                                <label className="label-text" htmlFor="cantidad">Cantidad</label>
                                  <Field name="cantidad" type="text" />
                              </div>
                              <div className="warning-inputs right"><ErrorMessage name="cantidad" /></div>

                              <div className="input-field">
                              <i className="material-icons prefix grey-darken-4 hover-hand">qr_code_scanner</i>
                                <label className="label-text" htmlFor="orderNumber">Nº de Orden</label>
                                  <Field name="orderNumber" type="text" />
                              </div>
                              <div className="warning-inputs right"><ErrorMessage name="orderNumber" /></div>

                     <div className="col s6 m6 l8 no-margin">
                        <div onClick={closePicking} className="button-alert waves-effect waves-dark btn-block ">Cancelar</div >
                     </div>
                      <div className="col s6 m6 l4 no-margin ">
                       <button className="button-alert waves-effect waves-dark btn-block right-align" type="submit">Guardar</button>
                      </div>
                    </Form>
                  </Formik>
                  </div>
                </div>
               </div>
              </Popup>
              <Popup contentStyle={{background: "0"}} open={pickingSuccess} closeOnDocumentClick onClose={closePickingSuccess} lockScroll = {true}>
               <div className="alert z-depth-1" >
                <div className="row row-fix ">
                  <div className="col s12 m12 l12 no-margin">
                    <div className="atention center-align">Picking realizado Exitosamente</div>
                  </div>
                  <div className="col s12 m12 l12 no-margin divisor-bottom-line">
                    <div  className="alert-msg center-align ">Muchas Gracias.</div>
                  </div>
                </div>

                <div className="row">
                      <div className="col s12 m12 l12 center">
                       <div onClick={closePickingSuccess} className="button-alert waves-effect waves-dark btn-block">Continuar</div>
                      </div>
                </div>
               </div>
              </Popup>

              {/* ------------------- POPUP ORDER LIST  -----------------------*/}
       <Popup contentStyle={{background: "0"}} open={buyOrder} closeOnDocumentClick onClose={closeOrder} lockScroll = {true}>
               <div className="z-depth-1 forms-pop-up"  >
                <div className="row row-fix ">
                  <div className="col s12 m12 l12 no-margin">
                              <div className="col m6 m6 l6 ">
                                  <p className="display-box-title-component">Cantidad</p>
                                  </div>
                              <div className="col m6 m6 l6">
                                  <p className="display-box-title-component">Nº Orden</p>
                              </div>
                              <div className="col m6 m6 l6 ">
                                    <div className="display-box-component valign-wrapper">
                                        <p>200</p>
                                    </div>
                              </div>
                              <div className="col m6 m6 l6 ">
                                    <div className="display-box-component valign-wrapper">
                                        <p>12345678910</p>
                                    </div>
                              </div>
                              <div className="col m6 m6 l6 ">
                                    <div className="display-box-component valign-wrapper">
                                        <p>300</p>
                                    </div>
                              </div>
                              <div className="col m6 m6 l6 ">
                                    <div className="display-box-component valign-wrapper">
                                        <p>12345678910</p>
                                    </div>
                              </div>
                              <div className="col m6 m6 l6 ">
                                    <div className="display-box-component valign-wrapper">
                                        <p>400</p>
                                    </div>
                              </div>
                              <div className="col m6 m6 l6 ">
                                    <div className="display-box-component valign-wrapper">
                                        <p>12345678910</p>
                                    </div>
                              </div>
                  </div>         
                     <div className="col s12 m12 l12 no-margin">
                        <div onClick={closeOrder} className="button-alert waves-effect waves-dark btn-block center-align">Cerrar</div >
                     </div>
                </div>
               </div>
              </Popup>
              
      </>
    );
  };
  export default Production_Components_Details;