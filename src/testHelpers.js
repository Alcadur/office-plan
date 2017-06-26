import sinon from 'sinon';

export function getCanvasContext() {
    return {
        beginPath: function() {},
        moveTo: function() {},
        lineTo: function() {},
        fill: function() {},
        stroke: function() {},
        closePath: function() {},
        clearRect: function() {},
        isPointInPath: function() {},
        bezierCurveTo: function() {}
    }
}

export function getShapeMock(path = []) {
    return {
        path,
        draw: function() {},
        moveBy: function() {},
        addPoint: function() {},
        get: function(index) { return this.path[index]; }
    }
}

export function drawableObjectFactory() {
    return {
        draw: sinon.stub(),
        drawShape: sinon.stub(),
        getPoint: sinon.stub()
    };
}