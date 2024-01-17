import { useParams } from "react-router-dom";


// import Welcome_TitleBLIND from "./Welcome_TitleBLIND";
import Welcome_Title from "./Welcome_Title";
import FormSignInDirect from "../form/FormSignInDirect";
import FormSignInInDirect from "../form/FormSignInInDirect";
import Footer from "./Footer";

const SignIn = () => {
  let { user } = useParams();

  return (
    <>
      <div className="background-signin">
        <div className="container">
            <div className="row">
                
            <div className="col l6 no-margin hide-on-med-and-down">
             {/* <Welcome_TitleBLIND /> */}
             <Welcome_Title/>
           </div>


              <div className="col l4 no-margin right hide-on-med-and-down">
                <div className="padding-sign-in-large">
                {user === "direct" ? <FormSignInDirect /> : <FormSignInInDirect />}
                </div>
              </div>



            <div className="row padding-sign-in hide-on-large-only">
              <div className="col s10 push-s1 m8 push-m2 l4 no-margin ">
              <div className="padding-sign-in-ms">
                {user === "direct" ? <FormSignInDirect /> : <FormSignInInDirect />}
              </div>
              </div>
            </div>

            </div>


            {/* <div className="col s12 m12 l12 padding-footer-ms">
              <Footer />
            </div> */}

            <div className="col s12 m12 l12 padding-footer-large">
            <Footer />
          </div>

      </div>
    </div>
    </>
  );
};
export default SignIn;
