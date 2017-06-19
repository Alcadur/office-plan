import Canvas from './canvas/Canvas';
import roomFactory from './room/roomFactory';
import selectedService from './selectService/selectService';

const HALF_START_WIDTH = 100;
const HALF_START_HEIGHT = 50;
const HALF_WINDOW_WIDTH = window.innerWidth / 2;
const HALF_WINDOW_HEIGHT = window.innerHeight / 2;
const P1 = { x: HALF_WINDOW_WIDTH - HALF_START_WIDTH, y: HALF_WINDOW_HEIGHT + HALF_START_HEIGHT };
const P2 = { x: HALF_WINDOW_WIDTH + HALF_START_WIDTH, y: HALF_WINDOW_HEIGHT + HALF_START_HEIGHT };
const P3 = { x: HALF_WINDOW_WIDTH + HALF_START_WIDTH, y: HALF_WINDOW_HEIGHT - HALF_START_HEIGHT };
const P4 = { x: HALF_WINDOW_WIDTH - HALF_START_WIDTH, y: HALF_WINDOW_HEIGHT - HALF_START_HEIGHT };
const canvas = new Canvas('#plan');
canvas.fitToWindow();

selectedService.setup(canvas.context);

const firstRoom = roomFactory()
        .addPoint(P1.x, P1.y)
        .addPoint(P2.x, P2.y)
        .addPoint(P3.x, P3.y)
        .addPoint(P4.x, P4.y);

canvas.addElement(firstRoom)
      .addElement(roomFactory()
      .addPoint(10, 10)
      .addPoint(100, 10)
      .addPoint(100, 100)
      .addPoint(10, 100))
    .draw();

//canvas.node.addEventListener('mousedown', function(event) {
//    console.log(event);
//});

canvas.node.addEventListener('click', function(event) {
    canvas.draw();
    const selectedElement = canvas.findObjByCoordinates(event.layerX, event.layerY);

    selectedService.selectedElement = selectedElement;
    selectedService.draw();
});