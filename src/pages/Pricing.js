import React from "react";
import "../pages/PricingPage.css";
import { improve_plan } from "../helper/assets";

import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

const PricingPage = () => {
  return (
    <>
      <Header />
      <div className="container">
        <h1 className="header">CHOOSE YOUR PLAN</h1>
        <div className="plan-table" role="table">
          <div className="table-row" role="row">
            <div className="table-cell no-border align-right text-color" role="columnheader">
              SKU#
            </div>
            <div className="table-cell attractive-cell" role="cell">
              1 ML
            </div>
            <div className="table-cell attractive-cell cell-center" role="cell">
              2 ML
            </div>
            <div className="table-cell attractive-cell rounded-cell cell-center"  role="cell">
              5 ML
            </div>
          </div>
          <div className="table-row" role="row">
            <div className="table-cell no-border align-right text-color" role="columnheader">
              DURATION
            </div>
            <div className="table-cell weeks-cell" role="cell">
              4 WEEKS
            </div>
            <div className="table-cell weeks-cell cell-center" role="cell">
              8-10 WEEKS
            </div>
            <div className="table-cell weeks-cell rounded-cell cell-center" role="cell">
              12-15 WEEKS
            </div>
          </div>
          <div className="table-row" role="row">
            <div className="table-cell no-border align-right text-color" role="columnheader">
              PATIENT COST
            </div>
            <div className="table-cell attractive-cell" role="cell">
              $ 200
            </div>
            <div className="table-cell attractive-cell cell-center" role="cell">
              $ 375
            </div>
            <div className="table-cell attractive-cell rounded-cell cell-center" role="cell">
              $ 700
            </div>
          </div>
        </div>
        <img
          src={improve_plan}
          alt="Pricing Graph"
          width={600}
          style={{ margin: "80px 0", maxWidth: "100%" }}
        />
      </div>
      <Footer />
    </>
  );
};

export default PricingPage;
