import React from 'react';
import { storyblokEditable } from "@storyblok/react";


const HeroSection = ({blok}) => {
  return (
    <div {...storyblokEditable(blok)}> 
        {blok.MainHeading}
        {blok.SubHeading}
        Mobile Image
        <img src={blok.MobileBackgroundImage.filename} alt="Mobile hero" />
        Desktop Image
        <img src={blok.DesktopBackgroundImage.filename} alt="Mobile hero" />
    </div>
  )
}

export default HeroSection