"use client";
import Toast from "@/app/components/general/Toast";
import { useToast } from "./toastContext";
import { useEffect, useState } from "react";
// controls the visibility of the toast
const ToastWrapper = () => {
  const { showToast, toastData } = useToast();
  const [fadeIn, setFadeIn] = useState<boolean>(false);

  useEffect(() => {
    setFadeIn(showToast);
  }, [showToast]);
  return (
    <div
      role="status"
      className={`flex justify-center fixed top-20 transition-all duration-300 w-full h-fit z-20 ${
        fadeIn ? `opacity-100` : `opacity-0 -translate-y-8`
      }`}
      style={{
        transitionTimingFunction: fadeIn
          ? "cubic-bezier(0.34, 1.50, 0.70, 1)"
          : "ease-in-out",
      }}
    >
      <Toast {...toastData} />
    </div>
  );
};

export default ToastWrapper;
