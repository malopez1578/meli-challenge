import PropTypes from 'prop-types'
import style from './Icon.module.scss'

const Icon = ({ name }) => {
  return <i className={`${style['c-icon']}`} data-icon={name} />
}

Icon.prototype = {
  name: PropTypes.string.isRequired,
}

export { Icon }
