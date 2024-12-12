import Header from "@/components/header";
import Sidebar from "@/components/sidebar";

// components/MostPopular.js
const MostPopular = () => {
  const popularAnime = [
    { id: 1, title: "One Piece", type: "TV", episodes: 1122, views: 1096 },
    { id: 2, title: "Bleach", type: "TV", episodes: 366, views: 366 },
  ];

  return (
    <div className="w-full h-full flex flex-col relative">
      {/* Header */}
      <Header className="w-full fixed top-0 bg-gray-900 text-white z-10" />

      <div className="flex pt-[63px]">
        {" "}
        {/* Adds space for the fixed header */}
        {/* Sidebar */}
        <div className="w-[20%] bg-black text-white h-[calc(100vh-63px)] fixed top-[63px] overflow-y-auto">
          <Sidebar />
        </div>
        {/* Main Content */}
        <div className="ml-[20%] w-[80%] bg-[#1e2027] h-[calc(100vh-63px)] overflow-y-auto">
          <div className="flex-1 p-6 bg-gray-900 text-gray-200 w-full h-full">
            <h1 className="text-3xl font-bold mb-4">Most Popular</h1>
            <div className="flex space-x-8 text-purple-400 text-sm">
              <span className="border-b-2 border-purple-400">Last 24h</span>
              <span>Last 7 days</span>
              <span>Last 30 days</span>
            </div>
            <div className="mt-6 space-y-4">
              {popularAnime.map((anime) => (
                <div
                  key={anime.id}
                  className="flex items-center p-4 bg-gray-800 rounded-lg"
                >
                  <div className="w-20 h-28 bg-gray-700 rounded-lg mr-4">
                    {/* Replace with actual image if available */}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold">#{anime.id}</span>
                    <h2 className="text-xl">{anime.title}</h2>
                    <span className="text-sm">{anime.type}</span>
                    <div className="flex space-x-2 mt-2">
                      <span className="text-sm">{anime.episodes} episodes</span>
                      <span className="text-sm">{anime.views} views</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MostPopular;
