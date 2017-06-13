export default class Shape {

    constructor() {
        this.path = [];
    }

    addPoint(x, y) {
        this.path.push({ x, y });
        return this;
    }

    draw(context) {
        const _path = [...this.path];
        const firstPoint = _path.shift();
        context.beginPath();
        context.moveTo(firstPoint.x, firstPoint.y);

        this._drawLine(context, _path);
    }

    _drawLine(context, path) {
        if(!path.length) {
            context.closePath();
            return;
        }

        const currentPosition = path.shift();

        context.lineTo(currentPosition.x, currentPosition.y);
        this._drawLine(context, path)
    }
}