import React from 'react';
import { useParams } from 'react-router-dom';
import GameBlogDetail from './GameBlogDetail';
import SemuglutedBlogDetail from './SemuglutedBlogDetail';
import DiscoverBlogDetail from './DiscoverBlogDetail';

const BlogDetail = () => {
  const { slug } = useParams();
  const renderContent = () => {
    switch (slug) {
      case 'game-changing-weight-loss-breakthroughs':
        return <GameBlogDetail />;
      case 'why-doesn-t-semaglutide-work-for-me':
        return <SemuglutedBlogDetail />;
      case 'discover-how-semaglutide-transforms-your-body-for-weight-loss':
        return <DiscoverBlogDetail />;
      default:
        return <div>Blog not found for slug: {slug}</div>;
    }
  };

  return <div>{renderContent()}</div>;
};

export default BlogDetail;
