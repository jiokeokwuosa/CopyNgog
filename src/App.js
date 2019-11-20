import React from "react";
import "./assets/css/App.css";
import Homepage from "./components/pages/Homepage";
import About from "./components/pages/About";
import NavBar from "./components/includes/Nav";
import Sports from "./components/pages/Sports";
import Contact from "./components/pages/Contact";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import LatestNews from "./components/pages/LatestNews";
import Medals from "./components/pages/Medals";
import Athletics from "./components/pages/Athletics";
import Badminton from "./components/pages/Badminton";
import Basketball from "./components/pages/Basketball";
import Chess from "./components/pages/Chess";
import Golf from "./components/pages/Golf";
import LawnTennis from "./components/pages/LawnTennis";
import Pool from "./components/pages/Pool";
import Scrabble from "./components/pages/Scrabble";
import Soccer from "./components/pages/Soccer";
import Squash from "./components/pages/Squash";
import Swimming from "./components/pages/Swimming";
import TableTennis from "./components/pages/TableTennis";
import Register from "./components/pages/Register";


const App= () => {	
	return (
		<div>
			<NavBar
				Homepage={Homepage}	
				About={About}	
				Sports={Sports}
				Contact={Contact}	
				Login={Login}	
				Signup={Signup}	
				LatestNews={LatestNews}	
				Medals={Medals}	
				Athletics={Athletics}	
				Badminton={Badminton}
				Basketball={Basketball}
				Chess={Chess}		
				Golf={Golf}
				LawnTennis={LawnTennis}
				Pool={Pool}
				Scrabble={Scrabble}
				Soccer={Soccer}
				Squash={Squash}
				Swimming={Swimming}
				TableTennis={TableTennis}
				Register={Register}
			/>
		</div>
	);
	
}

export default App;