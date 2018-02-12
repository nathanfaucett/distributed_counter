import React from 'react'

export const IncrementButton = ({incrementFunc}) => <div onClick={incrementFunc}> 
  +
</div>

export const DecrementButton = ({decrementFunc}) => <div onClick={decrementFunc}> 
  -
</div>

