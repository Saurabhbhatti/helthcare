import React from 'react';
import './BlogDetail.css';

const BlogDetailCard = ({ title, desc, desc2 }) => {
  return (
    <div>
      <div
        dangerouslySetInnerHTML={{ __html: title }}
        className='blog-detail-header'
      />
      <p className='blog-detail-contain'>{desc}</p>
      {desc2 && <p className='blog-detail-contain'>{desc2}</p>}
    </div>
  );
};

export default BlogDetailCard;
