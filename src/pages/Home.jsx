import React from 'react';
import Profile from '../components/ProfileSection/Profile';
import Links from '../components/LinksSection/Links';
import Footer from '../components/Footer/Footer';

const Home = () => {
  const slackName = 'ibkay998';
  return (
    <div className='mx-[44px] my-[16px]'>
      <Profile slackName={slackName} />
      <Links slackName={slackName} />
      <Footer />
    </div>
  );
};

export default Home;
