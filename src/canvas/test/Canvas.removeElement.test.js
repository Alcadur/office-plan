import beforeEachHelper from './beforeEachHelper';
import afterEachHelper from './afterEachHelper';
import { drawableObjectFactory } from '../../testHelpers';

describe('Canvas', function() {
    let canvasNode;
    let canvas;
    let element1;
    let element2;
    let element3;

    beforeEach(function() {
        element1 = drawableObjectFactory();
        element2 = drawableObjectFactory();
        element3 = drawableObjectFactory();
        [canvas, canvasNode] = beforeEachHelper();
        canvas.elements = [element1, element2, element3];
    });

    afterEach(function() {
        afterEachHelper(canvasNode);
    });

    describe('removeElement', function() {
        it('should remove first element', function() {
            canvas.removeElement(element1);

            expect(canvas.elements).not.to.contains(element1);
        });

        it('should remove middle element', function() {
            canvas.removeElement(element2);

            expect(canvas.elements).not.to.contains(element2);
        });

        it('should remove last element', function() {
            canvas.removeElement(element3);

            expect(canvas.elements).not.to.contains(element3);
        });

        it('should return self', function() {
            const result = canvas.removeElement(element1);

            expect(result).to.be.equal(canvas);
        });
    });
});