function getFirstBoardSiteByDirection(direction) {
    if(direction === 'top' || direction === 'bottom') {
        if(direction === 'top') {
            return `${direction}Left`;
        }

        return `${direction}Right`;
    }

    if(direction === 'right') {
        return `${direction}Top`;
    }

    return `${direction}Bottom`;
}

function getSecondBorderSiteByDirection(direction) {
    if(direction === 'top' || direction === 'bottom') {
        if(direction === 'top') {
            return `${direction}Right`;
        }

        return `${direction}Left`;
    }

    if(direction === 'right') {
        return `${direction}Bottom`;
    }

    return `${direction}Top`;
}

export default class ActionButton {
    constructor(actionButtonService, startPoint, endPoint) {
        this.lineWidth = 5;

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

        this.direction = actionButtonService.countDirection(startPoint, endPoint);
        this.firstBorderPoints = actionButtonService.countBezierCoordination(startPoint, getFirstBoardSiteByDirection(this.direction));
        this.secondBorderPoints = actionButtonService.countBezierCoordination(endPoint, getSecondBorderSiteByDirection(this.direction));
    }

    draw(context) {
        this.drawShape(context);
        //context.lineWidth = 3;
        //context.strokeStyle = 'red';
        //context.fillStyle = 'red';
        context.stroke();
        context.fill();
    }

    drawShape(context) {
        context.beginPath();
        context.moveTo(this.start.x, this.start.y);
        context.bezierCurveTo(...this._splitToBeziertCoverToParameters(this.firstBorderPoints));
        context.lineTo(this.secondBorderPoints.start.x, this.secondBorderPoints.start.y);
        context.bezierCurveTo(...this._splitToBeziertCoverToParameters(this.secondBorderPoints));
        context.closePath();
    }

    _splitToBeziertCoverToParameters(borderPoint) {
        return [borderPoint.firstBezierPoint.x, borderPoint.firstBezierPoint.y, borderPoint.secondBezierPoint.x, borderPoint.secondBezierPoint.y, borderPoint.end.x, borderPoint.end.y]
    }
}
