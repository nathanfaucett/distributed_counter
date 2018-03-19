import React from 'react'

import { setRoomAndWriteStorage, goToRoom } from '../../redux/actions/asyncActions';
import { SettingsPage } from  '../presentational_components/SettingsPage'
import { connect } from 'react-redux'
import { randRoom } from '../../lib/initalizers'
import { withRouter } from 'react-router'

const setRandomRoom = () => setRoomAndWriteStorage(randRoom());

const mapStateToProps = state => ({
  room: state.counts.room,
});

const mapDispatchToProps = (dispatch, {history}) => ({
  setRoom: room => dispatch(setRoomAndWriteStorage(room)),
  setRandomRoom: () => dispatch(setRandomRoom()),
  goToRoom: () => dispatch(goToRoom(history)),
});

export const ConnectedSettingsPage = withRouter(
  connect(mapStateToProps,mapDispatchToProps)(SettingsPage)
);

