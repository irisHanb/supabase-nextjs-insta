"use client";

export default function Message({ isFromMe, message }) {
  return (
    <div
      className={`flex w-fit px-3 py-1 rounded-md
      ${
        isFromMe
          ? "bg-light-blue-600 text-white ml-auto"
          : "bg-gray-100 text-black"
      }
    `}
    >
      <p>{message}</p>
    </div>
  );
}
