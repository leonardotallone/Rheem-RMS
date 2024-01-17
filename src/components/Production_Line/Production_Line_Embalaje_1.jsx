import Navbar from "../Navbar/Navbar";
import QR from "../../assets/logos/QR.png";
// import Popup from 'reactjs-popup';
import { useNavigate } from 'react-router-dom';
import { useParams} from "react-router";

import { Formik, Form, Field, ErrorMessage } from "formik";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


import { ReactComponent as Splendid } from '../../assets/logos/Splendid.svg'
import { ReactComponent as Rheem } from '../../assets/logos/Rheem-Etiqueta-Aluminio.svg'
import { ReactComponent as RheemPeru } from '../../assets/logos/Rheem.svg'
import { ReactComponent as Kobe } from '../../assets/logos/Kobe.svg'
import { ReactComponent as Boccherini } from '../../assets/logos/Boccherini.svg'


const Production_Line_Embalaje_1 = () => {

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
        pdf.save('Ensamblado#1.pdf');
      });
  };

  const {idPlan} = useParams();
  const navigate = useNavigate();

 const handleGoBack = () => {
  navigate(`/production-batchs-list/${idPlan}`);
  };

//   const [month] = useState(new Date().getMonth() + 1)
//   const [year] = useState(new Date().getFullYear())


  const validarCodigoDeChasis = (values) => {
    const errors = {}
    if(!values.codigoDeChasis){
      errors.codigoDeChasis = "Por favor ingrese código de Chasis"
    } 
    return errors;
  };

  const handleSubmitChasis = (values) => {
    const codigoDeChasis = {codigoDeChasis: values.codigoDeChasis}
    console.log("CODIGO DE CAMARA", codigoDeChasis)
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
                <p className="subtitle-production-line in-line"> &nbsp;(Embalaje #1)</p>
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
                  <Formik initialValues={{ codigoDeChasis:''}} 
                     onSubmit={handleSubmitChasis} validate={validarCodigoDeChasis} isValidating={false} isSubmitting={false} >
                    <Form>
                  <div className="col s3 m1 l1 ">
                    <button type="submit" className="hover-hand">
                      <i className="material-symbols-outlined qr-input">qr_code_scanner</i>
                    </button>
                  </div>

                 
                  <div className="col s9 m10 push-m1 l10 push-l1 ">
                              <div className="input-field">
                                <label className="label-text-scan" htmlFor="chasis" >Código de Chasis</label>
                                  <Field name="codigoDeChasis" type="text" />
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
          <div className="row" id="pdf" > 
          <div className="row"></div>
          <div className="col l12">

          {/* Splendid Ecuador */}
            {/* <div className="col l3 "> 
            <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Splendid Ecuador</p>
              <div className="etiqueta-aluminio z-depth-1">
                 
                      <div className="col l12 pull-l1">
                        <Splendid className="margin-logo-etiqueta-aluminio"/>
                      </div> 
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Designación</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio  right valign-wrapper">Master 26</p>
                            </div>
                      
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Modelo</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">Beyong 13 2EV</p>
                            </div>

                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Nº Serie</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-grande-etiqueta-aluminio right valign-wrapper">12345678910</p>
                            </div>

                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Código del Artefacto</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio right valign-wrapper">600052926</p>
                            </div>

                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Categoría - Tipo</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">II 2H3 B/P - B11BS</p>
                            </div>

                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Gas - Presión</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">GLP-28</p>
                            </div>

                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Rendimiento Térmico</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">85%</p>
                            </div>

                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Caudal Nominal </p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">K &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I/min. AT=25Cº</p>
                            </div>

                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Potencia Útil Nominal Pn=</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">23,2 [kW]</p>
                            </div>

                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Consumo Calorífico Nominal Qn=</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">23,2 [kW]</p>
                            </div>

                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Consumo Calorífico Mínimo Qm=</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">23,2 [kW]</p>
                            </div>

                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Presión de Agua Mínimo Pw mín.=</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">0,1 [bar]</p>
                            </div>

                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Presión de Agua Máxima Pw máx.=</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">10 [bar]</p>
                            </div>

                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Pilas Alcalinas Tipo D</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio right valign-wrapper">1,5 VDC x 2</p>
                            </div>

                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Fabricado en Chile por:</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">Rheem Chile S.A.</p>
                            </div>

                            <div className="col l12 center">
                              <p className="texto-chico-etiqueta-aluminio">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*Valores en condiciones de referencia</p>
                            </div>
             </div>         
            </div>   */}
          {/* Rheem Ecuador */}
            {/* <div className="col l3 "> 
            <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Rheem Ecuador</p>
              <div className="etiqueta-aluminio z-depth-1">
                 
                      <div className="col l12 pull-l1">
                        <Rheem className="margin-logo-rheem-etiqueta-aluminio"/>
                      </div> 
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Designación</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio  right valign-wrapper">Master 26</p>
                            </div>
                      
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Modelo</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">Beyong 13 2EV</p>
                            </div>

                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Nº Serie</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-grande-etiqueta-aluminio right valign-wrapper">12345678910</p>
                            </div>

                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Código del Artefacto</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio right valign-wrapper">600052926</p>
                            </div>

                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Categoría - Tipo</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">II 2H3 B/P - B11BS</p>
                            </div>

                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Gas - Presión</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">GLP-28</p>
                            </div>

                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Rendimiento Térmico</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">85%</p>
                            </div>

                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Caudal Nominal </p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio right valign-wrapper">K &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I/min. AT=25Cº
                              </p>
                            </div>

                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Potencia Útil Nominal Pn=</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">23,2 [kW]</p>
                            </div>

                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Consumo Calorífico Nominal Qn=</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">23,2 [kW]</p>
                            </div>

                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Consumo Calorífico Mínimo Qm=</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">23,2 [kW]</p>
                            </div>

                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Presión de Agua Mínimo Pw mín.=</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">0,1 [bar]</p>
                            </div>

                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Presión de Agua Máxima Pw máx.=</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">10 [bar]</p>
                            </div>

                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Pilas Alcalinas Tipo D</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio right valign-wrapper">1,5 VDC x 2</p>
                            </div>

                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Fabricado en Chile por:</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">Cem S.A.</p>
                            </div>

                            <div className="col l12 center">
                              <p className="texto-chico-etiqueta-aluminio">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*Valores en condiciones de referencia</p>
                            </div>
             </div>         
            </div>  */}
          {/* Splendid Full Control */}
            {/* <div className="col l3"> 
            <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Esplendid Full Control</p>
              <div className="etiqueta-aluminio z-depth-1">
                 
                      <div className="col l12 pull-l1">
                        <Splendid className="margin-logo-splendid-fc-etiqueta-aluminio"/>
                      </div> 
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Designación</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio  right valign-wrapper">Master 26</p>
                            </div>
                      
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Modelo</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">Beyong 13 2EV</p>
                            </div>

                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Nº Serie</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-grande-etiqueta-aluminio right valign-wrapper">12345678910</p>
                            </div>

                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Código del Artefacto</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio right valign-wrapper">600052926</p>
                            </div>

                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Entidad Certificadora</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio right valign-wrapper">Cesmec (FALTA LOGO)</p>
                            </div>



                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Categoría - Tipo</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">II 2H3 B/P - B11BS</p>
                            </div>

                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Gas - Presión</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">GLP-28</p>
                            </div>

                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Rendimiento Térmico</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">85%</p>
                            </div>

                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Caudal Nominal </p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">Valor Caudal</p>
                            </div>

                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Potencia Útil Nominal Pn=</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">23,2 [kW]</p>
                            </div>

                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Consumo Calorífico Nominal Qn=</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">23,2 [kW]</p>
                            </div>

                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Consumo Calorífico Mínimo Qm=</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">23,2 [kW]</p>
                            </div>

                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Presión de Agua Mínimo Pw mín.=</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">0,1 [bar]</p>
                            </div>

                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Presión de Agua Máxima Pw máx.=</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">10 [bar]</p>
                            </div>

                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Pilas Alcalinas Tipo D</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio right valign-wrapper">1,5 VDC x 2</p>
                            </div>

                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Fabricado en Chile por:</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">Rheem Chile S.A.</p>
                            </div>

                            <div className="col l12 center">
                              <p className="texto-chico-etiqueta-aluminio">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*Valores en condiciones de referencia</p>
                            </div>
             </div>         
            </div> */}
          {/* Rheem Chile */}
            {/* <div className="col l3 "> 
            <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Rheem Chile</p>
              <div className="etiqueta-aluminio z-depth-1">
                 
                      <div className="col l12 pull-l1">
                        <Rheem className="margin-logo-rheem-etiqueta-aluminio"/>
                      </div> 
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Designación Comercial</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio  right valign-wrapper">PRESTIGE</p>
                            </div>
                      
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Modelo</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">RT 10-1</p>
                            </div>

                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Nº Serie</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-grande-etiqueta-aluminio right valign-wrapper">12345678910</p>
                            </div>

                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Código del Artefacto</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio right valign-wrapper">600052926</p>
                            </div>

                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Entidad Certificadora</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio right valign-wrapper">Cesmec (FALTA LOGO)</p>
                            </div>

                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Cert. Aprobación</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio right valign-wrapper">G-021-01-25257</p>
                            </div>
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Categoría - Tipo</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">II 2H3 B/P - B11BS</p>
                            </div>

                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Gas - Presión</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">GLP-28</p>
                            </div>
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Potencia Útil Nominal</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">P= 23,2 kW</p>
                            </div>
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Potencia Útil Mínima</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">P= 23,2 kW</p>
                            </div>
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Consumo Calorífico Nominal </p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">Q= 23,2 kW</p>
                            </div>
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Consumo Calorífico Mínimo</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">Q=23,2 kW</p>
                            </div>
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Presión de Agua Mínima</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">pw= 0,15 bar</p>
                            </div>
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Presión de Agua Máxima</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">pw= 10 bar</p>
                            </div>
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Pilas Alcalinas Tipo D</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio right valign-wrapper">1,5 VDC x 2</p>
                            </div>

                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Fabricado en Chile por:</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">Rheem Chile S.A.</p>
                            </div>          
             </div>         
            </div> 
            <div className="row"></div> */}
          {/* Rheem Peru */}
            {/* <div className="col l3 "> 
            <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Rheem Peru</p>
              <div className="etiqueta-aluminio z-depth-1">
                 
                      <div className="col l12 pull-l2">
                        <RheemPeru className="margin-logo-rheem-etiqueta-aluminio"/>
                      </div> 
                       
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Modelo</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">ST 14-1</p>
                            </div>
                            <div className="col l12">&nbsp;</div>

                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Nº Serie</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-grande-etiqueta-aluminio right valign-wrapper">12345678910</p>
                            </div>

                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Código del Artefacto</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio right valign-wrapper">&nbsp;</p>
                            </div>
                            <div className="col l7 right">
                              <p className="texto-mediano-etiqueta-aluminio right valign-wrapper">600052926</p>
                            </div>
                            <div>&nbsp;</div>
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Categoría - Tipo</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">II 2H3 B/P - B11BS</p>
                            </div>
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Gas - Presión</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">GLP-28-32</p>
                            </div>
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Potencia Útil Nominal</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper"> 23,2 kW</p>
                            </div>
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Potencia Útil Mínima</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">23,2 kW</p>
                            </div>
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Consumo Térmmico Nominal </p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">23,2 kW</p>
                            </div>
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Consumo Térmmico Mínimo</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">23,2 kW</p>
                            </div>
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Presión de Agua Mínima</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">3 PSI</p>
                            </div>
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Presión de Agua Máxima</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">145 PSI</p>
                            </div>
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Pilas Alcalinas Tipo D</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio right valign-wrapper">1,5 VDC x 2</p>
                            </div>

                            <div className="col l2 push-l3">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">&nbsp;&nbsp;&nbsp;&nbsp;HECHO EN CHILE</p>
                            </div>
                                      
             </div>         
            </div>    */}
          {/* Rheem Bolivia */}
            {/* <div className="col l3 "> 
            <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Rheem Bolivia</p>
              <div className="etiqueta-aluminio z-depth-1">
                 
                      <div className="col l12 pull-l2">
                        <Rheem className="margin-logo-rheem-etiqueta-aluminio"/>
                      </div> 
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Designación</p>
                            </div>
                            <div className="col l7 push-l3">
                              <p className="texto-mediano-etiqueta-aluminio  center valign-wrapper">PRESTIGE</p>
                            </div>
                      
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Modelo</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">TD TFI 18-1</p>
                            </div>

                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Nº Serie</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-grande-etiqueta-aluminio right valign-wrapper">12345678910</p>
                            </div>

                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Código del Artefacto</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio right valign-wrapper">600052926</p>
                            </div>
                            <div>&nbsp;</div>
                            <div>&nbsp;</div>
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Categoría - Tipo</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">II 2H3 B/P - B11BS</p>
                            </div>
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Gas - Presión</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">GLP-28</p>
                            </div>
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Potencia Útil Nominal</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">23,2 [kW]</p>
                            </div>
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Potencia Útil Mínima</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">23,2 [kW]</p>
                            </div>
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Consumo Térmico Nominal</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">23,2 [kW]</p>
                            </div>
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Consumo Térmico Mínimo </p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">23,2 [kW]</p>
                            </div>
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Presión de Agua Mínima</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">10 [kPa]</p>
                            </div>
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Presión de Agua Máxima Pw máx.=</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">1000 [kPa]</p>
                            </div>
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Alimentación Eléctrica</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio right valign-wrapper">220V-50Hz-48W</p>
                            </div>
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Indice Protección</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio right valign-wrapper">IP23</p>
                            </div>

                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Fabricado en Chile por:</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">Rheem Chile S.A.</p>
                            </div>
             </div>         
            </div>  */}
          {/* Digital Chile Rheem */}
          {/* <div className="col l3 "> 
            <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Digital Chile Rheem</p>
              <div className="etiqueta-aluminio z-depth-1">
                 
                      <div className="col l12 pull-l2">
                        <Rheem className="margin-logo-rheem-etiqueta-aluminio"/>
                      </div> 
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Designación Comercial</p>
                            </div>
                            <div className="col l7 push-l3">
                              <p className="texto-mediano-etiqueta-aluminio  center valign-wrapper">PRESTIGE</p>
                            </div>
                      
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Modelo</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">TD TFI 12-1A</p>
                            </div>

                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Nº Serie</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-grande-etiqueta-aluminio right valign-wrapper">12345678910</p>
                            </div>

                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Código del Artefacto</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio right valign-wrapper">600052926</p>
                            </div>
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Entidad Certificadora</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio right valign-wrapper">Cesmec (FALTA ICONO)</p>
                            </div>
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Cert. Aprobación</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio right valign-wrapper">G-021-01-25857</p>
                            </div>


                            
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Categoría - Tipo</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">II 2H3 B/P - B11BS</p>
                            </div>
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Gas - Presión</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">GLP-28 mbar</p>
                            </div>
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Potencia Útil Nominal P=</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">23,2 kW</p>
                            </div>
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Potencia Útil Mínima P=</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">23,2 kW</p>
                            </div>
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Consumo Calorifico Nominal Q=</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">23,2 kW</p>
                            </div>
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Consumo Calorifico Mínimo </p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">23,2 kW</p>
                            </div>
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Presión de Agua Mínima pw=</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">0,1 bar</p>
                            </div>
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Presión de Agua Máxima pw=</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">10 bar</p>
                            </div>
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Alimentación Eléctrica:</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio right valign-wrapper">220V～50Hz-48W</p>
                            </div>
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Indice Protección:</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio right valign-wrapper">IP X 4D</p>
                            </div>

                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Fabricado en Chile por:</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">Rheem Chile S.A.</p>
                            </div>
             </div>         
            </div> */}
          {/* Digital Brasil Rheem */}
           {/* <div className="col l3 "> 
            <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Digital Brasil Rheem</p>
              <div className="etiqueta-aluminio z-depth-1">
                 
                 <div className="row">
                      <div className="col l3 pull-l2">
                        <Rheem className="margin-logo-rheem-etiqueta-aluminio"/>
                      </div> 
                      <div className="col l9 push-l1 titulo-brasil">
                              <p className="texto-grande-etiqueta-aluminio valign-wrapper margin-cero-p-etiquetas">Aquecedor de Água</p>
                              <p className="texto-grande-etiqueta-aluminio valign-wrapper">a Gás Instantâneo</p>
                      </div>
                 </div>
                            
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Modelo</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">TD TFI 12-1A</p>
                            </div>

                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Nº Serie:</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-grande-etiqueta-aluminio right valign-wrapper">12345678910</p>
                            </div>
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Tipo:</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio right valign-wrapper">Grande</p>
                            </div>
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Gás - Pressao:</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio right valign-wrapper">GN / 200 mmH2O</p>
                            </div>

                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Potência Nominal</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio right valign-wrapper">23,2 kW</p>
                            </div>
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">&nbsp;</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio right valign-wrapper">(23,2 kcal/min)</p>
                            </div>
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Rendimiento sobre P.C.S.:</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio right valign-wrapper">84%</p>
                            </div>


                            
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Pressão de Água Mín. :</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">2 mH2o</p>
                            </div>
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Pressão de Água Máx. :</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">100 mh2o</p>
                            </div>
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper margin-cero-p-etiquetas">Alimentaçao Elétrica:</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper margin-cero-p-etiquetas">127-220v/60Hz/48W</p>
                            </div>
                            <div className="col  l12">
                              <hr />
                            </div>
                            <div className="col l12">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper margin-cero-p-etiquetas">Frabricado no Chile e Distribuido por:</p>
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper margin-cero-p-etiquetas">Rheem do Brasil Com. e Dist.</p>
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper margin-cero-p-etiquetas">de Ar Cond. e Aquecimento Ltda.</p>
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper margin-cero-p-etiquetas">CNPJ: 10.755.792/0001-68</p>
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper margin-cero-p-etiquetas">Av. Queiroz Filho 1700, sala 707 andar 7</p>
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper margin-cero-p-etiquetas">Torre A, Cond Villa Lobos Office Park</p>
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper margin-cero-p-etiquetas">Vila Hamburguesa</p>
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper margin-cero-p-etiquetas">CEP 05319-000 São Paulo - SP</p>
                            </div>
                            
             </div>         
            </div> */}
            <div className="row"></div>
          {/* Digital Brasil Kobe */}
           {/* <div className="col l3 "> 
            <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Digital Brasil Rheem</p>
              <div className="etiqueta-aluminio z-depth-1">
                 
                 <div className="row">
                      <div className="col l3 pull-l2">
                        <Kobe className="margin-logo-rheem-etiqueta-aluminio"/>
                      </div> 
                      <div className="col l9 pull-l1 titulo-brasil">
                              <p className="texto-grande-etiqueta-aluminio valign-wrapper margin-cero-p-etiquetas right">Aquecedor de Água</p>
                              <p className="texto-grande-etiqueta-aluminio valign-wrapper right">a Gás Instantâneo</p>
                      </div>
                 </div>
                            
                           
                      
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Modelo</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">TD TFI 12-1A</p>
                            </div>

                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Nº Serie:</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-grande-etiqueta-aluminio right valign-wrapper">12345678910</p>
                            </div>
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Tipo:</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio right valign-wrapper">Grande</p>
                            </div>
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Gás - Pressao:</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio right valign-wrapper">GN / 200 mmH2O</p>
                            </div>

                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Potência Nominal</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio right valign-wrapper">23,2 kW</p>
                            </div>
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">&nbsp;</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio right valign-wrapper">(23,2 kcal/min)</p>
                            </div>
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Rendimiento sobre P.C.S.:</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio right valign-wrapper">84%</p>
                            </div>


                            
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Pressão de Água Mín. :</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">2 mH2o</p>
                            </div>
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Pressão de Água Máx. :</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">100 mh2o</p>
                            </div>
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper margin-cero-p-etiquetas">Alimentaçao Elétrica:</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper margin-cero-p-etiquetas">127-220v/60Hz/48W</p>
                            </div>
                            <div className="col  l12">
                              <hr />
                            </div>
                            <div className="col l12">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper margin-cero-p-etiquetas">Frabricado no Chile e Distribuido por:</p>
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper margin-cero-p-etiquetas">Rheem do Brasil Com. e Dist.</p>
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper margin-cero-p-etiquetas">de Ar Cond. e Aquecimento Ltda.</p>
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper margin-cero-p-etiquetas">CNPJ: 10.755.792/0001-68</p>
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper margin-cero-p-etiquetas">Av. Queiroz Filho 1700, sala 707 andar 7</p>
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper margin-cero-p-etiquetas">Torre A, Cond Villa Lobos Office Park</p>
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper margin-cero-p-etiquetas">Vila Hamburguesa</p>
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper margin-cero-p-etiquetas">CEP 05319-000 São Paulo - SP</p>
                            </div>
                            
             </div>         
            </div>   */}
          {/* Rheem Colombia */}
             {/* <div className="col l3 "> 
            <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Rheem Colombia</p>
              <div className="etiqueta-aluminio z-depth-1">
                 
                      <div className="col l12 pull-l2">
                        <Rheem className="margin-logo-rheem-etiqueta-aluminio"/>
                      </div> 
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Modelo Certificado</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio  right valign-wrapper">TD-TFI-21-1A</p>
                            </div>
                      
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Modelo Comercial</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">CLASSIC</p>
                            </div>

                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Categoría / Tipo</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio right valign-wrapper">II 2H3 B/P - B11BS</p>
                            </div>

                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Nº Serie</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-grande-etiqueta-aluminio right valign-wrapper">600052926</p>
                            </div>
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Potencia Útil Nominal</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio right valign-wrapper">P= 32,2 kW</p>
                            </div>

                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Consumo Calor. Nom.</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio right valign-wrapper">Q= 36,5 kW</p>
                            </div>
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Consumo Calor. Min</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">Q= 7,0 kW</p>
                            </div>

                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Tipo de Gas</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">Natural</p>
                            </div>
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Presión Gas</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">p= 20 mbar</p>
                            </div>
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Presión agua Mínima</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">pw= 0,1 bar</p>
                            </div>
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Presión de Agua Máxima </p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">pw= 10 bar</p>
                            </div>
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Capacidad Nominal</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">=  18 l/min</p>
                            </div>
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Fuente de Alimentación</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">= 120V-60Hz-48W </p>
                            </div>

                            <div className="col l12">
                              <p className=" texto-grande-etiqueta-aluminio valign-wrapper margin-cero-p-etiquetas">Fabricado por CEM  S.A. Santiago - Chile</p>
                              <p className=" texto-grande-etiqueta-aluminio valign-wrapper margin-cero-p-etiquetas">Importado por Rheem Colombia S.A.S.</p>
                              <p className=" texto-grande-etiqueta-aluminio valign-wrapper margin-cero-p-etiquetas">Bogotá Colombia</p>
                              <p className="texto-mediano-etiqueta-aluminio valign-wrapper margin-cero-p-etiquetas">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(Valores a  condiciones de referencia)</p>
                            </div>
                         
                                     
             </div>         
            </div>  */}
          {/* Boccherini Colombia */}
              {/* <div className="col l3 "> 
            <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Boccherini Colombia</p>
              <div className="etiqueta-aluminio z-depth-1">
                 
                      <div className="col l10 pull-l2">
                        <Boccherini className="margin-logo-rheem-etiqueta-aluminio"/>
                      </div> 
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Modelo Certificado</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio  right valign-wrapper">TD-TFI-21-1A</p>
                            </div>
                      
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Modelo Comercial</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">CLASSIC</p>
                            </div>

                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Categoría / Tipo</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio right valign-wrapper">II 2H3 B/P - B11BS</p>
                            </div>

                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Nº Serie</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-grande-etiqueta-aluminio right valign-wrapper">600052926</p>
                            </div>
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Potencia Útil Nom. </p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio right valign-wrapper">P= 32,2 kW</p>
                            </div>
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Potencia Útil Mín. </p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio right valign-wrapper">P= 32,2 kW</p>
                            </div>


                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Consumo Calor. Nom.</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio right valign-wrapper">Q= 36,5 kW</p>
                            </div>
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Consumo Calor. Min</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">Q= 7,0 kW</p>
                            </div>

                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Tipo de Gas</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">Natural</p>
                            </div>
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Presión Gas</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">p= 20 mbar</p>
                            </div>
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Presión agua Mínima</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">pw= 0,1 bar</p>
                            </div>
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Presión de Agua Máxima </p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">pw= 10 bar</p>
                            </div>
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Capacidad Nominal</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">=  18 l/min</p>
                            </div>
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Fuente de Alimentación</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">= 120V-60Hz-48W </p>
                            </div>

                            <div className="col l12">
                              <p className=" texto-grande-etiqueta-aluminio valign-wrapper margin-cero-p-etiquetas">Fabricadoen Chile por CEM  S.A.</p>
                              <p className=" texto-grande-etiqueta-aluminio valign-wrapper margin-cero-p-etiquetas">Importado por Boccherini S.A.</p>
                              <p className=" texto-grande-etiqueta-aluminio valign-wrapper margin-cero-p-etiquetas">Bogotá - Colombia</p>
                              <p className="texto-mediano-etiqueta-aluminio valign-wrapper margin-cero-p-etiquetas">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(Valores a  condiciones de referencia)</p>
                            </div>
                         
                                     
             </div>         
            </div> */}
          {/* Splendid 2EV */}
            {/* <div className="col l3 "> 
            <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Splendid 2EV</p>
              <div className="etiqueta-aluminio z-depth-1">
                 
                      <div className="col l10 pull-l2">
                        <Splendid className="margin-logo-rheem-etiqueta-aluminio"/>
                      </div> 
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Designación Comercial</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio  right valign-wrapper">Master 8</p>
                            </div>
                      
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Modelo</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio right valign-wrapper">Beyond 10L 2EV</p>
                            </div>

                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Nº Serie</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-grande-etiqueta-aluminio right valign-wrapper">600052926</p>
                            </div>
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Código Artefacto</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio right valign-wrapper">600052667F</p>
                            </div>

                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Entidad Certificadora</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio right valign-wrapper">Cesmec (FALTA ICONO)</p>
                            </div>

                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Cert. Aprobación</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio right valign-wrapper">G-021-01-25182</p>
                            </div>

                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Categoria / Tipo</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio right valign-wrapper">II 2H3B7P / B11BS</p>
                            </div>
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Gas Presión</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio right valign-wrapper">GLP/28 mbar</p>
                            </div>

                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Potencia Útil Nominal</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">P=14,3 kW</p>
                            </div>
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Consumo Calorífico Nominal</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">Q=16,2 kW</p>
                            </div>
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Consumo Calorífico Mínimo</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">Q=11,4 kW</p>
                            </div>
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Presión de Agua Mínima </p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">pw= 0,1 bar</p>
                            </div>
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Presión de Agua Máxima </p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">pw= 10 bar</p>
                            </div>
                            
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Pilas Alcalinas Tipo D</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">2 x 1,5V </p>
                            </div>

                            <div className="col l5">
                              <p className=" texto-mediano-etiqueta-aluminio valign-wrapper">Fabricadoen Chile por:</p>
                            </div>
                            <div className="col l7">
                              <p className=" texto-mediano-etiqueta-aluminio right valign-wrapper">Rheem Chile S.A.</p>
                            </div>
                         
                                     
             </div>         
            </div>  */}
            <div className="row"></div> 
          {/* Estanco Splendid */}
            {/* <div className="col l3 "> 
            <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Estanco Splendid</p>
              <div className="etiqueta-aluminio z-depth-1">
                 
                      <div className="col l10 pull-l2">
                        <Splendid className="margin-logo-rheem-etiqueta-aluminio"/>
                      </div> 
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Designación </p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-chico-etiqueta-aluminio  right valign-wrapper">Calefón templatch SOLAR</p>
                            </div>
                      
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Modelo</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio right valign-wrapper">DE TFEIS 10</p>
                            </div>

                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Nº Serie</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-grande-etiqueta-aluminio right valign-wrapper">600052926</p>
                            </div>
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Código Artefacto</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio right valign-wrapper">600052667F</p>
                            </div>

                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Entidad Certificadora</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio right valign-wrapper">Cesmec (FALTA ICONO)</p>
                            </div>

                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Cert. Aprobación</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio right valign-wrapper">G-021-01-25182</p>
                            </div>

                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Categoria / Tipo</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio right valign-wrapper">II 2H3B7P / B11BS</p>
                            </div>
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Gas Presión</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio right valign-wrapper">GLP/28 mbar</p>
                            </div>

                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Potencia Útil Nominal</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">P= 18,1 kW</p>
                            </div>
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Potencia Útil Mínima</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">P= 3,8 kW</p>
                            </div>
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Consumo Calorífico Nominal</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">Q= 16,2 kW</p>
                            </div>
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Consumo Calorífico Mínimo</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">Q=  11,4 kW</p>
                            </div>
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Presión de Agua Mínima </p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">pw= 0,1 bar</p>
                            </div>
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Presión de Agua Máxima </p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">pw= 10 bar</p>
                            </div>
                            
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Alimentación Eléctrica:</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">220V～50Hz 50W </p>
                            </div>
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Indice Protección:</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">IP x 4D </p>
                            </div>

                            <div className="col l5">
                              <p className=" texto-mediano-etiqueta-aluminio valign-wrapper">Fabricado en Chile por:</p>
                            </div>
                            <div className="col l7">
                              <p className=" texto-mediano-etiqueta-aluminio right valign-wrapper">Rheem Chile S.A.</p>
                            </div>
                         
                                     
             </div>         
            </div>   */}
          {/* Splendid MV */}
          {/* <div className="col l3 "> 
          <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Splendid MV</p>
              <div className="etiqueta-aluminio z-depth-1">
                 
                      <div className="col l10 pull-l2">
                        <Splendid className="margin-logo-rheem-etiqueta-aluminio"/>
                      </div> 
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Designación </p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio  right valign-wrapper">Master 8</p>
                            </div>
                      
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Modelo</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio right valign-wrapper">MV SB 8</p>
                            </div>

                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Nº Serie</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-grande-etiqueta-aluminio right valign-wrapper">600052926</p>
                            </div>
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Código Artefacto</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio right valign-wrapper">600052667F</p>
                            </div>

                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Entidad Certificadora</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio right valign-wrapper">Cesmec (FALTA ICONO)</p>
                            </div>

                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Cert. Aprobación</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio right valign-wrapper">G-021-01-25182</p>
                            </div>

                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Categoria / Tipo</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio right valign-wrapper">II 2H3B7P / B11BS</p>
                            </div>
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Gas / Presión</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio right valign-wrapper">GLP/28 mbar</p>
                            </div>

                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Potencia Útil Nominal</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">P= 18,1 kW</p>
                            </div>
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Potencia Útil Mínima</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">P= 3,8 kW</p>
                            </div>
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Consumo Calorífico Nominal</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">Q= 16,2 kW</p>
                            </div>
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Consumo Calorífico Mínimo</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">Q=  11,4 kW</p>
                            </div>
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Presión de Agua Mínima </p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">pw= 0,1 bar</p>
                            </div>
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Presión de Agua Máxima </p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">pw= 10 bar</p>
                            </div>
                            <div className="col l5">
                              <p className=" texto-chico-etiqueta-aluminio valign-wrapper">Pilas Alcalinas Tipo D</p>
                            </div>
                            <div className="col l7 ">
                              <p className="texto-mediano-etiqueta-aluminio   right valign-wrapper">2 x 1,5 V </p>
                            </div>
                            <div className="col l5">
                              <p className=" texto-mediano-etiqueta-aluminio valign-wrapper">Fabricado en Chile por:</p>
                            </div>
                            <div className="col l7">
                              <p className=" texto-mediano-etiqueta-aluminio right valign-wrapper">Rheem Chile S.A.</p>
                            </div>
                            <div className="col l5">
                              <p className=" texto-mediano-etiqueta-aluminio valign-wrapper">Pais de destino: CHILE</p>
                            </div>          
             </div>         
            </div>    */}
       {/* Rheem Mexico */}
       <div className="col l6"> 
          <p className="texto-chico-etiqueta-aluminio valign-wrapper">Rheem Mexico</p>
              <div className="etiqueta-aluminio-mexico z-depth-1">
                  
                            <div className="col l8">
                              <p className="texto-titulo-mexico ">Calentador de Agua Instantáneo </p>
                            </div>
                            <div className="col l4 push-l1">
                              <Rheem/>
                            </div>
                            <div className="row row-fix">
                                      <div className="col l3">
                                        <p className="key-mexico">Marca: </p>
                                      </div>
                                      <div className="col l3">
                                        <p className="value-mexico">RHEEM</p>
                                      </div>
                                      <div className="col l3">
                                        <p className="key-mexico">Modelo: </p>
                                      </div>
                                      <div className="col l3">
                                        <p className="value-mexico">RHIN-CHL08N</p>
                                      </div>
                            </div>
                            <div className="row row-fix">
                                      <div className="col l3">
                                           <p className="key-mexico">Nº de serie:</p>
                                      </div>
                                      <div className="col l9 ">
                                          <p className="value-mexico">600052926</p>
                                      </div>
                            </div>
                            <div className="row row-fix">
                                      <div className="col l4">
                                          <p className="key-mexico">Fecha de Fabricación:</p>
                                      </div>
                                      <div className="col l2">
                                          <p className="value-mexico ">2023/10</p>
                                      </div>
                                      <div className="col l3">
                                          <p className="key-mexico">Tipo de Gas:</p>
                                      </div>
                                      <div className="col l3">
                                          <p className="value-mexico">NATURAL</p>
                                      </div>
                            </div>
                            <div className="row row-fix">
                                      <div className="col l4">
                                         <p className="key-mexico valign-wrapper">Presión de gas:</p>
                                      </div>
                                      <div className="col l8  ">
                                        <p className="value-mexico valign-wrapper">1,76 kPa(17,95 gf/cm2)</p>
                                      </div>
                            </div>
                            <div className="row row-fix">
                                      <div className="col l5">
                                        <p className="key-mexico valign-wrapper">Capacidad de calentamiento:</p>
                                      </div>
                                      <div className="col l7 ">
                                        <p className="value-mexico">5,5 L/min con AT mínimo 25K (25ºC)</p>
                                      </div>
                            </div>
                            <div className="row row-fix">
                                    <div className="col l5">
                                      <p className="key-mexico">Presión máxima de trabajo:</p>
                                    </div>
                                    <div className="col l7 ">
                                      <p className="value-mexico valign-wrapper">0,45 MPa (4,59 kgf/cm2)</p>
                                    </div>
                            </div>
                            <div className="row row-fix">
                                    <div className="col l5">
                                      <p className="key-mexico valign-wrapper">Carga Térmica:</p>
                                    </div>
                                    <div className="col l7 ">
                                      <p className="value-mexico valign-wrapper">9,6 kW</p>
                                    </div>
                            </div>
                            <div className="row row-fix">
                                    <div className="col l12">
                                      <p className="key-mexico valign-wrapper">Presión hidrostática mínima requerida para la apertura del control para</p>
                                    </div>
                            </div>
                            <div className="row row-fix">
                                    <div className="col l5">
                                      <p className="key-mexico">suministro de gas:</p>
                                    </div>
                                    <div className="col l7 ">
                                      <p className="value-mexico">0,012 MPa</p>
                                    </div> 
                            </div>  
                            <div className="row row-fix">
                                    <div className="col l5">
                                      <p className="key-mexico">Presión de prueba hidrostática:</p>
                                    </div>
                                    <div className="col l7 ">
                                      <p className="value-mexico valign-wrapper">0,686 MPa  (7kgf/cm2)</p>
                                    </div> 
                            </div>
                            <div className="row row-fix">
                                    <div className="col l12">
                                      <p className="key-mexico valign-wrapper">Hecho en Chile</p>
                                    </div> 
                            </div>   
            </div>         
      </div> 
          </div>
        </div>

        <div className="row">
          
            <div className="col l6">
              <button onClick={handleGoBack} className="btn-small btn-block waves-effect waves-light button-regresar-create-plan z-depth-2" type="button">
                REGRESAR
              </button>
            </div>

            <div className="col l6">
              <button onClick={exportToPDF} className="btn-small btn-block waves-effect waves-light button-modoedicion-batch-list z-depth-2" type="button">
                IMPRIMIR ETIQUETA
              </button>
            </div>
        </div>

            <div className="col s1 m1 l12">&nbsp;</div>
      </div>
    </>
  );
};
export default Production_Line_Embalaje_1;
