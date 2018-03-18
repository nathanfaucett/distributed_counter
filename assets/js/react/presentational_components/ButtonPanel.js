import React from 'react'
import styled from 'styled-components'

import { ConnectedDecrementButton, ConnectedIncrementButton } from "../connected_components//ConnectedButton"

const ButtonPanelBox = styled.div`
  display: flex;
  flex-flow: column nowrap;
  flex-grow: 1;

  width: 100%px;
  max-width: 400px;
  
  height: 100%;
  max-height: 1000px;
  min-height: 200px;

  background-color: blue;
`;

export const ButtonPanel = () => <ButtonPanelBox>
  <ConnectedIncrementButton />
  <ConnectedDecrementButton />
</ButtonPanelBox>