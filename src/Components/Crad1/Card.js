import React from "react";
import img1 from "../../Assets/Image/img1.jpg";
import img2 from "../../Assets/Image/img2.jpg";
import img3 from "../../Assets/Image/img3.jpg";
import img4 from "../../Assets/Image/img4.jpg";
import "../Crad1/Card.css";

const Card = () => {
  return (
    <div className="container">
      <div className="row cards">
        <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
          <div className="card">
            <img src={img1} alt="img1" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">DR. Prateek Mehta</h5>
              <p className="card-text">
                I'm a paragraph. Click here to add your own text and edit me.
                Let your users get to know you.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
          <div className="card">
            <img src={img2} alt="img2" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Evelyn Wright, M.D</h5>
              <p className="card-text">
                I'm a paragraph. Click here to add your own text and edit me.
                Let your users get to know you.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
          <div className="card">
            <img src={img3} alt="img3" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Jenna Cadwell, M.D</h5>
              <p className="card-text">
                I'm a paragraph. Click here to add your own text and edit me.
                Let your users get to know you.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
          <div className="card">
            <img src={img4} alt="img4" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">David Wayne, M.D.</h5>
              <p className="card-text">
                I'm a paragraph. Click here to add your own text and edit me.
                Let your users get to know you.
              </p>
            </div>
          </div>
        </div>
        <div style={{ height: 'auto', width: '100%' }}>
          <h2 style={{ fontSize: '56px', textAlign: 'center' }}>
            <span style={{ fontSize: '56px', color:'rgb(9,55,31)' }}>
              Our Services
            </span>
          </h2>
        </div>
        <div>
        </div>
      </div>
    </div>
  );
};

export default Card;
