import React, { useState, createContext, useContext, useEffect } from 'react';

interface ILoadingCTX {
  loading: () => void;
  notLoading: () => void;
}

const loadingCTX = createContext<ILoadingCTX>({} as ILoadingCTX);

export const LoadingProvider = ({ children }: { children: React.ReactNode }) => {
  const initialLoading = localStorage.getItem('is-loading') || 'false';
  const [isLoading, setIsLoading] = useState(initialLoading);

  useEffect(() => {
    if (isLoading !== null && isLoading !== undefined) {
      localStorage.setItem('is-loading', isLoading);
    }
    if (isLoading) {
      loading();
    } else {
      notLoading();
    }
  }, [isLoading]);

  const loading = () => {
    setIsLoading('true');
  };

  const notLoading = () => {
    setIsLoading('false');
  };

  return <loadingCTX.Provider value={{ loading, notLoading }}>{children}</loadingCTX.Provider>;
};

export const useLoading = () => {
  return useContext(loadingCTX);
};
