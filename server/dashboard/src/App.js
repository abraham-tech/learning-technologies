import React, { useState } from "react";
import Page from "./components/Page";
import styled from "styled-components";
import "./styles.css";

const StyledApp = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
`;

export default function App() {
  return (
    <StyledApp>
      <Page />
    </StyledApp>
  );
}
