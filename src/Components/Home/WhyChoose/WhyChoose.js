import React from 'react';
import fastDeliveryImage from '../../images/why-choose-us/adult-blur-blurred-background-687824.png'
import autoResponder from '../../images/why-choose-us/architecture-building-city-2047397.png'
import homeDelivery from '../../images/why-choose-us/chef-cook-food-33614.png'
import arrowIcon from '../../images/why-choose-us//right-arrow.png'
import '../../Container/Container.css'

const WhyChoose = () => {
    return (
        <div className='container py-6'>
            <div className='pl-4'>
                <h2 className='text-4xl py-3'>Why Choose us</h2>
                <p className='text-lg w-2/3'>Barton waited twenty always repair in within we do. An delighted offending curiosity my is dashwoods at. Boy prosperous increasing surrounded</p>
            </div>
            <section className='flex pt-6 justify-between'>
                <div className='p-6'>
                    <img src={fastDeliveryImage} alt="Fast Delivery" />
                    <div>
                        <h3 className='font-bold py-3 text-2xl'>Fast Delivery</h3>
                        <p>
                            Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about our future.
                        </p>
                        <a className='flex text-blue-600 items-center' href="/">See more <img className='w-6 pl-2' src={arrowIcon} alt="Right Arrow" /></a>
                    </div>
                </div>
                <div className='p-6'>
                    <img src={homeDelivery} alt="auto Responder" />
                    <div>
                        <h3 className='font-bold py-3 text-2xl'>A Good auto Responder</h3>
                        <p>
                            Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about our future.
                        </p>
                        <a className='flex text-blue-600 items-center' href="/">See more <img className='w-6 pl-2' src={arrowIcon} alt="Right Arrow" /></a>
                    </div>
                </div>
                <div className='p-6'>
                    <img src={autoResponder} alt="Home Delivery" />
                    <div>
                        <h3 className='font-bold py-3 text-2xl'>Home Delivery</h3>
                        <p>
                            Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about our future.
                        </p>
                        <a className='flex text-blue-600 items-center' href="/">See more <img className='w-6 pl-2' src={arrowIcon} alt="Right Arrow" /></a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WhyChoose;