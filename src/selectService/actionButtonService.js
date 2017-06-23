import BEZIER_BORDER from './BEZIER_BORDER';

export default {
    BEZIER_WIDTH: 20,
    BEZIER_HEIGHT: 30,
    countDirection(startPoint, endPoint) {
        const X_DIFF = startPoint.x - endPoint.x;
        const Y_DIFF = startPoint.y - endPoint.y;

        if(X_DIFF < 0) {
            return 'top'
        }

        if(Y_DIFF < 0) {
            return 'right';
        }

        if(X_DIFF > 0) {
            return 'bottom';
        }

        if(Y_DIFF > 0) {
            return 'left';
        }
    },

    countBezierCoordination(point, bezierBorder) {

        const isDirectionNotExists = this.objectToArray(BEZIER_BORDER).indexOf(bezierBorder) === -1;

        if(isDirectionNotExists) {
            throw new TypeError('Unsupported direction!!');
        }

        return this[`count${bezierBorder}Bezier`](point);
    },
    [`count${BEZIER_BORDER.TOP_LEFT}Bezier`](point) {
        const X_WITH_OFFSET = point.x + this.BEZIER_WIDTH;
        const Y_WITH_OFFSET = point.y - this.BEZIER_HEIGHT;

        return {
            start: point,
            firstBezierPoint: {
                x: X_WITH_OFFSET,
                y: point.y
            },
            secondBezierPoint: {
                x: point.x,
                y: Y_WITH_OFFSET
            },
            end: {
                x: X_WITH_OFFSET,
                y: Y_WITH_OFFSET
            }
        };
    },
    [`count${BEZIER_BORDER.TOP_RIGHT}Bezier`](point) {
        const X_WITH_OFFSET = point.x - this.BEZIER_WIDTH;
        const Y_WITH_OFFSET = point.y - this.BEZIER_HEIGHT;

        return {
            start: point,
            firstBezierPoint: {
                x: X_WITH_OFFSET,
                y: point.y
            },
            secondBezierPoint: {
                x: point.x,
                y: Y_WITH_OFFSET
            },
            end: {
                x: X_WITH_OFFSET,
                y: Y_WITH_OFFSET
            }
        };
    },
    [`count${BEZIER_BORDER.RIGHT_TOP}Bezier`](point) {
        return {
            start: point,
            firstBezierPoint: {
                x: point.x,
                y: point.y + this.BEZIER_WIDTH
            },
            secondBezierPoint: {
                x: point.x + this.BEZIER_HEIGHT,
                y: point.y
            },
            end: {
                x: point.y + this.BEZIER_WIDTH,
                y: point.y + this.BEZIER_HEIGHT
            }
        };
    },
    [`count${BEZIER_BORDER.RIGHT_BOTTOM}Bezier`](point) {
        return {
            start: point,
            firstBezierPoint: {
                x: point.x,
                y: point.y - this.BEZIER_WIDTH
            },
            secondBezierPoint: {
                x: point.x + this.BEZIER_HEIGHT,
                y: point.y
            },
            end: {
                x: point.x + this.BEZIER_HEIGHT,
                y: point.y - this.BEZIER_WIDTH
            }
        };
    },
    [`count${BEZIER_BORDER.BOTTOM_LEFT}Bezier`](point) {
        return {
            start: point,
            firstBezierPoint: {
                x: point.x + this.BEZIER_WIDTH,
                y: point.y
            },
            secondBezierPoint: {
                x: point.x,
                y: point.y + this.BEZIER_HEIGHT
            },
            end: {
                x: point.x + this.BEZIER_WIDTH,
                y: point.y + this.BEZIER_HEIGHT
            }
        };
    },
    [`count${BEZIER_BORDER.BOTTOM_RIGHT}Bezier`](point) {
        return {
            start: point,
            firstBezierPoint: {
                x: point.x - this.BEZIER_WIDTH,
                y: point.y
            },
            secondBezierPoint: {
                x: point.x,
                y: point.y + this.BEZIER_HEIGHT
            },
            end: {
                x: point.x - this.BEZIER_WIDTH,
                y: point.y + this.BEZIER_HEIGHT
            }
        };
    },
    [`count${BEZIER_BORDER.LEFT_TOP}Bezier`](point) {
        return {
            start: point,
            firstBezierPoint: {
                x: point.x,
                y: point.y + this.BEZIER_WIDTH
            },
            secondBezierPoint: {
                x: point.x - this.BEZIER_HEIGHT,
                y: point.y
            },
            end: {
                x: point.x - this.BEZIER_HEIGHT,
                y: point.y + this.BEZIER_WIDTH
            }
        };
    },
    [`count${BEZIER_BORDER.LEFT_BOTTOM}Bezier`](point) {
        return {
            start: point,
            firstBezierPoint: {
                x: point.x,
                y: point.y - this.BEZIER_WIDTH
            },
            secondBezierPoint: {
                x: point.x - this.BEZIER_HEIGHT,
                y: point.y
            },
            end: {
                x: point.x - this.BEZIER_HEIGHT,
                y: point.y - this.BEZIER_WIDTH
            }
        };
    },
    // TODO: write test case
    objectToArray(object) {
        return Object.keys(object).map(function(key) {
            return object[key]
        });
    }
}