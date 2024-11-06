import React from 'react';
import SectionTitle from './global/SectionTitle';

const WhoWeAre = ({ title, subtitle }) => {
  return (
      <section className="c-about">
        <div className="container">
          <div className="c-about__inner">
            <SectionTitle cssClass="c-about__title" title={title} />
            <p className="c-about__text">{subtitle}</p>
          </div>
        </div>
      </section>
  );
}

export default WhoWeAre