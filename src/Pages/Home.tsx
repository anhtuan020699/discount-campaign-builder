import React from "react";
import { HomeProvider } from "./HomeContext";
import { Page, Grid } from "@shopify/polaris";
import { Card, Text } from "@shopify/polaris";
import Greneral from "./Greneral/Greneral";
import VolumeDiscountRule from "./VolumeDiscountRule/VolumeDiscountRule";
import Preview from "./Preview/Preview";
export default function Home() {
  return (
    <HomeProvider>
      <Page fullWidth>
        <Text as="h1" variant="bodyMd">
          Create volume disconunt
        </Text>
        <Grid>
          <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
            <Grid>
              <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 12, xl: 12 }}>
                <Greneral />
              </Grid.Cell>
              <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 12, xl: 12 }}>
                <VolumeDiscountRule />
              </Grid.Cell>
            </Grid>
          </Grid.Cell>
          <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
            <Preview />
          </Grid.Cell>
        </Grid>
      </Page>
    </HomeProvider>
  );
}
