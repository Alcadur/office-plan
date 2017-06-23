import actionButtonService from './actionButtonService';

export default class ActionButton {

    constructor(startPoint, endPoint) {
        this.offset = {
            x: 20,
            y: 30
        };

        Object.defineProperties(this, {
            start: {
                value: Object.assign({}, startPoint),
                enumerable: true
            },
            end: {
                value: Object.assign({}, endPoint),
                enumerable: true
            }
        });

        //this.direction = this._countDirection();
        //this.firstBorderPoints = this._bezierCoordinatePoints(startPoint);
        //this.secondBorderPoints = this._bezierCoordinatePoints(endPoint);
    }


    draw() {

    }
}
