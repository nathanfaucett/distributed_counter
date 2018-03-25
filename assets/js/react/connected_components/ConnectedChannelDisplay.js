import { ChannelDisplay } from '../presentational_components/ChannelDisplay'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state, { match: { params: { channelName: channelName } }} ) => ({
  channelName: channelName
});

const mapDistpatchToProps = (dispatch, { history }) => ({
  goToPage: page => () => history.push(page)
});

export const ConnectedChannelDisplay = withRouter(connect(mapStateToProps, mapDistpatchToProps)(ChannelDisplay));
