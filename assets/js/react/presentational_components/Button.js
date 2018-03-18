import React from 'react'
import styled from 'styled-components'

import { MinusIcon, PlusIcon, Plus, Plus2, Minus } from './ButtonIcon'

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: calc(100% - 12px);
  height: calc(100% - 12px);
  border-radius: 14px;
`

const MinusBox = styled(Box)`
  border: 5px solid ${props => props.theme.colors.red};

  &:active {
    background-color: ${props => props.theme.colors.red};

    ${Minus} {
      background-color: white;
    }
  }
`

const PlusBox = styled(Box)`
  border: 5px solid ${props => props.theme.colors.green};

  &:active {
    background-color: ${props => props.theme.colors.green};

    ${Plus} {
      background-color: white;
    }

    ${Plus2} {
      background-color: white;
    }
  }
`

export const IncrementButton = ({incrementFunc}) => <PlusBox onClick={incrementFunc}> 
  <PlusIcon />
</PlusBox>

export const DecrementButton = ({decrementFunc}) => <MinusBox onClick={decrementFunc}> 
  <MinusIcon />
</MinusBox>
