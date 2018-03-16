import React from 'react'
import styled from 'styled-components'

export const IncrementButton = ({incrementFunc}) => <div onClick={incrementFunc}> 
  +
</div>

export const DecrementButton = ({decrementFunc}) => <div onClick={decrementFunc}> 
  -
</div>
