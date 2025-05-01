

const Portfolio = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Portfolio</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Portfolio items will be added here */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="aspect-video bg-gray-100 rounded-md mb-4"></div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Coming Soon</h3>
          <p className="text-gray-600">Portfolio items will be displayed here.</p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;