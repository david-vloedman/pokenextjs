import PropTypes from 'prop-types'

const BASE_CONTAINER = 'nes-container'
const BASE_TITLE = 'title'
const BASE_CENTERED = 'is-centered'
const BASE_WITH_TITLE = 'with-title'

const getWithTitleClass = (hasTitle) => (hasTitle ? BASE_WITH_TITLE : null)
const getIsCenteredClass = (centered) => (centered ? BASE_CENTERED : null)

export const Title = ({ title, props }) => {
	return <p className={BASE_TITLE}>{title}</p>
}

export default function Container({
	isCentered,
	withTitle,
	title,
	titleClassName,
	containerClassName,
	props,
	children,
}) {

	const containerClassNames = [
		BASE_CONTAINER,
		getIsCenteredClass(isCentered),
    getWithTitleClass(withTitle),
  ]

	return (
		<div className={containerClassNames.join(' ')} {...props}>
			{withTitle ? <Title title={title} /> : null}
			{children}
		</div>
	)
}

Container.propTypes = {
	isCentered: PropTypes.bool,
	withTitle: PropTypes.bool,
}

Container.defaultProps = {
	isCentered: false,
	withTitle: false,
}
