import React, { useEffect, useState } from 'react';

const AppointmentRequestWidget = (props) => {
  const { initialScopeId, initialScopeUrl, initialApplicationId } = props;
  const [scopeId, setScopeId] = useState(initialScopeId);
  const [scopeUrl, setScopeUrl] = useState(initialScopeUrl);
  const [applicationId, setApplicationId] = useState(initialApplicationId);

  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://widget-cdn.simplepractice.com/assets/integration-1.0.js';
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
            width: fit-content;
          }
          .spwidget-button {
            display: inline-block;
            padding: 5px 18px;
            color: #034651 !important;
            background: #feed00;
            font-family:Inter-UI-BlackItalic; 
            border: 0;
            border-radius: 4px;
            font-size: 16px;
            text-decoration: none;
            width: 150px;
            letter-spacing: 1px;
          }
        `}</style>
      <div className='spwidget-button-wrapper'>
        <a
          href='https://offthecharts.clientsecure.me'
          className='spwidget-button'
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
