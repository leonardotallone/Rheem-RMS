import Navbar from "./Navbar/Navbar";

// import { ListUsers } from "../services/users/ListUsers";

// import { Plano } from "../services/QAD/Plano";
// import { Lote } from "../services/QAD/Lote";
// import { Componente } from "../services/QAD/Componente";
// import { EstadoCuadrilla } from "../services/QAD/EstadoCuadrillas";

// import { useEffect, useState } from "react";

const InitDashboard = () => {
  // const [usuarios, setUsuarios] = useState([]);
 
  // const [plano, setPlano] = useState();
  // const [lote, setLote] = useState();
  // const [componente, setComponente] = useState();
  // const [estadoCuadrilla, setEstadoCuadrilla] = useState();

  // useEffect(() => {
 
  //   Plano().then((response) => {
  //     const decodePDF = atob(response.data.response.plano);
  //     const blob = new Blob([decodePDF],{type: 'application/pdf'})
  //     const url = window.URL.createObjectURL(blob)
  //     setPlano(url);
  //   });
  //   Lote().then((response) => {
  //     setLote(response.data.response);
  //   });
  //   Componente().then((response) => {
  //     setComponente(response.data.response.componente[""]);
  //   });
  //   EstadoCuadrilla().then((response) => {
  //     setEstadoCuadrilla(response.data.response.lotestado);
  //   });
  // }, []);

  // console.log("PLANO", plano);
  // console.log("LOTE", lote);
  // console.log("COMPONENTE", componente);
  // console.log("ESTADO_CUADRILLA", estadoCuadrilla);

  return (
    <>
      <Navbar />
      <div className="container">
        <h4>DashBoard</h4>
        {/* <iframe title="pdf" width="100%" height="600px" srcDoc={plano}></iframe> */}
        {/* {plano ? (
          <a href={plano} target="_blank">
            plano
          </a>
        ) : null} */}
      </div>
    </>
  );
};
export default InitDashboard;
