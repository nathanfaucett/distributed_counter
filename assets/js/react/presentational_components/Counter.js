import React from 'react'
import styled from 'styled-components'

import { ConnectedChannelDisplay } from '../connected_components/ConnectedChannelDisplay'
import { ConnectedNumberDisplay } from '../connected_components/ConnectedNumberDisplay'
import { ButtonPanel } from './ButtonPanel'

const AppBox = styled.div`
  display: grid;
  grid-template:  5% 30% 65% / 1fr;
  width: 100vw;
  height: 100vh;

  max-width: 700px;
  max-height: 900px;
`

export const Counter = () => <AppBox>
  <ConnectedChannelDisplay />
  <ConnectedNumberDisplay />
  <ButtonPanel />
</AppBox>