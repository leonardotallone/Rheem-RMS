import { useParams } from "react-router";

import Welcome_Title from "./Welcome_Title";
import Welcome_Title_Mobile from "./Welcome_Title_Mobile";

import Landing from "./Landing";
import UserType from "./UserType";
import Footer from "./Footer";

const Home = () => {
  let { showMode } = useParams();

  return (
    <div className="background-landing-home" >
      <div className="container">
        <div className="row">

          <div className="col l6 no-margin hide-on-med-and-down">
             <Welcome_Title />
          </div>

          <div className="col l6 right no-margin hide-on-med-and-down">
            <div className="padding-logobanner-home-large">
              {showMode === "usertype" ? <UserType /> : <Landing />}

            </div>
          </div>

          <div className="col s12 m12 hide-on-small-only  hide-on-large-only">    
            <Welcome_Title />
          </div>
          <div className="col s12 m12 hide-on-med-only hide-on-large-only">    
            <Welcome_Title_Mobile />
          </div>

          <div className="col s12 m10 right no-margin hide-on-large-only">
            <div className="padding-logobanner-home-ms">
            {showMode === "usertype" ? <UserType /> : <Landing />}
            </div>
          </div>
        </div>
          <div className="col s2 m12 l12 padding-footer-large hide-on-small-only">
            <Footer />
          </div>

          <div className="col s2 m12 l12 padding-footer-ms hide-on-med-only hide-on-large-only ">
            <Footer />
          </div>
        
      </div>
    </div>
  );
};

export default Home;
