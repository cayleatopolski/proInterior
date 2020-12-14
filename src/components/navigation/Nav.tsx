import React from 'react';
import './nav.module.css';

const Nav = () => {
  return (
    <header>
      <nav>
        <img alt='the company logo' src='/logo.png' />
        <ul className='navList'>
          <span className='bold'>
            <li className='navItem'>
              <a href='#'>Homepage</a>
            </li>
          </span>
          <li className='navItem'>
            <a href='#'>Portfolio</a>
          </li>
          <li className='navItem'>
            <a href='#'>Projects</a>
          </li>
          <li className='navItem'>
            <a href='#'>Blog</a>
          </li>
          <li className='navItem'>
            <a href='#'>Contact</a>
          </li>
        </ul>
        <button className='navButton'>Place A Call</button>
      </nav>
    </header>
  );
};

export default Nav;
