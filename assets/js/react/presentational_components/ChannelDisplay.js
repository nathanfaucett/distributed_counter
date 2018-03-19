import React from 'react'
import styled from 'styled-components'

const DisplayBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Press Start 2P';
  background-color: ${props => props.theme.colors.lightGrey};
  color: white;//${props => props.theme.colors.darkGrey};
  font-size: 10px;
  margin-bottom: 1px;
`

export const ChannelDisplay = ({channelName}) => <DisplayBox>
  {channelName}
</DisplayBox>