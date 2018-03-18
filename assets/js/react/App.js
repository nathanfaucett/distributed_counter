import React from 'react'
import styled, {ThemeProvider} from 'styled-components';

import { ConnectedNumberDisplay } from './connected_components/ConnectedNumberDisplay'
import { ButtonPanel } from './presentational_components/ButtonPanel'

const Theme = {
  colors: {
    green: "#34700d",
    red: "#d72c2f"
  }
}

const AppBox = styled.div`
  display: grid;
  grid-template: 30% 70% / 1fr;
  width: 100vw;
  height: 100vh;
`

export const App = () => <ThemeProvider theme={Theme}>
  <AppBox>
    <ConnectedNumberDisplay />
    <ButtonPanel />
  </AppBox>
</ThemeProvider>