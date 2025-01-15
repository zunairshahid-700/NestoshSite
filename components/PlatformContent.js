import React from "react";
import { useEffect, useState } from 'react';

const PlatformContent = ({ title, description, sections }) => {
  const [isPrivacyPage, setIsPrivacyPage] = useState(false);
  useEffect(() => {
    if (window.location.href.includes('privacy')) {
      setIsPrivacyPage(true);
    }
  }, []);
  return (
    <section className={`c-solutions ${isPrivacyPage ? 'mt-5' : ''}`}>
      <div className="container">
        {sections?
        (
          // Using in Magento page (same component but different structure)
          sections.map((desc, index) => (
            <div className="c-solutions__nestosh">
              <h3 className="c-solutions__nestosh__heading">{desc.title}</h3>
              <p className="c-solutions__nestosh__text  c-solutions__nestosh__text--bottom" key={index}>{desc.text}</p>
            </div>
          ))
        ):
        (
          // Using in Salesforce page (same component but different structure)
          <>
            <div className="c-solutions__nestosh">
              <h3 className="c-solutions__nestosh__heading">{title}</h3>
              {description.map((desc, index) =>(
                <p className="c-solutions__nestosh__text  c-solutions__nestosh__text--bottom" key={index}>{desc.text}</p>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default PlatformContent;
