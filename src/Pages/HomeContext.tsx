import React, { createContext, useContext, useState, ReactNode } from "react";

interface HomeContextType {
  GeneralData: any;
  setGeneralData: any;
  volumeDiscountData: any;
}

const HomeContext = createContext<HomeContextType | undefined>(undefined);

export const useHome = () => {
  const context = useContext(HomeContext);
  if (!context) {
    throw new Error("useHome must be used within a HomeProvider");
  }
  return context;
};

interface HomeProviderProps {
  children: ReactNode;
}
export enum disconuntType {
  None,
  Discount,
}
export const HomeProvider: React.FC<HomeProviderProps> = ({ children }) => {
  const [GeneralData, setGeneralData] = useState([
    {
      label: "Campaign",
      value: "",
    },
    {
      label: "Title",
      value: "",
    },
    {
      label: "Description:",
      value: "",
    },
  ]);
  const [volumeDiscountData, setVolumeDiscountData] = useState([
    [
      {
        label: "Title",
        value: "Single",
      },
      {
        label: "Subtitle",
        value: "Standard price",
      },
      {
        label: "label",
        value: "Standard price",
      },
      {
        label: "Quantity",
        value: 1,
      },
      {
        label: "Discount type",
        value: disconuntType.None,
      },
      {
        label: "Amount",
        value: 0,
      },
    ],
    [
      {
        label: "Title",
        value: "Duo",
      },
      {
        label: "Subtitle",
        value: "Save 10%",
      },
      {
        label: "label",
        value: "Popular",
      },
      {
        label: "Quantity",
        value: 2,
      },
      {
        label: "Discount type",
        value: disconuntType.Discount,
      },
      {
        label: "Amount",
        value: 10,
      },
    ],
  ]);

  const value = { GeneralData, setGeneralData, volumeDiscountData };

  return <HomeContext.Provider value={value}>{children}</HomeContext.Provider>;
};
