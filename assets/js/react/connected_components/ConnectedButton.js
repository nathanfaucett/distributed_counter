import { connect } from 'react-redux'

import { IncrementButton, DecrementButton } from '../presentational_components/Button'

import { increment, decrement } from '../../redux/actions/simpleActions'

const incrementMapDispatchToProps = dispatch => ({ incrementFunc: () => dispatch(increment()) });
const decrementMapDispatchToProps = dispatch => ({ decrementFunc: () => dispatch(decrement()) });

export const ConnectedIncrementButton = connect(
  null,
  incrementMapDispatchToProps
)(IncrementButton);

export const ConnectedDecrementButton = connect(
  null,
  decrementMapDispatchToProps
)(DecrementButton);