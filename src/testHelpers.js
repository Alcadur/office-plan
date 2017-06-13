export function getCanvasContext() {
    return {
        beginPath: function() {},
        moveTo: function() {},
        lineTo: function() {},
        fill: function() {},
        stroke: function() {},
        closePath: function() {},
    }
}

export function getShapeMock() {
    return {
        draw: function() {},
        moveBy: function() {},
        addPoint: function() {}
    }
}