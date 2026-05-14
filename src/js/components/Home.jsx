import React from "react";
import DoList from "./DoList";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Proyecto: ToDoList usando React</h1>
			<h1>todos</h1>

			<br></br>
			
			<DoList />

			<br></br>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>
			</p>
		</div>
	);
};

export default Home;