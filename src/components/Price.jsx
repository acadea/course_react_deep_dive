import React from 'react'
import PropTypes from 'prop-types';

function Price(props) {
  return (
    <div>{props.value.toFixed(2)}</div>
  )
}

Price.propTypes = {
  value: PropTypes.number,
}

export default Price;