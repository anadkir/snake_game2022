import "./main.sass"
import paper from "paper"
import './paper-loader'
import gsap from 'gsap'
import {Snake} from './snake'

let rect = new paper.Path.Rectangle({
    point: [0, 0],
    size: [paper.view.size.width, paper.view.size.height],
    strokeColor: 'white',
    selected: true
});
rect.sendToBack()
rect.fillColor = '#b3d4fc'

const snake = new Snake(10)

// Create a Paper.js Path to draw a line into it:
let path = new paper.Path.Circle(new paper.Point(100, 150), 30);
path.fillColor = '#3aaa35'
path.strokeColor = '#008d36'
path.strokeWidth = 1

paper.view.onFrame = function (event) {
    snake.onFrame(event)
}

paper.view.draw();
