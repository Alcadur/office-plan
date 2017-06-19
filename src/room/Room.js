let nextId = 1;

export default class Room {
    constructor(shape) {
        this.id = nextId++;
        this.lineWidth = 5;
        this.fillColor = '#929292';
        this.strokeColor = '#ffffff';
        this.shape = shape;
    }

    draw(context) {
        context.strokeStyle = this.strokeColor;
        context.fillStyle = this.fillColor;

        this.shape.draw(context);

        context.lineWidth = this.lineWidth;
        context.stroke();
        context.fill();

        return this;
    }

    drawShape(context) {
        this.shape.draw(context);
    }

    addPoint(x, y) {
        this.shape.addPoint(x, y);
        return this;
    }

    moveBy(x, y) {
        this.shape.moveBy({ x, y });
        return this;
    }
}