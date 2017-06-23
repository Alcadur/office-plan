function getFirstBoardSiteByDirection(direction) {
    if(direction === 'top' || direction === 'bottom') {
        return `${direction}Left`;

    }

    return `${direction}Top`;
}

function getSecondBorderSiteByDirection(direction) {
    if(direction === 'top' || direction === 'bottom') {
        return `${direction}Right`;

    }

    return `${direction}Bottom`;
}

export default class ActionButton {
    constructor(actionButtonService, startPoint, endPoint) {
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

        this.direction = actionButtonService.countDirection(startPoint, endPoint);
        this.firstBorderPoints = actionButtonService.countBezierCoordination(startPoint, getFirstBoardSiteByDirection(this.direction));
        this.secondBorderPoints = actionButtonService.countBezierCoordination(endPoint, getSecondBorderSiteByDirection(this.direction));
    }



    draw() {

    }
}
