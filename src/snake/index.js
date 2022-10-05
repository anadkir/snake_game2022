import {Point, view} from 'paper'
import Cell from './cell'
import * as paper from "paper";

export class Snake{
    constructor(initialSize) {
        this.initialSize = initialSize
        this.cells = []
        this.direction = "right"
        this.lastTime = 0
        this.init()
        this.initEvents()
    }
    init () {
        for (let i = 0; i < this.initialSize; i++){
            const instance = Cell.place()
            instance.position = new Point(15 * i, 0)
            this.cells.push(instance)
        }
    }
    initEvents () {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowUp'){
                this._up()
            }
            if (e.key === 'ArrowRight'){
                this._right()
            }
            if (e.key === 'ArrowDown'){
                this._down()
            }
            if (e.key === 'ArrowLeft'){
                this._left()
            }
        })
    }
    onFrame(event) {
        let currentTime = parseFloat(event.time);
        let toMove = 30.0 * (currentTime - this.lastTime)
        for (let i = this.cells.length-1; i > -1; --i) {
            const powerImpulse = (this.cells.length - i) + toMove
            const item = this.cells[i]
            if(!this.cells[i].counter) this.cells[i].counter = 0
            if(!this.cells[i].impulse) this.cells[i].impulse = 'right'
            this.cells[i].counter += toMove

            if(this.cells[i].counter > powerImpulse && i === this.cells.length-1) {
                this.cells[i].impulse = this.direction
                this.cells[i].counter = 0
            } else {
                if(this.cells[i].counter > powerImpulse) {
                    this.cells[i].impulse = this.cells[i+1].impulse
                    this.cells[i].counter = 0
                }
            }
            switch (this.cells[i].impulse) {
                case "right":
                    item.position = item.position.add([1, 0])
                    break
                case "left":
                    item.position = item.position.add([-1, 0])
                    break
                case "up":
                    item.position = item.position.add([0, -1])
                    break
                case "down":
                    item.position = item.position.add([0, toMove])
                    break
            }
        }
        this.lastTime = currentTime
    }
    _up() {
        if(this.direction === "down") return
        this.direction = "up"
    }
    _down() {
        if(this.direction === "up") return
        this.direction = "down"
    }
    _left() {
        if(this.direction === "right") return
        this.direction = "left"
    }
    _right() {
        if(this.direction === "left") return
        this.direction = "right"
    }
}
