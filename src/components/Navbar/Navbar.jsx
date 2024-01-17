import React from "react";

import Logo from "../../assets/logos/logo-navbar.png";

import QA_Laboratorista from "./Profiles/QA_Laboratorista"
import QA_Administrativo from "./Profiles/QA_Administrativo";
import PlanificadorDeProduccion from "./Profiles/PlanificadorDeProduccion";
import Administrador_De_Cuentas from "./Profiles/Administrador_De_Cuentas"
import Bodega_Materias_Primas from "./Profiles/Bodega_Materias_Primas";
import Gerencia from "./Profiles/Gerencia";
import RandD from "./Profiles/RandD";
import Ingenieria_Industrial from "./Profiles/Ingenieria_Industrial";
import Supervisor_De_Produccion from "./Profiles/Supervisor_De_Produccion";
import OperadorDeProduccion from "./Profiles/OperadorDeProduccion";


const Navbar = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  // console.log("NAVBAR_USER ", user)

  return (
    <>
    <div className="navbar-fixed"> 
      <nav className="nav-wrapper">
        <div className="container">
          <a href="/dashboard">
            <img className="logo-img" src={Logo} alt=""></img>
          </a>

          {/* <PlanificadorDeProduccion /> */}

          {/* PERFILES INDIRECTOS */}

          {user.profileRMS === 'BMP Administrativo' ? <Bodega_Materias_Primas /> :null}
          {user.profileRMS === 'GERENCIA' ? <Gerencia /> :null}
          {user.profileRMS === 'INGENIERIA INDUSTRIAL' ? <Ingenieria_Industrial /> :null }
          {user.profileRMS === 'PLANIFICADOR DE PRODUCCIÓN' ? <PlanificadorDeProduccion /> :null}
          {user.profileRMS === 'QA ADMINISTRATIVO' ? <QA_Administrativo /> :null}
          {user.profileRMS === 'QA LABORATORISTA' ? <QA_Laboratorista /> :null}
          {user.profileRMS === 'RESEARCH AND DEVELOPMENT (R&D)' ? <RandD /> :null}
          {user.profileRMS === 'SUPERVISOR DE PRODUCCIÓN' ? <Supervisor_De_Produccion /> :null}
          {user.profileRMS === 'ADMINISTRADOR DE CUENTAS' ? <Administrador_De_Cuentas /> :null}
         
          {/* PERFILES DIRECTOS */}

           {user.profileRMS === null? <OperadorDeProduccion />:null}

        </div>
      </nav>
    </div>


</>
  );
};
export default Navbar;
