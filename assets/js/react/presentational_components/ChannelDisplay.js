import React from 'react'
import styled from 'styled-components'

const DisplayBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Press Start 2P';
  background-color: ${props => props.theme.colors.lightGrey};
  color: white;
  font-size: 10px;
  margin-bottom: 1px;
  user-select: none;
`;

const HamburgerBun = styled.div`
  padding-right: 10px;
`;

const HamburgerSlice = styled.div`
  width: 35px;
  height: 3px;
  background-color: black;
  margin: 4px 0;
  background-color: white;
`;

const HamburgerMenu = () => <HamburgerBun>
  <HamburgerSlice />
  <HamburgerSlice />
  <HamburgerSlice />
</HamburgerBun>;

const EmptyDiv = styled.div`
  width: 35px;
`;

export const ChannelDisplay = ({channelName, goToPage}) => <DisplayBox onClick={goToPage('/')}>
  <EmptyDiv />
    <p>{channelName}</p>
  <HamburgerMenu />
</DisplayBox>;
