const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[17%] px-[5%] absolute text-white bg-gradient-to-r from-black w-full aspect-video h-[100vh] z-1">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="font-medium">
        <button className="text-black bg-white text-xl px-10 py-2 rounded-md me-2 hover:bg-opacity-80"> ▷ Play</button>
        <button className="bg-gray-500 bg-opacity-50 text-white text-xl px-10 py-2 rounded-md">More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
