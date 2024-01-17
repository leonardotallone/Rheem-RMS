import Image_Profile from "../assets/Image_Profile.jpg"
// import { useState } from "react";

// import { PhotoUrlHook } from "../../store/reducers/actions/authActions";

// import useAuth from "./CurrentUser";



const UserProfileImageUploader = () => {

//   const types = ["image/png", "image/jpg", "image/jpeg", "image/gif"];
  
  // const currentUser = useAuth();
//   const userUid = useSelector((state) => state.firebase.auth.uid);
//   const user = useSelector((state) => state.firebase.profile);
//   const uidSocio = socioUid
  

//   const [image, setImage] = useState(null);
//   const [error, setError] = useState(null);
//   const [buttonText, setButtonText] = useState("Cargar Imagen");
 

//   const imageHandler = (e) => {
//     let selected = e.target.files[0];
//     if (selected && types.includes(selected.type)) {
//       setImage(selected);
//       setError("");
//     } else {
//       setImage(null);
//       setError(
//         "Por favor seleccione un formato valido (*.png *.jpg *.jpeg *.gif)"
//       );
//     }
//   };

//   const handleClick = () => {
//     setButtonText("Cargando...");
//   };
//   const handleUpload = () => {
//     PhotoUrlHook(image, userUid, uidSocio);
//   };
//   const twoClicks = () => {
//     handleClick();
//     handleUpload();
//   };

  return (
    <>
      <div className="row">
        <div className="col l12 s12 ">
          <div className="image-upload">
            <label htmlFor="file">
              {/* <img
                src={
                  user.url
                    ? user.url
                    : "https://images.ecestaticos.com/QHwS8OZo7CudWwKkr_Ye_g4xdqk=/0x0:1200x651/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F3a8%2Fe90%2F6de%2F3a8e906de513c7f925d53c5ea070b751.jpg"
                }
                alt=""
                className="avatar-profile"
              ></img> */}
              <img
                src={Image_Profile}
                alt=""
                className="avatar-profile circle "
              ></img>
            </label>
            {/* <input id="file" type="file" onChange={imageHandler} /> */}
          </div>
        </div>

  

        {/* {error && (
          <label className="error red-text col s12 l12 center">{error} </label>
        )}
        {image && <label className="col s12 l12 center">{image.name}</label>}
        <div className="col l12 s12 center">
          <label>Agrega una foto para personalizar tu cuenta</label>
        </div>
        {image && (<button className="btn-small sarmiento" onClick={twoClicks}>{ buttonText }</button>)} */}
      </div>
    </>


  );
};
export default UserProfileImageUploader;
