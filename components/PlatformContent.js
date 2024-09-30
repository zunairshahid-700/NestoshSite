import React from "react";
import { useEffect, useState } from 'react';
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const PlatformContent = ({ blok }) => {
  const [isPrivacyPage, setIsPrivacyPage] = useState(false);
  useEffect(() => {
    if (window.location.href.includes('privacy')) {
      setIsPrivacyPage(true);
    }
  }, []);
  return (
    <section className={`c-solutions ${isPrivacyPage ? 'mt-5' : ''}`} {...storyblokEditable(blok)}>
      <div className="container">
        {blok.FAQs?.map((nestedBlok) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </div>
    </section>
  );
};

export default PlatformContent;
