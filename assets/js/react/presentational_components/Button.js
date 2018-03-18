import React from 'react'
import styled from 'styled-components'

import { MinusIcon, PlusIcon } from './ButtonIcon'

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: calc(100% - 12px);
  height: calc(100% - 12px);
  border-radius: 14px;
`

const MinusBox = styled(Box)`
  border: 5px solid ${props => props.theme.colors.red}
`

const PlusBox = styled(Box)`
  border: 5px solid ${props => props.theme.colors.green}

  &:focus {
    background-color: blue;
  }
`

export const IncrementButton = ({incrementFunc}) => <PlusBox onClick={incrementFunc}> 
  <PlusIcon />
</PlusBox>

export const DecrementButton = ({decrementFunc}) => <MinusBox onClick={decrementFunc}> 
  <MinusIcon />
</MinusBox>
