import React from "react";

const Footer = () => { 
  return (
    <>    
        <div className="row">
          <div className="col s6 m6 l6 no-margin">
            <p className="legal-footer">
              Privacy Policy | Cookie Policy | Sales Policies & MAP | Recall
              Information
            </p>
          </div>
          <div className="col s6 m6 l6">
            <p className="legal-footer right-align ">Site Map</p>
          </div>
        </div>

        <div className="row">
          <div className="col s12 m12 l12 no-margin">
            <p className="legal-footer p-spacing">
              1100 Abernathy Road, Suite 1700 Atlanta, GA 30328
            </p>
            <p className="legal-footer p-spacing">
              Copyright 2004–2023 Rheem Manufacturing Company. All Rights
              Reserved.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col s12 l12 en-linea no-margin">
            <p className="legal-footer p-spacing ">
              Rheem Manufacturing ranks as the global leader in the manufacture
              of high-quality, sustainable, and innovative water heaters,
              tankless water heaters, air conditioners, furnaces, pool heaters,
              and HVAC systems for residential and commercial applications, and
              is a full member of AHRI, the Air-Conditioning, Heating, &
              Refrigeration Institute.
            </p>
            <p className="legal-footer italic p-spacing">
              *All pros listed are independent dealer-owned businesses, and not
              owned or operated by Rheem Manufacturing Company.
            </p>
            
          </div>
        </div>
        
    </>
  );
};
export default Footer;
