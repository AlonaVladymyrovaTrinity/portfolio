import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import ContactForm from '../components/Contact/ContactForm';
import BannerImage from '../components/ReusableComponents/BannerImage/BannerImage';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <BannerImage heading="CONTACT ME" text="Send me a message" />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;
