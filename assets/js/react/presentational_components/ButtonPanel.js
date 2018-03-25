import React from 'react'
import styled from 'styled-components'

import { ConnectedDecrementButton, ConnectedIncrementButton } from "../connected_components//ConnectedButton"

const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const ButtonPanelBox = styled.div`
  display: grid;

  width: 100%;
  height: 100%;
  background-color: #f3f5f6;
`;

export const ButtonPanel = () => <ButtonPanelBox>
  <FlexCenter><ConnectedIncrementButton /></FlexCenter>
  <FlexCenter><ConnectedDecrementButton /></FlexCenter>
</ButtonPanelBox>