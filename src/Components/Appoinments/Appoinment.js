import React, { useEffect, useState } from "react";

const AppointmentRequestWidget = (props) => {
  const { initialScopeId, initialScopeUrl, initialApplicationId } = props;
  const [scopeId, setScopeId] = useState(initialScopeId);
  const [scopeUrl, setScopeUrl] = useState(initialScopeUrl);
  const [applicationId, setApplicationId] = useState(initialApplicationId);
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://widget-cdn.simplepractice.com/assets/integration-1.0.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <style>{`
          .spwidget-button-wrapper {
            text-align: center;
          }
          .spwidget-button {
            display: inline-block;
            padding: 12px 24px;
            color: #fff !important;
            background: #3D768A;
            border: 0;
            border-radius: 4px;
            font-size: 12px;
            font-weight: 600;
            text-decoration: none;
          }
          .spwidget-button:hover {
            background-color: white;
            color: black !important;
            transition: all 0.2s ease, visibility 0s;
          }
          {/* .spwidget-button:active {
            color: rgba(255, 255, 255, 0.75) !important;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15) inset;
          } */}
        `}</style>
      <div className="spwidget-button-wrapper">
        <a
          href="https://offthecharts.clientsecure.me"
          className="spwidget-button"
          data-spwidget-scope-id={scopeId}
          data-spwidget-scope-uri={scopeUrl}
          data-spwidget-application-id={applicationId}
          data-spwidget-scope-global
          data-spwidget-autobind
        >
          Request Appointment
        </a>
      </div>
    </>
  );
};

export default AppointmentRequestWidget;
