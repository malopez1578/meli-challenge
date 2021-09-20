import PropTypes from 'prop-types'
import { Icon } from '../Icon/Icon'
import style from './Button.module.scss'

const Button = ({ label, icon, onClick, type = '' }) => {
  return (
    <button
      type={type}
      className={`${style['c-btn']} ${icon ? style['c-btn_icon'] : ''}`}
    >
      {label && label}
      {icon && <Icon name={icon} />}
    </button>
  )
}

Button.prototype = {
  label: PropTypes.string,
  icon: PropTypes.string,
  onClick: PropTypes.func,
}

export { Button }
