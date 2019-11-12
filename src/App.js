import React from "react";
import "./assets/css/App.css";
import Homepage from "./components/pages/MyApp";
import NavBar from "./components/includes/Nav";

function App() {	
		return (
			<div>
				<NavBar
					Homepage={Homepage}					
				/>
			</div>
		);
	
}

export default App;