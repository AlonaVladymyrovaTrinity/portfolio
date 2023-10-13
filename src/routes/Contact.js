import React from 'react';
import ContactForm from '../components/Contact/ContactForm';
import Hero from '../components/ReusableComponents/Hero/Hero';

const Contact = () => {
  return (
    <>
      <Hero title="CONTACT ME" caption="Send me a message" />
      <ContactForm />
    </>
  );
};

export default Contact;
