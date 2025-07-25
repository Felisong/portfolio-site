"use client";
import { createContext, ReactNode, useContext, useState } from "react";

export type toastData = {
  message: string;
  isError: boolean;
  show: boolean;
};
type toastContextType = {
  showToast: boolean;
  toastData: toastData;
  triggerToast: (data: toastData) => void;
};

const toastContext = createContext<toastContextType | undefined>(undefined);

export const useToast = () => {
  const context = useContext(toastContext);
  if (!context) throw new Error("useToast must be used within ToastProvider");
  return context;
};

// the actual component that will provide access to use of this toast anywhere within.
export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [showToast, setShowToast] = useState<boolean>(false);
  const [toastData, setToastData] = useState<toastData>({
    message: "",
    isError: false,
    show: false,
  });

  // this will replace the data and make the toast display
  const triggerToast = (data: toastData) => {
    setToastData(data);
    setShowToast(data.show);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <toastContext.Provider value={{ showToast, toastData, triggerToast }}>
      {children}
    </toastContext.Provider>
  );
};
