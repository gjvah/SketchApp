import React from 'react';
import './App.css';

function App() {
	return (
		<div className="App">
			<a href="/" className="backtoconventus">
				&#8249; Conventus
			</a>
			<div className="sidebar_wrapper">
				<div className="sidebar noselect">
					<ul>
						<li>
							<div className="color-picker animate">
								<button id="color_picker" />

								<form id="color" className="animate hidden">
									<label>Color</label>
									<input
										type="radio"
										className="form-radio r-black"
										name="color"
										value="rgba(0, 0, 0, 1)"
										defaultChecked
									/>
									<input
										type="radio"
										className="form-radio r-gr2"
										name="color"
										value="rgba(48, 48, 48, 0.85)"
									/>
									<input
										type="radio"
										className="form-radio r-gr1"
										name="color"
										value="rgba(104, 104, 104, 0.85)"
									/>
									<input
										type="radio"
										className="form-radio r-white"
										name="color"
										value="rgba(255, 255, 255, 0.8)"
									/>
									<input
										type="radio"
										className="form-radio r-red"
										name="color"
										value="rgba(226, 3, 3, 0.8)"
									/>
									<input
										type="radio"
										className="form-radio r-orange2"
										name="color"
										value="rgba(236, 73, 23, 0.85)"
									/>
									<input
										type="radio"
										className="form-radio r-orange"
										name="color"
										value="rgba(243, 164, 16, 0.84)"
									/>
									<input
										type="radio"
										className="form-radio r-yellow"
										name="color"
										value="rgba(247, 219, 38, 0.84)"
									/>
									<input
										type="radio"
										className="form-radio r-green"
										name="color"
										value="rgba(30, 198, 30, 0.6)"
									/>
									<input
										type="radio"
										className="form-radio r-dgreen"
										name="color"
										value="rgba(29, 143, 96, 0.87)"
									/>
									<input
										type="radio"
										className="form-radio r-tblue"
										name="color"
										value="rgba(29, 94, 143, 0.87)"
									/>
									<input
										type="radio"
										className="form-radio r-blue"
										name="color"
										value="rgba(15, 15, 182, 0.6)"
									/>
									<input
										type="radio"
										className="form-radio r-purple"
										name="color"
										value="rgba(95, 63, 191, 0.85)"
									/>
									<input
										type="radio"
										className="form-radio r-purple2"
										name="color"
										value="rgba(232, 23, 236, 0.85)"
									/>
								</form>
							</div>
						</li>
						<li>
							<button id="size_picker" />
							<form id="weight" className="animate hidden">
								<label>Size</label>
								<input
									type="radio"
									className="form-radio stroke-weight s-2"
									name="weight"
									value="2"
									defaultChecked
								/>
								<input type="radio" className="form-radio stroke-weight s-4" name="weight" value="4" />
								<input type="radio" className="form-radio stroke-weight s-8" name="weight" value="8" />
								<input
									type="radio"
									className="form-radio stroke-weight s-12"
									name="weight"
									value="12"
								/>
								<input
									type="radio"
									className="form-radio stroke-weight s-16"
									name="weight"
									value="16"
								/>
							</form>
						</li>
						<li>
							<button id="canvas_picker" />
							<div id="canvas_selection" className="animate hidden">
								<label>Canvas</label>
								<button id="canvas-paper">
									<i className="canvas-def canvas-paper" />
								</button>

								<button id="canvas-wool">
									<i className="canvas-def canvas-wool" />
								</button>

								<button id="canvas-wood">
									<i className="canvas-def canvas-wood" />
								</button>

								<button id="canvas-white">
									<i className="canvas-def canvas-white" />
								</button>
							</div>
						</li>
						<li>
							<label>Tools</label>
							<button id="clear-c">
								<i className="clear-c" />
							</button>

							<button id="savePng-c">
								<i className="savePng-c" />
							</button>
						</li>
					</ul>
				</div>
			</div>
			<div id="canvas-bg" className="fixed" />
			{/* <footer>
				<p>
					Created with <i className="fa fa-heart" /> by
					<a target="_blank" href="https://florin-pop.com">
						Florin Pop
					</a>
					- Read how I created this and how you can join the challenge
					<a target="_blank" href="https://www.florin-pop.com/blog/2019/04/drawing-app-built-with-p5js/">
						here
					</a>.
				</p>
			</footer> */}
		</div>
	);
}

export default App;
