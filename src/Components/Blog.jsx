import React from 'react';
import './Blog.css'
import Articles from './Articles';

function Blog() {
  const message = (
    <>
      Hot off <br /> the press.
    </>
  );

  return (
    <div className='section__blog'>
      <div className='blog'>
        <div className='blog__container'>
          <h2 className='text-balance'>{message}</h2>
          <button className='explore'>Explore news</button>
        </div>
        <Articles />
      </div>
    </div>

  )
}

export default Blog;
