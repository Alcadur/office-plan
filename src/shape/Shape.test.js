import Shape from './Shape';
import { getCanvasContext } from '../testHelpers';

describe('Shape', function() {
    const POINT_1 = { x: 2, y: 2 };
    const POINT_2 = { x: 5, y: 5 };
    const POINT_3 = { x: 2, y: 5 };
    let shape;

    beforeEach(function() {
        shape = new Shape();
    });

    describe('constructor', function() {
        //TODO constructor tests || remove describe
    });

    describe('addPoint', function() {
        it('should add shape path points and return shape', function() {
            shape.addPoint(POINT_1.x, POINT_1.y)
                .addPoint(POINT_2.x, POINT_2.y)
                .addPoint(POINT_3.x, POINT_3.y);

            expect(shape.path).to.be.eql([POINT_1, POINT_2, POINT_3])
        });
    });

    describe('draw', function() {
        let canvasContext;

        beforeEach(function() {
            canvasContext = sinon.stub(getCanvasContext());
        });

        it('should beginPth and move to start position (first point in path)', function() {
            shape.path = [POINT_3, POINT_2];

            shape.draw(canvasContext);

            expect(canvasContext.beginPath).to.have.been.called;
            expect(canvasContext.moveTo).to.have.been.calledWith(POINT_3.x, POINT_3.y);
        });

        it('should not change path property', function() {
            shape.path = [POINT_1, POINT_2, POINT_3];

            shape.draw(canvasContext);

            expect(shape.path).to.have.lengthOf(3);
            expect(shape.path).to.be.eql([POINT_1, POINT_2, POINT_3]);
        });

        it('should draw line between all path point', function() {
            shape.path = [POINT_1, POINT_2, POINT_3];

            shape.draw(canvasContext);

            expect(canvasContext.lineTo.getCall(0)).to.have.been.calledWith(POINT_2.x, POINT_2.y);
            expect(canvasContext.lineTo.getCall(1)).to.have.been.calledWith(POINT_3.x, POINT_3.y);
        });

        it('should close path after draw line to last path point', function() {
            shape.path = [POINT_1, POINT_2, POINT_3];

            shape.draw(canvasContext);

            expect(canvasContext.closePath).to.have.been.called;
        });
    });

    describe('moveBy', function() {
        it('should recalculate all coordinates by vector', function() {
            const MOVE_BY_VECTOR = { x: 2, y: 7 };
            shape.path = [copy(POINT_1), copy(POINT_2), copy(POINT_3)];

            shape.moveBy(MOVE_BY_VECTOR);

            expect(shape.path[0]).to.have.been.eql({ x: POINT_1.x + MOVE_BY_VECTOR.x, y: POINT_1.y + MOVE_BY_VECTOR.y});
            expect(shape.path[1]).to.have.been.eql({ x: POINT_2.x + MOVE_BY_VECTOR.x, y: POINT_2.y + MOVE_BY_VECTOR.y});
            expect(shape.path[2]).to.have.been.eql({ x: POINT_3.x + MOVE_BY_VECTOR.x, y: POINT_3.y + MOVE_BY_VECTOR.y});
        });

        function copy(obj) {
            return Object.assign({}, obj);
        }
    });
});