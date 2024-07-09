import React from 'react';
import { useParams } from 'react-router-dom';
import GameBlogDetail from './GameBlogDetail';
import SemuglutedBlogDetail from './SemuglutedBlogDetail';
import DiscoverBlogDetail from './DiscoverBlogDetail';
import Layout from '../Components/Layout';

const BlogDetail = () => {
  const { slug } = useParams();
  const renderContent = () => {
    switch (slug) {
      case 'game-changing-weight-loss-breakthroughs':
        return (
          <Layout>
            <GameBlogDetail />
          </Layout>
        );
      case 'why-doesn-t-semaglutide-work-for-me':
        return (
          <Layout>
            <SemuglutedBlogDetail />
          </Layout>
        );
      case 'discover-how-semaglutide-transforms-your-body-for-weight-loss':
        return (
          <Layout>
            <DiscoverBlogDetail />
          </Layout>
        );
      default:
        return <div>Blog not found for slug: {slug}</div>;
    }
  };

  return <>{renderContent()}</>;
};

export default BlogDetail;
