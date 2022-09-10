import { createContext, useContext, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const initiStatus = {
  search: '',
  setSearch: undefined,
};

const HomeContext = createContext(initiStatus);

export const HomeContextProvider = ({ children }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(searchParams.get('search') ? searchParams.get('search') : '');

  useEffect(() => {
    if (search.length >= 3) {
      setSearchParams({ search }, { replace: true });
    } else if (search.length === 0) {
      setSearchParams({}, { replace: true });
    }
  }, [search]);

  return <HomeContext.Provider value={{ search, setSearch }}>{children}</HomeContext.Provider>;
};

export const useHomeContext = () => useContext(HomeContext);
