import React from "react";
import "./Semaglutied.css";
import CommonLayout from "../CommonLayout";
import { Glp } from "../../helper/assets";

const Semaglutied = () => {
  return (
    <CommonLayout>
      <div className="semaglutid-container-top">
        <div className="glp-container">
          <img src={Glp} alt="glp" className="glp-img" />
        </div>
        <div className="semaglutid-content">
          <div className="semaglutid-heading">What is SEMAGLUTIDE?</div>
          <p className="semaglutid-subText">
            Semaglutide is medication used to treat type 2 diabetes and obesity. It belongs to a class of drugs called glucagon-like peptide-1 receptor agonists (GLP-1 RAs). Semaglutide works by mimicking the action of a hormone called GLP-1, which helps regulate blood sugar levels, appetite, and body weight. It is typically administered as a once-weekly injection and has been shown to effectively lower blood sugar levels, promote weight loss, and reduce the risk of cardiovascular events in people with type 2 diabetes. Additionally, it has also shown promise in the treatment of obesity.
          </p>
        </div>
      </div>
    </CommonLayout>
  );
};

export default Semaglutied;
