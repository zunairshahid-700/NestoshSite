import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const mailIcon = '/assets/images/mail.png';
const usFlag = '/assets/images/flag-us.png';
const pkFlag = '/assets/images/flag-pk.png';
const uaeFlag = '/assets/images/flag-uae.png';
const mapImage = '/assets/images/map.png';



const Footer = () => {
  return (
    <footer className="c-site-footer">
      <div className="c-site-footer__inner">
        <div className="container">
          <div className="c-site-footer__info-bar">
            <div className="c-site-footer__info-bar__item">
              <a href="mailto:hello@nestosh.com">
                <img src={mailIcon} alt="mail" />
                hello@nestosh.com
              </a>
            </div>
            <div className="c-site-footer__info-bar__item">
              <a href="tel:+1 (516) 489-0340">
                <img src={usFlag} alt="us" />
                +1 (516) 489-0340
              </a>
            </div>
            <div className="c-site-footer__info-bar__item">
              <a href="tel:+971 (50) 207-7739">
                <img src={uaeFlag} alt="uae" />
                +971 (50) 207-7739
              </a>
            </div>
            <div className="c-site-footer__info-bar__item">
              <a href="tel:+92 (423) 5314787">
                <img src={pkFlag} alt="pk" />
                +92 (423) 5314787
              </a>
            </div>
          </div>
          <div className="c-site-footer__wrapper">
            <div className="c-site-footer__columns">
              <h4 className="c-site-footer__columns__title">Company</h4>
              <ul>
                <li>
                  <Link href="/" passHref>
                    <a className="c-site-footer__link">Home</a>
                  </Link>
                </li>
                <li>
                  <Link href="/platform" passHref>
                    <a className="c-site-footer__link">Platforms</a>
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" passHref>
                    <a className="c-site-footer__link">About Company</a>
                  </Link>
                </li>
                {/* <li>
                  <Link href="/solutions" passHref>
                    <a className="c-site-footer__link">Solutions</a>
                  </Link>
                </li>
                <li>
                  <Link href="/products" passHref>
                    <a className="c-site-footer__link">Products</a>
                  </Link>
                </li> */}
                <li>
                  <Link href="/contact" passHref>
                    <a className="c-site-footer__link">Contact us</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="c-site-footer__columns">
              <h4 className="c-site-footer__columns__title">Follow us</h4>
              <ul className="social-items">
              <li>
                    <a href="https://www.linkedin.com/company/nestosh/" target='blank' className="c-site-footer__link linkedin">LinkedIn</a>
                </li>
                <li>
                    <a href="https://www.youtube.com/channel/UCRrx48Gsnj4N6RI13z-mqYQ" target='blank' className="c-site-footer__link youtube">YouTube</a>
                </li>
                <li>
                    <a href="https://www.facebook.com/nestoshllc/" target='blank' className="c-site-footer__link facebook">Facebook</a>
                </li>
                <li>
                    <a href="https://www.instagram.com/nestoshllc/" target='blank' className="c-site-footer__link instagram">Instagram</a>
                </li>
              </ul>
            </div>
            <div className="c-site-footer__columns invisible d-none d-lg-block">
              <h4 className="c-site-footer__columns__title">Resources</h4>
              <ul>
                <li>
                  <Link href="/about-us" passHref>
                    <a className="c-site-footer__link">About Company</a>
                  </Link>
                </li>
                <li>
                  <Link href="/career" passHref>
                    <a className="c-site-footer__link">Career</a>
                  </Link>
                </li>
                <li>
                  <Link href="/partners" passHref>
                    <a className="c-site-footer__link">Our Partners</a>
                  </Link>
                </li>
                <li>
                  <Link href="/sustainability" passHref>
                    <a className="c-site-footer__link">Sustainability</a>
                  </Link>
                </li>
                <li>
                  <Link href="/news-events" passHref>
                    <a className="c-site-footer__link">News Event</a>
                  </Link>
                </li>
                <li>
                  <Link href="/blogs" passHref>
                    <a className="c-site-footer__link">Blogs</a>
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="c-site-footer__map">
              <img src={mapImage} alt="map" />
            </div>
          </div>
        </div>
      </div>
      <div className="c-site-footer__bottom">
        <div className="container">
          <p className="c-site-footer__bottom__text">
            all copyright © reserved by NESTOSH LLC 2024
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
