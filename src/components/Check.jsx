const Check = () => {
  return (
    <div className="relative w-[300px] h-[300px] bg-gradient-to-br from-gray-100 to-gray-300 rounded-[30px] overflow-hidden  p-6">
      {/* Top-left icon */}
      <div className="w-8 h-8 flex items-center justify-center border border-gray-500 rounded-full">
        ↑
      </div>

      {/* Content */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold text-gray-800">
          Mergers & Acquisitions
        </h2>
        <p className="text-sm text-gray-600 mt-2">
          For buying, selling, or merging businesses, we deliver precision and
          perspective where it matters most.
        </p>
      </div>

      {/* Bottom-right inverted curve */}
      <div className="absolute bottom-6 right-1 w-30 h-18 bg-white rounded-[20px] translate-x-1/2 translate-y-1/2 z-10" />

      {/* Optional: arrow inside inverted curve */}
      <div className="absolute bottom-0 right-0 w-20 h-30 flex items-center justify-center translate-x-1/2 translate-y-1/2 z-20">
        <div className="w-10 h-10 bg-gray-200 transform "></div>
      </div>
    </div>
  );
};

export default Check;
