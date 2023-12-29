import {  createContext, SetStateAction,  Dispatch } from 'react';

interface IuserDataContx {
    isLoading:boolean;
    setisLoading: Dispatch<SetStateAction<boolean>>;
}
export const isLoadingContx = createContext<IuserDataContx>({
    isLoading: false,
    setisLoading: () => {},
});