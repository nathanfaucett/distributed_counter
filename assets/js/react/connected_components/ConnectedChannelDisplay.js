import { ChannelDisplay } from '../presentational_components/ChannelDisplay'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const mapStateToProps = state => ({
  channelName: state.counts.room
})

const mapDistpatchToProps = (dispatch, { history }) => ({
  homePage: () => history.push('/')
});

export const ConnectedChannelDisplay = withRouter(connect(mapStateToProps, mapDistpatchToProps)(ChannelDisplay));