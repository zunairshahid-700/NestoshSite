import React from 'react'

const ShopifySolution = ({shopifySolutions}) => {
  return (
    <section className="c-imgsolutions">
        <div className="container">
            {shopifySolutions.map((solution, index) =>(
                <div className={`c-imgsolutions__text-img ${index % 2 == 0? '':'c-imgsolutions__text-img--reverse'}`} key={index}>
                    <div className="c-imgsolutions__text">
                        <h3 className="c-imgsolutions__heading">{solution.title}</h3>
                        <p className="c-imgsolutions__desc">{solution.desc}</p>
                    </div>
                    <div className="c-imgsolutions__img-div">
                        <img src={solution.image} alt="shopify"/>
                    </div>
                </div>
            ))}
        </div>
    </section>
  );
};

export default ShopifySolution