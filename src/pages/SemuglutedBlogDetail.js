import React from 'react';
import { Footer, Header } from '../Components';
import { blogDetail } from '../helper/content';
import Background from './Blog/BlogDetail/Background';
import { Glp } from '../helper/assets';
import SemaglutideHeading from './Blog/BlogDetail/SemaglutiedHeading';
import ClinicInfo from './Blog/BlogDetail/Clinic';
import Mechanism from './Blog/BlogDetail/Mechanism';
import Semaglutide from './Blog/BlogDetail/semaglutied';
import ConclusionCard from './Blog/BlogDetail/ConclusionCard';
import { useNavigate } from 'react-router';

const SemuglutedBlogDetail = () => {
  const {
    semaglutiedOverView,
    biologicalInfo,
    monitoringSupport,
    whatSemaglutide,
    semaglutideConclusion,
    mechanismInfo5,
    medicalInfo,
    pernalInfo,
    conclusion,
    modificationLife,
  } = blogDetail.blogInfo;

  const navigate = useNavigate();

  const handleBackBlogList = () => {
    navigate('/blog');
  };

  return (
    <div>
      <Header />
      <Background>
        <div className='responsive-container'>
          <div className='container-padding main-container-padding'>
            <div className='discover-container '>
              <img src={Glp} alt='glp' className='blog-glp-img' />
              <SemaglutideHeading />
            </div>
            <div className='alignment'>
              {semaglutiedOverView.map((item, index) => (
                <div className='semugluted-margin'>
                  <ClinicInfo title={item.title} desc={item.description} />
                </div>
              ))}
              <div className='blog-detail-header'>What is Semaglutide?</div>
              {whatSemaglutide.map((item, index) => (
                <div style={{ marginBottom: 20 }}>
                  <Mechanism desc={item.description} title={item.title} />
                </div>
              ))}
              <div className='contain-margin'>
                <div className='main-heading'>Mechanism Of Action</div>
                {mechanismInfo5.map((item, index) => (
                  <div className='contain-margin-bottom'>
                    <Mechanism desc={item.description} title={item.title} />
                  </div>
                ))}

                <div className='semugluted-margin'>
                  <div className='main-heading'>
                    Factors Influencing <br />
                    Semaglutide's Effectiveness
                  </div>
                  <div className='mechanism-title bio-logical-title'>
                    {'BIOLOGICAL FACTORS'}
                  </div>
                  {biologicalInfo.map((item, index) => (
                    <div className='contain-margin-bottom'>
                      <Semaglutide title={item.title} desc={item.description} />
                    </div>
                  ))}
                </div>
                <div>
                  <div className='mechanism-title semaglutied-title'>
                    {'LIFESTYLE FACTORS'}
                  </div>
                  {biologicalInfo.map((item, index) => (
                    <div className='contain-margin-bottom'>
                      <Semaglutide title={item.title} desc={item.description} />
                    </div>
                  ))}
                </div>
                <div className='semugluted-margin'>
                  <div className='main-heading'>
                    Medical Conditions and Medications
                  </div>

                  {medicalInfo.map((item, index) => (
                    <div className='contain-margin-bottom'>
                      <Semaglutide title={item.title} desc={item.description} />
                    </div>
                  ))}
                </div>
                <div className='semugluted-margin'>
                  <div className='main-heading'>
                    Optimizing Semaglutide's Effectiveness
                  </div>
                  <div className='contain-margin-bottom'>
                    <div className='mechanism-title semaglutied-title'>
                      {pernalInfo.title}
                    </div>
                    <div className='blog-data-desc semaglutied-data-desc'>
                      {pernalInfo.description}
                    </div>
                  </div>
                </div>
                <div>
                  <div className='main-heading'>Lifestyle Modifications</div>
                  {modificationLife.map((item, index) => (
                    <div className='contain-margin-bottom'>
                      <Mechanism desc={item.description} title={item.title} />
                    </div>
                  ))}
                </div>
                <div className='semugluted-margin'>
                  <div className='main-heading'>{monitoringSupport.title}</div>
                  <div className='contain-margin-bottom'>
                    <div className='blog-data-desc semaglutied-data-desc'>
                      {monitoringSupport.description}
                    </div>
                  </div>
                </div>
                <div className='margin-from-top'>
                  {semaglutideConclusion.map((item, index) => (
                    <ConclusionCard title={item.title}>
                      <p>{item.content}</p>
                    </ConclusionCard>
                  ))}
                </div>
              </div>
              <div
                onClick={handleBackBlogList}
                className='blog-button padding-from-bottom'
              >
                Back to Blog List
              </div>
            </div>
          </div>
        </div>
      </Background>
      <Footer />
    </div>
  );
};

export default SemuglutedBlogDetail;
