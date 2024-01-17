import React, { useEffect, useState} from "react"
import { useNavigate, NavLink  } from "react-router-dom";
import M from 'materialize-css';  
import Image_Profile from "../../../assets/Image_Profile.jpg"
// import { ReactComponent as Unlock } from "../../../assets/icons/unlock.svg"


const PlanificadorDeProduccion = () => {

  const [isHovering, setIsHovering]= useState(false);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));
   
  const logout = () => {
    window.localStorage.removeItem('accessToken')
    window.localStorage.removeItem('user')
    navigate("/");
  };

    const handleMouseOver = () => {
      setIsHovering(true);
    };
    const handleMouseOut = () => {
      setIsHovering(false);
    };

useEffect(()=>{
    let dropdown = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(dropdown, {inDuration:100, outDuration:200, hover:false, alignment: 'left',});
    var sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);
},[]);

  return (
    <>
{/**********************************************  NAVBAR **********************************************************/}
      <ul className="margin-top">
        <a data-target="mobile-view" href="null"className="sidenav-trigger right"><i className="material-icons red-text margin-top">menu</i></a>

{/******************  NAVBAR DROPDOWN *************************/}

        <ul className="left-dropdown hide-on-med-and-down">
          <li>
            <a className="dropdown-trigger nav-font valign-wrapper" href="null" data-target="dropdown">
              <i className="material-symbols-outlined black-text valign-wrapper left">event_note</i>
              Producción</a>
            <ul id="dropdown" className="dropdown-content z-depth-2">
              <li> <NavLink to="/create-production-plan" className="dropdown-font">Crear Plan de Producción</NavLink></li>
              {/* <li> <NavLink to="/create-production-batch" className="dropdown-font">Crear Lote de Producción</NavLink></li> */}
              <li className="divider"></li>
              <li> <a href="/production-plans-list" className="dropdown-font">Planes Existentes</a></li>
              <li> <NavLink to="/production-finished-plans-list" className="dropdown-font">Historial Planes Terminados</NavLink></li>
              <li className="divider"></li>
              <li> <NavLink to="/batch-reserve-list" className="dropdown-font">Lotes en Reserva</NavLink></li>
              <li className="divider"></li>
              <li> <NavLink to="/r&d-aprobacion-mvt" className="dropdown-font">Solicitudes MVT</NavLink></li>
            
            </ul>
          </li>

          {/* {user.isOverseer == true?
          <li>
            <a className="dropdown-trigger nav-font valign-wrapper" href="null" data-target="dropdownUnlock">
                <Unlock />&nbsp;&nbsp;&nbsp;Reseteo de Contraseñas</a>
            <ul id="dropdownUnlock" className="dropdown-content z-depth-2">
              <li> <NavLink to="/list-users" className="dropdown-font">Listar Usuarios</NavLink></li>
            </ul>
          </li>:null} */}
        </ul>
{/*******************  NAVBAR OPTIONS ****************************/}

          <ul className="right hide-on-med-and-down ">
             <li><NavLink className="nav-font "to="/opcion">
             IT-PTS</NavLink></li>
            <li><NavLink className="nav-font"to="">|</NavLink> </li>
          <li className="nav-font-rms">Planificador de Producción</li>
          <li><NavLink className="nav-font"to="">|</NavLink> </li>
          <li className="nav-font">{user.name + " " + user.last_name}</li>
         
          <li>
            <a href="/"><i onClick={logout} className="material-icons black-text">logout</i></a>
          </li>

             <li><NavLink to="/userprofile" ><img onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} href="/userprofile"src={Image_Profile} alt="" className="avatar-nav btn-floating"></img> </NavLink></li>
        </ul>
          
        {isHovering && (
            <p className="hovering-hand">
            Cuenta Rheem <br />{user.email? user.email:user.rut}
          </p>
        )}
{/********************************************** Esto es el SIDENAV ******************************************************/}

{/**********************************************  SIDENAV DROPDOWN ******************************************************/}
        <ul className="sidenav" id="mobile-view">
        <li>
            <a className="dropdown-trigger nav-font valign-wrapper" href="null" data-target="dropdown-sidenav"><i className="material-symbols-outlined black-text valign-wrapper left">event_note</i>Producción</a>
            <ul id="dropdown-sidenav" className="dropdown-content-side">
            <li> <NavLink to="/create-production-plan" className="dropdown-font sidenav-close">Crear Plan de Producción</NavLink></li>
              <li> <NavLink to="/create-production-batch" className="dropdown-font sidenav-close">Crear Lote de Producción</NavLink></li>
              <li className="divider"></li>
              <li> <NavLink to="/production-plans-list" className="dropdown-font sidenav-close">Planes Existentes</NavLink></li>
              <li> <NavLink to="/production-finished-plans-list" className="dropdown-font sidenav-close">Historial Planes Terminados</NavLink></li>
              <li className="divider"></li>
              <li> <NavLink to="/batch-reserve-list" className="dropdown-font sidenav-close">Lotes en Reserva</NavLink></li>
              <li className="divider"></li>
              <li> <NavLink to="/r&d-aprobacion-mvt" className="dropdown-font sidenav-close">Solicitudes MVT</NavLink></li>
            </ul>
        </li>

        {/* {user.isOverseer == true?
          <li>
            <a className="dropdown-trigger nav-font valign-wrapper" href="null" data-target="unlock">
                <Unlock />&nbsp;&nbsp;&nbsp;Reseteo de Contraseñas</a>
            <ul id="unlock" className="dropdown-content-side z-depth-2">
              <li> <NavLink to="/list-users" className="dropdown-font sidenav-close">Listar Usuarios</NavLink></li>
            </ul>
          </li>:null} */}
{/**********************************************  SIDENAV OPTIONS ******************************************************/}

          {/* <li><NavLink className="nav-font sidenav-close" to="/socios">Socios</NavLink></li>
          <li><NavLink className="nav-font sidenav-close" to="/usuarios">Usuarios</NavLink></li>
          <li><NavLink className="nav-font sidenav-close" to="/createevent">Crear Eventos</NavLink></li>
          <li><NavLink className="nav-font sidenav-close" to="/feesmaker">Crear Cuotas</NavLink></li>
          <li className="divider"></li>
          <li> <NavLink className="nav-font">Bienvenido User</NavLink></li> */}

          <li className="divider"></li>
          <li> <NavLink className="nav-font-rms">Planificador de Producción</NavLink></li>
          <li className="divider"></li>
          <li> <NavLink className="nav-font">{user.name + " " + user.last_name}</NavLink></li>

          <li>
             <a href="/"><i onClick={logout} className="material-icons black-text">logout</i></a>
         </li>
           <li><NavLink to="/userprofile"><img href="/userprofile"src={Image_Profile} alt=""className="btn btn-floating avatar-nav"></img></NavLink></li>

        </ul>
      </ul>
    </>
  );
};
export default PlanificadorDeProduccion;
