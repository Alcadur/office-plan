import Canvas from './canvas/Canvas';
import roomfactory from './room/roomFactory';

const canvas = new Canvas('#plan');
canvas.fitToWindow();
canvas.drawPath({x: 100, y: 100}, { x: 150, y: 150 });

const room = roomfactory();
room.addPoint(2, 2)
    .addPoint(100, 2)
    .addPoint(100, 50)
    .addPoint(2, 50)
    .moveBy(100, 100)
    .draw(canvas.context);

console.log(room)



