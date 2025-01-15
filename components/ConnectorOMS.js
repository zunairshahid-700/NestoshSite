import React from 'react'

const ConnectorOMS = ({sectionTitle, image, videoUrl, videoIcon, downloadText, downloadUrl, services}) => {
    // Split Services into half
    const middleIndex = Math.ceil(services.length / 2);
    const upperHalfServices = services.slice(0, middleIndex);
    const lowerHalfServices = services.slice(middleIndex);

  return (
    <section className="c-OMS">
        <div className="container">
            <div className="c-OMS__heading-div">
                <h2 className="c-OMS__heading">{sectionTitle}</h2>
            </div>
            <div className="c-OMS__img-div">
                <img src={image} alt="image under heading"/>
            </div>
            <div className="c-OMS__wrapper">
                {upperHalfServices.map((service, index) => (
                    <div className="c-OMS__text-wrapper" key={index}>
                        <p className="c-OMS__list-heading">{service.title}</p>
                        <ul className="c-OMS__list">
                            {service.list.map((item, index) => (
                                <li className="c-OMS__list__item"  key={index}>{item.item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className="c-OMS__wrapper c-OMS__wrapper--margin">
                {lowerHalfServices.map((service, index) => (
                    <div className="c-OMS__text-wrapper" key={index}>
                        <p className="c-OMS__list-heading">{service.title}</p>
                        <ul className="c-OMS__list">
                            {service.list.map((item, index) => (
                                <li className="c-OMS__list__item"  key={index}>{item.item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className="c-OMS__video">
                <div className="c-OMS__video__wrapper">
                    <div className="c-OMS__video__overlay"></div>
                    <video  id="video-player" className="w-100" controls >
                        <source src={videoUrl} type="video/mp4"/>Your browser does not support the video tag.
                    </video>
                    <img src={videoIcon} alt="icon" className="c-OMS__video__wrapper__icon" id="video-icon"/>
                </div>
            </div>
            <div className="c-OMS__button">
                <a href={downloadUrl}>{downloadText}</a>
            </div>
        </div>
    </section>
  );
};

export default ConnectorOMS