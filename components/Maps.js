import React from 'react';

const Maps = () => {
  return (
    <section className="c-maps-wrap">
      <div className="c-maps-wrap__inner">
        <div className="c-maps-wrap__inner__map-wrap-width">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3936.8821530802793!2d-73.65143847595286!3d40.69053139991654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c27d8d1b202363%3A0x4fd21b43440826a9!2sNESTOSH%20LLC!5e0!3m2!1sen!2s!4v1725878940794!5m2!1sen!2s"
            className="c-maps-wrap__inner__map-wrap-width__frame"
            allowFullScreen
            loading="lazy"
            frameBorder="0"
            scrolling="no"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="c-maps-wrap__inner__map-wrap-width">
          <iframe
            className="c-maps-wrap__inner__map-wrap-width__frame"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2974.2188785170656!2d-87.59114552344137!3d41.802045070171864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2971c5e90715%3A0x302cddf77e7aac1e!2s5113%20S%20Harper%20Ave%20%232c%2C%20Chicago%2C%20IL%2060615%2C%20USA!5e0!3m2!1sen!2s!4v1714636643124!5m2!1sen!2s"
            allowFullScreen
          ></iframe>
        </div>
        <div className="c-maps-wrap__inner__map-wrap-width">
          <iframe
            className="c-maps-wrap__inner__map-wrap-width__frame"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.2167738274334!2d74.22037861462941!3d31.463222557110864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919037d73bfca8b%3A0xf481fa48ccef40fb!2sNestosh!5e0!3m2!1sen!2s!4v1625072326620!5m2!1sen!2s"
            allowFullScreen
          ></iframe>
        </div>
        <div className="c-maps-wrap__inner__map-wrap-width">
          <iframe
            className="c-maps-wrap__inner__map-wrap-width__frame"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.4234321262884!2d55.2819441!3d25.222659399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f435b517fef43%3A0xb7bd6505300d387d!2sNESTOSH%20Technologies%20LLC!5e0!3m2!1sen!2s!4v1715069506919!5m2!1sen!2s"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Maps;
