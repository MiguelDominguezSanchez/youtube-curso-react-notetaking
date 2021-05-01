import React from 'react'

// Componente funcional en formato de Función Expresada con arrow function
const Componente = (props) => <h2>{props.msg}</h2>

// Componente Funcional en formato de Función Declarada
/*
function Componente(props) {
	return <h2>{props.msg}</h2>
}
*/

// Componente Basado en Clase
/*
class Componente extends Component {
	render() {
		return <h2>{this.props.msg}</h2>
	}
}
*/

export default Componente
