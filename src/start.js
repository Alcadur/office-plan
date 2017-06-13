import Canvas from './canvas/Canvas';

const canvas = new Canvas('#plan');
canvas.fitToWindow();
canvas.drawPath({x: 100, y: 100}, { x: 150, y: 150 });
