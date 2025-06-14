import { FaChevronRight } from 'react-icons/fa';
const AdvisoryBox = ({ services }) => {
  return (
    <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-10/12 mx-auto gap-10 cursor-pointer mb-10">
      {services.map((service, index) => (
        <div className="relative w-[350px] h-[300px] bg-gradient-to-br from-gray-100 to-gray-300 rounded-[30px] overflow-hidden  p-6">
          {service.icon}

          <div className="mt-10">
            <h2 className="text-xl font-semibold text-gray-800">
              {service.title}
            </h2>
            <p className="text-sm text-gray-600 mt-2">{service.description}</p>
          </div>

          <div className="absolute bottom-5 right-0 w-30 h-18 bg-white rounded-[25px] translate-x-1/2 translate-y-1/2 z-10" />

          <div
            className="absolute bottom-7 right-7 w-10 h-10 flex items-center justify-center 
          translate-x-1/2 translate-y-1/2
           z-20"
          >
            <div className="w-20 h-10 p-2 bg-gray-200 transform  flex items-center justify-center rounded-2xl">
              <FaChevronRight />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdvisoryBox;
