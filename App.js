import React from "react";
import "./App.css";
import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
import Home from "./views/HomeView";

export default () => (
  <ApplicationProvider {...eva} theme={eva.light}>
    <Home />
  </ApplicationProvider>
);
