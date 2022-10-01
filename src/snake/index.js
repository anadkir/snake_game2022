import {Point, view} from 'paper'
import Cell from './cell'
import * as paper from "paper";

export class Snake{
    constructor(initialSize) {
        this.initialSize = initialSize
        this.cells = []
        this.direction = "right"
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
    onFrame(event){
        console.log(event)
        for (let i = 0; i < this.cells.length; i++) {
            const item = this.cells[i]
            item.position = item.position.add([1, 0])
            if (view) return
        }
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
