import { storyblokEditable,StoryblokComponent } from "@storyblok/react";
import React from "react";

const SalesforceSolutions = ({ blok }) => {
  return (
    <section
      className="c-choose saleSolution c-choose--salesforce"
      {...storyblokEditable(blok)}
    >
      <div className="container">
        <div className="row">
          {blok.TopSolutions?.map((nestedBlok) => (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
          ))}
          <div className="col-lg-6 col-md-12 col-12 order-lg-2 order-1">
            <div className="c-choose__SolutionHead">
              <h3 className="c-choose__SolutionHeading">{blok.Heading}</h3>
              <p className="c-choose__SolutionText">{blok.SubHeading}</p>
            </div>
          </div>
        </div>
        <div className="row">
          {blok.BottomSolutions?.map((nestedBlok) => (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SalesforceSolutions;
