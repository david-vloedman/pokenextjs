export const variants = {
	normal: 'normal',
	primary: 'primary',
	success: 'success',
	warning: 'warning',
	error: 'error',
	disabled: 'disabled',
}

export function getVariantClass(variant) {
	switch (variant) {
		case variants.primary:
			return 'is-primary'
		case variants.success:
			return 'is-success'
		case variants.warning:
			return 'is-warning'
		case variant.error:
			return 'is-error'
		case variants.primary:
			return 'is-disabled'
		default:
			return ''
	}
}
