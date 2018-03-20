import React from 'react'
import styled from 'styled-components'

const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NumberBox = styled.div`
  display: flex;
  justify-content: center;

  border-radius: 10px;

  font-family: 'Press Start 2P';
  font-size: ${props => props.number < 99999 ? '70px' : '50px'};
  text-align: center;

  background-color: ${props => props.theme.colors.lightGreen};
  width: 100%
  height: 100%;
  overflow: hidden;
`;

export const NumberDisplay = ({ number }) => <NumberBox number={number}>
  <FlexCenter><p>{ number }</p></FlexCenter>
</NumberBox>