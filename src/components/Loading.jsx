import React from "react";

const Loading = () => {
  return (
    <>
      <div className="flex h-screen items-center justify-center bg-gray-900">
        <div className="flex w-52 flex-col gap-4">
          <div className="bg-slate-400 rounded-2xl animate-pulse h-32 w-full"></div>
          <div className="bg-slate-400 rounded-2xl animate-pulse h-4 w-28"></div>
          <div className="bg-slate-400 rounded-2xl animate-pulse h-4 w-full"></div>
          <div className="bg-slate-400 rounded-2xl animate-pulse h-4 w-full"></div>
        </div>
      </div>
    </>
  );
};

export default Loading;
