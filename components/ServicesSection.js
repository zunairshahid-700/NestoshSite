import React from "react";
import SectionTitle from "./global/SectionTitle";
import PlatformServices from '../components/PlatformServices'


const ServicesSection = ({ title, description, services }) => {
  return (
    <section className={`c-partners c-partners--services`}>
      <div className="container">
        <div className="c-partners__inner">
          <SectionTitle cssClass="c-partners__title" title={title} />
        </div>
        <div className="c-partners__cards pb-5">
          <div className="row justify-content-center">
            {services.map((service, index) => (
              <PlatformServices service={service} key={index} />
            ))}
          </div>
          <p className="c-partners__text" dangerouslySetInnerHTML={{ __html: description }}></p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
