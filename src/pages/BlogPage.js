import React from 'react';
import { Header, Footer } from '../Components';
import './BlogPage.css';
import BlogCard from './Blog/BlogCard';
import { blogInfo } from '../helper/content';
import {
  Breakthroughs_Weight_Loss,
  Glp,
  Semaglutied_Weight_Loss,
} from '../helper/assets';
import { useNavigate } from 'react-router-dom';

const BlogPage = () => {
  const navigate = useNavigate();
  const blogImages = {
    Breakthroughs_Weight_Loss,
    Glp,
    Semaglutied_Weight_Loss,
  };

  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  const handleBlogClick = (title) => {
    const slug = generateSlug(title);
    navigate(`/blog/${slug}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className='blog-main-container'>
      <div className='blog-heading'>Latest Blogs</div>
      <div className='latest-blog-container'>
        <div className='blog-card'>
          {blogInfo.map((blog, index) => (
            <div key={index} className='blog-group'>
              <BlogCard
                key={blog.id}
                src={blogImages[blog.img]}
                title={blog.title}
                description={blog.description}
                author={blog.author}
                date={blog.date}
                index={index}
                onClick={() => handleBlogClick(blog.title)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
