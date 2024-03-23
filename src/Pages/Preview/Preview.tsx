import { Card, Text } from "@shopify/polaris";
import React from "react";
import { useHome } from "../HomeContext";
import { Page, DataTable } from "@shopify/polaris";
export default function Preview() {
  const { volumeDiscountData, GeneralData } = useHome();
  type DiscountItem = {
    label: string;
    value: string | number | undefined;
  };

  const allValuesArrays: (string | number)[][] = [];

  volumeDiscountData.forEach((subArray: DiscountItem[]) => {
    const values: (string | number)[] = [];
    subArray.forEach((item: any) => {
      values.push(item.value);
    });
    allValuesArrays.push(values);
  });
  const transformedData: React.ReactNode[][] = allValuesArrays.map((row) => [
    row[0],
    row[1],
    row[2],
    row[3],
    row[4] === 1 ? "Discount" : "None",
    row[5],
  ]);
  const getValueByLabel = (label: string) => {
    const item = GeneralData.find((item: any) => item.label === label);
    return item ? item.value : null;
  };
  return (
    <Card>
      <Page title={getValueByLabel("Title")}>
        <Text as="h1" variant="bodyMd">
          {getValueByLabel("Description:")}
        </Text>
        <DataTable
          columnContentTypes={[
            "text",
            "text",
            "text",
            "numeric",
            "text",
            "numeric",
          ]}
          headings={[
            "Title",
            "Subtitle",
            "Label",
            "Quantity",
            "Discount Type",
            "Amount",
          ]}
          rows={transformedData}
        />
      </Page>
    </Card>
  );
}
