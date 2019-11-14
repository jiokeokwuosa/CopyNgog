import React from "react";
import "./assets/css/App.css";
import Homepage from "./components/pages/Homepage";
import NavBar from "./components/includes/Nav";

const App= () => {	
	return (
		<div>
			<NavBar
				Homepage={Homepage}					
			/>
		</div>
	);
	
}

export default App;