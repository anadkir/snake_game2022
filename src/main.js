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


const point1 = new paper.Point(100, 150);
const point2 = new paper.Point(300, 200);
const point3 = new paper.Point(500, 150);
const point4 = new paper.Point(700, 200);
const point5 = new paper.Point(900, 150);

// Move to start and draw a line from there
//path.add(point1);
//path.add(point2);
//path.add(point3);
//path.add(point4);
//path.add(point5);


// Timelines, with infinite loop
// Moving Points don't have any effect on the Path, we need to move points of Segments
const tl1 = gsap.timeline({
    onComplete: function () {
        this.restart();
    }
});
tl1.to(path.segments[0].point, 1.5, { y: "+=50", ease: "power1.inOut"});
tl1.to(path.segments[0].point, 1.5, { y: "-=50", ease: "power1.inOut"});

const tl2 = gsap.timeline({
    delay: 0.75,
    onComplete: function () {
        this.restart();
    }
});
tl2.to(path.segments[1].point, 1.5, { y: "-=50", ease: "power1.inOut"});
tl2.to(path.segments[1].point, 1.5, { y: "+=50", ease: "power1.inOut"});

const tl3 = gsap.timeline({
    delay: 1.5,
    onComplete: function () {
        this.restart();
    }
});
tl3.to(path.segments[2].point, 1.5, { y: "+=50", ease: "power1.inOut"});
tl3.to(path.segments[2].point, 1.5, { y: "-=50", ease: "power1.inOut"});


const tl4 = gsap.timeline({
    delay: 2.25,
    onComplete: function () {
        this.restart();
    }
});
tl4.to(path.segments[3].point, 1.5, { y: "-=50", ease: "power1.inOut"});
tl4.to(path.segments[3].point, 1.5, { y: "+=50", ease: "power1.inOut"});

const tl5 = gsap.timeline({
    delay: 3,
    onComplete: function () {
        this.restart();
    }
});
//tl5.to(path.segments[4].point, 1.5, { y: "+=50", ease: "power1.inOut"});
//tl5.to(path.segments[4].point, 1.5, { y: "-=50", ease: "power1.inOut"});

paper.view.onFrame = function (event) {
    snake.onFrame(event)
}


paper.view.draw();
