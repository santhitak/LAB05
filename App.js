import React from "react";
import "./App.css";
import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
import HomeView from "./views/HomeView";

export default () => (
  <ApplicationProvider {...eva} theme={eva.light}>
    <HomeView />
  </ApplicationProvider>
);
