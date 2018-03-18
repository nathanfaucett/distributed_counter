import React from 'react'
import styled from 'styled-components'

export const SettingsPage = ({setMe, setRoom, me, room}) => <div>
  <p>Me: {me}</p>
  <input onChange={event => setMe(event.target.value)}/>
  <p>Room: {room}</p>
  <input onChange={event => setRoom(event.target.value)}/>
</div>