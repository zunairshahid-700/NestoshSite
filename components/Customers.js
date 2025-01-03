import React from 'react';
import SectionTitle from './global/SectionTitle';


const Customers = ({title, customers}) => {
  return (
      <section className="c-portfolio">
        <div className="container">
            <SectionTitle cssClass="c-portfolio__heading" title={title}/>
        </div>
        <div className="c-portfolio__logos">
          {customers.map((customer) => (
            <div className="c-portfolio__logo" key={customer.id}>
                <img src={customer.icon} className="c-portfolio__logo-image img-fluid" alt={customer.id}/>
            </div>
          ))}
        </div>
    </section>
  )
}

export default Customers