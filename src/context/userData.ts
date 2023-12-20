import {  createContext, SetStateAction,  Dispatch } from 'react';

interface IuserDataContx {
    usrData:object;
    setusrData: Dispatch<SetStateAction<object>>;
}
export const userDataContx = createContext<IuserDataContx>({
    usrData: {},
    setusrData: () => {},
});