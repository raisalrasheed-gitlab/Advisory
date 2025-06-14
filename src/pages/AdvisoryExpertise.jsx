import { FaExchangeAlt, FaArrowsAltH, FaSearch } from 'react-icons/fa';
import Background from '../assets/images/Rectangle.png';
import AdvisoryBox from '../components/AdvisoryBox';

const services = [
  {
    icon: <FaExchangeAlt size={24} className="text-black" />,
    title: 'Transaction Advisory',
    description:
      'We align your deal objectives with executional precision, delivering end-to-end support that enhances value creation across the transaction lifecycle.',
  },
  {
    icon: <FaArrowsAltH size={24} className="text-black" />,
    title: 'Mergers & Acquisitions',
    description:
      'For buying, selling, or merging businesses, we deliver precision and perspective where it matters most.',
  },
  {
    icon: <FaSearch size={24} className="text-black" />,
    title: 'Market Feasibility Evaluation and Strategy',
    description:
      'Expanding to new markets or refining the current one, we align actionable insights with your growth objectives.',
  },
];

const AdvisoryExpertise = () => {
  return (
    <section className="bg-gradient-to-r from-white to-white py-10 px-6 md:px-16 h-screen container ">
      <h2 className="text-2xl font-semibold mb-2">
        Our Advisory
        <span className="bg-gradient-to-r from-yellow-500 to-gray-200 bg-clip-text text-transparent">
          Expertise
        </span>
      </h2>
      <div className="relative container bg-white  mt-6 h-[500px] rounded-3xl ">
        <img
          src={Background}
          alt="Background"
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />{' '}
        <div className="absolute top-6 left-6 right-6 text-white z-10 p-10">
          <p className="text-lg font-semibold w-100">
            Beyond the surface lies opportunity and Dot& help you bring it to
            light through an integrated approach. We support you in...
          </p>
        </div>
        <div className=" z-10 text-red-400  w-full absolute top-95 container">
          <AdvisoryBox services={services} />
        </div>
      </div>
    </section>
  );
};

export default AdvisoryExpertise;
