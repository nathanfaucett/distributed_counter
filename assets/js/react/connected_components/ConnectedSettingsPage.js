import React from 'react'

import { setRoom } from '../../redux/actions/simpleActions'
import { goToRoom } from '../../redux/actions/asyncActions';
import { SettingsPage } from  '../presentational_components/SettingsPage'
import { connect } from 'react-redux'
import { randRoom } from '../../lib/initalizers'
import { withRouter } from 'react-router'

const mapStateToProps = state => ({
  room: state.counts.room,
});

const mapDispatchToProps = (dispatch, {history}) => ({
  setRoom: room => dispatch(setRoom(room)),
  setRandomRoom: () => dispatch(setRoom(randRoom())),
  goToRoom: () => dispatch(goToRoom(history)),
});

export const ConnectedSettingsPage = withRouter(
  connect(mapStateToProps,mapDispatchToProps)(SettingsPage)
);

