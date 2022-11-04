import React from 'react';
import Footer from '../components/Footer/Footer';
import ContactMe from '../components/Contact/ContactMe';
import ContactForm from '../components/Contact/ContactForm';

const Contact = () => {
  return (
    <div>
      <div className='my-[64px] md:mt-[156px] w-full flex flex-col items-center'>
        <div className='md:max-w-[720px] flex flex-col'>
          <ContactMe />
          <ContactForm />
        </div>
      </div>
      <div className='ml-[14px]'>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
