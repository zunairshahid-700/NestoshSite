import { storyblokEditable } from '@storyblok/react';
import React from 'react';


const GlobalImage = ({blok}) => {
  return (
    <div {...storyblokEditable(blok)}>
        <img className='img-fluid' src={blok.Image?.filename} alt="" />
    </div>
  )
}

export default GlobalImage