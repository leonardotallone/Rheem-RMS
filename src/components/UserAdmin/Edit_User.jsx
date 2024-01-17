import { Formik, Form, Field, ErrorMessage } from "formik";
import Popup from 'reactjs-popup';

import QR from "../../assets/logos/QR.png"
import Navbar from "../Navbar/Navbar";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";


// import { rmsProfileContext } from "../../contexts/RMSProfilesContext"
import { overseerContext } from "../../contexts/OverseerListContext"
import { workAreasContext } from "../../contexts/WorkAreasContext";
import { updateUserDataContext } from "../../contexts/UpdateUserDataContext";
import { getAreaAndPositionUserContext } from "../../contexts/GetAreaAndPositionUserContext";
import { getPositionByAreaContext } from "../../contexts/GetPositionByAreaContext";
import { rmsProfilesContext } from "../../contexts/GetAllRMSProfilesContext"

import { getUserAndOverseerByUserIDContext } from "../../contexts/GetUserAndOverseerByUserIDContext";


const EditUser = () => {

  // const {setIdUsuario,RMSProfile} = useContext(rmsProfileContext);
  const { setUserID, findedUser } = useContext(getUserAndOverseerByUserIDContext)
  const { overseerList } = useContext(overseerContext)
  const { workAreas } = useContext(workAreasContext);
  const { setIdUpdateUser, setUpdateUser, errorUpdateData, successUpdateData } = useContext(updateUserDataContext);

  const { setIdForAreaAndPosition, areaAndPosition } = useContext(getAreaAndPositionUserContext);
  const { positions, setAreaId } = useContext(getPositionByAreaContext);
  const { RMS_Profiles } = useContext (rmsProfilesContext)

  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [habilitar, setHabilitar] = useState(false);
  const [usuarioDirecto, setUsuarioDirecto] = useState(false);
  const [usuarioIndirecto, setUsuarioIndirecto] = useState(false);


  
  let {id} = useParams();
  
  useEffect(()=>{
    setIdForAreaAndPosition(id)
  },[])
  
  useEffect(() => {
    
    if(findedUser) {
      if(findedUser.type_user === "directo" || findedUser.type_user === "Directo"){
        setUsuarioDirecto(true)
      }
      if(findedUser.type_user === "indirecto" || findedUser.type_user === "Indirecto"){
        setUsuarioIndirecto(true)
      }
    }
  },[findedUser])
  
  
  useEffect (() => {
    setUserID(id)
    setIdUpdateUser(id)
  },[id, setUserID, setIdUpdateUser]);
  
  
  const openModal1 = () => {
   setOpen1(true);
 }
  const closeModall1 =() => {
      setOpen1(false);
    };
    const validar = (values) => {
      const errors = {};
      const rut = /^\d{7,8}-\d$/

      if (values.type_user === "indirecto" || values.type_user === "Indirecto") {
        setUsuarioDirecto(false)
        setUsuarioIndirecto(true)
          }
      if (values.type_user === "directo" || values.type_user === "Directo"){
        setUsuarioIndirecto(false)
        setUsuarioDirecto(true)
          }

      // if (!values.rut) {
      //     errors.type_user= "Por favor ingrese RUT";
      //     } 
          // if (!values.rut.match(rut)) {
          //   errors.type_user = "Formato de RUT incorrecto";
          //   }  
      // if(!values.last_name){
      //    errors.type_user = "Por favor ingrese Apellido Paterno"
      //    } 
      // if(!values.name){
      //     errors.type_user = "Por favor ingrese Nombre"
      //    } 
      // if(values.type_user === "indirecto" && !values.email){
      //     errors.type_user = "Por favor ingrese correo electronico"
      //     }  
      // if (usuarioIndirecto === true && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
      //     errors.type_user = "Dirección de Correo Electrónico Inválida";
      //    } 
         
       // if (values.type_user === "Indirecto" && !values.profile){
      //    errors.type_user = "Por favor seleccione Perfil RMS" 
      //     } 
      // if(!values.position){
      //    errors.type_user = "Por favor seleccione Cargo" 
      //     }
          if(values.work_area){
            setAreaId(values.work_area)
            } 
      // if(!values.work_area){
      //     errors.type_user = "Por favor seleccione area"
      //     }
      // if(!values.type_user){
      //     errors.type_user = "Por favor seleccione tipo de usuario"
      //    } 
      if(!errors.type_user){
          setHabilitar(true)
          }
       if(errors.type_user){
          setHabilitar(false)
          }
          
          return errors;
        
        };
        
        const handleSubmit = (values) => {
          
          const updateUser = {
            status_user:findedUser.status_user,

            type_user: values.type_user,
            work_area: values.work_area, 
            position: values.position, 
            profileRMS: usuarioDirecto? null:values.profileRMS, 
            email: usuarioDirecto? null:values.email,

            name:values.name,
            last_name: values.last_name, 
            rut: values.rut,
            birth_date: values.birth_date,

            contact: values.contact, 
            overseer: values.overseer,
            procesosHabilitados:
            {
              test_hex: usuarioIndirecto? false:values.test_hex, 
              assembly_pointer:usuarioIndirecto? false:values.assembly_pointer,
              functional_test:usuarioIndirecto? false:values.functional_test,
              pointer_packaging:usuarioIndirecto? false:values.pointer_packaging,
              packaging_1:usuarioIndirecto? false: values.packaging_1, 
              packaging_2:usuarioIndirecto? false: values.packaging_2, 
              palletized:usuarioIndirecto? false: values.palletized,
  
              folder: usuarioIndirecto? false:values.folder,
              printer:usuarioIndirecto? false: values.printer,
              punching_machine:usuarioIndirecto? false:values.punching_machine, 
            }, 

           }
           setUpdateUser(updateUser) 
            console.log("SUBMIT UPDATE USER",updateUser)
          };


  const twoFunctions = () => {
    setOpen2(true);
    setOpen1(false) 
  }
  const closeModal2 =() => {
    window.location.reload()
    setOpen2(false);
  }

  return (
    <>
      <Navbar />
      <div className="row">
        <div className=" col s12 m12 l12 top-top-banner"></div>
        <div className="col s12 m12 l12 top-banner"></div>
      </div>
      {/* ---------------------------------------Banner Title------------------- */}
{findedUser && areaAndPosition && RMS_Profiles?<> 

      <div className="row">
        <div className="col s12 m12 l12 title-banner z-depth-2">
          <div className="container">

            <div className="col s9 m9 l8 no-margin">
           
              <p className="font-title-create-plan">{`${findedUser.name} ${findedUser.last_name}`}</p>
              <p className="font-subtitle-create-plan">Edición</p>
            </div>
        

            <div className="col s11 m5 l3 no-margin">
              <p className="font-form-create-plan left ">RC:16-062</p>
              {/* <p className="font-plan-create-plan left ">PLAN Nº: D0103-2023</p>
              <p className="font-date-create-plan left ">FECHA DE REGISTRO: 23-06-2023</p> */}
            </div>

            <div className="col s1 m1 l1 push-m6">
              <img className="qr right " src={QR} alt=""></img>
              <i className=" right material-symbols-outlined print">&nbsp;</i>
            </div>

          </div>
        </div>
      </div>

      {/* ---------------------------------------Formulario------------------- */}


      <Formik 
              initialValues={{ 
                   
                status_user:findedUser.status_user,

                type_user: findedUser.type_user,
                work_area: areaAndPosition.id_work_area.id,
                position: areaAndPosition.id, 
                profileRMS: findedUser.profileRMS, 
                email: findedUser.email,
    
                name:findedUser.name,
                last_name: findedUser.last_name, 
                rut: findedUser.rut,
                birth_date: findedUser.birth_date,
    
                contact: findedUser.contact, 
                overseer: findedUser.overseer.id, 
    
                test_hex: findedUser.procesosHabilitados.test_hex, 
                assembly_pointer:findedUser.procesosHabilitados.assembly_pointer,
                functional_test:findedUser.procesosHabilitados.functional_test,
                pointer_packaging:findedUser.procesosHabilitados.pointer_packaging,
                packaging_1: findedUser.procesosHabilitados.packaging_1, 
                packaging_2: findedUser.procesosHabilitados.packaging_2, 
                palletized: findedUser.procesosHabilitados.palletized,
    
                folder: findedUser.procesosHabilitados.folder,
                printer: findedUser.procesosHabilitados.printer,
                punching_machine:findedUser.procesosHabilitados.punching_machine, 
              }}

              onSubmit={handleSubmit}
              validate={validar}
            >
              <Form id="popup">


      <div className="container">
        <p className="form-title">COMPLETE EL SIGUIENTE FORMULARIO</p>

        <div className="warning-inputs-scan">
              <ErrorMessage name="type_user" />       
        </div>
    
        <div className="row">
          <div className="col s12 m12 l4 ">
            <p className="display-box-title">Tipo de Usuario</p>

            <div className="display-box valign-wrapper">   
                  <Field as="select" name="type_user"  className="browser-default collapsible-header">
                    <option value={findedUser.type_user}>{findedUser.type_user.charAt(0).toUpperCase()+ findedUser.type_user.slice(1)}</option>  
                    {findedUser.type_user === "directo"||findedUser.type_user === "Directo"?
                    <option value="Indirecto">Indirecto</option>:null}
                    {findedUser.type_user === "indirecto"||findedUser.type_user === "Indirecto"?
                    <option value="Directo">Directo</option>:null}
                      
                  </Field> 
            </div>

            <p className="display-box-title">Area</p>
              <div className="display-box valign-wrapper">
              <Field as="select" name="work_area"  className="browser-default collapsible-header">
                    <option value={areaAndPosition.id_work_area.id}>{areaAndPosition.id_work_area.work_area.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</option> 
                    {workAreas?.map((area) => (
                      area.work_area !== areaAndPosition.id_work_area.work_area &&
                        <option value={area.id} key={area.id}>{area.work_area.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</option>
                    ))}    
              </Field>
            </div>

            <p className="display-box-title">Cargo</p>
              <div className="display-box valign-wrapper">
              <Field as="select" name="position"  className="browser-default collapsible-header">
                    <option value={areaAndPosition.position}>{areaAndPosition.position.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</option>  
                    {positions?.map((position) => (
                    position.id !== areaAndPosition.id &&
                <option value={position.id} key={position.id}>{position.position.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</option>     
                    ))} 
              </Field>
            </div>

            <p className="display-box-title">Perfil RMS</p>
              <div className="display-box valign-wrapper">
              <Field as="select" name="profileRMS"  className="browser-default collapsible-header" disabled = {usuarioDirecto === true || usuarioIndirecto === false}>
                
                    <option value={findedUser.profileRMS}>{findedUser.profileRMS}</option>
                    {RMS_Profiles?.map((profile) => (
                     profile.profile !== findedUser.profileRMS && 
                <option value={profile.profile} key={profile.id}>{profile.profile.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</option>
              ))} 
              </Field>
            </div>

       
            <p className="display-box-title">Correo Electrónico</p>
              <div className="display-box valign-wrapper">
              <Field name="email"  className="input-field-common" type="email" disabled={usuarioDirecto === true || usuarioIndirecto === false}/>
             
            </div>
        
          </div>

{/*Columna central*/}

          <div className="col s12 m12 l4 ">

            <p className="display-box-title">Nombre</p>
              <div className="display-box valign-wrapper">
              <Field name="name"  className="input-field-common" type="text"/>
            </div>

            <p className="display-box-title">Apellido</p>
              <div className="display-box valign-wrapper">
              <Field name="last_name"  className="input-field-common" type="text"/>
            </div>

            <p className="display-box-title"> Nº de Contacto</p>
            <div className="display-box valign-wrapper">
            <Field name="contact"  className="input-field-common" type="phone"/>
            </div>

           <p className="display-box-title">RUT</p>
            <div className="display-box valign-wrapper">
            <Field name="rut"  className="input-field-common" type="text"/>
            </div>

            <p className="display-box-title">Fecha de Nacimiento</p>
            <div className="display-box valign-wrapper">
            <Field name="birth_date"  className="input-field-common" type="date"/>
            </div>

          </div>

          {/* Columna Derecha */}

          <div className="col s12 m12 l4 ">    

     

              <p className="display-box-title">Supervisor a Cargo</p>
              <div className="display-box valign-wrapper">
              <Field as="select" name="overseer" className="browser-default collapsible-header">
                    <option value={findedUser.overseer.id}>{findedUser.overseer.name + " " + findedUser.overseer.last_name}</option> 
                    {overseerList?.map((supervisor) => (
                      supervisor.id !== findedUser.overseer.id &&
                       <option value={supervisor.id} key={supervisor.id}>{supervisor.name} {supervisor.last_name}</option>
                   ))}    
                   
              </Field>
            </div>
      
          <div className="row">
            <div className="col l12">
              <p className="display-box-title">Procesos Habilitados</p>
            </div>
            <div className="col l6">
              <label>
                <Field type="checkbox" name="test_hex" disabled={usuarioDirecto === false || usuarioIndirecto === true} />
                <span>&nbsp;</span>
              </label>
              <p className="display-box-title in-line">Test Hex</p>
            </div>
            <div className="col l6">
              <label>
                <Field type="checkbox" name="assembly_pointer" disabled={usuarioDirecto === false || usuarioIndirecto === true}/>
                <span>&nbsp;</span>
              </label>
              <p className="display-box-title in-line">Puntero Ensamblaje</p>
            </div>
            <div className="row"></div>
            <div className="col l6">
              <label>
                <Field type="checkbox" name="functional_test" disabled={usuarioDirecto === false || usuarioIndirecto === true} />
                <span>&nbsp;</span>
              </label>
              <p className="display-box-title in-line">Test Funcional</p>
            </div>
            <div className="col l6">
              <label>
                <Field type="checkbox" name="pointer_packaging" disabled={usuarioDirecto === false || usuarioIndirecto === true}/>
                <span>&nbsp;</span>
              </label>
              <p className="display-box-title in-line">Puntero Embalaje</p>
            </div>

            <div className="row"></div>

            <div className="col l6">
              <label>
              <Field type="checkbox" name="packaging_1" disabled={usuarioDirecto === false || usuarioIndirecto === true}/>
                <span>&nbsp;</span>
              </label>
              <p className="display-box-title in-line">Embalaje #1</p>
            </div>
            <div className="col l6">
              <label>
              <Field type="checkbox" name="packaging_2" disabled={usuarioDirecto === false || usuarioIndirecto === true}/>
                <span>&nbsp;</span>
              </label>
              <p className="display-box-title in-line">Embalaje #2</p>
            </div>

            <div className="row"></div>

            <div className="col l6 ">
              <label>
              <Field type="checkbox" name="folder" disabled={usuarioDirecto === false || usuarioIndirecto === true}/>
                <span>&nbsp;</span>
              </label>
              <p className="display-box-title in-line">Plegadora</p>
            </div>
            <div className="col l6">
              <label>
              <Field type="checkbox" name="punching_machine" disabled={usuarioDirecto === false || usuarioIndirecto === true}/>
                <span>&nbsp;</span>
              </label>
              <p className="display-box-title in-line">Punzonadora</p>
            </div>

            <div className="row"></div>

            <div className="col l6">
              <label>
              <Field type="checkbox" name="printer" disabled={usuarioDirecto === false || usuarioIndirecto === true}/>
                <span>&nbsp;</span>
              </label>
              <p className="display-box-title in-line">Impresora</p>
            </div>
            <div className="col l6">
              <label>
              <Field type="checkbox" name="palletized" disabled={usuarioDirecto === false || usuarioIndirecto === true}/>
                <span>&nbsp;</span>
              </label>
              <p className="display-box-title in-line">Paletizado</p>
            </div>
            </div>
            </div>

          
     
         

        </div>
     

         {/* botones */}
          
          
        <div className="row">
            <div className="col s12 m12 l4"><a href="/dashboard">
              <button className="btn-small btn-block waves-effect waves-light button-regresar-create-plan z-depth-2" type="button">
                regresar
              </button></a>
            </div>

            <div className="col s12 m12 l8">
              <div >
                 <button  disabled={habilitar===false} onClick={openModal1} className="btn-small btn-block waves-effect waves-light button-ingresar-create-plan z-depth-2 " type="button">
                   EDITAR USUARIO
                 </button>
              </div>
            </div>
        </div>
      </div>

      </Form>
            </Formik>
            </>: <div className="progress white">
            <div className="indeterminate red"></div>
          </div>}

            <Popup contentStyle={{background: "0"}} open={open1} closeOnDocumentClick onClose={closeModall1} lockScroll = {true}>
                 
                 <div className="alert z-depth-1" >
                  <div className="row row-fix ">
                    <div className="col s12 m12 l12 no-margin">
                      <div className="atention center-align">ATENCION</div>
                    </div>
                    <div className="col s12 m12 l12 no-margin divisor-bottom-line">
                      <div  className="alert-msg center-align ">Esta por cambiar informacion de usuario</div>
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
                  {errorUpdateData || successUpdateData?
                   <div className="alert z-depth-1" >
                    <div className="row row-fix ">
                      <div className="col s12 m12 l12 no-margin">
                        
                       {errorUpdateData && (<div className="atention center-align">{errorUpdateData}</div>)}
                       {successUpdateData && (<div className="atention center-align">{successUpdateData}</div>)}
                       
                      </div>
                      <div className="col s12 m12 l12 no-margin divisor-bottom-line">
                     
                      {errorUpdateData && (<div className="alert-msg center-align ">Contacte al Administrador</div>)}
                      {successUpdateData && (<div className="alert-msg center-align ">Muchas gracias!</div>)}
                      </div>
                    </div>
    
                    <div className="row">
                         <div className="col s6 m6 l12 center">
                         {errorUpdateData && (<div onClick={closeModal2} className="button-alert waves-effect waves-dark btn-block">Continuar</div>)}
                         {successUpdateData && (<div onClick={closeModal2} className="button-alert waves-effect waves-dark btn-block">Continuar</div>)}
                         </div>
                    </div>
                   </div>:null};
                  </Popup>






    </>




 
  );
};
export default EditUser;
