import React from 'react';
import Hero from '../../Components/Hero';
import Card from '../../Components/Card';
import MIddlepart from '../../Components/MIddlepart';
import Lastmiddle from '../../Components/Lastmiddle';
import Newsletter from '../../Components/Newsletter';
import HowItWorks from '../../Components/HowItWorks';
import WhyChooseUs from '../../Components/WhyChooseUs';
import Testimonials from '../../Components/Testimonials';
import TrustIndicators from '../../Components/TrustIndicators';
import CallToAction from '../../Components/CallToAction';
import FAQ from '../../Components/FAQ';

const MIddle = () => {
    return (
        <>
        {/* Section 1: Hero Carousel */}
        <Hero></Hero>

        {/* Section 2: How It Works & Statistics */}
        <HowItWorks></HowItWorks>

        {/* Section 3: Featured Reviews */}
        <div className='px-4 md:px-10 py-8 md:py-12'>
          <div className='text-center mb-10 md:mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3'>Top Rated Reviews</h2>
            <p className='text-gray-600 dark:text-gray-400 text-lg'>Check out the most loved reviews from our community</p>
          </div>
          <MIddlepart></MIddlepart>
        </div>

        {/* Section 4: Best Deals */}
        <Lastmiddle></Lastmiddle>

        {/* Section 5: Why Choose Us */}
        <WhyChooseUs></WhyChooseUs>

        {/* Section 6: Trust Indicators */}
        <TrustIndicators></TrustIndicators>

        {/* Section 7: Testimonials */}
        <Testimonials></Testimonials>

        {/* Section 8: Call-to-Action */}
        <CallToAction></CallToAction>

        {/* Section 9: FAQ */}
        <FAQ></FAQ>

        {/* Section 10: Newsletter */}
        <Newsletter></Newsletter>
        </>
    );
};

export default MIddle;