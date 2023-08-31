import Image from "next/image";

const Loading = () => {
  return (
    <div className="fixed w-screen h-screen top-0 left-0 flex flex-col items-center justify-center bg-white bg-opacity-80 z-50">
      <div className="flex flex-col items-center space-y-4">
        <Image
          src="/assets/img/devonix.png"
          alt="Company Logo"
          width={270}
          height={270}
        />
        <div className="text-gray-700 text-xl font-semibold animate-pulse">
          Re-Factoring Your Data
        </div>
        <div className="w-12 h-12 border-t-4 border-indigo-400 border-solid rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default Loading;
