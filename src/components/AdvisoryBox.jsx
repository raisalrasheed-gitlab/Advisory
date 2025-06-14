const AdvisoryBox = ({ services }) => {
  console.log('this', services);

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-10/12 mx-auto">
      {services.map((service, index) => (
        <div
          key={index}
          className="bg-gradient-to-b from-gray-50 to-gray-200 rounded-xl p-6 shadow hover:shadow-lg transition-all"
        >
          <div className="text-gray-600 mb-4">{service.icon}</div>
          <h3 className="font-bold text-lg mb-2">{service.title}</h3>
          <p className="text-sm text-gray-600">{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default AdvisoryBox;
