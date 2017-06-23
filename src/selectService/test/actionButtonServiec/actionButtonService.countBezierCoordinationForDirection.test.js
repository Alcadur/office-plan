import BEZIER_BORDER from '../../BEZIER_BORDER';
import beforeEachHelper from './beforeEachHelper';

describe('actionButtonService', function() {
    let actionButtonService;
    let startPoint;

    beforeEach(function() {
        ({ actionButtonService, startPoint } = beforeEachHelper());

        sinon.stub(actionButtonService, 'objectToArray').returns([
            'topLeft',
            'topRight',
            'rightTop',
            'rightBottom',
            'bottomLeft',
            'bottomRight',
            'leftTop',
            'leftBottom'
        ]);
    });

    afterEach(function() {
        actionButtonService.objectToArray.restore();
    });

    describe('countBezierCoordination', function() {
        it('should throw a error when \'bezierBorder\' will not be from BEZIER_BORDER', function() {
            expect(function() { actionButtonService.countBezierCoordination(startPoint, 'someDirection'); }).to.throw('Unsupported direction!!');
        });

        it('should throw a error when \'bezierBorder\' will be not defined', function() {
            expect(function() { actionButtonService.countBezierCoordination(startPoint); }).to.throw('Unsupported direction!!');
        });
        
        /**
         * first bezier coordination for top
         */
        it('should count start bezier coordination point for first (left) border for top direction', function() {
            const result = actionButtonService.countBezierCoordination(startPoint, BEZIER_BORDER.TOP_LEFT);

            expect(result.start.x).to.be.equal(startPoint.x, 'x');
            expect(result.start.y).to.be.equal(startPoint.y, 'y');
        });

        it('should count first bezier coordination point for first (left) border for top direction', function() {
            const result = actionButtonService.countBezierCoordination(startPoint, BEZIER_BORDER.TOP_LEFT);

            expect(result.firstBezierPoint.x).to.be.equal(startPoint.x + actionButtonService.BEZIER_WIDTH, 'x');
            expect(result.firstBezierPoint.y).to.be.equal(startPoint.y, 'y');
        });

        it('should count second bezier coordination point for first (left) border for top direction', function() {
            const result = actionButtonService.countBezierCoordination(startPoint, BEZIER_BORDER.TOP_LEFT);

            expect(result.secondBezierPoint.x).to.be.equal(startPoint.x, 'x');
            expect(result.secondBezierPoint.y).to.be.equal(startPoint.y - actionButtonService.BEZIER_HEIGHT, 'y');
        });

        it('should count end bezier coordination point for first (left) border for top direction', function() {
            const result = actionButtonService.countBezierCoordination(startPoint, BEZIER_BORDER.TOP_LEFT);

            expect(result.end.x).to.be.equal(startPoint.x + actionButtonService.BEZIER_WIDTH, 'x');
            expect(result.end.y).to.be.equal(startPoint.y - actionButtonService.BEZIER_HEIGHT, 'y');
        });

        /**
         * second bezier coordination for top
         */
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

        /**
         * first bezier coordination for right
         */
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

            expect(result.end.x).to.be.equal(startPoint.x + actionButtonService.BEZIER_WIDTH, 'x');
            expect(result.end.y).to.be.equal(startPoint.y + actionButtonService.BEZIER_HEIGHT, 'y');
        });

        /**
         * second bezier coordination for right
         */
        it('should count start bezier coordination point for second (bottom) border for right direction', function() {
            const result = actionButtonService.countBezierCoordination(startPoint, BEZIER_BORDER.RIGHT_BOTTOM);

            expect(result.start.x).to.be.equal(startPoint.x, 'x');
            expect(result.start.y).to.be.equal(startPoint.y, 'y');
        });

        it('should count first bezier coordination point for second (bottom) border for right direction', function() {
            const result = actionButtonService.countBezierCoordination(startPoint, BEZIER_BORDER.RIGHT_BOTTOM);

            expect(result.firstBezierPoint.x).to.be.equal(startPoint.x, 'x');
            expect(result.firstBezierPoint.y).to.be.equal(startPoint.y - actionButtonService.BEZIER_WIDTH, 'y');
        });

        it('should count second bezier coordination point for second (bottom) border for right direction', function() {
            const result = actionButtonService.countBezierCoordination(startPoint, BEZIER_BORDER.RIGHT_BOTTOM);

            expect(result.secondBezierPoint.x).to.be.equal(startPoint.x + actionButtonService.BEZIER_HEIGHT, 'x');
            expect(result.secondBezierPoint.y).to.be.equal(startPoint.y, 'y');
        });

        it('should count end bezier coordination point for second (bottom) border for right direction', function() {
            const result = actionButtonService.countBezierCoordination(startPoint, BEZIER_BORDER.RIGHT_BOTTOM);

            expect(result.end.x).to.be.equal(startPoint.x + actionButtonService.BEZIER_HEIGHT, 'x');
            expect(result.end.y).to.be.equal(startPoint.y - actionButtonService.BEZIER_WIDTH, 'y');
        });


        /**
         * first bezier coordination for bottom
         */
        it('should count start bezier coordination point for first (left) border for bottom direction', function() {
            const result = actionButtonService.countBezierCoordination(startPoint, BEZIER_BORDER.BOTTOM_LEFT);

            expect(result.start.x).to.be.equal(startPoint.x, 'x');
            expect(result.start.y).to.be.equal(startPoint.y, 'y');
        });

        it('should count first bezier coordination point for first (left) border for bottom direction', function() {
            const result = actionButtonService.countBezierCoordination(startPoint, BEZIER_BORDER.BOTTOM_LEFT);

            expect(result.firstBezierPoint.x).to.be.equal(startPoint.x + actionButtonService.BEZIER_WIDTH, 'x');
            expect(result.firstBezierPoint.y).to.be.equal(startPoint.y, 'y');
        });

        it('should count second bezier coordination point for first (left) border for bottom direction', function() {
            const result = actionButtonService.countBezierCoordination(startPoint, BEZIER_BORDER.BOTTOM_LEFT);

            expect(result.secondBezierPoint.x).to.be.equal(startPoint.x, 'x');
            expect(result.secondBezierPoint.y).to.be.equal(startPoint.y + actionButtonService.BEZIER_HEIGHT, 'y');
        });

        it('should count end bezier coordination point for first (left) border for bottom direction', function() {
            const result = actionButtonService.countBezierCoordination(startPoint, BEZIER_BORDER.BOTTOM_LEFT);

            expect(result.end.x).to.be.equal(startPoint.x + actionButtonService.BEZIER_WIDTH, 'x');
            expect(result.end.y).to.be.equal(startPoint.y + actionButtonService.BEZIER_HEIGHT, 'y');
        });

        /**
         * second bezier coordination for bottom
         */
        it('should count start bezier coordination point for second (right) border for bottom direction', function() {
            const result = actionButtonService.countBezierCoordination(startPoint, BEZIER_BORDER.BOTTOM_RIGHT);

            expect(result.start.x).to.be.equal(startPoint.x, 'x');
            expect(result.start.y).to.be.equal(startPoint.y, 'y');
        });

        it('should count first bezier coordination point for second (right) border for bottom direction', function() {
            const result = actionButtonService.countBezierCoordination(startPoint, BEZIER_BORDER.BOTTOM_RIGHT);

            expect(result.firstBezierPoint.x).to.be.equal(startPoint.x - actionButtonService.BEZIER_WIDTH, 'x');
            expect(result.firstBezierPoint.y).to.be.equal(startPoint.y, 'y');
        });

        it('should count second bezier coordination point for second (right) border for bottom direction', function() {
            const result = actionButtonService.countBezierCoordination(startPoint, BEZIER_BORDER.BOTTOM_RIGHT);

            expect(result.secondBezierPoint.x).to.be.equal(startPoint.x, 'x');
            expect(result.secondBezierPoint.y).to.be.equal(startPoint.y + actionButtonService.BEZIER_HEIGHT, 'y');
        });

        it('should count end bezier coordination point for second (right) border for bottom direction', function() {
            const result = actionButtonService.countBezierCoordination(startPoint, BEZIER_BORDER.BOTTOM_RIGHT);

            expect(result.end.x).to.be.equal(startPoint.x - actionButtonService.BEZIER_WIDTH, 'x');
            expect(result.end.y).to.be.equal(startPoint.y + actionButtonService.BEZIER_HEIGHT, 'y');
        });

        /**
         * first bezier coordination for left
         */
        it('should count start bezier coordination point for first (top) border for left direction', function() {
            const result = actionButtonService.countBezierCoordination(startPoint, BEZIER_BORDER.LEFT_TOP);

            expect(result.start.x).to.be.equal(startPoint.x, 'x');
            expect(result.start.y).to.be.equal(startPoint.y, 'y');
        });

        it('should count first bezier coordination point for first first (top) border for left direction', function() {
            const result = actionButtonService.countBezierCoordination(startPoint, BEZIER_BORDER.LEFT_TOP);

            expect(result.firstBezierPoint.x).to.be.equal(startPoint.x, 'x');
            expect(result.firstBezierPoint.y).to.be.equal(startPoint.y + actionButtonService.BEZIER_WIDTH, 'y');
        });

        it('should count second bezier coordination point for first first (top) border for left direction', function() {
            const result = actionButtonService.countBezierCoordination(startPoint, BEZIER_BORDER.LEFT_TOP);

            expect(result.secondBezierPoint.x).to.be.equal(startPoint.x - actionButtonService.BEZIER_HEIGHT, 'x');
            expect(result.secondBezierPoint.y).to.be.equal(startPoint.y, 'y');
        });

        it('should count end bezier coordination point for first first (top) border for left direction', function() {
            const result = actionButtonService.countBezierCoordination(startPoint, BEZIER_BORDER.LEFT_TOP);

            expect(result.end.x).to.be.equal(startPoint.x - actionButtonService.BEZIER_HEIGHT, 'x');
            expect(result.end.y).to.be.equal(startPoint.y + actionButtonService.BEZIER_WIDTH, 'y');
        });

        /**
         * second bezier coordination for left
         */
        it('should count start bezier coordination point for second (bottom) border for left direction', function() {
            const result = actionButtonService.countBezierCoordination(startPoint, BEZIER_BORDER.LEFT_BOTTOM);

            expect(result.start.x).to.be.equal(startPoint.x, 'x');
            expect(result.start.y).to.be.equal(startPoint.y, 'y');
        });

        it('should count first bezier coordination point for second (bottom) border for left direction', function() {
            const result = actionButtonService.countBezierCoordination(startPoint, BEZIER_BORDER.LEFT_BOTTOM);

            expect(result.firstBezierPoint.x).to.be.equal(startPoint.x, 'x');
            expect(result.firstBezierPoint.y).to.be.equal(startPoint.y - actionButtonService.BEZIER_WIDTH, 'y');
        });

        it('should count second bezier coordination point for second (bottom) border for left direction', function() {
            const result = actionButtonService.countBezierCoordination(startPoint, BEZIER_BORDER.LEFT_BOTTOM);

            expect(result.secondBezierPoint.x).to.be.equal(startPoint.x -  actionButtonService.BEZIER_HEIGHT, 'x');
            expect(result.secondBezierPoint.y).to.be.equal(startPoint.y, 'y');
        });

        it('should count end bezier coordination point for second (bottom) border for left direction', function() {
            const result = actionButtonService.countBezierCoordination(startPoint, BEZIER_BORDER.LEFT_BOTTOM);

            expect(result.end.x).to.be.equal(startPoint.x - actionButtonService.BEZIER_HEIGHT, 'x');
            expect(result.end.y).to.be.equal(startPoint.y - actionButtonService.BEZIER_WIDTH, 'y');
        });
    });
});