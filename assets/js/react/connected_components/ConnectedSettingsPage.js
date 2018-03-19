import React from 'react'

import { setRoomAndWriteStorage } from '../../redux/actions/asyncActions';
import { SettingsPage } from  '../presentational_components/SettingsPage'
import { connect } from 'react-redux'
import faker from 'faker'

const randRoom = () => faker.company.bs()
const setRandomRoom = () => setRoomAndWriteStorage(randRoom());

const mapStateToProps = state => ({
  room: state.counts.room,
});

const mapDispatchToProps = dispatch => ({
  setRoom: room => dispatch(setRoomAndWriteStorage(room)),
  setRandomRoom: () => dispatch(setRandomRoom())
});

export const ConnectedSettingsPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsPage);

