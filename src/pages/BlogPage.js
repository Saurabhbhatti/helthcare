import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

const BlogPage = () => {
  const blogs = [
    {
      id: 1,
      title:
        "Game-Changing Weight Loss Breakthroughs: Inside Scoop on Semaglutide and Tirzepatide from OTC Body Weight Loss Program",
      author: "OTC-BODY ",
      date: "May 2, 2024",
      // image: "https://example.com/image1.jpg",
    },
    {
      id: 2,
      title: "Why Doesn’t Semaglutide Work for Me? Comprehensive Guide",
      author: "OTC-BODY",
      date: "May 24, 2024",
      // image: "https://example.com/image2.jpg",
    },
  ];

  return (
    <>
      <Header />
      <Container>
        <Title>Latest Blogs</Title>
        <BlogGrid>
          {blogs.map((blog) => (
            <Blog key={blog.id}>
              {/* <Thumbnail src={blog.image} alt="Thumbnail" /> */}
              <BlogContent>
                <BlogTitle>{blog.title}</BlogTitle>
                <BlogMeta>
                  <Author>By {blog.author}</Author>
                  <Date>{blog.date}</Date>
                </BlogMeta>
              </BlogContent>
              <ReadMore to={`/blog/${blog.id}`}>Read More</ReadMore>
            </Blog>
          ))}
        </BlogGrid>
      </Container>
      <Footer />
    </>
  );
};

export default BlogPage;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  text-align: center;
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Blog = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px 6px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
`;

const BlogContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const BlogTitle = styled.h3`
  margin-bottom: 10px;
  font-size: 1.2rem;
  color: #555;
`;

const BlogMeta = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Author = styled.span`
  font-style: italic;
`;

const Date = styled.span`
  font-size: 0.8rem;
`;

const ReadMore = styled(Link)`
  align-self: center;
  color: #ffffff;
  background-color: #3d768a;
  padding: 10px 20px;
  font-size: 1rem;
  text-decoration: none;
  border-radius: 25px;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #fff;
    color: #000;
    transform: translateY(-2px);
  }

  &:focus {
    outline: none;
  }

  &:active {
    transform: translateY(1px);
  }
`;
