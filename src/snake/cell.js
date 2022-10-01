import {Color, Path, Point, SymbolDefinition} from 'paper'

const cell = new Path.Circle(new Point(0,0),30)
cell.fillColor = new Color ('#3aaa35')
cell.strokeColor = new Color ('#008d36')
cell.strokeWidth = 1
export default new SymbolDefinition(cell)
