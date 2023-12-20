
import {  createContext, SetStateAction,  Dispatch } from 'react';

import { Routs } from './routs';

interface IuserDataContx {
  cont_data:string;
    
}
export const DataContx = createContext<IuserDataContx>({
cont_data: "",
});

const cont_data="global context"

export const App = () => {










  return (
    <>
        <Routs/>
      {/* <DataContx.Provider value={{ cont_data }}>
      </DataContx.Provider> */}
    </>
  );
};
