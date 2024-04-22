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
            Semaglutide is a medication used to treat type 2 diabetes and obesity. It belongs to a class of drugs called glucagon-like peptide-1 receptor agonists (GLP-1 RAs). Semaglutide works by mimicking the action of a hormone called GLP-1, which helps regulate blood sugar levels, appetite, and body weight. It is typically administered as a once-weekly injection and has been shown to effectively lower blood sugar levels, promote weight loss, and reduce the risk of cardiovascular events in people with type 2 diabetes. Additionally, it has also shown promise in the treatment of obesity.
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Paragraphs;
