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
  grid template: 1fr 20px 1fr / 1fr;

  width: 100%;
  height: 100%;
`;

export const ButtonPanel = () => <ButtonPanelBox>
  <FlexCenter><ConnectedIncrementButton /></FlexCenter>
  <FlexCenter><ConnectedDecrementButton /></FlexCenter>
</ButtonPanelBox>