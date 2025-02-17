import React, {useEffect, useRef} from 'react'
import './Wedo.css'
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)


function Wedo() {

  useGSAP(() => {
    gsap.fromTo(
      ".we-do-left",
      {
        opacity: 0,
        y: 100
      },
      {
        opacity: 1,
        duration: 1.5,
        y: 0,
        scrollTrigger: {
          trigger: '.Wedo-body',
          start: 'top 75%',

        }
      }
    );
  });


  const listRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      listRef.current.children, // Select all <li> elements
      { opacity: 0, y: 50 }, // Start hidden & slightly below
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
        stagger: 0.2, // 0.2s delay between each item
        ease: "power2.out",
        scrollTrigger: {
          trigger: listRef.current,
          start: "top 80%", // Animation starts when list enters 80% of viewport
          toggleActions: "play none none none", // Play once
        },
      }
    );
  }, []);


  return (
    <div className='Wedo-body'>
      <div className='Wedo-Title'>
        <div className='we-do-left'>
          <h1 className='What-we-do'>
            What we do.
          </h1>
          <p className='we-do-para'>
            Powerful creativity, uncompromising design, and groundbreaking innovation. And we do it for a jaw-dropping roster of globally renowned brands.
          </p>

        </div>

      </div>
      <div className="Attributes">
        <ul className="att-text" ref={listRef} >
          <li className='item'>Intelligence & Insights</li>
          <li className='item'>Brand & Creative</li>
          <li className='item'>Experience Design</li>
          <li className='item'>Social</li>
          <li className='item'>Technology</li>
          <li className='item'>Data</li>
          <li className='item'>Ai</li>
          <li className='item'>Performance Marketing</li>
          <li className='item'>Media</li>
          <li className='item'>Automation</li>
        </ul>
      </div>


    </div>
  )
}

export default Wedo
