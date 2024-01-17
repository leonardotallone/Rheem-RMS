import React, {useContext, useEffect } from "react";
import Navbar from "./Navbar/Navbar";
import UserProfileImageUploader from "./UserProfileImageUploader";
import { getUserAndOverseerByUserIDContext } from "../contexts/GetUserAndOverseerByUserIDContext";
import { getAreaAndPositionUserContext } from "../contexts/GetAreaAndPositionUserContext";

const UserProfile = () => {

  const { setUserID, findedUser } = useContext(getUserAndOverseerByUserIDContext);
  const {setIdForAreaAndPosition,areaAndPosition } = useContext( getAreaAndPositionUserContext )
 
  console.log("Area and Position", areaAndPosition )

  const user = JSON.parse(localStorage.getItem('user'));
  console.log("User at UserProfile:", user)


  useEffect(() => {
    setIdForAreaAndPosition(user.id)
    setUserID(user.id)
  },[])

  return (
    <>
    <Navbar />
      <div className="row">
        <div className=" col s12 m12 l12 top-top-banner"></div>
        <div className="col s12 m12 l12 top-banner"></div>
      </div>

      {user && findedUser?  
            <> 

      <div className="row">
        
          {/* ---------------------------------------------User Name------------------------------------------- */}
     

        <div className= {user.status_user === "1" ? "col s12 m12 l12 user-banner z-depth-2" :
        "col s12 m12 l12 user-banner z-depth-2 locked-user"
        }>
          <div className="col s4 m4 l4 push-l2">
            <UserProfileImageUploader />
          </div>
          <div className="col s6 push-s2 m8 l8 hide-on-med-and-up ">
            <p className="font-fistName-lastName-small">{user.name}&nbsp;{user.last_name}</p>
            <p className="font-position-small">Usuario&nbsp;{user.type_user}</p>
          </div>
          <div className="col s6 push-s2 m8 l8 hide-on-small-only">
            <p className="font-fistName-lastName-large ">{user.name}&nbsp;{user.last_name}</p>
            <p className="font-position-large">Usuario&nbsp;{user.type_user}</p>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------User Data------------------------------------------- */}

      <div className="row">
        <div className="container">
          <div className="col s6 m6 l2 ">

            <p className="font-info-title">Nombre</p>
            <p className="font-info-description">{user.name}</p>

            <p className="font-info-title">Apellido Paterno</p>
            <p className="font-info-description">{user.last_name}</p>

            <p className="font-info-title">Fecha de Nacimiento</p>
            <p className="font-info-description">{user.birth_date}</p>

          </div>

          <div className="col s6 m6 l3 ">
            <p className="font-info-title">RUT</p>
            <p className="font-info-description">{user.rut}</p>

            <p className="font-info-title">Nº de Contacto</p>
            <p className="font-info-description">{user.contact?user.contact:'-'}</p>

            <p className="font-info-title">Correo Electronico</p>
            <p className="font-info-description">{user.email?user.email:'-'}</p>

          
          </div>

          <div className="col s6 m6 l2  ">
          
            <p className="font-info-title">Area</p>
            <p className="font-info-description">{areaAndPosition.id_work_area.work_area.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</p>

            <p className="font-info-title">Cargo</p>
            <p className="font-info-description">{areaAndPosition.position.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</p>

            <p className="font-info-title">Perfil RMS</p>
            <p className="font-info-description">{user.profileRMS?user.profileRMS:'-'}</p>
          </div>


          <div className="col s6 m6 l2 ">
                {/* <p className="font-info-title">Supervisor a Cargo</p>
                {overseer?
                <p className="font-info-description ">{overseer.name}&nbsp;{overseer.last_name}</p>:null} */}
        </div>

          <div className="col s6 m6 l2">
            <p className="font-info-title">Procesos Habilitados</p>
            {user.procesosHabilitados.test_hex === true?
            <p className="font-info-description">Test Hex</p>:<p className="font-info-description grey-text text-lighten-2">Test Hex</p>}
             {user.procesosHabilitados.assembly_pointer === true?  
            <p className="font-info-description">Puntero Ensamblaje</p>:<p className="font-info-description grey-text text-lighten-2">Puntero Ensamblaje</p>}
            {user.procesosHabilitados.functional_test === true? 
            <p className="font-info-description">Testing Funcional</p>:<p className="font-info-description  grey-text text-lighten-2">Testing Funcional</p>}
            {user.procesosHabilitados.pointer_packaging === true? 
            <p className="font-info-description">Puntero Embalaje</p>:<p className="font-info-description  grey-text text-lighten-2">Puntero Embalaje</p>}
            {user.procesosHabilitados.packaging_1 === true? 
            <p className="font-info-description ">Embalaje #1</p>:<p className="font-info-description  grey-text text-lighten-2">Embalaje #1</p>}
          </div>
          <div className="col s6 m6 l1">
            <p className="font-info-title">&nbsp;</p>
            {user.procesosHabilitados.packaging_2 === true? 
            <p className="font-info-description ">Embalaje #2</p>:<p className="font-info-description  grey-text text-lighten-2">Embalaje #2</p>}
            {user.procesosHabilitados.palletized === true? 
            <p className="font-info-description">Paletizado</p>:<p className="font-info-description  grey-text text-lighten-2">Paletizado</p>}
            {user.procesosHabilitados.folder === true? 
            <p className="font-info-description">Punzonadora</p>:<p className="font-info-description  grey-text text-lighten-2">Punzonadora</p>}
            {user.procesosHabilitados.printer === true? 
            <p className="font-info-description">Plegadora</p>:<p className="font-info-description  grey-text text-lighten-2">Plegadora</p>}
            {user.procesosHabilitados.punching_machine === true? 
            <p className="font-info-description">Impresora</p>:<p className="font-info-description  grey-text text-lighten-2">Impresora</p>}
          </div>
        </div>
      </div>
      {/* ---------------------------------------------Metrics------------------------------------------- */}
      <div className="row row-fix dash-banner">
        <div className="container ">
    <div className="col m12 l8 no-margin">
        <div className="col s12 m6 l6  ">
            <div className="metrix-box z-depth-1 ">
              <p className="number-card">18&nbsp;</p>
              <p className="text-card">Proyectos Realizados</p>
            </div>
        </div>
        <div className="col s12 m6 l6  ">
            <div className="metrix-box z-depth-1 ">
              <p className="number-card">18&nbsp;</p>
              <p className="text-card">Proyectos Realizados</p>
            </div>
        </div>
        <div className="col s12 m6 l6  ">
            <div className="metrix-box z-depth-1 ">
              <p className="number-card">18&nbsp;</p>
              <p className="text-card">Proyectos Realizados</p>
            </div>
        </div>
        <div className="col s12 m6 l6  ">
            <div className="metrix-box z-depth-1 ">
              <p className="number-card">18&nbsp;</p>
              <p className="text-card">Proyectos Realizados</p>
            </div>
        </div>
    </div>
        <div className="col s12 m12 l4">
            <div className="metrix-box-h z-depth-1 ">
              <p className="number-card">18&nbsp;</p>
              <p className="text-card">Proyectos Realizados</p>
            </div>
        </div>
      
  
      {/* ---------------------------------------------Buttoms------------------------------------------- */}
        
            {/* <div className="col s12 m12 l4 ">
            {edit===true?
              <button onClick={abortOpen} className="btn-small btn-block waves-effect waves-light button-cancel-userprofile z-depth-2" type="buttton">cancelar edicion</button>
              :null}  
            </div> */}

            <div className="col s12 m12 l12">
              {/* {admin === true?(  
                edit === true? (
                  edit && lock === true? 
                  <button onClick={unlockUserOpen} className="btn-small btn-block waves-effect waves-light button-back-userprofile z-depth-2" type="submit">desbloquear usuario</button>:
                  <button onClick={lockUserOpen} className="btn-small btn-block waves-effect waves-light button-edit-userprofile z-depth-3" type="submit">bloquear usuario</button>):
                  <a href="/list-users">  
              <button className="btn-small btn-block waves-effect waves-light button-back-userprofile z-depth-2" type="button">regresar a usuarios</button>
              </a>):
              <a href="/dashboard">
              <button className="btn-small btn-block waves-effect waves-light button-back-userprofile z-depth-2" type="button">regresar </button>
              </a>} */}


              <a href="/dashboard">
              <button className="btn-small btn-block waves-effect waves-light button-back-userprofile z-depth-2" type="button">regresar </button>
              </a>
            </div>


            {/* <div className="col s12 m12 l4">
              {edit === false?
              <button onClick={updateProfileOpen} className="btn-small btn-block waves-effect waves-light button-edit-userprofile z-depth-3 " type="submit">Editar Perfil</button>:
              <button onClick={saveOpen} className="btn-small btn-block waves-effect waves-light button-edit-userprofile z-depth-2" type="submit">Guardar Edicion</button>}
            </div> */}

            {/* <Popup contentStyle={{background: "0"}} open={update} closeOnDocumentClick onClose={updateProfileClose} lockScroll = {true}>
                 <div className="alert z-depth-1" >
                  <div className="row row-fix ">
                    <div className="col s12 m12 l12 no-margin">
                      <div className="atention center-align">ATENCION</div>
                    </div>
                    <div className="col s12 m12 l12 no-margin divisor-bottom-line">
                      <div  className="alert-msg center-align ">Esta por editar parámetros de Usuario</div>
                    </div>
                  </div>
  
                  <div className="row">
                       <div className="col s6 m6 l6 divisor-right-line center">
                          <div onClick={updateProfileClose} className="button-alert waves-effect waves-dark btn-block">Cancelar</div >
                       </div>
                        <div className="col s6 m6 l6 center">
                         <div onClick={twoFunctions_1} className="button-alert waves-effect waves-dark btn-block">Continuar</div>
                        </div>
                  </div>
                 </div>
                </Popup>
                <Popup contentStyle={{background: "0"}} open={saveEdition} closeOnDocumentClick onClose={saveClose} lockScroll = {true}>
                 <div className="alert z-depth-1" >
                  <div className="row row-fix ">
                    <div className="col s12 m12 l12 no-margin">
                      <div className="atention center-align">ATENCION</div>
                    </div>
                    <div className="col s12 m12 l12 no-margin divisor-bottom-line">
                      <div  className="alert-msg center-align ">¿Desea guardar los cambios realizados?</div>
                    </div>
                  </div>
  
                  <div className="row">
                       <div className="col s6 m6 l6 divisor-right-line center">
                          <div onClick={saveClose} className="button-alert waves-effect waves-dark btn-block">Cancelar</div >
                       </div>
                        <div className="col s6 m6 l6 center">
                         <div onClick={twoFunctions_2} className="button-alert waves-effect waves-dark btn-block">Continuar</div>
                        </div>
                  </div>
                 </div>
                </Popup>
                <Popup contentStyle={{background: "0"}} open={successEdition} closeOnDocumentClick onClose={successClose} lockScroll = {true}>
                 <div className="alert z-depth-1" >
                  <div className="row row-fix ">
                    <div className="col s12 m12 l12 no-margin">
                      <div className="atention center-align">Cambios Guardados Exitósamente</div>
                    </div>
                    <div className="col s12 m12 l12 no-margin divisor-bottom-line">
                      <div  className="alert-msg center-align ">Muchas gracias</div>
                    </div>
                  </div>
  
                  <div className="row">
                       <div className="col s12 m16 l12 center">
                          <div onClick={twoFunctions_3} className="button-alert waves-effect waves-dark btn-block ">Continuar</div >
                       </div>
                       
                  </div>
                 </div>
                </Popup>
                <Popup contentStyle={{background: "0"}} open={abortEdition} closeOnDocumentClick onClose={abortClose} lockScroll = {true}>
                 <div className="alert z-depth-1" >
                  <div className="row row-fix ">
                    <div className="col s12 m12 l12 no-margin">
                      <div className="atention center-align">ATENCION</div>
                    </div>
                    <div className="col s12 m12 l12 no-margin divisor-bottom-line">
                      <div  className="alert-msg center-align ">Los cambios no se guardaron!</div>
                    </div>
                  </div>
  
                  <div className="row">
                       <div className="col s6 m6 l6 divisor-right-line center">
                          <div onClick={abortClose} className="button-alert waves-effect waves-dark btn-block">Cancelar</div >
                       </div>
                        <div className="col s6 m6 l6 center">
                         <div onClick={twoFunctions_4} className="button-alert waves-effect waves-dark btn-block">Continuar</div>
                        </div>
                  </div>
                 </div>
                </Popup>
                <Popup contentStyle={{background: "0"}} open={lockAlert} closeOnDocumentClick onClose={lockUserClose} lockScroll = {true}>
                 <div className="alert z-depth-1" >
                  <div className="row row-fix ">
                    <div className="col s12 m12 l12 no-margin">
                      <div className="atention center-align">ATENCION</div>
                    </div>
                    <div className="col s12 m12 l12 no-margin divisor-bottom-line">
                      <div  className="alert-msg center-align ">¿Esta seguro de bloquear al usuario?</div>
                    </div>
                  </div>
  
                  <div className="row">
                       <div className="col s6 m6 l6 divisor-right-line center">
                          <div onClick={lockUserClose} className="button-alert waves-effect waves-dark btn-block">Cancelar</div >
                       </div>
                        <div className="col s6 m6 l6 center">
                         <div onClick={twoFunctions_5} className="button-alert waves-effect waves-dark btn-block">Continuar</div>
                        </div>
                  </div>
                 </div>
                </Popup>
                <Popup contentStyle={{background: "0"}} open={lockSuccess} closeOnDocumentClick onClose={lockUserSuccessClose} lockScroll = {true}>
                 <div className="alert z-depth-1" >
                  <div className="row row-fix ">
                    <div className="col s12 m12 l12 no-margin">
                      <div className="atention center-align">ATENCION</div>
                    </div>
                    <div className="col s12 m12 l12 no-margin divisor-bottom-line">
                      <div  className="alert-msg center-align ">Usuario bloqueado Exitosamente!</div>
                    </div>
                  </div>
  
                  <div className="row">
                       <div className="col s12 m12 l12 center">
                          <div onClick={lockUserSuccessClose} className="button-alert waves-effect waves-dark btn-block">Continuar</div >
                       </div>
                  </div>
                 </div>
                </Popup>
                <Popup contentStyle={{background: "0"}} open={unlockAlert} closeOnDocumentClick onClose={unlockUserClose} lockScroll = {true}>
                 <div className="alert z-depth-1" >
                  <div className="row row-fix ">
                    <div className="col s12 m12 l12 no-margin">
                      <div className="atention center-align">ATENCION</div>
                    </div>
                    <div className="col s12 m12 l12 no-margin divisor-bottom-line">
                      <div  className="alert-msg center-align ">¿Esta seguro de Desbloquear al usuario?</div>
                    </div>
                  </div>
  
                  <div className="row">
                       <div className="col s6 m6 l6 divisor-right-line center">
                          <div onClick={unlockUserClose} className="button-alert waves-effect waves-dark btn-block">Cancelar</div >
                       </div>
                        <div className="col s6 m6 l6 center">
                         <div onClick={twoFunctions_6} className="button-alert waves-effect waves-dark btn-block">Continuar</div>
                        </div>
                  </div>
                 </div>
                </Popup>
                <Popup contentStyle={{background: "0"}} open={unlockSuccess} closeOnDocumentClick onClose={unlockUserSuccessClose} lockScroll = {true}>
                 <div className="alert z-depth-1" >
                  <div className="row row-fix ">
                    <div className="col s12 m12 l12 no-margin">
                      <div className="atention center-align">ATENCION</div>
                    </div>
                    <div className="col s12 m12 l12 no-margin divisor-bottom-line">
                      <div  className="alert-msg center-align ">Usuario Desbloqueado Exitosamente!</div>
                    </div>
                  </div>
  
                  <div className="row">
                       <div className="col s12 m12 l12 center">
                          <div onClick={unlockUserSuccessClose} className="button-alert waves-effect waves-dark btn-block">Continuar</div >
                       </div>
                  </div>
                 </div>
                </Popup> */}

              </div>
            </div>
      </>:<div className="progress white">
            <div className="indeterminate red"></div>
          </div> }
      
    </>
  );
};
export default UserProfile;
