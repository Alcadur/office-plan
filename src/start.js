import Canvas from './canvas/Canvas';
import roomfactory from './room/roomFactory';

const canvas = new Canvas('#plan');
canvas.fitToWindow();

canvas.addElement(roomfactory()
        .addPoint(2, 2)
        .addPoint(100, 2)
        .addPoint(100, 50)
        .addPoint(2, 50))
    .addElement(roomfactory()
        .addPoint(110, 30)
        .addPoint(250, 30)
        .addPoint(250, 150)
        .addPoint(110, 150))
    .draw();



canvas.node.addEventListener('mousedown', function(event) {
    console.log(event);
});