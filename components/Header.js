import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/assets/images/logo.svg";
import globalIcon from "../public/assets/images/g-icon.svg";
import globalIconW from "../public/assets/images/global-icon.svg";
import togglerIcon from "../public/assets/images/toggler.svg";
import singaporeFlag from "../public/assets/images/singapore.svg";
import usaFlag from "../public/assets/images/usa.svg";
import ukFlag from "../public/assets/images/uk.svg";
import { Nav, Dropdown, Button } from 'react-bootstrap';



const Header = () => {
  useEffect(() => {
    // Equivalent of DOMContentLoaded
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
      .querySelectorAll(".c-site-header__list .nav-item a")
      .forEach((element) => {
        element.addEventListener("click", toggleDropdown);
      });

    document
      .querySelector(".navbar-collapse-back")
      ?.addEventListener("click", closeDropdowns);

    document.querySelectorAll(".js-global").forEach((element) => {
      element.addEventListener("click", toggleGlobalWrap);
    });

    document.addEventListener("click", closeGlobalWrap);
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listeners on unmount
    return () => {
      document
        .querySelectorAll(".c-site-header__list .nav-item.dropdown")
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
        .querySelectorAll(".c-site-header__list .nav-item a")
        .forEach((element) => {
          element.removeEventListener("click", toggleDropdown);
        });

      document
        .querySelector(".navbar-collapse-back")
        ?.removeEventListener("click", closeDropdowns);

      document.querySelectorAll(".js-global").forEach((element) => {
        element.removeEventListener("click", toggleGlobalWrap);
      });

      document.removeEventListener("click", closeGlobalWrap);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className="c-site-header">
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
                    {/* <li className="nav-item c-site-header__list__item">
                      <Link href="/" passHref>
                        <a className="c-site-header__list__item__link" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Home
                        </a>
                      </Link>
                    </li> */}
                    <li className="nav-item ">
                      <Link href="/" passHref>
                        <a className="nav-link c-site-header__list__item__link" href="#" role="button" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            Home
                        </a>
                      </Link>
                    </li>
                    <li className="nav-item c-site-header__list__item dropdown">
                        <a className="nav-link dropdown-toggle c-site-header__list__item__link" href="#" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Platforms
                        </a>
                        <div className="c-site-header__list__item__dropdown-menu" aria-labelledby="resources">
                            <div className="c-site-header__list__item__dropdown-menu__wrap">
                                <div className="navbar-collapse-close-wrap sub-wrap">
                                    <button className="navbar-collapse-back back-btn d-lg-none" type="button" aria-label="Close navigation">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="12" viewBox="0 0 6 12" fill="none">
                                            <path d="M0.5 11L5.5 6L0.5 1" stroke="#000" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                        Back
                                    </button>
                                    <button className="navbar-collapse-close d-lg-none" type="button" aria-label="Close navigation">×</button>
                                </div>
                                <ul className="c-site-header__dropdown">
                                    <li className="c-site-header__dropdown__list"><a className="c-site-header__dropdown__list__item" href="#">Salesforce Cross-Cloud</a></li>
                                    <li className="c-site-header__dropdown__list"><a className="c-site-header__dropdown__list__item" href="#">Magento</a></li>
                                    <li className="c-site-header__dropdown__list"><a className="c-site-header__dropdown__list__item" href="#">Shopify</a></li>
                                    <li className="c-site-header__dropdown__list"><a className="c-site-header__dropdown__list__item" href="#">Bigcommerce</a></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item">
                    <Link href="/history" passHref>
                        <a className="nav-link c-site-header__list__item__link"  role="button" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            Solutions
                        </a>
                      </Link>
                    </li>
                    <li className="nav-item">
                    <Link href="/products" passHref>
                        <a className="nav-link c-site-header__list__item__link" role="button" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            Products
                        </a>
                    </Link>
                    </li>
                    <li className="nav-item dropdown c-site-header__list__item dropdown">
                      <Link href="/resources">
                        <a className="nav-link dropdown-toggle c-site-header__list__item__link text-decoration-none" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Resources
                        </a>
                      </Link>
                        <div className="c-site-header__list__item__dropdown-menu" aria-labelledby="resources">
                            <div className="c-site-header__list__item__dropdown-menu__wrap">
                                <div className="navbar-collapse-close-wrap sub-wrap">
                                    <button className="navbar-collapse-back back-btn d-lg-none" type="button" aria-label="Close navigation">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="12" viewBox="0 0 6 12" fill="none">
                                            <path d="M0.5 11L5.5 6L0.5 1" stroke="#000" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                        Back
                                    </button>
                                    <button className="navbar-collapse-close d-lg-none" type="button" aria-label="Close navigation">×</button>
                                </div>
                                <ul className="c-site-header__dropdown">
                                    <li className="c-site-header__dropdown__list"><a className="c-site-header__dropdown__list__item" href="#">About Company</a></li>
                                    <li className="c-site-header__dropdown__list"><a className="c-site-header__dropdown__list__item" href="#">Career</a></li>
                                    <li className="c-site-header__dropdown__list"><a className="c-site-header__dropdown__list__item" href="#">Our Partners</a></li>
                                    <li className="c-site-header__dropdown__list"><a className="c-site-header__dropdown__list__item" href="#">Sustainability</a></li>
                                    <li className="c-site-header__dropdown__list"><a className="c-site-header__dropdown__list__item" href="#">News Event</a></li>
                                    <li className="c-site-header__dropdown__list"><a className="c-site-header__dropdown__list__item" href="#">Blogs</a></li>
                                </ul>
                            </div>
                        </div>
                    </li>
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
            <ul className="c-site-header__country-list">
              <li className="c-site-header__country-list__item">
                <a href="#" className="c-site-header__country-list__item__link">
                  <Image src={singaporeFlag} alt="Singapore" />
                  Singapore
                </a>
              </li>
              <li className="c-site-header__country-list__item">
                <a href="#" className="c-site-header__country-list__item__link">
                  <Image src={usaFlag} alt="United states" />
                  United States
                </a>
              </li>
              <li className="c-site-header__country-list__item">
                <a href="#" className="c-site-header__country-list__item__link">
                  <Image src={ukFlag} alt="United Kingdom" />
                  United Kingdom
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
