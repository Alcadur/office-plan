import BEZIER_BORDER from '../../BEZIER_BORDER';
import beforeEachHelper from './beforeEachHelper'

describe('actionButtonService', function() {
    let actionButtonService;
    let startPoint;

    beforeEach(function() {
        ({ actionButtonService, startPoint } = beforeEachHelper())
    });

    describe('countBezier[RIGHT_TOP]', function() {
        it('should count start bezier coordination point for first (top) border for right direction', function() {
            const result = actionButtonService.countBezierCoordination(startPoint, BEZIER_BORDER.RIGHT_TOP);

            expect(result.start.x).to.be.equal(startPoint.x, 'x');
            expect(result.start.y).to.be.equal(startPoint.y, 'y');
        });

        it('should count first bezier coordination point for first (top) border for right direction', function() {
            const result = actionButtonService.countBezierCoordination(startPoint, BEZIER_BORDER.RIGHT_TOP);

            expect(result.firstBezierPoint.x).to.be.equal(startPoint.x, 'x');
            expect(result.firstBezierPoint.y).to.be.equal(startPoint.y + actionButtonService.BEZIER_WIDTH, 'y');
        });

        it('should count second bezier coordination point for first (top) border for right direction', function() {
            const result = actionButtonService.countBezierCoordination(startPoint, BEZIER_BORDER.RIGHT_TOP);

            expect(result.secondBezierPoint.x).to.be.equal(startPoint.x + actionButtonService.BEZIER_HEIGHT, 'x');
            expect(result.secondBezierPoint.y).to.be.equal(startPoint.y, 'y');
        });

        it('should count end bezier coordination point for first (top) border for right direction', function() {
            const result = actionButtonService.countBezierCoordination(startPoint, BEZIER_BORDER.RIGHT_TOP);

            expect(result.end.x).to.be.equal(startPoint.x + actionButtonService.BEZIER_HEIGHT, 'x');
            expect(result.end.y).to.be.equal(startPoint.y + actionButtonService.BEZIER_WIDTH, 'y');
        });
    });
});