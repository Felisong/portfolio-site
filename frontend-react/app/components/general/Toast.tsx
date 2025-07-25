"use client";

import { toastData } from "@/app/utils/context/toast/toastContext";

export default function Toast(toastData: toastData) {
  return (
    <div
      className={` p-2 w-fit rounded-2xl ${
        toastData.isError
          ? `bg-red-900 border-primary-white border-4`
          : `bg-green-200  border-dark-blue border-4`
      }`}
    >
      <p
        className={`${
          toastData.isError ? `text-primary-white` : `text-dark-blue`
        }`}
      >
        {toastData.message}
      </p>
    </div>
  );
}
