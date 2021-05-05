import React, { Fragment, useState } from 'react'

export default function ContadorHooks(props) {
	const [contador, setContador] = useState(0)
	// console.log(useState())

	const sumar = () => setContador(contador + 1)
	const restar = () => setContador(contador - 1)

	return (
		<Fragment>
			<h2>Hooks - useState</h2>
			<nav>
				<button onClick={sumar}>+</button>
				<button onClick={restar}>-</button>
			</nav>
			<p>Contador de {props.titulo}</p>
			<h3>{contador}</h3>
		</Fragment>
	)
}

ContadorHooks.defaultProps = {
	titulo: 'Clicks',
}
