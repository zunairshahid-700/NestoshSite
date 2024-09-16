import { storyblokEditable } from "@storyblok/react";
import React from "react";
import locationsIcon from '../public/assets/images/location.svg';
import PhoneCallIcon from '../public/assets/images/Phonecall.svg';
import envelopeIcon from '../public/assets/images/MailBlack.svg';
import Image from "next/image";

const Locations = ({ blok }) => {
  return (
    <div className="col-md-6 col-12 mb-4" {...storyblokEditable(blok)}>
      <div className="location__wrap__body mb-3">
        <div className="location__wrap__body__icon">
          <figure className="mb-0">
            <img src={blok.CountryImage?.filename} alt="not found" />
          </figure>
        </div>
        <div className="location__wrap__body__text location__wrap__body__text--flag-margin">
          <span>{blok.CountryName}</span>
        </div>
      </div>
      <div className="location__wrap__body mb-3">
        <div className="location__wrap__body__icon">
          <figure className="mb-0">
            <Image src={locationsIcon} alt="not found" />
          </figure>
        </div>
        <div className="location__wrap__body__text text-start">
          <span>{blok.Address}</span>
        </div>
      </div>
      <div className="location__wrap__body mb-3">
        <div className="location__wrap__body__icon">
          <figure className="mb-0">
            <Image src={PhoneCallIcon} alt="not found" />
          </figure>
        </div>
        <div className="location__wrap__body__text text-start">
          <span>{blok.Phone}</span>
        </div>
      </div>
      <div className="location__wrap__body mb-3">
        <div className="location__wrap__body__icon">
          <figure className="mb-0">
            <Image src={envelopeIcon} alt="not found" />
          </figure>
        </div>
        <div className="location__wrap__body__text text-start">
          <span>{blok.Emails}</span>
        </div>
      </div>
    </div>
  );
};

export default Locations;
