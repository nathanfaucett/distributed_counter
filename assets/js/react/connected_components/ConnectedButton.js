import { connect } from 'react-redux'

import { IncrementButton, DecrementButton } from '../presentational_components/Button'

import { increment, decrement } from '../../redux/actions/simpleActions'

const decrementFunc = dispatch => dispatch(increment());
const incrementFunc = dispatch => dispatch(decrement());

decrementMapDispatchToProps = { decrementFunc: decrementFunc };
incrementMapDispatchToProps = { incrementFunc: incrementFunc };

export const ConnectedIncrementButton = connect()(IncrementButton);
export const ConnectedDecrementButton = connect()(DecrementButton);