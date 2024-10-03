import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { storyblokEditable } from '@storyblok/react';


const ComingSoon = ({ blok }) => {
  return (
    <section className="py-5 text-center bg-light" {...storyblokEditable(blok)}>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <img src={blok.Image.filename} alt="Coming Soon" className="img-fluid mb-4" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
