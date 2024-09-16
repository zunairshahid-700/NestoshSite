import React from "react";
import { storyblokEditable } from "@storyblok/react";

const FAQs = ({ blok }) => {
  return (
    <div className="c-solutions__nestosh" {...storyblokEditable(blok)}>
      <h3 className="c-solutions__nestosh__heading text-start">
        {blok?.Question}
      </h3>
      <p className="c-solutions__nestosh__text text-start">{blok?.Answer}</p>
    </div>
  );
};

export default FAQs;
