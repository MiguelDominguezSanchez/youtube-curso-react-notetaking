import React from 'react'
import logo from './logo.svg'
import Componente from './components/Componente'
import './App.css'
import Propiedades from './components/Propiedades'
import Estado from './components/Estado'
import RenderizadoCondicional from './components/RenderizadoCondicional'
import RenderizadoElementos from './components/RenderizadoElementos'
import { EventosES6, EventosES7, MasSobreEventos } from './components/Eventos'
import CicloVida from './components/CicloVida'
import AjaxApis from './components/AjaxApis'
import ContadorHooks from './components/ContadorHooks'
import ScrollHooks from './components/ScrollHooks'
import RelojHooks from './components/RelojHooks'
import AjaxHooks from './components/AjaxHooks'
import HooksPersonalizados from './components/HooksPersonalizados'
import Referencias from './components/Referencias'

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<section>
					<hr />
					<Referencias />
					<hr />
					<HooksPersonalizados />
					<hr />
					<AjaxHooks />
					<hr />
					<RelojHooks />
					<hr />
					<ScrollHooks />
					<hr />
					<ContadorHooks titulo='Seguidores' />
					<hr />
					<AjaxApis />
					<hr />
					<CicloVida />
					<hr />
					<MasSobreEventos />
					<hr />
					<EventosES7 />
					<hr />
					<EventosES6 />
					<hr />
					<RenderizadoElementos />
					<hr />
					<RenderizadoCondicional />
					<hr />
					<Estado />
					<hr />
					<Propiedades
						cadena='Esto es una cadena de texto'
						numero={19}
						booleano={true}
						arreglo={[1, 2, 3]}
						objeto={{ nombre: 'Jon', correo: 'jonmircha@gmail.com' }}
						funcion={(num) => num * num}
						elementoReact={<i>Esto es un elemento React</i>}
						componenteReact={
							<Componente msg='Soy un componente pasado como prop' />
						}
					/>
					<hr />
					<Componente msg='Hola soy un Componente Funcional Expresado desde una prop' />
					<hr />
				</section>

				<img src={logo} className='App-logo' alt='logo' />

				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>

				<a
					className='App-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'
				>
					Learn React
				</a>
			</header>
		</div>
	)
}

export default App
