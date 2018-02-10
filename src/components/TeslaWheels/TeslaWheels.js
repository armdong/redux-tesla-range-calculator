import React from 'react'
import PropTypes from 'prop-types'
import './TeslaWheels.css'

const TeslaWheels = ({ value, handleChangeWheels }) => {
  const sizes = [19, 21]

  return (
    <div className="tesla-wheels__component">
      <p className="tesla-wheels__title">Wheels</p>
      <div className="tesla-wheels__container cf">
        {sizes.map(size => (
          <label
            key={size}
            className={`tesla-wheels__item tesla-wheels__item--${size} ${value === size ? 'tesla-wheels__item--active' : ''}`}
          >
            <input
              type="radio"
              name="wheelsize"
              value={size}
              checked={value === size}
              onChange={() => {
                handleChangeWheels(size)
              }}
            />
            <p>{size}"</p>
          </label>
        ))}
      </div>
    </div>
  )
}

TeslaWheels.porpTypes = {
  value: PropTypes.number,
  handleChangeWheels: PropTypes.func
}

export default TeslaWheels