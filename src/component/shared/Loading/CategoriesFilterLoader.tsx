const CategoriesFilterLoader = () => {
    return (
      <div className="bg-white w-full rounded-lg py-3 px-5 animate-pulse">
        {/* Title Placeholder */}
        <div className="h-6 bg-gray-300 rounded-md w-1/3 mb-2"></div>
  
        {/* Divider Placeholder */}
        <div className="h-px bg-gray-300 my-3"></div>
  
        {/* Category Links Placeholder */}
        <div className="space-y-2 pt-1">
          {Array.from({ length: 8 }).map((_, idx) => (
            <div key={idx} className="h-5 bg-gray-300 rounded w-2/3 mb-2"></div>
          ))}
        </div>
      </div>
    );
  };
  
  export default CategoriesFilterLoader;
  