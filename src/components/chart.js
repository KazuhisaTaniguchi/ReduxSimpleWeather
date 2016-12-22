import React, { Component, PropTypes } from 'react'
import _ from 'lodash'
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines'


export default class Chart extends Component{
  static get propTypes() {
    return {
      data: PropTypes.array.isRequired,
      color: PropTypes.string.isRequired,
      units: PropTypes.string.isRequired
    }
  }
  average(data){
    return _.round(_.sum(data)/data.length)
  }
  render(){
    return(
      <div>
        <Sparklines width={200} height={200} data={this.props.data}>
          <SparklinesLine color={this.props.color} />
          <SparklinesReferenceLine type="avg" />
        </Sparklines>
        <div>{this.average(this.props.data)} {this.props.units}</div>
      </div>
    )
  }
}
