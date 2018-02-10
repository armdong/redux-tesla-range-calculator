import React from 'react'
import PropTypes from 'prop-types'
import './TeslaStats.css'

const TeslaStats = ({ carstats }) => (
  <div className="tesla-stats tesla-stats-animation">
    <ul>
      {carstats.map((stat) => (
        <li key={stat.model}>
          <div className={`tesla-stats-icon tesla-stats-icon--${stat.model.toLowerCase()}`}></div>
          <p>{stat.miles}</p>
        </li>
      ))}
    </ul>
  </div>
)

TeslaStats.propTypes = {
  carstats: PropTypes.array
}

export default TeslaStats