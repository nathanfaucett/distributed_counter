import React from 'react'
import styled from 'styled-components'

import { MinusIcon, PlusIcon } from './ButtonIcon'

const ButtonBox = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  text-align: center;
  font-size: 30px;
  font-family: "Press Start 2P";
  flex-grow: 1;
`

export const IncrementButton = ({incrementFunc}) => <ButtonBox onClick={incrementFunc}> 
  <PlusIcon />
</ButtonBox>

export const DecrementButton = ({decrementFunc}) => <ButtonBox onClick={decrementFunc}> 
  <MinusIcon />
</ButtonBox>
