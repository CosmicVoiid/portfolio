import React from "react";
import Navbar from "./Navbar";
import "./About.css";
import htmlImg from "../images/html.png";
import cssImg from "../images/css.png";
import jsImg from "../images/js.png";
import tsImg from "../images/ts.png";
import reactImg from "../images/react.png";
import muiImg from "../images/mui.png";
import nodejsImg from "../images/nodejs.png";
import expressImg from "../images/express.png";
import jestImg from "../images/jest.png";
import mongodbImg from "../images/mongodb.png";
import pugImg from "../images/pug.png";
import gitImg from "../images/git.png";
import githubImg from "../images/github.png";
import firebaseImg from "../images/firebase.png";
import linuxImg from "../images/linux.png";
import figmaImg from "../images/figma.png";
import webpackImg from "../images/webpack.png";

function About() {
	return (
		<div id="about" className="about-page">
			<h1 className="about-header">
				About
				{/* <span className="header-border-bottom"/> */}
			</h1>

			<div className="about-content">
				<p>
					Completely committed to the philosophy of life-long learning, I'm a
					fullstack developer who absolutely loves building things and learning
					new tools and techniques for honing my craft. The unique combination
					of creativity, logic, technology and never running out of new things
					to discover, drives my excitement and passion for web development.
					From my background as a carpenter, I've noticed many simularities
					between the processes of engineering structures and creating software,
					so I'm well acquainted to bringing out solutions to complex problems.
					Other things I love to do is play guitar, stay in shape, and box.
				</p>
			</div>

			<h1 className="tech-header">
				Tools and Skills
				{/* <span className="tech-header-border-bottom"></span> */}
			</h1>
			<div className="tool-container">
				<div className="tool tool-set1">
					<h3 className="tool-header">Front-end</h3>
					<div className="row row1">
						<div className="icon-container">
							<img alt="html icon" src={htmlImg} />
							<p className="icon-caption">HTML</p>
						</div>
						<div className="icon-container css">
							<img alt="css icon" src={cssImg} />
							<p className="icon-caption">CSS</p>
						</div>
					</div>
					<div className="row row2">
						<div className="icon-container">
							<img className="js-image" alt="javascript icon" src={jsImg} />
							<p className="icon-caption">JavaScript</p>
						</div>
						<div className="icon-container">
							<img className="ts-image" alt="typescript icon" src={tsImg} />
							<p className="icon-caption">TypeScript</p>
						</div>
					</div>
					<div className="row row3">
						<div className="icon-container">
							<img alt="react icon" src={reactImg} />
							<p className="icon-caption">React</p>
						</div>
						<div className="icon-container">
							<img alt="MUI icon" src={muiImg} />
							<p className="icon-caption">MUI</p>
						</div>
					</div>
				</div>
				<div className="tool tool-set2">
					<h3 className="tool-header">Back-end</h3>
					<div className="row row1">
						<div className="icon-container">
							<img className="nodejs-image" alt="nodejs icon" src={nodejsImg} />
							<p className="icon-caption">NodeJS</p>
						</div>
						<div className="icon-container">
							<img
								className="express-image"
								alt="express icon"
								src={expressImg}
							/>
							<p className="icon-caption">Express</p>
						</div>
						<div className="icon-container">
							<img alt="mongodb icon" src={mongodbImg} />
							<p className="icon-caption">MongoDB</p>
						</div>
					</div>
					<div className="row row2">
						<div className="icon-container">
							<img className="js-image" alt="javascript icon" src={jsImg} />
							<p className="icon-caption">JavaScript</p>
						</div>
						<div className="icon-container">
							<img className="ts-image" alt="typescript icon" src={tsImg} />
							<p className="icon-caption">TypeScript</p>
						</div>
					</div>
					<div className="row row3">
						<div className="icon-container">
							<img alt="jest icon" src={jestImg} />
							<p className="icon-caption">Jest</p>
						</div>
						<div className="icon-container css">
							<img alt="pug icon" src={pugImg} />
							<p className="icon-caption">PUG / EJS</p>
						</div>
					</div>
				</div>
				<div className="tool tool-set3">
					<h3 className="tool-header">Miscellaneous</h3>
					<div className="row row1">
						<div className="icon-container">
							<img className="git-image" alt="git icon" src={gitImg} />
							<p className="icon-caption">Git</p>
						</div>
						<div className="icon-container">
							<img className="github-image" alt="github icon" src={githubImg} />
							<p className="icon-caption">GitHub</p>
						</div>
					</div>
					<div className="row row2">
						<div className="icon-container">
							<img alt="webpack icon" src={webpackImg} />
							<p className="icon-caption">Webpack</p>
						</div>
						<div className="icon-container">
							<img
								className="firebase-image"
								alt="firebase icon"
								src={firebaseImg}
							/>
							<p className="icon-caption">Firebase</p>
						</div>
					</div>
					<div className="row row3">
						<div className="icon-container">
							<img className="figma-image" alt="figma icon" src={figmaImg} />
							<p className="icon-caption">Figma</p>
						</div>
						<div className="icon-container">
							<img className="linux-image" alt="linux icon" src={linuxImg} />
							<p className="icon-caption">Linux</p>
						</div>
					</div>
				</div>
			</div>

			<div className="wave-container">
				<svg
					data-name="Layer 1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1200 120"
					preserveAspectRatio="none"
				>
					<path
						d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
						className="wave"
						fill="#2F2F2F"
						fillOpacity="1"
					></path>
				</svg>
			</div>
		</div>
	);
}

export default About;
