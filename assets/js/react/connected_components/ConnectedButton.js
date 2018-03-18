import { connect } from 'react-redux'

import { IncrementButton, DecrementButton } from '../presentational_components/Button'

import { incrementAndNotify, decrementAndNotify } from '../../redux/actions/asyncActions'

const incrementMapDispatchToProps = dispatch => ({ incrementFunc: () => dispatch(incrementAndNotify()) });
const decrementMapDispatchToProps = dispatch => ({ decrementFunc: () => dispatch(decrementAndNotify()) });

export const ConnectedIncrementButton = connect(
  null,
  incrementMapDispatchToProps
)(IncrementButton);

export const ConnectedDecrementButton = connect(
  null,
  decrementMapDispatchToProps
)(DecrementButton);