import { Grid, Icon, Select } from "@shopify/polaris";
import React, { useCallback, useState } from "react";
import { DeleteIcon } from "@shopify/polaris-icons";
import { date } from "yup";
import TextFieldCustom from "../../Components/TextFieldCustom";
import { InlineGrid } from "@shopify/polaris";

interface Props {
  data: any;
  index: number;
}
const Option: React.FC<Props> = ({ data, index }) => {
  const [selected, setSelected] = useState("today");

  const handleSelectChange = useCallback(
    (value: string) => setSelected(value),
    []
  );

  const options = [
    { label: "Today", value: "today" },
    { label: "Yesterday", value: "yesterday" },
    { label: "Last 7 days", value: "lastWeek" },
  ];
  return (
    <div className="options-container">
      <div className="tag">options {index}</div>
      <div className="delete-icon-wrapper">
        <div className="delete-icon">
          <Icon source={DeleteIcon} tone="base" />
        </div>
      </div>

      <InlineGrid columns={3} gap="200">
        {data.map((elm: any) => {
          return (
            <div>
              <TextFieldCustom
                label={elm.label}
                value={elm.value}
                errorMessage={elm.errorMessage}
                handleChangeValue={() => {}}
              />
            </div>
          );
        })}
      </InlineGrid>
    </div>
  );
};

export default Option;
