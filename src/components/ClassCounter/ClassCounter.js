import { Component } from "react";
class ClassCounter extends Component {
	constructor(props) {
		super(props); //SUPER ME TRAE TODAS LAS CARACTERISTICAS QUE POSEE LA CLASE COMPONENT
		this.state = { count: 0 };
	}
	//EN LAS CLASES LAS FUNCIONES LA PODEMOS DEFINIR COMO METODOS
	//METODOS A CONTINUACION PARA CREAR LAS FUNCIONES DENTRO DE LAS CLASES

	decrement = () => {
		this.setState({
			count: this.state.count - 1,
		});
	};

	increment = () => {
		this.setState({
			count: this.state.count + 1,
		});
	};
	//ATRAVEZ DEL METODO THIS YO PUEDO ACCEDER AL METODO DECREMENT DE ARRIBA
	render() {
		return (
			<div>
				<button onClick={this.decrement}>-</button>
				<p>{this.state.count}</p>
				<button onClick={this.increment}>+</button>
			</div>
		);
	}
}

export default ClassCounter;
//COMPONENETE BASADO EN CLASE

//ESTE ES UN COMPONENTE CONTENEDOR QUE TIENE ESTADOS Y LOGICA Y A SU VEZ PUEDE CONTENER OTROS COMPONENTES CONTENEDORES O DE PRESENTACION
