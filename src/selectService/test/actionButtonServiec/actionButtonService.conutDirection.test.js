import beforeEachHelper from './beforeEachHelper';
import * as statics from '../static'


describe('actionButtonService', function() {
    let actionButtonService;
    let startPoint;
    let endPoint;

    beforeEach(function() {
        ({ actionButtonService, startPoint, endPoint } = beforeEachHelper());
    });

    describe('countDirection', function() {
        it('should calculate button direction (top) based on first and second path points', function() {
            endPoint = { x: startPoint.x + 20, y: startPoint.y };

            const result = actionButtonService.countDirection(startPoint, endPoint);

            expect(result).to.be.eql(statics.TOP_DIRECTION);
        });

        it('should calculate button direction (right) based on first and second path points', function() {
            endPoint = { x: startPoint, y: startPoint.y + 20 };

            const result = actionButtonService.countDirection(startPoint, endPoint);

            expect(result).to.be.eql(statics.RIGHT_DIRECTION);
        });

        it('should calculate button direction (bottom) based on first and second path points', function() {
            endPoint = { x: startPoint.x - 20, y: startPoint.y };

            const result = actionButtonService.countDirection(startPoint, endPoint);

            expect(result).to.be.eql(statics.BOTTOM_DIRECTION);
        });

        it('should calculate button direction (left) based on first and second path points', function() {
            endPoint = { x: startPoint.x, y: startPoint.y - 20 };

            const result = actionButtonService.countDirection(startPoint, endPoint);

            expect(result).to.be.eql(statics.LEFT_DIRECTION);
        });
    });
});