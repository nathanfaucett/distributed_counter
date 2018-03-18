import React from 'react'

import { setMe, setRoom } from '../../redux/actions/simpleActions'
import { SettingsPage } from  '../presentational_components/SettingsPage'
import { connect } from 'react-redux'

let mapStateToProps = state => ({
  me: state.counts.me,
  room: state.counts.room,
});
let mapDispatchToProps = dispatch => ({
  setMe: me => dispatch(setMe(me)),
  setRoom: room => dispatch(setRoom(room))
});

export const ConnectedSettingsPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsPage);

