import Navbar from "../Navbar/Navbar";
import QR from "../../assets/logos/QR.png";

import { Formik, Form, Field, ErrorMessage } from "formik";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

import { useNavigate } from 'react-router-dom';
import { useParams} from "react-router";


const Production_Line_Test_Bench = () => {

    const exportToPDF = () => {
        const input = document.getElementById('pdf');
        html2canvas(input,{
          logging: true,
          useCORS: true,
          allowTaint: true,
          scale:3.5,
        })
          .then((canvas) => {     
            const imgData = canvas.toDataURL('image/png', 1);
            const pdf = new jsPDF("p","mm", "a3", true,);
            const imgProps= pdf.getImageProperties(imgData);
            const pdfWidth =  pdf.internal.pageSize.getWidth();
            const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
            pdf.addImage(imgData, 'PNG',0,0, pdfWidth,pdfHeight,"FAST");
            pdf.save('Banco de Prueba.pdf');
          });
      };
  

  const validarSKU = (values) => {
    const errors = {};
    // const re = /^[0-9]{8}[a-zA-Z]{2}$/
    if (!values.codigoDeChasis) {
      errors.sku = "Campo obligatorio";
    }
   
    return errors
  };
  const handleSubmitCodigoDeChasis = (values) => {
    const codigoDeChasis = {codigoDeChasis: values.codigoDeChasis}
    console.log("CODIGO DE CHASIS", codigoDeChasis)
  };

  const {idPlan} = useParams();
const navigate = useNavigate();

const handleGoBack = () => {
navigate(`/production-batchs-list/${idPlan}`);
};
  return (
    <div id="pdf">
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
                <p className="subtitle-production-line in-line"> &nbsp;(Test Funcional)</p>
            </div>
            <div className="col s12 m7 l2">
                 <p className="font-form-create-plan">RC:16-062</p>  
              </div>
              <div className="col s1 m1 l1 right">
              <img className="qr right " src={QR} alt=""></img>
              <i onClick={exportToPDF} className=" right material-symbols-outlined print hover-hand">print</i>
            </div>
            <div className="col s12 m12 l7 no-margin">
              <div className="col s12 m12 l9">

              <p className="font-subtitle-create-plan">Escenee el código de chasis a ensayar</p>
              <div className="display-box-fine-tunning-scancode z-depth-1">
                  <Formik initialValues={{ codigoDeChasis:''}} 
                  onSubmit={handleSubmitCodigoDeChasis}  validate={validarSKU} isValidating={false} isSubmitting={false} >
                    <Form>

                  <div className="col s3 m1 l1 ">
                    <button type="submit" className="hover-hand">
                      <i className="material-symbols-outlined qr-input">qr_code_scanner</i>
                    </button>
                  </div>
                  <div className="col s9 m10 push-m1 l10 push-l1 ">
                              <div className="input-field">
                                <label className="label-text-scan" htmlFor="sku" >Código de Chasis </label>
                                  <Field name="sku" type="text" />
                              <div className="warning-inputs-scan right"><ErrorMessage name="sku" /></div>
                              </div>
                  </div>
                    </Form>
                  </Formik>
                </div>
                <p className="display-box-title">Si no dispone de lector, ingrese el código manualmente.</p>
              </div>
            </div>
            <div className="col s12 m7 l2 push-l2">
                    <p className="font-tunning-black">LOTE: 12345</p>
                    <p className="font-tunning-black">SKU: 12345"</p>
                    <p className="font-tunning-black">DESCRIPCION: ARM-J26-KLM</p>
                    <p className="font-tunning-black">USUARIO: NOMBRE APELLIDO</p> 
                </div>

          </div>
        </div>
      

      {/* ---------------------------------------Formulario------------------- */}
 
        <div className="container">

        <div className="row"></div>

        <div className="row">
        <div className="col l12 no-margin">
            <p className="display-box-title-ensayo-QA left">PRUEBAS FUNCIONALES</p>            
        </div>
        <div className="col l6 no-margin">
        <div className="col l7 display-box-test-setup z-depth-1 background-grey">
            <p className="text-production-register">FECHA</p>
        </div>
        <div className="col l3 push-l1 display-box-test-setup z-depth-1 nominal center">
            <p className="text-production-register">FECHA</p>
        </div>
        <div className="col l7 display-box-test-setup z-depth-1 background-grey">
            <p className="text-production-register">HORA</p>
        </div>
        <div className="col l3 push-l1 display-box-test-setup z-depth-1 nominal center">
            <p className="text-production-register">HORA</p>
        </div>
    </div>

    <div className="col l6 push-l1 no-margin ">
        <div className="col l7 pull-l1 display-box-test-setup z-depth-1 background-grey">
            <p className="text-production-register">MODELO</p>
        </div>
        <div className="col l3 display-box-test-setup z-depth-1 nominal center">
            <p className="text-production-register">MODELO</p>
        </div>
        <div className="col l7 pull-l1 display-box-test-setup z-depth-1 background-grey">
            <p className="text-production-register">PROBADOR</p>
        </div>
        <div className="col l3 display-box-test-setup z-depth-1 nominal center">
            <p className="text-production-register">PROBADOR</p>
        </div>      
        </div>
    </div> 
       

{/* PRUEBAS FUNCIONALES */}
              
        <div className="row">
        <div className="col l12 no-margin">
            <p className="display-box-title-ensayo-QA left">PRUEBAS FUNCIONALES</p>            
        </div>
        <div className="col l6 no-margin">
        <div className="col l7 display-box-test-setup z-depth-1 background-grey">
            <p className="text-production-register">Fuga de Gas</p>
        </div>
        <div className="col l3 push-l1 display-box-test-setup z-depth-1 nominal center">
            <p className="text-production-register">1234 </p>
        </div>
    
        <div className="col l7 display-box-test-setup z-depth-1 background-grey">
            <p className="text-production-register">Fuga de Agua</p>
        </div>
        <div className="col l3 push-l1 display-box-test-setup z-depth-1 nominal center">
            <p className="text-production-register">1234</p>
        </div>

        <div className="col l7 display-box-test-setup z-depth-1 background-grey">
            <p className="text-production-register">Valor Presión Alta</p>
        </div>
        <div className="col l3 push-l1 display-box-test-setup z-depth-1 nominal center">
            <p className="text-production-register">1234</p>
        </div>
         
        <div className="col l7 display-box-test-setup z-depth-1 background-grey">
            <p className="text-production-register">Programación</p>
        </div>
        <div className="col l3 push-l1 display-box-test-setup z-depth-1 nominal center">
            <p className="text-production-register">1234</p>
        </div>

        <div className="col l7 display-box-test-setup z-depth-1 background-grey">
            <p className="text-production-register">Q Operativo</p>
        </div>
        <div className="col l3 push-l1 display-box-test-setup z-depth-1 nominal center">
            <p className="text-production-register">1234</p>
        </div>

        <div className="col l7 display-box-test-setup z-depth-1 background-grey">
            <p className="text-production-register">Q Encendido</p>
        </div>
        <div className="col l3 push-l1 display-box-test-setup z-depth-1 nominal center">
            <p className="text-production-register">1234</p>
        </div>
    </div>

    {/* COLUMNA DER */}

    <div className="col l6 push-l1 no-margin">
        <div className="col l7 pull-l1 display-box-test-setup z-depth-1 background-grey">
            <p className="text-production-register">Ciclo Final</p>
        </div>
        <div className="col l3  display-box-test-setup z-depth-1 nominal center">
            <p className="text-production-register">1234</p>
        </div>

        <div className="col l7 pull-l1 display-box-test-setup z-depth-1 background-grey">
            <p className="text-production-register">Resultado Prueba</p>
        </div>
        <div className="col l3 display-box-test-setup z-depth-1 nominal center">
            <p className="text-production-register">1234</p>
        </div>

        <div className="col l7 pull-l1 display-box-test-setup z-depth-1 background-grey">
            <p className="text-production-register">Tiempo de Ciclo</p>
        </div>
        <div className="col l3  display-box-test-setup z-depth-1 nominal center">
            <p className="text-production-register">1234</p>
        </div>
         
        <div className="col l7 pull-l1 display-box-test-setup z-depth-1 background-grey">
            <p className="text-production-register">Número de Programa</p>
        </div>
        <div className="col l3  display-box-test-setup z-depth-1 nominal center">
            <p className="text-production-register">1234</p>
        </div>

        <div className="col l7 pull-l1 display-box-test-setup z-depth-1 background-grey">
            <p className="text-production-register">Código de Barra</p>
        </div>
        <div className="col l3 display-box-test-setup z-depth-1 nominal center">
            <p className="text-production-register">1234</p>
        </div> 
        </div>  
        </div> 
         
      

    


{/* PROGRAMACION DE CALEFONES */}
{/* COL IZQ */}
  
    <div className="row">
        <div className="col l12 no-margin">
            <p className="display-box-title-ensayo-QA left">PROGRAMACION DE CALEFONES</p>            
        </div>
        <div className="col l6 no-margin">
        <div className="col l7 display-box-test-setup z-depth-1 background-grey">
            <p className="text-production-register">FA</p>
        </div>
        <div className="col l3  push-l1 display-box-test-setup z-depth-1 nominal center">
            <p className="text-production-register">10</p>
        </div>
    
        <div className="col l7 display-box-test-setup z-depth-1 background-grey">
            <p className="text-production-register">PH_DEC</p>
        </div>
        <div className="col l3 push-l1 display-box-test-setup z-depth-1 nominal center">
            <p className="text-production-register">10</p>
        </div>

        <div className="col l7 display-box-test-setup z-depth-1 background-grey">
            <p className="text-production-register">PH_mmca</p>
        </div>
        <div className="col l3 push-l1 display-box-test-setup z-depth-1 nominal center">
            <p className="text-production-register">10</p>
        </div>
         
        <div className="col l7 display-box-test-setup z-depth-1 background-grey">
            <p className="text-production-register">PL_DEC</p>
        </div>
        <div className="col l3 push-l1 display-box-test-setup z-depth-1 nominal center">
            <p className="text-production-register">10</p>
        </div>

        <div className="col l7 display-box-test-setup z-depth-1 background-grey">
            <p className="text-production-register">PL_mmca</p>
        </div>
        <div className="col l3 push-l1 display-box-test-setup z-depth-1 nominal center">
            <p className="text-production-register">10</p>
        </div>

        <div className="col l7 display-box-test-setup z-depth-1 background-grey">
            <p className="text-production-register">DH_DEC</p>
        </div>
        <div className="col l3 push-l1 display-box-test-setup z-depth-1 nominal center">
            <p className="text-production-register">10</p>
        </div>

        <div className="col l7 display-box-test-setup z-depth-1 background-grey">
            <p className="text-production-register">DH_mmca</p>
        </div>
        <div className="col l3 push-l1 display-box-test-setup z-depth-1 nominal center">
            <p className="text-production-register">10</p>
        </div>

        <div className="col l7 display-box-test-setup z-depth-1 background-grey">
            <p className="text-production-register">FH_DEC</p>
        </div>
        <div className="col l3 push-l1 display-box-test-setup z-depth-1 nominal center">
            <p className="text-production-register">10</p>
        </div>

        <div className="col l7 display-box-test-setup z-depth-1 background-grey">
            <p className="text-production-register">FH_Hz</p>
        </div>
        <div className="col l3 push-l1 display-box-test-setup z-depth-1 nominal center">
            <p className="text-production-register">10</p>
        </div>
         
        <div className="col l7 display-box-test-setup z-depth-1 background-grey">
            <p className="text-production-register">FL_DEC</p>
        </div>
        <div className="col l3 push-l1 display-box-test-setup z-depth-1 nominal center">
            <p className="text-production-register">10</p>
        </div>

        <div className="col l7 display-box-test-setup z-depth-1 background-grey">
            <p className="text-production-register">FL_Hz</p>
        </div>
        <div className="col l3 push-l1 display-box-test-setup z-depth-1 nominal center">
            <p className="text-production-register">10</p>
        </div>  
        <div className="col l7 display-box-test-setup z-depth-1 background-grey">
            <p className="text-production-register">NE</p>
        </div>
        <div className="col l3 push-l1 display-box-test-setup z-depth-1 nominal center">
            <p className="text-production-register">10</p>
        </div>  
    </div>

{/* COL DER */}

    <div className="col l6 push-l1 no-margin ">
        <div className="col l7 pull-l1 display-box-test-setup z-depth-1 background-grey">
            <p className="text-production-register">NP</p>
        </div>
        <div className="col l3 display-box-test-setup z-depth-1 nominal center">
            <p className="text-production-register">10</p>
        </div>
    
        <div className="col l7 pull-l1 display-box-test-setup z-depth-1 background-grey">
            <p className="text-production-register">NC</p>
        </div>
        <div className="col l3 display-box-test-setup z-depth-1 nominal center">
            <p className="text-production-register">10</p>
        </div>

        <div className="col l7 pull-l1 display-box-test-setup z-depth-1 background-grey">
            <p className="text-production-register">LC</p>
        </div>
        <div className="col l3 display-box-test-setup z-depth-1 nominal center">
            <p className="text-production-register">10</p>
        </div>
         
        <div className="col l7 pull-l1 display-box-test-setup z-depth-1 background-grey">
            <p className="text-production-register">FC</p>
        </div>
        <div className="col l3  display-box-test-setup z-depth-1 nominal center">
            <p className="text-production-register">10</p>
        </div>

        <div className="col l7 pull-l1 display-box-test-setup z-depth-1 background-grey">
            <p className="text-production-register">DF_DEC</p>
        </div>
        <div className="col l3 display-box-test-setup z-depth-1 nominal center">
            <p className="text-production-register">10</p>
        </div>

        <div className="col l7 pull-l1 display-box-test-setup z-depth-1 background-grey">
            <p className="text-production-register">DF_Hz</p>
        </div>
        <div className="col l3 display-box-test-setup z-depth-1 nominal center">
            <p className="text-production-register">10</p>
        </div>

        <div className="col l7 pull-l1 display-box-test-setup z-depth-1 background-grey">
            <p className="text-production-register">COD_OPERADOR</p>
        </div>
        <div className="col l3 display-box-test-setup z-depth-1 nominal center">
            <p className="text-production-register">10</p>
        </div>

        <div className="col l7 pull-l1 display-box-test-setup z-depth-1 background-grey">
            <p className="text-production-register">P_ENTRADA mmca</p>
        </div>
        <div className="col l3 display-box-test-setup z-depth-1 nominal center">
            <p className="text-production-register">10</p>
        </div>

        <div className="col l7 pull-l1 display-box-test-setup z-depth-1 background-grey">
            <p className="text-production-register">P_SALIDA mmca</p>
        </div>
        <div className="col l3 display-box-test-setup z-depth-1 nominal center">
            <p className="text-production-register">10</p>
        </div>
         
        <div className="col l7 pull-l1 display-box-test-setup z-depth-1 background-grey">
            <p className="text-production-register">TEMPERATURA DE AGUA</p>
        </div>
        <div className="col l3 display-box-test-setup z-depth-1 nominal center">
            <p className="text-production-register">10</p>
        </div>

        <div className="col l7 pull-l1 display-box-test-setup z-depth-1 background-grey">
            <p className="text-production-register">CODIGO DE BARRA</p>
        </div>
        <div className="col l3  display-box-test-setup z-depth-1 nominal center">
            <p className="text-production-register">10</p>
        </div>  
        <div className="col l7 pull-l1 display-box-test-setup z-depth-1 background-grey">
            <p className="text-production-register">RESULTADO FINAL</p>
        </div>
        <div className="col l3 display-box-test-setup z-depth-1 nominal center">
            <p className="text-production-register">10</p>
        </div>  
    </div>
    </div>
    

    <hr />
    <Formik initialValues={{ sku:''}} 
                  onSubmit={handleSubmitCodigoDeChasis}  validate={validarSKU} isValidating={false} isSubmitting={false} >
                    <Form>

    <div className="row">
        <div className="col l12 no-margin">
            <p className="display-box-title-ensayo-QA left">REGISTRO DE FALLAS</p>            
        </div>
        <div className="col l6 no-margin">
        <div className="col l7 display-box-test-setup z-depth-1 background-grey">
            <p className="text-production-register">INGRESE LA CANTIDAD DE FALLAS ENCONTRADAS</p>
        </div>
        <div className="col l3 push-l1 display-box-test-setup z-depth-1 nominal center">
                <Field name="LC" className="inputfield-fine-tunning" maxLength="5"/>
        </div> 
        <div className="row"></div>
        <div className="col l12 no-margin">
            <p className="display-box-title-ensayo-QA left">COMPONENTE DEFECTUOSO</p>            
        </div> 
        <div className="col l7 no-margin">
            <div className="display-box-test-setup z-depth-1 valign-wrapper background-light-blue">   
                        <Field as="select" name="nP"  className="browser-default collapsible-header">
                        <option value="">&nbsp;&nbsp;&nbsp;Seleccione un Componente</option>
                         <option value="1">ON</option>
                         <option value="0">OFF</option>
                         </Field>               
            </div>
        </div>
        <div className="col l3 push-l1 no-margin"><a href="/production-line-failure-list">
        <button className="btn-small btn-block waves-effect waves-light button-regresar-create-batch z-depth-2" type="button">
                   LISTA DE FALLAS
                 </button></a>
        </div> 
        <div className="col l12 no-margin">
            <p className="display-box-title-ensayo-QA left">FALLA DEL COMPONENTE</p>            
        </div> 
        <div className="col l7 no-margin">
            <div className="display-box-test-setup z-depth-1 valign-wrapper background-light-blue">   
                        <Field as="select" name="nP"  className="browser-default collapsible-header">
                        <option value="">&nbsp;&nbsp;&nbsp;Seleccione una Falla</option>
                         <option value="1">ON</option>
                         <option value="0">OFF</option>
                         </Field>               
            </div>
            
        </div>
        <div className="col l3 push-l1 no-margin">
        <button className="btn-small btn-block waves-effect waves-light button-regresar-create-batch z-depth-2" type="button">
                   REGISTRAR FALLAS
                 </button>
        </div> 
        </div>
    </div>
    </Form>
    </Formik>


    <div className="row">
        <div className="col l6 no-margin">
          <div className="col l11 no-margin">
              <button onClick={handleGoBack} className="btn-small btn-block waves-effect waves-light button-regresar-create-batch z-depth-2" type="/dashboard">
                REGRESAR
              </button>
          </div>
        </div>
        <div className="col l6 no-margin">
          <div className="col l11 no-margin right">
               <button className="btn-small btn-block waves-effect waves-light button-ingresar-create-batch z-depth-2 " type="submit">
                   REGISTRAR TEST
                 </button>
          </div>
        </div>
        </div>
    </div>
    </div>

  



 </div>
  );
};
export default Production_Line_Test_Bench;
