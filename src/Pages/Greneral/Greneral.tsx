import { Card, Grid, Text, TextField } from "@shopify/polaris";
import React, { useCallback, useState } from "react";
import TextFieldCustom from "../../Components/TextFieldCustom";
import { useHome } from "../HomeContext";

const Greneral = () => {
  const [error, setError] = useState("");

  const { GeneralData, setGeneralData } = useHome();
  const handleChangeValue = (value: any, label: any) => {
    // setGeneralData((prevGeneralData: any) => {
    //   return prevGeneralData.map((item: any) => {
    //     if (item.label === label) {
    //       return { ...item, value: value };
    //     }
    //     return item;
    //   });
    // });
  };
  return (
    <Card>
      <>
        {GeneralData.map((elm: any) => {
          return (
            <>
              <TextFieldCustom
                label={elm.label}
                value={elm.value}
                errorMessage={elm.errorMessage}
                handleChangeValue={handleChangeValue}
              />
            </>
          );
        })}
      </>
    </Card>
  );
};

export default Greneral;
