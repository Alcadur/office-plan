import beforeEachHelper from './beforeEachHelper';
import afterEachHelper from './afterEachHelper';
import * as helpers from '../../testHelpers';

describe('Canvas', function() {
    let canvasNode;
    let canvas;

    beforeEach(function() {
        [canvas, canvasNode] = beforeEachHelper();
    });

    afterEach(function() {
        afterEachHelper(canvasNode);
    });

    describe('draw', function() {
        beforeEach(function() {
            canvas.context = sinon.stub(helpers.getCanvasContext());
        });

        it('should clear draw area before draw elements', function() {
            canvas.draw();

            expect(canvas.context.clearRect).to.have.been.calledWith(0, 0, canvas.node.width, canvas.node.height);
        });

        it('should render each element in elements array', function() {
            const obj1 = helpers.drawableObjectFactory();
            const obj2 = helpers.drawableObjectFactory();
            const obj3 = helpers.drawableObjectFactory();
            canvas.elements = [obj1, obj2, obj3];

            canvas.draw();

            expect(obj1.draw).to.have.been.calledWith(canvas.context);
            expect(obj2.draw).to.have.been.calledWith(canvas.context);
            expect(obj3.draw).to.have.been.calledWith(canvas.context);
        });

        it('should render each element in static elements array', function() {
            const obj1 = helpers.drawableObjectFactory();
            const obj2 = helpers.drawableObjectFactory();
            const obj3 = helpers.drawableObjectFactory();
            canvas.staticElements = [obj1, obj2, obj3];

            canvas.draw();

            expect(obj1.draw).to.have.been.calledWith(canvas.context);
            expect(obj2.draw).to.have.been.calledWith(canvas.context);
            expect(obj3.draw).to.have.been.calledWith(canvas.context);
        });

        it('should return canvas object', function() {
            const result = canvas.draw();

            expect(result).to.be.equal(canvas);
        });
    });
});