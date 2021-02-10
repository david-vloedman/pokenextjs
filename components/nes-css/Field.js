import PropTypes from 'prop-types'
const BASE_FIELD = 'nes-field'

export default function Field({isInline, props, children}){
  
  return (
    <div className={[BASE_FIELD, isInline? 'is-inline' : ''].join(' ')} {...props}>
      {children}
    </div>
  )
}

Field.propTypes = {
  isInline: PropTypes.bool
}

Field.defaultProps = {
  isInline: false
}