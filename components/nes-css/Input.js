import PropTypes from 'prop-types'
import {getVariantClass, variants} from '../../lib/nes-css-helpers'

const BASE_INPUT = 'nes-input'

export default function Input({variant, type, onChange, id, name,  props}){
  return (
    <input 
    type={type} 
    className={[BASE_INPUT, getVariantClass(variant)].join(' ')}
    onChange={onChange}
    id={id}
    name={name}
    {...props}
    />
  )
}

Input.PropTypes = {
  type: PropTypes.string,
  onChange: PropTypes.func,
  variant: PropTypes.oneOf(Object.values(variants)),
}

Input.defaultProps = {
  type: 'text',
  variant: ''
}