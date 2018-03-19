import React from 'react'

import { setMeAndWriteStorage, setRoomAndWriteStorage } from '../../redux/actions/asyncActions';
import { SettingsPage } from  '../presentational_components/SettingsPage'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  me: state.counts.me,
  room: state.counts.room,
});

const mapDispatchToProps = dispatch => ({
  setMe: me => dispatch(setMeAndWriteStorage(me)),
  setRoom: room => dispatch(setRoomAndWriteStorage(room))
});

export const ConnectedSettingsPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsPage);

