export const SkeletonCard = () => {
  return (
    <div className="drop-shadow-sm min-w-64 min-h-80 animate-pulse">
      <div className="flex flex-col items-center gap-4 rounded-t-3xl bg-gradient-to-r from-blue-200/50 to-blue-300/50 dark:from-blue-600/50 dark:to-blue-800/50 py-8 w-full">
        <div className="rounded-full bg-gray-300 dark:bg-gray-700 h-24 w-24"></div>
        <div className="bg-gray-300 dark:bg-gray-700 h-10 w-24 rounded"></div>
      </div>
      <div className="flex flex-col items-center rounded-b-3xl bg-[#2c2c2c] text-white py-8 w-full">
        <div className="bg-gray-300 dark:bg-gray-700 h-6 w-32 mb-4 rounded"></div>
        <div className="bg-gray-300 dark:bg-gray-700 h-4 w-24 rounded"></div>
      </div>
    </div>
  );
};
