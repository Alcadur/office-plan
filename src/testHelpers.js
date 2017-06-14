import sinon from 'sinon';

export function getCanvasContext() {
    return {
        beginPath: function() {},
        moveTo: function() {},
        lineTo: function() {},
        fill: function() {},
        stroke: function() {},
        closePath: function() {},
        clearRect: function() {}
    }
}

export function getShapeMock() {
    return {
        draw: function() {},
        moveBy: function() {},
        addPoint: function() {}
    }
}

export function drawableObjectFactory() {
    return {
        draw: sinon.stub()
    };
}