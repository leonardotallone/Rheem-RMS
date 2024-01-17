
import Welcome_Title_Select_User from "./Welcome_title_Select_User";
import { ReactComponent as UsuarioDirecto } from '../assets/logos/directo.svg';
import { ReactComponent as UsuarioIndirecto } from '../assets/logos/indirecto.svg';


const UserType = () => {
  return (  
    <>
      <div className="row row-fix">
        <div className="col s10 push-s1  m12 l12 push-l3 no-margin">
        <Welcome_Title_Select_User />
        </div>
      
        <div className="col s6 m6 pull-m1 l5 no-margin push-l3 ">
             <a href="/signin/indirect"> 
              <UsuarioIndirecto />
            </a>
        </div>
        <div className="col s6 m6 pull-m1 l5 no-margin push-l1 right">
             <a href="signin/direct">
             <UsuarioDirecto />
            </a>
        </div>


      </div>

    </>     

      
  );
};

export default UserType;
