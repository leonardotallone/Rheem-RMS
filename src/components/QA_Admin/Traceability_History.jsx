import { useEffect } from "react";
import M from 'materialize-css';  
import Navbar from "../Navbar/Navbar";
import QR from "../../assets/logos/QR.png";
import caldera from "../../assets/Rheem-Caldera.png"


import { Formik, Form, Field, ErrorMessage } from "formik";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


const Traceability_History = () => {


    useEffect(()=>{
        let photoBox = document.querySelectorAll('.materialboxed');
        M.Materialbox.init(photoBox);
    },[]);




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
  

  const validarNSERIE = (values) => {
    const errors = {};
    const re = /^[0-9]{8}[a-zA-Z]{2}$/
    if (!values.nserie) {
      errors.nserie = "Campo obligatorio";
    }
    else if (!re.test(values.sku)){
      errors.nserie = "Nº de Serie invalido"
    }
    return errors
  };
  const handleSubmitNSERIE = (values) => {
    const nserie = {nserie: values.nserie}
    console.log("Nº SERIE", nserie)
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

            <div className="col s12 m12 l7 no-margin">

              <p className="font-title-create-plan">Historial de Trazabilidad QA.</p>
              <div className="col s12 m12 l9">

              <p className="font-subtitle-create-plan">Escenee el producto para realizar la consulta.</p>
              <div className="display-box-fine-tunning-scancode z-depth-1">
                  <Formik initialValues={{ nserie:''}} 
                  onSubmit={handleSubmitNSERIE}  validate={validarNSERIE} isValidating={false} isSubmitting={false} >
                    <Form>

                  <div className="col s3 m1 l1 ">
                    <button type="submit" className="hover-hand">
                      <i className="material-symbols-outlined qr-input">qr_code_scanner</i>
                    </button>
                  </div>
                  <div className="col s9 m10 push-m1 l10 push-l1 ">
                              <div className="input-field">
                                <label className="label-text-scan" htmlFor="nserie" >Nº de Serie </label>
                                  <Field name="nserie" type="text" />
                              <div className="warning-inputs-scan right"><ErrorMessage name="nserie" /></div>
                              </div>
                  </div>
                    </Form>
                  </Formik>
                </div>
                <p className="display-box-title">Si no dispone de lector, ingrese el Nº de Serie manualmente.</p>
              </div>
            </div>

            <div className="col s11 m11 l4 ">
              <div className="col s12 m5 l6 no-margin pull-l2">
              {/* <p className="font-form-create-plan hide-on-small-only" >&emsp;</p> 
              <p className="font-tunning-black">CODIGO DE PAIS: 054 (ARG)</p>
              <p className="font-tunning-black">FECHA DE ENSAYO: 27-07-2023</p>
              <p className="font-tunning-black">SKU: 1234-4321</p>
              <p className="font-tunning-black">DESCRIPCION: ARM-J26-KLM</p>
              <p className="font-tunning-black">USUARIO: NOMBRE APELLIDO</p> */}
              
              </div>
                <div className="col s12 m7 l6 no-margin ">
                <p className="font-form-create-plan">RC:16-062</p>  
                {/* <p className="font-tunning-black">Nº DE CHASIS: 12345</p>
                <p className="font-tunning-black">LOTE: 12345</p>
                <p className="font-tunning-black">SKU: 12345"</p>
                <p className="font-tunning-black">PLATAFORMA: DIGITAL</p> */}
                </div>

            </div>
              
            <div className="col s1 m1 l1">
              <img className="qr right " src={QR} alt=""></img>
              <i onClick={exportToPDF} className=" right material-symbols-outlined print hover-hand">print</i>
            </div>

          
          </div>
        </div>
      

      {/* ---------------------------------------Formulario------------------- */}
 
        <div className="container">
         <div className="row"></div>

{/* PRUEBAS FUNCIONALES */}
              
        <div className="row">
        <div className="col l12 no-margin">
            <p className="display-box-title-ensayo-QA left">RESULTADOS OBTENIDOS</p>            
        </div>
        <div className="col l6 no-margin">
        <div className="col l7 display-box-test-setup z-depth-1 background-grey">
            <p className="text-production-register">Nº DE MODELO</p>
        </div>
        <div className="col l3 push-l1 display-box-test-setup z-depth-1 nominal center">
            <p className="text-production-register">EM-345-2381 </p>
        </div>
    
        <div className="col l7 display-box-test-setup z-depth-1 background-grey">
            <p className="text-production-register">VALIDACION DEL COMPONENTE</p>
        </div>
        <div className="col l3 push-l1 display-box-test-setup z-depth-1 nominal center">
            <p className="text-production-register">????</p>
        </div>

        <div className="col l7 display-box-test-setup z-depth-1 background-grey">
            <p className="text-production-register">FECHA Y HORA DE SALIDA</p>
        </div>
        <div className="col l3 push-l1 display-box-test-setup z-depth-1 nominal center">
            <p className="text-production-register">10-05-2023 15:23hs</p>
        </div>
         
        <div className="col l7 display-box-test-setup z-depth-1 background-grey">
            <p className="text-production-register">FECHA DE TURNO</p>
        </div>
        <div className="col l3 push-l1 display-box-test-setup z-depth-1 nominal center">
            <p className="text-production-register">10-05-2023</p>
        </div>

        <div className="col l7 display-box-test-setup z-depth-1 background-grey">
            <p className="text-production-register">TRABAJADORES</p>
        </div>
        <div className="col l3 push-l1 display-box-test-setup z-depth-1 nominal center">
            <p className="text-production-register">USUARIO 1, USUARIO 2</p>
        </div>

        <div className="col l7 display-box-test-setup z-depth-1 background-grey">
            <p className="text-production-register">ESTACION O PUESTO</p>
        </div>
        <div className="col l3 push-l1 display-box-test-setup z-depth-1 nominal center">
            <p className="text-production-register">ENSAMBLADO</p>
        </div>

        <div className="col l7 display-box-test-setup z-depth-1 background-grey">
            <p className="text-production-register">ESTACION O PUESTO</p>
        </div>
        <div className="col l3 push-l1 display-box-test-setup z-depth-1 nominal center">
            <p className="text-production-register">ENSAMBLADO</p>
        </div>

        <div className="col l7 display-box-test-setup z-depth-1 background-grey">
            <p className="text-production-register">BANCO O PUESTOS SUPERADOS</p>
        </div>
        <div className="col l3 push-l1 display-box-test-setup z-depth-1 nominal center">
            <p className="text-production-register">ENSAMBLADO</p>
        </div>

        <div className="col l7 display-box-test-setup z-depth-1 background-grey">
            <p className="text-production-register">USUARIO DETECTOR DE FALLA</p>
        </div>
        <div className="col l3 push-l1 display-box-test-setup z-depth-1 nominal center">
            <p className="text-production-register">NOMBER</p>
        </div>

        <div className="col l7 display-box-test-setup z-depth-1 background-grey">
            <p className="text-production-register">FALLA REPARADA</p>
        </div>
        <div className="col l3 push-l1 display-box-test-setup z-depth-1 nominal center">
            <p className="text-production-register">SI / NO</p>
        </div>

        <div className="col l7 display-box-test-setup z-depth-1 background-grey">
            <p className="text-production-register">FECHA DE LIBERACION</p>
        </div>
        <div className="col l3 push-l1 display-box-test-setup z-depth-1 nominal center">
            <p className="text-production-register">06-05-2023</p>
        </div>
     </div>

     {/* COLUMNA DER */}

        <div className="col l6 push-l1 no-margin">
                <div className="col l7 pull-l1 ">
                    <img class="materialboxed" width="650" src={caldera} alt=""></img>
                </div>
        </div>

     {/* <div className="col l6 push-l1 no-margin">
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
        </div>   */}
    </div> 
         
      

    



    <div className="row">
        <div className="col l12 no-margin">
          <div className="col l11 no-margin"><a href="/home">
              <button className="btn-small btn-block waves-effect waves-light button-regresar-create-batch z-depth-2" type="/dashboard">
                REGRESAR
              </button></a>
          </div>
        </div>
   
        </div>
    </div>
    </div>

 </div>
  );
};
export default Traceability_History;
