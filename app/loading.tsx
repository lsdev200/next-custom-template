
const Loading = () => {
  return (
    <div className="fixed w-screen h-screen top-0 left-0 flex flex-col items-center justify-center  bg-gradient-to-b from-blue-400 to-indigo-600 z-50">
      <div className="text-white text-4xl font-bold mb-4 animate-pulse">
        Re-Factoring your data...
      </div>
      <div className="w-16 h-16 border-4 border-white rounded-full animate-spin"></div>
    </div>
  );
};

export default Loading;
