import React from "react";
import { storyblokEditable } from "@storyblok/react";

const Client = ({ blok }) => {
  return (
    // {blok.URL.cached_url} <br/>
    <div {...storyblokEditable(blok)} className="c-portfolio__logo">
      <img
        src={blok.Image.filename}
        className="c-portfolio__logo-image img-fluid"
        alt={blok.Name}
      />
    </div>
  );
};

export default Client;
