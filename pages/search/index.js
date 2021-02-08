import { useState } from 'react'
import Button from '../../components/nes-css/Button'
import Input from '../../components/nes-css/Input'
import Field from '../../components/nes-css/Field'

export default function Index() {
	const [state, setState] = useState({
		input: '',
	})

	const onChange = (e) => {
		const key = e.target.id
		const value = e.target.value
		form[key] = value
	}

	return (
    <div className={'nes-container with-title'}>
      <p className={'title'}>Search</p>
		<Field>
      <label>Input</label>
			<Input variant={'success'} onChange={() => console.log(hey)} />
			<Button label='TEST BUTTON' variant={'success'} />
		</Field>
    </div>
	)
}
