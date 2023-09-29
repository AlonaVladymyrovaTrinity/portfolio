import React from 'react';
import ContactForm from '../components/Contact/ContactForm';
// import BannerImage from '../components/ReusableComponents/BannerImage/BannerImage';
import Hero from '../components/ReusableComponents/BannerImage/Hero';

const Contact = () => {
  return (
    <div>
      {/* <BannerImage heading="CONTACT ME" text="Send me a message" /> */}
      <Hero title="CONTACT ME" caption="Send me a message" />
      <ContactForm />
    </div>
  );
};

export default Contact;
