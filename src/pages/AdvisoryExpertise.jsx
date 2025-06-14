import React from 'react';
import { FaExchangeAlt, FaArrowsAltH, FaSearch } from 'react-icons/fa';
import Background from '../assets/images/Rectangle.png';
import AdvisoryBox from '../components/AdvisoryBox';

const services = [
  {
    icon: <FaExchangeAlt size={24} />,
    title: 'Transaction Advisory',
    description:
      'We align your deal objectives with executional precision, delivering end-to-end support that enhances value creation across the transaction lifecycle.',
  },
  {
    icon: <FaArrowsAltH size={24} />,
    title: 'Mergers & Acquisitions',
    description:
      'For buying, selling, or merging businesses, we deliver precision and perspective where it matters most.',
  },
  {
    icon: <FaSearch size={24} />,
    title: 'Market Feasibility Evaluation and Strategy',
    description:
      'Expanding to new markets or refining the current one, we align actionable insights with your growth objectives.',
  },
];

const AdvisoryExpertise = () => {
  return (
    <section className="bg-gradient-to-r from-white to-gray-100 py-10 px-6 md:px-16">
      <h2 className="text-2xl font-semibold mb-2">
        Our Advisory <span className="text-yellow-500">Expertise</span>
      </h2>
      <div className="relative bg-white rounded-xl overflow-hidden shadow-md mt-6  h-[564px]">
        <div className="absolute inset-0 bg-black opacity-30 z-0" />
        <img
          src={Background}
          alt="Advisory Background"
          className="z-0 w-full h-full object-cover object-center"
        />
        <div className="absolute top-6 left-6 right-6 text-white z-10">
          <p className="text-lg font-semibold">
            Beyond the surface lies opportunity and Dot& help you bring it to
            light through an integrated approach. We support you in...
          </p>
        </div>
        <div className="absolute z-10 text-red-400 top-10 w-full ">
          <AdvisoryBox services={services} />
        </div>
      </div>
    </section>
  );
};

export default AdvisoryExpertise;
