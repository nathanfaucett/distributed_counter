import { ChannelDisplay } from '../presentational_components/ChannelDisplay'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const mapStateToProps = state => ({
  channelName: state.channel.room
})

const mapDistpatchToProps = (dispatch, { history }) => ({
  goToPage: page => () => history.push(page)
});

export const ConnectedChannelDisplay = withRouter(connect(mapStateToProps, mapDistpatchToProps)(ChannelDisplay));