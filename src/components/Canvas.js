import React, { useRef, useState, useEffect } from "react";
import "./Canvas.css";

function Canvas() {
	const canvasRef = useRef(null);
	const [width, setWidth] = useState(null);
	const [height, setHeight] = useState(null);

	useEffect(() => {
		setWidth(window.innerWidth);
		setHeight(window.innerHeight);

		const canvas = canvasRef.current;
		const ctx = canvas.getContext("2d");
		canvas.width = width;
		canvas.height = height;
		const starArray = [];
		const cometArray = [];
		const NUMBER_OF_STARS = 1;
		const NUMBER_OF_COMETS = 1;
		const initialStars = 3;

		class Star {
			constructor(radius, inset, n, x, y) {
				this.radius = radius;
				this.oldRadius = this.radius;
				this.start = true;
				this.inset = inset;
				this.n = n;
				this.x = x;
				this.y = y;
				this.maxRadius = getRandomIntInclusive(5, 8);
			}
			draw() {
				ctx.beginPath();
				ctx.strokeStyle = "rgba(255, 255, 255, .5)";
				ctx.fillStyle = "rgba(255, 255, 255, 1)";
				ctx.lineWidth = 3;
				ctx.shadowBlur = 10;
				ctx.shadowColor = "white";
				ctx.save();
				ctx.translate(this.x, this.y);
				ctx.moveTo(0, 0 - this.radius);

				for (let i = 0; i < this.n; i++) {
					ctx.rotate(Math.PI / this.n);
					ctx.lineTo(0, 0 - this.radius * this.inset);
					ctx.rotate(Math.PI / this.n);
					ctx.lineTo(0, 0 - this.radius);
				}

				ctx.restore();
				ctx.closePath();
				ctx.stroke();
				ctx.fill();
			}
			update() {
				if (this.start) {
					this.radius = 2;
					this.start = false;
					this.flow = 0.3;
				} else if (this.radius > this.maxRadius) {
					this.flow = -0.3;
				}

				this.radius += this.flow;
			}
		}

		class Comet {
			constructor(radius, x, y) {
				this.radius = radius;
				this.x = x;
				this.y = y;
				this.velocityX = -120;
				this.velocityY = 80;
			}
			draw() {
				ctx.beginPath();
				ctx.strokeStyle = "white";
				ctx.fillStyle = "white";
				ctx.shadowBlur = 20;
				ctx.shadowColor = "rgba(255, 255, 255, 1";

				ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
				ctx.stroke();
				ctx.fill();

				for (let i = 0; i < 180; i++) {
					ctx.arc(
						this.x + 1.5 * i,
						this.y - 1 * i,
						this.radius - i * 0.05,
						0,
						Math.PI * 2
					);
					ctx.shadowBlur = 8;
					ctx.shadowColor = "rgba(255, 255, 255, .8";
					ctx.strokeStyle = `rgba(255, 255, 255, .5`;
					ctx.fillStyle = `rgba(255, 255, 255, .7`;
				}
				ctx.closePath();
				ctx.stroke();
				ctx.fill();
			}
			update() {
				this.x += this.velocityX;
				this.y += this.velocityY;
			}
		}

		function initComet() {
			for (let i = 0; i < NUMBER_OF_COMETS; i++) {
				let comet = new Comet(10, getRandomIntInclusive(width / 2, width), -20);
				comet.draw();
				cometArray.push(comet);
			}
		}

		function initStars() {
			for (let i = 0; i < NUMBER_OF_STARS; i++) {
				let star = new Star(
					2,
					0.35,
					4,
					getRandomIntInclusive(0, width),
					getRandomIntInclusive(0, height)
				);
				star.draw();
				starArray.push(star);
			}
		}

		function animate() {
			ctx.clearRect(0, 0, width, height);
			for (let i = 0; i < starArray.length; i++) {
				starArray[i].update();
				starArray[i].draw();
				if (starArray[i].radius <= 1) {
					starArray.splice(i, 1);
					i--;
				}
			}

			for (let i = 0; i < cometArray.length; i++) {
				cometArray[i].update();
				cometArray[i].draw();
				if (cometArray[i].y > height) {
					cometArray.splice(i, 1);
					i--;
				}
			}
			requestAnimationFrame(animate);
		}

		// function initIntervals() = {

		// }

		let interval1 = setInterval(() => {
			initStars();
		}, 2000);

		let interval2 = setInterval(() => {
			initStars();
		}, 3400);

		let interval3 = setInterval(() => {
			initStars();
		}, 5400);

		let interval4 = setInterval(() => {
			initComet();
		}, 7000);

		let interval5 = setInterval(() => {
			initComet();
		}, 15000);

		for (let i = 0; i < initialStars; i++) {
			initStars();
		}
		initComet();
		animate();

		//Resize canvas
		function resizeCanvasToDisplaySize() {
			if (width !== window.innerWidth || height !== window.innerHeight) {
				setWidth(window.innerWidth);
				setHeight(window.innerHeight);
			}
		}

		document.addEventListener("visibilitychange", (event) => {
			if (document.visibilityState === "visible") {
				interval1 = setInterval(() => {
					initStars();
				}, 2000);

				interval2 = setInterval(() => {
					initStars();
				}, 3400);

				interval3 = setInterval(() => {
					initStars();
				}, 5400);

				interval4 = setInterval(() => {
					initComet();
				}, 7000);

				interval5 = setInterval(() => {
					initComet();
				}, 15000);
			} else {
				clearInterval(interval1);
				clearInterval(interval2);
				clearInterval(interval3);
				clearInterval(interval4);
				clearInterval(interval5);
				ctx.clearRect(0, 0, width, height);
			}
		});

		window.addEventListener("resize", () => {
			resizeCanvasToDisplaySize();
		});

		return () =>
			window.removeEventListener("resize", () => {
				resizeCanvasToDisplaySize();
			});
	}, [width, height]);

	function getRandomIntInclusive(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1) + min);
	}

	return (
		<div className="canvas-container">
			<div className="background-img"></div>
			<canvas className="canvas" ref={canvasRef}></canvas>
		</div>
	);
}

export default Canvas;
