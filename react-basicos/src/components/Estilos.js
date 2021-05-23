import React from 'react'
import './Estilos.css'
import './Estilos.scss'
import moduleStyles from './Estilos.module.css'

export default function Estilos() {
	let myStyles = {
		borderRadius: '.5rem',
		margin: '2rem auto',
		maxWidth: '50%',
	}
	return (
		<section className='estilos'>
			<h2>estilos CSS en react</h2>
			<h3 className='bg-react'>Estilos hoja CSS externa</h3>
			<h3
				className='bg-react'
				style={{ borderRadius: '.25rem', margin: '1rem' }}
			>
				Estilos en linea (atributo style)
			</h3>
			<h3 className='bg-react' styles={{ myStyles }}>
				Estilos en línea
			</h3>
			<h3 className='bg-react' styles={{ myStyles }}>
				Estilos en línea
				<br />
				<code>@import-normalize</code>
			</h3>
			<h3 className={moduleStyles.error}>Estilos con Módules</h3>
			<h3 className={moduleStyles.success}>Estilos con Módules</h3>
			<h3 className='bg-sass'>Estilos con SASS</h3>
		</section>
	)
}
