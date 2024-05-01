import { createContext, useState } from "react";
import { CarsDataset } from "../Datasets/CarsDataset";

export const CarsContext = createContext(null);

export const CarsProvider = (props) => {
    // let a =10;

    return (
        <CarsContext.Provider value={{CarsDataset}}>
            {props.children}
        </CarsContext.Provider>
    )
}