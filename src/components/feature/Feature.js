import React from 'react';
import './feature.css';

const Feature = ({ className, title, text }) => {
  return (
    <div className={`gpt3__features-container__feature ${className}`}>
      <div className='gpt3__features-conatainer-feature-title'>
        <div className='gpt3__features-container__feature-extra' />
        <h1>{title}</h1>
      </div>
      <div className='gpt3__features-container__feature-text'>
        {text}
      </div>
    </div>
  );
}

export default Feature;
