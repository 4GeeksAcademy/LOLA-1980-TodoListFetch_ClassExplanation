import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	//LOGICA
	const todosURL = "https://playground.4geeks.com/todo/"

	//fetch( url de la API, metodos, body, info es un json)
	//.then( codigo de status y el mensaje, aqui se convierte de JSON a JS)
	//.then( manejar la información que nos llego de la API)
	//.catch( si algo sale mal en el código de aqui es donde obtenemos la info del error)
	// Si el metodo no se especifica en el fetch, lo interpreta como un GET
	/*
	fetch(getTodosURL)
	.then((response)=>{console.log(response)
		return response.json()
	})
	.then((data)=>{console.log(data)})
	.catch((error)=>{error})
	*/
	const [todos, setTodos] = useState([])
	
	fetch(todosURL + 'users/josecaro02')
		.then(response => response.json())
		.then(data => {
			setTodos(data.todos)
		})
		.catch()

	let newTodo = {
		"label": "lavar la ropa"
	}

	function addTodo() {
		fetch(todosURL + 'todos/josecaro02', {
			method: "POST",
			body: JSON.stringify(newTodo),
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then(response => response.json())
			.then(data => console.log(data))
			.catch(error => error)
	}

	return (
		<div className="text-center">
			<h1>TODO'S</h1>
			{todos.map((value, index) => {
				return <h3 key={index}>{value.label}</h3>
			})}
		</div>
	);
};

export default Home;
