"use client";
export default function Loading() {
  return (
    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-white bg-opacity-50 z-50">
      <div className=" border-t-4 border-solid rounded-full animate-spin text-active h-16 w-16"></div>
    </div>
  );
}
