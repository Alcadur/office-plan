import beforeEachHelper from './beforeEachHelper';
import * as statics from './static';
import { getCanvasContext } from '../../testHelpers';

describe('Shape', function() {
    let shape;

    beforeEach(function() {
        ({ shape } = beforeEachHelper());
    });


    describe('draw', function() {
        let canvasContext;

        beforeEach(function() {
            canvasContext = sinon.stub(getCanvasContext());
        });

        it('should beginPth and move to start position (first point in path)', function() {
            shape.path = [statics.POINT_3, statics.POINT_2];

            shape.draw(canvasContext);

            expect(canvasContext.beginPath).to.have.been.called;
            expect(canvasContext.moveTo).to.have.been.calledWith(statics.POINT_3.x, statics.POINT_3.y);
        });

        it('should not change path property', function() {
            shape.path = [statics.POINT_1, statics.POINT_2, statics.POINT_3];

            shape.draw(canvasContext);

            expect(shape.path).to.have.lengthOf(3);
            expect(shape.path).to.be.eql([statics.POINT_1, statics.POINT_2, statics.POINT_3]);
        });

        it('should draw line between all path point', function() {
            shape.path = [statics.POINT_1, statics.POINT_2, statics.POINT_3];

            shape.draw(canvasContext);

            expect(canvasContext.lineTo.getCall(0)).to.have.been.calledWith(statics.POINT_2.x, statics.POINT_2.y);
            expect(canvasContext.lineTo.getCall(1)).to.have.been.calledWith(statics.POINT_3.x, statics.POINT_3.y);
        });

        it('should close path after draw line to last path point', function() {
            shape.path = [statics.POINT_1, statics.POINT_2, statics.POINT_3];

            shape.draw(canvasContext);

            expect(canvasContext.closePath).to.have.been.called;
        });
    });
});