import React from 'react'
import styled from 'styled-components'

import { MinusIcon, PlusIcon, Plus, Plus2, Minus } from './ButtonIcon'

const width = () => document.getElementById("#normalizer").offsetWidth - 100;
const border = () => 8;
const height = () => 160;

const Outer = styled.div`
  border: ${() => border()}px solid ${props => props.color};
  width: ${() => width()}px;
  margin: 0 auto;
`

const Center = styled.div`
  padding: 0 ${() => 3 * border()}px;
`

const Level = styled.div`
  background-color: white;
  border-left: ${() => border()}px solid ${props => props.color};
  border-right: ${() => border()}px solid ${props => props.color};
  height: 100%;
  padding: ${() => border()}px 0;
  margin-left: -16px;
`

const Leveln = styled(Level)`
  width: ${props => props.level * 2 * border() +  width()}px
`

const EightBitButton = ({children, color}) => (<Outer color={color}>
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

const MinusBox = ({children, onClick}) => <EightBitButton color={"red"} onClick={onClick}>{...children}</EightBitButton>

const PlusBox = ({children, onClick}) => <EightBitButton color={"green"} onClick={onClick}>{...children}</EightBitButton>

export const IncrementButton = ({incrementFunc}) => <PlusBox onClick={incrementFunc}>
  <PlusIcon />
</PlusBox>

export const DecrementButton = ({decrementFunc}) => <MinusBox onClick={decrementFunc}>
  <MinusIcon />
</MinusBox>
