import Canvas from '../Canvas';
import * as statics from './static';

export default function() {
    const canvasNode = document.createElement('canvas');
    canvasNode.id = statics.NODE_ID;

    document.body.appendChild(canvasNode);

    const canvas = new Canvas(statics.CANVAS_SELECTOR);
    canvas.context = canvasNode.getContext('2d');

    return [canvas, canvasNode];
}