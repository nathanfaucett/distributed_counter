import React from 'react'
import styled from 'styled-components'


const Button = styled.div`
  width: 100%;
  height: 90%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 90% 90%;
`
const MinusButton = Button.extend`
  background-image: url("/images/minus.svg");

  &:active {
    background-image: url("/images/minus_down.svg");
  }
`
const PlusButton = Button.extend`
  background-image: url("/images/plus.svg");

  &:active {
    background-image: url("/images/plus_down.svg");
  }
`

export const IncrementButton = ({incrementFunc}) => <PlusButton onClick={incrementFunc} />

export const DecrementButton = ({decrementFunc}) => <MinusButton onClick={decrementFunc} />
