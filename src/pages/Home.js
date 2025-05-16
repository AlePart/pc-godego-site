import React from 'react';
import HomeBanner from '../components/sections/HomeBanner';
import InfoSidebar from '../components/sections/InfoSidebar';
import FacebookFeed from '../components/sections/FacebookFeed';
import EventsSection from '../components/sections/EventsSection';

const Home = () => {
  return (
    <div>
      <HomeBanner />
      
      <div className="container mx-auto p-6 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar Info */}
          <div className="lg:col-span-1">
            <InfoSidebar />
          </div>

          {/* Facebook Feed */}
          <div className="lg:col-span-2">
            <FacebookFeed />
          </div>
        </div>
        
        {/* Sezione Eventi e Formazione */}
        <EventsSection />
      </div>
    </div>
  );
};

export default Home;