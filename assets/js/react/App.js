import React from 'react'
import styled, {ThemeProvider} from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { ConnectedSettingsPage } from './connected_components/ConnectedSettingsPage'
import { Counter } from './presentational_components/Counter'

const Theme = {
  colors: {
    green: "#34700d",
    red: "#d72c2f",
    lightGreen: "#95f442",
    lightGrey: "gray",
    drakGrey: "black",
  }
}

const ScreenNormalizer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
`

const NormalizedCounter = () => <ScreenNormalizer><Counter /></ScreenNormalizer>
const NormalizedSettingsPage = () => <ScreenNormalizer><ConnectedSettingsPage /></ScreenNormalizer>

export const App = () => <ThemeProvider theme={Theme}>
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={NormalizedSettingsPage}/>
      <Route path='/counter/:channelName' component={NormalizedCounter}/>
    </Switch>
  </BrowserRouter>
</ThemeProvider>