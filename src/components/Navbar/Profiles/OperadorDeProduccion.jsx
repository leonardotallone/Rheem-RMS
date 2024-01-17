import React, { useEffect, useState} from "react"
import { useNavigate, NavLink  } from "react-router-dom";
import M from 'materialize-css';  
import itpts from "../../../assets/it_pts.pdf"
import Image_Profile3 from "../../../assets/Image_Profile3.jpg"

// import { ReactComponent as Unlock } from "../../../assets/icons/unlock.svg"


const OperadorDeProduccion = () => {
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
              <i className="material-symbols-outlined black-text valign-wrapper left">precision_manufacturing</i>
              Producción en Linea</a>
            <ul id="dropdown" className="dropdown-content z-depth-2">
              <li> <NavLink to="/production-plans-list" className="dropdown-font">Planes de Producción</NavLink></li>
              {/* <li className="divider"></li>
              <li> <NavLink to="/production-plans-list" className="dropdown-font">Planes de Producción Mecánicos</NavLink></li>    */}
            </ul>
          </li>
        </ul>
{/*******************  NAVBAR OPTIONS ****************************/}

          <ul className="right hide-on-med-and-down ">
             <li><a  href={itpts} target="_blank" className="nav-font">
             IT-PTS</a></li>
            <li><NavLink className="nav-font"to="">|</NavLink> </li>
          <li className="nav-font-rms">Operador de Produccion en Linea</li>
          <li><NavLink className="nav-font"to="">|</NavLink> </li>
          <li className="nav-font">{user.name + " " + user.last_name}</li>
          <li>
            <a href="/"><i onClick={logout} className="material-icons black-text">logout</i></a>
          </li>

             <li><NavLink to="/userprofile" ><img onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} href="/userprofile"src={Image_Profile3} alt="" className="avatar-nav btn-floating"></img> </NavLink></li>
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
            <a className="dropdown-trigger nav-font valign-wrapper" href="null" data-target="dropdown-sidenav"><i className="material-symbols-outlined black-text valign-wrapper left">precision_manufacturing</i>Producción en Linea</a>
            <ul id="dropdown-sidenav" className="dropdown-content-side">
              <li> <NavLink to="/production-plans-list" className="dropdown-font sidenav-close">Planes de Producción </NavLink></li>
              {/* <li className="divider"></li>
              <li> <NavLink to="/production-plans-list" className="dropdown-font sidenav-close">Planes de Producción Mecánicos</NavLink></li> */}
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
          <li> <NavLink className="nav-font-rms">Operador de Produccion en Linea</NavLink></li>
          <li className="divider"></li>
          <li> <NavLink className="nav-font">{user.name + " " + user.last_name}</NavLink></li>

          <li>
             <a href="/"><i onClick={logout} className="material-icons black-text">logout</i></a>
         </li> 

           <li><NavLink to="/userprofile"><img href="/userprofile"src={Image_Profile3} alt=""className="btn btn-floating avatar-nav"></img></NavLink></li>

        </ul>
      </ul>
    </>
  );
};
export default OperadorDeProduccion;
