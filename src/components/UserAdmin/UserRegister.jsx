import { Formik, Form, Field, ErrorMessage } from "formik";
import Popup from 'reactjs-popup';

import QR from "../../assets/logos/QR.png"
import Navbar from "../Navbar/Navbar";
import { useState, useContext } from "react";
import { createUserContext } from "../../contexts/CreateUserContext";
import { overseerContext } from "../../contexts/OverseerListContext";
import { workAreasContext } from "../../contexts/WorkAreasContext";
import { getPositionByAreaContext } from "../../contexts/GetPositionByAreaContext";
import { rmsProfilesContext } from "../../contexts/GetAllRMSProfilesContext"


const UserRegister = () => {

  const { setNewUser, createUserError, createUserSuccess} = useContext(createUserContext);
  const { overseerList } = useContext(overseerContext);
  const { workAreas } = useContext(workAreasContext);
  const { positions, setAreaId } = useContext(getPositionByAreaContext);
  const { RMS_Profiles } = useContext (rmsProfilesContext)

  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [habilitar, setHabilitar] = useState(false);
  const [usuarioDirecto, setUsuarioDirecto] = useState(false);
  const [usuarioIndirecto, setUsuarioIndirecto] = useState(false);
 
  const openModal1 = () => {
   setOpen1(true);
 }
  const closeModall1 =() => {
      setOpen1(false);
    };
    const validar = (values) => {
      const errors = {};
      const rut = /^\d{7,8}-\d$/

      if (values.type_user === "Indirecto") {
        setUsuarioDirecto(false)
        setUsuarioIndirecto(true)
          }
      if (values.type_user === "Directo"){
        setUsuarioIndirecto(false)
        setUsuarioDirecto(true)
          }
  
      if(values.type_user === "directo" && !values.overseer) {
         errors.type_user = "Por favor seleccione Supervisor"
          }
      if(!values.birth_date){
          errors.type_user = "Por ingrese fecha de Nacimiento"
          }
      if (!values.rut.match(rut)) {
              errors.type_user = "Formato de RUT incorrecto";
              } 
      if (!values.rut) {
          errors.type_user = "Por favor ingrese RUT";
          }  
      if(!values.last_name) {
         errors.type_user = "Por favor ingrese Apellido"
         } 
      if(!values.name){
          errors.type_user = "Por favor ingrese Nombre"
         } 
         if (values.type_user === "indirecto" && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
             errors.type_user = "Dirección de Correo Electrónico Inválida";
            } 
      if(values.type_user === "indirecto" && !values.email){
          errors.type_user = "Por favor ingrese correo electronico"
          }  
      if (values.type_user === "indirecto" && !values.profile){
         errors.type_user = "Por favor seleccione Perfil RMS" 
          } 
      if(!values.position){
         errors.type_user = "Por favor seleccione Cargo" 
          } 
      if(!values.work_area){
          errors.type_user = "Por favor seleccione area"
          }
      if(values.work_area){
          setAreaId(values.work_area)
      }
      if(!values.type_user){
          errors.type_user = "Por favor seleccione tipo de usuario"
         } 
      if(!errors.type_user){
          setHabilitar(true)
          }
       if(errors.type_user){
          setHabilitar(false)
          }
        
          return errors;
        
        };
        
        const handleSubmit = (values) => {
          
          const newUser = {
            status_user:'1',  

            type_user: values.type_user,
            work_area: values.work_area, 
            position: values.position, 
            profile: values.profile, 
            email: values.email,

            name:values.name,
            last_name: values.last_name, 
            rut: values.rut,
            birth_date: values.birth_date,

            contact: values.contact, 
            overseer: values.overseer, 

            procesosHabilitados:{
              test_hex: values.test_hex, 
              assembly_pointer:values.assembly_pointer,
              functional_test:values.functional_test,
              pointer_packaging:values.pointer_packaging,
              packaging_1: values.packaging_1, 
              packaging_2: values.packaging_2, 
              palletized: values.palletized,
              folder: values.folder,
              printer: values.printer,
              punching_machine:values.punching_machine, 
            }
           }
           console.log(newUser)
           setNewUser(newUser)
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
{overseerList && workAreas? <>

      <div className="row">
        <div className="col s12 m12 l12 title-banner z-depth-2">
          <div className="container">

            <div className="col s9 m9 l8 no-margin">
              <p className="font-title-create-plan">Alta de Usuario</p>
              <p className="font-subtitle-create-plan">Creación de nuevo Usuario</p>
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
                status_user:'1',
                
                type_user:'',
                work_area:'', 
                position:'', 
                profileRMS:'', 
                email:'',

                name:'',
                last_name:'', 
                rut:'',
                birth_date: '',
                contact:'', 

                overseer:'', 

                test_hex:false, 
                assembly_pointer:false,
                functional_test:false,
                pointer_packaging:false,
                packaging_1:false, 
                packaging_2:false, 
                palletized:false,

                folder:false,
                printer:false,
                punching_machine:false, 
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
                    <option disabled value="">Seleccione tipo de usuario</option>     
                    <option value="Directo">Directo</option>
                    <option value="Indirecto">Indirecto</option>
                  </Field> 
            </div>

            <p className="display-box-title">Area</p>
              <div className="display-box valign-wrapper">
              <Field as="select" name="work_area"  className="browser-default collapsible-header">
                    <option disabled value="">Seleccione Area</option>  
                    {workAreas?.map((area) => (
                <option value={area.id} key={area.id}>{area.work_area.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</option>
              ))}   
              </Field>
            </div>

            <p className="display-box-title">Cargo</p>
              <div className="display-box valign-wrapper">
              <Field as="select" name="position"  className="browser-default collapsible-header">
                    <option disabled value="">Seleccione Cargo</option>
                    {positions?.map((position) => (
                <option value={position.id} key={position.id}>{position.position.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</option>     
                    ))}  
              </Field>
            </div>

            <p className="display-box-title">Perfil RMS</p>
              <div className={usuarioIndirecto === false? "display-box valign-wrapper conditional-background":"display-box valign-wrapper"}>
              <Field disabled={usuarioIndirecto === false} as="select" name="profileRMS"  className="browser-default collapsible-header" >
                    <option disabled value="">Seleccione Perfil RMS</option>
                    {RMS_Profiles?.map((profile) => (
                <option value={profile.profile} key={profile.id}>{profile.profile.toUpperCase()}</option>
              ))}     
              </Field>
            </div>

       
            <p className="display-box-title">Correo Electrónico</p>
              <div className={usuarioIndirecto === false? "display-box valign-wrapper conditional-background":"display-box valign-wrapper"}>
              <Field name="email"  className="input-field-common" type="email" disabled={usuarioIndirecto === false}/>
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

           <p className="display-box-title">RUT</p>
            <div className="display-box valign-wrapper">
            <Field name="rut"  className="input-field-common" type="text"/>
            </div>

            <p className="display-box-title">Fecha de Nacimiento</p>
            <div className="display-box valign-wrapper">
            <Field name="birth_date"  className="input-field-common" type="date"/>
            </div>

            <p className="display-box-title"> Nº de Contacto</p>
            <div className="display-box valign-wrapper">
            <Field name="contact"  className="input-field-common" type="phone"/>
            </div>

          </div>

          {/* Columna Derecha */}

          <div className="col s12 m12 l4 ">    
              <p className="display-box-title">Supervisor a Cargo</p>
              <div className="display-box valign-wrapper">
              <Field as="select" name="overseer" className="browser-default collapsible-header">
                    <option disabled value="">Seleccione Supervisor</option> 
              {overseerList?.map((supervisor) => (
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
                <Field type="checkbox" name="test_hex" disabled={usuarioDirecto === false} />
                <span>&nbsp;</span>
              </label>
              <p className="display-box-title in-line">Test Hex</p>
            </div>
            <div className="col l6">
              <label>
                <Field type="checkbox" name="assembly_pointer" disabled={usuarioDirecto === false}/>
                <span>&nbsp;</span>
              </label>
              <p className="display-box-title in-line">Puntero Ensamblaje</p>
            </div>
            <div className="row"></div>
            <div className="col l6">
              <label>
                <Field type="checkbox" name="functional_test" disabled={usuarioDirecto === false} />
                <span>&nbsp;</span>
              </label>
              <p className="display-box-title in-line">Test Funcional</p>
            </div>
            <div className="col l6">
              <label>
                <Field type="checkbox" name="pointer_packaging" disabled={usuarioDirecto === false}/>
                <span>&nbsp;</span>
              </label>
              <p className="display-box-title in-line">Puntero Embalaje</p>
            </div>

            <div className="row"></div>

            <div className="col l6">
              <label>
              <Field type="checkbox" name="packaging_1" disabled={usuarioDirecto === false}/>
                <span>&nbsp;</span>
              </label>
              <p className="display-box-title in-line">Embalaje #1</p>
            </div>
            <div className="col l6">
              <label>
              <Field type="checkbox" name="packaging_2" disabled={usuarioDirecto === false}/>
                <span>&nbsp;</span>
              </label>
              <p className="display-box-title in-line">Embalaje #2</p>
            </div>

            <div className="row"></div>

            <div className="col l6 ">
              <label>
              <Field type="checkbox" name="folder" disabled={usuarioDirecto === false}/>
                <span>&nbsp;</span>
              </label>
              <p className="display-box-title in-line">Plegadora</p>
            </div>
            <div className="col l6">
              <label>
              <Field type="checkbox" name="punching_machine" disabled={usuarioDirecto === false}/>
                <span>&nbsp;</span>
              </label>
              <p className="display-box-title in-line">Punzonadora</p>
            </div>

            <div className="row"></div>

            <div className="col l6">
              <label>
              <Field type="checkbox" name="printer" disabled={usuarioDirecto === false}/>
                <span>&nbsp;</span>
              </label>
              <p className="display-box-title in-line">Impresora</p>
            </div>
            <div className="col l6">
              <label>
              <Field type="checkbox" name="palletized" disabled={usuarioDirecto === false}/>
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
                   Crear Usuario
                 </button>
              </div>
            </div>
        </div>

        
        

      </div>
       
      </Form>
            </Formik>

            <Popup contentStyle={{background: "0"}} open={open1} closeOnDocumentClick onClose={closeModall1} lockScroll = {true}>
            
                 <div className="alert z-depth-1" >
                  <div className="row row-fix ">
                    <div className="col s12 m12 l12 no-margin">
                      <div className="atention center-align">ATENCION</div>
                    </div>
                    <div className="col s12 m12 l12 no-margin divisor-bottom-line">
                      <div  className="alert-msg center-align ">Esta por crear un nuevo usuario</div>
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
                {createUserError ||createUserSuccess?    
                   <div className="alert z-depth-1" >
                    <div className="row row-fix ">
                      <div className="col s12 m12 l12 no-margin">
                        {createUserError && (<div className="atention center-align">{createUserError}</div>)}
                        {createUserSuccess && (<div className="atention center-align">{createUserSuccess}</div>)}
                      </div>
                      <div className="col s12 m12 l12 no-margin divisor-bottom-line">
                      {createUserError && (<div className="alert-msg center-align ">Contacte al Administrador</div>)}
                      {createUserSuccess && (<div className="alert-msg center-align ">Muchas gracias!</div>)}
                      </div>
                    </div>
    
                    <div className="row">
                         <div className="col s6 m6 l12 center">
                         {createUserError && (<div onClick={closeModal2} className="button-alert waves-effect waves-dark btn-block">Continuar</div >)}
                         {createUserSuccess && (<div onClick={closeModal2} className="button-alert waves-effect waves-dark btn-block">Continuar</div >)}
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
export default UserRegister;
