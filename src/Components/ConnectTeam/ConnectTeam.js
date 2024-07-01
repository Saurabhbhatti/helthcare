import React from "react";
import "./ConnectTeam.css";
import {
  DR_JAIMEE_USSERY,
  DR_DAWN_COSTON,
  UserIcon,
  USER_PLACEHOLDER
} from "../../helper/assets";
import DocInformation from "./DocInformation/DocInformation";
import { docInfo } from "../../helper/content";

const ConnectTeam = () => {
  const doctorImages = {
    DR_JAIMEE_USSERY,
    DR_DAWN_COSTON,
    USER_PLACEHOLDER
  };

  return (
    <div className="connect-team-container">
      <div>
        <img
          className="connect-icon-img"
          src={UserIcon}
          alt="userIcon"
          width="40px"
          height="40px"
        />
        <h1 className="heading">
          <span>CONNECT WITH OUR EXPERIENCED TEAM</span>
        </h1>
      </div>
      <div className="card-container">
        {docInfo.map((item, index) => (
          <DocInformation
            key={index}
            docImg={doctorImages[item.docImg]}
            name={item.name}
            post={item.post}
            desc={item.desc}
            initialScopeId={item.initialScopeId}
            initialScopeUrl={item.initialScopeUrl}
            initialApplicationId={item.initialApplicationId}
          />
        ))}
      </div>
    </div>
  );
};

export default ConnectTeam;
