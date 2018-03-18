import React from 'react'
import styled from 'styled-components'

import { MinusIcon, PlusIcon } from './ButtonIcon'

const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: calc(100% - 12px);
  height: calc(100% - 12px);

  border: 5px solid ${props => props.type === "plus" ? props.theme.colors.green : props.theme.colors.red};
  border-radius: 14px;
`

export const IncrementButton = ({incrementFunc}) => <ButtonBox type="plus" onClick={incrementFunc}> 
  <PlusIcon />
</ButtonBox>

export const DecrementButton = ({decrementFunc}) => <ButtonBox type="minus" onClick={decrementFunc}> 
  <MinusIcon />
</ButtonBox>
