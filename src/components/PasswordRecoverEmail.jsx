import FormPasswordRecoverMail from "../form/FormPasswordRecoverMail";

import Footer from "./Footer";

// import Welcome_TitleBLIND from "./Welcome_TitleBLIND";
import Welcome_Title from "./Welcome_Title";

const PasswordRecoverEmail = () => {

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
                  <FormPasswordRecoverMail />
              </div>
            </div>
          </div>

          <div className="col s12 m12 l12 padding-footer-large">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};
export default PasswordRecoverEmail;
