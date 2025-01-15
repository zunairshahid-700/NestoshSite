import React from 'react';

const PlatformsSection = ({title, description, sections, bottomHeding, bottomText, bottomContactText}) => {
  return (
    <div>
    <section className="c-content-heading">
        <div className="container">
            <div className="c-content-heading__header">
                <h2 className="c-content-heading__header__heading">{title}</h2>
                <p className="c-content-heading__header__text">{description}</p>
            </div>
        </div>
    </section>
    <section className="c-content">
        <div className="container">
            {sections.map((section, index) => (
                <div className="c-content__tech" key={index}>
                    <div className={`row c-content__tech__align ${index%2 !== 0? 'c-content__tech__align--reverse':'' }`}>
                        <div className="col-lg-6">
                            <div className="c-content__tech__align__description wow animate__animated animate__slideInLeft">
                                <h4 className="c-content__tech__align__description__heading">{section.heading}</h4>
                                <p className="c-content__tech__align__description__text">{section.text}</p>
                                <a href={section.linkUrl} className="btn btn-primary">{section.linkText}</a>
                                <p className="c-content__tech__align__description__number">0{index+1}</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <figure className="mb-0 wow c-content__tech__align__left animate__animated animate__slideInRight">
                                <img src={section.image} alt={section.heading} className="c-content__tech__align__img "/>
                            </figure>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </section>
    <section className="c-journey">
        <div className="container">
            <h2 className="c-journey__heading">{bottomHeding}</h2>
            <p className="c-journey__peragraph">{bottomText}</p>
            <p className="c-journey__contact" dangerouslySetInnerHTML={{ __html: bottomContactText }}></p>
        </div>
    </section>
    </div>
  )
}

export default PlatformsSection