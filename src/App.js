import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./components/Home.jsx";
import SignIn from "./components/SignIn.jsx";
import PasswordRecoverEmail from "./components/PasswordRecoverEmail.jsx";
import PasswordRecoverPassword from "./components/PasswordRecoverPassword.jsx";
import UserProfile from "./components/UserProfile.jsx";
import InitDashboard from "./components/InitDashboard.jsx";

// Planificador de Produccion
import Create_Production_Plan from "./components/Production/Create_Production_Plan.jsx";
import Create_Production_Batch from "./components/Production/Create_Production_Batch.jsx";
import Edit_Batch_Params from "./components/Production/Edit_Batch_Params.jsx";
import Batch_Reserve_List from "./components/Production/Batch_Reserve_List.jsx";
import Production_Plans_List from "./components/Production/Production_Plans_List.jsx";
import Production_Finished_Plans_List from "./components/Production/Production_Finished_Plans_List.jsx";
import Production_Batchs_List from "./components/Production/Production_Batchs_List.jsx"
import Planificacion_MVT from "./components/Production/Planificacion_MVT.jsx";
import Partiality from "./components/Production/Partiality.jsx";

// Administrador de Cuestas
import UserRegister from "./components/UserAdmin/UserRegister.jsx"
import User_List from "./components/UserAdmin/User_List.jsx";
import NewPassword from "./components/UserAdmin/NewPassword.jsx";
import Edit_User from "./components/UserAdmin/Edit_User.jsx";

// Linea de Produccion
import Production_Line_CP from "./components/Production_Line/Production_Line_CP.jsx";
import Production_Line_PDF from "./components/Production_Line/Production_Line_PDF.jsx";
import Production_Components_Details from "./components/Production_Line/Production_Components_Details.jsx";
import Production_Line_Failure_List from "./components/Production_Line/Production_Line_Failure_List.jsx";

import Production_Line_Test_Hex from "./components/Production_Line/Production_Line_Test_Hex.jsx";
import Production_Line_Ensamblaje from "./components/Production_Line/Production_Line_Ensamblaje.jsx";
import Production_Line_Test_Bench from "./components/Production_Line/Production_Line_Test_Bench.jsx";
import Production_Line_Ensamblaje_Frente from "./components/Production_Line/Production_Line_Ensamblaje_Frente.jsx";
import Production_Line_Embalaje_1 from "./components/Production_Line/Production_Line_Embalaje_1.jsx";
import Production_Line_Embalaje_2 from "./components/Production_Line/Production_Line_Embalaje_2.jsx";
import Production_Line_Paletizado from "./components/Production_Line/Production_Line_Paletizado.jsx";


// Bodega Materias Primas
import Digital_BMP from "./components/BMP/Digital_BMP.jsx";
import Mechanic_BMP from "./components/BMP/Mechanic_BMP.jsx";
// Linea de Produccion Adyacente
import Production_Register from "./components/Production_Adjacent/Production_Register.jsx";
import Production_Advance from "./components/Production_Adjacent/Production_Advance.jsx";
import Component_List from "./components/Production_Adjacent/Component_List.jsx";
import Fine_Tuning from "./components/Production_Adjacent/Fine_Tuning.jsx";

// QA Labs
import TestSheet from "./components/QA_Labs/TestSheet.jsx";
import SamplePreview from "./components/QA_Labs/SamplePreview.jsx";
import CounterSamplePreview from "./components/QA_Labs/CounterSamplePreview.jsx";
import Batch_Test_Report from "./components/QA_Labs/Batch_Test_Report.jsx";
// QA Admin
import TestSheetSetValues from "./components/QA_Admin/TestSheetSetValues.jsx";
import Traceability_History from "./components/QA_Admin/Traceability_History.jsx";

import Rejected_Batchs_List from "./components/QA_Admin/Reprocess/Rejected_Batchs_List.jsx";
import Definicion_de_Reproceso from "./components/QA_Admin/Reprocess/Definicion_de_Reproceso.jsx";
import ReprocesoManufactura from "./components/QA_Admin/Reprocess/ReprocesoManufactura.jsx";
import Validate_Reprocess_QA from "./components/QA_Admin/Reprocess/Validate_Reprocess_QA.jsx";
import Validate_Reprocess_RandD from "./components/QA_Admin/Reprocess/Validate_Reprocess_RandD.jsx";
import Validate_AT from "./components/QA_Admin/Reprocess/Validate_AT.jsx";
import Informe_De_Rechazo from "./components/QA_Admin/Informe_De_Rechazo.jsx";
//R&D
import Solicitud_MVT from "./components/R&D/Solicitud_De_MVT.jsx";
import Disposicion_Ingenieria from "./components/R&D/Disposicion_Ingenieria.jsx";
import Aprobacion_De_MVT from "./components/R&D/Aprobacion_De_MVT.jsx";
import MVT_List from "./components/R&D/MVT_List.jsx";

//Ingenieria Industrial
import Edicion_Linea_Productiva from "./components/ Industrial_Engineering/Edicion_Linea_Productiva.jsx";
import Documentos_Seguridad_Industrial from "./components/ Industrial_Engineering/Documentos_Seguridad_Industrial.jsx";
import EdicionPuestaAPuntoScan from "./components/ Industrial_Engineering/EdicionPuestaAPuntoScan.jsx";
import EdicionPuestaAPunto from "./components/ Industrial_Engineering/EdicionPuestaAPunto.jsx";

//Examples
import ListExample from "./components/ListExample.jsx";




function App() {
  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:showMode" element={<Home />} />
          <Route path="/signin/:user" element={<SignIn />} />
          <Route path="/dashboard" element={<InitDashboard />} />
          <Route path="/recover/password-email" element={<PasswordRecoverEmail />} />
          <Route path="/recover/password-password" element={<PasswordRecoverPassword />} />

          <Route path="/userprofile" element={<UserProfile />} />

          <Route path="/create-production-plan" element={<Create_Production_Plan />} />
          <Route path="/create-production-batch/:idPlan" element={<Create_Production_Batch />} />
          <Route path="/edit-production-batch/:idPlan/:batch_number" element={<Edit_Batch_Params />} />
          <Route path="/production-partiality/:idPlan/:id_batch" element={<Partiality />} />


          <Route path="/batch-reserve-list" element={<Batch_Reserve_List />} />
          <Route path="/batch-reserve-list/:idPlan" element={<Batch_Reserve_List />} />
          <Route path="/production-plans-list" element={<Production_Plans_List />} />
          <Route path="/production-finished-plans-list" element={<Production_Finished_Plans_List />} />
          <Route path="/production-batchs-list/:idPlan" element={<Production_Batchs_List />} />
          <Route path="/production-planificacion-mvt" element={<Planificacion_MVT />} />

          <Route path="/create-user" element={<UserRegister/>} />
          <Route path="/edit-user/:id" element={<Edit_User/>} />
          <Route path="/list-users" element={<User_List/>} />
          <Route path="/new-password/:rut" element={<NewPassword/>} />


          <Route path="/production-line-cp/:idPlan" element={<Production_Line_CP/>} />
          <Route path="/production-components-details" element={<Production_Components_Details/>} />
          <Route path="/production-line-pdf/:idPlan" element={<Production_Line_PDF/>} />
          <Route path="/production-line-failure-list" element={<Production_Line_Failure_List/>} />

          <Route path="/production-line-test-hex/:idPlan" element={<Production_Line_Test_Hex/>} />
          <Route path="/production-line-ensamblaje/:idPlan" element={<Production_Line_Ensamblaje/>} />
          <Route path="/production-line-test-bench/:idPlan" element={<Production_Line_Test_Bench/>} />
          <Route path="/production-line-ensamblaje-frente/:idPlan" element={<Production_Line_Ensamblaje_Frente/>} />
          <Route path="/production-line-embalaje-1/" element={<Production_Line_Embalaje_1/>} />
          <Route path="/production-line-embalaje-2/" element={<Production_Line_Embalaje_2/>} />
          <Route path="/production-line-paletizado/:idPlan" element={<Production_Line_Paletizado/>} />

          

          <Route path="/digital-bmp" element={<Digital_BMP/>} />
          <Route path="/mechanic-bmp" element={<Mechanic_BMP/>} />

          <Route path="/production-register/:idPlan" element={<Production_Register/>} />
          <Route path="/production-advance/:idPlan" element={<Production_Advance/>} />

          <Route path="/component_list/:idPlan" element={<Component_List/>} />
          <Route path="/fine-tuning" element={<Fine_Tuning/>} />
          


          <Route path="/qa-labs-test-sheet" element={<TestSheet/>} />
          <Route path="/qa-labs-sample-preview" element={<SamplePreview/>} />
          <Route path="/qa-labs-counter-sample-preview" element={<CounterSamplePreview/>} />
          <Route path="/qa-labs-batch-test-report" element={<Batch_Test_Report/>} />
          

          <Route path="/qa-admin-test-sheet-set-values" element={<TestSheetSetValues/>} />
          <Route path="/qa-admin-traceability-history" element={<Traceability_History/>} />
          <Route path="/qa-admin-rejected-batchs-list" element={<Rejected_Batchs_List/>} />
          <Route path="/qa-admin-definicionreproceso" element={<Definicion_de_Reproceso/>} />
          <Route path="/qa-admin-reproceso-manufactura" element={<ReprocesoManufactura/>} />
          <Route path="/qa-admin-validate-reprocess-qa" element={<Validate_Reprocess_QA/>} />
          <Route path="/qa-admin-validate-reprocess-r&d" element={<Validate_Reprocess_RandD/>} />
          <Route path="/qa-admin-validate-at" element={<Validate_AT/>} />
          <Route path="/qa-admin-informe-rechazo" element={<Informe_De_Rechazo/>} />


          <Route path="/r&d-disposicion-ingenieria/:number_batch/:description/:id_plan/:sku" element={<Disposicion_Ingenieria/>} />
          <Route path="/r&d-solicitud-mvt" element={<Solicitud_MVT/>} />
          <Route path="/r&d-aprobacion-mvt/:idMvt" element={<Aprobacion_De_MVT/>} />
          <Route path="/r&d-mvt-list" element={<MVT_List/>} />

          <Route path="/ie-production-line-edition" element={<Edicion_Linea_Productiva/>} />
          <Route path="/ie-documentos-seguridad-industrial" element={<Documentos_Seguridad_Industrial/>} />
          <Route path="/ie-edicion-puesta-a-punto-scan" element={<EdicionPuestaAPuntoScan/>} />
          <Route path="/ie-edicion-puesta-a-punto" element={<EdicionPuestaAPunto/>} />
          

          <Route path="/list-example" element={<ListExample/>} />






        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
