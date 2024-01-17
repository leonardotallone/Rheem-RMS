import Navbar from "../Navbar/Navbar";
import QR from "../../assets/logos/QR.png";

import { Link } from "react-router-dom";

import { ReactComponent as Lock } from "../../assets/icons/lock.svg"
import { ReactComponent as UnLock } from "../../assets/icons/unlock.svg"
import { ReactComponent as Password } from "../../assets/icons/password.svg"
import { ReactComponent as Edit } from "../../assets/icons/edit.svg"

import Image_Profile from "../../assets/Image_Profile.jpg";
import { useState } from "react";

import Popup from 'reactjs-popup';
import { useContext, useEffect } from "react";
import { listUserContext } from "../../contexts/UserListContext";
// import { getUserByOverseerEmailContext } from "../../contexts/GetUserByOverseerEmailContext";
import { updateUserStateContext } from "../../contexts/UpdateUserStateContext"



const User_List = () => {

  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  const [beforeId, setBeforeId] = useState()
  const [beforeState,setBeforeState] = useState();
  const [usersToMap, setUsersToMap] = useState();

  const {listaDeUsuarios} = useContext(listUserContext);
  // const {usersOverseer, setEmail } = useContext (getUserByOverseerEmailContext);
  const {setUserState, setIdUserState, errorState, successState } = useContext(updateUserStateContext);


  const loguedUser = JSON.parse(localStorage.getItem('user'));
  console.log("USERLIST_USER", loguedUser)


  useEffect(() => {
    if (loguedUser.profileRMS === "SUPERVISOR DE PRODUCCIÓN") {
      // setEmail (loguedUser.email)
     if(listaDeUsuarios){
      // setUsersToMap (usersOverseer.filter(user => user.type_user === 'Directo'))
      setUsersToMap (listaDeUsuarios.filter(user => user.type_user === 'Directo'))
    }
    } else {
      setUsersToMap (listaDeUsuarios)
    }
  },[listaDeUsuarios ])

  const handleIdandState = () => {
    setIdUserState(beforeId)
    setUserState(beforeState)
  }

  const loadIdandState = (user) => {
      setOpen1(true);
      if(user){
      setBeforeId(user.id)
      if(user.status_user === '0'){
        setBeforeState('1')
      }
      else if(user.status_user === '1'){
        setBeforeState('0')
      }
     }
 }

  const closeModall1 =() => {
      setOpen1(false);
  };
  const twoFunctions = () => {
      setOpen1(false)
      handleIdandState()
      setOpen2(true);
    }
  const closeModal2 =() => {
      setOpen2(false);
      window.location.reload()
    }

  return (
    <>
      <Navbar />
      <div className="row">
        <div className=" col s12 m12 l12 top-top-banner"></div>
        <div className="col s12 m12 l12 top-banner"></div>
      </div>
      {/* ---------------------------------------Banner Title------------------- */}
{listaDeUsuarios? <>
      <div className="row">
        <div className="col s12 m12 l12 title-banner z-depth-2">
          <div className="container">
            <div className="col s7 m8 l8 no-margin">
              <p className="font-title-plan-list">Lista de Usuarios</p>
              <p className="font-subtitle-plan-list">Personal Registrado en RMS</p>
            </div>

            <div className="col s11 m5 l3 no-margin">
              {/* <p className="font-form-plan-list left ">RC:16-062</p>
              <p className="font-plan-plan-list left ">PLAN Nº: D0103-2023</p>
              <p className="font-date-plan-list left " >FECHA DE REGISTRO: 23-06-2023</p> */}
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
        <div className="row"></div>
        <div className="row"></div>
        {/* <div className="row">
          <div className="col s6 m4 l3 no-margin">
            <p className="display-box-title">Ordenar Usuarios</p>
            <div className="display-box valign-wrapper">
              <select className="browser-default collapsible-header">
                <option value="" disabled selected>
                  Seleccione{" "}
                </option>
                <option value="1">Apellido</option>
                <option value="2">Cargo</option>
                <option value="2">Tipo de Usuario</option>
              </select>
            </div>
          </div>
        </div> */}

  <ul> 
       
      {!usersToMap ?
            <div className="progress white">
            <div className="indeterminate red"></div>
          </div> :usersToMap?.sort((b, a) => a.type_user.localeCompare(b.type_user)).map((user)=>(
      <li key={user.id}>

            <div className={user.status_user === "0"? "row display-box-userlist-locked z-depth-1 left btn-block":"row display-box-userlist z-depth-1 left btn-block"}>
                <div className=" col s3 m4 l1 left ">
                  <img className="btn btn-floating avatar-userlist hide-on-med-and-down hover-hand-none" src={Image_Profile} alt="" ></img>
                </div>
                
                <div className=" col s8 push-s2 m5 l11">
                  <div className="col l6">
                          <div className=" col s12 m12 l5">
                            <p className="title-userlist">NOMBRE Y APELLIDO</p>
                          </div>
                          <div className=" col s12 m12 l4 ">
                            <p className="title-userlist">CARGO</p>
                          </div>
                          <div className=" col s12 m12 l3">
                            <p className="title-userlist">USUARIO</p>
                          </div>
                    </div>
                    <div className=" col s12 m12 l1">
                      <p className="title-userlist">RUT</p>
                    </div>
                    <div className=" col s12 m12 l2 center">
                      <p className="title-userlist">BLOQUEAR USUARIO</p>
                    </div>
                    <div className=" col s12 m12 l1 center"> 
                      <p className="title-userlist">EDITAR</p>
                    </div>
                    <div className=" col s12 m12 l2 center">
                      <p className="title-userlist">RESET PASSWORD</p>
                    </div>
                </div>
                <div className=" col s8 push-s2 m5 l11">
                  <div className="col l6">
                        <div className=" col s12 m12 pull-m4 l5 ">
                          <p className="subtitle-userlist hide-on-med-and-down">{user.name} {user.last_name}</p>
                        </div>
                        <div className=" col s12 m12 pull-m4 l4 ">
                          <p className="subtitle-userlist hide-on-med-and-down">{user.position?user.position.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '):null}</p>
                        </div>
                        <div className=" col s12 m12 pull-m4 l3">
                          <p className="subtitle-userlist hide-on-med-and-down">{user.type_user?user.type_user.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '):null}</p>
                        </div>
                    </div>
                    <div className=" col s12 m12 pull-m4 l2">
                      <p className="subtitle-userlist hide-on-med-and-down">{user.rut}</p>
                    </div>
                      {loguedUser.profileRMS !== "SUPERVISOR DE PRODUCCIÓN"?
                      <div className=" col s3 m4 l1" >
                        {user.status_user === "1"?
                          <UnLock  className="margin-unlock hover-hand" onClick={() => loadIdandState(user)} key={user.id}/>:
                          <Lock  className="margin-unlock hover-hand" onClick={() => loadIdandState(user)} key={user.id}/>}
                      </div>:
                        <div className=" col s3 m4 l1 ">
                          {user.status_user === "1"?
                          <Lock className="margin-unlock grey-unlock"/>:
                          <UnLock className="margin-unlock grey-unlock"/>}
                      </div>}
                      {loguedUser.profileRMS === "SUPERVISOR DE PRODUCCIÓN"?
                      <div className=" col s3 m4 l1 center ">
                          <Edit className="grey-unlock margin-topIcon"/>
                      </div>:
                        <div className=" col s3 m4 l1 center hover-hand margin-topIcon">
                        <Link to={`/edit-user/${user.id}`} key={user.id}>
                             <Edit/>
                        </Link>
                      </div>}
                          {loguedUser.profileRMS === "SUPERVISOR DE PRODUCCIÓN"?
                          <div className=" col s3 m4 l2 center">
                            <Link to={`/new-password/${user.rut}`} key={user.id}>
                              <Password className=" hover-hand margin-topIcon"/>
                              </Link>
                          </div>:
                            <div className=" col s3 m4 l2 center">
                              <Password className="grey-unlock margin-topIcon"/>
                          </div>
                          }
                      </div>
            </div>
            </li>
      ))}
    </ul>  


       




        {/* PAGINADO */}

        <div className="col s12 m12 l12 center">
          <ul className="pagination ">
            <li className="disabled">
              <a href="#!">
                <i className="material-icons chevron">chevron_left</i>
              </a>
            </li>
            <li className="active">
              <a className="font-pagination-seslected" href="#!">
                1
              </a>
            </li>
            <li className="waves-effect">
              <a className="font-pagination" href="#!">
                2
              </a>
            </li>
            <li className="waves-effect">
              <a className="font-pagination" href="#!">
                3
              </a>
            </li>
            <li className="waves-effect">
              <a className="font-pagination" href="#!">
                4
              </a>
            </li>
            <li className="waves-effect">
              <a className="font-pagination" href="#!">
                5
              </a>
            </li>
            <li className="waves-effect">
              <a className="font-pagination" href="#!">
                <i className="material-icons chevron ">chevron_right</i>
              </a>
            </li>
          </ul>
        </div>

        {/* botones  */}
        <div className="row">
          <div className="col s12 m12 l12 no-margin ">
            <a href="/dashboard">
              <button
                className="btn-small btn-block waves-effect waves-light z-depth-2 button-regresar-plan-list "
                type="button"
              >
                regresar
              </button>
            </a>
          </div>
        </div>
        
      </div>
    

      <Popup contentStyle={{background: "0"}} open={open1} closeOnDocumentClick onClose={closeModall1} lockScroll = {true}>
                 
                 <div className="alert z-depth-1" >
                  <div className="row row-fix ">
                    <div className="col s12 m12 l12 no-margin">
                      <div className="atention center-align">ATENCION</div>
                    </div>
                    <div className="col s12 m12 l12 no-margin divisor-bottom-line">
                      <div  className="alert-msg center-align ">Esta por bloquear usuario</div>
                    </div>
                  </div>
  
                  <div className="row">
                       <div className="col s6 m6 l6 divisor-right-line center">
                          <div onClick={closeModall1} className="button-alert waves-effect waves-dark btn-block">Cancelar</div >
                       </div>
                        <div className="col s6 m6 l6 center">
                         <button form="popup" onClick={twoFunctions} className="button-alert waves-effect waves-dark btn-block" type="submit">Continuar</button>
                        </div>
                  </div>
                 </div>
                </Popup>
                <Popup contentStyle={{background: "0"}} open={open2} closeOnDocumentClick onClose={closeModal2} lockScroll = {true}>
                   {errorState || successState?
                   <div className="alert z-depth-1" >
                    <div className="row row-fix ">
                      <div className="col s12 m12 l12 no-margin">
                        {errorState && (<div className="atention center-align">{errorState}</div>)}
                        {successState && (<div className="atention center-align">{successState}</div>)}
                        
                        
                      </div>
                      <div className="col s12 m12 l12 no-margin divisor-bottom-line">
                   
                      {errorState && (<div className="alert-msg center-align ">Contacte al Administrador</div>)}
                      {successState && (<div className="alert-msg center-align ">Muchas gracias</div>)}
                   
                      </div>
                    </div>
    
                    <div className="row">
                         <div className="col s6 m6 l12 center">
                          {errorState && (
                            <div onClick={closeModal2} className="button-alert waves-effect waves-dark btn-block">Continuar</div >)}
                            {successState && (
                            <div onClick={closeModal2} className="button-alert waves-effect waves-dark btn-block">Continuar</div >)}
                         </div>
                    </div>
                   </div>:null};
                  </Popup>
                  </>:<div className="progress white">
            <div className="indeterminate red"></div>
          </div>}

                 

   
    </>
  );
};
export default User_List;
