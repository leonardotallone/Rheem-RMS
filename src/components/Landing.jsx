import Logo from "../assets/logos/logo-landing.png";
import Welcome_Title_Select_UserBLIND from "./Welcome_title_Select_UserBLIND";
import { ReactComponent as LogoRheem } from '../assets/logos/logo-landing.svg';

const Landing = () => {
  return (
    <>
      <div className="row row-fix">
      <div className="col s10 push-s1  m12 l12 no-margin right-align">
        <Welcome_Title_Select_UserBLIND />
        </div>
    
        <div className="col s6 push-s3 m6 push-m2 l5 push-l7 no-margin">
          {Logo?
            <a href="/usertype">
              {/* <img className="responsive-img" src={Logo} alt=""></img> */}
              <LogoRheem />
            </a>: null
            // <div className="center-align">
 
            //     {/* <div className="progress white">
            //       <div className="indeterminate red"></div>
            //     </div> */}
            
            // {/* <div className="preloader-wrapper big active">
            //   <div className="spinner-layer spinner-red-only ">
            //   <div className="circle-clipper left">
            //     <div className="circle"></div>
            //   </div><div className="gap-patch">
            //     <div className="circle"></div>
            //   </div><div className="circle-clipper right">
            //     <div className="circle"></div>
            //   </div>
            // </div>
            // </div>   */}
            
            
            // </div>  
            }
        </div>
       </div>
    </>
  );
};

export default Landing;
