import React from "react";
import Layout from "./../components/Layout/Layout";
import pp from "../images/pp.jpg"
const Policy = () => {
  return (
    <Layout title={'Policy'}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src={pp}
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;