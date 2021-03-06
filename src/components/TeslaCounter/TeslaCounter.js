import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './TeslaCounter.css'

class TeslaCounter extends Component {
  state = {
    direction: ''
  }

  componentWillReceiveProps(nextProps) {
    const { currentValue, initValues } = nextProps

    if (this.props.currentValue !== nextProps.currentValue) {
      const direction = this.props.currentValue < nextProps.currentValue ? 
        'increase' : 'decrease'
      
      this.setState({ direction })
      return false
    }
  }

  render() {
    const { initValues, currentValue, increment, decrement } = this.props
    const { direction } = this.state
    const animationClass = direction === 'increase' ? 
      'flip-in-hor-top' : 'flip-in-hor-bottom'

    return (
      <div className="tesla-counter">
        <p className="tesla-counter__title">{initValues.title}</p>
        <div className="tesla-counter__container cf">
          <div className="tesla-counter__item">
            <div className={animationClass}>
              <p className="tesla-counter__number">
                {currentValue}
                <span>{initValues.unit}</span>
              </p>
            </div>
            <div className="tesla-counter__controls">
              <button
                onClick={(e) => {
                  e.preventDefault()
                  increment(currentValue)
                }}
                disabled={currentValue >= initValues.max}
              ></button>
              <button
                onClick={(e) => {
                  e.preventDefault()
                  decrement(currentValue)
                }}
                disabled={currentValue <= initValues.min}
              ></button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

TeslaCounter.propTypes = {
  currentValue: PropTypes.number,
  increment: PropTypes.func,
  decrement: PropTypes.func,
  initValues: PropTypes.object
}

export default TeslaCounter