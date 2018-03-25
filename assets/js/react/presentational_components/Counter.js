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

  max-width: 450px;
  max-height: 900px;
`

export class Counter extends React.Component {
  componentDidMount() {
    const { channelName, ensureChannelMatchesRoom } = this.props;
    ensureChannelMatchesRoom(channelName);
  }

  render() {
   return <AppBox>
    <ConnectedChannelDisplay />
    <ConnectedNumberDisplay />
    <ButtonPanel />
   </AppBox>;
  }
}