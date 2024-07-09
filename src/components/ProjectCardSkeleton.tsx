export const ProjectCardSkeleton = () => {
  return (
    <div className="bg-[#2c2c2c] text-white rounded-box p-5 shadow-md flex flex-col border border-gray-900">
      <div className="w-3/4 h-6 bg-gray-700 mb-4 rounded animate-pulse"></div>

      <div className="flex items-center mb-2">
        <div className="w-10 h-10 rounded-full bg-gray-700 mr-3 animate-pulse"></div>
        <div>
          <div className="w-24 h-4 bg-gray-700 mb-1 rounded animate-pulse"></div>
          <div className="w-20 h-3 bg-gray-700 rounded animate-pulse"></div>
        </div>
      </div>

      <div className="w-full h-16 bg-gray-700 mb-4 rounded animate-pulse"></div>

      <div className="flex flex-wrap mb-3">
        <div className="w-12 h-4 bg-gray-700 rounded mr-2 mb-2 animate-pulse"></div>
        <div className="w-12 h-4 bg-gray-700 rounded mr-2 mb-2 animate-pulse"></div>
        <div className="w-12 h-4 bg-gray-700 rounded mr-2 mb-2 animate-pulse"></div>
      </div>

      <div className="w-20 h-8 bg-gray-700 rounded mt-auto self-start animate-pulse"></div>
    </div>
  );
};
