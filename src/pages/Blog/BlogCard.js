import React from 'react';
import '../BlogPage.css';

const BlogCard = ({
  src,
  title,
  description,
  author,
  date,
  index,
  onClick,
}) => {
  return (
    <>
      {index === 2 ? (
        <div className='blog-card-container discover-blog-container'>
          <div className='blog-content discover-blog-content'>
            <img
              src={src}
              alt='weight loss img'
              className='discover-blog-img'
            />
            <div className='blog-overlay-text'>{description}</div>

            <div className='blog-dicover-meta-contain'>
              <div className='discover-blog-meta'>By {author}</div>

              <div className='discover-blog-meta'>{date}</div>
            </div>
            <div className='read-more-discover' onClick={onClick}>
              <div className='read-more-button'>read more</div>
            </div>
          </div>
        </div>
      ) : (
        <div className='blog-card-container'>
          <div className='blog-content'>
            <img src={src} alt='weight loss img' className='blog-img' />
            <div>
              <div
                className={`blog-header ${
                  index === 0 ? 'blog-header-textTransform' : ''
                }`}
              >
                {title}
              </div>
              <div className='blog-subcontent'>{description}</div>
            </div>
          </div>
          <div className='blog-meta-content'>
            <div className='blog-meta'>By {author}</div>
            <div className='blog-meta'>{date}</div>
          </div>
          <div className='button-container' onClick={onClick}>
            <div className='read-more-button'>read more</div>
          </div>
        </div>
      )}
    </>
  );
};

export default BlogCard;
