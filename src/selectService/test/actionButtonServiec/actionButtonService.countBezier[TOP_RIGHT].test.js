import BEZIER_BORDER from '../../BEZIER_BORDER';
import beforeEachHelper from './beforeEachHelper'

describe('actionButtonService', function() {
    let actionButtonService;
    let startPoint;

    beforeEach(function() {
        ({ actionButtonService, startPoint } = beforeEachHelper())
    });

    describe('countBezier[TOP_RIGHT]', function() {
        it('should count start bezier coordination point for second (right) border for top direction', function() {
            const result = actionButtonService.countBezierCoordination(startPoint, BEZIER_BORDER.TOP_RIGHT);

            expect(result.start.x).to.be.equal(startPoint.x, 'x');
            expect(result.start.y).to.be.equal(startPoint.y, 'y');
        });

        it('should count first bezier coordination point for second (right) border for top direction', function() {
            const result = actionButtonService.countBezierCoordination(startPoint, BEZIER_BORDER.TOP_RIGHT);

            expect(result.firstBezierPoint.x).to.be.equal(startPoint.x - actionButtonService.BEZIER_WIDTH, 'x');
            expect(result.firstBezierPoint.y).to.be.equal(startPoint.y, 'y');
        });

        it('should count second bezier coordination point for second (right) border for top direction', function() {
            const result = actionButtonService.countBezierCoordination(startPoint, BEZIER_BORDER.TOP_RIGHT);

            expect(result.secondBezierPoint.x).to.be.equal(startPoint.x, 'x');
            expect(result.secondBezierPoint.y).to.be.equal(startPoint.y - actionButtonService.BEZIER_HEIGHT, 'y');
        });

        it('should count end bezier coordination point for second (right) border for top direction', function() {
            const result = actionButtonService.countBezierCoordination(startPoint, BEZIER_BORDER.TOP_RIGHT);

            expect(result.end.x).to.be.equal(startPoint.x - actionButtonService.BEZIER_WIDTH, 'x');
            expect(result.end.y).to.be.equal(startPoint.y - actionButtonService.BEZIER_HEIGHT, 'y');
        });
    });
});