import React from "react";
import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";

const FAQs = ({ blok }) => {
  return (
    <div className="c-solutions__nestosh" {...storyblokEditable(blok)}>
      <h3 className="c-solutions__nestosh__heading text-start">
        {blok?.Question}
      </h3>
      <p className="c-solutions__nestosh__text text-start">{render(blok?.Answer)}</p>
    </div>
  );
};

export default FAQs;
