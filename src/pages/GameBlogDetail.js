import React from 'react';
import Background from './Blog/BlogDetail/Background';
import {
  Breakthroughs_Weight_Loss_Left,
  Glp,
  Health_Disorder,
} from '../helper/assets';
import BlogDetailCard from './Blog/BlogDetail/DetailCard';
import { blogDetail } from '../helper/content';
import Mechanism from './Blog/BlogDetail/Mechanism';
import ClinicInfo from './Blog/BlogDetail/Clinic';
import HealthCare from './Blog/BlogDetail/Healthcare';
import ConclusionCard from './Blog/BlogDetail/ConclusionCard';
import Heading from './Blog/BlogDetail/Heaing';
import Semaglutide from './Blog/BlogDetail/semaglutied';
import { useNavigate } from 'react-router';

const GameBlogDetail = () => {
  const {
    blogDetails,
    mechanismInfo1,
    mechanismInfo2,
    mechanismInfo3,
    mechanismInfo4,
    clinicInfo1,
    helthDisorder,
    trizepatideInfo,
    clinicInfo2,
    helthDesc,
    conclusion,
    semaglutide,
    helthDescriptionOnImg,
  } = blogDetail.blogInfo;
  const navigate = useNavigate();

  const handleBackBlogList = () => {
    navigate('/blog');
  };

  return (
    <div>
      <div className='responsive-game-container'>
        <div className='container-padding'>
          <div className='blog-header-container'>
            <div>
              <Heading />
              <div>
                {blogDetails.map((item, index) => (
                  <BlogDetailCard title={item.title} desc={item.description} />
                ))}
              </div>
            </div>
            <img
              src={Breakthroughs_Weight_Loss_Left}
              alt='weight loss img'
              className='detail-img'
            />
          </div>
          <div className='align-padding'>
            <div className='main-heading'>Mechanism Of Action</div>
            {mechanismInfo1.map((item, index) => (
              <div className='contain-margin'>
                <Mechanism desc={item.description} title={item.title} />
              </div>
            ))}

            {clinicInfo1.map((item, index) => (
              <div className='margin-from-top'>
                <ClinicInfo title={item.title} desc={item.description} />
              </div>
            ))}
          </div>
          <div className='blog-image-container'>
            <img
              src={Health_Disorder}
              alt='weight loss img'
              className='health-disorder-img'
            />
            <div className='text-overlay-img'>
              <div className='main-heading'>Side Effect and Considerations</div>
              <div className='semuglutied-offering'>
                While Semaglutide offers promising results, potential side
                effects include:
              </div>
              {helthDisorder.map((item, index) => (
                <Mechanism
                  desc={item.description}
                  title={item.title}
                  key={index}
                />
              ))}
            </div>
            <div className='health-desc-on-img'>
              <HealthCare desc={helthDescriptionOnImg.description} />
            </div>
          </div>
          <div className='tirzepatide-margin'>
            {trizepatideInfo.map((item, index) => (
              <BlogDetailCard title={item.title} desc={item.description} />
            ))}
            <div className='main-heading'>Mechanism Of Action</div>
            {mechanismInfo2.map((item, index) => (
              <div className='contain-margin'>
                <Mechanism desc={item.description} title={item.title} />
              </div>
            ))}
            <div className='margin-from-top'>
              {clinicInfo2.map((item, index) => (
                <ClinicInfo title={item.title} desc={item.description} />
              ))}
            </div>

            <div className='main-heading align-margin'>
              Side Effect and Considerations
            </div>
            <div className='sub-heading'>
              Tirzepatide, like any medication, can cause side effects,
              including:
              {mechanismInfo3.map((item, index) => (
                <div className='contain-margin'>
                  <Mechanism desc={item.description} title={item.title} />
                </div>
              ))}
            </div>
            <HealthCare desc={helthDesc.description} />
            <div>
              <div className='blog-detail-header'>
                Comparing Semaglutide
                <br /> & Tirzepatide
              </div>
              <div className='align-bottom-margin'>
                {semaglutide.map((item, index) => (
                  <div className='contain-margin'>
                    <Semaglutide title={item.title} desc={item.description} />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className='main-heading'>
                Practical Considerations for Patients
              </div>
              <div className='sub-heading life-style-text'>
                Lifestyle Modifications
              </div>
              <div className='practical-heading'>
                While Semaglutide and Tirzepatide are powerful tools for weight
                loss, they are most effective when combined with lifestyle
                changes
              </div>
              {mechanismInfo4.map((item, index) => (
                <div className='contain-margin'>
                  <Mechanism desc={item.description} title={item.title} />
                </div>
              ))}
            </div>
            <div className='margin-from-top'>
              {conclusion.map((item, index) => (
                <ConclusionCard title={item.title}>
                  <div>{item.content}</div>
                </ConclusionCard>
              ))}
            </div>
            <div>
              <div onClick={handleBackBlogList} className='blog-button'>
                Back to Blog List
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameBlogDetail;
