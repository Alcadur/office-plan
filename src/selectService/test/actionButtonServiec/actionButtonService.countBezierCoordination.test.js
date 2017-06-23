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
    });
});