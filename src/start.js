import Canvas from './canvas/Canvas';
import roomFactory from './room/roomFactory';
import selectedService from './selectService/selectService';

const HALF_START_WIDTH = 100;
const HALF_START_HEIGHT = 50;
const HALF_WINDOW_WIDTH = window.innerWidth / 2;
const HALF_WINDOW_HEIGHT = window.innerHeight / 2;
const P1 = { x: HALF_WINDOW_WIDTH - HALF_START_WIDTH, y: HALF_WINDOW_HEIGHT - HALF_START_HEIGHT };
const P2 = { x: HALF_WINDOW_WIDTH + HALF_START_WIDTH, y: HALF_WINDOW_HEIGHT - HALF_START_HEIGHT };
const P3 = { x: HALF_WINDOW_WIDTH + HALF_START_WIDTH, y: HALF_WINDOW_HEIGHT + HALF_START_HEIGHT };
const P4 = { x: HALF_WINDOW_WIDTH - HALF_START_WIDTH, y: HALF_WINDOW_HEIGHT + HALF_START_HEIGHT };
const canvas = new Canvas('#plan');
canvas.fitToWindow();

selectedService.setup({ canvasContext: canvas.context });

const firstRoom = roomFactory()
        .addPoint(P1.x, P1.y)
        .addPoint(P2.x, P2.y)
        .addPoint(P3.x, P3.y)
        .addPoint(P4.x, P4.y);

canvas.addElement(firstRoom)
    .draw();

canvas.node.addEventListener('click', function(event) {
    canvas.draw();
    const selectedElement = canvas.findObjByCoordinates(event.layerX, event.layerY);

    selectedService.selectElement(selectedElement);
});