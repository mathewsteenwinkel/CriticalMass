import React from 'react';
import './Blog.css'
import Articles from './Articles';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)



function Blog() {

  useGSAP(() => {
    gsap.fromTo(
      ".blog",
      {
        opacity: 0,
        y: 100
      },
      {
        opacity: 1,
        duration: 2,
        y: 0,
        scrollTrigger: {
          trigger: '.blog',
          start:'top 75%',

        }
      }
    );
  });


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
