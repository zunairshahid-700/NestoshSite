import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/assets/images/logo.svg";
import globalIcon from "../public/assets/images/g-icon.svg";
import globalIconW from "../public/assets/images/global-icon.svg";
import togglerIcon from "../public/assets/images/toggler.svg";
import locationsIcon from "../public/assets/images/location.svg";
import PhoneCallIcon from "../public/assets/images/phone.svg";
import envelopeIcon from "../public/assets/images/MailBlack.svg";

const Header = () => {
  useEffect(() => {
    const handleMouseEnter = (event) => {
      if (
        document.querySelectorAll(".c-site-header__global-wrap.show").length ===
        0
      ) {
        document.body.classList.add("open-navigation");
      }
    };

    const handleMouseLeave = (event) => {
      if (
        document.querySelectorAll(".c-site-header__global-wrap.show").length ===
        0
      ) {
        document.body.classList.remove("open-navigation");
      }
    };

    const toggleNavbar = () => {
      document.querySelector(".navbar-collapse").classList.toggle("show");
      document
        .querySelectorAll(".c-site-header__list__item__dropdown-menu")
        .forEach((dropdownMenu) => {
          dropdownMenu.classList.remove("show");
        });
    };

    const toggleDropdown = (event) => {
      event.preventDefault();
      event.currentTarget.nextElementSibling?.classList.toggle("show");
    };

    const closeDropdowns = () => {
      document
        .querySelectorAll(".c-site-header__list__item__dropdown-menu")
        .forEach((dropdownMenu) => {
          dropdownMenu.classList.remove("show");
        });
    };

    const toggleGlobalWrap = () => {
      document
        .querySelector(".c-site-header__global-wrap")
        .classList.toggle("show");
      document.body.classList.toggle("open-navigation");
      document.querySelector(".c-site-header").classList.toggle("sticky");
    };

    const closeGlobalWrap = (event) => {
      const target = event.target;
      const isInsideGlobalWrap =
        target.closest(".c-site-header__global-wrap") !== null;
      const isInsideGlobalButton = target.closest(".js-global") !== null;

      if (!isInsideGlobalWrap && !isInsideGlobalButton) {
        document
          .querySelector(".c-site-header__global-wrap")
          .classList.remove("show");
        document.body.classList.remove("open-navigation");
        // document.querySelector(".c-site-header").classList.remove("sticky");
      }
    };

    const handleScroll = () => {
      if (window.scrollY > 1) {
        document.querySelector(".c-site-header").classList.add("sticky");
      } else {
        document.querySelector(".c-site-header").classList.remove("sticky");
      }
    };

    // Attach event listeners
    document
      .querySelectorAll(".c-site-header__list__item.dropdown")
      .forEach((element) => {
        element.addEventListener("mouseenter", handleMouseEnter);
        element.addEventListener("mouseleave", handleMouseLeave);
      });

    document
      .querySelectorAll(".navbar-toggler, .navbar-collapse-close")
      .forEach((element) => {
        element.addEventListener("click", toggleNavbar);
      });

    document
      .querySelectorAll(".c-site-header__list > li.dropdown button")
      .forEach(function (element) {
        element.addEventListener("click", function () {
          const parentDiv = this.closest("div"); // Find the closest parent div
          if (parentDiv && parentDiv.nextElementSibling) {
            parentDiv.nextElementSibling.classList.toggle("show"); // Toggle class on the next sibling of the parent div
          }
        });
      });

    // document.querySelectorAll(".navbar-collapse-back").forEach((element) => {
    //   element.addEventListener("click", closeDropdowns);
    // });

    document.querySelectorAll('.navbar-collapse-back').forEach(function(element) {
      element.addEventListener('click', function() {
          // Find the closest parent with the class .c-site-header__list__item__dropdown-menu
          var dropdownMenu = this.closest('.c-site-header__list__item__dropdown-menu');
          if (dropdownMenu) {
              dropdownMenu.classList.remove('show'); // Remove the 'show' class
          }
      });
    });

    document.querySelectorAll(".js-global").forEach((element) => {
      element.addEventListener("click", toggleGlobalWrap);
    });

    document.addEventListener("click", closeGlobalWrap);
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listeners on unmount
    return () => {
      document
        .querySelectorAll(".c-site-header__list > li.dropdown")
        .forEach((element) => {
          element.removeEventListener("mouseenter", handleMouseEnter);
          element.removeEventListener("mouseleave", handleMouseLeave);
        });

      document
        .querySelectorAll(".navbar-toggler, .navbar-collapse-close")
        .forEach((element) => {
          element.removeEventListener("click", toggleNavbar);
        });

      document
        .querySelectorAll(".c-site-header__list >li a")
        .forEach((element) => {
          element.removeEventListener("click", toggleDropdown);
        });

      // document
      //   .querySelector(".navbar-collapse-back")
      //   ?.removeEventListener("click", closeDropdowns);
      document.querySelectorAll(".navbar-collapse-back").forEach((element) => {
        element.removeEventListener("click", closeDropdowns);
      });

      document.querySelectorAll(".js-global").forEach((element) => {
        element.removeEventListener("click", toggleGlobalWrap);
      });

      document.removeEventListener("click", closeGlobalWrap);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className="c-site-header bg-blur">
      <nav className="c-site-header__navbar navbar navbar-expand-lg">
        <div className="container">
          <Link href="/">
            <a className="navbar-brand">
              <Image src={logo} alt="logo" className="c-site-header__logo" />
            </a>
          </Link>
          <div className="c-site-header__m-btn-wrap">
            <button
              href="#"
              className="c-site-header__m-btn-wrap__global js-global"
            >
              <Image
                className="c-site-header__btn-wrap__btn-icon"
                alt="global-icon"
                src={globalIcon}
              />
            </button>
            <button
              className="navbar-toggler c-site-header__toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <Image
                src={togglerIcon}
                alt="logo"
                className="c-site-header__toggler-icon navbar-toggler-icon lp-logo-block"
              />
            </button>
          </div>
          <div className=" navbar-collapse justify-content-lg-center c-site-header__navbar__navbar-collapse">
            <div className="navbar-collapse-close-wrap">
              <button
                className="navbar-collapse-close d-lg-none"
                type="button"
                aria-label="Close navigation"
              >
                ×
              </button>
            </div>
            <ul className="navbar-nav c-site-header__list">
              <li className="">
                <Link href="/" passHref>
                  <a
                    className="nav-link c-site-header__list__item__link"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Home
                  </a>
                </Link>
              </li>
              <li className="dropdown">
                <div className="d-flex">
                  <Link href="/platform" passHref>
                    <a
                      className="nav-link dropdown-toggle c-site-header__list__item__link"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Platforms
                    </a>
                  </Link>
                  <button className="nav-link dropdown-toggle button d-block d-lg-none"></button>
                </div>
                <div
                  className="c-site-header__list__item__dropdown-menu"
                  aria-labelledby="resources"
                >
                  <div className="c-site-header__list__item__dropdown-menu__wrap">
                    <div className="navbar-collapse-close-wrap sub-wrap">
                      <button
                        className="navbar-collapse-back back-btn d-lg-none"
                        type="button"
                        aria-label="Close navigation"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="6"
                          height="12"
                          viewBox="0 0 6 12"
                          fill="none"
                        >
                          <path
                            d="M0.5 11L5.5 6L0.5 1"
                            stroke="#000"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        Back
                      </button>
                      <button
                        className="navbar-collapse-close d-lg-none"
                        type="button"
                        aria-label="Close navigation"
                      >
                        ×
                      </button>
                    </div>
                    <ul className="c-site-header__dropdown">
                      {/* <li className="c-site-header__dropdown__list">
                        <Link href="/platforms/shopify" passHref>
                          <a className="c-site-header__dropdown__list__item">
                            Shopify
                          </a>
                        </Link>
                      </li> */}
                      <li className="c-site-header__dropdown__list">
                        <div className="d-flex c-site-header__dropdown__list__item p-0">
                        <Link href="/platforms/shopify" passHref>
                          <a
                            className="nav-link dropdown-toggle w-100"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                           Shopify
                          </a>
                          </Link>
                          <button className="nav-link dropdown-toggle button d-block d-lg-none"></button>
                        </div>
                        <div
                          className="c-site-header__list__item__dropdown-menu"
                          aria-labelledby="resources"
                        >
                          <div className="c-site-header__list__item__dropdown-menu__wrap">
                            <div className="navbar-collapse-close-wrap sub-wrap">
                              <button
                                className="navbar-collapse-back back-btn d-lg-none"
                                type="button"
                                aria-label="Close navigation"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="6"
                                  height="12"
                                  viewBox="0 0 6 12"
                                  fill="none"
                                >
                                  <path
                                    d="M0.5 11L5.5 6L0.5 1"
                                    stroke="#000"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </svg>
                                Back
                              </button>
                              <button
                                className="navbar-collapse-close d-lg-none"
                                type="button"
                                aria-label="Close navigation"
                              >
                                ×
                              </button>
                            </div>
                            <ul className="c-site-header__dropdown">
                              <li className="c-site-header__dropdown__list">
                              <Link href="/platforms/shopify-services/shopify-store-development" passHref>
                                <a
                                  className="c-site-header__dropdown__list__item"
                                >
                                  Store development
                                </a>
                                </Link>
                              </li>
                              <li className="c-site-header__dropdown__list">
                              <Link href="/platforms/shopify-services/shopify-plus-headless" passHref>
                                <a
                                  className="c-site-header__dropdown__list__item"
                                >
                                  Shopify Headless
                                </a>
                              </Link>
                              </li>
                              <li className="c-site-header__dropdown__list">
                              <Link href="/platforms/shopify-services/migrating-to-shopify" passHref>
                                <a
                                  className="c-site-header__dropdown__list__item"
                                >
                                  Migrating to Shopify
                                </a>
                              </Link>
                              </li>
                              <li className="c-site-header__dropdown__list">
                              <Link href="/platforms/shopify-services/shopify-app-development" passHref>
                                <a
                                  className="c-site-header__dropdown__list__item"
                                >
                                  App Development
                                </a>
                              </Link>
                              </li>
                              <li className="c-site-header__dropdown__list">
                              <Link href="/platforms/shopify-services/tech-audit-and-consulting" passHref>
                                <a
                                  className="c-site-header__dropdown__list__item"
                                >
                                  Tech Audit and Consulting
                                </a>
                              </Link>
                              </li>
                              <li className="c-site-header__dropdown__list">
                              <Link href="/platforms/shopify-services/ecommerce-branding" passHref>
                                <a
                                  className="c-site-header__dropdown__list__item"
                                >
                                  eCommerce Branding
                                </a>
                              </Link>
                              </li>
                              <li className="c-site-header__dropdown__list">
                              <Link href="/platforms/shopify-services/shopify-store-support-service" passHref>
                                <a
                                  className="c-site-header__dropdown__list__item"
                                >
                                  Support-service
                                </a>
                              </Link>
                              </li>
                              
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li className="c-site-header__dropdown__list">
                        <Link href="/platforms/salesforce" passHref>
                          <a className="c-site-header__dropdown__list__item">
                            Salesforce Cross-Cloud
                          </a>
                        </Link>
                      </li>
                      <li className="c-site-header__dropdown__list">
                        <Link href="/platforms/magento" passHref>
                          <a className="c-site-header__dropdown__list__item">
                            Magento
                          </a>
                        </Link>
                      </li>
                      {/* <li className="c-site-header__dropdown__list">
                        <Link href="/platforms/bigcommerce" passHref>
                          <a className="c-site-header__dropdown__list__item">
                            Bigcommerce
                          </a>
                        </Link>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </li>
              <li className="">
                <Link href="/about" passHref>
                  <a
                    className="nav-link c-site-header__list__item__link"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    About
                  </a>
                </Link>
              </li>
              {/* <li className="">
                <Link href="/history" passHref>
                  <a
                    className="nav-link c-site-header__list__item__link"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Solutions
                  </a>
                </Link>
              </li>
              <li className="">
                <Link href="/products" passHref>
                  <a
                    className="nav-link c-site-header__list__item__link"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Products
                  </a>
                </Link>
              </li>
              <li className="dropdown">
              <div className="d-flex">
                <a
                  className="nav-link dropdown-toggle c-site-header__list__item__link text-decoration-none"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Resources
                </a>
                <button className="nav-link dropdown-toggle button d-block d-lg-none"></button>
                </div>
                <div
                  className="c-site-header__list__item__dropdown-menu"
                  aria-labelledby="resources"
                >
                  <div className="c-site-header__list__item__dropdown-menu__wrap">
                    <div className="navbar-collapse-close-wrap sub-wrap">
                      <button
                        className="navbar-collapse-back back-btn d-lg-none"
                        type="button"
                        aria-label="Close navigation"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="6"
                          height="12"
                          viewBox="0 0 6 12"
                          fill="none"
                        >
                          <path
                            d="M0.5 11L5.5 6L0.5 1"
                            stroke="#000"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        Back
                      </button>
                      <button
                        className="navbar-collapse-close d-lg-none"
                        type="button"
                        aria-label="Close navigation"
                      >
                        ×
                      </button>
                    </div>
                    <ul className="c-site-header__dropdown">
                      <li className="c-site-header__dropdown__list">
                        <Link href="/about" passHref>
                          <a className="c-site-header__dropdown__list__item">
                            About Company
                          </a>
                        </Link>
                      </li>
                      <Link href="/carerrs" passHref>
                        <li className="c-site-header__dropdown__list">
                          <a
                            className="c-site-header__dropdown__list__item"
                            href="#"
                          >
                            Career
                          </a>
                        </li>
                      </Link>
                      <Link href="/partners" passHref>
                        <li className="c-site-header__dropdown__list">
                          <a className="c-site-header__dropdown__list__item">
                            Our Partners
                          </a>
                        </li>
                      </Link>
                      <Link href="/sustainability" passHref>
                        <li className="c-site-header__dropdown__list">
                          <a className="c-site-header__dropdown__list__item">
                            Sustainability
                          </a>
                        </li>
                      </Link>
                      <Link href="/events" passHref>
                        <li className="c-site-header__dropdown__list">
                          <a className="c-site-header__dropdown__list__item">
                            News Event
                          </a>
                        </li>
                      </Link>
                      <Link href="/blogs" passHref>
                        <li className="c-site-header__dropdown__list">
                          <a className="c-site-header__dropdown__list__item">
                            Blogs
                          </a>
                        </li>
                      </Link>
                    </ul>
                  </div>
                </div>
              </li> */}
              <Link href="/contact" passHref>
                <li className="d-block d-lg-none zunair">
                  <a
                    className="nav-link c-site-header__list__item__link"
                    role="button"
                  >
                    Contact
                  </a>
                </li>
              </Link>
            </ul>
          </div>
          <div className="c-site-header__btn-wrap d-none d-lg-flex">
            <button className="btn-primary js-global">
              <Image
                className="c-site-header__btn-wrap__btn-icon"
                alt="global-icon"
                src={globalIconW}
              />
              Global
            </button>
            <Link href="/contact">
              <a className="btn-primary me-0 text-decoration-none">
                Contact Us
              </a>
            </Link>
          </div>
          <div className="c-site-header__global-wrap">
            <div className="c-site-header__global-wrap__header">
              <button
                className="c-site-header__global-wrap__header__btn js-global"
                type="button"
                aria-label="Close Global"
              >
                ×
              </button>
            </div>
            <div className="container">
              <h2 className="c-site-header__countries__title">
                Following are our Locations to Visit{" "}
                <Link href="/" passHref>
                  Nestosh
                </Link>
              </h2>
              <div className="c-site-header__countries">
                <div className="c-site-header_country">
                  <h3 className="c-site-header_country__title">USA</h3>
                  <div className="c-site-header_country__info">
                    <div className="c-site-header_country__info__map">
                      <iframe
                        className="c-maps-wrap__inner__map-wrap-width__frame"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2974.2188785170656!2d-87.59114552344137!3d41.802045070171864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2971c5e90715%3A0x302cddf77e7aac1e!2s5113%20S%20Harper%20Ave%20%232c%2C%20Chicago%2C%20IL%2060615%2C%20USA!5e0!3m2!1sen!2s!4v1714636643124!5m2!1sen!2s"
                        allowFullScreen="allowfullscreen"
                      ></iframe>
                    </div>
                    <div className="c-site-header_country__info__contact">
                      <div className="c-site-header_country__info__contact__body">
                        <div className="c-site-header_country__info__contact__body__icon">
                          <figure className="mb-0">
                            <Image src={locationsIcon} alt="not found" />
                          </figure>
                        </div>
                        <div className="c-site-header_country__info__contact__body__text">
                          <span>
                            5113 S. Harper, Suite 2C, Chicago, Illinois, 60615,
                            USA
                          </span>
                        </div>
                      </div>
                      <div className="c-site-header_country__info__contact__body">
                        <div className="c-site-header_country__info__contact__body__icon">
                          <figure className="mb-0">
                            <Image src={PhoneCallIcon} alt="not found" />
                          </figure>
                        </div>
                        <div className="c-site-header_country__info__contact__body__text">
                          <span>+1 (847) 269-0608</span>
                        </div>
                      </div>
                      <div className="c-site-header_country__info__contact__body">
                        <div className="c-site-header_country__info__contact__body__icon">
                          <figure className="mb-0">
                            <Image src={envelopeIcon} alt="not found" />
                          </figure>
                        </div>
                        <div className="c-site-header_country__info__contact__body__text">
                          <span>hello@nestosh.com</span>
                          <span>hr@nestosh.com</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="c-site-header_country">
                  <h3 className="c-site-header_country__title">UAE</h3>
                  <div className="c-site-header_country__info">
                    <div className="c-site-header_country__info__map">
                      <iframe
                        className="c-maps-wrap__inner__map-wrap-width__frame"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.4234321262884!2d55.2819441!3d25.222659399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f435b517fef43%3A0xb7bd6505300d387d!2sNESTOSH%20Technologies%20LLC!5e0!3m2!1sen!2s!4v1715069506919!5m2!1sen!2s"
                        allowFullScreen="allowfullscreen"
                      ></iframe>
                    </div>
                    <div className="c-site-header_country__info__contact">
                      <div className="c-site-header_country__info__contact__body">
                        <div className="c-site-header_country__info__contact__body__icon">
                          <figure className="mb-0">
                            <Image src={locationsIcon} alt="not found" />
                          </figure>
                        </div>
                        <div className="c-site-header_country__info__contact__body__text">
                          <span>
                            504 Saeed Tower 1, Sheikh Zayed Road, Dubai, UAE
                          </span>
                        </div>
                      </div>
                      <div className="c-site-header_country__info__contact__body">
                        <div className="c-site-header_country__info__contact__body__icon">
                          <figure className="mb-0">
                            <Image src={PhoneCallIcon} alt="not found" />
                          </figure>
                        </div>
                        <div className="c-site-header_country__info__contact__body__text">
                          <span>+971 (50) 207-7739</span>
                        </div>
                      </div>
                      <div className="c-site-header_country__info__contact__body">
                        <div className="c-site-header_country__info__contact__body__icon">
                          <figure className="mb-0">
                            <Image src={envelopeIcon} alt="not found" />
                          </figure>
                        </div>
                        <div className="c-site-header_country__info__contact__body__text">
                          <span>hello@nestosh.com</span>
                          <span>hr@nestosh.com</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="c-site-header_country">
                  <h3 className="c-site-header_country__title">Pakistan</h3>
                  <div className="c-site-header_country__info">
                    <div className="c-site-header_country__info__map">
                      <iframe
                        className="c-maps-wrap__inner__map-wrap-width__frame"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.2167738274334!2d74.22037861462941!3d31.463222557110864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919037d73bfca8b%3A0xf481fa48ccef40fb!2sNestosh!5e0!3m2!1sen!2s!4v1625072326620!5m2!1sen!2s"
                        allowFullScreen="allowfullscreen"
                      ></iframe>
                    </div>
                    <div className="c-site-header_country__info__contact">
                      <div className="c-site-header_country__info__contact__body">
                        <div className="c-site-header_country__info__contact__body__icon">
                          <figure className="mb-0">
                            <Image src={locationsIcon} alt="not found" />
                          </figure>
                        </div>
                        <div className="c-site-header_country__info__contact__body__text">
                          <span>
                            Plot No.23, Block J-3, Johar Town, Lahore, Pakistan
                            54000
                          </span>
                        </div>
                      </div>
                      <div className="c-site-header_country__info__contact__body">
                        <div className="c-site-header_country__info__contact__body__icon">
                          <figure className="mb-0">
                            <Image src={PhoneCallIcon} alt="not found" />
                          </figure>
                        </div>
                        <div className="c-site-header_country__info__contact__body__text">
                          <span>+92 (423) 5314787</span>
                        </div>
                      </div>
                      <div className="c-site-header_country__info__contact__body">
                        <div className="c-site-header_country__info__contact__body__icon">
                          <figure className="mb-0">
                            <Image src={envelopeIcon} alt="not found" />
                          </figure>
                        </div>
                        <div className="c-site-header_country__info__contact__body__text">
                          <span>hello@nestosh.com</span>
                          <span>hr@nestosh.com</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
