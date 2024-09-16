import React from "react";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const PlatformContent = ({ blok }) => {
  return (
    <section className="c-solutions" {...storyblokEditable(blok)}>
      <div className="container">
        {blok.FAQs?.map((nestedBlok) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </div>
    </section>
  );
};

export default PlatformContent;
