import React from 'react'
import styled from 'styled-components'


const IconLayout = styled.div`
  display: grid;
  height: 100px;
  width: 100px;
  grid-template: 1fr 1fr 1fr / 1fr 1fr 1fr;
`

export const Plus = styled.div`
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 4;
  background-color: ${p => p.theme.colors.green};
`

export const Plus2 = styled.div`
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 2;
  background-color: ${p => p.theme.colors.green};
` 

export const Minus = styled.div`
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 2;
  background-color: ${p => p.theme.colors.red};
`

export const MinusIcon = () => <IconLayout>
  <Minus />
</IconLayout>

export const PlusIcon = () => <IconLayout>
  <Plus />
  <Plus2 />
</IconLayout>