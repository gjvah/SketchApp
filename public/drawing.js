const form2 = document.getElementById('weight');
const canvas_selection = document.getElementById('canvas_selection');
const weight = form2.elements['weight'];
const clearCanvas = document.getElementById('clear-c');
const canvasBG = document.getElementById('canvas-bg');
const canvasPaper = document.getElementById('canvas-paper');
const canvasWool = document.getElementById('canvas-wool');
const canvasWood = document.getElementById('canvas-wood');
const canvasWhite = document.getElementById('canvas-white');
const color_picker = document.getElementById('color_picker');
const size_picker = document.getElementById('size_picker');
const canvas_picker = document.getElementById('canvas_picker');

const fixed = document.getElementById('canvas-bg');

const savePng = document.getElementById('savePng-c');

var form = document.getElementById('color');
const colorInput = form.elements['color'];

const paths = [];
let currentPath = [];
const currentColor = 'red';

function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
	noFill();

	if (mouseIsPressed) {
		const point = {
			x: mouseX,
			y: mouseY,
			color: colorInput.value,
			weight: weight.value
		};
		currentPath.push(point);
	}

	paths.forEach((path) => {
		beginShape();
		path.forEach((point) => {
			stroke(point.color);
			strokeWeight(point.weight);
			curveVertex(point.x, point.y);
		});
		endShape();
	});
}

function mousePressed() {
	currentPath = [];
	paths.push(currentPath);
}

clearCanvas.addEventListener('click', () => {
	paths.splice(0);
	clear();
});
savePng.addEventListener('click', () => {
	saveCanvas('myCanvas', 'png');
});

canvasPaper.addEventListener('click', () => {
	canvasBG.style.backgroundImage = 'url(/CodingDojo/drawing/paper.jpg)';
});
canvasWool.addEventListener('click', () => {
	canvasBG.style.backgroundImage = 'url(/CodingDojo/drawing/canvas.jpg)';
});
canvasWood.addEventListener('click', () => {
	canvasBG.style.backgroundImage = 'url(/CodingDojo/drawing/wood.jpg)';
});
canvasWhite.addEventListener('click', () => {
	canvasBG.style.backgroundImage = 'url(/CodingDojo/drawing/white.jpg)';
});

color_picker.addEventListener('click', () => {
	form.classList.toggle('hidden');
});
size_picker.addEventListener('click', () => {
	form2.classList.toggle('hidden');
});
canvas_picker.addEventListener('click', () => {
	canvas_selection.classList.toggle('hidden');
});

fixed.addEventListener(
	'touchmove',
	function(e) {
		e.preventDefault();
	},
	false
);
