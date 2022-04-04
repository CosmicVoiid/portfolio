import React from "react";
import "./Contact.css";

function Contact() {
	return (
		<div id="contact" className="contact-container">
			<div className="contact-divider">
				<svg
					data-name="Layer 1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1200 120"
					preserveAspectRatio="none"
				>
					<path
						className="envelope"
						d="M1200 0L0 0 598.97 114.72 1200 0z"
					></path>
				</svg>
			</div>
			<div className="contact-form-container">
				<h1 className="contact-header">
					Contact<span className="contact-divider"></span>
				</h1>
				<p className="contact-description">
					Have a question or want to work together?
				</p>
				<p className="contact-description contact-description2">
					Leave me a message and I'll get back to you as soon as possible!
				</p>
				<form
					className="form-container"
					action="https://formsubmit.co/saurav.sah01@gmail.com"
					method="POST"
				>
					<input
						className="form-name"
						placeholder="Name"
						type="text"
						name="name"
						required
					/>
					<input
						className="form-email"
						placeholder="Email"
						type="email"
						name="email"
						required
					/>
					<textarea
						placeholder="Your Message"
						className="form-text"
						name="message"
						rows="6"
						required
					/>
					<div className="btn-container">
						<button className="form-submit" type="submit">
							Send
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Contact;
