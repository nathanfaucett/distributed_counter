import { Counter } from '../presentational_components/Counter'
import { connect } from 'react-redux'
import { setRoomAndWriteStorage } from '../../redux/actions/asyncActions'
import { withRouter } from 'react-router-dom'

export const mapStateToProps = (state, { match: { params: { channelName: channelName } }}) => ({ channelName });

export const mapDispatchToProps = dispatch => ({
  ensureRoom: room => dispatch(setRoomAndWriteStorage(room))
})


export const ConnectedCounter = withRouter(connect(mapStateToProps, mapDispatchToProps)(Counter));
