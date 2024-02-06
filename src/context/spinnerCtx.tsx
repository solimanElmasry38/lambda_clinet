import React, { useState, createContext, useContext } from "react";

interface IspinnerCtx {
  loading: boolean | null;
  setLoading: React.Dispatch<React.SetStateAction<boolean | null>>;
}

const spinnerState = {
  loading: false,
  setLoading: () => {},
};
const spinnerCtx = createContext<IspinnerCtx>(spinnerState);
export const SpinnerProvider = ({ children }) => {
  const [loading, setLoading] = useState<boolean | null>(false);
  return (
    <spinnerCtx.Provider
      value={{
        loading,
        setLoading,
      }}
    >
      {children}
    </spinnerCtx.Provider>
  );
};

export const useSpinner = () => {
  return useContext(spinnerCtx);
};
