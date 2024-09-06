import React from 'react';
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import SectionTitle from './global/SectionTitle';


const Customers = ({blok}) => {
  return (
      <section class="c-portfolio" {...storyblokEditable(blok)}>
        <div class="container">
            {/* <h2 class="">Customer We Worked For</h2> */}
            <SectionTitle cssClass="c-portfolio__heading" title={blok.Title}/>
        </div>
        <div class="c-portfolio__logos">
          {blok.Client.map((nestedBlok) => (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
          ))}
        </div>
    </section>
  )
}

export default Customers