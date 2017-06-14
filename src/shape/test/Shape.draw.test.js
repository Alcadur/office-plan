import Shape from '../Shape';
import { getCanvasContext } from '../../testHelpers';

describe('Shape', function() {
    const POINT_1 = { x: 2, y: 2 };
    const POINT_2 = { x: 5, y: 5 };
    const POINT_3 = { x: 2, y: 5 };
    let shape;

    beforeEach(function() {
        shape = new Shape();
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
});