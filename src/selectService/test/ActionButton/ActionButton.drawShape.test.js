import beforeEachHelper from './beforeEachHelper';

describe('ActionButton', function() {
    const DIRECTION = 'top';
    let actionButton;
    let canvasContext;
    let startPoint;
    let endPoint;
    let firstBorderPoints;
    let secondBorderPoints;

    beforeEach(function() {
        ({ startPoint, endPoint, actionButton, canvasContext } = beforeEachHelper());

        firstBorderPoints = {
            start: startPoint,
            firstBezierPoint: {
                x: 10,
                y: 20
            },
            secondBezierPoint: {
                x: 30,
                y: 40
            },
            end: {
                x: 50,
                y: 60
            }
        };

        secondBorderPoints = {
            start: endPoint,
            firstBezierPoint: {
                x: 70,
                y: 80
            },
            secondBezierPoint: {
                x: 90,
                y: 100
            },
            end: {
                x: 110,
                y: 120
            }
        };

        actionButton.direction = DIRECTION;
        actionButton.firstBorderPoints = firstBorderPoints;
        actionButton.secondBorderPoints = secondBorderPoints;
    });

    describe('drawShape', function() {
        it('should start path', function() {
            actionButton.drawShape(canvasContext);

            expect(canvasContext.beginPath).to.have.been.called;
        });

        it('should move context to start position', function() {
            actionButton.drawShape(canvasContext);

            expect(canvasContext.moveTo).to.have.been.calledWith(startPoint.x, startPoint.y);
        });

        it('should draw bezier border from start point', function() {
            actionButton.drawShape(canvasContext);

            expect(canvasContext.bezierCurveTo).to.have.been.calledWith(firstBorderPoints.firstBezierPoint.x, firstBorderPoints.firstBezierPoint.y, firstBorderPoints.secondBezierPoint.x, firstBorderPoints.secondBezierPoint.y, firstBorderPoints.end.x, firstBorderPoints.end.y);
        });

        it('should draw line from end of first bezier to start of second bezier border', function() {
            actionButton.drawShape(canvasContext);

            expect(canvasContext.lineTo).to.have.been.calledWith(secondBorderPoints.start.x, secondBorderPoints.start.y);
        });


        it('should draw bezier board for end point', function() {
            actionButton.drawShape(canvasContext);

            expect(canvasContext.bezierCurveTo).to.have.been.calledWith(secondBorderPoints.firstBezierPoint.x, secondBorderPoints.firstBezierPoint.y, secondBorderPoints.secondBezierPoint.x, secondBorderPoints.secondBezierPoint.y, secondBorderPoints.end.x, secondBorderPoints.end.y);
        });

        it('should close path', function() {
            actionButton.drawShape(canvasContext);

            expect(canvasContext.closePath).to.have.been.called;
        });

    });
});