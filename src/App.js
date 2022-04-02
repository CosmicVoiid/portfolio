import Home from "./components/Home";
import Canvas from "./components/Canvas";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
	return (
		<div className="app">
			<Canvas />
			<Home />
			<Navbar />
			<About />
			<Projects />
			<Contact />
		</div>
	);
}

export default App;
