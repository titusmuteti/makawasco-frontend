import React from 'react';
import ServiceCard from './ServiceCard';
import data from '../data';

const Services = () => {
  return (
    <>
      <h2 className="text-center mt-4">Our Services:</h2>
      <section style={{ background: '#fff' }}>
        <div className="row justify-content-center">
          {data.servicedata.map((service, index) => {
            return <ServiceCard key={index} title={service.title} image={service.image} desc={service.desc} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Services;
