import { Counter } from '../presentational_components/Counter'
import { connect } from 'react-redux'
import { setRoomAndUpdateChannel } from '../../redux/actions/asyncActions'
import { withRouter } from 'react-router-dom'

export const mapStateToProps = (state, { match: { params: { channelName: channelName } }}) => ({ channelName });

export const mapDispatchToProps = (dispatch, { match: { params: { channelName: channelName } }}) => ({
  ensureChannel: () => dispatch(setRoomAndUpdateChannel(channelName))
});


export const ConnectedCounter = withRouter(connect(mapStateToProps, mapDispatchToProps)(Counter));
