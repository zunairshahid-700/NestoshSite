import { storyblokEditable } from "@storyblok/react";
import React from "react";
import { render } from "storyblok-rich-text-react-renderer";



const TextnVideo = ({blok}) => {
  return (
    <section className="c-solutions pt-0 pb-5" {...storyblokEditable(blok)}>
      <div className="container">
      <h3 class="mb-4 text-start">{blok.Heading}</h3>
        <div className="row align-items-center">
          <div className="col-12 col-md-6">
            <iframe
              className="w-100"
              height="520"
              src={blok.Video}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <div className="col-12 col-md-6 text-start">
            <div className="c-solutions__nestosh pt-4 pt-md-0 mb-0">
            <img src={blok.Image?.filename} class="img-fluid" />
                <div class="text-center mt-3">
                    <a href={blok.PdfLink} class="btn btn-primary" target="_blank">{blok.ButtonText}</a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextnVideo;
