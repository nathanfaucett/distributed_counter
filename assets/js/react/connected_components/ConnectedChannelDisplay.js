import { ChannelDisplay } from '../presentational_components/ChannelDisplay'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  channelName: state.counts.room
})

export const ConnectedChannelDisplay = connect(mapStateToProps)(ChannelDisplay);