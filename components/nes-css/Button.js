import PropTypes from 'prop-types'
import {getVariantClass, variants} from '../../lib/nes-css-helpers'

const BASE_BUTTON = 'nes-btn'

export default function Button({variant, label, onClick, type, ...props }) {
	return (
    <button 
      type={type}
      className={[BASE_BUTTON, getVariantClass(variant)].join(' ')}
      onClick={onClick}
      {...props}
    >
			{label}
		</button>
	)
}

Button.propTypes = {
	variant: PropTypes.oneOf(Object.values(variants)),
	type: PropTypes.oneOf(['button', 'submit']),
	label: PropTypes.string.isRequired,
	onClick: PropTypes.func,
}

Button.defaultProps = {
	variant: 'normal',
	type: 'button',
	onClick: undefined,
}
