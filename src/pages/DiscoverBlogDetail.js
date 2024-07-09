import React from 'react';
import { blogDetail } from '../helper/content';
import { Glp } from '../helper/assets';
import Mechanism from './Blog/BlogDetail/Mechanism';
import DiscoverHeading from './Blog/BlogDetail/DiscoverHeading';
import BlogDetailCard from './Blog/BlogDetail/DetailCard';
import { useNavigate } from 'react-router';

const DiscoverBlogDetail = () => {
  const { discoverDetail, semaglutideWeightLoss, semaglutidegoal } =
    blogDetail.blogInfo;

  const navigate = useNavigate();

  const handleBackBlogList = () => {
    navigate('/blog');
  };

  return (
    <>
      <div className='responsive-container'>
        <div>
          <div className='discover-blog-contain'>
            <img src={Glp} alt='glp' className='blog-glp-img' />
            <DiscoverHeading />
          </div>
          {discoverDetail.map((item, index) => (
            <BlogDetailCard
              title={item.title}
              desc={item.description}
              desc2={item.description2}
            />
          ))}
          <div>
            <div className='main-heading'>
              How Semaglutide Works for Weight Loss
            </div>
            {semaglutideWeightLoss.map((item, index) => (
              <div className='contain-margin'>
                <Mechanism desc={item.description} title={item.title} />
              </div>
            ))}
          </div>
          <div style={{ marginTop: 40 }}>
            <div className='main-heading'>{semaglutidegoal.title}</div>
            <div className='contain-margin-bottom'>
              <div className='blog-data-desc semaglutied-data-desc'>
                {semaglutidegoal.descrption}
              </div>
              <br />
              <div className='blog-data-desc semaglutied-data-desc'>
                {semaglutidegoal.description2}
              </div>
            </div>
          </div>
          <div onClick={handleBackBlogList} className='blog-button'>
            Back to Blog List
          </div>
        </div>
      </div>
    </>
  );
};

export default DiscoverBlogDetail;
