import { NumberDisplay } from '../presentational_components/NumberDisplay'
import { netCount } from '../../utils'
import { connect } from 'react-redux'
import React from 'react'

let mapStateToProps = state => ({
  number: netCount(state.counts.additions, state.counts.subtractions)
})

export const ConnectedNumberDisplay = connect(mapStateToProps)(NumberDisplay)