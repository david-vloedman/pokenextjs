import PropTypes from 'prop-types'
const BASE_FIELD = 'nes-field'

export default function Field({isInline, props, children}){
  return (
    <div className={[BASE_FIELD, isInline? 'is-inline' : ''].join(' ')}>
      {children}
    </div>
  )
}

Field.PropTypes = {
  isInline: PropTypes.bool
}

Field.defaultProps = {
  isInline: true
}