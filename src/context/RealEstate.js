import { createContext, useState } from "react";
import { realEstateDataset } from "../Datasets/RealEstateDataset";

export const RealEstateContext = createContext(null);

export const RealEstateProvider = (props) => {
    let [propertyName, setPropertyName] = useState("Tokyo");
    return (
        <RealEstateContext.Provider value={{realEstateDataset, propertyName, setPropertyName}}>
            {props.children}
        </RealEstateContext.Provider>
    )
}