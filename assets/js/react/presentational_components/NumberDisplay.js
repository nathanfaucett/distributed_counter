import React from 'react'
import styled from 'styled-components'

const NumberBox = styled.div`
  display: flex;
  justify-content: center;

  border-radius: 10px;

  font-family: 'Press Start 2P';
  font-size: 70px;
  text-align: center;
  
  background-color: #95f442;
  width: 100%
  height: 100%;
` 

export const NumberDisplay = ({ number }) => <NumberBox>
  <p>{ number }</p>
</NumberBox>