import React from 'react';
import { Heart, Award, Users, Star } from 'lucide-react';

const About = () => {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">About HealConnect</h2>
          <p className="text-xl text-gray-600">Built by healthcare professionals, for healthcare professionals</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80"
              alt="Medical professionals meeting"
              className="rounded-lg shadow-xl"
            />
          </div>
          
          <div>
            <h3 className="text-3xl font-bold text-blue-900 mb-6">Our Commitment</h3>
            <p className="text-gray-600 mb-8">
              HealConnect is dedicated to empowering healthcare professionals with cutting-edge technology. We understand the unique challenges of modern healthcare delivery and provide solutions that enhance clinical workflow, improve patient care, and reduce administrative burden.
            </p>
            
            <div className="space-y-6">
              <Stat
                icon={<Star className="h-6 w-6 text-blue-600" />}
                title="Top-Rated Platform"
                description="Highest satisfaction among healthcare providers"
              />
              <Stat
                icon={<Users className="h-6 w-6 text-blue-600" />}
                title="50,000+ Active Providers"
                description="Growing network of medical professionals"
              />
              <Stat
                icon={<Award className="h-6 w-6 text-blue-600" />}
                title="Industry Recognition"
                description="Leading healthcare technology solution"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Stat = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="flex items-start">
    <div className="mr-4">{icon}</div>
    <div>
      <h4 className="text-lg font-semibold">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

export default About;
