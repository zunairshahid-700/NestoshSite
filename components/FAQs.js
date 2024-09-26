import React from "react";
import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";

const FAQs = ({ blok }) => {
  return (
    <>
    <div className="row align-items-center">
      <div className={`col-12 ${blok.Image?.filename ? 'col-lg-8' : ''}`}>
        <div className="c-solutions__nestosh" {...storyblokEditable(blok)}>
          <h3 className="c-solutions__nestosh__heading text-start">
            {blok?.Question}
          </h3>
          <p className="c-solutions__nestosh__text text-start">{render(blok?.Answer)}</p>
        </div>
      </div>
      {blok.Image?.filename ? 
      <div className="col-12 col-lg-4">
        <img className="img-fluid mb-4" src={blok.Image?.filename} alt="" />
      </div>
      : ''
      }
      
    </div>
    </>
  );
};

export default FAQs;
