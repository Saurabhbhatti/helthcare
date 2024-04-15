import React from 'react';
import '../Paragraph2/Paragraphs.css';

const Paragraphs = () => {
  return (
    <>
      <section>
        <div className="para-container">
          <h1 className="para-text">
            <span>What is Semaglutide?</span>
          </h1>
          <div className="para-text-item">
            <span style={{ fontSize: '16px', color: 'rgb(9,55,31)' }}>
              Compound Semaglutide is the active ingredient used in medication to<br />
              treat type 2 diabetes and obesity. It belongs to the class of drugs<br />
              called GLP-1 receptor agonists, which help lower blood sugar levels<br />
              by increasing insulin secretion and decreasing glucagon production.<br />
              It promotes weight loss by reducing appetite and calorie intake.
            </span>
          </div>
        </div>
      </section>
      {/* <section>
        <div>
          <div className='containersticky'>
            <div className='sticky'></div>
            <div style={{border:'2px solid yellow'}}>
              The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href,
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Paragraphs;
