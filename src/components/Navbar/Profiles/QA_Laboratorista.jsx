import React, { useEffect, useState} from "react"
import { useNavigate, NavLink  } from "react-router-dom";
import M from 'materialize-css';  
import itpts from "../../../assets/it_pts.pdf"
import Image_Profile3 from "../../../assets/Image_Profile3.jpg"
// import { ReactComponent as Unlock } from "../../../assets/icons/unlock.svg"


const QA_Laboratorista = () => {
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
              <i className="material-symbols-outlined black-text valign-wrapper left">biotech</i>
              Laboratorio QA</a>
            <ul id="dropdown" className="dropdown-content z-depth-2">
              <li> <NavLink to="/qa-labs-test-sheet" className="dropdown-font">Planilla de Ensayo</NavLink></li>
              <li className="divider"></li>
              <li> <NavLink to="/qa-labs-sample-preview" className="dropdown-font">Avance de Muestras QA</NavLink></li> 
              <li className="divider"></li>
              <li> <NavLink to="/qa-labs-counter-sample-preview" className="dropdown-font">Avance de Contramuestras QA</NavLink></li> 
              <li className="divider"></li>
              <li> <NavLink to="/qa-admin-rejected-batchs-list" className="dropdown-font">Reprocesos Pendientes</NavLink></li>   
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
             <li><a  href={itpts} target="_blank" className="nav-font">
             IT-PTS</a></li>
            <li><NavLink className="nav-font"to="">|</NavLink> </li>
          <li className="nav-font-rms">QA Laboratorista</li>
          <li><NavLink className="nav-font"to="">|</NavLink> </li>
          <li className="nav-font">{user.name + " " + user.last_name}</li>
          <li>
            <a href="/"><i onClick={logout} className="material-icons black-text">logout</i></a>
          </li>

             <li><NavLink to="/userprofile" ><img onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} href="/userprofile"src={Image_Profile3} alt="" className="avatar-nav btn-floating"></img> </NavLink></li>
        </ul>
          

        {/* {isHovering && (
            <p className="hovering-hand">
            Cuenta Administardor <br />
            {userEmail}{" "}
          </p>
        )} */}
             {isHovering && (
            <p className="hovering-hand">
            Cuenta Rheem <br />usuario@rheem.com.cl
          </p>
        )}
{/********************************************** Esto es el SIDENAV ******************************************************/}

{/**********************************************  SIDENAV DROPDOWN ******************************************************/}
        <ul className="sidenav" id="mobile-view">
        <li>
            <a className="dropdown-trigger nav-font valign-wrapper" href="null" data-target="dropdownSide">
              <i className="material-symbols-outlined black-text valign-wrapper left">biotech</i>
              Laboratorio QA</a>
            <ul id="dropdownSide" className="dropdown-content-side">
              <li> <NavLink to="/qa-labs-test-sheet" className="dropdown-font sidenav-close">Planilla de Ensayo</NavLink></li>
              <li className="divider"></li>
              <li> <NavLink to="/qa-labs-sample-preview" className="dropdown-font sidenav-close">Avance de Muestras QA</NavLink></li> 
              <li className="divider"></li>
              <li> <NavLink to="/qa-labs-counter-sample-preview" className="dropdown-font sidenav-close">Avance de Contramuestras QA</NavLink></li> 
              <li className="divider"></li>
              <li> <NavLink to="/qa-admin-rejected-batchs-list" className="dropdown-font sidenav-close">Reprocesos Pendientes</NavLink></li>   
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

      
         

          <li className="divider"></li>
          <li> <NavLink className="nav-font-rms">Laboratorio QA</NavLink></li>
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
export default QA_Laboratorista;
