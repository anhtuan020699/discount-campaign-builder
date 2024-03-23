import { Card, Icon, Text } from "@shopify/polaris";
import React from "react";
import { useHome } from "../HomeContext";
import Option from "./Option";
import { PlusIcon } from "@shopify/polaris-icons";
import "./styles.scss";

export default function VolumeDiscountRule() {
  const { volumeDiscountData } = useHome();
  return (
    <div>
      <Card>
        <Text as="h1" variant="bodyMd">
          Volume discount rule
        </Text>
        <hr className="hr" />

        {volumeDiscountData.map((elm: any, index: any) => {
          return <Option data={elm} index={index} />;
        })}
        <hr className="hr" />
        <div className="add-btn-wrapper">
          <div className="add-btn">
            <Icon source={PlusIcon} tone="base" /> Add options
          </div>
        </div>
      </Card>
    </div>
  );
}
