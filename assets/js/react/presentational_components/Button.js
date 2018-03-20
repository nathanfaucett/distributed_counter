import React from 'react'
import styled from 'styled-components'

import { MinusIcon, PlusIcon, Plus, Plus2, Minus } from './ButtonIcon'


const Outer = styled.div`
  border: 8px solid ${props => props.color};
  width: calc(100% - 120px);
  margin: 0 auto
`

const Center = styled.div`
  padding: 0 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Level = styled.div`
  background-color: white;
  border-left: 8px solid ${props => props.color};
  border-right: 8px solid ${props => props.color};
  height: 100%;
  padding: 8px 0;
  margin-left: -16px;
`

const Leveln = styled(Level)`
  width: calc(16px + 100%);
`

const EightBitButton = ({children, color, onClick}) => (<Outer onClick={onClick} color={color}>
    <Leveln level={1} color={color}>
      <Leveln level={2} color={color}>
        <Leveln level={3} color={color}>
          <Leveln level={4} color={color}>
            <Center >
              {...children}
            </Center>
        </Leveln>
      </Leveln>
    </Leveln>
  </Leveln>
</Outer>)

const MinusBox = styled(EightBitButton)`
  &:active {
    background-color: ${props => props.color};

    ${Minus} {
      background-color: white;
    }
  }
`

const PlusBox = styled(EightBitButton)`
  *:active {
    background-color: ${props => props.color};

    ${Plus}, ${Plus2} {
      background-color: white;
    }
}
`

export const IncrementButton = ({incrementFunc}) => <PlusBox color="green" onClick={incrementFunc}>
  <PlusIcon />
</PlusBox>

export const DecrementButton = ({decrementFunc}) => <MinusBox color="red" onClick={decrementFunc}>
  <MinusIcon />
</MinusBox>
